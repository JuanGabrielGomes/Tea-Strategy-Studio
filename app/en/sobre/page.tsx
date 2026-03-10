import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Our story: intentional construction, from process to delivery.",
}

export default function AboutEn() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">Our story</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-8">Our story</h1>

          <div className="space-y-6 text-lg leading-relaxed text-[var(--tea-brown-soft)]">
            <p>
              Tea began with a restlessness that became clearer over time. After years of working with brands and
              communication, one thing started to stand out: many people were creating content, but very few brands
              were actually being built. There were posts, trends, beautiful aesthetics... but no direction.
            </p>
            <p>
              That is how Tea began to take shape. Not as an agency focused only on execution, but as a studio that
              steps in before that, organizing the foundation of the brand. Understanding the business, structuring the
              positioning and bringing clarity to how that company should present itself and grow.
            </p>
            <p>
              The name Tea represents exactly this way of working. Just like a good tea needs time and preparation,
              brands also need process.
            </p>
            <p>
              And that is exactly where Tea comes in: helping companies build brands with more clarity, consistency and
              direction.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <div className="relative w-full overflow-hidden rounded-2xl min-h-[340px] md:min-h-[420px] lg:min-h-0 lg:h-full">
            <Image
              src="/images/tea/nossa-historia-nova.jpeg"
              alt="Light armchair with blanket and coffee cup in a cozy composition"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[50%_42%]"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
