import Image from "next/image"
import type { Metadata } from "next"

const pillars = [
  {
    title: "01: Harvest, Immersion",
    description: "We map brand, audience and goals to define a creative direction with a real strategic foundation.",
  },
  {
    title: "02: Infusion, Strategy",
    description: "We develop the creative and strategic plan for what your brand truly is.",
  },
  {
    title: "03: Served, Delivery",
    description: "Your brand reaches the audience with consistency, beauty and results, without losing its essence along the way.",
  },
  {
    title: "04: Favorite Tea, Remembrance",
    description:
      "Delivery is the beginning of remembrance. Brands that last are those built to be felt. Like a favorite tea, your brand becomes the first choice, not by chance, but by design.",
  },
]

export const metadata: Metadata = {
  title: "Method",
  description: "From process to delivery, with direction and strategic method.",
}

export default function MethodEn() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-7 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-5">Tea Method</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-6">
              From <span className="tea-script text-[var(--tea-accent)]">process</span> to delivery, with direction.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[var(--tea-brown-soft)]">
              Every brand has its method. Our work is to guide each step with listening and precision, so that
              strategy, creativity and execution move at the same pace, for what your brand truly is.
            </p>
          </div>

          <div className="tea-flow-list" aria-label="Tea Strategy Studio method steps">
            {pillars.map((pillar) => (
              <section key={pillar.title} className="tea-flow-item">
                <span className="tea-flow-dot" aria-hidden="true" />
                <h2 className="text-xl sm:text-2xl md:text-3xl mb-3 text-[var(--tea-brown)]">{pillar.title}</h2>
                <p className="text-[var(--tea-brown-soft)] leading-relaxed">{pillar.description}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <Image
            src="/images/tea/workspace-lampada.jpg"
            alt="Creative workspace with warm lighting"
            width={1200}
            height={1200}
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="rounded-2xl object-cover object-[50%_72%] w-full h-full min-h-[360px] md:min-h-[560px] lg:min-h-[720px]"
          />
        </div>
      </div>
    </main>
  )
}
