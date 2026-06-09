import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { heroStats } from '@/data/content';
import { cn } from '@/lib/utils';

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (prefersReduced) {
      setCount(target);
      return;
    }
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function columnTone(index: number) {
  const isMiddle = index === 1 || index === 2;
  return isMiddle
    ? 'bg-burgundy-light/45 hover:bg-burgundy-light/55'
    : 'bg-burgundy-dark/60 hover:bg-burgundy-light/25';
}

export function StatsBar() {
  return (
    <section id="stats" aria-label="Numeri chiave" className="section-bg-burgundy relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-honey/40 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 50% 80% at 25% 50%, rgba(184,137,58,0.25) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="container-site relative py-12 md:py-14">
        <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className={cn(
                'group flex flex-col items-center px-4 py-8 text-center transition-colors duration-300 md:px-6 md:py-10',
                columnTone(i),
              )}
            >
              <span className="font-display text-4xl font-bold leading-none text-honey md:text-5xl">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-cream/80">
                {stat.label}
              </span>
              {stat.note && (
                <span className="mt-1.5 hidden font-sans text-[11px] leading-snug text-cream/40 md:block">
                  {stat.note}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-honey/20 to-transparent" />
    </section>
  );
}
