import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import AnimatedHero from "@/components/AnimatedHero"
import AnimatedSection from "@/components/AnimatedSection"

const services = [
  "Editorial strategy for social and owned channels",
  "Narrative pillars and editorial lines by audience",
  "Goal-driven content planning",
  "Scripts, formats and multichannel distribution",
  "Content operation with method and consistency",
]

const visuals = {
  workingSession:
    "https://images.unsplash.com/photo-1582848891135-32b749439ad4?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800",
  laptopLight:
    "https://images.pexels.com/photos/4492126/pexels-photo-4492126.jpeg?auto=compress&cs=tinysrgb&w=1400",
  notesDesk:
    "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?cs=srgb&dl=pexels-pixabay-261662.jpg&fm=jpg",
}

export const metadata: Metadata = {
  title: "Home",
  description: "Strategic content creation for companies that want to grow with coherence.",
}

export default function EnglishHome() {
  return (
    <main>
      <AnimatedHero locale="en" />

      <AnimatedSection className="py-20 md:py-32 section-padding bg-[var(--tea-surface)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--tea-green)] opacity-[0.04]" />

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 xl:col-span-7">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-8">Tension</p>

            <p className="text-3xl sm:text-4xl md:text-6xl leading-[1.03] font-semibold mb-8 text-[var(--tea-brown)]">
              Not every brand that posts is positioned.
              <br />
              Not every growth is sustainable.
            </p>

            <p className="max-w-2xl text-lg leading-relaxed text-[var(--tea-brown-soft)]">
              If strategy is unclear, content becomes volume without direction. Tea structures narrative, format and
              cadence to transform content into brand perception and business momentum.
            </p>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 lg:justify-self-end w-full">
            <Image
              src={visuals.workingSession}
              alt="Professional working on a laptop"
              width={1000}
              height={1200}
              className="w-full rounded-2xl object-cover min-h-[320px] md:min-h-[420px]"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 md:py-32 section-padding">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">What we do</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-[var(--tea-brown)] mb-6">
              Strategic content creation for companies.
            </h2>
            <p className="text-lg text-[var(--tea-brown-soft)] leading-relaxed max-w-2xl">
              We do not sell isolated aesthetics. We build editorial direction so every piece of content supports
              positioning and creates real value.
            </p>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 w-full">
            <ul className="space-y-4 text-lg text-[var(--tea-brown-soft)]">
              {services.map((service) => (
                <li key={service} className="tea-card px-5 py-4">
                  {service}
                </li>
              ))}
            </ul>

            <Image
              src={visuals.notesDesk}
              alt="Desk with notebook and notes"
              width={1200}
              height={1000}
              className="w-full h-full rounded-2xl object-cover min-h-[300px] md:min-h-[360px]"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding py-20 md:py-24">
        <div className="rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 tea-grid-texture opacity-30" />
          <div className="relative bg-[var(--tea-green)] px-8 py-10 md:px-12 md:py-14 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-cream)]/70 mb-5">Direction</p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl leading-[1.03] text-[var(--tea-cream)] mb-6">
                Growing with coherence is harder than growing fast, and more valuable.
              </h2>
              <p className="text-[var(--tea-cream)]/85 max-w-2xl leading-relaxed mb-8">
                We plan content to build lasting authority, not temporary spikes in reach.
              </p>

              <Link
                href="/en/diagnostico"
                className="inline-block text-center border border-[var(--tea-cream)]/70 text-[var(--tea-cream)] px-6 py-3 text-sm uppercase tracking-[0.14em] hover:bg-[var(--tea-cream)] hover:text-[var(--tea-green)] transition-colors"
              >
                I want to reorganize my content
              </Link>
            </div>

            <div className="lg:col-span-5 w-full">
              <Image
                src={visuals.laptopLight}
                alt="Hands typing on a laptop"
                width={1200}
                height={1500}
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
