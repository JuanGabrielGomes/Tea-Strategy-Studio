import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Tea creates strategic content systems with method, direction and consistency.",
}

const teaSteps = [
  {
    title: "Temperature",
    description: "Before publishing, we define context: business objective, audience and editorial territory.",
  },
  {
    title: "Infusion",
    description: "Good content needs time and method. We structure narratives, formats and recurring cycles.",
  },
  {
    title: "Service",
    description: "The final delivery is consistent presence: content that positions, connects and drives action.",
  },
]

export default function AboutEn() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">About</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-8">Content strategy with calm, method and precision.</h1>

          <div className="space-y-6 text-lg leading-relaxed text-[var(--tea-brown-soft)] max-w-3xl">
            <p>
              The name Tea comes from the tea-making process itself: no rush, only preparation. There is right
              temperature, infusion time and intent at each step.
            </p>
            <p>
              Our work follows the same logic. We are not a brand image consultancy. We are a strategic content studio
              for companies that need to organize presence, narrative and consistency.
            </p>
            <p>
              When the process is well-led, every piece of content reinforces positioning and builds authority over time.
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
