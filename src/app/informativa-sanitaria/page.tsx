import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/content';
import { createPageMetadata } from '@/lib/seo';
import LegalPageShell from '@/components/legal/LegalPageShell';
import LegalSection from '@/components/legal/LegalSection';
import LegalEntityBlock from '@/components/legal/LegalEntityBlock';

export const metadata: Metadata = createPageMetadata({
  title: `Informativa dati sanitari | ${siteConfig.name}`,
  description: `Informativa sul trattamento dei dati sanitari e socio-assistenziali di ${siteConfig.name} — ${siteConfig.legal.companyNameFull}, ai sensi degli artt. 13-14 GDPR e normativa sanitaria.`,
  path: '/informativa-sanitaria',
  keywords: ['informativa dati sanitari anziani', 'GDPR dati salute', 'privacy residenza anziani'],
  noIndex: false,
});

export default function InformativaSanitariaPage() {
  const { legal, contact, name } = siteConfig;

  return (
    <LegalPageShell
      eyebrow="Informativa"
      title="Informativa sul trattamento dei dati sanitari"
      path="informativa-sanitaria"
    >
      <p className="font-sans text-sm leading-relaxed text-ink-light">
        Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (&ldquo;GDPR&rdquo;), del D.Lgs.
        196/2003 come modificato dal D.Lgs. 101/2018, nonché della normativa sanitaria applicabile
        (incluso il D.Lgs. 101/2018 in materia di dati genetici, biometrici e relativi alla salute),
        {legal.companyNameFull} fornisce la seguente informativa specifica sul trattamento dei{' '}
        <strong className="text-warm-brown">dati relativi alla salute</strong> e ai dati
        socio-assistenziali degli ospiti e, ove necessario, dei familiare/referenti.
      </p>

      <LegalSection title="1. Titolare del trattamento">
        <LegalEntityBlock />
        <p>
          Per richieste relative ai dati sanitari:{' '}
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

      <LegalSection title="2. Ambito di applicazione">
        <p>
          La presente informativa integra la{' '}
          <Link href="/privacy" className="text-primary hover:underline font-semibold">
            Privacy Policy
          </Link>{' '}
          generale e si applica al trattamento dei dati sanitari e socio-assistenziali effettuato da{' '}
          {legal.companyNameFull} nell&apos;ambito dell&apos;accoglienza e dell&apos;assistenza degli ospiti presso{' '}
          {name}.
        </p>
        <p>
          I dati sanitari sono categorie particolari di dati personali ex art. 9 GDPR. Il loro
          trattamento è consentito solo in presenza di una base giuridica specifica, tra cui il
          consenso esplicito, l&apos;esecuzione di obblighi in materia di diritto del lavoro e della
          sicurezza sociale, la tutela di interessi vitali, o — per finalità sanitarie e
          socio-sanitarie — l&apos;esecuzione di obblighi di legge e la prestazione di servizi sanitari o
          socio-sanitari.
        </p>
      </LegalSection>

      <LegalSection title="3. Tipologie di dati sanitari trattati">
        <p>A seconda delle esigenze assistenziali dell&apos;ospite, possono essere trattati:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Stato di salute generale, autonomia e capacità cognitive</li>
          <li>Patologie, allergie, intolleranze alimentari e farmacologiche</li>
          <li>Terapie farmacologiche in corso e schemi di somministrazione</li>
          <li>Referti medici, certificati, documentazione sanitaria fornita all&apos;ingresso</li>
          <li>Diario assistenziale, osservazioni del personale, segnalazioni di eventi</li>
          <li>Contatti del medico curante, specialisti e servizi territoriali (ASL, MMG)</li>
          <li>Dati relativi a cadute, infortuni, accessi al Pronto Soccorso</li>
          <li>Programmi riabilitativi o attività fisica adattata, ove previsti</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Finalità e base giuridica">
        <div className="overflow-x-auto">
          <table className="mt-2 w-full min-w-[480px] border-collapse font-sans text-xs">
            <thead>
              <tr className="border-b border-linen-300 bg-linen-50">
                <th className="p-2 text-left font-semibold text-warm-brown">Finalità</th>
                <th className="p-2 text-left font-semibold text-warm-brown">Base giuridica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-linen-200">
              <tr>
                <td className="p-2">Valutazione dell&apos;idoneità all&apos;accoglienza e definizione del piano assistenziale</td>
                <td className="p-2">Art. 9(2)(h) GDPR — prestazione servizi sanitari/socio-sanitari; art. 6(1)(b) — contratto</td>
              </tr>
              <tr>
                <td className="p-2">Erogazione quotidiana dei servizi di assistenza e vigilanza</td>
                <td className="p-2">Art. 9(2)(h) GDPR; esecuzione contratto di ospitalità</td>
              </tr>
              <tr>
                <td className="p-2">Somministrazione farmaci e gestione terapie (ove previsto dal profilo dell&apos;ospite)</td>
                <td className="p-2">Art. 9(2)(h) GDPR; obblighi di legge e indicazioni mediche</td>
              </tr>
              <tr>
                <td className="p-2">Comunicazione con medici curanti, ASL e servizi territoriali</td>
                <td className="p-2">Art. 9(2)(h) e (i) GDPR — medicina preventiva, tutela sanitaria pubblica</td>
              </tr>
              <tr>
                <td className="p-2">Adempimenti di vigilanza sanitaria e reportistica agli enti competenti</td>
                <td className="p-2">Art. 9(2)(i) GDPR — obblighi di legge</td>
              </tr>
              <tr>
                <td className="p-2">Informazione dei familiare/referenti designati sull&apos;andamento assistenziale</td>
                <td className="p-2">Consenso dell&apos;ospite e/o legittimo interesse, nei limiti autorizzati</td>
              </tr>
              <tr>
                <td className="p-2">Tutela in giudizio e gestione contenziosi</td>
                <td className="p-2">Art. 9(2)(f) GDPR — accertamento, esercizio o difesa di un diritto in sede giudiziaria</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="5. Modalità del trattamento">
        <p>
          I dati sanitari sono trattati con strumenti informatici e cartacei, con logiche strettamente
          correlate alle finalità indicate e con misure di sicurezza rafforzate rispetto ai dati
          comuni, tra cui:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Accesso limitato al personale autorizzato e vincolato al segreto professionale</li>
          <li>Formazione periodica del personale su privacy e riservatezza sanitaria</li>
          <li>Archiviazione cartacea in luoghi non accessibili al pubblico</li>
          <li>Protezione delle credenziali informatiche e backup dei dati</li>
          <li>Minimizzazione: raccolta solo dei dati necessari all&apos;assistenza</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Destinatari">
        <p>I dati sanitari possono essere comunicati, nei limiti strettamente necessari, a:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Personale interno autorizzato (operatori socio-sanitari, coordinamento, amministrazione)</li>
          <li>Medico curante dell&apos;ospite e specialisti coinvolti nel percorso assistenziale</li>
          <li>ASL, servizi territoriali, Pronto Soccorso e strutture sanitarie in caso di urgenza</li>
          <li>Familiari o referenti espressamente autorizzati dall&apos;ospite</li>
          <li>Consulenti professionali (legale, commercialista) vincolati al segreto professionale</li>
          <li>Autorità giudiziaria o amministrativa, ove previsto dalla legge</li>
        </ul>
        <p>
          I dati sanitari <strong>non sono ceduti a terzi per finalità di marketing</strong> né
          utilizzati per profilazione commerciale.
        </p>
      </LegalSection>

      <LegalSection title="7. Periodo di conservazione">
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <strong className="text-warm-brown">Durata del rapporto:</strong> per tutta la permanenza
            dell&apos;ospite in struttura
          </li>
          <li>
            <strong className="text-warm-brown">Post-cessazione:</strong> conservazione per i termini
            previsti dalla normativa sanitaria, civilistica e fiscale (generalmente 10 anni per
            documentazione amministrativa e assistenziale, salvo termini diversi imposti dalla legge)
          </li>
          <li>
            <strong className="text-warm-brown">Documentazione clinica:</strong> secondo i tempi
            previsti dalla normativa sanitaria regionale e nazionale applicabile
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Diritti dell'interessato">
        <p>
          L&apos;ospite (o, ove applicabile, il titolare della responsabilità genitoriale, il tutore o
          l&apos;amministratore di sostegno) ha diritto di:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Accedere ai propri dati sanitari trattati</li>
          <li>Richiedere rettifica di dati inesatti o incompleti</li>
          <li>Richiedere la limitazione del trattamento nei casi previsti dall&apos;art. 18 GDPR</li>
          <li>Opporsi al trattamento basato su legittimo interesse, ove applicabile</li>
          <li>Revocare il consenso, ove il trattamento si basi su consenso, senza pregiudicare la liceità precedente</li>
          <li>Proporre reclamo al Garante per la protezione dei dati personali</li>
        </ul>
        <p>
          Il diritto alla cancellazione (art. 17 GDPR) può essere limitato quando il trattamento è
          necessario per adempiere obblighi di legge o per finalità di medicina preventiva, diagnosi e
          assistenza sanitaria, ai sensi dell&apos;art. 17(3)(c) GDPR.
        </p>
        <p>
          Per esercitare i diritti:{' '}
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

      <LegalSection title="9. Trasferimenti extra-UE">
        <p>
          I dati sanitari sono trattati prevalentemente all&apos;interno dello Spazio Economico Europeo.
          Eventuali trasferimenti verso Paesi terzi avvengono solo in presenza di garanzie adeguate
          ex art. 46 GDPR e nel rispetto della normativa sanitaria applicabile.
        </p>
      </LegalSection>

      <LegalSection title="10. Documenti collegati">
        <p>
          Per informazioni generali sul trattamento dati:{' '}
          <Link href="/privacy" className="text-primary hover:underline font-semibold">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
