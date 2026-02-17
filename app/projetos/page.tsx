import type { Metadata } from "next"

type CasePalette = {
  panelBg: string
  panelText: string
  bodyBg: string
  bodyText: string
  accent: string
  border: string
}

type Case = {
  id: "delivery" | "sirley" | "donna"
  brand: string
  headline: string
  body: string
  palette: CasePalette
}

const cases: Case[] = [
  {
    id: "delivery",
    brand: "Delivery Much",
    headline: "Uma marca que não fala com um público, fala com uma comunidade.",
    body:
      "Mais do que divulgar ofertas, a estratégia foi transformar o Instagram em um espaço de pertencimento. A comunicação tem linguagem jovem, dinâmica e próxima, fazendo com que o usuário se sentisse parte do dia a dia da marca, não apenas consumidor, mas participante ativo daquela experiência.",
    palette: {
      panelBg: "bg-[#9b571e]",
      panelText: "text-[var(--tea-cream)]",
      bodyBg: "bg-[#9b571e]",
      bodyText: "text-[var(--tea-cream)]",
      accent: "text-[var(--tea-cream)]/80",
      border: "border-[#b06a30]",
    },
  },
  {
    id: "sirley",
    brand: "Sirley Malhas",
    headline: "Um legado de mais de 30 anos traduzido para uma nova geração.",
    body:
      "A partir de uma história sólida, construímos um reposicionamento voltado ao público infantil, sem perder a essência da marca. Campanhas, narrativa e identidade passaram a comunicar cuidado, afeto e confiança, fortalecendo os laços e impulsionando um crescimento consistente, que hoje se reflete até na expansão física da marca.",
    palette: {
      panelBg: "bg-[#d7d0c5]",
      panelText: "text-[#3f3024]",
      bodyBg: "bg-[#d7d0c5]",
      bodyText: "text-[#3f3024]",
      accent: "text-[#7f7a70]",
      border: "border-[#c2b7a7]",
    },
  },
  {
    id: "donna",
    brand: "Donna K",
    headline: "Originalidade construída com propósito, não com tendências.",
    body:
      "Desde o início, a estratégia foi clara: criar uma marca sólida, autoral e com identidade própria. Nada de fórmulas prontas ou tendências passageiras. Cada decisão foi pensada para construir uma comunicação firme, elegante e alinhada ao propósito da marca. Esse case comunica maturidade e critério, mesmo sendo início.",
    palette: {
      panelBg: "bg-[#f0ebe2]",
      panelText: "text-[#3f3024]",
      bodyBg: "bg-[#efe8de]",
      bodyText: "text-[#3f3024]",
      accent: "text-[#7f7568]",
      border: "border-[#ddd2c3]",
    },
  },
]

export const metadata: Metadata = {
  title: "Projetos",
  description: "Casos e projetos de criação estratégica de conteúdo da Tea.",
}

function CaseLogo({ id }: { id: Case["id"] }) {
  if (id === "delivery") {
    return (
      <div className="text-center">
        <p className="text-5xl md:text-6xl font-semibold lowercase leading-[0.85]">delivery</p>
        <p className="text-5xl md:text-6xl font-semibold lowercase leading-[0.85]">much</p>
        <p className="mt-4 text-xs uppercase tracking-[0.24em] opacity-80">food delivery network</p>
      </div>
    )
  }

  if (id === "sirley") {
    return (
      <div className="text-center">
        <div className="mx-auto mb-5 h-28 w-28 rounded-full border-4 border-[#9ecfc5] flex items-center justify-center">
          <span className="tea-serif-accent text-6xl text-[#9ecfc5]">S</span>
        </div>
        <p className="text-2xl md:text-3xl font-semibold tracking-[-0.01em]">Sirley Malhas</p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <p className="tea-serif-accent text-6xl md:text-7xl tracking-[0.03em]">DONNA K</p>
      <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#7f7568]">Bridal Experience Stylist</p>
    </div>
  )
}

export default function Projetos() {
  return (
    <main className="section-padding py-24 md:py-28">
      <section className="mb-14">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-5">Projetos</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-6">
          Casos reais de criação estratégica de conteúdo.
        </h1>
        <p className="text-lg leading-relaxed text-[var(--tea-brown-soft)] max-w-3xl">
          Cada projeto abaixo foi construído com foco em narrativa, posicionamento editorial e consistência de presença
          para empresas em estágios diferentes de crescimento.
        </p>
      </section>

      <section className="grid lg:grid-cols-3 gap-6 items-stretch">
        {cases.map((item) => (
          <article key={item.brand} className={`rounded-2xl overflow-hidden border ${item.palette.border} h-full flex flex-col`}>
            <div className={`h-[320px] md:h-[360px] px-6 md:px-8 flex items-center justify-center ${item.palette.panelBg} ${item.palette.panelText}`}>
              <CaseLogo id={item.id} />
            </div>

            <div className={`px-6 md:px-7 py-8 border-t flex-1 ${item.palette.border} ${item.palette.bodyBg} ${item.palette.bodyText}`}>
              <p className={`text-xs uppercase tracking-[0.22em] mb-4 ${item.palette.accent}`}>{item.brand}</p>
              <h2 className="text-2xl sm:text-3xl leading-tight mb-6">{item.headline}</h2>
              <p className="text-base sm:text-lg leading-relaxed">{item.body}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
