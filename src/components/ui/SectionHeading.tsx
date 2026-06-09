import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp, fadeOnly } from '@/lib/animations';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  light = false,
}: SectionHeadingProps) {
  const reduced = useReducedMotion();
  const variants = reduced ? fadeOnly : fadeUp;
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.header
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn('mb-10 md:mb-12 max-w-prose', alignClass, className)}
    >
      {eyebrow && (
        <p className={cn('eyebrow mb-3', light && 'text-honey-light')}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          'font-display font-semibold tracking-tight text-balance text-display-md md:text-display-lg',
          light ? 'text-white-warm' : 'heading-display text-ink',
        )}
      >
        {title}
      </h2>
      <div className={cn('gold-divider mt-4', align === 'left' && 'mx-0')} />
      {subtitle && (
        <p
          className={cn(
            'mt-4 font-sans text-lg leading-relaxed md:text-xl',
            light ? 'text-cream/85' : 'text-charcoal',
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
