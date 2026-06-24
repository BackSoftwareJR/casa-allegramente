'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from '@/components/ui/bento-grid';
import { GalleryLightbox } from '@/components/ui/gallery-lightbox';
import { galleryImages } from '@/data/content';

const images = galleryImages.map((img) => ({ src: img.src, alt: img.alt }));

// 36 images across 5 bento cells
const CELL_GROUPS: number[][] = [
  [0, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
];
const CAROUSEL_INTERVALS = [5500, 6500, 6000, 5000, 5800];

interface CarouselCellProps {
  groupIndices: number[];
  intervalMs: number;
  onImageClick: (globalIndex: number) => void;
}

function CarouselCell({ groupIndices, intervalMs, onImageClick }: CarouselCellProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveSlide((prev) => (prev + 1) % groupIndices.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [groupIndices.length, intervalMs]);

  const globalIndex = groupIndices[activeSlide];
  const image = images[globalIndex];

  const slideVariants = {
    enter: { opacity: 0, scale: 1.06 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
  };

  return (
    <button
      type="button"
      aria-label={`Apri foto: ${image.alt}`}
      onClick={() => onImageClick(globalIndex)}
      className="group absolute inset-0 w-full overflow-hidden focus:outline-none"
    >
      <AnimatePresence mode="sync" custom={direction}>
        <motion.div
          key={globalIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.25, 1, 0.35, 1] }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>

      {/* Apple glass inner border */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          border: '1px solid rgba(255,255,255,0.18)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.24)',
        }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 z-10 bg-black/0 transition-all duration-300 group-hover:bg-black/12" />

      {/* Progress dots */}
      <div className="absolute bottom-2.5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1">
        {groupIndices.map((_, i) => (
          <div
            key={i}
            className="transition-all duration-300"
            style={{
              width: i === activeSlide ? 16 : 5,
              height: 5,
              borderRadius: 2.5,
              background: i === activeSlide ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>
    </button>
  );
}

export default function GalleriaClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleImageClick = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  return (
    <>
      {/* 350vh tall scroll container — drives all animations */}
      <ContainerScroll className="h-[350vh]">

        {/* Sticky bento grid — stays pinned at top while user scrolls through 350vh */}
        <BentoGrid
          variant="default"
          className="sticky left-0 top-0 z-0 h-screen w-full p-3 md:p-4"
        >
          {CELL_GROUPS.map((groupIndices, cellIdx) => (
            <BentoCell
              key={cellIdx}
              className="relative overflow-hidden rounded-2xl shadow-xl"
            >
              <CarouselCell
                groupIndices={groupIndices}
                intervalMs={CAROUSEL_INTERVALS[cellIdx]}
                onImageClick={handleImageClick}
              />
            </BentoCell>
          ))}
        </BentoGrid>

        {/* Title overlay — fixed center, fades + scales out as user scrolls */}
        <ContainerScale className="z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.35, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <h1
              className="font-display font-bold tracking-tight text-white md:text-6xl"
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 4rem)',
                textShadow: '0 2px 24px rgba(0,0,0,0.85), 0 1px 8px rgba(0,0,0,0.7)',
              }}
            >
              Scopri la nostra casa
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-sans text-sm font-medium tracking-[0.18em] uppercase text-white"
              style={{ textShadow: '0 1px 12px rgba(0,0,0,0.85), 0 2px 6px rgba(0,0,0,0.7)' }}
            >
              Scorri in basso per scoprire
            </motion.p>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-1"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v12M10 16l-4-4M10 16l4-4" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </ContainerScale>

      </ContainerScroll>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <GalleryLightbox
            images={images}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
