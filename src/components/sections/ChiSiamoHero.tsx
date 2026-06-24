'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FlowButton } from '@/components/ui/flow-button';
import { chiSiamoContent, siteConfig } from '@/data/content';
import { brand } from '@/lib/brand-colors';
import AnimatedBrandLogo from '@/components/layout/AnimatedBrandLogo';
import { ScotchTape } from '@/components/ui/scotch-tape';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.35, 1] },
  },
};

const cardsVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 1, 0.35, 1], staggerChildren: 0.25 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: [0.25, 1, 0.35, 1] } },
};

export default function ChiSiamoHero() {
  return (
    <section className="relative w-full overflow-hidden bg-linen-50 pt-24">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(${brand.orange.soft} 1px, transparent 1px)`,
          backgroundSize: '2.4rem 2.4rem',
          opacity: 0.45,
        }}
      />
      {/* Top-to-bottom fade overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-linen-50/60 via-linen-50/30 to-linen-50" aria-hidden="true" />
      {/* Warm radial glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse, ${brand.orange.pastel} 0%, transparent 70%)`,
          opacity: 0.7,
        }}
      />

      <motion.div
        className="container-site relative flex min-h-[85vh] flex-col items-center justify-between gap-12 py-16 lg:flex-row lg:py-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* ── Left: Text ── */}
        <div className="flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          <motion.div variants={itemVariants} className="mb-6">
            <AnimatedBrandLogo variant="dark" className="text-2xl" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-warm-brown"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
          >
            {chiSiamoContent.whyName.title}
          </motion.h1>

          <motion.div variants={itemVariants} className="my-5 h-1 w-12 origin-left rounded-full bg-primary/60" />

          <motion.p
            variants={itemVariants}
            className="max-w-lg font-sans text-base leading-relaxed text-ink-light md:text-lg"
          >
            {chiSiamoContent.whyName.paragraphs[0]}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <FlowButton as={Link} href="/#contatti">
              Vieni a conoscerci
            </FlowButton>
            <FlowButton as="a" href={`tel:${siteConfig.contact.phoneRaw}`}>
              {siteConfig.contact.phone}
            </FlowButton>
          </motion.div>

          {/* Trust micro-badges */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {['Ambiente familiare', 'Max 8 ospiti', 'Badanti H24'].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 font-sans text-xs text-ink-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Right: due foto in diagonale, stile scrapbook ── */}
        <motion.div
          className="relative mx-auto h-[22rem] w-full max-w-md sm:h-[26rem] sm:max-w-lg lg:mx-0 lg:h-[28rem] lg:max-w-xl lg:w-1/2"
          variants={cardsVariants}
        >
          {/* Card posteriore — alto sinistra */}
          <motion.div
            variants={cardItemVariants}
            whileHover={{ y: -10, rotate: -10, transition: { duration: 0.35 } }}
            className="absolute left-0 top-2 z-10 sm:top-4"
            style={{ rotate: '-8deg' }}
          >
            <div className="relative">
              <ScotchTape className="absolute -left-3 -top-4 z-20 origin-top-left scale-[0.5] -rotate-12 sm:scale-[0.55]" />
              <div
                className="relative overflow-hidden rounded-2xl bg-white p-2"
                style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.14), 0 0 0 1px rgba(255,255,255,0.8)' }}
              >
                <div className="relative h-44 w-56 overflow-hidden rounded-xl sm:h-52 sm:w-64 md:h-60 md:w-72">
                  <Image
                    src="/images/villa-esterno-giardino-hero-allegramente.avif"
                    alt="Villa AllegraMente — giardino e facciata"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 224px, 288px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card anteriore — basso destra */}
          <motion.div
            variants={cardItemVariants}
            whileHover={{ y: -10, rotate: 8, transition: { duration: 0.35 } }}
            className="absolute bottom-0 right-0 z-20 sm:bottom-2"
            style={{ rotate: '7deg' }}
          >
            <div className="relative">
              <ScotchTape className="absolute -right-2 -top-4 z-20 origin-top-right scale-[0.5] rotate-[10deg] sm:scale-[0.55]" />
              <div
                className="relative overflow-hidden rounded-2xl bg-white p-2"
                style={{ boxShadow: '0 20px 56px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.8)' }}
              >
                <div className="relative h-44 w-56 overflow-hidden rounded-xl sm:h-52 sm:w-64 md:h-60 md:w-72">
                  <Image
                    src="/images/sala-pranzo-conviviale-allegramente.avif"
                    alt="Sala pranzo conviviale — Casa AllegraMente"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 224px, 288px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Glow decorativo */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              background: `radial-gradient(ellipse 70% 60% at 55% 45%, ${brand.green.pastel} 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
