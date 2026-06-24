import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/content';
import { createPageMetadata } from '@/lib/seo';
import LegalPageShell from '@/components/legal/LegalPageShell';
import LegalSection from '@/components/legal/LegalSection';
import LegalEntityBlock from '@/components/legal/LegalEntityBlock';

export const metadata: Metadata = createPageMetadata({
  title: `Termini e condizioni | ${siteConfig.name}`,
  description: `Termini e condizioni di utilizzo del sito ${siteConfig.name} — ${siteConfig.legal.companyNameFull}. Uso del sito, proprietà intellettuale, limitazioni di responsabilità.`,
  path: '/termini-condizioni',
  keywords: ['termini condizioni Casa Allegramente', 'condizioni utilizzo sito', 'SAEC SRL'],
  noIndex: false,
});

export default function TerminiCondizioniPage() {
  const { legal, contact, name, url } = siteConfig;

  return (
    <LegalPageShell eyebrow="Condizioni d'uso" title="Termini e condizioni di utilizzo" path="termini-condizioni">
      <p className="font-sans text-sm leading-relaxed text-ink-light">
        I presenti Termini e condizioni (&ldquo;Termini&rdquo;) regolano l&apos;accesso e l&apos;utilizzo del
        sito web {url} (&ldquo;Sito&rdquo;), di proprietà di {legal.companyNameFull}. L&apos;accesso al Sito
        implica l&apos;accettazione integrale dei presenti Termini. Se non accetti i Termini, ti
        invitiamo a non utilizzare il Sito.
      </p>

      <LegalSection title="1. Titolare del Sito">
        <LegalEntityBlock />
      </LegalSection>

      <LegalSection title="2. Definizioni">
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <strong className="text-warm-brown">Utente:</strong> qualsiasi persona fisica o giuridica
            che accede al Sito
          </li>
          <li>
            <strong className="text-warm-brown">Servizi informativi:</strong> contenuti, testi, immagini
            e funzionalità di contatto messi a disposizione tramite il Sito
          </li>
          <li>
            <strong className="text-warm-brown">Struttura:</strong> {name}, gestita da{' '}
            {legal.companyNameFull} in {contact.address.full}
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Oggetto e natura del Sito">
        <p>
          Il Sito ha finalità esclusivamente informative e di contatto. Consente di conoscere la
          Struttura, i servizi residenziali offerti, le modalità di visita e di inviare richieste di
          informazione tramite telefono, email, WhatsApp o eventuali moduli di contatto.
        </p>
        <p>
          <strong className="text-warm-brown">Il Sito non costituisce piattaforma di vendita online</strong>{' '}
          ai sensi del D.Lgs. 70/2003 e del D.Lgs. 206/2005. Non è possibile concludere contratti di
          ospitalità, prenotare posti letto o effettuare pagamenti tramite il Sito. I rapporti
          contrattuali con ospiti e familiari vengono instaurati offline, mediante accordi scritti
          separati, dopo le visite e le valutazioni di idoneità.
        </p>
      </LegalSection>

      <LegalSection title="4. Condizioni di accesso e uso lecito">
        <p>L&apos;Utente si impegna a utilizzare il Sito in modo lecito e conforme ai presenti Termini. È vietato:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Utilizzare il Sito per scopi illeciti o fraudolenti</li>
          <li>Tentare di accedere a aree riservate o sistemi informatici del Titolare senza autorizzazione</li>
          <li>Diffondere virus, malware o codice dannoso</li>
          <li>Effettuare scraping automatizzato massivo dei contenuti senza consenso scritto</li>
          <li>Utilizzare i dati di contatto per spam, sollecitazioni commerciali non richieste o molestie</li>
          <li>Pubblicare o trasmettere contenuti diffamatori, offensivi o lesivi di diritti altrui</li>
        </ul>
        <p>
          Il Titolare si riserva il diritto di limitare o interrompere l&apos;accesso al Sito in caso di
          violazione dei presenti Termini.
        </p>
      </LegalSection>

      <LegalSection title="5. Proprietà intellettuale">
        <p>
          Tutti i contenuti del Sito — inclusi testi, fotografie, video, grafica, loghi, marchi,
          denominazione {name} e layout — sono protetti dalla legge sul diritto d&apos;autore (L. 633/1941)
          e dalla normativa sui marchi. Sono di proprietà di {legal.companyNameFull} o utilizzati con
          licenza.
        </p>
        <p>
          È consentita la consultazione e la stampa per uso personale e non commerciale. Qualsiasi
          riproduzione, modifica, distribuzione o utilizzo pubblico non autorizzato è vietato, salvo
          previo consenso scritto del Titolare o nei casi previsti dalla legge.
        </p>
      </LegalSection>

      <LegalSection title="6. Contenuti e informazioni">
        <p>
          Le informazioni pubblicate sul Sito (descrizione servizi, prezzi indicativi, disponibilità
          posti) hanno carattere generale e possono essere modificate senza preavviso. Non costituiscono
          offerta al pubblico ai sensi dell&apos;art. 1336 c.c. e non vincolano il Titolare fino alla
          sottoscrizione di un contratto scritto.
        </p>
        <p>
          Il Titolare non garantisce che il Sito sia privo di interruzioni, errori o malfunzionamenti,
          né che sia compatibile con ogni dispositivo o browser.
        </p>
      </LegalSection>

      <LegalSection title="7. Moduli di contatto e comunicazioni">
        <p>
          L&apos;invio di richieste tramite i canali di contatto comporta il trattamento dei dati personali
          secondo la{' '}
          <Link href="/privacy" className="text-primary hover:underline font-semibold">
            Privacy Policy
          </Link>
          . L&apos;Utente garantisce la veridicità e la liceità dei dati comunicati.
        </p>
        <p>
          Le risposte alle richieste informative non costituiscono parere medico, legale o fiscale
          personalizzato. Per valutazioni specifiche è necessario un colloquio diretto con la Struttura.
        </p>
      </LegalSection>

      <LegalSection title="8. Rapporto contrattuale di ospitalità">
        <p>
          I servizi residenziali della Struttura sono regolati da contratti stipulati per iscritto
          tra {legal.companyNameFull} e l&apos;ospite e/o i familiari/referenti, con condizioni economiche,
          durata, servizi inclusi e obblighi delle parti definiti caso per caso.
        </p>
        <p>
          Il trattamento dei dati sanitari degli ospiti è disciplinato dalla{' '}
          <Link href="/informativa-sanitaria" className="text-primary hover:underline font-semibold">
            Informativa dati sanitari
          </Link>{' '}
          e dalla normativa applicabile al settore socio-sanitario.
        </p>
      </LegalSection>

      <LegalSection title="9. Limitazione di responsabilità">
        <p>
          Nei limiti massimi consentiti dalla legge applicabile, {legal.companyNameFull} non è
          responsabile per:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Danni diretti o indiretti derivanti dall&apos;uso o dall&apos;impossibilità di usare il Sito</li>
          <li>Contenuti o condotte di siti di terze parti raggiungibili tramite link</li>
          <li>Interruzioni, sospensioni o malfunzionamenti del Sito per cause di forza maggiore, manutenzione o aggiornamenti</li>
          <li>Decisioni assunte dall&apos;Utente sulla base esclusiva delle informazioni presenti sul Sito</li>
        </ul>
        <p>
          Resta ferma la responsabilità del Titolare nei casi di dolo o colpa grave, nonché per i
          diritti inderogabili del consumatore previsti dalla legge.
        </p>
      </LegalSection>

      <LegalSection title="13. Forza maggiore e sospensione del Sito">
        <p>
          Il Titolare non è responsabile per interruzioni, sospensioni o malfunzionamenti del Sito
          derivanti da cause di forza maggiore, eventi imprevedibili e inevitabili, atti di terzi,
          guasti alle infrastrutture di rete, manutenzione programmata o aggiornamenti tecnici
          necessari. In tali casi il Titolare si impegna, ove possibile, a ripristinare il servizio
          con diligenza ordinaria.
        </p>
      </LegalSection>

      <LegalSection title="14. Comunicazioni elettroniche">
        <p>
          Le comunicazioni tra l&apos;Utente e il Titolare tramite i canali indicati sul Sito
          (e-mail, WhatsApp, telefono) non costituiscono, di per sé, contratto scritto. Il Titolare
          si riserva la facoltà di non rispondere a comunicazioni abusive, offensive o manifestamente
          infondate.
        </p>
      </LegalSection>

      <LegalSection title="15. Nullità parziale e tolleranza">
        <p>
          Qualora una o più disposizioni dei presenti Termini risultino invalide o inefficaci, le
          restanti disposizioni manterranno piena efficacia. La tolleranza di una violazione non
          costituisce rinuncia al diritto di esigere l&apos;osservanza dei Termini.
        </p>
      </LegalSection>

      <LegalSection title="16. Cookie e privacy">
        <p>
          L&apos;utilizzo del Sito comporta il trattamento di dati personali e l&apos;utilizzo di
          cookie tecnici e analitici, come descritto nella{' '}
          <Link href="/privacy" className="text-primary hover:underline font-semibold">
            Privacy Policy
          </Link>{' '}
          e nella{' '}
          <Link href="/cookie" className="text-primary hover:underline font-semibold">
            Cookie Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="17. Modifiche ai Termini">
        <p>
          Il Titolare può modificare i presenti Termini in qualsiasi momento, pubblicando la versione
          aggiornata su questa pagina con indicazione della data di ultimo aggiornamento. Si consiglia
          di consultare periodicamente i Termini. L&apos;uso continuato del Sito dopo la pubblicazione
          delle modifiche costituisce accettazione delle stesse.
        </p>
      </LegalSection>

      <LegalSection title="18. Legge applicabile e foro competente">
        <p>
          I presenti Termini sono regolati dalla legge italiana. Per le controversie con Utenti
          qualificabili come consumatori ai sensi del D.Lgs. 206/2005, è competente il foro del
          luogo di residenza o domicilio del consumatore. Per le controversie con Utenti non
          consumatori, è competente in via esclusiva il Foro di Torino.
        </p>
      </LegalSection>

      <LegalSection title="19. Contatti">
        <p>
          Per chiarimenti sui presenti Termini:{' '}
          <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
            {contact.email}
          </a>{' '}
          — PEC{' '}
          <a href={`mailto:${legal.pec}`} className="text-primary hover:underline">
            {legal.pec}
          </a>
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
