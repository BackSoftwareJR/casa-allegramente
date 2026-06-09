import { useReducedMotion } from 'framer-motion'
import { motion } from 'framer-motion'
import {
  Activity,
  Car,
  Fish,
  PawPrint,
  PersonStanding,
  PlusCircle,
  Scissors,
  Shirt,
  Sparkles,
  Stethoscope,
  Wifi,
} from 'lucide-react'
import FadeIn from '../ui/FadeIn'
import { serviziExtra, serviziInclusi } from '../../data/cartaServizi'

/**
 * Metadati visivi per i servizi inclusi (icone + immagini placeholder).
 * Le schede sono in colonna simmetrica; l’ordine “a scaletta” è dato dall’alternanza immagine sx/dx da md in su.
 */
const INCLUSO_LAYOUT = [
  {
    icon: Stethoscope,
    image: '/home-anziani-ginnastica.jpg',
    imageAlt: 'Anziani durante un momento di ginnastica dolce con fisioterapista',
  },
  {
    icon: Shirt,
    image:
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Biancheria e cura del guardaroba',
  },
  {
    icon: Wifi,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Connessione e contatti con i familiari',
  },
  {
    icon: Sparkles,
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Ambienti puliti e accoglienti',
  },
] as const

/** Icone e immagini per le righe “extra” (stesso ordine di serviziExtra). */
const EXTRA_ROWS = [
  {
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: PersonStanding,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: PawPrint,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: Car,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: Fish,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80',
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

type InclusoCardProps = {
  titolo: string
  testo: string
  icon: (typeof INCLUSO_LAYOUT)[number]['icon']
  image: string
  imageAlt: string
  /** Da md: immagine a destra e testo a sinistra (effetto scaletta alternato). */
  imageOnRight: boolean
  index: number
  reduceMotion: boolean
}

function InclusoCard({
  titolo,
  testo,
  icon: Icon,
  image,
  imageAlt,
  imageOnRight,
  index,
  reduceMotion,
}: InclusoCardProps) {
  const rowDir = imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row'

  return (
    <motion.article
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
      className="group relative flex w-full min-h-0 flex-col overflow-hidden rounded-3xl border border-castagno-gold/40 bg-castagno-cream-deep/90 shadow-md shadow-castagno-wood/5 backdrop-blur-[2px] transition-shadow duration-300 hover:border-castagno-gold/70 hover:shadow-xl hover:shadow-castagno-wood/15 md:min-h-[13.5rem]"
    >
      {/* Texture leggera sulla card */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(175,168,87,0.12), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(111,65,40,0.08), transparent 50%)',
        }}
        aria-hidden
      />

      <div className={`relative flex min-h-0 flex-1 flex-col ${rowDir}`}>
        {/* Immagine: sopra su mobile; da md fascia laterale ~40% per massima estensione orizzontale */}
        <div className="relative h-44 shrink-0 overflow-hidden md:h-auto md:w-[40%] md:min-h-[13.5rem]">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-[1.03]"
            loading={index < 2 ? 'eager' : 'lazy'}
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
            Incluso
          </p>
          <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-castagno-forest sm:text-[1.35rem]">
            {titolo}
          </h3>
          <p className="mt-3 font-sans text-base leading-relaxed text-castagno-muted sm:text-[1.05rem]">{testo}</p>
        </div>
      </div>
    </motion.article>
  )
}

export default function ServicesColumns() {
  const reduceMotion = useReducedMotion() === true

  const inclusoItems = serviziInclusi.map((s, i) => ({
    ...s,
    ...INCLUSO_LAYOUT[i],
  }))

  return (
    <section
      className="relative overflow-hidden bg-castagno-cream py-20 sm:py-24"
      aria-labelledby="services-heading"
    >
      {/* Sfondo decorativo: alone caldi, senza azzurri */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-castagno-gold/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-castagno-wood/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(75,75,48,0.07) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-castagno-wood">
              Carta dei servizi
            </p>
            <h2 id="services-heading" className="mt-3 font-serif text-3xl font-semibold text-castagno-forest sm:text-4xl">
              Servizi: incluso nella retta e su richiesta
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-castagno-muted sm:text-xl">
              Trasparenza e chiarezza: l’essenziale è già nella retta; gli extra si attivano solo quando servono, insieme alla
              famiglia.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 flex flex-col gap-12 xl:grid xl:grid-cols-12 xl:items-start xl:gap-10">
          {/* Colonna simmetrica a “scaletta”: schede impilate, immagine alternata sx/dx da md */}
          <motion.div
            className="xl:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-8%' }}
          >
            <div className="mb-6 flex items-end justify-between gap-4">
              <h3 className="font-serif text-3xl font-semibold text-castagno-forest sm:text-4xl">
                Incluso nella retta
              </h3>
            </div>

            <div className="flex w-full flex-col gap-5">
              {inclusoItems.map((item, i) => (
                <InclusoCard
                  key={item.titolo}
                  titolo={item.titolo}
                  testo={item.testo}
                  icon={item.icon}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  imageOnRight={i % 2 === 1}
                  index={i}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </motion.div>

          {/* Pannello extra — schede interattive con miniatura */}
          <motion.aside
            className="xl:col-span-5"
            initial={reduceMotion ? undefined : { opacity: 0, x: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-castagno-wood/25 bg-gradient-to-br from-castagno-cream-deep via-castagno-cream to-castagno-cream-deep p-1 shadow-xl shadow-castagno-wood/10">
              <div className="rounded-[1.85rem] bg-castagno-cream/80 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-castagno-gold/35 text-castagno-forest ring-2 ring-castagno-gold/50">
                    <PlusCircle className="h-7 w-7" strokeWidth={1.6} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-castagno-forest">Servizi extra</h3>
                    <p className="mt-2 font-sans text-base leading-relaxed text-castagno-muted sm:text-lg">
                      Prestazioni facoltative, spesso con professionisti esterni, su preventivo o accordo con la direzione.
                    </p>
                  </div>
                </div>

                <ul className="mt-8 space-y-3" role="list">
                  {serviziExtra.map((item, i) => {
                    const row = EXTRA_ROWS[i] ?? EXTRA_ROWS[EXTRA_ROWS.length - 1]
                    const Icon = row.icon
                    return (
                      <motion.li
                        key={item.titolo}
                        initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i, duration: 0.35 }}
                      >
                        <div className="group flex cursor-default gap-3 rounded-2xl border border-castagno-gold/25 bg-castagno-cream/90 p-3 pr-4 transition duration-300 hover:border-castagno-gold/55 hover:bg-castagno-cream hover:shadow-md sm:gap-4 sm:p-4">
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl ring-1 ring-castagno-wood/15 transition duration-300 group-hover:ring-castagno-wood/35">
                            <img
                              src={row.image}
                              alt=""
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex min-w-0 flex-1 items-start gap-3 pt-0.5">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-castagno-gold/25 text-castagno-wood transition duration-300 group-hover:bg-castagno-gold/40 group-hover:text-castagno-forest">
                              <Icon className="h-5 w-5" strokeWidth={1.85} aria-hidden />
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="font-sans text-base font-medium leading-snug text-castagno-forest sm:text-[1.05rem]">
                                {item.titolo}
                              </p>
                              <p className="mt-1.5 font-sans text-sm leading-relaxed text-castagno-muted sm:text-[0.95rem]">
                                {item.sottotitolo}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
