import Image from "next/image"
import Link from "next/link"
import AnimatedHero from "@/components/AnimatedHero"
import AnimatedSection from "@/components/AnimatedSection"

const services = [
  "Estratégia editorial para redes e canais proprietários",
  "Pilares narrativos e linhas editoriais por público",
  "Planejamento de conteúdo orientado por objetivo de negócio",
  "Roteiros, formatos e distribuição multicanal",
  "Operação de conteúdo com método e consistência",
]

const visuals = {
  workingSession:
    "https://images.unsplash.com/photo-1582848891135-32b749439ad4?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800",
  laptopLight:
    "https://images.pexels.com/photos/4492126/pexels-photo-4492126.jpeg?auto=compress&cs=tinysrgb&w=1400",
  notesDesk:
    "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?cs=srgb&dl=pexels-pixabay-261662.jpg&fm=jpg",
}

export default function Home() {
  return (
    <main>
      <AnimatedHero locale="pt" />

      <AnimatedSection className="py-20 md:py-32 section-padding bg-[var(--tea-surface)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--tea-green)] opacity-[0.04]" />

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 xl:col-span-7">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-8">Tensão</p>

            <p className="text-3xl sm:text-4xl md:text-6xl leading-[1.03] font-semibold mb-8 text-[var(--tea-brown)]">
              Nem toda marca que comunica, se posiciona.
              <br />
              Nem todo crescimento é sustentável.
            </p>

            <p className="max-w-2xl text-lg leading-relaxed text-[var(--tea-brown-soft)]">
              Se a estratégia não está clara, o conteúdo vira volume sem direção. A Tea estrutura narrativa, formato e
              cadência para transformar conteúdo em percepção de marca e avanço de negócio.
            </p>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 lg:justify-self-end w-full">
            <Image
              src={visuals.workingSession}
              alt="Profissional trabalhando com laptop"
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
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">O que fazemos</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-[var(--tea-brown)] mb-6">
              Criação estratégica de conteúdo para empresas.
            </h2>
            <p className="text-lg text-[var(--tea-brown-soft)] leading-relaxed max-w-2xl">
              Não vendemos estética isolada. Construímos direção editorial para que cada conteúdo sustente posicionamento
              e gere valor real.
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
              alt="Mesa com notebook e bloco de notas"
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
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-cream)]/70 mb-5">Direção</p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl leading-[1.03] text-[var(--tea-cream)] mb-6">
                Crescer com coerência é mais difícil que crescer rápido, e mais valioso.
              </h2>
              <p className="text-[var(--tea-cream)]/85 max-w-2xl leading-relaxed mb-8">
                Planejamos conteúdo para construir autoridade contínua, não picos passageiros de alcance.
              </p>

              <Link
                href="/diagnostico"
                className="inline-block text-center border border-[var(--tea-cream)]/70 text-[var(--tea-cream)] px-6 py-3 text-sm uppercase tracking-[0.14em] hover:bg-[var(--tea-cream)] hover:text-[var(--tea-green)] transition-colors"
              >
                Quero reorganizar meu conteúdo
              </Link>
            </div>

            <div className="lg:col-span-5 w-full">
              <Image
                src={visuals.laptopLight}
                alt="Mãos digitando em um notebook"
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
