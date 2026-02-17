import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre",
  description: "A Tea cria estratégia de conteúdo com método, direção e consistência.",
}

const teaSteps = [
  {
    title: "Temperatura",
    description: "Antes de publicar, definimos contexto: objetivo de negócio, público e território editorial.",
  },
  {
    title: "Infusão",
    description: "Conteúdo bom precisa de tempo e método. Estruturamos narrativas, formatos e recorrência.",
  },
  {
    title: "Serviço",
    description: "A entrega final é presença consistente: conteúdo que posiciona, conecta e gera ação.",
  },
]

export default function Sobre() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">Sobre</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-8">Estratégia de conteúdo com calma, método e precisão.</h1>

          <div className="space-y-6 text-lg leading-relaxed text-[var(--tea-brown-soft)] max-w-3xl">
            <p>
              O nome Tea nasce do próprio processo do chá: não é pressa, é preparo. Há temperatura certa, tempo de
              infusão e intenção em cada etapa.
            </p>
            <p>
              Nosso trabalho segue a mesma lógica. Não somos consultoria de imagem de marca. Somos um estúdio de
              criação estratégica de conteúdo para empresas que precisam organizar presença, narrativa e consistência.
            </p>
            <p>
              Quando o processo é bem conduzido, cada conteúdo reforça posicionamento e constrói autoridade com
              continuidade.
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
