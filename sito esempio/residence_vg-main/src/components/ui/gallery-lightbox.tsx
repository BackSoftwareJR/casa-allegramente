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
  const N = images.length;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + N) % N);
  }, [N]);

  const goNext = useCallback(() => {
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

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Galleria immagini"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Chiudi galleria"
        className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 md:right-6 md:top-6"
      >
        <X size={22} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Immagine precedente"
        className="absolute left-3 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:left-6"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Immagine successiva"
        className="absolute right-3 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:right-6"
      >
        <ChevronRight size={28} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.src}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={current.src}
            alt={current.alt}
            width={1400}
            height={900}
            className="max-h-[88vh] w-full object-contain"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <p className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs font-medium tracking-widest text-white/40">
        {index + 1} / {N}
      </p>
    </motion.div>
  );
}
