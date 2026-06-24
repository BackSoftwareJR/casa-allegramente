'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { navigation, secondaryNavigation, siteConfig } from '@/data/content';
import AnimatedBrandLogo from '@/components/layout/AnimatedBrandLogo';
import { Menu, X, Phone, MessageCircle, Mail, ChevronDown } from 'lucide-react';
import { FlowButton } from '@/components/ui/flow-button';

const SCROLL_THRESHOLD = 40;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const isHome = pathname === '/';
  const isFloating = scrolled || !isHome;
  const isReadable = isFloating;

  const navItems = navigation;

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href.replace('/#', '/')));

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        {/* Top scrim on home hero — keeps nav readable before scroll */}
        {isHome && !isFloating && (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 via-black/20 to-transparent"
            aria-hidden="true"
          />
        )}

        <motion.div
          layout
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className={`pointer-events-auto transition-all duration-400 ease-smooth ${
            isFloating
              ? 'mx-4 mt-3 rounded-full border border-linen-200/80 bg-white/92 shadow-warm-md backdrop-blur-xl md:mx-8 lg:mx-12'
              : 'mx-0 mt-0 rounded-none border border-transparent bg-transparent shadow-none'
          }`}
        >
          <motion.div
            layout
            className={`relative flex items-center justify-between px-4 transition-all duration-400 md:px-6 ${
              isFloating ? 'h-14 md:h-[3.75rem]' : 'h-16 md:h-20'
            }`}
          >
            {/* Scroll progress */}
            <motion.div
              style={{ width: progressWidth }}
              className="absolute bottom-0 left-4 right-4 h-[1.5px] origin-left rounded-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 md:left-6 md:right-6"
            />

            {/* Logo */}
            <Link
              href="/"
              className="group flex shrink-0 items-center"
              onClick={() => setMenuOpen(false)}
              aria-label={`${siteConfig.name} — torna alla home`}
            >
              <AnimatedBrandLogo
                variant={isReadable ? 'dark' : 'light'}
                className={`transition-all duration-400 ${
                  isFloating ? 'text-base md:text-lg' : 'text-lg md:text-xl'
                }`}
              />
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Navigazione principale" className="hidden items-center gap-0.5 lg:flex">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative px-3.5 py-2 font-sans text-sm font-semibold transition-colors duration-200 xl:px-4 ${
                      isReadable
                        ? active ? 'text-warm-brown' : 'text-ink-muted hover:text-warm-brown'
                        : active ? 'text-white' : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 origin-left rounded-full bg-primary transition-all duration-300 xl:left-4 xl:right-4 ${
                        active ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-2.5 lg:flex">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Buongiorno%2C%20vorrei%20informazioni`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                  isReadable
                    ? 'border-linen-300 text-ink-muted hover:border-[#25D366] hover:text-[#25D366]'
                    : 'border-white/35 text-white/75 hover:border-white hover:text-white'
                }`}
              >
                <MessageCircle size={16} />
              </a>
              <FlowButton
                as="a"
                href={`tel:${siteConfig.contact.phoneRaw}`}
                icon={<Phone size={14} strokeWidth={2.5} />}
                iconPosition="left"
                className="py-2.5"
              >
                {siteConfig.contact.phone}
              </FlowButton>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={menuOpen}
              className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 lg:hidden ${
                menuOpen
                  ? 'bg-primary/10 text-warm-brown'
                  : isReadable
                    ? 'text-warm-brown hover:bg-primary/5'
                    : 'text-white hover:bg-white/10'
              }`}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </motion.div>
      </header>

      {/* Mobile menu — light, airy panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-linen-50/98 backdrop-blur-xl lg:hidden"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 90%, rgba(232,118,10,0.08) 0%, transparent 60%)' }}
              aria-hidden="true"
            />

            <nav aria-label="Menu mobile" className="relative flex flex-1 flex-col justify-center px-8 pb-8 pt-24">
              <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70">
                Menu
              </p>
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.04 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center gap-3 py-3"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-5" />
                    <span
                      className={`font-sans text-lg font-semibold transition-colors duration-200 ${
                        isActive(item.href) ? 'text-primary' : 'text-warm-brown/80 group-hover:text-warm-brown'
                      }`}
                      style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', letterSpacing: '-0.02em' }}
                    >
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-8 border-t border-linen-200 pt-6"
              >
                <p className="mb-3 flex items-center gap-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                  <ChevronDown size={12} className="text-primary/60" />
                  Scopri di più
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {secondaryNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-sans text-sm font-medium text-ink-muted transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="relative border-t border-linen-200 bg-white/80 px-8 py-6"
            >
              <p className="mb-4 font-sans text-xs uppercase tracking-[0.18em] text-ink-muted">Contattaci</p>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center gap-3 font-sans text-sm font-semibold text-warm-brown"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Phone size={14} className="text-primary" />
                  </span>
                  <span>
                    {siteConfig.contact.phone}
                    <span className="mt-0.5 block text-xs font-normal text-ink-muted">{siteConfig.contact.phoneContactNote}</span>
                  </span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-sans text-sm font-semibold text-warm-brown"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/10">
                    <MessageCircle size={14} className="text-[#25D366]" />
                  </span>
                  {siteConfig.contact.whatsappDisplay}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 font-sans text-sm font-semibold text-warm-brown"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Mail size={14} className="text-primary" />
                  </span>
                  {siteConfig.contact.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
