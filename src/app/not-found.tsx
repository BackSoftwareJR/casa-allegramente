import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-linen-100 px-6 text-center">
      <p className="font-display text-8xl font-bold text-forest/10">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-forest">Pagina non trovata</h1>
      <p className="mt-3 font-sans text-base text-ink-muted">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
      <Link
        href="/"
        className="btn-primary mt-8"
      >
        Torna alla home
      </Link>
    </div>
  );
}
