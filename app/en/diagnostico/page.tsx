import Image from "next/image"
import type { Metadata } from "next"
import DiagnosticForm from "@/components/DiagnosticForm"

export const metadata: Metadata = {
  title: "First Conversation",
  description: "Every great brand starts with a good conversation.",
}

const outcomes = [
  "We review your answers carefully.",
  "We contact you to schedule our first conversation.",
  "You receive clear direction for the next steps.",
]

export default function DiagnosticEn() {
  return (
    <main className="section-padding py-20 md:py-24">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--tea-brown)]/12 bg-[var(--tea-surface)] px-5 py-7 md:px-8 md:py-9">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--tea-cream)]/40 to-transparent pointer-events-none" />

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="tea-mini-cup-wrap" aria-hidden="true">
              <span className="tea-mini-steam s1" />
              <span className="tea-mini-steam s2" />
              <span className="tea-mini-cup" />
              <span className="tea-mini-plate" />
            </div>

            <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-4">The beginning of everything.</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl leading-[0.95] text-[var(--tea-brown)] mb-6">
              Every great brand starts with a{" "}
              <span className="tea-script text-[var(--tea-accent)]">good conversation</span>.
            </h1>

            <p className="text-lg leading-relaxed text-[var(--tea-brown-soft)] mb-6">
              This is the moment to pause, listen and understand what your brand truly needs. It is not just a form,
              it is the first sip.
            </p>

            <p className="text-base leading-relaxed text-[var(--tea-brown-soft)] mb-6">
              Fill this with care. Each answer helps us understand where you are and where your brand can go. From
              here, we take care of the rest.
            </p>

            <p className="text-sm uppercase tracking-[0.2em] text-[var(--tea-accent)] mb-3">What happens next:</p>
            <ul className="space-y-3 mb-6">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-[var(--tea-brown)] leading-relaxed">
                  <span className="mt-[0.48rem] h-2 w-2 rounded-full bg-[var(--tea-accent)] shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>

            <Image
              src="/images/tea/mesa-criativa.jpg"
              alt="Creative table setup with laptop and references"
              width={1000}
              height={1200}
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="rounded-2xl object-cover object-[50%_70%] w-full aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3]"
            />
          </div>

          <div className="lg:col-span-7 w-full">
            <DiagnosticForm locale="en" />
          </div>
        </div>
      </section>
    </main>
  )
}
