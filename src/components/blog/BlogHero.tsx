export default function BlogHero() {
  return (
    <header className="relative mb-14 overflow-hidden rounded-3xl border border-linen-200 bg-white px-8 py-14 shadow-warm-sm md:px-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 80% 20%, rgba(232,118,10,0.08) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-2xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Risorse e guide</p>
        <h1 className="mt-4 heading-display text-display-sm text-warm-brown md:text-display-md">Il nostro Blog</h1>
        <div className="gold-divider mt-6" />
        <p className="mt-5 font-sans text-base leading-relaxed text-ink-light">
          Approfondimenti per famiglie e caregiver: come scegliere la struttura giusta, affrontare le scelte
          delicate con serenità e scoprire la vita quotidiana in una casa famiglia a Rivarolo Canavese, nel Canavese piemontese.
        </p>
      </div>
    </header>
  );
}
