import { useReducedMotion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import FadeIn from '../components/ui/FadeIn'

/** Sfondo hero: foto baita in montagna (asset in /public). */
const VILLA_HERO_IMAGE = '/la-villa-hero-baita.png'

/** Sfondo sezione Parco: giardino verde ↔ vista terrazzo collinare (rotazione in pagina). */
const PARCO_SLIDES = [
  /** Giardino verde */
  'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2400&q=85',
  /** Paesaggio collinare */
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=2400&q=85',
] as const

const ZONES = [
  {
    eyebrow: 'Zona giorno',
    title: 'La Zona Giorno: Cuore della Casa',
    text:
      'Il nostro grande salone luminoso e la cucina attrezzata formano il cuore dell\'interno della casa, ideali per colazioni lente a lume di luci d\'alba e pranzi condivisi per parlare e conoscersi, il salone dispone di grandi finestre da cui entrano tutti i colori e odori della nostra natura e da cui si può godere della vista della nostra valle.',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Salone accogliente con poltrone comode e grande tavolo in legno',
  },
] as const

const ROOMS_GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=85',
    alt: 'Camera singola luminosa con letto singolo e arredi essenziali',
    caption: 'Camera 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1200&q=85',
    alt: 'Camera singola ordinata con letto singolo e finestra',
    caption: 'Camera 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=85',
    alt: 'Camera singola con letto singolo, armadio e luce naturale',
    caption: 'Camera 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Camera singola luminosa con letto singolo e spazio di passaggio comodo',
    caption: 'Camera 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
    alt: 'Bagno luminoso e ordinato con superfici facili da pulire',
    caption: 'Bagno 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=85',
    alt: 'Bagno chiaro e accogliente con spazi comodi',
    caption: 'Bagno 2',
  },
] as const

type GalleryItem = (typeof ROOMS_GALLERY)[number]

