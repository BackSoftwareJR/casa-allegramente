import { motion, useReducedMotion } from 'framer-motion'
import FadeIn from '../ui/FadeIn'

/**
 * Momenti della giornata in forma di racconto.
 * Sostituire gli URL video con clip brevi reali de Il Castagno (MP4/WebM in /public consigliato).
 * I link Mixkit sono placeholder royalty-free; in caso di errore si vede il poster.
 */
const STORY_MOMENTS = [
  {
    time: '07:30 — 10:30',
    title: 'Il risveglio dei sensi',
    lines: [
      'Risveglio lento, come in camera d’albergo: ogni ospite ai suoi tempi.',
      'Colazione con brioches fresche, marmellate, calore, primo rito del giorno.',
    ],
    videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-pouring-coffee-in-a-cup-4039-large.mp4',
    posterSrc:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
  },
  {
    time: '10:30 — 11:30',
    title: 'Cuore del Mattino',
    lines: ['Attività interne individualizzate o di gruppo, uscite insieme sul territorio.'],
    videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-countryside-road-seen-from-the-window-of-a-moving-car-49944-large.mp4',
    posterSrc:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80',
  },
  {
    time: '12:30',
    title: 'Tavola apparecchiata',
    lines: [
      'Pranzo con cucina mediterranea e il menù del giorno.',
      'Riposo pomeridiano (in base alle necessità).',
    ],
    videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-hands-cutting-a-tomato-for-cooking-42566-large.mp4',
    posterSrc:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  },
  {
    time: '15:00 — 16:30',
    title: 'Pomeriggio tra le mani',
    lines: [
      'Merenda, attività occupazionali, ricreative, laboratori, eventuali passeggiate.',
    ],
    videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-woman-preparing-tea-at-home-42579-large.mp4',
    posterSrc:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    time: '19:30',
    title: 'Cena',
    lines: [
      'Dopo cena: momenti di socializzazione e relax, lettura, televisione e chiacchiere tutti insieme.',
    ],
    videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-family-having-dinner-together-4558-large.mp4',
    posterSrc:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
  },
] as const

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

type StoryRowProps = {
  moment: (typeof STORY_MOMENTS)[number]
  stairIndex: number
  motionReduced: boolean
}

function StoryRow({ moment, stairIndex, motionReduced }: StoryRowProps) {
  const imageOnRight = stairIndex % 2 === 1
  const contentAlign = imageOnRight ? 'md:justify-end md:text-right' : 'md:justify-start md:text-left'

  return (
    <motion.article
      layout
      variants={rowVariants}
      whileHover={
        motionReduced
          ? undefined
          : { y: -4, transition: { type: 'spring', stiffness: 380, damping: 24 } }
      }
      className="group relative w-full overflow-hidden rounded-3xl border border-castagno-gold/45 bg-castagno-cream-deep shadow-md shadow-castagno-wood/5 transition-shadow duration-300 hover:border-castagno-gold/70 hover:shadow-lg hover:shadow-castagno-wood/12"
      style={{ backgroundImage: `url(${moment.posterSrc})` }}
    >
      {/* Background rendering (cover + center) */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${moment.posterSrc})` }} aria-hidden />

      {/* Overlay scuro per leggibilità (gradiente: più scuro in basso) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10"
        aria-hidden
      />

      {/* Contenuto sovrapposto (alternanza sinistra/destra) */}
      <div
        className={`relative flex min-h-[18rem] items-end p-8 sm:min-h-[22rem] sm:p-10 ${contentAlign}`}
      >
        <div className={`max-w-xl ${imageOnRight ? 'md:items-end' : 'md:items-start'}`}>
          <p
            className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-stone-100/90 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]"
          >
            {moment.time}
          </p>
          <h3
            className="mt-2 font-serif text-2xl font-semibold leading-snug text-stone-50 [text-shadow:0_2px_22px_rgba(0,0,0,0.6)] sm:text-3xl"
          >
            {moment.title}
          </h3>
          <ul className="mt-4 space-y-2 font-sans text-base leading-relaxed text-stone-100/90 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-lg">
            {moment.lines.map((line, j) => (
              <li key={`${moment.title}-${j}`}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}

export default function DayTimeline() {
  const reduceMotionPref = useReducedMotion() === true

  return (
    <section
      className="relative overflow-hidden bg-castagno-cream py-20 sm:py-24"
      aria-labelledby="giornata-heading"
    >
      <div
        className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-castagno-gold/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-24 h-56 w-56 rounded-full bg-castagno-wood/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-castagno-wood">
              Il ritmo della casa
            </p>
            <h2 id="giornata-heading" className="mt-3 font-serif text-3xl font-semibold text-castagno-forest sm:text-4xl">
              La Giornata Tipo
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-castagno-muted sm:text-xl">
              Un equilibrio tra cura individuale e momenti condivisi, nel rispetto dei tempi di ciascuno.
            </p>
          </div>
        </FadeIn>

        <motion.div
          className="mt-12 flex flex-col gap-5 sm:mt-14 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-8%' }}
          role="list"
        >
          {STORY_MOMENTS.map((moment, i) => (
            <div key={moment.title} role="listitem">
              <StoryRow
                moment={moment}
                stairIndex={i}
                motionReduced={reduceMotionPref}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
