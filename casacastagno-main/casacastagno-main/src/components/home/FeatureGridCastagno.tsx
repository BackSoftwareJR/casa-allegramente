import { useCallback, useId, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { motion } from 'framer-motion'
import { ChevronRight, ChefHat, Home, MapPinned, Users } from 'lucide-react'
import FadeIn from '../ui/FadeIn'

const SECTION_INTRO =
  'Il Castagno nasce per offrire uno spazio studiato per tutti gli over 65 che cercano la differenza, lusso, accoglienza e attenzione continua al singolo e alle sue reali necessità nel contesto raccolto, riservato e curato nei dettagli della nostra Valcuvia, dove ogni ospite è seguito con continuità e rispetto dei tempi personali.'

const items = [
  {
    icon: Home,
    title: 'I NOSTRI SPAZI',
    text:
      'La nostra è una grande villa su un piano unico con vista panoramica, abbiamo 4 spaziose camere singole luminose e ben arredate, grande salone per la zona soggiorno, cucina e 2 bagni di cui uno progettato per diversamente abili. Immersi nella natura della Valcuvia siamo a 2 passi da Varese e dalla vicina Svizzera, vasti panorami rilassanti accompagneranno le vostre giornate. A disposizione dei nostri Ospiti abbiamo un magnifico giardino di circa 5000 mq e un terrazzo coperto.',
  },
  {
    icon: Users,
    title: 'Il TEAM',
    text:
      "Monitoraggio delle esigenze personali di ogni ospite da personale qualificato, con esperienza nel settore, l'empatia di chi ama questo lavoro e l'attenzione di chi ne conosce a fondo l'importanza, monitoraggio delle esigenze di cura, e cura di ogni esigenza dell'ospite",
  },
  {
    icon: ChefHat,
    title: 'LA NOSTRA CUCINA',
    text:
      'Il Castagno si impegna giornalmente per soddisfare i gusti dei propri Ospiti, conosce l\'importanza di vivere momenti conviviali assaporando insieme pasti saporiti, genuini e variegati. I menù verranno condivisi ed eventualmente modificati in base ai gusti personali degli Ospiti, sempre garantendone la massima qualità. Tutti i pasti saranno di alta qualità, basati sulla cucina mediterranea con cibi freschissimi e cucinati con attenzione, il Castagno offrirà pasti come in hotel con diverse scelte a partire dalla colazione sempre con brioches fresche, marmellate bio e torte variegate. Pranzo e cena saranno organizzati con ingredienti di alta qualità, dall\'antipasto al dolce.',
  },
  {
    icon: MapPinned,
    title: 'VALCUVIA, QUIETE E NATURA',
    text:
      "La nostra Valcuvia è un segreto sussurrato tra le Prealpi Varesine, un ampio corridoio verde che si srotola dolcemente tra il blu del Lago Maggiore e la maestosità del massiccio del Campo dei Fiori. Un quadro dove la natura selvaggia e il tocco gentile dell'uomo convivono in un equilibrio d'altri tempi. Al tramonto, le pareti calcaree delle montagne si tingono di rosa e viola, mentre la nebbia leggera del mattino avvolge i campanili romanici, creando un'atmosfera sospesa, quasi onirica. È una terra di silenzio, interrotto solo dal rintocco delle campane o dal fruscio del vento tra le frondi: il giusto contesto per vivere soggiorni brevi o lunghi in un clima vacanziero avvolti nel massimo relax.",
  },
] as const

/**
 * Immagini hero per ogni scheda (placeholder).
 * Sostituire con foto reali de Il Castagno quando disponibili.
 */
const FEATURE_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    alt: 'Ambiente interno accogliente',
  },
  {
    src: '/images/team.png',
    alt: 'Operatrice con ospite in un momento di assistenza e convivialità',
  },
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
    alt: 'Tavola e cucina in struttura',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80',
    alt: 'Paesaggio e quiete della Valcuvia',
  },
] as const

/** Foto aggiuntive degli spazi — integrate nella scheda “I NOSTRI SPAZI”. */
const SPACE_GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    caption: 'Zona giorno',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    caption: 'Corridoio e luce naturale',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    caption: 'Dettaglio arredi',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    caption: 'Spazio conviviale',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80',
    caption: 'Angolo relax',
  },
  {
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
    caption: 'Vista verde',
  },
] as const

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

type GalleryItem = (typeof SPACE_GALLERY)[number]

