'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { brand } from '@/lib/brand-colors';

export interface SplitImageSectionProps {
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  cta?: React.ReactNode;
  image1: { src: string; alt: string };
  image2: { src: string; alt: string };
  /** images on the right (default) or left */
  flip?: boolean;
  /** background tint */
  hue?: 'orange' | 'green' | 'yellow' | 'none';
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.35, 1] } },
};
const cardsVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 1, 0.35, 1], staggerChildren: 0.22 } },
};
const cardItemVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 1, 0.35, 1] } },
};

const HUE_BG: Record<string, string> = {
  orange: brand.orange.pastel,
  green: brand.green.pastel,
  yellow: brand.yellow.pastel,
  none: 'transparent',
};

export default function SplitImageSection({
  eyebrow,
  title,
  description,
  cta,
  image1,
  image2,
  flip = false,
  hue = 'none',
  className,
}: SplitImageSectionProps) {
  const bg = HUE_BG[hue];

  return (
    <section
      className={cn('relative w-full overflow-hidden py-20 md:py-28', className)}
      style={{ backgroundColor: bg }}
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(${brand.orange.soft} 1px, transparent 1px)`,
          backgroundSize: '2.2rem 2.2rem',
          opacity: hue === 'none' ? 0.25 : 0.4,
        }}
      />
      {/* Fade overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `linear-gradient(to bottom, ${bg || '#fdf8f4'} 0%, transparent 25%, transparent 75%, ${bg || '#fdf8f4'} 100%)`,
        }}
      />

      <motion.div
        className={cn(
          'container-site relative flex flex-col items-center gap-12 lg:flex-row lg:gap-16',
          flip && 'lg:flex-row-reverse',
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* ── Text side ── */}
        <div className="flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          {eyebrow && (
            <motion.p
              variants={itemVariants}
              className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary/70"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h2
            variants={itemVariants}
            className="mt-3 font-display font-bold text-warm-brown"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
          >
            {title}
          </motion.h2>

          <motion.div variants={itemVariants} className="my-5 h-1 w-10 origin-left rounded-full bg-primary/50" />

          <motion.div
            variants={itemVariants}
            className="max-w-lg font-sans text-base leading-relaxed text-ink-light"
          >
            {description}
          </motion.div>

          {cta && (
            <motion.div variants={itemVariants} className="mt-8">
              {cta}
            </motion.div>
          )}
        </div>

        {/* ── Cards side ── */}
        <motion.div
          className="relative flex h-72 w-full items-center justify-center md:h-96 lg:w-1/2"
          variants={cardsVariants}
        >
          {/* Back card */}
          <motion.div
            variants={cardItemVariants}
            whileHover={{ y: -12, rotate: flip ? 4 : -4, transition: { duration: 0.3 } }}
            className="absolute h-52 w-72 translate-x-20 rotate-[-7deg] overflow-hidden rounded-3xl md:h-72 md:w-96"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.16), 0 0 0 1px rgba(255,255,255,0.55)' }}
          >
            <Image src={image2.src} alt={image2.alt} fill className="object-cover" sizes="(max-width:768px) 288px, 384px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          </motion.div>

          {/* Front card */}
          <motion.div
            variants={cardItemVariants}
            whileHover={{ y: -12, rotate: flip ? -4 : 4, transition: { duration: 0.3 } }}
            className="absolute h-52 w-72 -translate-x-16 rotate-[7deg] overflow-hidden rounded-3xl md:h-72 md:w-96"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.16), 0 0 0 1px rgba(255,255,255,0.55)' }}
          >
            <Image src={image1.src} alt={image1.alt} fill className="object-cover" sizes="(max-width:768px) 288px, 384px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          </motion.div>

          {/* Glow blob */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              background: `radial-gradient(ellipse 65% 55% at 50% 50%, ${hue === 'green' ? brand.green.pastel : brand.orange.pastel} 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
