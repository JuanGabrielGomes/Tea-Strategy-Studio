import Image from "next/image"
import type { Metadata } from "next"

const pillars = [
  {
    title: "Editorial clarity",
    description: "We define what the brand needs to say, to whom, from which angle and with what narrative promise.",
  },
  {
    title: "Production system",
    description: "We turn direction into operation: themes, formats, calendar, scripts and quality criteria.",
  },
  {
    title: "Strategic consistency",
    description: "We adjust cadence and messaging so every content piece reinforces positioning and business objectives.",
  },
]

export const metadata: Metadata = {
  title: "Method",
  description: "Tea's strategic content creation method.",
}

export default function MethodEn() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10 items-start mb-12">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-5">Tea Method</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-6">Content with direction, not improvisation.</h1>
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--tea-accent)] mb-6">Positioning is a choice. Consistency is discipline.</p>
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--tea-brown-soft)]">
            We apply a method so content stops being a reactive demand and becomes a continuous authority-building
            engine for the company.
          </p>
        </div>

        <div className="lg:col-span-5 w-full">
          <Image
            src="https://images.pexels.com/photos/839465/pexels-photo-839465.jpeg?cs=srgb&dl=pexels-freestocks-839465.jpg&fm=jpg"
            alt="Desk with laptop and planning notes"
            width={1200}
            height={900}
            className="rounded-2xl object-cover w-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <section key={pillar.title} className="tea-card p-7 md:p-8">
            <h2 className="text-2xl md:text-3xl mb-4 text-[var(--tea-brown)]">{pillar.title}</h2>
            <p className="text-[var(--tea-brown-soft)] leading-relaxed">{pillar.description}</p>
          </section>
        ))}
      </div>
    </main>
  )
}