/** Galleria orizzontale: scrollbar nascosta, avanzamento con pulsante > */
function SpacesGalleryWithNext({ items: galleryItems }: { items: readonly GalleryItem[] }) {
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
        className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-1 pb-1 pt-0.5 sm:gap-5 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        style={{ msOverflowStyle: 'none' }}
        role="region"
        aria-roledescription="carosello"
        aria-label="Altre foto degli spazi de Il Castagno"
      >
        {galleryItems.map((item) => (
          <figure
            key={item.src}
            className="w-[min(88vw,20rem)] shrink-0 snap-center sm:w-[min(72vw,24rem)]"
          >
            <div className="overflow-hidden rounded-2xl ring-1 ring-castagno-gold/35">
              <img
                src={item.src}
                alt={item.caption}
                className="aspect-[4/3] h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-center font-sans text-sm font-medium text-castagno-muted">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Sfumatura a destra + pulsante avanti */}
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

type ExperienceCardProps = {
  title: string
  text: string
  icon: (typeof items)[number]['icon']
  imageSrc: string
  imageAlt: string
  /** Indice solo tra le schede (0–3), per alternare immagine sx/dx ignorando la galleria. */
  stairIndex: number
  reduceMotion: boolean
  /** Se valorizzato, galleria orizzontale integrata nella stessa scheda (es. I NOSTRI SPAZI). */
  galleryItems?: readonly GalleryItem[]
}

function ExperienceCard({
  title,
  text,
  icon: Icon,
  imageSrc,
  imageAlt,
  stairIndex,
  reduceMotion,
  galleryItems,
}: ExperienceCardProps) {
  const imageOnRight = stairIndex % 2 === 1
  const rowDir = imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row'
  const hasGallery = Boolean(galleryItems?.length)

  return (
    <motion.li
      layout
      variants={cardVariants}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              transition: { type: 'spring', stiffness: 420, damping: 22 },
            }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      className={`group relative flex w-full min-h-0 list-none flex-col overflow-hidden rounded-3xl border border-castagno-gold/45 bg-castagno-cream-deep/90 shadow-md shadow-castagno-wood/5 backdrop-blur-[2px] transition-shadow duration-300 hover:border-castagno-gold/70 hover:shadow-xl hover:shadow-castagno-wood/15 ${hasGallery ? '' : 'md:min-h-[13.5rem]'}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(175,168,87,0.12), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(111,65,40,0.08), transparent 50%)',
        }}
        aria-hidden
      />

      <div className={`relative flex min-h-0 flex-col ${rowDir} ${hasGallery ? 'md:min-h-[13.5rem]' : 'flex-1'}`}>
        <div className="relative h-44 shrink-0 overflow-hidden md:h-auto md:w-[40%] md:min-h-[13.5rem]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-[1.03]"
            loading={stairIndex < 2 ? 'eager' : 'lazy'}
          />
          <div
            className={
              imageOnRight
                ? 'absolute inset-0 bg-gradient-to-t from-castagno-forest/55 via-castagno-forest/10 to-transparent md:bg-gradient-to-l md:from-transparent md:via-castagno-forest/15 md:to-castagno-forest/45'
                : 'absolute inset-0 bg-gradient-to-t from-castagno-forest/55 via-castagno-forest/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-castagno-forest/15 md:to-castagno-forest/45'
            }
            aria-hidden
          />
          <span className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-castagno-cream/92 text-castagno-wood shadow-md ring-1 ring-castagno-gold/35 transition duration-300 group-hover:scale-110 group-hover:ring-castagno-gold/60">
            <Icon className="h-5 w-5" strokeWidth={1.85} aria-hidden />
          </span>
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col justify-center p-5 sm:p-6 md:py-7 md:pl-7 md:pr-8">
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-castagno-wood/90">
            Il Castagno
          </p>
          <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-castagno-forest sm:text-2xl">{title}</h3>
          <p className="mt-3 font-sans text-base leading-relaxed text-castagno-muted sm:text-lg">{text}</p>
        </div>
      </div>

      {hasGallery ? (
        <div className="relative border-t border-castagno-gold/35 bg-castagno-cream/50 px-4 pb-4 pt-3 sm:px-6 sm:pb-5 sm:pt-4">
          <SpacesGalleryWithNext items={galleryItems!} />
        </div>
      ) : null}
    </motion.li>
  )
}

export default function FeatureGridCastagno() {
  const reduceMotion = useReducedMotion() === true

  return (
    <section
      className="relative overflow-hidden border-y border-castagno-gold/35 bg-castagno-cream py-20 sm:py-24"
      aria-labelledby="feature-heading"
    >
      <div
        className="pointer-events-none absolute -left-28 top-12 h-72 w-72 rounded-full bg-castagno-gold/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-castagno-wood/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(75,75,48,0.06) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-castagno-wood">
              Quattro pilastri
            </p>
            <h2 id="feature-heading" className="mt-3 font-serif text-3xl font-semibold text-castagno-forest sm:text-4xl">
              L&apos;esperienza Il Castagno
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-castagno-muted sm:text-xl">{SECTION_INTRO}</p>
          </div>
        </FadeIn>

        <div className="mt-12 sm:mt-14">
          <p className="font-serif text-lg font-semibold text-castagno-forest sm:text-xl">
            Cosa rende unica la nostra struttura
          </p>
        </div>

        <motion.ul
          className="mt-6 flex w-full flex-col gap-5 sm:mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-8%' }}
        >
          <ExperienceCard
            title={items[0].title}
            text={items[0].text}
            icon={items[0].icon}
            imageSrc={FEATURE_IMAGES[0].src}
            imageAlt={FEATURE_IMAGES[0].alt}
            stairIndex={0}
            reduceMotion={reduceMotion}
            galleryItems={SPACE_GALLERY}
          />
          <ExperienceCard
            title={items[1].title}
            text={items[1].text}
            icon={items[1].icon}
            imageSrc={FEATURE_IMAGES[1].src}
            imageAlt={FEATURE_IMAGES[1].alt}
            stairIndex={1}
            reduceMotion={reduceMotion}
          />
          <ExperienceCard
            title={items[2].title}
            text={items[2].text}
            icon={items[2].icon}
            imageSrc={FEATURE_IMAGES[2].src}
            imageAlt={FEATURE_IMAGES[2].alt}
            stairIndex={2}
            reduceMotion={reduceMotion}
          />
          <ExperienceCard
            title={items[3].title}
            text={items[3].text}
            icon={items[3].icon}
            imageSrc={FEATURE_IMAGES[3].src}
            imageAlt={FEATURE_IMAGES[3].alt}
            stairIndex={3}
            reduceMotion={reduceMotion}
          />
        </motion.ul>
      </div>
    </section>
  )
}
