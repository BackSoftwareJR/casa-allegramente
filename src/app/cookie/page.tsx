import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/content';
import { createPageMetadata } from '@/lib/seo';
import LegalPageShell from '@/components/legal/LegalPageShell';
import LegalSection from '@/components/legal/LegalSection';
import LegalEntityBlock from '@/components/legal/LegalEntityBlock';

export const metadata: Metadata = createPageMetadata({
  title: `Cookie Policy | ${siteConfig.name}`,
  description: `Cookie policy del sito ${siteConfig.name} — ${siteConfig.legal.companyNameFull}. Cookie tecnici e Google Analytics 4, categorie, durata e modalità di disattivazione.`,
  path: '/cookie',
  keywords: [
    'cookie policy Casa Allegramente',
    'Google Analytics 4 residenza anziani',
    'informativa cookie ePrivacy',
    'SAEC SRL cookie',
  ],
  noIndex: false,
});

const cookieTable = [
  {
    name: '_ga',
    type: 'Analitico (terza parte)',
    purpose:
      'Google Analytics 4 — distingue gli utenti per statistiche aggregate sul traffico (pagine visitate, sessioni, provenienza approssimativa)',
    duration: '2 anni',
    provider: 'Google LLC',
  },
  {
    name: '_ga_*',
    type: 'Analitico (terza parte)',
    purpose: 'Google Analytics 4 — mantiene lo stato della sessione di misurazione',
    duration: '2 anni',
    provider: 'Google LLC',
  },
] as const;

