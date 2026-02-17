import Image from "next/image"
import type { Metadata } from "next"
import DiagnosticForm from "@/components/DiagnosticForm"

export const metadata: Metadata = {
  title: "Content Diagnostic",
  description: "Apply for Tea's strategic content diagnostic.",
}

const outcomes = [
  "Gap assessment between brand positioning and current content.",
  "Initial editorial direction based on business objectives.",
  "Practical priorities for the next 90 days.",
]

export default function DiagnosticEn() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-5">Diagnostic</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-7">Strategic content diagnostic</h1>
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--tea-accent)] mb-7">Direction before presence.</p>

          <p className="text-lg leading-relaxed text-[var(--tea-brown-soft)] mb-7 max-w-2xl">
            This is the first step to leave reactive production behind and build a content operation guided by strategy,
            consistency and real business impact.
          </p>

          <ul className="space-y-3 mb-8 max-w-2xl">
            {outcomes.map((outcome) => (
              <li key={outcome} className="tea-card px-4 py-3 text-[var(--tea-brown)]">
                {outcome}
              </li>
            ))}
          </ul>

          <Image
            src="https://images.unsplash.com/photo-1582848891135-32b749439ad4?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1600"
            alt="Professional in a work session"
            width={1000}
            height={1200}
            className="rounded-2xl object-cover w-full"
          />
        </div>

        <div className="lg:col-span-7 w-full">
          <DiagnosticForm locale="en" />
        </div>
      </div>
    </main>
  )
}
