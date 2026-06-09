import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp, fadeOnly } from '@/lib/animations';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
};

export function Card({ children, className, hover = true, animate = true }: CardProps) {
  const reduced = useReducedMotion();
  const variants = reduced ? fadeOnly : fadeUp;

  if (!animate) {
    return (
      <div
        className={cn(
          'rounded-2xl bg-white-warm p-6 shadow-warm-sm md:p-7',
          hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-warm-md motion-reduce:transform-none',
          className,
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={reduced || !hover ? undefined : { y: -4 }}
      className={cn(
        'rounded-2xl bg-white-warm p-6 shadow-warm-sm md:p-7',
        hover && 'transition-shadow duration-300 hover:shadow-warm-md',
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
