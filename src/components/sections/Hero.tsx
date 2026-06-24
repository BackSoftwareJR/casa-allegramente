'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Phone, MessageCircle, ArrowDown } from 'lucide-react';
import { siteConfig, heroContent, heroSlides, structureInfo } from '@/data/content';
import { FlowButton } from '@/components/ui/flow-button';

const slides = heroSlides;

const WORD_EASE = [0.16, 1, 0.3, 1] as const;
const WORD_DURATION = 0.6;
const WORD_STAGGER = 0.08;
const WORD_BASE_DELAY = 0.45;

type WordRevealProps = {
  words: string[];
  startIndex?: number;
  className?: string;
};

function WordReveal({ words, startIndex = 0, className }: WordRevealProps) {
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={`${startIndex + i}-${word}`}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: WORD_DURATION,
            delay: WORD_BASE_DELAY + (startIndex + i) * WORD_STAGGER,
            ease: WORD_EASE,
          }}
          className={className}
          style={{ display: 'inline-block', marginRight: i < words.length - 1 ? '0.28em' : undefined }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

type HeadlineRevealProps = {
  lines: readonly string[];
  accent: string;
  className?: string;
  accentClassName?: string;
};

function HeadlineReveal({ lines, accent, className, accentClassName }: HeadlineRevealProps) {
  const lineWords = lines.map((line) => line.split(/\s+/));
  const accentWords = accent.split(/\s+/);
  const accentStart = lineWords.reduce((sum, words) => sum + words.length, 0);

  return (
    <>
      {lineWords.map((words, lineIdx) => {
        const startIndex = lineWords.slice(0, lineIdx).reduce((sum, w) => sum + w.length, 0);
        return (
          <span key={lineIdx} style={{ display: 'block' }}>
            <WordReveal words={words} startIndex={startIndex} className={className} />
          </span>
        );
      })}
      <span style={{ display: 'block' }}>
        <WordReveal words={accentWords} startIndex={accentStart} className={accentClassName} />
      </span>
    </>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);
  const taglineWords = siteConfig.tagline.split(/\s+/);
  const mobileHeadlineWordCount =
    heroContent.headline.join(' ').split(/\s+/).length +
    heroContent.headlineAccent.split(/\s+/).length;
  const mobileContentDelay = WORD_BASE_DELAY + mobileHeadlineWordCount * WORD_STAGGER + 0.15;
  const desktopContentDelay = WORD_BASE_DELAY + taglineWords.length * WORD_STAGGER + 0.15;

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;
    const t = setInterval(advance, 5000);
    return () => clearInterval(t);
  }, [advance, prefersReduced]);

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden" aria-label="Benvenuto">
      <h1 className="sr-only">
        {siteConfig.seo.defaultTitle}
      </h1>

      {/* ── Carousel background ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: prefersReduced ? 1 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              priority={current === 0}
              sizes="100vw"
              className={`object-cover ${prefersReduced ? '' : 'ken-burns'}`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay gradiente caldo (marrone scuro → trasparente) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/82 md:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-black/60 via-black/25 to-black/78 md:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black/35 via-transparent to-black/20 md:block" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(232,118,10,0.15) 0%, transparent 60%)' }} />
      </div>

      {/* ── Slide indicators ── */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-28">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-0.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-primary' : 'w-2.5 bg-white/35 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* ── Slide caption (bottom left) ── */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`cap-${current}`}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 12 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-24 left-6 z-20 hidden font-sans text-sm italic text-white/50 md:left-12 md:block"
        >
          {slides[current].caption}
        </motion.p>
      </AnimatePresence>

      {/* ── MOBILE content ── */}
      <div className="md:hidden relative z-10 flex flex-1 flex-col justify-end px-6 pb-28">

        {/* Logo mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-5 flex justify-center"
        >
          <Image
            src="/images/logo-allegramente.png"
            alt="AllegraMente"
            width={120}
            height={120}
            className="drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4 flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80"
        >
          <span className="h-px w-5 bg-primary/60" />
          Residenza per anziani autosufficienti · {siteConfig.contact.address.city}
        </motion.p>

        {/* Headline — word-by-word reveal */}
        <h2
          className="font-display font-bold text-white"
          style={{ fontSize: 'clamp(2.8rem, 13vw, 4rem)', lineHeight: 1.04, letterSpacing: '-0.02em' }}
        >
          {!mounted || prefersReduced ? (
            <>
              {heroContent.headline.map((line) => (
                <span key={line} className="block text-white">
                  {line}
                </span>
              ))}
              <span className="block text-primary">{heroContent.headlineAccent}</span>
            </>
          ) : (
            <HeadlineReveal
              lines={heroContent.headline}
              accent={heroContent.headlineAccent}
              className="text-white"
              accentClassName="text-primary"
            />
          )}
        </h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={mounted ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, delay: mobileContentDelay, ease: WORD_EASE }}
          className="my-5 h-1 w-10 origin-left rounded-full bg-primary/50"
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: mobileContentDelay + 0.15 }}
          className="self-start"
        >
          <FlowButton
            as="a"
            href={siteConfig.contact.phoneRaw ? `tel:${siteConfig.contact.phoneRaw}` : '/#contatti'}
            icon={<Phone size={14} strokeWidth={2.5} />}
            iconPosition="left"
          >
            Parla con {siteConfig.contact.phoneContact}
          </FlowButton>
        </motion.div>

        {/* Micro trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: mobileContentDelay + 0.35 }}
          className="mt-5 flex items-center gap-4"
        >
          {['Badanti H24', 'Cucina mediterranea', `Max ${structureInfo.ospiti} ospiti`].map((b) => (
            <span key={b} className="flex items-center gap-1.5 font-sans text-[11px] text-white/45">
              <span className="text-primary/70">·</span> {b}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── DESKTOP content — centered ── */}
      <div className="container-site relative z-10 hidden flex-1 flex-col items-center justify-center py-32 text-center md:flex">

        {/* Logo desktop — grande e prominente */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex justify-center"
        >
          <Image
            src="/images/logo-allegramente.png"
            alt="AllegraMente"
            width={180}
            height={180}
            className="drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-black/25 px-5 py-2 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/90">
            {siteConfig.contact.address.city} · Canavese · Anziani autosufficienti · Max {structureInfo.ospiti} ospiti
          </span>
        </motion.div>

        {/* Headline — word-by-word reveal */}
        <h2
          className="font-display font-bold text-white text-balance"
          style={{ fontSize: 'clamp(3rem, 7.5vw, 5.5rem)', lineHeight: 1.06, letterSpacing: '-0.025em' }}
        >
          {!mounted || prefersReduced ? (
            <span className="text-white">{siteConfig.tagline}</span>
          ) : (
            <WordReveal words={taglineWords} className="text-white" />
          )}
        </h2>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: desktopContentDelay }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a href={siteConfig.contact.phoneRaw ? `tel:${siteConfig.contact.phoneRaw}` : '/#contatti'}>
            <FlowButton as="span" icon={<Phone size={15} strokeWidth={2.5} />} iconPosition="left">
              {siteConfig.contact.phoneRaw ? siteConfig.contact.phoneCtaLabel : 'Contattaci'}
            </FlowButton>
          </a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Buongiorno, vorrei informazioni su ${siteConfig.name}`)}`}
            target="_blank" rel="noopener noreferrer"
          >
            <FlowButton as="span" icon={<MessageCircle size={15} />} iconPosition="left">
              Scrivici su WhatsApp
            </FlowButton>
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: desktopContentDelay + 0.4 }}
          className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {['Badanti H24', 'Cucina mediterranea', 'Villa senza barriere', `Max ${structureInfo.ospiti} ospiti`].map((b) => (
            <span key={b} className="flex items-center gap-2 font-sans text-sm text-white/60">
              <span className="text-primary">✦</span> {b}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        aria-hidden="true"
      >
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 text-white/35"
        >
          <span className="font-sans text-[10px] uppercase tracking-widest">Scorri</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
