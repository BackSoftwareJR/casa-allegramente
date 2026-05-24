'use client';

import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CalendarCheck,
  DoorOpen,
  HeartHandshake,
} from 'lucide-react';
import { siteConfig } from '@/data/content';
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
    body: 'Un messaggio WhatsApp o una telefonata bastano. Nessun modulo da compilare.',
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
    href: `https://wa.me/${siteConfig.contact.whatsapp}?text=Buongiorno%2C%20vorrei%20prenotare%20una%20visita%20a%20Residence%20V.G`,
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

function ActionCard({
  prefersReduced,
}: {
  prefersReduced: boolean | null;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -6, y: x * 8 });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        transformPerspective: 1200,
      }}
      className="perspective-1000 preserve-3d relative mx-auto w-full max-w-xl"
    >
      {/* Pulse ring behind primary CTA */}
      {!prefersReduced && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[42%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-2xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <div className="noise relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOptions}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-1.5"
          >
            <HeartHandshake size={14} className="text-gold" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/90">
              Gratuita · Senza impegno
            </span>
          </motion.div>

          <h3
            className="font-display font-semibold text-white text-balance"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
          >
            Prenota la tua visita{' '}
            <span className="text-gradient-gold">oggi</span>
          </h3>
          <p className="mx-auto mt-3 max-w-sm font-sans text-sm leading-relaxed text-white/55">
            Una chiamata e vieni a conoscerci di persona. Siamo a Cabiate, pronti ad accoglierti.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="btn-primary group relative w-full justify-center px-8 py-4 text-base sm:w-auto md:whitespace-nowrap"
            >
              <Phone size={17} strokeWidth={2.5} className="transition-transform group-hover:rotate-12" />
              Chiama — {siteConfig.contact.phone}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Buongiorno%2C%20vorrei%20prenotare%20una%20visita%20a%20Residence%20V.G`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-white w-full justify-center px-8 py-4 text-base sm:w-auto"
            >
              <MessageCircle size={17} />
              Scrivi su WhatsApp
            </a>
          </div>

          <p className="mt-5 flex items-center justify-center gap-2 font-sans text-xs text-white/40">
            <Clock size={12} className="text-gold/70" />
            {siteConfig.contact.hours}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function VisitSection() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [bgIndex, setBgIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.45, 0.2]);

  const backgrounds = [
    { src: '/images/IMG_4203.webp', alt: 'Esterno Residence V.G Cabiate' },
    { src: '/images/foto_orizzontali/IMG_2382.webp', alt: 'Accoglienza in struttura' },
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
      ref={ref}
      id="contatti"
      aria-label="Prenota una visita gratuita"
      className="relative min-h-[92dvh] overflow-hidden bg-forest"
    >
      {/* ── Cinematic background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
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

        <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/75 to-forest/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-transparent to-forest/60" />
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <div
            className="h-full w-full"
            style={{
              background:
                'radial-gradient(ellipse 80% 55% at 50% 40%, rgba(201,168,76,0.22) 0%, transparent 65%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Ambient orbs */}
      {!prefersReduced && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-sage/15 blur-3xl"
            animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <motion.div style={{ y: contentY }} className="container-site relative z-10 py-20 md:py-28">
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
            className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-gold/85"
          >
            Prenota una visita gratuita
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display font-semibold text-white text-balance"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
            }}
          >
            Vieni a vederci.{' '}
            <span className="text-gradient-gold">È il passo che conta.</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="mx-auto mt-6 gold-divider" />
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-white/60 md:text-lg"
          >
            Nessun modulo, nessuna attesa. Chiamaci o scrivici — ti accogliamo in struttura
            e ti mostriamo come viviamo ogni giorno a Cabiate.
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
          <ActionCard prefersReduced={prefersReduced} />
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
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-colors hover:border-gold/25 hover:bg-white/[0.08]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/25">
                  <step.icon size={18} className="text-gold" />
                </div>
                <span className="font-display text-3xl font-bold leading-none text-white/10 transition-colors group-hover:text-gold/20">
                  {step.num}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-white/55">{step.body}</p>
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
            <motion.p variants={fadeUp} className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold/70">
              Cosa aspettarti
            </motion.p>
            <motion.ul variants={staggerContainer} className="mt-5 space-y-3">
              {reasons.map((r) => (
                <motion.li
                  key={r}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-xl border border-transparent px-3 py-2 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="font-sans text-sm leading-relaxed text-white/70">{r}</span>
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
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all hover:-translate-y-0.5 hover:border-gold/30 hover:bg-white/[0.10] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-gold/15">
                  <Icon size={16} className={color} />
                </div>
                <div className="mt-4 min-w-0">
                  <p className="font-sans text-[10px] uppercase tracking-wider text-white/35">{label}</p>
                  <p
                    className={`mt-1 font-sans text-xs font-semibold leading-tight text-white/90${
                      label === 'Telefono' ? ' md:whitespace-nowrap' : ''
                    }`}
                  >
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  );
}
