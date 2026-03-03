import Image from "next/image"
import Link from "next/link"
import AnimatedHero from "@/components/AnimatedHero"
import AnimatedSection from "@/components/AnimatedSection"

const services = [
  "Gestão de Redes Sociais com planejamento, produção e publicação.",
  "Identidade Visual e Branding do conceito ao manual de marca.",
  "Estratégia de Conteúdo para converter, conectar e posicionar.",
  "Tráfego Pago com campanhas orientadas por intenção e resultado.",
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
          <span className="tea-marquee-item">Cada xícara, uma história diferente · Infusão lenta, resultado duradouro · Servido no tempo certo · Proximidade que transforma · Estratégia que começa pela escuta</span>
          <span className="tea-marquee-item">Cada xícara, uma história diferente · Infusão lenta, resultado duradouro · Servido no tempo certo · Proximidade que transforma · Estratégia que começa pela escuta</span>
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

            <div className="max-w-2xl text-lg leading-relaxed text-[var(--tea-brown-soft)] space-y-6">
              <p>
                A Tea Studio não surgiu do acaso. Nasceu de uma jornada de construção - moldada no tempo certo, com o
                propósito certo. Como toda boa história, foi preciso passar pelo processo antes de chegar à entrega.
              </p>
              <p>
                Acreditamos que assim como o chá tem suas etapas - colheita, infusão, entrega - toda marca também tem
                seu método. Nós somos esse processo: guiamos sua marca do início ao florescimento, com estratégia e
                atenção a cada detalhe.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 lg:justify-self-end w-full">
            <div className="tea-cup-stage">
              <div className="tea-cup-quote">
                <p>&quot;Assim como o chá, cada marca precisa passar pelo seu processo - de preparação, de infusão, de entrega.&quot;</p>
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
                  <p className="tea-cup-stat-number">&infin;</p>
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

      <AnimatedSection id="servicos-home" className="py-20 md:py-32 section-padding">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--tea-muted)] mb-6">O que fazemos</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-[var(--tea-brown)] mb-6">
              Quatro frentes, uma direção.
            </h2>
            <p className="text-lg text-[var(--tea-brown-soft)] leading-relaxed max-w-2xl">
              Cuidamos da presença da sua marca do processo à entrega, integrando estratégia, criatividade e execução
              para gerar consistência, conexão e resultado.
            </p>
          </div>

          <div className="lg:col-span-7 w-full space-y-6">
            <Image
              src={visuals.notesDesk}
              alt="Mesa com planejamento criativo e anotações"
              width={1400}
              height={900}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full rounded-2xl object-cover min-h-[280px] md:min-h-[340px]"
            />

            <ol className="tea-service-list" aria-label="Frentes de serviço da Tea Studio">
              {services.map((service, index) => (
                <li key={service} className="tea-service-item">
                  <span className="tea-service-number">{String(index + 1).padStart(2, "0")}</span>
                  <p className="tea-service-text">{service}</p>
                </li>
              ))}
            </ol>
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
                com identidade e com propósito à mesa do cliente.
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
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
