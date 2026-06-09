'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const lines = [
  { text: 'Non una struttura.', em: false },
  { text: 'Una casa.', em: true },
  { text: 'Non pazienti.', em: false },
  { text: 'Persone.', em: true },
];

export default function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['40px', '-40px']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-forest py-28 md:py-40" aria-label="La nostra filosofia">
      {/* Parallax noise layer */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ background: 'radial-gradient(circle at 30% 50%, #C9A84C 0%, transparent 60%), radial-gradient(circle at 70% 50%, #6B8F71 0%, transparent 60%)' }} />
      </motion.div>

      {/* Gold top/bottom lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-site relative">
        <motion.div style={{ opacity }} className="flex flex-col items-center text-center">

          {/* Ornamental separator */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-16 bg-gold/30" />
            <span className="text-gold/50" style={{ fontSize: '1.2rem' }}>✦</span>
            <div className="h-px w-16 bg-gold/30" />
          </div>

          {/* Big manifesto text */}
          <div className="space-y-2">
            {lines.map((line, i) => (
              <motion.p
                key={line.text}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`font-display leading-none ${
                  line.em
                    ? 'text-gradient-gold font-bold'
                    : 'font-semibold text-white/50'
                }`}
                style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)', letterSpacing: '-0.03em' }}
              >
                {line.text}
              </motion.p>
            ))}
          </div>

          {/* Sub-manifesto */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mx-auto mt-10 max-w-2xl font-display text-xl italic leading-relaxed text-white/55 md:text-2xl"
          >
            &ldquo;Un posto sicuro e protetto dove ogni persona è conosciuta per nome,
            dove la routine quotidiana rispecchia le abitudini di una vita intera,
            dove la famiglia non è un ospite ma parte della nostra comunità.&rdquo;
          </motion.p>

          {/* Bottom ornament */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="h-px w-16 bg-gold/30" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold/50">Residence V.G · Cabiate</span>
            <div className="h-px w-16 bg-gold/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
