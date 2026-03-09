import Image from "next/image"
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
  headline: string
  body: string
  instagram: string
  logoSrc: string
  logoAlt: string
  palette: CasePalette
}

const cases: Case[] = [
  {
    id: "delivery",
    brand: "Delivery Much, Carlos Barbosa and Garibaldi",
    headline: "A community built with language, rhythm and presence.",
    body:
      "The strategy went beyond promotion: we transformed Instagram into a space of belonging. From the editorial line to execution, every piece of content was designed to bring the brand closer to people and generate real connection in everyday life.",
    instagram: "https://www.instagram.com/deliverymuchbarbosaegaribaldi/",
    logoSrc: "/images/portfolio/delivery-much.png",
    logoAlt: "Delivery Much logo",
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
    headline: "Positioning and consistency for a digital presence built on warmth.",
    body:
      "We structured Pacco's digital presence with a focus on positioning and consistency of language. The editorial direction connects aesthetics, routine and proximity to turn the brand's communication into an experience of warmth, relationship and belonging.",
    instagram: "https://www.instagram.com/paccohomedecorecaffe/",
    logoSrc: "/images/portfolio/pacco-cafe.png",
    logoAlt: "Pacco Cafe logo",
    palette: {
      panelBg: "bg-white",
      panelText: "text-[#3f3024]",
      bodyBg: "bg-[#ece5da]",
      bodyText: "text-[#3f3024]",
      accent: "text-[#7f7568]",
      border: "border-[#cdbfaa]",
    },
  },
  {
    id: "sirley",
    brand: "Sirley Malhas",
    headline: "A legacy carefully repositioned for a new generation.",
    body:
      "We started from a solid history to build a new brand moment. Narrative, campaigns and identity began to communicate affection and trust consistently, strengthening bonds and sustaining continuous growth.",
    instagram: "https://www.instagram.com/sirleymalhas/",
    logoSrc: "/images/portfolio/sirley-malhas.png",
    logoAlt: "Sirley Malhas logo",
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
    headline: "Originality built with intention, not with trends.",
    body:
      "From the start, the direction was clear: create an authorial, elegant brand consistent with its own purpose. Every choice was made with criteria to build a strong and memorable presence.",
    instagram: "https://www.instagram.com/atelierdonnak.pt/",
    logoSrc: "/images/portfolio/donna-k.png",
    logoAlt: "Donna K logo",
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
  title: "Projects",
  description: "Brands that bloomed.",
}

function CaseLogo({ item }: { item: Case }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={item.logoSrc}
        alt={item.logoAlt}
        fill
        sizes="(min-width: 768px) 40vw, 100vw"
        className="object-contain"
      />
    </div>
  )
}

export default function ProjectsEn() {
  return (
    <main className="section-padding py-24 md:py-28">
      <section className="mb-14">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-5">Portfolio</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-6">
          Brands that bloomed.
        </h1>
        <p className="text-lg leading-relaxed text-[var(--tea-brown-soft)] max-w-3xl">
          Every project is born from an intentional process. From positioning to editorial presence, we structure brands
          to reach their audience with consistency, identity and results.
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
                className="mt-6 inline-block border border-[var(--tea-brown)]/35 px-4 py-2 text-xs uppercase tracking-[0.18em] hover:border-[var(--tea-hover)] hover:text-[var(--tea-hover)] transition-colors"
              >
                View Instagram
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