function RoomsGalleryWithNext({ items }: { items: readonly GalleryItem[] }) {
  const stripRef = useRef<HTMLDivElement>(null)
  const stripId = useId()

  const scrollNext = useCallback(() => {
    const el = stripRef.current
    if (!el) return
    const first = el.querySelector('figure')
    const gap = Number.parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap) || 16
    const step = first instanceof HTMLElement ? first.offsetWidth + gap : el.clientWidth * 0.85
    const maxLeft = el.scrollWidth - el.clientWidth
    const target = el.scrollLeft + step
    if (target >= maxLeft - 4) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: step, behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="relative">
      <div
        id={stripId}
        ref={stripRef}
        className="-mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-1 pb-1 pt-0.5 sm:gap-6 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        style={{ msOverflowStyle: 'none' }}
        role="region"
        aria-roledescription="carosello"
        aria-label="Galleria camere e bagni"
      >
        {items.map((img) => (
          <figure key={img.src} className="w-[min(92vw,22rem)] shrink-0 snap-center sm:w-[min(70vw,26rem)] lg:w-[22rem]">
            <div className="overflow-hidden rounded-3xl bg-castagno-cream ring-1 ring-castagno-gold/35">
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-center font-sans text-sm font-semibold text-castagno-forest">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-14 bg-gradient-to-l from-castagno-cream/95 via-castagno-cream/70 to-transparent sm:w-16"
        aria-hidden
      />
      <button
        type="button"
        onClick={scrollNext}
        aria-controls={stripId}
        aria-label="Foto successiva"
        className="absolute right-1 top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-castagno-gold/50 bg-castagno-cream/95 text-castagno-forest shadow-md ring-1 ring-castagno-wood/10 transition hover:border-castagno-gold hover:bg-castagno-gold/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-castagno-forest sm:right-2 sm:h-12 sm:w-12"
      >
        <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} aria-hidden />
      </button>
    </div>
  )
}

export default function LaVilla() {
  const reduceMotion = useReducedMotion() === true
  const [parcoSlide, setParcoSlide] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const id = window.setInterval(() => {
      setParcoSlide((s) => (s === 0 ? 1 : 0))
    }, 5000)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  return (
    <>
      <Helmet>
        <title>La Villa — Il Castagno</title>
        <meta
          name="description"
          content="La Villa Il Castagno: spazi comuni luminosi, cucina conviviale, camere serene e un parco secolare. Un’esperienza immersiva, calda e sicura."
        />
      </Helmet>

      <main className="bg-castagno-cream">
        {/* A) HERO VILLA — video full height */}
        <section className="relative isolate min-h-[100svh] overflow-hidden" aria-label="Hero La Villa">
          <div className="absolute inset-0 -z-10" aria-hidden>
            <img
              src={VILLA_HERO_IMAGE}
              alt=""
              className="h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/10" />
          </div>

          <div className="mx-auto flex min-h-[100svh] max-w-6xl items-center justify-center px-4 sm:px-6">
            <div className="text-center">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-stone-100/85">
                La Villa
              </p>
              <h1 className="mt-4 font-display text-6xl font-semibold tracking-tight text-stone-50 sm:text-7xl lg:text-8xl [text-shadow:0_2px_26px_rgba(0,0,0,0.65)]">
                IL CASTAGNO
              </h1>
              <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-stone-100/90 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-xl">
                Più di una semplice villa, una dimora immersa nel placido verde della Valcuvia, pensata per garantire ogni
                comfort di un resort ma con l&apos;amore e l&apos;anima della casa.
              </p>
            </div>
          </div>
        </section>

        {/* B) INTRODUZIONE NARRATIVA */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20" aria-label="Introduzione narrativa">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-castagno-wood">
                Le nostre stanze
              </p>
              <p className="mt-4 font-sans text-xl leading-relaxed text-castagno-forest sm:text-2xl">
                Scoprite l’armonia di uno spazio progettato per il benessere, dove ogni dettaglio racconta una storia di cura.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* C) ZONIZZAZIONE DETTAGLIATA — alternata */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20" aria-label="Spazi della villa">
          <div className="flex flex-col gap-10 sm:gap-12">
            {ZONES.map((z, i) => {
              const imageOnRight = i % 2 === 1
              const rowDir = imageOnRight ? 'lg:flex-row-reverse' : 'lg:flex-row'

              return (
                <FadeIn key={z.title}>
                  <article
                    className={`flex flex-col gap-6 overflow-hidden rounded-3xl border border-castagno-gold/35 bg-castagno-cream-deep/85 shadow-md shadow-castagno-wood/5 lg:items-stretch lg:gap-0 ${rowDir}`}
                  >
                    <div className="relative lg:w-[54%]">
                      <img
                        src={z.image}
                        alt={z.imageAlt}
                        className="h-64 w-full object-cover sm:h-80 lg:h-full"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                      <div
                        className={
                          imageOnRight
                            ? 'pointer-events-none absolute inset-0 bg-gradient-to-t from-castagno-forest/55 via-castagno-forest/10 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-castagno-forest/10 lg:to-castagno-forest/45'
                            : 'pointer-events-none absolute inset-0 bg-gradient-to-t from-castagno-forest/55 via-castagno-forest/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-castagno-forest/10 lg:to-castagno-forest/45'
                        }
                        aria-hidden
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-center p-7 sm:p-10 lg:w-[46%]">
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-castagno-wood/90">
                        {z.eyebrow}
                      </p>
                      <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-castagno-forest sm:text-3xl">
                        {z.title}
                      </h2>
                      <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-castagno-muted sm:text-lg">
                        {z.text}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              )
            })}

            {/* Le Camere — galleria */}
            <FadeIn>
              <section
                className="overflow-hidden rounded-3xl border border-castagno-gold/35 bg-castagno-cream-deep/70 shadow-md shadow-castagno-wood/5"
                aria-label="Le camere"
              >
                <div className="px-7 pb-6 pt-8 sm:px-10 sm:pb-8 sm:pt-10">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-castagno-wood/90">
                    Le camere
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold leading-snug text-castagno-forest sm:text-4xl">
                    Il Vostro Rifugio: Privacy e Comfort
                  </h2>
                  <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-castagno-muted sm:text-lg">
                    Le nostre 4 grandi Camere Singole luminose, ben arredate e dotate di ogni comfort per il vostro riposo.
                    Ogni stanza è un nido privato e sicuro dove il rispetto della privacy e i tempi di ognuno sono garantiti.
                  </p>
                </div>

                <div className="px-4 pb-8 sm:px-6 sm:pb-10">
                  <RoomsGalleryWithNext items={ROOMS_GALLERY} />
                </div>
              </section>
            </FadeIn>

            {/* Il Parco — due immagini in crossfade */}
            <FadeIn>
              <article className="relative overflow-hidden rounded-3xl border border-castagno-gold/35 bg-castagno-cream-deep shadow-md shadow-castagno-wood/5">
                <div className="absolute inset-0" aria-hidden>
                  {PARCO_SLIDES.map((src, i) => (
                    <div
                      key={src}
                      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${
                        parcoSlide === i ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" aria-hidden />

                <div className="relative flex min-h-[22rem] items-end p-8 sm:min-h-[28rem] sm:p-10">
                  <div className="max-w-2xl">
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-stone-100/85 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
                      Il parco
                    </p>
                    <h2 className="mt-2 font-serif text-3xl font-semibold leading-snug text-stone-50 [text-shadow:0_2px_22px_rgba(0,0,0,0.6)] sm:text-4xl">
                      Il Parco e il Terrazzo: Relax e Natura
                    </h2>
                    <p className="mt-4 font-sans text-base leading-relaxed text-stone-100/90 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-lg">
                      Il magnifico giardino di circa 5000 mq e il grande terrazzo coperto sono a vostra più completa
                      disposizione. Il contesto perfetto per vivere soggiorni in un clima vacanziero avvolti nel massimo
                      relax, tra giornate a prendere il sole, chiacchierare o leggere all&apos;aperto tra le nostre verdi
                      colline.
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  )
}
