import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeOnly } from '@/lib/animations';

type StoryImageCardProps = {
  image: string;
  label?: string;
  title: string;
  description: string;
  index: number;
  reduced?: boolean;
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function StoryImageCard({
  image,
  label,
  title,
  description,
  index,
  reduced = false,
}: StoryImageCardProps) {
  const imageOnRight = index % 2 === 1;
  const contentAlign = imageOnRight ? 'md:justify-end md:text-right' : 'md:justify-start md:text-left';

  return (
    <motion.article
      variants={reduced ? fadeOnly : rowVariants}
      whileHover={
        reduced ? undefined : { y: -4, transition: { type: 'spring', stiffness: 380, damping: 24 } }
      }
      className="group relative w-full overflow-hidden rounded-3xl border border-honey/40 bg-cedar shadow-warm-md transition-shadow duration-300 hover:border-honey/60 hover:shadow-warm-lg"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10"
        aria-hidden
      />

      <div className={`relative flex min-h-[18rem] items-end p-8 sm:min-h-[22rem] sm:p-10 ${contentAlign}`}>
        <div className={cn('max-w-xl', imageOnRight && 'md:ml-auto')}>
          {label ? (
            <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-stone-100/90 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
              {label}
            </p>
          ) : null}
          <h3
            className={cn(
              'font-display text-2xl font-semibold leading-snug text-stone-50 [text-shadow:0_2px_22px_rgba(0,0,0,0.6)] sm:text-3xl',
              label && 'mt-2',
            )}
          >
            {title}
          </h3>
          <p className="mt-4 font-sans text-base leading-relaxed text-stone-100/90 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
