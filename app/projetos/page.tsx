import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

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
  headline: string
  body: string
  instagram: string
  logoSrc: string
  logoAlt: string
  logoClassName?: string
  palette: CasePalette
}

const cases: Case[] = [
  {
    id: "delivery",
    brand: "Delivery Much, Carlos Barbosa e Garibaldi",
    headline: "Uma comunidade construída com linguagem, ritmo e presença.",
    body:
      "A estratégia foi além da divulgação: transformamos o Instagram em espaço de pertencimento. Da linha editorial à execução, cada conteúdo foi pensado para aproximar a marca das pessoas e gerar conexão real no dia a dia.",
    instagram: "https://www.instagram.com/deliverymuchbarbosaegaribaldi/",
    logoSrc: "/images/portfolio/delivery-much.png",
    logoAlt: "Logo da Delivery Much",
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
    headline: "Posicionamento e consistência para uma presença digital com afeto.",
    body:
      "Estruturamos a presença digital da Pacco com foco em posicionamento e consistência de linguagem. A direção editorial conecta estética, rotina e proximidade para transformar a comunicação da marca em uma experiência de afeto, relação e pertencimento.",
    instagram: "https://www.instagram.com/paccohomedecorecaffe/",
    logoSrc: "/images/portfolio/pacco-cafe.png",
    logoAlt: "Logo da Pacco Café",
    palette: {
      panelBg: "bg-white",
      panelText: "text-[#3f3024]",
      bodyBg: "bg-white",
      bodyText: "text-[#3f3024]",
      accent: "text-[#7f7568]",
      border: "border-[#e9dfd1]",
    },
    logoClassName: "object-contain scale-[0.82]",
  },
  {
    id: "sirley",
    brand: "Sirley Malhas",
    headline: "Um legado reposicionado com cuidado para uma nova geração.",
    body:
      "Partimos de uma história sólida para construir um novo momento de marca. Narrativa, campanhas e identidade passaram a comunicar afeto e confiança com consistência, fortalecendo vínculos e sustentando crescimento contínuo.",
    instagram: "https://www.instagram.com/sirleymalhas/",
    logoSrc: "/images/portfolio/sirley-malhas.png",
    logoAlt: "Logo da Sirley Malhas",
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
    headline: "Originalidade construída com intenção, não com tendência.",
    body:
      "Desde o início, o direcionamento foi claro: criar uma marca autoral, elegante e coerente com o próprio propósito. Cada escolha foi feita com critério para construir uma presença forte e memorável.",
    instagram: "https://www.instagram.com/atelierdonnak.pt/",
    logoSrc: "/images/portfolio/donna-k.png",
    logoAlt: "Logo da Donna K",
    palette: {
      panelBg: "bg-white",
      panelText: "text-[#3f3024]",
      bodyBg: "bg-white",
      bodyText: "text-[#3f3024]",
      accent: "text-[#7f7568]",
      border: "border-[#e9dfd1]",
    },
    logoClassName: "object-cover scale-[1.22]",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Portfolio de branding e estrategia",
  description:
    "Veja projetos de branding, posicionamento e presenca digital desenvolvidos pela Tea Strategy Studio.",
  path: "/projetos",
  locale: "pt-BR",
})

function CaseLogo({ item }: { item: Case }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={item.logoSrc}
        alt={item.logoAlt}
        fill
        sizes="(min-width: 768px) 40vw, 100vw"
        className={item.logoClassName || "object-contain"}
      />
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
            <div className={`h-[320px] md:h-[360px] p-8 md:p-10 flex items-center justify-center ${item.palette.panelBg} ${item.palette.panelText}`}>
              <CaseLogo item={item} />
            </div>

            <div className={`px-6 md:px-7 py-8 border-t flex-1 ${item.palette.border} ${item.palette.bodyBg} ${item.palette.bodyText}`}>
              <p className={`text-xs uppercase tracking-[0.22em] mb-4 ${item.palette.accent}`}>{item.brand}</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl leading-tight mb-6">{item.headline}</h2>
              <p className="text-base sm:text-lg leading-relaxed">{item.body}</p>
              <a
                href={item.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-[0.85rem] border border-[var(--tea-brown)]/35 px-4 py-2 text-xs uppercase tracking-[0.18em] hover:border-[var(--tea-hover)] hover:text-[var(--tea-hover)] transition-colors"
              >
                Ver Instagram
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
