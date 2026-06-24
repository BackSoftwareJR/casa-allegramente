'use client';

import { motion } from 'framer-motion';
import { values } from '@/data/content';
import { brandPastelCycle } from '@/lib/brand-colors';
import { staggerContainer, fadeUp, viewportOptions } from '@/lib/animations';

export default function ValuesSection() {
  return (
    <section aria-label="I nostri valori" className="section-spacing bg-transparent">
      <div className="container-site">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <motion.p variants={fadeUp} className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary-700">
            Chi siamo davvero
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display font-bold text-warm-brown text-balance"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            I valori che guidano<br />ogni giorno
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-line mx-auto mt-5" />
          <motion.p variants={fadeUp} className="mt-5 font-sans text-base leading-relaxed text-ink-light">
            Cinque principi che non sono parole sul muro — sono il modo in cui lavoriamo ogni giorno, con ogni persona.
          </motion.p>
        </motion.div>

        {/* Grid bento asimmetrico */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, i) => {
            const accent = value.accent;
            const pastel = brandPastelCycle[i % brandPastelCycle.length];
            const isWide = i === 0 || i === 4;
            return (
              <motion.div
                key={value.id}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-3xl border border-white/70 p-7 shadow-warm-sm backdrop-blur-sm transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-1 ${
                  isWide ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ backgroundColor: `${pastel}CC` }}
              >
                {/* Decorative circle top-right */}
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                  style={{ backgroundColor: accent }}
                  aria-hidden="true"
                />

                {/* Icon circle */}
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${accent}18` }}
                >
                  <span
                    className="font-display text-xl font-bold"
                    style={{ color: accent }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Accent dot */}
                <div
                  className="mb-3 h-1 w-8 rounded-full"
                  style={{ backgroundColor: accent }}
                />

                <h3
                  className="font-display font-bold text-warm-brown"
                  style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', letterSpacing: '-0.01em' }}
                >
                  {value.title}
                </h3>
                <p
                  className="mt-1 font-sans text-sm font-semibold"
                  style={{ color: accent }}
                >
                  {value.tagline}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink-light">
                  {value.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
