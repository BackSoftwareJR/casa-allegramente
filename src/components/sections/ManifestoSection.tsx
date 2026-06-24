'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { manifestoContent } from '@/data/content';
import { brand } from '@/lib/brand-colors';
import SectionPastelBg from '@/components/ui/SectionPastelBg';

export default function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['24px', '-24px']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="py-16 md:py-24"
      aria-label="La nostra filosofia"
    >
      <SectionPastelBg hue="orange" className="py-0">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl border border-linen-200/80 bg-white px-6 py-20 shadow-warm-md md:px-12 md:py-28">
          {/* Subtle warm accents */}
          <motion.div
            style={{ y }}
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          >
            <div
              className="h-full w-full"
              style={{
                background:
                  `radial-gradient(circle at 20% 40%, ${brand.orange.accent}0F 0%, transparent 50%), radial-gradient(circle at 80% 60%, ${brand.green.accent}0F 0%, transparent 50%)`,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute right-6 top-6 opacity-[0.04] md:right-10 md:top-10"
            aria-hidden="true"
          >
            <Image
              src="/images/logo-allegramente.png"
              alt=""
              width={200}
              height={200}
            />
          </motion.div>

          <motion.div style={{ opacity }} className="relative flex flex-col items-center text-center">
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px w-16 bg-primary/25" />
              <span className="text-primary/50" style={{ fontSize: '1.2rem' }}>✦</span>
              <div className="h-px w-16 bg-primary/25" />
            </div>

            <div className="space-y-2">
              {manifestoContent.lines.map((line, i) => (
                <motion.p
                  key={line.text}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-display leading-none ${
                    line.em ? 'text-gradient-gold font-bold' : 'font-semibold text-ink-muted/60'
                  }`}
                  style={{ fontSize: 'clamp(2.4rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
                >
                  {line.text}
                </motion.p>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mx-auto mt-10 max-w-2xl font-sans text-xl italic leading-relaxed text-ink-light md:text-2xl"
            >
              &ldquo;{manifestoContent.quote}&rdquo;
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="h-px w-16 bg-primary/25" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                {manifestoContent.locationLabel}
              </span>
              <div className="h-px w-16 bg-primary/25" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      </SectionPastelBg>
    </section>
  );
}
