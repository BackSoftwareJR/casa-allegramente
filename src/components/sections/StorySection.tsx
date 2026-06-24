'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Phone, Users, Home, Heart } from 'lucide-react';
import { siteConfig, storyContent } from '@/data/content';
import { brandPastelCycle } from '@/lib/brand-colors';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { FlowButton } from '@/components/ui/flow-button';

const slides = storyContent.carouselSlides;
const ACCENT_ICONS = { users: Users, home: Home, heart: Heart } as const;

type StorySectionProps = {
  showStats?: boolean;
};

function StoryCarousel() {
  const [current, setCurrent] = useState(0);
  const prefersReduced = useReducedMotion();

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;
    const t = setInterval(advance, 5500);
    return () => clearInterval(t);
  }, [advance, prefersReduced]);

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-warm-lg">
      <div className="relative aspect-[16/10] min-h-[280px] md:min-h-[420px] lg:min-h-[480px]">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: prefersReduced ? 1 : 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              priority={current === 0}
              sizes="(max-width: 768px) 100vw, 70vw"
              className={`object-cover ${prefersReduced ? '' : 'ken-burns'}`}
            />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

        <AnimatePresence mode="wait">
          <motion.p
            key={`cap-${current}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-5 left-5 right-5 font-sans text-sm italic text-white/80 md:bottom-7 md:left-7"
          >
            {slides[current].caption}
          </motion.p>
        </AnimatePresence>

        <div className="absolute bottom-5 right-5 flex gap-1.5 md:bottom-7 md:right-7">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Immagine ${i + 1} di ${slides.length}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? 'w-7 bg-primary' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsBentoRow() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
    >
      {storyContent.highlightStats.map((stat, i) => (
        <motion.div
          key={stat.label}
          variants={fadeUp}
          className="flex flex-col rounded-2xl border border-white/60 px-4 py-5 shadow-warm-sm backdrop-blur-md md:px-5 md:py-6"
          style={{ backgroundColor: `${brandPastelCycle[i % brandPastelCycle.length]}CC` }}
        >
          <span
            className="font-display text-3xl font-semibold leading-none md:text-4xl"
            style={{ color: stat.accent }}
          >
            {stat.value}
          </span>
          <span className="mt-2 font-sans text-sm font-medium leading-snug text-anthracite md:text-[0.9375rem]">
            {stat.label}
          </span>
          {'note' in stat && stat.note ? (
            <span className="mt-2 font-sans text-xs leading-relaxed text-anthracite-muted">
              {stat.note}
            </span>
          ) : null}
        </motion.div>
      ))}
    </motion.div>
  );
}

function BentoGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {storyContent.bentoItems.map((item, i) => {
        const Icon = ACCENT_ICONS[item.icon];
        const pastel = brandPastelCycle[i % brandPastelCycle.length];
        return (
          <motion.article
            key={item.id}
            variants={fadeUp}
            className="group rounded-2xl border border-white/60 p-6 shadow-warm-sm backdrop-blur-md transition-shadow duration-300 hover:shadow-warm-md"
            style={{ backgroundColor: `${pastel}CC` }}
          >
            <div
              className="mb-4 inline-flex rounded-xl p-2.5"
              style={{ backgroundColor: `${item.accent}18` }}
            >
              <Icon size={20} strokeWidth={2.2} style={{ color: item.accent }} />
            </div>
            <h3 className="font-display text-lg font-bold text-anthracite">{item.title}</h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-anthracite-light">{item.body}</p>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

export default function StorySection({ showStats = true }: StorySectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="chi-siamo"
      className="overflow-hidden bg-transparent pb-20 pt-6 md:pb-28 md:pt-8"
      aria-label="La nostra storia"
    >
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            {storyContent.eyebrow}
          </p>
          <h2
            className="mt-3 font-display font-bold text-balance text-anthracite"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            {storyContent.title}
          </h2>
        </motion.div>

        {/* Stats bento row — zero-scroll visibility when placed after HeroIntro */}
        {showStats && (
          <div className="mt-8 md:mt-10">
            <StatsBentoRow />
          </div>
        )}

        {/* Intro glass module */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-warm-sm backdrop-blur-md md:mt-10 md:p-8"
        >
          {storyContent.paragraphs.map((p) => (
            <p
              key={p.slice(0, 48)}
              className="font-sans text-base leading-relaxed text-anthracite-light [&+&]:mt-4"
            >
              {p}
            </p>
          ))}
        </motion.div>

        {/* Cinematic carousel — full visual area */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 md:mt-10"
        >
          <StoryCarousel />
        </motion.div>

        {/* Bento concept cards */}
        <div className="mt-8 md:mt-10">
          <BentoGrid />
        </div>

        {siteConfig.contact.phoneRaw && (
          <motion.a
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5 }}
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="mt-10 inline-flex"
          >
            <FlowButton as="span" icon={<Phone size={14} />} iconPosition="left">
              {siteConfig.contact.phone}
            </FlowButton>
          </motion.a>
        )}
      </div>
    </section>
  );
}
