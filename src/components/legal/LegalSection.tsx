import type { ReactNode } from 'react';

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export default function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="mt-10 border-t border-linen-200/80 pt-8 first:mt-0 first:border-t-0 first:pt-0">
      <h2 className="font-display text-xl font-bold text-warm-brown md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 font-sans text-sm leading-relaxed text-ink-light">{children}</div>
    </section>
  );
}
