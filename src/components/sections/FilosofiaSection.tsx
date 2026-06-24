'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ModernHeroRevealTitle,
  SmoothScrollHero,
} from '@/components/ui/modern-hero';
import { FlowButton } from '@/components/ui/flow-button';
import { manifestoContent } from '@/data/content';

const PARALLAX_IMAGES = [
  {
    src: '/images/sala-pranzo-conviviale-allegramente.avif',
    alt: 'Sala pranzo conviviale AllegraMente',
    start: -200,
    end: 200,
    className: 'w-1/3',
  },
  {
    src: '/images/giardino-verde-estate-rivarolo-canavese.avif',
    alt: 'Giardino estivo AllegraMente',
    start: 200,
    end: -250,
    className: 'mx-auto w-2/3',
  },
  {
    src: '/images/salotto-tv-poltrona-casa-famiglia-anziani.avif',
    alt: 'Salotto accogliente AllegraMente',
    start: -200,
    end: 200,
    className: 'ml-auto w-1/3',
  },
  {
    src: '/images/porticato-tavola-apparecchiata-giardino-allegramente.avif',
    alt: 'Tavola apparecchiata sotto il porticato',
    start: 0,
    end: -500,
    className: 'ml-24 w-5/12',
  },
] as const;

export default function FilosofiaSection() {
  return (
    <SmoothScrollHero
      eyebrow="La nostra filosofia"
      title={
        <>
          {manifestoContent.lines[0].text}{' '}
          <span className="text-gradient-gold">{manifestoContent.lines[1].text}</span>
        </>
      }
      subtitle={`"${manifestoContent.quote.slice(0, 90)}…"`}
      heroImage={{
        src: '/images/villa-esterno-giardino-hero-allegramente.avif',
        alt: 'Villa AllegraMente — giardino e facciata',
      }}
      parallaxImages={[...PARALLAX_IMAGES]}
      sectionId="filosofia"
      tone="warm"
    >
      <ModernHeroRevealTitle className="mb-16 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold uppercase tracking-tight text-warm-brown">
        Il nostro manifesto
      </ModernHeroRevealTitle>

      <div className="space-y-1">
        {manifestoContent.lines.map((line, i) => (
          <motion.p
            key={line.text}
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.75, delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`font-display leading-none ${
              line.em
                ? 'text-gradient-gold font-bold'
                : 'font-semibold text-ink-muted/50'
            }`}
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', letterSpacing: '-0.03em' }}
          >
            {line.text}
          </motion.p>
        ))}
      </div>

      <motion.blockquote
        initial={{ y: 32, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75, delay: 0.3 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto mt-12 max-w-2xl border-l-2 border-primary/30 pl-6 font-sans text-lg italic leading-relaxed text-ink-light md:text-xl"
      >
        &ldquo;{manifestoContent.quote}&rdquo;
      </motion.blockquote>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col items-center gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="h-px w-16 bg-primary/25" />
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
            {manifestoContent.locationLabel}
          </span>
          <div className="h-px w-16 bg-primary/25" />
        </div>
        <FlowButton as={Link} href="/servizi">
          Scopri i nostri servizi
        </FlowButton>
      </motion.div>
    </SmoothScrollHero>
  );
}
