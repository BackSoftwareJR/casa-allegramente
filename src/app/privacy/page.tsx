import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/content';
import { createPageMetadata } from '@/lib/seo';
import LegalPageShell from '@/components/legal/LegalPageShell';
import LegalSection from '@/components/legal/LegalSection';
import LegalEntityBlock from '@/components/legal/LegalEntityBlock';

export const metadata: Metadata = createPageMetadata({
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Informativa privacy di ${siteConfig.name} — SAEC S.r.l., P.IVA ${siteConfig.piva}. Trattamento dati personali ai sensi del Reg. UE 2016/679 (GDPR).`,
  path: '/privacy',
  keywords: [
    'privacy policy casa famiglia anziani',
    'informativa privacy AllegraMente',
    'SAEC SRL GDPR',
    'trattamento dati residenza anziani',
  ],
  noIndex: false,
});

export default function PrivacyPage() {
  const { legal, contact } = siteConfig;

  return (
    <LegalPageShell
      eyebrow="Informativa"
      title="Privacy Policy"
      path="privacy"
    >
      <p className="font-sans text-sm leading-relaxed text-ink-light">
        Ai sensi del Regolamento (UE) 2016/679 (&ldquo;GDPR&rdquo;) e del D.Lgs. 196/2003 come
        modificato dal D.Lgs. 101/2018 (&ldquo;Codice Privacy&rdquo;), {legal.companyNameFull}{' '}
        fornisce la seguente informativa sul trattamento dei dati personali effettuato tramite il
        sito web e nell&apos;ambito del rapporto con ospiti e familiari.
      </p>

      <LegalSection title="1. Titolare del trattamento">
        <LegalEntityBlock />
        <p>
          Per qualsiasi richiesta relativa alla privacy è possibile contattare il Titolare all&apos;indirizzo{' '}
          <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
            {contact.email}
          </a>{' '}
          o via PEC{' '}
          <a href={`mailto:${legal.pec}`} className="text-primary hover:underline">
            {legal.pec}
          </a>
          .
        </p>
        <p>
          Il Titolare <strong>non ha nominato un Responsabile della Protezione dei Dati (DPO)</strong>,
          in quanto non ricorrono le condizioni di obbligatorietà di cui all&apos;art. 37 GDPR per
          l&apos;attività svolta (struttura residenziale di dimensioni contenute, trattamento non su
          larga scala).
        </p>
      </LegalSection>

      <LegalSection title="2. Tipologie di dati trattati">
        <p>A seconda del rapporto instaurato, possono essere trattati i seguenti dati:</p>

        <div className="space-y-4">
          <div className="rounded-2xl border border-linen-300 bg-linen-50 p-4">
            <h3 className="font-sans font-semibold text-warm-brown">A) Navigazione sul sito web</h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Dati di navigazione (pagine visitate, durata, referrer, dispositivo/browser, data e ora)</li>
              <li>Indirizzo IP (anonimizzato tramite Google Analytics 4)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-linen-300 bg-linen-50 p-4">
            <h3 className="font-sans font-semibold text-warm-brown">B) Moduli di contatto e richieste informative</h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Nome e cognome</li>
              <li>Numero di telefono</li>
              <li>Indirizzo e-mail (se fornito)</li>
              <li>Contenuto del messaggio</li>
              <li>Data e ora della richiesta</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-linen-300 bg-linen-50 p-4">
            <h3 className="font-sans font-semibold text-warm-brown">C) Rapporto contrattuale con ospiti e familiari</h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Dati anagrafici e di contatto</li>
              <li>Dati identificativi (documento, codice fiscale)</li>
              <li>Dati bancari e fiscali per fatturazione</li>
              <li>
                <strong className="text-warm-brown">Dati relativi alla salute</strong> — trattati
                separatamente e descritti nella{' '}
                <Link href="/informativa-sanitaria" className="text-primary hover:underline">
                  Informativa dati sanitari
                </Link>
              </li>
              <li>Dati socio-assistenziali necessari all&apos;accoglienza</li>
            </ul>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="3. Finalità e base giuridica del trattamento">
        <div className="overflow-x-auto">
          <table className="mt-2 w-full min-w-[480px] border-collapse font-sans text-xs">
            <thead>
              <tr className="border-b border-linen-300 bg-linen-50">
                <th className="p-2 text-left font-semibold text-warm-brown">Finalità</th>
                <th className="p-2 text-left font-semibold text-warm-brown">Base giuridica</th>
                <th className="p-2 text-left font-semibold text-warm-brown">Conservazione</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-linen-200">
              <tr>
                <td className="p-2">Risposta a richieste di informazione via sito, telefono, e-mail o WhatsApp</td>
                <td className="p-2">Art. 6(1)(b) GDPR — misure precontrattuali</td>
                <td className="p-2">24 mesi dalla richiesta</td>
              </tr>
              <tr>
                <td className="p-2">Gestione contratto di ospitalità e rapporto con familiari</td>
                <td className="p-2">Art. 6(1)(b) GDPR — esecuzione contratto</td>
                <td className="p-2">10 anni dalla cessazione (obblighi civilistici e fiscali)</td>
              </tr>
              <tr>
                <td className="p-2">Adempimenti legali, fiscali, sanitari e di vigilanza</td>
                <td className="p-2">Art. 6(1)(c) GDPR — obbligo di legge</td>
                <td className="p-2">Secondo termini di legge</td>
              </tr>
              <tr>
                <td className="p-2">Statistiche aggregate sul traffico web (Google Analytics 4)</td>
                <td className="p-2">Art. 6(1)(f) GDPR — legittimo interesse (misurazione statistica aggregata, anonimizzazione IP)</td>
                <td className="p-2">Secondo policy Google / max 14 mesi (configurazione GA4)</td>
              </tr>
              <tr>
                <td className="p-2">Tutela in giudizio</td>
                <td className="p-2">Art. 6(1)(f) GDPR — legittimo interesse</td>
                <td className="p-2">Fino a prescrizione dei diritti</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          <strong className="text-warm-brown">Non effettuiamo</strong> profilazione automatizzata,
          decisioni automatizzate ex art. 22 GDPR, né cessione dei dati a terzi per finalità di
          marketing indipendente.
        </p>
      </LegalSection>

      <LegalSection title="4. Natura del conferimento">
        <p>
          Il conferimento dei dati contrattuali è <strong>necessario</strong> per la conclusione e
          l&apos;esecuzione del contratto di ospitalità. Il mancato conferimento impedisce
          l&apos;accoglienza.
        </p>
        <p>
          Il conferimento dei dati tramite moduli di contatto, telefono, e-mail o WhatsApp è{' '}
          <strong>facoltativo</strong>, ma necessario per ricevere riscontro alle richieste
          informative. L&apos;interessato può opporsi al trattamento analitico tramite Google
          Analytics esercitando il diritto di opposizione (art. 21 GDPR) o disabilitando i cookie
          dal browser, come descritto nella{' '}
          <Link href="/cookie" className="text-primary hover:underline">
            Cookie Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="5. Destinatari e categorie di destinatari">
        <p>I dati possono essere comunicati a:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Personale autorizzato di {legal.companyNameFull} (addetti alla struttura, amministrazione)</li>
          <li>Consulenti professionali (commercialista, legale, medico curante struttura) nei limiti necessari</li>
          <li>
            Fornitori tecnologici nominati <strong>Responsabili del trattamento</strong> ex art. 28
            GDPR (hosting, posta elettronica, eventuale CRM)
          </li>
          <li>Google LLC (Google Analytics 4) — Responsabile del trattamento per servizi di analisi web aggregata</li>
          <li>Autorità sanitarie, fiscali e giudiziarie, ove previsto dalla legge</li>
          <li>Familiari o referenti designati dall&apos;ospite, nei limiti autorizzati</li>
        </ul>
        <p>
          L&apos;elenco aggiornato dei Responsabili del trattamento è disponibile su richiesta al
          Titolare.
        </p>
      </LegalSection>

      <LegalSection title="6. Trasferimento dati extra-UE">
        <p>
          I dati sono trattati prevalentemente all&apos;interno dello Spazio Economico Europeo. In
          caso di utilizzo di Google Analytics 4, i dati di navigazione possono essere trasferiti
          negli Stati Uniti sulla base delle garanzie previste dal GDPR (Decisione di adeguatezza
          UE-US Data Privacy Framework e/o Clausole Contrattuali Standard adottate da Google).
        </p>
      </LegalSection>

      <LegalSection title="7. Processi automatizzati e profilazione">
        <p>
          Il Titolare <strong>non effettua</strong> decisioni basate unicamente su trattamento
          automatizzato, inclusa la profilazione, che producano effetti giuridici sull&apos;interessato
          o incidano in modo analogo significativamente sulla sua persona (art. 22 GDPR).
        </p>
        <p>
          Google Analytics 4 produce statistiche aggregate sul traffico web e non è utilizzato per
          profilare singoli visitatori a fini commerciali o pubblicitari.
        </p>
      </LegalSection>

      <LegalSection title="8. Misure di sicurezza">
        <p>
          Il Titolare adotta misure tecniche e organizzative adeguate per proteggere i dati personali
          da accessi non autorizzati, perdita, distruzione o alterazione, tra cui: accesso riservato
          al personale autorizzato, credenziali protette, backup periodici, aggiornamento software e
          formazione del personale sul trattamento dati e riservatezza sanitaria.
        </p>
      </LegalSection>

      <LegalSection title="9. Diritti dell'interessato">
        <p>In qualità di interessato, hai diritto di:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li><strong>Accesso</strong> (art. 15 GDPR) — ottenere conferma e copia dei dati</li>
          <li><strong>Rettifica</strong> (art. 16 GDPR) — correggere dati inesatti</li>
          <li><strong>Cancellazione</strong> (art. 17 GDPR) — nei casi previsti dalla legge</li>
          <li><strong>Limitazione</strong> (art. 18 GDPR) — limitare il trattamento in casi specifici</li>
          <li><strong>Portabilità</strong> (art. 20 GDPR) — per dati forniti con consenso o contratto, in formato strutturato</li>
          <li><strong>Opposizione</strong> (art. 21 GDPR) — al trattamento basato su legittimo interesse</li>
          <li><strong>Revoca del consenso</strong> — in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente</li>
        </ul>
        <p>
          Per esercitare i diritti, inviare richiesta a{' '}
          <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
            {contact.email}
          </a>{' '}
          o PEC{' '}
          <a href={`mailto:${legal.pec}`} className="text-primary hover:underline">
            {legal.pec}
          </a>
          , allegando copia di un documento d&apos;identità. Risponderemo entro 30 giorni (prorogabili
          di 60 in casi complessi, con comunicazione motivata).
        </p>
        <p>
          Hai inoltre diritto di proporre reclamo al{' '}
          <a
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Garante per la protezione dei dati personali
          </a>{' '}
          (www.garanteprivacy.it — Piazza Venezia 11, 00187 Roma).
        </p>
      </LegalSection>

      <LegalSection title="10. Minori">
        <p>
          Il sito e i servizi di {siteConfig.name} sono destinati a un pubblico adulto (familiari e
          referenti di anziani). Non raccogliamo consapevolmente dati di minori di 14 anni tramite il
          sito. In caso di trattamento involontario, i dati saranno cancellati tempestivamente su
          segnalazione.
        </p>
      </LegalSection>

      <LegalSection title="11. Cookie e tecnologie simili">
        <p>
          Per informazioni dettagliate sui cookie utilizzati, sulle categorie, sulla base giuridica
          e sulle modalità di disattivazione, consulta la{' '}
          <Link href="/cookie" className="text-primary hover:underline font-semibold">
            Cookie Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="12. Diffusione dei dati">
        <p>
          I dati personali <strong>non sono diffusi</strong> (art. 4(3) GDPR), ovvero non sono
          resi accessibili a soggetti indeterminati. La comunicazione avviene solo ai destinatari
          indicati nella sezione 5, nei limiti strettamente necessari alle finalità del trattamento.
        </p>
      </LegalSection>

      <LegalSection title="13. Contatti per la privacy">
        <p>
          Per qualsiasi richiesta relativa al trattamento dei dati personali, all&apos;esercizio dei
          diritti o per informazioni su questa informativa:
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
          <li>Indirizzo: {legal.registeredOffice.full}</li>
        </ul>
      </LegalSection>

      <LegalSection title="14. Modifiche all'informativa">
        <p>
          Il Titolare si riserva di aggiornare la presente informativa per adeguarla a modifiche
          normative o organizzative. La data di ultimo aggiornamento è indicata in calce al
          documento. Si consiglia di consultare periodicamente questa pagina.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
