import { appendFile, mkdir } from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"

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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const messages = {
  pt: {
    missingName: "Informe seu nome.",
    invalidEmail: "Informe um email válido.",
    missingCompany: "Informe a marca ou empresa.",
    weakChallenge: "Descreva melhor o desafio principal.",
    weakObjective: "Descreva o objetivo estratégico.",
    missingUrgency: "Selecione a urgência.",
    missingBudget: "Selecione a faixa de investimento.",
    successShort: "Aplicação enviada com sucesso.",
    success: "Aplicação enviada com sucesso. Retornaremos em breve.",
    webhookError: "Aplicação recebida, mas houve falha de encaminhamento.",
    unexpected: "Erro inesperado no envio. Tente novamente.",
  },
  en: {
    missingName: "Please enter your name.",
    invalidEmail: "Please enter a valid email.",
    missingCompany: "Please enter your company or brand.",
    weakChallenge: "Please describe your main challenge with more detail.",
    weakObjective: "Please describe your strategic objective.",
    missingUrgency: "Please select an urgency level.",
    missingBudget: "Please select an investment range.",
    successShort: "Application submitted successfully.",
    success: "Application submitted successfully. We will get back to you soon.",
    webhookError: "Application received, but forwarding failed.",
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
  if (!payload.objective || payload.objective.length < 10) return t.weakObjective
  if (!payload.urgency) return t.missingUrgency
  if (!payload.budget) return t.missingBudget
  return null
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

    const lead = {
      ...payload,
      createdAt: new Date().toISOString(),
      source: "site-tea",
    }

    const dataFolder = path.join(process.cwd(), "data")
    const filePath = path.join(dataFolder, "diagnostico-leads.ndjson")

    await mkdir(dataFolder, { recursive: true })
    await appendFile(filePath, `${JSON.stringify(lead)}\n`, "utf8")

    const webhookUrl = process.env.TEA_LEADS_WEBHOOK_URL
    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lead),
      })

      if (!webhookResponse.ok) {
        return NextResponse.json({ ok: false, error: t.webhookError }, { status: 502 })
      }
    }

    return NextResponse.json({ ok: true, message: t.success })
  } catch {
    return NextResponse.json({ ok: false, error: messages[locale].unexpected }, { status: 500 })
  }
}
