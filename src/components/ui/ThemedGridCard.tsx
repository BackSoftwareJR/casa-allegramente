import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeOnly, fadeUp } from '@/lib/animations';

type ThemedGridCardProps = {
  borderClass: string;
  bgClass: string;
  decoration: ReactNode;
  title: string;
  label?: string;
  description: string;
  className?: string;
  reduced?: boolean;
};

export function ThemedGridCard({
  borderClass,
  bgClass,
  decoration,
  title,
  label,
  description,
  className,
  reduced = false,
}: ThemedGridCardProps) {
  return (
    <motion.article
      variants={reduced ? fadeOnly : fadeUp}
      className={cn(
        'relative h-full overflow-hidden rounded-2xl border-t-4 p-6 shadow-warm-sm backdrop-blur-[1px] md:p-7',
        bgClass,
        borderClass,
        className,
      )}
    >
      {decoration}
      <div className="relative z-10 max-w-[85%]">
        {label ? (
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</p>
        ) : null}
        <h3 className={cn('font-display text-2xl font-semibold text-ink', label && 'mt-1')}>{title}</h3>
        <p className="mt-2 font-sans leading-relaxed text-charcoal">{description}</p>
      </div>
    </motion.article>
  );
}
