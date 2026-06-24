'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  AnimatePresence,
} from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CalendarCheck,
  DoorOpen,
} from 'lucide-react';
import { siteConfig, pageHeroImages, visitCta } from '@/data/content';
import SectionPastelBg from '@/components/ui/SectionPastelBg';
import { staggerContainer, fadeUp, viewportOptions } from '@/lib/animations';

const reasons = [
  'Visita completamente gratuita, senza nessun obbligo',
  'Ti mostriamo ogni spazio della struttura',
  'Incontri il personale e capisci la vita quotidiana',
  'Rispondiamo a ogni domanda senza fretta',
  'Valutiamo insieme le esigenze del tuo familiare',
];

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Chiamaci o scrivici',
    body: `Un messaggio WhatsApp o una telefonata bastano. ${siteConfig.contact.phoneContactNote}.`,
  },
  {
    num: '02',
    icon: CalendarCheck,
    title: 'Scegliamo insieme il giorno',
    body: 'Troviamo l\'orario più comodo per te e la tua famiglia, anche nel weekend.',
  },
  {
    num: '03',
    icon: DoorOpen,
    title: 'Vieni a respirare l\'atmosfera',
    body: 'Ti accogliamo in struttura, ti mostriamo tutto e rispondiamo con calma.',
  },
];

const contactLinks = [
  {
    icon: Phone,
    label: 'Telefono',
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phoneRaw}`,
    color: 'text-gold',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: siteConfig.contact.whatsappDisplay,
    href: `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Buongiorno, vorrei prenotare una visita a ${siteConfig.name}`)}`,
    color: 'text-[#25D366]',
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    color: 'text-gold',
  },
  {
    icon: MapPin,
    label: 'Indirizzo',
    value: siteConfig.contact.address.full,
    href: siteConfig.contact.maps.googlemaps,
    color: 'text-gold',
  },
];

