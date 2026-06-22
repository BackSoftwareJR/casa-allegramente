'use client';

interface Heading {
  id: string;
  text: string;
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length < 3) return null;

  return (
    <nav aria-label="Indice dei contenuti" className="rounded-2xl border border-linen-300 bg-white p-5 shadow-warm-sm">
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-700">
        In questo articolo
      </p>
      <ol className="mt-4 space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="block font-sans text-sm text-ink-light transition-colors hover:text-forest"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
