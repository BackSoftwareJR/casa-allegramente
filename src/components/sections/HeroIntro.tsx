'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { heroIntro } from '@/data/content';

const WORDS = heroIntro.split(/\s+/);
const STAGGER = 0.055;
const BASE_DELAY = 0.15;

export default function HeroIntro() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const prefersReduced = useReducedMotion();
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (prefersReduced || !inView) return;
    const duration = (BASE_DELAY + WORDS.length * STAGGER) * 1000;
    const timer = setTimeout(() => setTypingDone(true), duration);
    return () => clearTimeout(timer);
  }, [inView, prefersReduced]);

  const showFullText = Boolean(prefersReduced);

  return (
    <section
      ref={ref}
      aria-label="Presentazione"
      className="bg-transparent pb-4 pt-5 md:pb-5 md:pt-6"
    >
      <div className="container-site">
        <p
          className="mx-auto w-full max-w-3xl break-words px-1 text-pretty text-center font-sans text-[0.9375rem] italic leading-[1.65] text-anthracite/85 sm:text-base sm:leading-relaxed md:text-lg md:leading-[1.7] lg:max-w-[42rem] lg:text-[1.125rem]"
        >
            {showFullText ? (
              heroIntro
            ) : !inView ? (
              <span className="sr-only">{heroIntro}</span>
            ) : (
              <>
                {WORDS.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.08,
                      delay: BASE_DELAY + i * STAGGER,
                      ease: 'linear',
                    }}
                    className="inline"
                  >
                    {word}
                    {i < WORDS.length - 1 ? ' ' : ''}
                  </motion.span>
                ))}
                {!typingDone && (
                  <motion.span
                    aria-hidden="true"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.75, ease: 'easeInOut' }}
                    className="ml-0.5 inline-block h-[1em] w-px translate-y-px align-middle bg-primary/50"
                  />
                )}
              </>
            )}
        </p>
      </div>
    </section>
  );
}
