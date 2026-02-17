"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

type AnimatedHeroProps = {
  locale?: "pt" | "en"
}

const copy = {
  pt: {
    lineOne: "Estratégia organiza.",
    lineTwo: "Criatividade expressa.",
    impact: "A Tea estrutura as duas.",
    eyebrow: "Conteúdo Estratégico",
    kicker: "Estratégia sem estrutura vira intenção.",
    description:
      "Criamos estratégias de conteúdo para empresas que precisam transformar posicionamento em presença editorial consistente e relevante.",
    cta: "Aplicar para reorganização de conteúdo",
    ctaHref: "/diagnostico",
  },
  en: {
    lineOne: "Strategy organizes.",
    lineTwo: "Creativity expresses.",
    impact: "Tea structures both.",
    eyebrow: "Strategic Content",
    kicker: "Strategy without structure stays intention.",
    description:
      "We build content strategies for companies that need to turn positioning into consistent and relevant editorial presence.",
    cta: "Apply for content reorganization",
    ctaHref: "/en/diagnostico",
  },
} as const

export default function AnimatedHero({ locale = "pt" }: AnimatedHeroProps) {
  const reduceMotion = useReducedMotion()
  const content = copy[locale]

  return (
    <section className="relative min-h-[84vh] md:min-h-[92vh] flex items-center section-padding overflow-hidden">
      <div className="absolute inset-0 bg-[var(--tea-green)]" />
      <div className="absolute inset-0 hero-gradient-shift" />
      <div className="absolute inset-0 hero-grain opacity-65" />

      <div className="relative w-full max-w-[1280px]">
        <motion.h1
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title-lock inline-block max-w-full text-[clamp(1.72rem,8.8vw,6.3rem)] leading-[0.93] font-semibold tracking-[-0.03em] text-[var(--tea-cream)]"
          style={{ width: "max-content" }}
        >
          <span className="hero-line">{content.lineOne}</span>
          <span className="hero-line">{content.lineTwo}</span>
          <span className="hero-line hero-impact tea-serif-accent not-italic text-[var(--tea-cream)]">{content.impact}</span>
        </motion.h1>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-8 md:mt-10 lg:mt-12 grid lg:grid-cols-12 gap-6 lg:gap-10 items-end text-[var(--tea-cream)]"
        >
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.32em] mb-4 text-[var(--tea-cream)]/72">{content.eyebrow}</p>
            <p className="text-sm sm:text-base lg:text-xl leading-relaxed text-[var(--tea-cream)] mb-3">{content.kicker}</p>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-[var(--tea-cream)]/90 max-w-none">{content.description}</p>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end w-full lg:w-auto">
            <Link
              href={content.ctaHref}
              className="inline-block w-full lg:w-auto bg-[var(--tea-cream)] text-[var(--tea-green)] border border-[var(--tea-cream)] px-7 py-4 text-sm tracking-[0.08em] text-center hover:bg-transparent hover:text-[var(--tea-cream)] transition-colors"
            >
              {content.cta}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
