import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre",
  description: "Nossa história: construção intencional, do processo à entrega.",
}

const teaSteps = [
  {
    title: "01 - Colheita - Imersão",
    description: "Entendemos sua marca, seu público e seus objetivos com profundidade.",
  },
  {
    title: "02 - Infusão - Estratégia",
    description: "Desenvolvemos o plano criativo e estratégico para o que a sua marca realmente é.",
  },
  {
    title: "03 - À Mesa - Entrega",
    description: "Sua marca chega ao cliente final com consistência, beleza e resultado.",
  },
  {
    title: "04 - O Chá Preferido - Lembrança",
    description:
      "A entrega é o começo da lembrança. Marcas que ficam são as que foram construídas para ser sentidas. Como um chá preferido, a sua marca passa a ser a primeira escolha - não por acaso, mas por construção.",
  },
]

export default function Sobre() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">Nossa história</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-8">
            Nascemos de um processo intencional.
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-[var(--tea-brown-soft)]">
            <p>
              A Tea Studio não surgiu do acaso. Nasceu de uma jornada de construção - moldada no tempo certo, com o
              propósito certo. Como toda boa história, foi preciso passar pelo processo antes de chegar à entrega.
            </p>
            <p>
              Acreditamos que assim como o chá tem suas etapas - colheita, infusão, entrega - toda marca também tem
              seu método. Nós somos esse processo: guiamos sua marca do início ao florescimento, com estratégia e
              atenção a cada detalhe.
            </p>
            <p>
              Cada decisão criativa é tomada com escuta e precisão - para que a sua marca chegue ao público com
              consistência, identidade e resultado.
            </p>
          </div>

          <div className="tea-card p-6 space-y-4 mt-8 w-full">
            {teaSteps.map((step) => (
              <div key={step.title}>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--tea-accent)] mb-1">{step.title}</p>
                <p className="text-[var(--tea-brown)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <Image
            src="https://images.pexels.com/photos/6957754/pexels-photo-6957754.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Preparação de chá em bule de vidro"
            width={1100}
            height={1400}
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="rounded-2xl object-cover object-bottom w-full h-full min-h-[520px] md:min-h-[660px] lg:min-h-[880px]"
          />
        </div>
      </div>
    </main>
  )
}
