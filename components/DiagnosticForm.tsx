"use client"

import { FormEvent, useState } from "react"

type Status = "idle" | "loading" | "success" | "error"
type Locale = "pt" | "en"

type DiagnosticFormProps = {
  locale?: Locale
}

const copy = {
  pt: {
    labels: {
      name: "Nome",
      email: "Email",
      company: "Empresa",
      website: "Site ou Instagram",
      challenge: "Principal desafio hoje",
      objective: "Objetivo estratégico para os próximos 6 meses",
      urgency: "Urgência",
      budget: "Faixa de investimento",
      trap: "Não preencha",
    },
    placeholders: {
      name: "Seu nome",
      email: "voce@empresa.com",
      company: "Nome da empresa",
      website: "https://...",
      challenge: "Ex.: conteúdos desconectados, falta de linha editorial, baixa consistência de presença...",
      objective: "Ex.: fortalecer autoridade, organizar operação de conteúdo, aumentar conversão dos canais...",
    },
    options: {
      select: "Selecione",
      urgencyImmediate: "Imediata (0-30 dias)",
      urgencyShort: "Curto prazo (1-3 meses)",
      urgencyMedium: "Médio prazo (3-6 meses)",
      budgetA: "Até R$ 5k",
      budgetB: "R$ 5k - R$ 15k",
      budgetC: "R$ 15k - R$ 30k",
      budgetD: "Acima de R$ 30k",
    },
    status: {
      loading: "Enviando sua aplicação...",
      success: "Aplicação enviada com sucesso. Retornaremos em breve.",
      fallbackError: "Falha no envio. Tente novamente em alguns minutos.",
    },
    button: {
      idle: "Aplicar para reorganização de conteúdo",
      loading: "Enviando...",
    },
  },
  en: {
    labels: {
      name: "Name",
      email: "Email",
      company: "Company",
      website: "Website or Instagram",
      challenge: "Main challenge today",
      objective: "Strategic goal for the next 6 months",
      urgency: "Urgency",
      budget: "Investment range",
      trap: "Do not fill in",
    },
    placeholders: {
      name: "Your name",
      email: "you@company.com",
      company: "Company name",
      website: "https://...",
      challenge: "Ex.: disconnected content, no editorial line, low publishing consistency...",
      objective: "Ex.: strengthen authority, organize content operation, increase conversion across channels...",
    },
    options: {
      select: "Select",
      urgencyImmediate: "Immediate (0-30 days)",
      urgencyShort: "Short term (1-3 months)",
      urgencyMedium: "Mid term (3-6 months)",
      budgetA: "Up to R$ 5k",
      budgetB: "R$ 5k - R$ 15k",
      budgetC: "R$ 15k - R$ 30k",
      budgetD: "Above R$ 30k",
    },
    status: {
      loading: "Sending your application...",
      success: "Application submitted successfully. We will get back to you soon.",
      fallbackError: "Submission failed. Try again in a few minutes.",
    },
    button: {
      idle: "Apply for content reorganization",
      loading: "Sending...",
    },
  },
} as const

const initialMessage = ""

export default function DiagnosticForm({ locale = "pt" }: DiagnosticFormProps) {
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState(initialMessage)
  const content = copy[locale]

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setMessage(content.status.loading)

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      locale,
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      website: String(formData.get("website") ?? ""),
      challenge: String(formData.get("challenge") ?? ""),
      objective: String(formData.get("objective") ?? ""),
      urgency: String(formData.get("urgency") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      contactTrap: String(formData.get("contact_trap") ?? ""),
    }

    try {
      const response = await fetch("/api/diagnostico", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = (await response.json()) as { message?: string; error?: string }

      if (!response.ok) {
        throw new Error(result.error || content.status.fallbackError)
      }

      setStatus("success")
      setMessage(result.message || content.status.success)
      form.reset()
    } catch (error) {
      setStatus("error")
      setMessage(error instanceof Error ? error.message : content.status.fallbackError)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5 tea-card p-6 md:p-8">
      <label className="flex flex-col gap-2 text-sm text-[var(--tea-brown)]">
        {content.labels.name}
        <input
          name="name"
          required
          placeholder={content.placeholders.name}
          className="w-full border border-[var(--tea-brown)]/25 bg-[var(--tea-cream)] px-4 py-3 text-base"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm text-[var(--tea-brown)]">
        {content.labels.email}
        <input
          type="email"
          name="email"
          required
          placeholder={content.placeholders.email}
          className="w-full border border-[var(--tea-brown)]/25 bg-[var(--tea-cream)] px-4 py-3 text-base"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm text-[var(--tea-brown)]">
        {content.labels.company}
        <input
          name="company"
          required
          placeholder={content.placeholders.company}
          className="w-full border border-[var(--tea-brown)]/25 bg-[var(--tea-cream)] px-4 py-3 text-base"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm text-[var(--tea-brown)]">
        {content.labels.website}
        <input
          name="website"
          placeholder={content.placeholders.website}
          className="w-full border border-[var(--tea-brown)]/25 bg-[var(--tea-cream)] px-4 py-3 text-base"
        />
      </label>

      <label className="md:col-span-2 flex flex-col gap-2 text-sm text-[var(--tea-brown)]">
        {content.labels.challenge}
        <textarea
          name="challenge"
          required
          rows={4}
          placeholder={content.placeholders.challenge}
          className="w-full border border-[var(--tea-brown)]/25 bg-[var(--tea-cream)] px-4 py-3 text-base"
        />
      </label>

      <label className="md:col-span-2 flex flex-col gap-2 text-sm text-[var(--tea-brown)]">
        {content.labels.objective}
        <textarea
          name="objective"
          required
          rows={3}
          placeholder={content.placeholders.objective}
          className="w-full border border-[var(--tea-brown)]/25 bg-[var(--tea-cream)] px-4 py-3 text-base"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm text-[var(--tea-brown)]">
        {content.labels.urgency}
        <select name="urgency" required className="w-full border border-[var(--tea-brown)]/25 bg-[var(--tea-cream)] px-4 py-3 text-base">
          <option value="">{content.options.select}</option>
          <option value="imediata">{content.options.urgencyImmediate}</option>
          <option value="curto-prazo">{content.options.urgencyShort}</option>
          <option value="medio-prazo">{content.options.urgencyMedium}</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm text-[var(--tea-brown)]">
        {content.labels.budget}
        <select name="budget" required className="w-full border border-[var(--tea-brown)]/25 bg-[var(--tea-cream)] px-4 py-3 text-base">
          <option value="">{content.options.select}</option>
          <option value="ate-5k">{content.options.budgetA}</option>
          <option value="5k-15k">{content.options.budgetB}</option>
          <option value="15k-30k">{content.options.budgetC}</option>
          <option value="30k-plus">{content.options.budgetD}</option>
        </select>
      </label>

      <div className="hidden" aria-hidden="true">
        <label>
          {content.labels.trap}
          <input type="text" name="contact_trap" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[var(--tea-green)] text-[var(--tea-cream)] border border-[var(--tea-green)] px-8 py-4 text-sm uppercase tracking-[0.14em] hover:bg-transparent hover:text-[var(--tea-green)] transition-colors disabled:opacity-60"
        >
          {status === "loading" ? content.button.loading : content.button.idle}
        </button>

        <p className={`text-sm ${status === "error" ? "text-red-700" : "text-[var(--tea-brown-soft)]"}`} aria-live="polite">
          {message}
        </p>
      </div>
    </form>
  )
}
