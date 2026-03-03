import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre",
  description: "Tea Studio: do processo à entrega, com intenção, estratégia e propósito.",
}

const teaSteps = [
  {
    title: "Colheita - Imersão",
    description: "Entendemos sua marca, seu público e seus objetivos com profundidade.",
  },
  {
    title: "Infusão - Estratégia",
    description: "Desenvolvemos o plano criativo e estratégico com intenção e propósito.",
  },
  {
    title: "À Mesa - Entrega",
    description: "Sua marca chega ao cliente final com consistência, beleza e resultado.",
  },
]

export default function Sobre() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">Nossa história</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-8">
            Nascemos de um processo intencional.
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-[var(--tea-brown-soft)] max-w-3xl">
            <p>
              A Tea Studio não surgiu do acaso. Nasceu de uma jornada de construção moldada no tempo certo, com o
              propósito certo.
            </p>
            <p>
              Assim como o chá passa por etapas de colheita, infusão e entrega, toda marca também tem seu ritual. Nós
              guiamos esse processo do início ao florescimento.
            </p>
            <p>
              Cada decisão criativa é feita com intenção para que sua marca chegue ao público com consistência,
              identidade e resultado.
            </p>
          </div>

          <div className="tea-card p-6 space-y-4 mt-8 max-w-3xl">
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
            height={900}
            className="rounded-2xl object-cover object-bottom w-full h-[360px] md:h-[460px] lg:h-[520px]"
          />
        </div>
      </div>
    </main>
  )
}
