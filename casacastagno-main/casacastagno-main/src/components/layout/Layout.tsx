import { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const [showCta, setShowCta] = useState(false)
  const hideTimerRef = useRef<number | null>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  useEffect(() => {
    const HIDE_AFTER_MS = 700
    const MIN_SCROLL_Y = 120

    const onScroll = () => {
      // Mostra solo mentre c'è movimento (su/giù) e dopo un minimo di scroll.
      const shouldShow = window.scrollY > MIN_SCROLL_Y
      setShowCta(shouldShow)

      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current)
      }
      hideTimerRef.current = window.setTimeout(() => {
        setShowCta(false)
      }, HIDE_AFTER_MS)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current)
      }
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenuto-principale"
        className="sr-only left-4 top-4 z-[100] rounded-lg bg-castagno-ink px-4 py-3 text-lg font-semibold text-castagno-cream focus:not-sr-only focus:absolute focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-castagno-gold"
      >
        Vai al contenuto principale
      </a>
      <Navbar />
      <main id="contenuto-principale" className="flex-1 pt-[5.5rem] md:pt-[6.5rem]" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />

      {/* CTA flottante: compare durante lo scroll */}
      <div
        className={`fixed bottom-6 right-6 z-[90] transition duration-300 ${
          showCta ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <Link
          to="/contatti"
          className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-castagno-forest px-6 py-3 font-sans text-base font-semibold text-castagno-cream shadow-lg shadow-castagno-wood/20 ring-1 ring-black/5 transition hover:bg-castagno-forest/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-castagno-gold"
          aria-label="Contattaci"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          Contattaci
        </Link>
      </div>
    </div>
  )
}
