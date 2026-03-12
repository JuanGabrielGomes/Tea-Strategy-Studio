"use client"

import { FormEvent, useState } from "react"

type Status = "idle" | "loading" | "success" | "error"
type Locale = "pt" | "en"

type DiagnosticFormProps = {
  locale?: Locale
}

const copy = {
  pt: {
    intro: {
      title: "Agora é com você.",
      subtitle:
        "Preencha com cuidado. Cada resposta nos ajuda a entender onde você está e para onde sua marca pode ir.",
    },
    labels: {
      name: "Nome",
      email: "E-mail",
      company: "Empresa",
      website: "Site ou Instagram",
      challenge: "O que mais tem desafiado sua marca hoje?",
      objective: "Qual tipo de projeto você busca?",
      urgency: "Quando você quer começar?",
      budget: "Qual faixa de investimento você imagina para este projeto?",
      trap: "Não preencha",
    },
    placeholders: {
      name: "Seu nome",
      email: "voce@empresa.com",
      company: "Nome da empresa",
      website: "https://...",
      challenge: "Ex.: conteúdos desconectados, falta de linha editorial, baixa consistência de presença...",
    },
    options: {
      select: "Selecione",
      objectiveA: "Diagnóstico e direcionamento estratégico",
      objectiveB: "Estruturação de marca e posicionamento",
      objectiveC: "Estratégia + execução de conteúdo",
      objectiveD: "Gestão estratégica completa",
      urgencyImmediate: "Imediata (0 a 30 dias)",
      urgencyShort: "Curto prazo (1 a 3 meses)",
      urgencyMedium: "Médio prazo (3 a 6 meses)",
      budgetA: "Entre R$ 5.000 e R$ 10.000",
      budgetB: "Entre R$ 10.000 e R$ 20.000",
      budgetC: "Entre R$ 20.000 e R$ 40.000",
      budgetD: "Acima de R$ 40.000",
      budgetE: "Prefiro entender primeiro o escopo",
    },
    status: {
      loading: "Preparando seu primeiro passo...",
      success: "Recebemos suas respostas. Em breve marcamos nossa primeira conversa.",
      fallbackError: "Falha no envio. Tente novamente em alguns minutos.",
    },
    button: {
      idle: "Quero iniciar minha jornada ->",
      loading: "Enviando...",
    },
  },
  en: {
    intro: {
      title: "Now it is your turn.",
      subtitle: "Fill this in with care. Each answer helps us understand where you are and where your brand can go.",
    },
    labels: {
      name: "Name",
      email: "E-mail",
      company: "Company",
      website: "Website or Instagram",
      challenge: "What has been your brand's biggest challenge lately?",
      objective: "What type of project are you looking for?",
      urgency: "When would you like to start?",
      budget: "What investment range do you have in mind for this project?",
      trap: "Do not fill in",
    },
    placeholders: {
      name: "Your name",
      email: "you@company.com",
      company: "Company name",
      website: "https://...",
      challenge: "Ex.: disconnected content, no editorial line, low publishing consistency...",
    },
    options: {
      select: "Select",
      objectiveA: "Strategic diagnosis and direction",
      objectiveB: "Brand structuring and positioning",
      objectiveC: "Strategy + content execution",
      objectiveD: "Complete strategic management",
      urgencyImmediate: "Immediate (0 to 30 days)",
      urgencyShort: "Short term (1 to 3 months)",
      urgencyMedium: "Medium term (3 to 6 months)",
      budgetA: "Between R$ 5,000 and R$ 10,000",
      budgetB: "Between R$ 10,000 and R$ 20,000",
      budgetC: "Between R$ 20,000 and R$ 40,000",
      budgetD: "Above R$ 40,000",
      budgetE: "I prefer to understand the scope first",
    },
    status: {
      loading: "Preparing your first step...",
      success: "We received your answers. We will soon schedule our first conversation.",
      fallbackError: "Submission failed. Try again in a few minutes.",
    },
    button: {
      idle: "I want to begin my journey ->",
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
    <form onSubmit={handleSubmit} className="diagnostic-shell">
      <div className="diagnostic-head">
        <h2 className="diagnostic-title">{content.intro.title}</h2>
        <p className="diagnostic-subtitle">{content.intro.subtitle}</p>
      </div>

      <div className="diagnostic-grid">
        <label className="diagnostic-label">
          {content.labels.name}
          <input
            name="name"
            required
            placeholder={content.placeholders.name}
            className="diagnostic-input"
          />
        </label>

        <label className="diagnostic-label">
          {content.labels.email}
          <input
            type="email"
            name="email"
            required
            placeholder={content.placeholders.email}
            className="diagnostic-input"
          />
        </label>

        <label className="diagnostic-label">
          {content.labels.company}
          <input
            name="company"
            required
            placeholder={content.placeholders.company}
            className="diagnostic-input"
          />
        </label>

        <label className="diagnostic-label">
          {content.labels.website}
          <input
            name="website"
            placeholder={content.placeholders.website}
            className="diagnostic-input"
          />
        </label>

        <label className="diagnostic-label md:col-span-2">
          {content.labels.challenge}
          <textarea
            name="challenge"
            required
            rows={3}
            placeholder={content.placeholders.challenge}
            className="diagnostic-input"
          />
        </label>

        <label className="diagnostic-label md:col-span-2">
          {content.labels.objective}
          <select name="objective" required className="diagnostic-input" defaultValue="">
            <option value="">{content.options.select}</option>
            <option value="diagnostico-direcionamento">{content.options.objectiveA}</option>
            <option value="marca-posicionamento">{content.options.objectiveB}</option>
            <option value="estrategia-conteudo">{content.options.objectiveC}</option>
            <option value="gestao-estrategica">{content.options.objectiveD}</option>
          </select>
        </label>

        <label className="diagnostic-label">
          {content.labels.urgency}
          <select name="urgency" required className="diagnostic-input" defaultValue="">
            <option value="">{content.options.select}</option>
            <option value="imediata">{content.options.urgencyImmediate}</option>
            <option value="curto-prazo">{content.options.urgencyShort}</option>
            <option value="medio-prazo">{content.options.urgencyMedium}</option>
          </select>
        </label>

        <label className="diagnostic-label">
          {content.labels.budget}
          <select name="budget" required className="diagnostic-input" defaultValue="">
            <option value="">{content.options.select}</option>
            <option value="5k-10k">{content.options.budgetA}</option>
            <option value="10k-20k">{content.options.budgetB}</option>
            <option value="20k-40k">{content.options.budgetC}</option>
            <option value="40k-plus">{content.options.budgetD}</option>
            <option value="scope-first">{content.options.budgetE}</option>
          </select>
        </label>
      </div>

      <div className="hidden" aria-hidden="true">
        <label>
          {content.labels.trap}
          <input type="text" name="contact_trap" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="diagnostic-action">
        <button
          type="submit"
          disabled={status === "loading"}
          className="diagnostic-submit"
        >
          {status === "loading" ? content.button.loading : content.button.idle}
        </button>

        <p className={`diagnostic-note ${status === "error" ? "text-red-700" : "text-[var(--tea-brown-soft)]"}`} aria-live="polite">
          {message}
        </p>
      </div>
    </form>
  )
}