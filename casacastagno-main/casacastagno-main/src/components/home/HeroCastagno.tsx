import { Link } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import { Calendar } from 'lucide-react'

/**
 * Esterno ampio: prato/cielo a sinistra, villa a destra — `bg-right` mantiene “spazio negativo” per il testo.
 * Sostituire con foto de Il Castagno (stesso orientamento consigliato).
 */
const HERO_BG =
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2400&q=85'

const POLAROID_IMAGES = {
  /** Camera singola luminosa */
  comfort:
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=85',
  /** Dettaglio assistenza */
  care: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=85',
} as const

function PolaroidCard({
  src,
  alt,
  caption,
  className,
  rotationClass,
  floatAnimationClass,
}: {
  src: string
  alt: string
  caption: string
  className?: string
  rotationClass: string
  floatAnimationClass: string
}) {
  return (
    <div
      className={`pointer-events-none w-[min(100%,17rem)] select-none sm:w-[18.5rem] ${className ?? ''}`}
    >
      <div
        className={`rounded-sm bg-white p-2.5 pb-3 shadow-2xl ring-1 ring-black/5 ${rotationClass} ${floatAnimationClass}`}
      >
        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-castagno-cream-deep">
          <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <p className="mt-2.5 text-center font-sans text-sm font-semibold leading-snug text-castagno-forest">
          {caption}
        </p>
      </div>
    </div>
  )
}

export default function HeroCastagno() {
  const prefersReducedMotion = useReducedMotion()
  const noFloat = prefersReducedMotion === true
  const floatA = noFloat ? '' : 'motion-safe:animate-hero-float-a'
  const floatB = noFloat ? '' : 'motion-safe:animate-hero-float-b'

  return (
    <section
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-castagno-cream"
      aria-labelledby="hero-heading"
    >
      {/* Sfondo immersivo: gradiente crema → trasparente sopra immagine posizionata a destra */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            #F0EAD8 0%,
            rgba(240, 234, 216, 0.97) 18%,
            rgba(240, 234, 216, 0.88) 32%,
            rgba(240, 234, 216, 0.5) 48%,
            rgba(240, 234, 216, 0.12) 62%,
            transparent 76%
          ), url(${HERO_BG})`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:flex-row lg:items-center lg:gap-8 lg:pb-20 lg:pt-24">
        {/* Colonna testo */}
        <div className="max-w-xl shrink-0 lg:max-w-[min(100%,28rem)] xl:max-w-2xl">
          <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-castagno-gold/60 bg-castagno-cream/75 py-1.5 pl-1.5 pr-4 text-sm font-semibold leading-snug text-castagno-forest shadow-sm backdrop-blur-sm">
            <img
              src="/il-castagno-logo.png"
              alt="Logo Il Castagno"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full bg-white/50 object-contain p-0.5"
              decoding="async"
            />
            <span className="pr-0.5">Casa famiglia per anziani</span>
          </p>

          <h1
            id="hero-heading"
            className="mt-6 font-serif text-[2.95rem] font-semibold leading-[1.08] tracking-tight text-castagno-forest sm:text-6xl sm:leading-[1.06] xl:text-7xl xl:leading-[1.05]"
          >
            Il Castagno
          </h1>

          <p className="mt-5 max-w-[13rem] text-balance text-base font-normal leading-relaxed text-castagno-muted sm:max-w-[15rem] sm:text-lg sm:leading-relaxed">
            Un luogo in cui godere del lusso della pace e il dolce vivere immersi nella quiete dei nostri territori
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              to="/contatti"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-castagno-forest px-7 py-3 text-base font-semibold text-castagno-cream shadow-lg transition hover:bg-castagno-forest/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-castagno-forest"
            >
              <Calendar className="h-5 w-5 shrink-0" aria-hidden />
              Prenota una Visita
            </Link>
            <Link
              to="/servizi"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-castagno-wood/45 bg-castagno-cream/70 px-7 py-3 text-base font-semibold text-castagno-forest backdrop-blur-sm transition hover:border-castagno-wood hover:bg-castagno-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-castagno-forest"
            >
              Esplora i Servizi
            </Link>
          </div>
        </div>

        {/* Polaroid desktop: assolute a destra */}
        <div className="relative mt-14 hidden min-h-[420px] flex-1 lg:mt-0 lg:block">
          <PolaroidCard
            src={POLAROID_IMAGES.comfort}
            alt="Camera singola luminosa e curata"
            caption="Comfort a 5 stelle"
            className="absolute right-[4%] top-[6%] z-10 xl:right-[10%]"
            rotationClass="rotate-[3deg]"
            floatAnimationClass={floatA}
          />
          <PolaroidCard
            src={POLAROID_IMAGES.care}
            alt="Giardino e spazi verdi della struttura"
            caption="Assistenza Professionale h24"
            className="absolute bottom-[10%] right-[18%] z-20 xl:right-[24%]"
            rotationClass="-rotate-[3deg]"
            floatAnimationClass={floatB}
          />
        </div>

        {/* Polaroid mobile / tablet: sotto il testo, senza sovrapposizione */}
        <div className="flex flex-shrink-0 justify-center gap-5 pb-2 pt-2 lg:hidden">
          <PolaroidCard
            src={POLAROID_IMAGES.comfort}
            alt="Camera singola luminosa e curata"
            caption="Comfort a 5 stelle"
            className="max-w-[46%] scale-[0.92] sm:max-w-none sm:scale-100"
            rotationClass="rotate-[2deg]"
            floatAnimationClass={floatA}
          />
          <PolaroidCard
            src={POLAROID_IMAGES.care}
            alt="Giardino e spazi verdi della struttura"
            caption="Assistenza Professionale h24"
            className="max-w-[46%] scale-[0.92] sm:max-w-none sm:scale-100"
            rotationClass="-rotate-[2deg]"
            floatAnimationClass={floatB}
          />
        </div>
      </div>
    </section>
  )
}
