'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { siteConfig } from '@/data/content';
import { cn } from '@/lib/utils';

export interface PortfolioGalleryImage {
  src: string;
  alt: string;
  title?: string;
}

export interface PortfolioGalleryProps {
  title?: string;
  archiveButton?: {
    text: string;
    href: string;
  };
  images?: PortfolioGalleryImage[];
  className?: string;
  onImageClick?: (index: number) => void;
  pauseOnHover?: boolean;
  marqueeRepeat?: number;
}

const HOVER_SPRING = { type: 'spring' as const, stiffness: 200, damping: 34, mass: 0.9 };

const cardShadow = `
  rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
  rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
  rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
  rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
`;

type IndexedImage = PortfolioGalleryImage & { originalIndex: number };

function MobileMarqueeRow({
  items,
  reverse,
  durationSec,
  pauseOnHover,
  repeat,
  onImageClick,
}: {
  items: IndexedImage[];
  reverse?: boolean;
  durationSec: number;
  pauseOnHover: boolean;
  repeat: number;
  onImageClick?: (index: number) => void;
}) {
  if (items.length === 0) return null;

  return (
    <div className="overflow-hidden">
      <div
        className="group flex overflow-hidden py-1 [--gap:1rem] [gap:var(--gap)]"
        style={{ ['--duration' as string]: `${durationSec}s` }}
      >
        {Array.from({ length: repeat }).map((_, rep) => (
          <div
            key={rep}
            className={cn(
              'flex shrink-0 [gap:var(--gap)]',
              reverse ? 'animate-marquee-reverse flex-row' : 'animate-marquee flex-row',
              pauseOnHover && 'group-hover:[animation-play-state:paused]',
            )}
          >
            {items.map((image) => (
              <button
                key={`${rep}-${image.originalIndex}`}
                type="button"
                className="group flex-shrink-0 cursor-pointer border-0 bg-transparent p-0"
                onClick={() => onImageClick?.(image.originalIndex)}
                aria-label={`Apri foto ${image.originalIndex + 1}`}
              >
                <div
                  className="relative h-[34vh] min-h-[220px] w-[82vw] max-w-[420px] overflow-hidden rounded-2xl transition-transform duration-500 group-active:scale-[0.98] sm:h-[36vh] sm:w-[78vw]"
                  style={{ boxShadow: cardShadow }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PortfolioGallery({
  title = 'Galleria fotografica',
  archiveButton = {
    text: 'Prenota una visita',
    href: '/#contatti',
  },
  images: customImages,
  className = '',
  onImageClick,
  pauseOnHover = true,
  marqueeRepeat = 3,
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const defaultImages: PortfolioGalleryImage[] = [
    {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
      alt: 'SaaS Dashboard Design',
    },
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
      alt: 'Web Development',
    },
    {
      src: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=600&fit=crop&q=80',
      alt: 'E-Commerce Platform',
    },
    {
      src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80',
      alt: 'Mobile App Design',
    },
    {
      src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop&q=80',
      alt: 'Brand Identity',
    },
    {
      src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=80',
      alt: 'Marketing Campaign',
    },
    {
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&q=80',
      alt: 'Product Photography',
    },
    {
      src: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop&q=80',
      alt: 'Packaging Design',
    },
    {
      src: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=600&fit=crop&q=80',
      alt: 'Tech Innovation',
    },
    {
      src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop&q=80',
      alt: 'Future Vision',
    },
  ];

  const images = customImages ?? defaultImages;
  const totalImages = images.length;
  const middle = Math.floor(totalImages / 2);

  const { rowEven, rowOdd } = useMemo(() => {
    const even: IndexedImage[] = [];
    const odd: IndexedImage[] = [];
    images.forEach((img, i) => {
      const item = { ...img, originalIndex: i };
      if (i % 2 === 0) even.push(item);
      else odd.push(item);
    });
    return { rowEven: even, rowOdd: odd };
  }, [images]);

  return (
    <section
      aria-label={title}
      className={cn('relative w-full overflow-x-hidden', className)}
      id="galleria"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-30 px-6 pb-4 pt-28 text-center md:pb-2 md:pt-32"
      >
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
          {siteConfig.name} · {siteConfig.contact.address.city}
        </p>
        <h2 className="text-balance font-display text-4xl font-semibold text-warm-brown md:text-6xl">
          {title}
        </h2>
        <Link
          href={archiveButton.href}
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-sans text-sm font-semibold text-white shadow-warm-sm transition-colors hover:bg-primary-dark hover:shadow-warm-md"
        >
          <span>{archiveButton.text}</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* Desktop — ventaglio ORIZZONTALE (leggibile, non impilato) */}
      <div className="relative mx-auto hidden w-full max-w-[100vw] overflow-hidden md:block">
        <div className="relative flex h-[340px] items-center justify-center overflow-hidden lg:h-[380px]">
          <div className="flex items-center justify-center -space-x-28 lg:-space-x-36 xl:-space-x-40">
            {images.map((image, index) => {
              const offset = index - middle;
              const distanceFromMiddle = Math.abs(offset);
              const zIndex = totalImages - distanceFromMiddle;

              const isHovered = hoveredIndex === index;
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

              /* Arco orizzontale: centro più alto, lati più bassi */
              const arcY = -Math.max(0, 48 - distanceFromMiddle * 10);
              const fanRotateZ = offset * 4;
              const rotateY = isHovered ? -4 : -14;

              const y = isHovered ? -100 : isOtherHovered ? 8 : arcY;
              const scale = isHovered ? 1.1 : 1;
              const x = isHovered ? 0 : isOtherHovered ? offset * 6 : 0;

              return (
                <motion.div
                  key={`${image.src}-${index}`}
                  className="group flex-shrink-0 cursor-pointer"
                  style={{ zIndex: isHovered ? 200 : zIndex }}
                  initial={{
                    opacity: 0,
                    transform: `perspective(1400px) rotateY(-18deg) rotateZ(${fanRotateZ}deg) translateY(60px) scale(0.9)`,
                  }}
                  animate={{
                    opacity: 1,
                    transform: `perspective(1400px) rotateY(${rotateY}deg) rotateZ(${fanRotateZ}deg) translateX(${x}px) translateY(${y}px) scale(${scale})`,
                  }}
                  transition={
                    hoveredIndex !== null
                      ? HOVER_SPRING
                      : { ...HOVER_SPRING, delay: index * 0.03 }
                  }
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => onImageClick?.(index)}
                >
                  <div
                    className="relative aspect-[4/3] w-48 overflow-hidden rounded-xl transition-[filter] duration-500 group-hover:brightness-105 lg:w-56 xl:w-64"
                    style={{ boxShadow: cardShadow }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                      loading={index < 6 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile — 2 righe: su ↓ destra, giù ↓ sinistra, foto grandi e lente */}
      <div className="flex flex-col gap-4 pb-16 pt-4 md:hidden">
        <MobileMarqueeRow
          items={rowEven}
          durationSec={95}
          pauseOnHover={pauseOnHover}
          repeat={marqueeRepeat}
          onImageClick={onImageClick}
        />
        <MobileMarqueeRow
          items={rowOdd}
          reverse
          durationSec={110}
          pauseOnHover={pauseOnHover}
          repeat={marqueeRepeat}
          onImageClick={onImageClick}
        />
      </div>
    </section>
  );
}
