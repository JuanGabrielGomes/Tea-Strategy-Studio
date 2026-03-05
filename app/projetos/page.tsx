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
  id: "delivery" | "pacco" | "sirley" | "donna"
  brand: string
  category: string
  headline: string
  body: string
  instagram?: string
  palette: CasePalette
}

const cases: Case[] = [
  {
    id: "delivery",
    brand: "Delivery Much",
    category: "Social Media",
    headline: "Uma comunidade construída com linguagem, ritmo e presença.",
    body:
      "A estratégia foi além da divulgação: transformamos o Instagram em espaço de pertencimento. Da linha editorial à execução, cada conteúdo foi pensado para aproximar a marca das pessoas e gerar conexão real no dia a dia.",
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
    id: "pacco",
    brand: "Pacco Café",
    category: "Conteúdo + Gestão de Instagram",
    headline: "Presença digital acolhedora, consistente e com linguagem autoral.",
    body:
      "Estruturamos a criação de conteúdo e o gerenciamento do Instagram para transformar o perfil em uma vitrine viva da marca. A direção editorial equilibra estética, rotina e proximidade, fortalecendo relacionamento e percepção de valor.",
    instagram: "https://www.instagram.com/paccohomedecorecaffe/",
    palette: {
      panelBg: "bg-[#5f7568]",
      panelText: "text-[#f6f1e9]",
      bodyBg: "bg-[#ece5da]",
      bodyText: "text-[#3f3024]",
      accent: "text-[#7f7568]",
      border: "border-[#cdbfaa]",
    },
  },
  {
    id: "sirley",
    brand: "Sirley Malhas",
    category: "Branding + Social Media",
    headline: "Um legado reposicionado com cuidado para uma nova geração.",
    body:
      "Partimos de uma história sólida para construir um novo momento de marca. Narrativa, campanhas e identidade passaram a comunicar afeto e confiança com consistência, fortalecendo vínculos e sustentando crescimento contínuo.",
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
    category: "Branding",
    headline: "Originalidade construída com intenção, não com tendência.",
    body:
      "Desde o início, o direcionamento foi claro: criar uma marca autoral, elegante e coerente com o próprio propósito. Cada escolha foi feita com critério para construir uma presença forte e memorável.",
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
  description: "Marcas que floresceram.",
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

  if (id === "pacco") {
    return (
      <div className="text-center">
        <p className="text-6xl md:text-7xl leading-[0.9] tracking-[0.02em]">PACCO</p>
        <p className="mt-2 tea-script text-2xl md:text-3xl normal-case tracking-[0.02em]">home decor e caffè</p>
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
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-5">Portfólio</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-6">
          Marcas que floresceram
        </h1>
        <p className="text-lg leading-relaxed text-[var(--tea-brown-soft)] max-w-3xl">
          Cada projeto nasce de um processo intencional. Do posicionamento à presença editorial, estruturamos marcas
          para chegar ao público com consistência, identidade e resultado.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 items-stretch">
        {cases.map((item) => (
          <article key={item.brand} className={`rounded-2xl overflow-hidden border ${item.palette.border} h-full flex flex-col`}>
            <div className={`h-[320px] md:h-[360px] px-6 md:px-8 flex items-center justify-center ${item.palette.panelBg} ${item.palette.panelText}`}>
              <CaseLogo id={item.id} />
            </div>

            <div className={`px-6 md:px-7 py-8 border-t flex-1 ${item.palette.border} ${item.palette.bodyBg} ${item.palette.bodyText}`}>
              <p className={`text-xs uppercase tracking-[0.22em] mb-2 ${item.palette.accent}`}>{item.category}</p>
              <p className={`text-xs uppercase tracking-[0.22em] mb-4 ${item.palette.accent}`}>{item.brand}</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl leading-tight mb-6">{item.headline}</h2>
              <p className="text-base sm:text-lg leading-relaxed">{item.body}</p>
              {item.instagram ? (
                <a
                  href={item.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block border border-[var(--tea-brown)]/35 px-4 py-2 text-xs uppercase tracking-[0.18em] hover:border-[var(--tea-hover)] hover:text-[var(--tea-hover)] transition-colors"
                >
                  Ver Instagram
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
