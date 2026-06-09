import { siteQuotes } from '@/data/content';
import { cn } from '@/lib/utils';

const themeLabels = {
  accoglienza: 'Accoglienza',
  professionalità: 'Professionalità',
  'amore familiare': 'Amore familiare',
} as const;

type SectionQuoteProps = {
  quoteId: string;
  light?: boolean;
  className?: string;
};

export function SectionQuote({ quoteId, light = false, className }: SectionQuoteProps) {
  const quote = siteQuotes.find((q) => q.id === quoteId);
  if (!quote) return null;

  return (
    <blockquote className={cn('border-l-4 border-terracotta pl-6', className)}>
      <p
        className={cn(
          'font-display text-xl italic leading-relaxed md:text-2xl',
          light ? 'text-cream' : 'text-charcoal',
        )}
      >
        &ldquo;{quote.text}&rdquo;
      </p>
      <cite
        className={cn(
          'mt-3 block font-sans text-sm font-medium not-italic uppercase tracking-wide',
          light ? 'text-cream/70' : 'text-muted',
        )}
      >
        {themeLabels[quote.theme]}
      </cite>
    </blockquote>
  );
}
