export default function BlogHero() {
  return (
    <header className="relative mb-14 overflow-hidden rounded-3xl bg-forest px-8 py-14 md:px-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 80% 20%, rgba(201,168,76,0.35) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-2xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">Risorse e guide</p>
        <h1 className="mt-4 heading-display text-display-sm text-white md:text-display-md">Il nostro Blog</h1>
        <div className="gold-divider mt-6 !via-gold/60" />
        <p className="mt-5 font-sans text-base leading-relaxed text-white/70">
          Approfondimenti per famiglie e caregiver: come scegliere la struttura giusta, affrontare le scelte
          delicate con serenità e scoprire la vita quotidiana in una residenza a Cabiate, in provincia di Como.
        </p>
      </div>
    </header>
  );
}
