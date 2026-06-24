'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { brand } from '@/lib/brand-colors';

export interface ChiSiamoNarrativeSectionProps {
  /** Section index for visual rhythm (0, 1, 2…) */
  index: number;
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  cta?: React.ReactNode;
  image1: { src: string; alt: string };
  image2?: { src: string; alt: string };
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 1, 0.35, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/** Distinct layout per section index — visually varied but brand-coherent */
export default function ChiSiamoNarrativeSection({
  index,
  eyebrow,
  title,
  description,
  cta,
  image1,
  image2,
  className,
}: ChiSiamoNarrativeSectionProps) {
  const variant = index % 3;

  if (variant === 0) return (
    <EditorialBand
      eyebrow={eyebrow}
      title={title}
      description={description}
      cta={cta}
      image1={image1}
      image2={image2}
      accentHue="green"
      className={className}
    />
  );

  if (variant === 1) return (
    <PanoramaCard
      eyebrow={eyebrow}
      title={title}
      description={description}
      cta={cta}
      image1={image1}
      accentHue="orange"
      className={className}
    />
  );

  return (
    <OffsetGrid
      eyebrow={eyebrow}
      title={title}
      description={description}
      cta={cta}
      image1={image1}
      image2={image2}
      accentHue="terracotta"
      className={className}
    />
  );
}

type BandProps = Omit<ChiSiamoNarrativeSectionProps, 'index'> & {
  accentHue: 'green' | 'orange' | 'terracotta';
};

function EditorialBand({
  eyebrow,
  title,
  description,
  cta,
  image1,
  image2,
  accentHue,
  className,
}: BandProps) {
  const accent = brand[accentHue];

  return (
    <section
      className={cn('relative overflow-hidden py-20 md:py-28', className)}
      style={{ backgroundColor: accent.pastel }}
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full opacity-30"
        style={{ background: `radial-gradient(circle, ${accent.soft} 0%, transparent 70%)` }}
        aria-hidden="true"
      />

      <motion.div
        className="container-site relative grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="lg:col-span-5">
          {eyebrow && (
            <motion.span
              variants={fadeUp}
              className="inline-block rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ backgroundColor: `${accent.accent}22`, color: accent.vivid }}
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display font-bold text-warm-brown"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
          >
            {title}
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="mt-5 max-w-md font-sans text-base leading-relaxed text-ink-light"
          >
            {description}
          </motion.div>
          {cta && <motion.div variants={fadeUp} className="mt-8">{cta}</motion.div>}
        </div>

        <motion.div variants={fadeUp} className="relative lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-warm-lg">
            <Image src={image1.src} alt={image1.alt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 58vw" />
          </div>
          {image2 && (
            <div className="absolute -bottom-6 -left-4 hidden aspect-square w-36 overflow-hidden rounded-2xl border-4 border-white shadow-warm-md md:block lg:-left-8 lg:w-44">
              <Image src={image2.src} alt={image2.alt} fill className="object-cover" sizes="176px" />
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

function PanoramaCard({
  eyebrow,
  title,
  description,
  cta,
  image1,
  accentHue,
  className,
}: BandProps) {
  const accent = brand[accentHue];

  return (
    <section className={cn('relative py-20 md:py-28', className)}>
      <div className="container-site">
        <motion.div
          className="relative min-h-[420px] overflow-hidden rounded-3xl md:min-h-[480px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <Image src={image1.src} alt={image1.alt} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex items-end p-8 md:items-center md:p-14">
            <div className="max-w-xl rounded-2xl border border-white/20 bg-white/90 p-7 shadow-warm-lg backdrop-blur-md md:p-9">
              {eyebrow && (
                <motion.p variants={fadeUp} className="font-sans text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: accent.vivid }}>
                  {eyebrow}
                </motion.p>
              )}
              <motion.h2
                variants={fadeUp}
                className="mt-3 font-display font-bold text-warm-brown"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                {title}
              </motion.h2>
              <motion.div variants={fadeUp} className="mt-4 font-sans text-base leading-relaxed text-ink-light">
                {description}
              </motion.div>
              {cta && <motion.div variants={fadeUp} className="mt-7">{cta}</motion.div>}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OffsetGrid({
  eyebrow,
  title,
  description,
  cta,
  image1,
  image2,
  accentHue,
  className,
}: BandProps) {
  const accent = brand[accentHue];

  return (
    <section className={cn('bg-linen-50 py-20 md:py-28', className)}>
      <div className="container-site">
        <motion.div
          className="grid gap-8 lg:grid-cols-2 lg:gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl shadow-warm-md">
                <Image src={image1.src} alt={image1.alt} fill className="object-cover" sizes="50vw" />
              </div>
              {image2 && (
                <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl shadow-warm-sm lg:col-span-1">
                  <Image src={image2.src} alt={image2.alt} fill className="object-cover" sizes="25vw" />
                </div>
              )}
              <div
                className="hidden items-end rounded-2xl p-5 lg:col-span-1 lg:flex"
                style={{ backgroundColor: accent.pastel }}
              >
                <p className="font-display text-sm font-semibold italic leading-snug" style={{ color: accent.vivid }}>
                  Un ambiente pensato per vivere bene, ogni giorno.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="order-1 flex flex-col justify-center lg:order-2">
            {eyebrow && (
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                {eyebrow}
              </p>
            )}
            <h2
              className="mt-3 font-display font-bold text-warm-brown"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              {title}
            </h2>
            <div className="my-5 h-1 w-10 rounded-full" style={{ backgroundColor: accent.accent }} />
            <div className="font-sans text-base leading-relaxed text-ink-light">{description}</div>
            {cta && <div className="mt-8">{cta}</div>}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
