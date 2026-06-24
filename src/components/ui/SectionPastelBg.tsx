'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { BrandHue } from '@/lib/brand-colors';
import { brand } from '@/lib/brand-colors';

type SectionPastelBgProps = {
  hue?: BrandHue;
  className?: string;
  children: ReactNode;
};

const blobFill: Record<BrandHue, string> = {
  orange: brand.orange.soft,
  green: brand.green.soft,
  yellow: brand.yellow.soft,
  terracotta: brand.terracotta.soft,
  brown: brand.brown.soft,
};

/** Wrapper con sfondo pastello leggero + blob animati (usa dentro un `<section>`) */
export default function SectionPastelBg({
  hue = 'orange',
  className = '',
  children,
}: SectionPastelBgProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={`relative overflow-x-clip ${className}`}>
      <div
        className="absolute inset-0 opacity-60"
        style={{ backgroundColor: brand[hue].pastel }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ backgroundColor: blobFill[hue] }}
        aria-hidden="true"
        animate={prefersReduced ? undefined : { x: [0, 20, 0], y: [0, -15, 0] }}
        transition={
          prefersReduced
            ? undefined
            : { duration: 12, repeat: Infinity, ease: 'easeInOut' }
        }
      />
      <motion.div
        className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: brand.green.soft }}
        aria-hidden="true"
        animate={prefersReduced ? undefined : { x: [0, -15, 0], y: [0, 10, 0] }}
        transition={
          prefersReduced
            ? undefined
            : { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }
        }
      />
      <div className="relative">{children}</div>
    </div>
  );
}
