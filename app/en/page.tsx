import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import AnimatedHero from "@/components/AnimatedHero"
import AnimatedSection from "@/components/AnimatedSection"

const services = [
  "Social Media Management with planning, production and publishing.",
  "Visual Identity and Branding from concept to brand guidelines.",
  "Content Strategy to convert, connect and position.",
  "Paid Traffic with campaigns driven by intention and results.",
]

const marqueePhrases = [
  "Every cup, a different story",
  "Slow infusion, lasting results",
  "Served at the right time",
  "Proximity that transforms",
  "Strategy that starts with listening",
]
const marqueeText = marqueePhrases.join("\u00A0\u00A0\u00A0·\u00A0\u00A0\u00A0")

const visuals = {
  laptopLight: "/images/tea/vamos-comecar.jpg",
  notesDesk: "/images/tea/workspace-claro.jpg",
}

export const metadata: Metadata = {
  title: "Home",
  description: "Tea Strategy Studio: branding and strategy from process to delivery.",
}

export default function EnglishHome() {
  return (
    <main>
      <AnimatedHero locale="en" />

      <div className="tea-marquee-bar" role="region" aria-label="Tea Strategy Studio values marquee">
        <div className="tea-marquee-track">
          <span className="tea-marquee-item">{marqueeText}</span>
          <span className="tea-marquee-item">{marqueeText}</span>
        </div>
      </div>

      <AnimatedSection className="py-20 md:py-32 section-padding bg-[var(--tea-surface)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--tea-green)] opacity-[0.04]" />

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 xl:col-span-7">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-8">Our story</p>

            <h2 className="text-2xl sm:text-4xl md:text-6xl leading-[1.03] font-semibold mb-8 text-[var(--tea-brown)]">
              Born from an
              <br />
              <span className="tea-script text-[var(--tea-accent)] text-[1.04em] align-middle">intentional process.</span>
            </h2>

            <div className="max-w-2xl text-lg leading-relaxed text-[var(--tea-brown-soft)] space-y-6">
              <p>
                Tea Strategy Studio didn&apos;t come from chance. It was born from a journey of construction, shaped at the right
                time, with the right purpose. Like every good story, it took going through the process before arriving
                at the delivery.
              </p>
              <p>
                We believe that just like tea has its stages: harvest, infusion, serving, every brand has its own
                method. We are that process: guiding your brand from inception to full bloom, with strategy and care
                for every detail.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 lg:justify-self-end w-full">
            <div className="tea-cup-stage">
              <div className="tea-cup-quote">
                <p>&quot;Just like tea, every brand needs to go through its process: of preparation, of infusion, of delivery.&quot;</p>
                <span>Tea Strategy Studio Manifesto</span>
              </div>

              <div className="tea-cup-stats" aria-label="Tea Strategy Studio indicators">
                <div className="tea-cup-stat">
                  <p className="tea-cup-stat-number">100%</p>
                  <p className="tea-cup-stat-label">Custom strategy</p>
                </div>
                <div className="tea-cup-stat">
                  <p className="tea-cup-stat-number">4</p>
                  <p className="tea-cup-stat-label">Integrated services</p>
                </div>
                <div className="tea-cup-stat">
                  <p className="tea-cup-stat-number">&infin;</p>
                  <p className="tea-cup-stat-label">Creative possibilities</p>
                </div>
                <div className="tea-cup-stat">
                  <p className="tea-cup-stat-number">1</p>
                  <p className="tea-cup-stat-label">Standard: excellence</p>
                </div>
              </div>

              <div className="tea-cup-wrap" aria-hidden="true">
                <div className="tea-steam tea-steam-1" />
                <div className="tea-steam tea-steam-2" />
                <div className="tea-steam tea-steam-3" />
                <div className="tea-cup-rim" />
                <div className="tea-cup-body">
                  <div className="tea-cup-liquid" />
                  <div className="tea-bag-string" />
                  <div className="tea-bag" />
                </div>
                <div className="tea-cup-handle" />
                <div className="tea-cup-saucer" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="servicos-home" className="pt-14 pb-10 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16 section-padding">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">What we do</p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl leading-tight text-[var(--tea-brown)] mb-6">
              <span className="tea-script text-[var(--tea-accent)] text-[1.05em] align-middle">Four fronts</span>, one direction.
            </h2>
            <p className="text-lg text-[var(--tea-brown-soft)] leading-relaxed max-w-2xl">
              We take care of your brand&apos;s presence from process to delivery, integrating strategy, creativity and
              execution to generate consistency, connection and results.
            </p>

            <ol className="tea-service-list" aria-label="Tea Strategy Studio service fronts">
              {services.map((service, index) => (
                <li key={service} className="tea-service-item">
                  <span className="tea-service-number">{String(index + 1).padStart(2, "0")}</span>
                  <p className="tea-service-text">{service}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5 w-full">
            <Image
              src={visuals.notesDesk}
              alt="Warm workspace with wooden desk and creative objects"
              width={1400}
              height={900}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="w-full rounded-2xl object-cover object-[50%_72%] aspect-[4/3] lg:aspect-[5/4]"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24">
        <div className="rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 tea-grid-texture opacity-30" />
          <div className="relative bg-[var(--tea-green)] px-6 py-7 md:px-9 md:py-9 grid lg:grid-cols-12 gap-7 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-cream)]/70 mb-5">Let&apos;s begin</p>
              <h2 className="text-xl sm:text-3xl md:text-5xl leading-[1.03] text-[var(--tea-cream)] mb-6">
                Is your brand ready to{" "}
                <span className="tea-script text-[1.05em] align-middle">infuse</span>?
              </h2>
              <p className="text-[var(--tea-cream)]/85 max-w-2xl leading-relaxed mb-8">
                Every brand has its time. Our job is to ensure that when the moment comes, it arrives with strength,
                identity and purpose at the client&apos;s table.
              </p>

              <Link
                href="/en/diagnostico"
                className="inline-block text-center border border-[var(--tea-cream)]/70 text-[var(--tea-cream)] px-6 py-3 text-sm uppercase tracking-[0.14em] hover:bg-[var(--tea-cream)] hover:text-[var(--tea-green)] transition-colors"
              >
                Start the process
              </Link>
            </div>

            <div className="lg:col-span-5 w-full">
              <Image
                src={visuals.laptopLight}
                alt="Teapot and cups on a cozy table"
                width={1200}
                height={1500}
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="w-full rounded-xl object-cover object-[50%_68%] aspect-[4/3] lg:aspect-[5/4] max-h-[360px]"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
