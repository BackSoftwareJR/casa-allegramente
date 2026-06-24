interface AuthorBoxProps {
  author: string;
  date: string;
  lastModified?: string;
  readingTime: string;
}

export default function AuthorBox({ author, date, lastModified, readingTime }: AuthorBoxProps) {
  const formattedDate = new Date(date).toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedModified =
    lastModified && lastModified !== date
      ? new Date(lastModified).toLocaleDateString('it-IT', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : null;

  return (
    <div className="rounded-2xl border border-linen-300 bg-white p-5 shadow-warm-sm">
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-700">Autore</p>
      <p className="mt-2 font-sans text-lg font-semibold text-warm-brown">{author}</p>
      <dl className="mt-4 space-y-2 font-sans text-sm text-ink-muted">
        <div>
          <dt className="inline font-medium text-ink-light">Pubblicato: </dt>
          <dd className="inline">
            <time dateTime={date}>{formattedDate}</time>
          </dd>
        </div>
        {formattedModified && (
          <div>
            <dt className="inline font-medium text-ink-light">Aggiornato: </dt>
            <dd className="inline">
              <time dateTime={lastModified}>{formattedModified}</time>
            </dd>
          </div>
        )}
        <div>
          <dt className="inline font-medium text-ink-light">Tempo di lettura: </dt>
          <dd className="inline">{readingTime}</dd>
        </div>
      </dl>
    </div>
  );
}
