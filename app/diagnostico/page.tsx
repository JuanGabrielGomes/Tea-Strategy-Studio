import Image from "next/image"
import type { Metadata } from "next"
import DiagnosticForm from "@/components/DiagnosticForm"

export const metadata: Metadata = {
  title: "Diagnóstico de Conteúdo",
  description: "Aplicação para diagnóstico de conteúdo estratégico da Tea.",
}

const outcomes = [
  "Leitura das lacunas entre posicionamento e conteúdo atual.",
  "Direção editorial inicial por objetivo de negócio.",
  "Prioridades práticas para os próximos 90 dias.",
]

export default function Diagnostico() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-5">Diagnóstico</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-7">Diagnóstico de conteúdo estratégico</h1>
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--tea-accent)] mb-7">Direção antes de presença.</p>

          <p className="text-lg leading-relaxed text-[var(--tea-brown-soft)] mb-7 max-w-2xl">
            Este é o primeiro passo para sair da produção reativa e construir uma operação de conteúdo orientada por
            estratégia, consistência e impacto real.
          </p>

          <ul className="space-y-3 mb-8 max-w-2xl">
            {outcomes.map((outcome) => (
              <li key={outcome} className="tea-card px-4 py-3 text-[var(--tea-brown)]">
                {outcome}
              </li>
            ))}
          </ul>

          <Image
            src="https://images.unsplash.com/photo-1582848891135-32b749439ad4?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1600"
            alt="Profissional em sessão de trabalho"
            width={1000}
            height={1200}
            className="rounded-2xl object-cover w-full"
          />
        </div>

        <div className="lg:col-span-7 w-full">
          <DiagnosticForm locale="pt" />
        </div>
      </div>
    </main>
  )
}
