import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Tea Studio: from process to delivery, with intention, strategy and purpose.",
}

const teaSteps = [
  {
    title: "Harvest - Immersion",
    description: "We deeply understand your brand, your audience and your business goals.",
  },
  {
    title: "Infusion - Strategy",
    description: "We develop the creative and strategic plan with intention and purpose.",
  },
  {
    title: "Served - Delivery",
    description: "Your brand reaches the end client with consistency, beauty and results.",
  },
]

export default function AboutEn() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">Our story</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-8">
            Born from an intentional process.
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-[var(--tea-brown-soft)] max-w-3xl">
            <p>
              Tea Studio did not come from chance. It was born from a journey shaped at the right time, with the right
              purpose.
            </p>
            <p>
              Just like tea moves through harvest, infusion and serving, every brand has its own ritual. We guide that
              process from the beginning to full bloom.
            </p>
            <p>
              Every creative decision is made with intention so your brand reaches people with consistency, identity
              and results.
            </p>
          </div>

          <div className="tea-card p-6 space-y-4 mt-8 max-w-3xl">
            {teaSteps.map((step) => (
              <div key={step.title}>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--tea-accent)] mb-1">{step.title}</p>
                <p className="text-[var(--tea-brown)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <Image
            src="https://images.pexels.com/photos/6957754/pexels-photo-6957754.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Tea being prepared in a glass teapot"
            width={1100}
            height={900}
            className="rounded-2xl object-cover object-bottom w-full h-[360px] md:h-[460px] lg:h-[520px]"
          />
        </div>
      </div>
    </main>
  )
}
