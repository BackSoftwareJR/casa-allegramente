import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { CONTATTI, WHATSAPP_PREFILL } from '../data/contatti'

const SEDE = {
  label: 'Il Castagno — Casa famiglia',
  lines: ['Via Cunardo 20', 'Bedero Valcuvia (VA)', 'Italia'],
  embedSrc:
    'https://www.google.com/maps?q=Via+Cunardo+20,+Bedero+Valcuvia+VA,+Italia&hl=it&z=17&output=embed',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Via Cunardo 20, Bedero Valcuvia, Provincia di Varese, Italia'),
} as const

const whatsappHref = `https://wa.me/${CONTATTI.whatsapp}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`

const CTA_LINKS = [
  {
    id: 'whatsapp',
    label: 'Scrivici su WhatsApp',
    href: whatsappHref,
    icon: MessageCircle,
    external: true,
    display: 'Risposta rapida, anche da mobile',
    accent: true,
  },
  {
    id: 'phone',
    label: 'Chiamaci',
    href: `tel:${CONTATTI.telefono}`,
    icon: Phone,
    external: false,
    display: CONTATTI.telefonoDisplay,
    accent: false,
  },
  {
    id: 'email',
    label: "Invia un'email",
    href: `mailto:${CONTATTI.email}`,
    icon: Mail,
    external: false,
    display: CONTATTI.email,
    accent: false,
  },
] as const

const DOCUMENTI = [
  'Contratto tra le parti',
  "Fotocopia carta d'identità e copia Codice fiscale",
  'Tessera sanitaria',
  'Esenzione ticket (se in possesso)',
  'Documentazione sanitaria aggiornata',
  'Nominativo Medico Curante',
  'Scheda anamnesi',
  "Certificato di autosufficienza, attestante la possibilità di entrare in Casa famiglia con assistenza e vigilanza H 24",
  'Certificato terapia in atto con posologia redatto dal medico curante.',
] as const

function FloatingField({
  id,
  label,
  required,
  type = 'text',
  ariaInvalid,
  onChange,
}: {
  id: string
  label: string
  required?: boolean
  type?: string
  ariaInvalid?: boolean
  onChange?: () => void
}) {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder=" "
        aria-invalid={ariaInvalid}
        onChange={onChange}
        className="peer w-full rounded-2xl border-0 bg-white/90 px-4 pb-3 pt-7 text-base text-castagno-ink shadow-sm ring-2 ring-castagno-cream-deep outline-none transition focus:ring-castagno-forest"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-5 text-sm text-castagno-muted transition-all peer-focus:top-2.5 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-castagno-forest peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-castagno-forest"
      >
        {label}
        {required ? ' *' : ''}
      </label>
    </div>
  )
}

