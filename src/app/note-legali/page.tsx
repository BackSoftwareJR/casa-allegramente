import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/content';
import { createPageMetadata } from '@/lib/seo';
import LegalPageShell from '@/components/legal/LegalPageShell';
import LegalSection from '@/components/legal/LegalSection';
import LegalEntityBlock from '@/components/legal/LegalEntityBlock';

export const metadata: Metadata = createPageMetadata({
  title: `Note legali | ${siteConfig.name}`,
  description: `Informazioni legali e dati societari di ${siteConfig.name} — ${siteConfig.legal.companyName}, P.IVA ${siteConfig.piva}. Titolare del sito web e gestore della struttura.`,
  path: '/note-legali',
  keywords: ['note legali Casa Allegramente', 'SAEC SRL', 'informazioni legali residenza anziani'],
  noIndex: false,
});

export default function NoteLegaliPage() {
  const { legal, contact, name, url } = siteConfig;

  return (
    <LegalPageShell eyebrow="Informazioni legali" title="Note legali" path="note-legali">
      <p className="font-sans text-sm leading-relaxed text-ink-light">
        Ai sensi dell&apos;art. 12 del D.Lgs. 70/2003 (implementazione della Direttiva 2000/31/CE sui
        servizi della società dell&apos;informazione nel commercio elettronico) e della normativa
        italiana vigente in materia di trasparenza commerciale, si forniscono le seguenti informazioni
        relative al sito web {url} e all&apos;operatore del servizio.
      </p>

      <LegalSection title="1. Titolare del sito e gestore della struttura">
        <LegalEntityBlock />
        <p>
          {legal.companyNameFull} è titolare del sito web e gestore operativo della struttura{' '}
          <strong className="text-warm-brown">{name}</strong>, casa famiglia per anziani over 65
          autosufficienti, con sede operativa in {contact.address.full}.
        </p>
      </LegalSection>

      <LegalSection title="2. Oggetto dell'attività">
        <p>
          L&apos;attività principale di {legal.companyNameFull} consiste nella gestione di una struttura
          residenziale socio-assistenziale per anziani autosufficienti, con erogazione di servizi di
          accoglienza, assistenza di base, vitto, alloggio e attività sociali, nel rispetto della
          normativa sanitaria e sociale applicabile al settore.
        </p>
        <p>
          Il presente sito web ha finalità esclusivamente informative e di contatto: consente di
          conoscere la struttura, i servizi offerti e richiedere informazioni o visite.{' '}
          <strong className="text-warm-brown">
            Non costituisce piattaforma di e-commerce
          </strong>{' '}
          e non consente la conclusione online di contratti di ospitalità o la prenotazione vincolante
          di posti letto.
        </p>
      </LegalSection>

      <LegalSection title="3. Contatti">
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
          <li>Indirizzo: {contact.address.full}</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Responsabilità dei contenuti">
        <p>
          {legal.companyNameFull} cura con la massima diligenza i contenuti pubblicati sul sito,
          verificandone l&apos;accuratezza e l&apos;aggiornamento. Tuttavia, non garantisce l&apos;assenza di
          errori, omissioni o imprecisioni. Le informazioni hanno carattere generale e non sostituiscono
          il colloquio diretto con la struttura per valutazioni personalizzate.
        </p>
        <p>
          Il Titolare non è responsabile per eventuali danni derivanti dall&apos;uso del sito o
          dall&apos;affidamento alle informazioni in esso contenute, salvo i casi di dolo o colpa grave,
          nei limiti consentiti dalla legge.
        </p>
      </LegalSection>

      <LegalSection title="5. Link a siti di terze parti">
        <p>
          Il sito può contenere collegamenti ipertestuali a siti web di terze parti (es. mappe,
          social network, risorse informative). Tali link sono forniti per comodità dell&apos;utente.
          {legal.companyNameFull} non controlla né è responsabile dei contenuti, delle politiche
          privacy o delle pratiche di tali siti esterni.
        </p>
      </LegalSection>

      <LegalSection title="6. Proprietà intellettuale">
        <p>
          Tutti i contenuti del sito — testi, fotografie, grafica, loghi, marchi, video e layout —
          sono di proprietà di {legal.companyNameFull} o utilizzati con licenza. È vietata la
          riproduzione, distribuzione o utilizzazione non autorizzata, totale o parziale, senza
          previo consenso scritto del Titolare, salvo i casi consentiti dalla legge (citazione per
          finalità di critica, recensione o informazione con indicazione della fonte).
        </p>
      </LegalSection>

      <LegalSection title="7. Documenti collegati">
        <p>Per informazioni complete si rimanda ai seguenti documenti:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <Link href="/privacy" className="text-primary hover:underline font-semibold">
              Privacy Policy
            </Link>{' '}
            — trattamento dati personali (GDPR)
          </li>
          <li>
            <Link href="/cookie" className="text-primary hover:underline font-semibold">
              Cookie Policy
            </Link>{' '}
            — utilizzo cookie e tecnologie simili
          </li>
          <li>
            <Link href="/termini-condizioni" className="text-primary hover:underline font-semibold">
              Termini e condizioni di utilizzo
            </Link>
          </li>
          <li>
            <Link href="/informativa-sanitaria" className="text-primary hover:underline font-semibold">
              Informativa dati sanitari
            </Link>
          </li>
          <li>
            <Link href="/accessibilita" className="text-primary hover:underline font-semibold">
              Dichiarazione di accessibilità
            </Link>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Legge applicabile e foro competente">
        <p>
          Il presente sito è regolato dalla legge italiana. Per qualsiasi controversia relativa
          all&apos;utilizzo del sito web sarà competente il Foro del domicilio o della residenza
          dell&apos;utente consumatore, ove applicabile ai sensi del D.Lgs. 206/2005 (Codice del
          Consumo); in tutti gli altri casi, il Foro di Torino.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