export default function CookiePage() {
  const { legal, contact } = siteConfig;

  return (
    <LegalPageShell eyebrow="Informativa" title="Cookie Policy" path="cookie">
      <p className="font-sans text-sm leading-relaxed text-ink-light">
        Ai sensi del Regolamento (UE) 2016/679 (&ldquo;GDPR&rdquo;), del D.Lgs. 196/2003 come
        modificato dal D.Lgs. 101/2018, della Direttiva 2002/58/CE (ePrivacy) e delle Linee guida
        del Garante per la protezione dei dati personali italiano su cookie e altri strumenti di
        tracciamento (aggiornate al 2024-2026), {legal.companyNameFull} fornisce le seguenti
        informazioni sull&apos;utilizzo di cookie e tecnologie simili sul sito {siteConfig.url}.
      </p>

      <LegalSection title="1. Titolare del trattamento">
        <LegalEntityBlock />
        <p>
          Per richieste relative ai cookie e al trattamento dati connesso:{' '}
          <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
            {contact.email}
          </a>{' '}
          o PEC{' '}
          <a href={`mailto:${legal.pec}`} className="text-primary hover:underline">
            {legal.pec}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Cosa sono i cookie">
        <p>
          I cookie sono piccoli file di testo che i siti web inviano al dispositivo dell&apos;utente
          (computer, tablet, smartphone), dove vengono memorizzati per essere ritrasmessi alle visite
          successive. Svolgono funzioni diverse: consentire la navigazione, ricordare preferenze,
          raccogliere statistiche aggregate sul traffico.
        </p>
        <p>
          Per &ldquo;cookie&rdquo; si intendono anche tecnologie analoghe quando utilizzate per
          finalità simili: local storage, session storage, pixel di tracciamento, identificatori SDK
          e fingerprinting, ove applicabile.
        </p>
        <p>
          I cookie possono essere <strong className="text-warm-brown">di prima parte</strong>{' '}
          (impostati dal sito visitato) o <strong className="text-warm-brown">di terze parti</strong>{' '}
          (impostati da domini esterni, come i servizi di analisi).
        </p>
      </LegalSection>

      <LegalSection title="3. Tipologie di cookie utilizzati su questo sito">
        <div className="rounded-2xl border border-linen-300 bg-linen-50 p-5">
          <h3 className="font-sans font-semibold text-warm-brown">Cookie tecnici / necessari</h3>
          <p className="mt-2">
            Sono indispensabili al corretto funzionamento del sito e alla fruizione dei contenuti.
            <strong> Non richiedono consenso</strong> ai sensi della normativa vigente (Provvedimento
            Garante 8 maggio 2014 e Linee guida cookie 2021). Includono cookie di sessione strettamente
            necessari alla navigazione e alla sicurezza.
          </p>
          <p className="mt-2">
            Al momento il sito <strong>non utilizza cookie tecnici persistenti di prima parte</strong>{' '}
            oltre a quelli eventualmente generati dal framework di sviluppo durante la sessione di
            navigazione.
          </p>
        </div>

        <div className="rounded-2xl border border-linen-300 bg-linen-50 p-5 mt-4">
          <h3 className="font-sans font-semibold text-warm-brown">Cookie analitici</h3>
          <p className="mt-2">
            Utilizziamo <strong>Google Analytics 4</strong> (ID misurazione:{' '}
            <code className="rounded bg-linen-200 px-1.5 py-0.5 text-xs">G-PPG322967R</code>) per
            raccogliere statistiche aggregate sul traffico web: pagine visitate, durata delle sessioni,
            provenienza geografica approssimativa, tipo di dispositivo e browser. I dati sono
            trattati in forma aggregata; l&apos;indirizzo IP è anonimizzato mediante configurazione
            tecnica (<code className="rounded bg-linen-200 px-1 text-xs">anonymize_ip</code>).
          </p>
          <p className="mt-2">
            Google Analytics 4 viene caricato al primo accesso al sito per consentire la misurazione
            statistica del traffico. Non utilizziamo funzionalità di profilazione pubblicitaria,
            remarketing o condivisione dei dati con altri prodotti Google per finalità di marketing.
          </p>
        </div>

        <div className="rounded-2xl border border-linen-300 bg-linen-50 p-5 mt-4">
          <h3 className="font-sans font-semibold text-warm-brown">Cookie di profilazione e marketing</h3>
          <p className="mt-2">
            Questo sito <strong>non utilizza cookie di profilazione</strong>, remarketing, pixel
            pubblicitari (Meta/Facebook, Google Ads), cookie di affiliazione né strumenti di
            tracciamento comportamentale a fini commerciali o pubblicitari.
          </p>
        </div>
      </LegalSection>

      <LegalSection title="4. Elenco cookie">
        <div className="overflow-x-auto">
          <table className="mt-2 w-full min-w-[560px] border-collapse font-sans text-xs">
            <thead>
              <tr className="border-b border-linen-300 bg-linen-50">
                <th className="p-2 text-left font-semibold text-warm-brown">Nome</th>
                <th className="p-2 text-left font-semibold text-warm-brown">Tipologia</th>
                <th className="p-2 text-left font-semibold text-warm-brown">Finalità</th>
                <th className="p-2 text-left font-semibold text-warm-brown">Durata</th>
                <th className="p-2 text-left font-semibold text-warm-brown">Fornitore</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-linen-200">
              {cookieTable.map((row) => (
                <tr key={row.name}>
                  <td className="p-2 font-mono">{row.name}</td>
                  <td className="p-2">{row.type}</td>
                  <td className="p-2">{row.purpose}</td>
                  <td className="p-2">{row.duration}</td>
                  <td className="p-2">{row.provider}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-ink-muted">
          La durata indicata è quella massima prevista da Google; i cookie possono essere cancellati
          manualmente dall&apos;utente in qualsiasi momento dalle impostazioni del browser.
        </p>
      </LegalSection>

      <LegalSection title="5. Base giuridica del trattamento">
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong className="text-warm-brown">Cookie tecnici:</strong> esenzione dal consenso per
            necessità tecnica e legittimo interesse del Titolare a garantire il funzionamento e la
            sicurezza del sito (art. 6(1)(f) GDPR, ove applicabile).
          </li>
          <li>
            <strong className="text-warm-brown">Cookie analitici (Google Analytics 4):</strong>{' '}
            legittimo interesse del Titolare (art. 6(1)(f) GDPR) alla misurazione statistica
            aggregata del traffico, al miglioramento dell&apos;esperienza utente e all&apos;ottimizzazione
            dei contenuti informativi, con misure di minimizzazione (anonimizzazione IP, assenza di
            profilazione, dati aggregati). L&apos;interessato può opporsi al trattamento ai sensi
            dell&apos;art. 21 GDPR.
          </li>
        </ul>
        <p className="mt-3">
          Per informazioni complete sul trattamento dei dati personali derivanti dall&apos;uso dei
          cookie, consulta la{' '}
          <Link href="/privacy" className="text-primary hover:underline font-semibold">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Come disabilitare i cookie">
        <p>
          Puoi gestire, bloccare o eliminare i cookie dalle impostazioni del browser. Di seguito i
          link alle guide ufficiali dei browser più diffusi:
        </p>
        <ul className="ml-5 mt-2 list-disc space-y-1">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/it/kb/gestione-dei-cookie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/it-it/guide/safari/sfri11471"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Apple Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p className="mt-3">
          Per disabilitare Google Analytics su tutti i siti web:{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Componente aggiuntivo browser Google Analytics Opt-out
          </a>
          .
        </p>
        <p className="mt-3">
          <strong className="text-warm-brown">Attenzione:</strong> la disabilitazione dei cookie
          tecnici o analitici può limitare alcune funzionalità del sito o impedire la raccolta di
          statistiche aggregate. La navigazione dei contenuti informativi rimane comunque possibile.
        </p>
        <p>
          Per opporsi specificamente al trattamento analitico tramite Google Analytics, puoi
          contattare il Titolare a{' '}
          <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
            {contact.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Trasferimenti extra-UE">
        <p>
          Google LLC (fornitore di Google Analytics 4) può trattare dati anche negli Stati Uniti.
          Il trasferimento avviene con garanzie adeguate previste dal GDPR, tra cui la Decisione di
          adeguatezza UE-US Data Privacy Framework (2023) e/o le Clausole Contrattuali Standard
          (SCC) adottate da Google. Per maggiori informazioni:{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Privacy Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="8. Diritti dell'interessato">
        <p>
          In relazione ai dati personali trattati tramite cookie, l&apos;interessato può esercitare
          i diritti previsti dal GDPR (accesso, rettifica, cancellazione, limitazione, opposizione,
          reclamo al Garante). Per l&apos;esercizio dei diritti e per informazioni dettagliate,
          consulta la sezione dedicata nella{' '}
          <Link href="/privacy" className="text-primary hover:underline font-semibold">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Modifiche alla Cookie Policy">
        <p>
          Il Titolare può aggiornare la presente Cookie Policy per adeguarla a modifiche normative,
          tecnologiche o organizzative. La data di ultimo aggiornamento è indicata in calce al
          documento. Si consiglia di consultare periodicamente questa pagina.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
