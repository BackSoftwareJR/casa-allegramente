'use client';

import { motion } from 'framer-motion';
import { seasons } from '@/data/content';
import SectionPastelBg from '@/components/ui/SectionPastelBg';
import { staggerContainer, fadeUp, viewportOptions } from '@/lib/animations';

export default function SeasonsSection() {
  return (
    <section aria-label="Le stagioni in casa" className="bg-transparent">
      <SectionPastelBg hue="green" className="section-spacing">
      <div className="container-site">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mb-14 max-w-xl"
        >
          <motion.p variants={fadeUp} className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary-700">
            Tutto l&apos;anno
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display font-bold text-warm-brown text-balance"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Quattro stagioni,<br />una casa viva
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-5 gold-line" />
          <motion.p variants={fadeUp} className="mt-5 font-sans text-base leading-relaxed text-ink-light">
            A Rivarolo Canavese ogni stagione porta con sé attività nuove, sapori diversi e momenti unici da vivere insieme.
          </motion.p>
        </motion.div>

        {/* Stagioni — scrollabile orizzontalmente su mobile, griglia 4 su desktop */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="flex gap-4 w-max px-1">
            {seasons.map((season) => (
              <SeasonCard key={season.id} season={season} />
            ))}
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {seasons.map((season) => (
            <motion.div key={season.id} variants={fadeUp}>
              <SeasonCard season={season} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      </SectionPastelBg>
    </section>
  );
}

function SeasonCard({ season }: { season: typeof seasons[number] }) {
  return (
    <div
      className="group relative flex w-64 flex-col rounded-3xl border border-linen-300 p-6 shadow-warm-sm transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-1 md:w-auto"
      style={{ backgroundColor: season.bg }}
    >
      {/* Icon */}
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
        style={{ backgroundColor: `${season.color}18` }}
      >
        {season.icon}
      </div>

      {/* Accent line */}
      <div
        className="mb-4 h-1 w-8 rounded-full"
        style={{ backgroundColor: season.color }}
      />

      <h3
        className="font-display font-bold"
        style={{ fontSize: '1.3rem', color: season.color, letterSpacing: '-0.01em' }}
      >
        {season.name}
      </h3>
      <p
        className="mt-1 font-sans text-xs font-semibold uppercase tracking-[0.12em]"
        style={{ color: `${season.color}80` }}
      >
        {season.tagline}
      </p>
      <p className="mt-3 font-sans text-sm leading-relaxed text-ink-light">
        {season.description}
      </p>
    </div>
  );
}
