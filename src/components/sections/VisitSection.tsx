'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/data/content';
import { staggerContainer, fadeUp, slideInRight, viewportOptions } from '@/lib/animations';

const reasons = [
  'Visita completamente gratuita, senza nessun obbligo',
  'Ti mostriamo ogni spazio della struttura',
  'Incontri il personale e capisci la vita quotidiana',
  'Rispondiamo a ogni domanda senza fretta',
  'Valutiamo insieme le esigenze del tuo familiare',
];

export default function VisitSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);

  return (
    <section ref={ref} id="contatti" aria-label="Prenota una visita" className="relative section-spacing overflow-hidden bg-forest">
      {/* Parallax warm glow */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 opacity-15" aria-hidden="true">
        <div className="h-full w-full" style={{ background: 'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(201,168,76,0.4) 0%, transparent 70%)' }} />
      </motion.div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-site relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── Left ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.p variants={fadeUp} className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-gold">
              Vieni a conoscerci
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display font-semibold text-white text-balance"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              La cosa migliore che puoi fare è venire a vederci
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-5 gold-line" />
            <motion.p variants={fadeUp} className="mt-6 font-sans text-base leading-relaxed text-white/60">
              Non c&apos;è niente di meglio di una visita guidata per capire se Residence V.G è il posto giusto.
              Nessun modulo, nessuna attesa. Chiamaci e vieni quando vuoi.
            </motion.p>

            <motion.ul variants={staggerContainer} className="mt-8 space-y-3">
              {reasons.map((r) => (
                <motion.li key={r} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle size={15} className="mt-0.5 shrink-0 text-gold" />
                  <span className="font-sans text-sm text-white/65">{r}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="btn-primary group"
              >
                <Phone size={15} strokeWidth={2.5} className="transition-transform group-hover:rotate-12" />
                {siteConfig.contact.phone}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Buongiorno%2C%20vorrei%20prenotare%20una%20visita%20a%20Residence%20V.G`}
                target="_blank" rel="noopener noreferrer"
                className="btn-ghost-white"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-4 flex items-center gap-2 font-sans text-xs text-white/35">
              <Clock size={12} /> {siteConfig.contact.hours}
            </motion.p>
          </motion.div>

          {/* ── Right: photo + contact cards ── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="flex flex-col gap-4"
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <Image
                src="/images/IMG_4203.webp"
                alt="Esterno Residence V.G Cabiate"
                width={620}
                height={300}
                className="h-52 w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Phone, label: 'Telefono', value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phoneRaw}`, color: 'text-gold' },
                { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.contact.whatsappDisplay, href: `https://wa.me/${siteConfig.contact.whatsapp}`, color: 'text-[#25D366]' },
                { icon: Mail, label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}`, color: 'text-gold' },
                { icon: MapPin, label: 'Indirizzo', value: siteConfig.contact.address.full, href: siteConfig.contact.maps.googlemaps, color: 'text-gold' },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-3 rounded-xl bg-white/10 p-4 ring-1 ring-white/10 transition-all hover:bg-white/15 hover:ring-gold/30"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Icon size={15} className={color} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans text-[10px] uppercase tracking-wider text-white/35">{label}</p>
                    <p className="mt-0.5 font-sans text-xs font-semibold text-white/85 leading-tight truncate">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
