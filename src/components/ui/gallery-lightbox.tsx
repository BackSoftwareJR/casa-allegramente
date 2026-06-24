'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { PortfolioGalleryImage } from './portfolio-gallery';

interface GalleryLightboxProps {
  images: PortfolioGalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

export function GalleryLightbox({ images, initialIndex, onClose }: GalleryLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const N = images.length;

  const goPrev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + N) % N);
  }, [N]);

  const goNext = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % N);
  }, [N]);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goPrev, goNext]);

  const current = images[index];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.97,
    }),
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Galleria immagini"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', background: 'rgba(0,0,0,0.72)' }}
      onClick={onClose}
    >
      {/* Apple glass close button */}
      <motion.button
        type="button"
        onClick={onClose}
        aria-label="Chiudi galleria"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 320, damping: 26 }}
        className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-white/40 hover:text-white md:right-8 md:top-8"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
      >
        <X size={18} />
      </motion.button>

      {/* Prev button */}
      <motion.button
        type="button"
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        aria-label="Immagine precedente"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.12, type: 'spring', stiffness: 280, damping: 24 }}
        className="absolute left-3 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-white/40 hover:text-white md:left-7"
        style={{
          background: 'rgba(255,255,255,0.10)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 2px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.18)',
        }}
      >
        <ChevronLeft size={24} />
      </motion.button>

      {/* Next button */}
      <motion.button
        type="button"
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        aria-label="Immagine successiva"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.12, type: 'spring', stiffness: 280, damping: 24 }}
        className="absolute right-3 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-white/40 hover:text-white md:right-7"
        style={{
          background: 'rgba(255,255,255,0.10)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 2px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.18)',
        }}
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Image frame */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.22, ease: [0.25, 1, 0.35, 1] }}
          className="relative mx-4 max-h-[84vh] w-full max-w-5xl overflow-hidden"
          style={{
            borderRadius: 28,
            boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Glass inner border */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              borderRadius: 28,
              border: '1px solid rgba(255,255,255,0.14)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)',
            }}
          />
          <Image
            src={current.src}
            alt={current.alt}
            width={1400}
            height={900}
            className="max-h-[84vh] w-full object-contain"
            priority
          />
          {/* Caption glass bar */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-3"
            style={{
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <p className="text-center font-sans text-xs font-medium tracking-widest text-white/50">
              {index + 1} / {N}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5"
      >
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Vai all'immagine ${i + 1}`}
            onClick={(e) => { e.stopPropagation(); setDirection(i > index ? 1 : -1); setIndex(i); }}
            className="transition-all duration-200"
            style={{
              width: i === index ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === index ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
