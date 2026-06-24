import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/content';
import { createPageMetadata } from '@/lib/seo';
import LegalPageShell from '@/components/legal/LegalPageShell';
import LegalSection from '@/components/legal/LegalSection';
import LegalEntityBlock from '@/components/legal/LegalEntityBlock';

export const metadata: Metadata = createPageMetadata({
  title: `Accessibilità | ${siteConfig.name}`,
  description: `Dichiarazione di accessibilità del sito ${siteConfig.name} — ${siteConfig.legal.companyNameFull}. Conformità Legge 4/2004 (Legge Stanca) e Direttiva UE 2016/2102.`,
  path: '/accessibilita',
  keywords: ['accessibilità web Casa Allegramente', 'Legge Stanca', 'WCAG'],
  noIndex: false,
});

export default function AccessibilitaPage() {
  const { legal, contact, name, url } = siteConfig;

  return (
    <LegalPageShell eyebrow="Accessibilità" title="Dichiarazione di accessibilità" path="accessibilita">
      <p className="font-sans text-sm leading-relaxed text-ink-light">
        {legal.companyNameFull} si impegna a rendere il sito web {url} accessibile, conformemente
        alla Legge 9 gennaio 2004 n. 4 (&ldquo;Legge Stanca&rdquo;), al D.Lgs. 106/2018 (attuazione
        della Direttiva UE 2016/2102) e, a partire dal 28 giugno 2025, al Regolamento (UE) 2023/2854
        sull&apos;accessibilità dei prodotti e servizi (&ldquo;European Accessibility Act&rdquo;), ove
        applicabile ai servizi di comunicazione e-commerce.
      </p>

      <LegalSection title="1. Stato di conformità">
        <p>
          Il presente sito web è <strong className="text-warm-brown">parzialmente conforme</strong>{' '}
          ai requisiti previsti dalle{' '}
          <a
            href="https://www.w3.org/TR/WCAG22/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Web Content Accessibility Guidelines (WCAG) 2.2
          </a>{' '}
          al livello AA, in quanto sono presenti alcune non conformità e/o deroghe elencate di
          seguito.
        </p>
        <p>
          La valutazione è stata effettuata mediante autovalutazione condotta da {legal.companyNameFull}{' '}
          con strumenti di verifica automatica e revisione manuale dei contenuti principali.
        </p>
      </LegalSection>

      <LegalSection title="2. Contenuti non accessibili">
        <p>Di seguito i contenuti non conformi e le relative motivazioni:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong className="text-warm-brown">Alcune immagini decorative e fotografiche</strong> —
            possono presentare testi alternativi generici; stiamo progressivamente migliorando le
            descrizioni <code className="rounded bg-linen-200 px-1 text-xs">alt</code> per le immagini
            informative (WCAG 1.1.1)
          </li>
          <li>
            <strong className="text-warm-brown">Contenuti multimediali</strong> — i video presenti
            sul sito potrebbero non essere sempre corredati di sottotitoli o trascrizione testuale
            (WCAG 1.2)
          </li>
          <li>
            <strong className="text-warm-brown">Componenti interattivi avanzati</strong> — alcune
            animazioni e componenti con librerie di terze parti potrebbero non essere completamente
            navigabili da tastiera o da screen reader (WCAG 2.1.1, 4.1.2)
          </li>
          <li>
            <strong className="text-warm-brown">Contrasto cromatico</strong> — in alcune sezioni con
            sfondi pastello il rapporto di contrasto potrebbe non raggiungere sempre il rapporto 4.5:1
            per testi secondari (WCAG 1.4.3)
          </li>
          <li>
            <strong className="text-warm-brown">Documenti PDF esterni</strong> — eventuali documenti
            scaricabili di terze parti non sono sotto il controllo diretto del Titolare
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Misure di accessibilità adottate">
        <p>Il sito implementa, tra le altre, le seguenti soluzioni:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Struttura semantica HTML5 con landmark ARIA (<code className="rounded bg-linen-200 px-1 text-xs">main</code>, <code className="rounded bg-linen-200 px-1 text-xs">nav</code>, <code className="rounded bg-linen-200 px-1 text-xs">footer</code>)</li>
          <li>Link &ldquo;Salta al contenuto principale&rdquo; (<code className="rounded bg-linen-200 px-1 text-xs">skip-link</code>) per la navigazione da tastiera</li>
          <li>Attributo <code className="rounded bg-linen-200 px-1 text-xs">lang=&quot;it&quot;</code> sulla pagina</li>
          <li>Testi alternativi sulle immagini principali e sul logo</li>
          <li>Focus visibile su elementi interattivi</li>
          <li>Progettazione responsive per dispositivi mobili</li>
          <li>Formulari con etichette associate ai campi</li>
          <li>Utilizzo di font leggibili con dimensioni scalabili</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Compatibilità">
        <p>
          Il sito è progettato per essere compatibile con i browser moderni più diffusi (Chrome,
          Firefox, Safari, Edge) e con le principali tecnologie assistive. Si consiglia di utilizzare
          versioni aggiornate del browser e del sistema operativo per una migliore esperienza di
          accessibilità.
        </p>
      </LegalSection>

      <LegalSection title="5. Preparazione della dichiarazione">
        <p>
          La presente dichiarazione è stata redatta il {legal.lastLegalUpdate}. La dichiarazione è
          stata preparata mediante autovalutazione.
        </p>
        <p>
          Data della dichiarazione: {legal.lastLegalUpdate}. Data dell&apos;ultima revisione
          sostanziale: {legal.lastLegalUpdate}.
        </p>
      </LegalSection>

      <LegalSection title="6. Feedback e meccanismo di attuazione">
        <p>
          Invitiamo gli utenti a segnalare eventuali problemi di accessibilità riscontrati durante la
          navigazione. {legal.companyNameFull} si impegna a rispondere entro 30 giorni lavorativi e a
          adottare misure correttive ragionevoli.
        </p>
        <p>
          <strong className="text-warm-brown">Contatti per segnalazioni:</strong>
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            Email:{' '}
            <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
              {contact.email}
            </a>
          </li>
          <li>
            PEC:{' '}
            <a href={`mailto:${legal.pec}`} className="text-primary hover:underline">
              {legal.pec}
            </a>
          </li>
          <li>
            Telefono:{' '}
            <a href={`tel:${contact.phoneRaw}`} className="text-primary hover:underline">
              {contact.phone}
            </a>
          </li>
        </ul>
        <p className="mt-3">
          Nella segnalazione, indicare preferibilmente: URL della pagina, descrizione del problema,
          tecnologia assistiva utilizzata (se applicabile) e dati di contatto per il riscontro.
        </p>
      </LegalSection>

      <LegalSection title="7. Procedura di attuazione (AgID)">
        <p>
          In caso di risposta insoddisfacente o di mancata risposta entro 30 giorni, è possibile
          inviare segnalazione all&apos;Agenzia per l&apos;Italia Digitale (AgID) tramite il{' '}
          <a
            href="https://form.agid.gov.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            form di segnalazione accessibilità AgID
          </a>
          , ai sensi dell&apos;art. 3-quater comma 1 della Legge 4/2004.
        </p>
      </LegalSection>

      <LegalSection title="8. Accessibilità della struttura fisica">
        <p>
          {name} è una villa su piano unico, progettata per accogliere ospiti over 65 autosufficienti
          con assenza di barriere architettoniche interne. Per informazioni sull&apos;accessibilità
          fisica della struttura (accessi, bagni, camere), contattare direttamente la struttura o
          consultare la pagina{' '}
          <Link href="/dove-siamo" className="text-primary hover:underline font-semibold">
            Dove siamo
          </Link>{' '}
          e{' '}
          <Link href="/contatti" className="text-primary hover:underline font-semibold">
            Contatti
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Titolare del sito">
        <LegalEntityBlock />
      </LegalSection>
    </LegalPageShell>
  );
}
