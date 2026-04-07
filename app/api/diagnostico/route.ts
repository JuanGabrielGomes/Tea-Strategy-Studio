import { appendFile, mkdir } from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

type Locale = "pt" | "en"

type LeadPayload = {
  locale: Locale
  name: string
  email: string
  company: string
  website: string
  challenge: string
  objective: string
  urgency: string
  budget: string
  contactTrap: string
}

type LeadRecord = LeadPayload & {
  createdAt: string
  source: string
}

type ForwardResult = {
  channel: "webhook" | "email"
  enabled: boolean
  ok: boolean
  details?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const messages = {
  pt: {
    missingName: "Informe seu nome.",
    invalidEmail: "Informe um email válido.",
    missingCompany: "Informe a marca ou empresa.",
    weakChallenge: "Descreva melhor o desafio principal.",
    weakObjective: "Selecione o tipo de projeto.",
    missingUrgency: "Selecione a urgência.",
    missingBudget: "Selecione a faixa de investimento.",
    successShort: "Aplicação enviada com sucesso.",
    success: "Aplicação enviada com sucesso. Retornaremos em breve.",
    webhookError: "Aplicação recebida, mas houve falha de encaminhamento.",
    forwardingNotConfigured: "Aplicação recebida, mas o encaminhamento de email ainda não foi configurado.",
    unexpected: "Erro inesperado no envio. Tente novamente.",
  },
  en: {
    missingName: "Please enter your name.",
    invalidEmail: "Please enter a valid email.",
    missingCompany: "Please enter your company or brand.",
    weakChallenge: "Please describe your main challenge with more detail.",
    weakObjective: "Please select the project type.",
    missingUrgency: "Please select an urgency level.",
    missingBudget: "Please select an investment range.",
    successShort: "Application submitted successfully.",
    success: "Application submitted successfully. We will get back to you soon.",
    webhookError: "Application received, but forwarding failed.",
    forwardingNotConfigured: "Application received, but email forwarding is not configured yet.",
    unexpected: "Unexpected submission error. Please try again.",
  },
} as const

function sanitize(value: unknown, max = 1200) {
  if (typeof value !== "string") {
    return ""
  }

  return value.trim().slice(0, max)
}

function normalizeLocale(value: string): Locale {
  return value.startsWith("en") ? "en" : "pt"
}

function validate(payload: LeadPayload, locale: Locale) {
  const t = messages[locale]

  if (!payload.name || payload.name.length < 2) return t.missingName
  if (!EMAIL_REGEX.test(payload.email)) return t.invalidEmail
  if (!payload.company || payload.company.length < 2) return t.missingCompany
  if (!payload.challenge || payload.challenge.length < 10) return t.weakChallenge
  if (!payload.objective || payload.objective.length < 3) return t.weakObjective
  if (!payload.urgency) return t.missingUrgency
  if (!payload.budget) return t.missingBudget
  return null
}

function buildLeadEmailText(lead: LeadRecord, locale: Locale) {
  if (locale === "en") {
    return [
      "New lead received from Ottea Studio website",
      "",
      `Date: ${lead.createdAt}`,
      `Source: ${lead.source}`,
      "",
      "Contact",
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Company: ${lead.company}`,
      `Website/Instagram: ${lead.website || "-"}`,
      "",
      "Brand Context",
      `Main challenge: ${lead.challenge}`,
      `Project type: ${lead.objective}`,
      `Urgency: ${lead.urgency}`,
      `Budget range: ${lead.budget}`,
    ].join("\n")
  }

  return [
    "Novo lead recebido pelo site da Ottea Studio",
    "",
    `Data: ${lead.createdAt}`,
    `Origem: ${lead.source}`,
    "",
    "Contato",
    `Nome: ${lead.name}`,
    `Email: ${lead.email}`,
    `Empresa: ${lead.company}`,
    `Site/Instagram: ${lead.website || "-"}`,
    "",
    "Contexto da marca",
    `Principal desafio: ${lead.challenge}`,
    `Tipo de projeto: ${lead.objective}`,
    `Urgencia: ${lead.urgency}`,
    `Faixa de investimento: ${lead.budget}`,
  ].join("\n")
}

async function forwardToClickUp(lead: LeadRecord): Promise<ForwardResult> {
  const apiToken = process.env.CLICKUP_API_TOKEN?.trim()
  const listId = process.env.CLICKUP_LIST_ID?.trim()

  if (!apiToken || !listId) {
    return { channel: "webhook", enabled: false, ok: true as const }
  }

  try {
    const description = [
      `Email: ${lead.email}`,
      `Empresa: ${lead.company}`,
      `Site/Instagram: ${lead.website || "-"}`,
      `Desafio: ${lead.challenge}`,
      `Tipo de projeto: ${lead.objective}`,
      `Urgência: ${lead.urgency}`,
      `Investimento: ${lead.budget}`,
      `Origem: ${lead.source}`,
      `Data: ${lead.createdAt}`,
    ].join("\n")

    const response = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
      method: "POST",
      headers: {
        Authorization: apiToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `Lead: ${lead.name} — ${lead.company}`,
        description,
        status: "NEW LEAD",
        priority: 2,
      }),
    })

    if (response.ok) {
      return { channel: "webhook", enabled: true, ok: true as const }
    }

    const details = await response.text()
    return {
      channel: "webhook",
      enabled: true,
      ok: false as const,
      details: `clickup status=${response.status} body=${details.slice(0, 400)}`,
    }
  } catch (error) {
    return {
      channel: "webhook",
      enabled: true,
      ok: false as const,
      details: error instanceof Error ? error.message : "unknown clickup error",
    }
  }
}

async function forwardToWebhook(lead: LeadRecord): Promise<ForwardResult> {
  const webhookUrl = process.env.TEA_LEADS_WEBHOOK_URL
  if (!webhookUrl) {
    return { channel: "webhook", enabled: false, ok: true as const }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    })

    if (response.ok) {
      return { channel: "webhook", enabled: true, ok: true as const }
    }

    const details = await response.text()
    return {
      channel: "webhook",
      enabled: true,
      ok: false as const,
      details: `status=${response.status} body=${details.slice(0, 400)}`,
    }
  } catch (error) {
    return {
      channel: "webhook",
      enabled: true,
      ok: false as const,
      details: error instanceof Error ? error.message : "unknown fetch error",
    }
  }
}

async function forwardToEmail(lead: LeadRecord, locale: Locale): Promise<ForwardResult> {
  const smtpUser = process.env.TEA_SMTP_USER?.trim()
  const smtpPass = process.env.TEA_SMTP_PASS?.trim()
  const smtpHost = process.env.TEA_SMTP_HOST?.trim() || "smtp.gmail.com"
  const smtpPortInput = Number(process.env.TEA_SMTP_PORT || "465")
  const smtpPort = Number.isFinite(smtpPortInput) && smtpPortInput > 0 ? smtpPortInput : 465
  const smtpSecureValue = process.env.TEA_SMTP_SECURE?.trim().toLowerCase()
  const smtpSecure = smtpSecureValue ? smtpSecureValue === "true" : smtpPort === 465

  const from = process.env.TEA_LEADS_EMAIL_FROM?.trim() || (smtpUser ? `Ottea Studio <${smtpUser}>` : "")
  const toList = (process.env.TEA_LEADS_EMAIL_TO || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)

  if (!smtpUser || !smtpPass || !from || toList.length === 0) {
    return { channel: "email", enabled: false, ok: true as const }
  }

  const subject =
    locale === "en"
      ? `New Ottea lead, ${lead.company}`
      : `Novo lead Ottea, ${lead.company}`

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from,
      to: toList.join(", "),
      subject,
      text: buildLeadEmailText(lead, locale),
      replyTo: lead.email,
    })

    return { channel: "email", enabled: true, ok: true as const }
  } catch (error) {
    return {
      channel: "email",
      enabled: true,
      ok: false as const,
      details: error instanceof Error ? error.message : "unknown fetch error",
    }
  }
}

export async function POST(request: Request) {
  let locale: Locale = "pt"

  try {
    const body = (await request.json()) as Record<string, unknown>
    locale = normalizeLocale(sanitize(body.locale, 8))

    const payload: LeadPayload = {
      locale,
      name: sanitize(body.name, 120),
      email: sanitize(body.email, 160).toLowerCase(),
      company: sanitize(body.company, 180),
      website: sanitize(body.website, 220),
      challenge: sanitize(body.challenge, 1800),
      objective: sanitize(body.objective, 1800),
      urgency: sanitize(body.urgency, 120),
      budget: sanitize(body.budget, 120),
      contactTrap: sanitize(body.contactTrap, 120),
    }

    const t = messages[locale]

    if (payload.contactTrap) {
      return NextResponse.json({ ok: true, message: t.successShort })
    }

    const validationError = validate(payload, locale)
    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 })
    }

    const lead: LeadRecord = {
      ...payload,
      createdAt: new Date().toISOString(),
      source: "site-tea",
    }

    // Local file persistence is optional and must never break submissions
    // in serverless environments (e.g. Vercel).
    const shouldPersistLocally = process.env.TEA_PERSIST_LOCAL_LEADS === "true"
    if (shouldPersistLocally) {
      try {
        const dataFolder = path.join(process.cwd(), "data")
        const filePath = path.join(dataFolder, "diagnostico-leads.ndjson")
        await mkdir(dataFolder, { recursive: true })
        await appendFile(filePath, `${JSON.stringify(lead)}\n`, "utf8")
      } catch (error) {
        console.error("Failed to persist local lead log:", error)
      }
    }

    const [webhookResult, emailResult, clickUpResult] = await Promise.all([forwardToWebhook(lead), forwardToEmail(lead, locale), forwardToClickUp(lead)])
    const forwardingResults = [webhookResult, emailResult, clickUpResult]
    const activeChannels = forwardingResults.filter((item) => item.enabled)
    const atLeastOneChannelSucceeded = activeChannels.some((item) => item.ok)

    if (activeChannels.length === 0) {
      return NextResponse.json({ ok: false, error: t.forwardingNotConfigured }, { status: 503 })
    }

    if (!atLeastOneChannelSucceeded) {
      for (const result of activeChannels) {
        if (!result.ok) {
          console.error(`[diagnostico] ${result.channel} forwarding failed: ${result.details || "no details"}`)
        }
      }
      return NextResponse.json({ ok: false, error: t.webhookError }, { status: 502 })
    }

    for (const result of activeChannels) {
      if (!result.ok) {
        console.error(`[diagnostico] ${result.channel} forwarding failed (non-blocking): ${result.details || "no details"}`)
      }
    }

    return NextResponse.json({ ok: true, message: t.success })
  } catch {
    return NextResponse.json({ ok: false, error: messages[locale].unexpected }, { status: 500 })
  }
}
