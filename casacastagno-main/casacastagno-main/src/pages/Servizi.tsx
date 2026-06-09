import { Helmet } from 'react-helmet-async'
import {
  Activity,
  BedSingle,
  ChefHat,
  Church,
  Coffee,
  Dumbbell,
  HeartPulse,
  Leaf,
  MapPinned,
  Pill,
  ShowerHead,
  Sparkles,
  Stethoscope,
  Utensils,
  Users,
  WashingMachine,
  Sun,
} from 'lucide-react'
import FadeIn from '../components/ui/FadeIn'

const items = [
  {
    icon: HeartPulse,
    title: 'Assistenza & Benessere',
    accent: '#C37C5F',
    imageSrc: '/images/assistenza-benessere.png',
    imageAlt: 'Gruppo di anziani che sorridono e si divertono all’aperto',
    imagePosition: 'center 35%',
    ssnNote: {
      lines: [
        'Il Servizio Sanitario dei nostri Ospiti è garantito dal SSN (Servizio Sanitario Nazionale).',
        'Nel caso di emergenze la Titolare o le Operatrici provvederanno a chiamare il servizio di Ambulanza locale.',
      ],
    },
    points: [
      { icon: Activity, text: 'Assistenza continuativa 24 ore su 24.' },
      { icon: ShowerHead, text: 'Aiuto nell’igiene personale, bagno e vestizione.' },
      { icon: Pill, text: 'Controllo corretta autosomministrazione terapie e approvvigionamento farmaci.' },
      { icon: Stethoscope, text: 'Collaboriamo con il medico di base.' },
      {
        icon: Church,
        text: 'Assistenza spirituale e religiosa: per tutti gli ospiti che vogliono assistere alle funzioni religiose, ci sarà un servizio trasporto gratuito.',
      },
    ],
  },
  {
    icon: ChefHat,
    title: 'Ristorazione d’Eccellenza',
    accent: '#D2A676',
    imageSrc:
      'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Ristorazione: tavola apparecchiata con luce naturale e atmosfera di casa',
    points: [
      { icon: Utensils, text: 'Trattamento di pensione completa.' },
      { icon: Coffee, text: '5 momenti quotidiani: Colazione, spuntino mattutino, pranzo, merenda e cena.' },
      { icon: Leaf, text: 'Menù curati con prodotti freschi e stagionali.' },
    ],
  },
  {
    icon: Sun,
    title: 'Vita Attiva & Socialità',
    accent: '#899F8D',
    imageSrc: '/images/vita-attiva-socialita.png',
    imageAlt: 'Anziani che condividono un pasto conviviale insieme',
    imagePosition: 'center 40%',
    points: [
      { icon: Dumbbell, text: 'Attività giornaliere, animazione e ginnastica dolce.' },
      { icon: MapPinned, text: 'Gite, feste e uscite programmate sul territorio.' },
      { icon: Users, text: 'Intrattenimento: Televisione, Wi‑Fi ultra‑fibra, quotidiani e riviste sempre a disposizione.' },
    ],
  },
  {
    icon: BedSingle,
    title: 'Servizi Alberghieri & Comfort',
    accent: '#CDB59B',
    imageSrc:
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Comfort: camera singola luminosa e ordinata',
    points: [
      { icon: BedSingle, text: 'Vitto e Alloggio in camera singola luminosa.' },
      { icon: Sparkles, text: 'Pulizia degli ambienti giornaliera e cambio biancheria.' },
      { icon: WashingMachine, text: 'Servizio completo di lavanderia, stireria e cura del guardaroba.' },
    ],
  },
]

type ServiceMacro = (typeof items)[number]

