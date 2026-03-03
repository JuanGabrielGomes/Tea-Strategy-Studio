import Image from "next/image"
import type { Metadata } from "next"

const pillars = [
  {
    title: "01 - Colheita - Imersão",
    description: "Mapeamos marca, público e objetivos para definir uma direção criativa com base estratégica real.",
  },
  {
    title: "02 - Infusão - Estratégia",
    description: "Desenvolvemos o plano criativo e estratégico para o que a sua marca realmente é.",
  },
  {
    title: "03 - À Mesa - Entrega",
    description: "Sua marca chega ao público com consistência, beleza e resultado - sem perder a essência no caminho.",
  },
  {
    title: "04 - O Chá Preferido - Lembrança",
    description:
      "A entrega é o começo da lembrança. Marcas que ficam são as que foram construídas para ser sentidas. Como um chá preferido, a sua marca passa a ser a primeira escolha - não por acaso, mas por construção.",
  },
]

export const metadata: Metadata = {
  title: "Método",
  description: "Do processo à entrega, com direção e método estratégico.",
}

export default function Metodo() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10 items-start mb-12">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-5">Método Tea</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-6">
            Do processo à entrega, com direção.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--tea-brown-soft)]">
            Cada marca tem seu método. Nosso trabalho é conduzir cada etapa com escuta e precisão - para que
            estratégia, criatividade e execução avancem no mesmo ritmo, para o que a sua marca realmente é.
          </p>
        </div>

        <div className="lg:col-span-5 w-full">
          <Image
            src="https://images.pexels.com/photos/839465/pexels-photo-839465.jpeg?cs=srgb&dl=pexels-freestocks-839465.jpg&fm=jpg"
            alt="Mesa com notebook e planejamento"
            width={1200}
            height={900}
            className="rounded-2xl object-cover w-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {pillars.map((pillar) => (
          <section key={pillar.title} className="tea-card p-7 md:p-8">
            <h2 className="text-2xl md:text-3xl mb-4 text-[var(--tea-brown)]">{pillar.title}</h2>
            <p className="text-[var(--tea-brown-soft)] leading-relaxed">{pillar.description}</p>
          </section>
        ))}
      </div>
    </main>
  )
}