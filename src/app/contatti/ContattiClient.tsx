'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
import SectionPastelBg from '@/components/ui/SectionPastelBg';
import { FlowButton } from '@/components/ui/flow-button';
import { siteConfig, visitCta } from '@/data/content';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations';

const LocationMap = dynamic(() => import('@/components/ui/location-map'), {
  loading: () => <div className="h-[420px] rounded-2xl bg-linen-200" aria-hidden="true" />,
});

const { contact } = siteConfig;

const contactCards = [
  {
    icon: Phone,
    label: 'Telefono',
    value: contact.phone,
    note: contact.phoneContactNote,
    href: `tel:${contact.phoneRaw}`,
    accent: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: contact.whatsappDisplay,
    note: 'Risposta rapida, anche fuori orario',
    href: `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Buongiorno, vorrei informazioni su ${siteConfig.name}`)}`,
    accent: 'text-[#25D366]',
    bg: 'bg-[#25D366]/10',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    note: 'Per richieste dettagliate',
    href: `mailto:${contact.email}`,
    accent: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: MapPin,
    label: 'Indirizzo',
    value: contact.address.street,
    note: `${contact.address.cap} ${contact.address.city} (${contact.address.province})`,
    href: contact.maps.googlemaps,
    accent: 'text-primary',
    bg: 'bg-primary/10',
    external: true,
  },
] as const;

const visitSteps = [
  {
    num: '01',
    icon: Phone,
    title: 'Chiamaci o scrivici',
    body: `Un messaggio WhatsApp o una telefonata bastano. ${contact.phoneContactNote}.`,
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

export default function ContattiClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linen-100 pb-8 md:pb-12">
        <div className="container-site">
          <motion.header
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative overflow-hidden rounded-3xl border border-linen-200 bg-white px-8 py-12 shadow-warm-sm md:px-14 md:py-16"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  'radial-gradient(ellipse 65% 70% at 85% 15%, rgba(232,149,106,0.1) 0%, transparent 65%)',
              }}
              aria-hidden="true"
            />
            <div className="relative max-w-2xl">
              <motion.p
                variants={fadeUp}
                className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary/80"
              >
                Siamo qui per voi
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="mt-4 heading-display text-display-sm text-warm-brown md:text-display-md"
              >
                Contattaci
              </motion.h1>
              <motion.div variants={fadeUp} className="gold-divider mt-6 !mx-0" />
              <motion.p
                variants={fadeUp}
                className="mt-5 font-sans text-base leading-relaxed text-ink-light md:text-lg"
              >
                Per informazioni, disponibilità o per prenotare una{' '}
                <span className="font-semibold text-warm-brown">visita gratuita e senza impegno</span> a
                Rivarolo Canavese — siamo a un messaggio o a una chiamata di distanza.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <FlowButton
                  as="a"
                  href={`tel:${contact.phoneRaw}`}
                  icon={<Phone size={14} strokeWidth={2.5} />}
                  iconPosition="left"
                >
                  {contact.phoneCtaLabel}
                </FlowButton>
                <FlowButton
                  as="a"
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<MessageCircle size={14} strokeWidth={2.5} />}
                  iconPosition="left"
                >
                  WhatsApp
                </FlowButton>
              </motion.div>
            </div>
          </motion.header>
        </div>
      </section>

      {/* Contact cards */}
      <SectionPastelBg hue="orange" className="section-spacing">
        <div className="container-site">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mx-auto max-w-2xl space-y-4"
          >
            <motion.div variants={fadeUp} className="text-center">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-primary/80">
                Recapiti diretti
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-warm-brown">
                Parla con noi subito
              </h2>
            </motion.div>

            {contactCards.map((card) => (
                <motion.a
                  key={card.label}
                  variants={fadeUp}
                  href={card.href}
                  target={'external' in card && card.external ? '_blank' : undefined}
                  rel={'external' in card && card.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4 rounded-2xl border border-linen-200 bg-white/90 p-5 shadow-warm-sm transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-warm-md"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${card.bg} transition-colors group-hover:scale-105`}
                  >
                    <card.icon size={18} className={card.accent} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-sans text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                      {card.label}
                    </span>
                    <span className="mt-0.5 block font-sans text-sm font-semibold text-warm-brown">
                      {card.value}
                    </span>
                    <span className="mt-0.5 block font-sans text-xs text-ink-muted">{card.note}</span>
                  </span>
                  <ArrowRight
                    size={14}
                    className="mt-1 shrink-0 text-ink-muted/30 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </motion.a>
            ))}

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-linen-200 bg-white/90 p-5 shadow-warm-sm"
            >
              <div className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-primary/70" />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Orari visite
                  </p>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-ink-light">{contact.hours}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionPastelBg>

      {/* Visit steps */}
      <section className="section-spacing bg-linen-100">
        <div className="container-site">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.p variants={fadeUp} className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {visitCta.label}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display font-semibold text-warm-brown"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-0.02em' }}
            >
              Tre passi per conoscerci
            </motion.h2>
            <motion.div variants={fadeUp} className="gold-divider mt-6" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6"
          >
            {visitSteps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-linen-200 bg-white p-6 shadow-warm-sm transition-colors hover:border-primary/25 hover:shadow-warm-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                    <step.icon size={18} className="text-primary" />
                  </div>
                  <span className="font-sans text-3xl font-bold leading-none text-linen-300 transition-colors group-hover:text-primary/20">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-warm-brown">{step.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">{step.body}</p>
                {i < visitSteps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-primary/20 md:block"
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-linen-100 pb-24">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">Dove siamo</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-forest md:text-3xl">
              Via Gria 12, Rivarolo Canavese
            </h2>
            <p className="mx-auto mt-3 max-w-lg font-sans text-sm text-ink-light">
              A circa 30 km da Torino, nel cuore del Canavese piemontese. Parcheggio comodo nelle vicinanze.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <LocationMap variant="full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOptions}
            transition={{ delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4"
          >
            <FlowButton as={Link} href="/dove-siamo">
              Come arrivare
            </FlowButton>
            <a
              href={contact.maps.googlemaps}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Apri in Google Maps →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
