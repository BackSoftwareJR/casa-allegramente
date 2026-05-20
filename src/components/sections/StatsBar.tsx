'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { heroStats } from '@/data/content';

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (prefersReduced) { setCount(target); return; }
    let frame: number;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (p < 1) frame = requestAnimationFrame(tick);
      else setCount(target);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, prefersReduced]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <section aria-label="Numeri chiave" className="relative overflow-hidden bg-forest">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Subtle radial warmth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse 50% 80% at 25% 50%, rgba(201,168,76,0.25) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-site relative py-14 md:py-18">
        <div className="grid grid-cols-2 gap-px bg-white/8 md:grid-cols-4">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ backgroundColor: 'rgba(201,168,76,0.06)' }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="group relative flex flex-col items-center bg-forest px-6 py-10 text-center transition-colors duration-300"
            >
              {/* Gold accent dot top */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.09, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-gold/50 to-transparent"
              />

              <span className="font-display text-5xl font-bold leading-none text-gold md:text-6xl">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </span>

              <span className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                {stat.label}
              </span>

              <span className="mt-1.5 hidden font-sans text-[11px] leading-snug text-white/30 md:block">
                {stat.note}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