export default function Servizi() {
  return (
    <>
      <Helmet>
        <title>Servizi — Il Castagno</title>
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-castagno-wood">
              Servizi
            </p>
            <h1 className="mt-3 font-serif text-3xl font-semibold text-[#2A4333] sm:text-4xl">
              I Nostri Servizi: L&apos;Eccellenza Inclusa
            </h1>
            <p className="mt-4 font-sans text-lg leading-relaxed text-castagno-muted sm:text-xl">
              Un&apos;assistenza a 5 stelle dove ogni necessità è già parte del soggiorno: nulla è lasciato al caso, con
              supervisione h24.
            </p>
          </div>
        </FadeIn>

        {/* Master Card: emozione a sinistra (immagine), sostanza a destra (micro-categorie) */}
        <div className="mt-12 flex flex-col gap-8 sm:gap-10">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <section
                className="group relative overflow-hidden rounded-3xl border border-castagno-gold/25 bg-castagno-cream-deep/60 shadow-sm shadow-castagno-wood/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-castagno-wood/12"
                aria-label={item.title}
              >
                <div className="flex min-h-[500px] flex-col lg:flex-row">
                  {/* Lato A: immagine immersiva */}
                  <div
                    className="relative h-64 overflow-hidden lg:h-auto lg:w-[40%]"
                    style={{
                      backgroundImage:
                        'radial-gradient(1200px 380px at 20% 0%, rgba(45,74,49,0.18), transparent 55%), linear-gradient(135deg, rgba(240,235,224,1) 0%, rgba(250,247,240,1) 48%, rgba(240,235,224,1) 100%)',
                    }}
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                      style={
                        'imagePosition' in item && item.imagePosition
                          ? { objectPosition: item.imagePosition }
                          : undefined
                      }
                      loading={i === 0 ? 'eager' : 'lazy'}
                      onError={(e) => {
                        // Se l'immagine placeholder fallisce, resta il fallback caldo del contenitore.
                        e.currentTarget.style.opacity = '0'
                      }}
                    />
                    {/* Protezione leggibilità: sfumatura che “spinge” verso contenuto */}
                    {/* 1) Velo scuro leggero, uniforme (mantiene l'immagine leggibile ma visibile) */}
                    <div className="pointer-events-none absolute inset-0 bg-black/15" aria-hidden />
                    {/* 2) Gradiente “soft” per evitare testo su zone caotiche (non annulla l'immagine) */}
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-black/10 lg:via-black/5 lg:to-transparent"
                      aria-hidden
                    />
                    {/* 3) Sfumatura verso il pannello contenuti SOLO su fascia destra */}
                    <div
                      className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-r from-transparent to-[#F9F7F2] lg:block"
                      aria-hidden
                    />
                    {/* Accento categoria (sottile) */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1.5" style={{ backgroundColor: item.accent }} aria-hidden />
                  </div>

                  {/* Lato B: contenuto pulito */}
                  <div className="relative flex flex-1 flex-col bg-[#F9F7F2] p-7 sm:p-10">
                    <header className="flex items-start gap-4">
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-castagno-gold/25"
                        aria-hidden
                      >
                        <item.icon className="h-7 w-7" strokeWidth={2.2} style={{ color: item.accent }} />
                      </span>
                      <div className="min-w-0">
                        <h2 className="font-serif text-2xl font-semibold leading-snug text-[#2A4333] sm:text-3xl">
                          {item.title}
                        </h2>
                      </div>
                    </header>

                    {/* Micro-categorie: 1 col per leggibilità, 2 col solo su schermi molto grandi */}
                    <div className="mt-6 grid gap-3 xl:grid-cols-2">
                      {item.points.map((p, idx) => {
                        const isLast = idx === item.points.length - 1
                        const isOddCount = item.points.length % 2 === 1
                        const shouldSpanTwo = isOddCount && isLast
                        return (
                          <MicroService
                            key={p.text}
                            item={item}
                            point={p}
                            className={shouldSpanTwo ? 'xl:col-span-2' : undefined}
                          />
                        )
                      })}
                    </div>

                    {item.ssnNote?.lines?.length ? (
                      <div className="mt-6 rounded-2xl border border-red-400/60 bg-red-50/40 p-5">
                        <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-red-700/90">
                          Informazioni importanti
                        </p>
                        <div className="mt-3 space-y-2 font-sans text-[0.98rem] leading-relaxed text-castagno-muted sm:text-[1.05rem]">
                          {item.ssnNote.lines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </section>
            </FadeIn>
          ))}
        </div>

        {/* Badge finale autorevole */}
        <FadeIn className="mt-12">
          <div className="rounded-3xl border border-castagno-gold/35 bg-white/80 p-7 text-center shadow-sm shadow-castagno-wood/8 ring-1 ring-black/5 backdrop-blur-[2px] sm:p-8">
            <p className="font-sans text-base font-semibold leading-relaxed text-[#2A4333] sm:text-lg">
              La nostra missione è garantire dignità e relax: non ci sono costi nascosti, tutto ciò che serve è già qui.
            </p>
          </div>
        </FadeIn>
      </div>
    </>
  )
}

function MicroService({
  item,
  point,
  className,
}: {
  item: ServiceMacro
  point: ServiceMacro['points'][number]
  className?: string
}) {
  const Icon = point.icon
  return (
    <div
      className={`flex gap-4 rounded-xl border bg-white/60 p-4 shadow-sm shadow-castagno-wood/5 sm:p-5 ${className ?? ''}`}
      style={{
        borderColor: `${item.accent}55`,
        backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,255,255,0.5))',
      }}
    >
      {/* Icona “duo-tone” (simulata): fondo tint + icona più bold */}
      <span
        className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1"
        style={{
          backgroundColor: `${item.accent}1A`,
          color: item.accent,
          borderColor: `${item.accent}2E`,
        }}
        aria-hidden
      >
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </span>
      <p className="min-w-0 font-sans text-[0.98rem] leading-relaxed text-castagno-muted sm:text-[1.05rem]">
        {point.text}
      </p>
    </div>
  )
}