function ActionCard() {
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Buongiorno, vorrei prenotare una visita a ${siteConfig.name}`)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOptions}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-lg"
    >
      <div className="relative overflow-hidden rounded-2xl border border-linen-200/90 bg-white/95 p-6 shadow-warm-sm backdrop-blur-sm md:p-7">
        <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />

        <div className="relative">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-primary/80">
            Gratuita · senza impegno
          </p>

          <h3
            className="mt-3 font-display font-semibold text-warm-brown text-balance"
            style={{ fontSize: 'clamp(1.35rem, 3.2vw, 1.75rem)', letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            {visitCta.label}{' '}
            <span className="text-gradient-gold">oggi</span>
          </h3>
          <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-ink-muted">
            Una chiamata o un messaggio bastano. Siamo a Rivarolo Canavese, pronti ad accoglierti.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="group flex items-center gap-3 rounded-xl border border-linen-200 bg-linen-50/80 px-3.5 py-3 transition-all hover:border-primary/30 hover:bg-white hover:shadow-warm-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Phone size={16} strokeWidth={2.25} />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block font-sans text-sm font-semibold text-warm-brown">
                  {siteConfig.contact.phoneCtaLabel}
                </span>
                <span className="mt-0.5 block truncate font-sans text-xs text-ink-muted">
                  {siteConfig.contact.phone}
                </span>
              </span>
              <ArrowRight
                size={14}
                className="shrink-0 text-ink-muted/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-linen-200 bg-linen-50/80 px-3.5 py-3 transition-all hover:border-[#25D366]/35 hover:bg-white hover:shadow-warm-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                <MessageCircle size={16} strokeWidth={2.25} />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block font-sans text-sm font-semibold text-warm-brown">
                  WhatsApp
                </span>
                <span className="mt-0.5 block font-sans text-xs text-ink-muted">
                  Scrivici quando vuoi
                </span>
              </span>
              <ArrowRight
                size={14}
                className="shrink-0 text-ink-muted/40 transition-transform group-hover:translate-x-0.5 group-hover:text-[#25D366]"
                aria-hidden="true"
              />
            </a>
          </div>

          <p className="mt-4 flex items-start gap-2 font-sans text-xs leading-relaxed text-ink-muted">
            <Clock size={12} className="mt-0.5 shrink-0 text-primary/60" />
            {siteConfig.contact.hours}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function VisitSection() {
  const prefersReduced = useReducedMotion();
  const [bgIndex, setBgIndex] = useState(0);

  const backgrounds = [
    { src: pageHeroImages.doveSiamo, alt: `Ingresso ${siteConfig.name} — Rivarolo Canavese` },
    { src: pageHeroImages.chiSiamo, alt: 'Giardino e facciata villa AllegraMente' },
  ];

  useEffect(() => {
    if (prefersReduced) return;
    const timer = setInterval(() => {
      setBgIndex((i) => (i + 1) % backgrounds.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [prefersReduced, backgrounds.length]);

  return (
    <section
      id="contatti"
      aria-label={visitCta.label}
      className="relative bg-transparent py-20 md:py-28"
    >
      <SectionPastelBg hue="brown" className="py-0">
      <div className="container-site">
        <div className="section-card overflow-hidden">
          {/* Subtle photo strip */}
          <div className="relative h-44 overflow-hidden md:h-52">
            <AnimatePresence initial={false}>
              <motion.div
                key={bgIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={backgrounds[bgIndex].src}
                  alt={backgrounds[bgIndex].alt}
                  fill
                  sizes="100vw"
                  className={`object-cover ${prefersReduced ? '' : 'ken-burns'}`}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
          </div>

          <div className="px-6 py-12 md:px-12 md:py-16">
        {/* ── Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-primary"
          >
            {visitCta.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display font-semibold text-warm-brown text-balance"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
            }}
          >
            Vieni a trovarci.{' '}
            <span className="text-gradient-gold">È il passo che conta.</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="mx-auto mt-6 gold-divider" />
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-ink-light md:text-lg"
          >
            Nessun modulo, nessuna attesa. Chiamaci o scrivici — ti accogliamo in struttura
            e ti mostriamo come viviamo ogni giorno a Rivarolo Canavese.
          </motion.p>
        </motion.div>

        {/* ── Action card (hero focal point) ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16"
        >
          <ActionCard />
        </motion.div>

        {/* ── 3-step path ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-16 grid gap-4 md:mt-20 md:grid-cols-3 md:gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-linen-200 bg-linen-50 p-6 transition-colors hover:border-primary/25 hover:bg-white hover:shadow-warm-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <step.icon size={18} className="text-primary" />
                </div>
                <span className="font-sans text-3xl font-bold leading-none text-linen-300 transition-colors group-hover:text-primary/20">
                  {step.num}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-warm-brown">{step.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">{step.body}</p>
              {i < steps.length - 1 && (
                <ArrowRight
                  size={16}
                  className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-gold/30 md:block"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Reasons + contact grid ── */}
        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.p variants={fadeUp} className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-primary/80">
              Cosa aspettarti
            </motion.p>
            <motion.ul variants={staggerContainer} className="mt-5 space-y-3">
              {reasons.map((r) => (
                <motion.li
                  key={r}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-xl border border-transparent px-3 py-2 transition-colors hover:border-linen-200 hover:bg-linen-50"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="font-sans text-sm leading-relaxed text-ink-light">{r}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-2 gap-3"
          >
            {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col justify-between rounded-2xl border border-linen-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-warm-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linen-100 transition-colors group-hover:bg-primary/10">
                  <Icon size={16} className={color} />
                </div>
                <div className="mt-4 min-w-0">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-wider text-ink-muted">{label}</p>
                  <p
                    className={`mt-1 font-sans text-xs font-semibold leading-tight text-ink${
                      label === 'Telefono' ? ' md:whitespace-nowrap' : ''
                    }`}
                  >
                    {value}
                  </p>
                  {label === 'Telefono' && (
                    <p className="mt-1 font-sans text-[10px] leading-tight text-ink-muted">
                      {siteConfig.contact.phoneContactNote}
                    </p>
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
          </div>
        </div>
      </div>
      </SectionPastelBg>
    </section>
  );
}
