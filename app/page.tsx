import Image from "next/image"
import Link from "next/link"
import AnimatedHero from "@/components/AnimatedHero"
import AnimatedSection from "@/components/AnimatedSection"

const services = [
  "Gestão de Redes Sociais com planejamento, produção e publicação.",
  "Identidade Visual e Branding do conceito ao manual de marca.",
  "Estratégia de Conteúdo para converter, conectar e posicionar.",
  "Tráfego Pago com campanhas orientadas por intenção e resultado.",
  "Do processo à entrega com consistência, beleza e propósito.",
]

const visuals = {
  laptopLight:
    "https://images.pexels.com/photos/4492126/pexels-photo-4492126.jpeg?auto=compress&cs=tinysrgb&w=1400",
  notesDesk:
    "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?cs=srgb&dl=pexels-pixabay-261662.jpg&fm=jpg",
}

export default function Home() {
  return (
    <main>
      <AnimatedHero locale="pt" />
      <div className="tea-marquee-bar" role="region" aria-label="Faixa de valores da Tea Studio">
        <div className="tea-marquee-track">
          <span className="tea-marquee-item">Estratégia · Criatividade · Propósito · Do processo à entrega</span>
          <span className="tea-marquee-item">Cada marca tem seu tempo · Construção com intenção em cada detalhe</span>
          <span className="tea-marquee-item">Estratégia · Criatividade · Propósito · Do processo à entrega</span>
          <span className="tea-marquee-item">Cada marca tem seu tempo · Construção com intenção em cada detalhe</span>
        </div>
      </div>

      <AnimatedSection className="py-20 md:py-32 section-padding bg-[var(--tea-surface)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--tea-green)] opacity-[0.04]" />

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 xl:col-span-7">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-8">Nossa história</p>

            <p className="text-3xl sm:text-4xl md:text-6xl leading-[1.03] font-semibold mb-8 text-[var(--tea-brown)]">
              Nascemos de um
              <br />
              processo intencional.
            </p>

            <p className="max-w-2xl text-lg leading-relaxed text-[var(--tea-brown-soft)]">
              A Tea Studio nasceu de uma jornada de construção no tempo certo, com o propósito certo. Assim como o chá
              tem suas etapas de preparo e infusão, guiamos marcas do início ao florescimento com estratégia e cuidado.
            </p>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 lg:justify-self-end w-full">
            <div className="tea-cup-stage">
              <div className="tea-cup-quote">
                <p>&quot;Assim como o chá, cada marca precisa do seu tempo.&quot;</p>
                <span>Manifesto Tea Studio</span>
              </div>

              <div className="tea-cup-stats" aria-label="Indicadores da Tea Studio">
                <div className="tea-cup-stat">
                  <p className="tea-cup-stat-number">100%</p>
                  <p className="tea-cup-stat-label">Estratégia personalizada</p>
                </div>
                <div className="tea-cup-stat">
                  <p className="tea-cup-stat-number">4</p>
                  <p className="tea-cup-stat-label">Serviços integrados</p>
                </div>
                <div className="tea-cup-stat">
                  <p className="tea-cup-stat-number">∞</p>
                  <p className="tea-cup-stat-label">Possibilidades criativas</p>
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

      <AnimatedSection className="py-20 md:py-32 section-padding">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">O que fazemos</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-[var(--tea-brown)] mb-6">
              Serviços com propósito para marcas que querem florescer.
            </h2>
            <p className="text-lg text-[var(--tea-brown-soft)] leading-relaxed max-w-2xl">
              Cuidamos da presença da sua marca do processo à entrega, integrando estratégia, criatividade e execução
              para gerar consistência, conexão e resultado.
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
              alt="Mesa com planejamento criativo e anotações"
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
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-cream)]/70 mb-5">Vamos começar</p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl leading-[1.03] text-[var(--tea-cream)] mb-6">
                Sua marca está pronta para infundir?
              </h2>
              <p className="text-[var(--tea-cream)]/85 max-w-2xl leading-relaxed mb-8">
                Cada marca tem o seu tempo. Nosso trabalho é garantir que, quando chegar a hora, ela chegue com força,
                identidade e propósito à mesa do cliente.
              </p>

              <Link
                href="/diagnostico"
                className="inline-block text-center border border-[var(--tea-cream)]/70 text-[var(--tea-cream)] px-6 py-3 text-sm uppercase tracking-[0.14em] hover:bg-[var(--tea-cream)] hover:text-[var(--tea-green)] transition-colors"
              >
                Iniciar o processo
              </Link>
            </div>

            <div className="lg:col-span-5 w-full">
              <Image
                src={visuals.laptopLight}
                alt="Profissional trabalhando no processo de criação"
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
