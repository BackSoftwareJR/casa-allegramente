'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/content';
import { ImageAccordion, type AccordionImageItem } from '@/components/ui/interactive-image-accordion';
import { staggerContainer, fadeUp, viewportOptions } from '@/lib/animations';

const spaces: AccordionImageItem[] = [
  {
    id: 1,
    title: 'La tua camera',
    subtitle: 'Il tuo spazio, le tue cose, il tuo ritmo.',
    src: '/images/7vg.webp',
    alt: 'Camera con terrazzo Residence V.G — la porta aperta sul verde',
  },
  {
    id: 2,
    title: 'La sala comune',
    subtitle: 'Dove ci si trova, si chiacchiera, si vive insieme.',
    src: '/images/foto_orizzontali/IMG_2382.webp',
    alt: 'Sala comune Residence V.G — ospiti e operatori nel pomeriggio',
  },
  {
    id: 3,
    title: 'La terrazza',
    subtitle: 'Aria aperta, vista sul verde, ogni giorno.',
    src: '/images/6vg.webp',
    alt: 'Terrazza Residence V.G — arredata con vista su Cabiate',
  },
  {
    id: 4,
    title: 'La sala pranzo',
    subtitle: 'A tavola insieme, ogni giorno.',
    src: '/images/3vg.webp',
    alt: 'Sala pranzo Residence V.G — apparecchiata e luminosa',
  },
  {
    id: 5,
    title: 'La cura quotidiana',
    subtitle: 'Assistenza H24, senza sembrare un ospedale.',
    src: '/images/foto_orizzontali/IMG_2384.webp',
    alt: 'Assistenza Residence V.G — cura e presenza ogni giorno',
  },
];

/* Mobile: tap-to-expand single image with thumbnail strip */
function SpacesMobile() {
  return (
    <div className="block md:hidden">
      {/* Text */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="px-6 pb-8 pt-14"
      >
        <motion.p variants={fadeUp} className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-gold-700">
          I nostri spazi
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-3 font-display font-semibold text-forest text-balance"
          style={{ fontSize: 'clamp(2rem, 7vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: 1.08 }}
        >
          Ogni angolo<br />racconta casa.
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-4 gold-line" />
        <motion.p variants={fadeUp} className="mt-4 font-sans text-sm leading-relaxed text-ink-light">
          Non un corridoio d&apos;ospedale. Una palazzina vera, con spazi pensati per la vita di tutti i giorni.
        </motion.p>
      </motion.div>

      {/* Vertical card stack */}
      <div className="flex flex-col gap-4 px-5 pb-10">
        {spaces.map((space, i) => (
          <motion.div
            key={space.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-52 overflow-hidden rounded-2xl"
          >
            <Image
              src={space.src}
              alt={space.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/65 via-forest/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-sans text-sm font-semibold text-white">{space.title}</p>
              <p className="mt-0.5 font-sans text-xs text-white/55">{space.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-6 pb-12 text-center">
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="btn-dark inline-flex"
        >
          <Phone size={14} />
          Vieni a vederli di persona
        </a>
      </div>
    </div>
  );
}

/* Desktop: accordion + text side-by-side */
function SpacesDesktop() {
  return (
    <div className="hidden md:block">
      <div className="container-site grid items-center gap-14 py-24 lg:grid-cols-[1fr_auto] lg:gap-20">

        {/* Left: text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="max-w-sm"
        >
          <motion.p variants={fadeUp} className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-gold-700">
            I nostri spazi
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display font-semibold text-forest text-balance"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', letterSpacing: '-0.025em', lineHeight: 1.06 }}
          >
            Ogni angolo<br />racconta casa.
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-5 gold-line" />

          <motion.p variants={fadeUp} className="mt-6 font-sans text-base leading-[1.8] text-ink-light">
            Non un corridoio d&apos;ospedale. Una palazzina vera a Cabiate, con spazi pensati per vivere,
            non per sopravvivere. Passa il mouse sulle immagini per scoprirli.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="btn-dark group"
            >
              <Phone size={14} strokeWidth={2.5} />
              {siteConfig.contact.phone}
            </a>
            <Link
              href="/galleria"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-ink-muted transition-colors hover:text-forest"
            >
              <ArrowUpRight size={14} />
              Tutta la galleria
            </Link>
          </motion.div>

          {/* Small trust note */}
          <motion.p variants={fadeUp} className="mt-8 font-sans text-xs leading-relaxed text-ink-muted/70">
            Tutte le foto sono reali. Nessun rendering. Quello che vedi è quello che trovi.
          </motion.p>
        </motion.div>

        {/* Right: image accordion */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <ImageAccordion
            items={spaces}
            accent="#C9A84C"
            defaultActive={2}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function SpacesSection() {
  return (
    <section
      id="spazi"
      aria-label="I nostri spazi"
      className="relative overflow-hidden bg-white"
    >
      {/* Subtle top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-linen-300 to-transparent" />

      <SpacesDesktop />
      <SpacesMobile />

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-linen-300 to-transparent" />
    </section>
  );
}
