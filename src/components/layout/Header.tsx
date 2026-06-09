import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Mail, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/data/content';
import { cn, mailtoHref, telHref, whatsappHref } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  const isHome = pathname === '/';
  const onHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          onHero && !menuOpen
            ? 'bg-transparent'
            : 'border-b border-warm-gray/30 bg-white-warm/95 shadow-warm-sm backdrop-blur-md',
        )}
      >
        <motion.div
          className="absolute bottom-0 left-0 h-px origin-left bg-gradient-to-r from-transparent via-honey to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: reduced ? 0.1 : 0.3 }}
          aria-hidden
        />

        <motion.div className="container-site flex h-[72px] items-center justify-between md:h-20">
          <Link
            to="/"
            className={cn(
              'font-display text-xl font-semibold transition-colors md:text-2xl',
              onHero && !menuOpen ? 'text-white-warm' : 'text-ink',
            )}
            aria-label="Casa Allegramente — torna alla home"
          >
            Casa Allegramente
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
            {navLinks.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  aria-label={link.ariaLabel}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-lg px-3 py-2 font-sans text-base font-medium transition-colors',
                    onHero
                      ? active
                        ? 'text-white-warm'
                        : 'text-white/80 hover:text-white-warm'
                      : active
                        ? 'font-semibold text-terracotta'
                        : 'text-charcoal hover:text-terracotta',
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={telHref(siteConfig.contact.phoneRaw)}
              className="ml-2 inline-flex min-h-11 items-center gap-2 rounded-xl bg-terracotta px-4 py-2 font-sans text-base font-semibold text-white-warm shadow-terracotta-glow transition-all hover:bg-terracotta-dark"
              aria-label={`Chiama ${siteConfig.contact.phone}`}
            >
              <Phone size={18} />
              Chiama
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Chiudi menu di navigazione' : 'Apri menu di navigazione'}
            aria-expanded={menuOpen}
            className={cn(
              'relative z-[60] flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden',
              menuOpen
                ? 'bg-cedar/10 text-cedar'
                : onHero
                  ? 'text-white-warm hover:bg-white/10'
                  : 'text-charcoal hover:bg-cedar/5',
            )}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={reduced ? false : { rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={reduced ? undefined : { rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={reduced ? false : { rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={reduced ? undefined : { rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0.1 : 0.25 }}
            className="fixed inset-0 z-[55] flex flex-col bg-cream lg:hidden"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 50% at 20% 80%, rgba(196,99,46,0.08) 0%, transparent 60%)',
              }}
              aria-hidden
            />

            <motion.div className="border-b border-parchment px-6 pb-4 pt-[5.5rem]">
              <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-honey">Menu</p>
              <p className="mt-1 font-display text-lg text-ink">Casa Allegramente · Rivarolo Canavese</p>
            </motion.div>

            <nav aria-label="Menu mobile" className="flex flex-1 flex-col justify-center px-6 py-8">
              {navLinks.map((link, i) => {
                const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={reduced ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.06 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className="group flex items-center gap-3 py-3"
                    >
                      <span
                        className={cn(
                          'h-px bg-honey transition-all duration-300',
                          active ? 'w-6' : 'w-0 group-hover:w-6',
                        )}
                      />
                      <span
                        className={cn(
                          'font-display text-2xl font-semibold tracking-tight transition-colors sm:text-3xl',
                          active ? 'text-terracotta' : 'text-charcoal group-hover:text-ink',
                        )}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="border-t border-parchment px-6 py-6"
            >
              <p className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.15em] text-muted">
                Contatti
              </p>
              <motion.div className="flex flex-col gap-3">
                <a
                  href={telHref(siteConfig.contact.phoneRaw)}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center gap-3 font-sans text-base font-semibold text-charcoal"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta-50 text-terracotta">
                    <Phone size={16} />
                  </span>
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={mailtoHref(siteConfig.contact.email)}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center gap-3 font-sans text-base font-semibold text-charcoal"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-honey-50 text-honey">
                    <Mail size={16} />
                  </span>
                  {siteConfig.contact.email}
                </a>
                <a
                  href={whatsappHref(siteConfig.contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center gap-3 font-sans text-base font-semibold text-charcoal"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-mist text-sage-dark">
                    <MessageCircle size={16} />
                  </span>
                  Scrivici su WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
