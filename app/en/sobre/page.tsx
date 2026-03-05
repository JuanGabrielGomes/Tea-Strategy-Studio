import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Our story: intentional construction, from process to delivery.",
}

const teaSteps = [
  {
    title: "01: Harvest, Immersion",
    description: "We deeply understand your brand, your audience and your goals.",
  },
  {
    title: "02: Infusion, Strategy",
    description: "We develop the creative and strategic plan for what your brand truly is.",
  },
  {
    title: "03: Served, Delivery",
    description: "Your brand reaches the end client with consistency, beauty and results.",
  },
  {
    title: "04: Favorite Tea, Remembrance",
    description:
      "Delivery is the beginning of remembrance. Brands that last are those built to be felt. Like a favorite tea, your brand becomes the first choice, not by chance, but by design.",
  },
]

export default function AboutEn() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">Our story</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-8">
            Born from an intentional process.
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-[var(--tea-brown-soft)]">
            <p>
              Tea Strategy Studio didn&apos;t come from chance. It was born from a journey of construction, shaped at the right
              time, with the right purpose. Like every good story, it took going through the process before arriving at
              the delivery.
            </p>
            <p>
              We believe that just like tea has its stages: harvest, infusion, serving, every brand has its own
              method. We are that process: guiding your brand from inception to full bloom, with strategy and care for
              every detail.
            </p>
            <p>
              Every creative decision is made with listening and precision, so that your brand reaches the audience
              with consistency, identity and results.
            </p>
          </div>

          <div className="tea-flow-list" aria-label="Our story steps">
            {teaSteps.map((step) => (
              <section key={step.title} className="tea-flow-item">
                <span className="tea-flow-dot" aria-hidden="true" />
                <h2 className="text-sm uppercase tracking-[0.24em] text-[var(--tea-accent)] mb-1">{step.title}</h2>
                <p className="text-[var(--tea-brown)] leading-relaxed">{step.description}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <Image
            src="/images/tea/nossa-historia.jpg"
            alt="Tea moment in a cozy setting"
            width={1100}
            height={1400}
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="rounded-2xl object-cover object-bottom w-full h-full min-h-[360px] md:min-h-[620px] lg:min-h-[860px]"
          />
        </div>
      </div>
    </main>
  )
}
