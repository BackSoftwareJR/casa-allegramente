import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Cookie policy — Il Castagno</title>
        <meta
          name="description"
          content="Cookie policy di Il Castagno, casa famiglia per anziani a Bedero Valcuvia (VA)."
        />
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h1 className="font-serif text-3xl text-castagno-forest sm:text-4xl">Cookie policy</h1>
        <p className="mt-6 text-lg leading-relaxed text-castagno-muted">
          Il contenuto di questa pagina è in fase di aggiornamento. Per informazioni contattare info@ilcastagno.it.
        </p>
        <Link
          to="/contatti"
          className="mt-8 inline-block font-medium text-castagno-forest transition-colors hover:text-castagno-ink hover:underline"
        >
          Torna ai contatti
        </Link>
      </div>
    </>
  )
}
