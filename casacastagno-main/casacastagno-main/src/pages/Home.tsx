import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import HeroCastagno from '../components/home/HeroCastagno'
import FeatureGridCastagno from '../components/home/FeatureGridCastagno'
import DayTimeline from '../components/home/DayTimeline'
import ServicesColumns from '../components/home/ServicesColumns'
import FadeIn from '../components/ui/FadeIn'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Il Castagno — Casa famiglia per anziani · Valcuvia</title>
        <meta
          name="description"
          content="Il Castagno: residenza esclusiva per la terza età in Valcuvia. Quattro posti, assistenza h24, cucina in struttura e servizi trasparenti."
        />
      </Helmet>

      <HeroCastagno />

      <FeatureGridCastagno />

      <DayTimeline />

      <ServicesColumns />

      <section className="bg-castagno-forest py-16 text-castagno-cream" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <FadeIn>
            <h2 id="cta-heading" className="font-serif text-3xl font-semibold sm:text-4xl">
              Visita Il Castagno
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-castagno-cream/95 sm:text-xl">
              Organizziamo un incontro conoscitivo per la famiglia: spazi, servizi e modalità di ingresso secondo la Carta
              dei Servizi aggiornata.
            </p>
            <p className="mt-5 text-base leading-relaxed text-castagno-cream/90 sm:text-lg">
              Ogni familiare dell&apos;ospite sarà ben accetto a passare quando vuole per far visita ai propri cari, per il
              benessere e la tranquillità di ospiti e familiari.
            </p>
            <Link
              to="/contatti"
              className="mt-8 inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-castagno-gold px-10 py-3 text-lg font-semibold text-castagno-forest transition hover:bg-castagno-gold-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-castagno-cream"
            >
              Contatta la struttura
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
