'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { brand } from '@/lib/brand-colors';
import { heroContent } from '@/data/content';

const BRAND = heroContent.brand;

const LETTER_COLORS = [
  brand.orange.vivid,
  brand.green.vivid,
  brand.yellow.vivid,
  brand.terracotta.vivid,
  brand.orange.accent,
  brand.green.accent,
  brand.yellow.medium,
  brand.terracotta.accent,
  brand.orange.soft,
  brand.green.soft,
  brand.yellow.soft,
  brand.terracotta.soft,
];

function shuffleColors(length: number, prev?: string[]): string[] {
  const shuffled = [...LETTER_COLORS].sort(() => Math.random() - 0.5);
  return Array.from({ length }, (_, i) => {
    const color = shuffled[i % shuffled.length];
    return color === prev?.[i] ? shuffled[(i + 1) % shuffled.length] : color;
  });
}

type AnimatedBrandLogoProps = {
  variant?: 'light' | 'dark';
  className?: string;
};

export default function AnimatedBrandLogo({ variant = 'dark', className = '' }: AnimatedBrandLogoProps) {
  const letters = useMemo(() => BRAND.split(''), []);
  const prefersReduced = useReducedMotion();
  const [colorMap, setColorMap] = useState<string[]>(() => shuffleColors(letters.length));

  const reshuffle = useCallback(() => {
    setColorMap((prev) => shuffleColors(letters.length, prev));
  }, [letters.length]);

  useEffect(() => {
    if (prefersReduced) return;
    const timer = setInterval(reshuffle, 20_000);
    return () => clearInterval(timer);
  }, [prefersReduced, reshuffle]);

  return (
    <span
      className={`group inline-flex items-center gap-2 ${className}`}
      onMouseEnter={prefersReduced ? undefined : reshuffle}
    >
      <Image
        src="/images/logo-allegramente.png"
        alt="AllegraMente logo"
        width={32}
        height={32}
        className={`shrink-0 rounded-full object-contain transition-opacity duration-300 ${
          variant === 'light' ? 'opacity-90' : 'opacity-100'
        }`}
        priority
      />

      <span
        className="inline-flex items-baseline gap-[0.04em] font-display font-extrabold tracking-tight"
        aria-label={BRAND}
      >
        {letters.map((char, i) => {
          const color =
            variant === 'light'
              ? [brand.yellow.medium, brand.orange.medium, colorMap[i]][i % 3]
              : colorMap[i];

          return (
            <motion.span
              key={i}
              className="relative inline-block"
              initial={prefersReduced ? false : { opacity: 0, y: 8, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: prefersReduced ? 0 : i * 0.045,
                duration: 0.45,
                ease: [0.34, 1.45, 0.64, 1],
              }}
            >
              <motion.span
                animate={{ color }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                style={{
                  textShadow:
                    variant === 'light' ? '0 1px 10px rgba(0,0,0,0.35)' : undefined,
                }}
              >
                {char}
              </motion.span>
            </motion.span>
          );
        })}
      </span>
    </span>
  );
}
