import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { navLinks, siteConfig } from '@/data/content';
import { cn, mailtoHref, telHref, whatsappHref } from '@/lib/utils';

function columnTone(index: number) {
  const isMiddle = index === 1 || index === 2;
  return isMiddle
    ? 'bg-burgundy-light/45'
    : 'bg-burgundy-dark/60';
}

export function Footer() {
  const { contact } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="section-bg-burgundy relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-honey/40 to-transparent" />

      <div className="container-site relative py-12 md:py-16">
        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {/* Colonna 1 — Brand */}
          <div className={cn('px-6 py-8 md:px-7 md:py-10', columnTone(0))}>
            <p className="font-display text-2xl font-semibold text-cream/90">Casa Allegramente</p>
            <p className="mt-2 font-sans text-sm text-honey">{siteConfig.tagline}</p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-cream/45">
              Casa famiglia per anziani
              <br />
              Rivarolo Canavese (TO)
            </p>
          </div>

          {/* Colonna 2 — Esplora */}
          <div className={cn('px-6 py-8 md:px-7 md:py-10', columnTone(1))}>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-honey">
              Esplora
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-cream/80 transition-colors hover:text-honey-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 3 — Contatti */}
          <div className={cn('px-6 py-8 md:px-7 md:py-10', columnTone(2))}>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-honey">
              Contatti
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={telHref(contact.phoneRaw)}
                  className="flex items-center gap-2 font-sans text-sm text-cream/80 transition-colors hover:text-honey-light"
                >
                  <Phone size={16} className="shrink-0 text-honey" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref(contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-cream/80 transition-colors hover:text-honey-light"
                >
                  <MessageCircle size={16} className="shrink-0 text-honey" />
                  Scrivici su WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={mailtoHref(contact.email)}
                  className="flex items-center gap-2 font-sans text-sm text-cream/80 transition-colors hover:text-honey-light"
                >
                  <Mail size={16} className="shrink-0 text-honey" />
                  {contact.email}
                </a>
              </li>
              <li className="font-sans text-sm leading-relaxed text-cream/45">
                {contact.address.full}
                <br />
                {contact.hours}
              </li>
            </ul>
          </div>

          {/* Colonna 4 — Informazioni */}
          <div className={cn('px-6 py-8 md:px-7 md:py-10', columnTone(3))}>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-honey">
              Informazioni
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="font-sans text-sm text-cream/80 transition-colors hover:text-honey-light"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie"
                  className="font-sans text-sm text-cream/80 transition-colors hover:text-honey-light"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
            <p className="mt-6 font-sans text-xs text-cream/45">
              © {year} Casa Allegramente · Tutti i diritti riservati
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-honey/20">
        <div className="container-site py-4">
          <p className="text-center font-sans text-xs text-cream/45">P.IVA: [DA INSERIRE]</p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-honey/20 to-transparent" />
    </footer>
  );
}
