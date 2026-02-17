"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SiteFooter() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  const instagramLabel = isEnglish ? "Instagram" : "Instagram"

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--tea-cream)]/15">
      <div className="absolute inset-0 bg-[var(--tea-green)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--tea-green)] to-[var(--tea-green-soft)] opacity-95" />

      <div className="relative section-padding min-h-20 md:h-24 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-[var(--tea-cream)]">
        <p className="text-xs md:text-sm tracking-[0.14em] uppercase">Tea Strategy Studio 2026</p>

        <div className="flex w-full sm:w-auto flex-wrap max-[430px]:flex-col items-stretch sm:items-center gap-2 sm:gap-3 md:gap-4">
          <Link
            href="https://www.instagram.com/teastudio.co"
            target="_blank"
            rel="noreferrer"
            className="text-xs md:text-sm uppercase tracking-[0.14em] border border-[var(--tea-cream)]/55 px-3 py-2 text-center max-[430px]:w-full hover:bg-[var(--tea-cream)] hover:text-[var(--tea-green)] transition-colors"
          >
            {instagramLabel}
          </Link>

          <Link
            href="mailto:contato@teastrategystudio.com"
            className="text-xs md:text-sm border border-[var(--tea-cream)]/35 px-3 py-2 text-center break-all max-[430px]:w-full hover:bg-[var(--tea-cream)] hover:text-[var(--tea-green)] transition-colors"
          >
            contato@teastrategystudio.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
