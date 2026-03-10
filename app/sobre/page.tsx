import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre",
  description: "Nossa história: construção intencional, do processo à entrega.",
}

export default function Sobre() {
  return (
    <main className="section-padding py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">Nossa história</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl leading-[0.96] text-[var(--tea-brown)] mb-8">Nossa história</h1>

          <div className="space-y-6 text-lg leading-relaxed text-[var(--tea-brown-soft)]">
            <p>
              A Tea surgiu de uma inquietação que foi ficando clara com o tempo. Depois de anos trabalhando com marcas
              e comunicação, uma coisa começou a chamar atenção: muita gente estava produzindo conteúdo, mas poucas
              marcas estavam realmente sendo construídas. Era postagem, tendência, estética bonita... mas sem direção.
            </p>
            <p>
              Foi assim que a Tea começou a tomar forma. Não como uma agência focada apenas em execução, mas como um
              estúdio que entra antes disso, organizando a base da marca. Entendendo o negócio, estruturando o
              posicionamento e trazendo clareza sobre como aquela empresa deve se apresentar e crescer.
            </p>
            <p>
              O nome Tea representa exatamente essa forma de trabalhar. Assim como um bom chá precisa de tempo e
              preparo, marcas também precisam de processo.
            </p>
            <p>
              E é exatamente nisso que a Tea atua: ajudando empresas a construírem marcas com mais clareza,
              consistência e direção.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <div className="relative w-full overflow-hidden rounded-2xl min-h-[340px] md:min-h-[420px] lg:min-h-0 lg:h-full">
            <Image
              src="/images/tea/nossa-historia-nova.jpeg"
              alt="Poltrona clara com manta e xícara de café em composição aconchegante"
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
