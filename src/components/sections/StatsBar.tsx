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
      const eased = 1 - Math.pow(1 - p, 3);
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
    <section aria-label="Numeri chiave" className="bg-transparent py-10 md:py-14">
      <div className="container-site">
        <div className="overflow-hidden rounded-3xl border border-linen-200/80 bg-white shadow-warm-md">
          <div className="grid grid-cols-2 divide-x divide-y divide-linen-200 md:grid-cols-4 md:divide-y-0">
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ backgroundColor: 'rgba(232,118,10,0.04)' }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="group relative flex flex-col px-5 py-10 transition-colors duration-300 md:px-6 md:py-12"
              >
                <span className="font-display text-4xl font-semibold leading-none text-primary md:text-5xl">
                  {'text' in stat ? (
                    stat.text
                  ) : (
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  )}
                </span>

                <span className="mt-3 font-sans text-sm font-medium leading-snug text-ink">
                  {stat.label}
                </span>

                <span className="mt-2 font-sans text-xs leading-relaxed text-ink-muted">
                  {stat.note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
