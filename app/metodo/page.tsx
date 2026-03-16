import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

const pillars = [
  {
    title: "01: Colheita, Imersão",
    description: "Mapeamos marca, público e objetivos para definir uma direção criativa com base estratégica real.",
  },
  {
    title: "02: Infusão, Estratégia",
    description: "Desenvolvemos o plano criativo e estratégico para o que a sua marca realmente é.",
  },
  {
    title: "03: À Mesa, Entrega",
    description: "Sua marca chega ao público com consistência, beleza e resultado, sem perder a essência no caminho.",
  },
  {
    title: "04: O Chá Preferido, Lembrança",
    description:
      "A entrega é o começo da lembrança. Marcas que ficam são as que foram construídas para ser sentidas. Como um chá preferido, a sua marca passa a ser a primeira escolha, não por acaso, mas por construção.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Metodo de branding e posicionamento",
  description:
    "Entenda o Método Tea da Ottea Studio para construir marcas com pesquisa, estrategia, direcao criativa e entrega.",
  path: "/metodo",
  locale: "pt-BR",
})

export default function Metodo() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-7 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-5">Método Tea</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-6">
              Do <span className="tea-script text-[var(--tea-accent)]">processo</span> à entrega, com direção.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[var(--tea-brown-soft)]">
              Cada marca tem seu método. Nosso trabalho é conduzir cada etapa com escuta e precisão, para que
              estratégia, criatividade e execução avancem no mesmo ritmo, traduzindo o que a sua marca realmente é.
            </p>
          </div>

          <div className="tea-flow-list" aria-label="Etapas do Método Tea">
            {pillars.map((pillar) => (
              <section key={pillar.title} className="tea-flow-item">
                <span className="tea-flow-dot" aria-hidden="true" />
                <h2 className="text-xl sm:text-2xl md:text-3xl mb-3 text-[var(--tea-brown)]">{pillar.title}</h2>
                <p className="text-[var(--tea-brown-soft)] leading-relaxed">{pillar.description}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <div className="relative w-full overflow-hidden rounded-2xl min-h-[340px] md:min-h-[420px] lg:min-h-0 lg:h-full">
            <Image
              src="/images/tea/processo.jpeg"
              alt="Notebook apoiado em assento de couro em ambiente aconchegante"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[50%_88%]"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
