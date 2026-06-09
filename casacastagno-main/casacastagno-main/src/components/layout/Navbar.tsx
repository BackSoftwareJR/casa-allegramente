import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useScrolled } from '../../hooks/useScrolled'

const links = [
  { to: '/', label: 'Home' },
  { to: '/la-villa', label: 'La villa' },
  { to: '/servizi', label: 'Servizi' },
  { to: '/laboratori', label: 'Laboratori' },
  { to: '/contatti', label: 'Contatti' },
]

function DesktopNavLink({
  to,
  label,
  end,
}: {
  to: string
  label: string
  end?: boolean
}) {
  return (
    <NavLink to={to} end={end} className="group relative px-3 py-2">
      {({ isActive }) => (
        <>
          <span
            className={[
              'text-[0.9375rem] font-medium tracking-wide transition-colors duration-200',
              isActive ? 'text-castagno-forest' : 'text-castagno-muted group-hover:text-castagno-ink',
            ].join(' ')}
          >
            {label}
          </span>
          <span
            aria-hidden
            className={[
              'absolute -bottom-0.5 left-3 right-3 h-0.5 origin-center rounded-full bg-castagno-forest transition-transform duration-300 ease-out',
              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
            ].join(' ')}
          />
          {isActive ? (
            <span
              aria-hidden
              className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-castagno-gold"
            />
          ) : null}
        </>
      )}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const prefersReducedMotion = useReducedMotion()
  const reduceMotion = prefersReducedMotion === true

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const ease = reduceMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <motion.div
        layout={!reduceMotion}
        transition={ease}
        className={[
          'pointer-events-auto mx-auto w-full',
          reduceMotion ? '' : 'transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          scrolled
            ? 'mx-3 mt-3 max-w-5xl rounded-3xl border border-white/70 bg-white/75 shadow-2xl shadow-castagno-ink/10 backdrop-blur-2xl sm:mx-5 lg:mx-auto'
            : 'relative max-w-full bg-transparent after:pointer-events-none after:absolute after:inset-x-8 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-castagno-gold/55 after:to-transparent',
        ].join(' ')}
      >
        <div
          className={[
            'mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 sm:px-7',
            reduceMotion ? '' : 'transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
            scrolled ? 'py-2' : 'py-5 md:py-6',
          ].join(' ')}
        >
          <NavLink
            to="/"
            className={[
              'font-serif font-semibold text-castagno-forest',
              reduceMotion ? '' : 'transition-all duration-500',
              scrolled ? 'text-xl tracking-[0.14em]' : 'text-2xl tracking-[0.18em] md:text-[1.65rem]',
            ].join(' ')}
          >
            Il Castagno
          </NavLink>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Navigazione principale">
            {links.map(({ to, label }) => (
              <DesktopNavLink key={to} to={to} label={label} end={to === '/'} />
            ))}
          </nav>

          <button
            type="button"
            className={[
              'inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-2xl border p-2.5 md:hidden',
              scrolled
                ? 'border-castagno-forest/15 bg-castagno-forest/5 text-castagno-forest'
                : 'border-castagno-gold/40 bg-white/50 text-castagno-forest backdrop-blur-sm',
            ].join(' ')}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Chiudi menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={ease}
              className="pointer-events-auto fixed inset-0 z-40 bg-castagno-ink/50 backdrop-blur-md md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={ease}
              className="pointer-events-auto fixed inset-0 z-50 flex flex-col justify-end md:hidden"
              aria-label="Menu mobile"
            >
              <motion.div
                initial={reduceMotion ? false : { y: '100%' }}
                animate={{ y: 0 }}
                exit={reduceMotion ? undefined : { y: '100%' }}
                transition={ease}
                className="rounded-t-[2rem] border-t border-white/30 bg-white/90 px-6 pb-10 pt-8 shadow-2xl backdrop-blur-2xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <p className="font-serif text-xl font-semibold tracking-wide text-castagno-forest">
                    Menu
                  </p>
                  <button
                    type="button"
                    className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-2xl bg-castagno-cream-deep text-castagno-forest"
                    aria-label="Chiudi menu"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </motion.div>
                <ul className="flex flex-col gap-1">
                  {links.map(({ to, label }, i) => (
                    <motion.li
                      key={to}
                      initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={
                        reduceMotion ? { duration: 0 } : { delay: 0.05 + i * 0.06, duration: 0.35 }
                      }
                    >
                      <NavLink
                        to={to}
                        end={to === '/'}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          [
                            'flex min-h-[52px] items-center gap-3 rounded-2xl px-4 text-lg font-medium tracking-wide',
                            isActive
                              ? 'bg-castagno-forest text-castagno-cream'
                              : 'text-castagno-ink hover:bg-castagno-cream-deep/80',
                          ].join(' ')
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              aria-hidden
                              className={[
                                'h-2 w-2 rounded-full',
                                isActive ? 'bg-castagno-gold' : 'bg-castagno-gold/40',
                              ].join(' ')}
                            />
                            {label}
                          </>
                        )}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
