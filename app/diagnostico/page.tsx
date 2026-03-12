import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import DiagnosticForm from "@/components/DiagnosticForm"

export const metadata: Metadata = buildMetadata({
  title: "Diagnostico de marca",
  description:
    "Inicie a conversa com a Tea Strategy Studio e receba uma direcao estrategica para posicionamento, conteudo e marca.",
  path: "/diagnostico",
  locale: "pt-BR",
})

const outcomes = [
  "Analisamos suas respostas com atenção.",
  "Entramos em contato para agendar nossa primeira conversa.",
  "Você recebe uma direção clara para os próximos passos.",
]

export default function Diagnostico() {
  return (
    <main className="section-padding py-20 md:py-24">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-5">
          <div className="tea-mini-cup-wrap" aria-hidden="true">
            <span className="tea-mini-steam s1" />
            <span className="tea-mini-steam s2" />
            <span className="tea-mini-cup" />
            <span className="tea-mini-plate" />
          </div>

          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-4">O início de tudo.</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl leading-[0.95] text-[var(--tea-brown)] mb-6">
            Toda grande marca começa com uma
            <span className="block tea-script text-[var(--tea-accent)]">boa conversa.</span>
          </h1>

          <p className="text-lg leading-relaxed text-[var(--tea-brown-soft)] mb-6">
            Este é o momento em que paramos, escutamos e entendemos o que a sua marca realmente precisa. Não é um
            formulário, é o primeiro gole.
          </p>

          <p className="text-base leading-relaxed text-[var(--tea-brown-soft)] mb-6">
            Preencha com cuidado. Cada resposta nos ajuda a entender onde você está e para onde sua marca pode ir. A
            partir daqui, cuidamos do resto.
          </p>

          <p className="text-sm uppercase tracking-[0.2em] text-[var(--tea-accent)] mb-3">O que acontece depois:</p>
          <ul className="space-y-3 mb-2">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 text-[var(--tea-brown)] leading-relaxed">
                <span className="mt-[0.48rem] h-2 w-2 rounded-full bg-[var(--tea-accent)] shrink-0" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 w-full">
          <DiagnosticForm locale="pt" />
        </div>
      </div>
    </main>
  )
}