export default function Contatti() {
  const [sent, setSent] = useState(false)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [contactError, setContactError] = useState(false)
  const [docsOpen, setDocsOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const reduceMotion = prefersReducedMotion === true

  const cardMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-40px' },
      }

  return (
    <>
      <Helmet>
        <title>Contatti — Il Castagno</title>
        <meta
          name="description"
          content="Contatta Il Castagno a Bedero Valcuvia (VA), Via Cunardo 20: disponibilità, visite e informazioni."
        />
      </Helmet>

      <section className="-mt-[5.5rem] bg-hero-contact pt-[5.5rem] md:-mt-[6.5rem] md:pt-[6.5rem]">
        <div className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-castagno-gold/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-castagno-sage/25 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-castagno-gold/90"
            >
              Siamo qui per te
            </motion.p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { delay: 0.08 }}
              className="mt-4 font-serif text-5xl font-semibold tracking-tight text-castagno-cream sm:text-6xl lg:text-7xl"
            >
              Parliamone
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { delay: 0.14 }}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-castagno-cream/75 sm:text-xl"
            >
              Disponibilità, laboratori, visite in struttura: scegli il canale che preferisci e ti
              rispondiamo al più presto.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {CTA_LINKS.map(({ id, label, href, icon: Icon, external, display, accent }, i) => (
            <motion.li
              key={id}
              {...cardMotion}
              transition={reduceMotion ? { duration: 0 } : { delay: i * 0.1, duration: 0.5 }}
              className={accent ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={[
                  'group flex min-h-[140px] flex-col justify-between rounded-3xl p-6 transition duration-300',
                  'hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-castagno-forest',
                  accent
                    ? 'bg-gradient-to-br from-emerald-50 via-white to-white ring-2 ring-emerald-600/25 shadow-lg shadow-emerald-900/5'
                    : 'bg-white ring-2 ring-castagno-cream-deep shadow-md shadow-castagno-ink/5 hover:ring-castagno-forest/20',
                ].join(' ')}
              >
                <span
                  className={[
                    'inline-flex h-14 w-14 items-center justify-center rounded-2xl',
                    accent
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/30'
                      : 'bg-castagno-forest/10 text-castagno-forest',
                  ].join(' ')}
                >
                  <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                </span>
                <span className="mt-6">
                  <span className="block text-xl font-semibold text-castagno-forest">{label}</span>
                  <span className="mt-1 block text-sm text-castagno-muted">{display}</span>
                </span>
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div
          {...cardMotion}
          transition={reduceMotion ? { duration: 0 } : { delay: 0.2, duration: 0.5 }}
          className="mt-14"
        >
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-castagno-ink/10 ring-1 ring-castagno-cream-deep">
            <motionlessDecor />

            <motionlessDecor />

            <div className="border-b border-castagno-cream-deep bg-gradient-to-r from-castagno-cream to-white px-6 py-6 sm:px-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-castagno-forest text-castagno-cream">
                  <MapPin className="h-6 w-6" strokeWidth={2} aria-hidden />
                </span>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-castagno-forest">
                    Dove siamo
                  </h2>
                  <p className="mt-1 text-sm font-medium text-castagno-muted">{SEDE.label}</p>
                </div>
              </div>
              <address className="mt-4 font-sans text-base leading-relaxed text-castagno-muted not-italic">
                {SEDE.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={SEDE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[48px] items-center gap-2 text-sm font-semibold text-castagno-forest underline decoration-castagno-gold/70 underline-offset-4 transition hover:text-castagno-sage-deep"
              >
                Apri in Google Maps
                <ExternalLink className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
              </a>
            </div>
            <div className="relative aspect-[4/3] w-full min-h-[240px] bg-castagno-cream-deep sm:aspect-video sm:min-h-[320px]">
              <iframe
                title="Mappa: Il Castagno, Via Cunardo 20, Bedero Valcuvia"
                src={SEDE.embedSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          {...cardMotion}
          transition={reduceMotion ? { duration: 0 } : { delay: 0.28, duration: 0.5 }}
          className="mt-14"
        >
          <h2 className="font-serif text-3xl font-semibold text-castagno-forest">
            Oppure compila il modulo
          </h2>
          <form
            className="mt-6 space-y-5 rounded-3xl border border-white/60 bg-white/55 p-6 shadow-glass backdrop-blur-xl sm:p-8"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
              const telefono = (form.elements.namedItem('telefono') as HTMLInputElement).value.trim()
              if (!email && !telefono) {
                setContactError(true)
                return
              }
              setContactError(false)
              setSent(true)
            }}
          >
            <FloatingField id="name" label="Nome" required />

            <div className="grid gap-5 sm:grid-cols-2">
              <FloatingField
                id="email"
                label="Email"
                type="email"
                ariaInvalid={contactError}
                onChange={() => contactError && setContactError(false)}
              />
              <FloatingField
                id="telefono"
                label="Telefono"
                type="tel"
                ariaInvalid={contactError}
                onChange={() => contactError && setContactError(false)}
              />
            </div>

            {contactError ? (
              <p className="text-sm font-medium text-red-700" role="alert">
                Inserisci almeno un recapito: email o telefono.
              </p>
            ) : (
              <p className="text-xs text-castagno-muted">Indica almeno email o telefono.</p>
            )}

            <div className="relative">
              <textarea
                id="msg"
                name="msg"
                rows={4}
                placeholder=" "
                className="peer w-full rounded-2xl border-0 bg-white/90 px-4 pb-3 pt-7 text-base text-castagno-ink shadow-sm ring-2 ring-castagno-cream-deep outline-none transition focus:ring-castagno-forest"
              />
              <label
                htmlFor="msg"
                className="pointer-events-none absolute left-4 top-5 text-sm text-castagno-muted transition-all peer-focus:top-2.5 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-castagno-forest peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-castagno-forest"
              >
                Messaggio
              </label>
            </div>

            <label className="flex min-h-[48px] cursor-pointer items-start gap-3 text-sm leading-relaxed text-castagno-muted">
              <input
                type="checkbox"
                name="privacy"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                required
                className="mt-1 h-5 w-5 shrink-0 rounded border-castagno-gold/45 text-castagno-forest focus:ring-castagno-gold/50"
              />
              <span>
                Ho letto l&apos;
                <Link
                  to="/privacy"
                  className="font-semibold text-castagno-forest underline decoration-castagno-gold/70 underline-offset-2 hover:text-castagno-sage-deep"
                >
                  informativa sulla privacy
                </Link>{' '}
                e acconsento al trattamento dei dati per rispondere alla mia richiesta.
              </span>
            </label>

            <button
              type="submit"
              disabled={!privacyAccepted}
              className="w-full min-h-[52px] rounded-2xl bg-castagno-forest px-5 py-3 text-base font-semibold text-castagno-cream shadow-lg shadow-castagno-forest/25 transition hover:bg-castagno-sage-ink disabled:cursor-not-allowed disabled:opacity-50"
            >
              Invia messaggio
            </button>

            {sent ? (
              <p className="text-center text-sm font-medium text-emerald-800" role="status">
                Messaggio inviato. Ti risponderemo al più presto.
              </p>
            ) : null}
          </form>
        </motion.div>

        <section className="mt-16 border-t border-castagno-gold/15 pt-8">
          <button
            type="button"
            onClick={() => setDocsOpen((v) => !v)}
            aria-expanded={docsOpen}
            className="flex w-full min-h-[48px] items-center justify-between gap-4 rounded-2xl px-2 text-left text-sm text-castagno-muted transition hover:bg-castagno-cream-deep/50 hover:text-castagno-forest"
          >
            <span>
              <span className="block font-medium text-castagno-forest/80">
                Accesso alla Casa Famiglia
              </span>
              <span className="mt-0.5 block text-xs">
                Documenti richiesti per l&apos;ingresso — {DOCUMENTI.length} voci
              </span>
            </span>
            <ChevronDown
              className={[
                'h-5 w-5 shrink-0 text-castagno-wood transition-transform duration-300',
                docsOpen ? 'rotate-180' : '',
              ].join(' ')}
              aria-hidden
            />
          </button>

          <AnimatePresence initial={false}>
            {docsOpen ? (
              <motion.div
                initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div className="mt-4 rounded-2xl border border-castagno-gold/15 bg-castagno-cream-deep/40 p-5 sm:p-6">
                  <p className="text-sm leading-relaxed text-castagno-muted">
                    L&apos;ingresso alla Casa Famiglia Il Castagno prevede la compilazione
                    dell&apos;apposita modulistica che raccoglie tutte le informazioni di tipo
                    anagrafico, sociale e sanitario necessarie ad organizzare l&apos;assistenza e la
                    vigilanza h 24 nel migliore dei modi.
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm text-castagno-muted sm:grid-cols-2">
                    {DOCUMENTI.map((doc) => (
                      <li key={doc} className="flex gap-2 rounded-lg bg-white/50 px-3 py-2">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-castagno-wood/60"
                          aria-hidden
                        />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </section>
      </div>
    </>
  )
}
