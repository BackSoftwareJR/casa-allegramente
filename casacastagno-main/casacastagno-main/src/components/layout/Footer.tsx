import { NavLink } from 'react-router-dom'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { CONTATTI, WHATSAPP_PREFILL } from '../../data/contatti'

const footerNavLinks = [
  { to: '/', label: 'Home' },
  { to: '/la-villa', label: 'La villa' },
  { to: '/servizi', label: 'Servizi' },
  { to: '/laboratori', label: 'Laboratori' },
  { to: '/contatti', label: 'Contatti' },
] as const

const legalLinks = [
  { to: '/privacy', label: 'Privacy' },
  { to: '/cookie', label: 'Cookie' },
  { to: '/termini', label: 'Termini' },
] as const

const whatsappHref = `https://wa.me/${CONTATTI.whatsapp}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block py-1.5 transition-colors',
    isActive
      ? 'font-semibold text-castagno-cream'
      : 'text-castagno-cream/65 hover:text-castagno-cream',
  ].join(' ')

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-castagno-forest text-castagno-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-footer-mesh opacity-90"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-serif text-3xl font-semibold tracking-tight text-castagno-cream sm:text-4xl">
              Il Castagno
            </p>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-castagno-cream/70">
              Casa famiglia per anziani in Valcuvia: quattro posti, assistenza h24 e accoglienza su
              misura.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-2xl bg-emerald-600/90 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-castagno-gold"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Scrivici su WhatsApp
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-castagno-gold/80">
              Naviga
            </p>
            <ul className="mt-4 space-y-1 text-base">
              {footerNavLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} end={to === '/'} className={navLinkClass}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-castagno-gold/80">
              Contatti
            </p>
            <ul className="mt-4 space-y-4 text-base text-castagno-cream/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-castagno-gold/90" aria-hidden />
                <span>
                  Via Cunardo 20
                  <br />
                  Bedero Valcuvia, Varese (VA)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-castagno-gold/90" aria-hidden />
                <a
                  className="font-medium text-castagno-cream hover:underline"
                  href={`tel:${CONTATTI.telefono}`}
                >
                  {CONTATTI.telefonoDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-castagno-gold/90" aria-hidden />
                <a
                  className="font-medium text-castagno-cream hover:underline"
                  href={`mailto:${CONTATTI.email}`}
                >
                  {CONTATTI.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-castagno-gold/80">
              Orari visite
            </p>
            <p className="mt-4 text-base leading-relaxed text-castagno-cream/70">
              Su appuntamento, tutti i giorni. Scrivici per fissare un sopralluogo o una chiamata
              conoscitiva.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-castagno-cream/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-castagno-cream/55">
            © {year} Il Castagno — Casa famiglia per anziani. Tutti i diritti riservati.
          </p>
          <nav aria-label="Documenti legali" className="flex flex-wrap items-center gap-x-1 text-sm">
            {legalLinks.map(({ to, label }, i) => (
              <span key={to} className="inline-flex items-center">
                {i > 0 ? (
                  <span className="mx-2 text-castagno-cream/35" aria-hidden>
                    ·
                  </span>
                ) : null}
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    [
                      'transition-colors',
                      isActive
                        ? 'font-semibold text-castagno-cream'
                        : 'text-castagno-cream/55 hover:text-castagno-cream',
                    ].join(' ')
                  }
                >
                  {label}
                </NavLink>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
