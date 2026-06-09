import { Helmet } from 'react-helmet-async'
import FadeIn from '../components/ui/FadeIn'
import { Cake, ChefHat, Dumbbell } from 'lucide-react'

const LABS = [
  {
    icon: Dumbbell,
    accent: '#899F8D',
    title: 'Ginnastica dolce',
    subtitle: 'Cicli mensili',
    imageSrc: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Ginnastica dolce in un ambiente luminoso e sicuro',
    text: [
      'Laboratori a cicli mensili per mantenere il fisico in forma, mantenere l’autonomia motoria e prevenire i dolori cronici mantenendo una postura corretta.',
    ],
    points: ['Movimento guidato', 'Autonomia motoria', 'Postura corretta', 'Prevenzione dolori'],
  },
  {
    icon: ChefHat,
    accent: '#D2A676',
    title: 'Laboratorio di cucina',
    subtitle: 'Condivisione e sapori',
    imageSrc: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Cucinare insieme in cucina: gesti semplici e convivialità',
    text: [
      'Cucinare insieme aiuta l’armonia del gruppo e facilita i rapporti interpersonali.',
      'Conoscere e giocare con i sapori è un’attività divertente con momenti di condivisione.',
    ],
    points: ['Armonia del gruppo', 'Relazioni', 'Sapori', 'Convivialità'],
  },
  {
    icon: Cake,
    accent: '#C37C5F',
    title: 'Compleanni e festività',
    subtitle: 'Con le famiglie',
    imageSrc: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Momento di festa con tavola e atmosfera calda',
    text: [
      "Nel corso dell'anno verranno organizzate feste in occasione del compleanno e delle varie festività (pranzo della Vigilia di Natale, festa per la Pasqua, etc.) che vedono la partecipazione delle famiglie degli ospiti e l'organizzazione di attività mirate creative e divertenti.",
    ],
    points: ['Feste a tema', 'Famiglie', 'Attività creative', 'Momenti insieme'],
  },
] as const

export default function Laboratori() {
  return (
    <>
      <Helmet>
        <title>Laboratori — Il Castagno</title>
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-castagno-wood">
              I laboratori
            </p>
            <h1 className="mt-3 font-serif text-3xl font-semibold text-[#2A4333] sm:text-4xl">
              Attività che fanno bene, insieme
            </h1>
            <p className="mt-4 font-sans text-lg leading-relaxed text-castagno-muted sm:text-xl">
              Percorsi guidati per mantenere autonomia e promuovere il benessere psicofisico, coltivare relazioni e
              combattere la solitudine, e vivere momenti sereni con la famiglia e i nuovi amici.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 flex flex-col gap-8 sm:gap-10">
          {LABS.map((lab, i) => (
            <FadeIn key={lab.title} delay={i * 0.07}>
              <section className="group relative overflow-hidden rounded-3xl border border-castagno-gold/25 bg-castagno-cream-deep/60 shadow-sm shadow-castagno-wood/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-castagno-wood/12">
                <div className="flex min-h-[420px] flex-col lg:flex-row">
                  {/* Lato A: immagine immersiva */}
                  <div
                    className="relative h-64 overflow-hidden lg:h-auto lg:w-[40%]"
                    style={{
                      backgroundImage:
                        'radial-gradient(1200px 380px at 20% 0%, rgba(45,74,49,0.16), transparent 55%), linear-gradient(135deg, rgba(240,235,224,1) 0%, rgba(250,247,240,1) 48%, rgba(240,235,224,1) 100%)',
                    }}
                  >
                    <img
                      src={lab.imageSrc}
                      alt={lab.imageAlt}
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                      loading={i === 0 ? 'eager' : 'lazy'}
                      onError={(e) => {
                        e.currentTarget.style.opacity = '0'
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/10" aria-hidden />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-black/6 to-transparent lg:bg-gradient-to-r lg:from-black/10 lg:via-black/5 lg:to-transparent"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-r from-transparent to-[#F9F7F2] lg:block"
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1.5" style={{ backgroundColor: lab.accent }} aria-hidden />
                  </div>

                  {/* Lato B: contenuto pulito */}
                  <div className="flex flex-1 flex-col bg-[#F9F7F2] p-7 sm:p-10">
                    <header className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-castagno-gold/25" aria-hidden>
                          <lab.icon className="h-7 w-7" strokeWidth={2.2} style={{ color: lab.accent }} />
                        </span>
                        <div className="min-w-0">
                          <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-castagno-wood/85">
                            {lab.subtitle}
                          </p>
                          <h2 className="mt-1 font-serif text-2xl font-semibold leading-snug text-[#2A4333] sm:text-3xl">
                            {lab.title}
                          </h2>
                        </div>
                      </div>
                      <span
                        className="hidden shrink-0 rounded-full bg-castagno-cream/70 px-4 py-2 font-sans text-xs font-semibold text-castagno-forest ring-1 ring-castagno-gold/25 sm:inline-flex"
                      >
                        In calendario
                      </span>
                    </header>

                    <div className="mt-5 space-y-3 font-sans text-[1.02rem] leading-relaxed text-castagno-muted sm:text-lg">
                      {lab.text.map((t) => (
                        <p key={t}>{t}</p>
                      ))}
                    </div>

                    <div className="mt-7 grid gap-3 xl:grid-cols-2">
                      {lab.points.map((p, idx) => {
                        const isLast = idx === lab.points.length - 1
                        const isOddCount = lab.points.length % 2 === 1
                        const shouldSpanTwo = isOddCount && isLast
                        return (
                          <div
                            key={p}
                            className={`flex items-center gap-3 rounded-xl border bg-white/60 p-4 shadow-sm shadow-castagno-wood/5 sm:p-5 ${shouldSpanTwo ? 'xl:col-span-2' : ''}`}
                            style={{ borderColor: `${lab.accent}55` }}
                          >
                            <span
                              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1"
                              style={{
                                backgroundColor: `${lab.accent}1A`,
                                color: lab.accent,
                                borderColor: `${lab.accent}2E`,
                              }}
                              aria-hidden
                            >
                              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: lab.accent }} />
                            </span>
                            <p className="min-w-0 font-sans text-[0.98rem] leading-relaxed text-castagno-muted sm:text-[1.05rem]">
                              {p}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  )
}
