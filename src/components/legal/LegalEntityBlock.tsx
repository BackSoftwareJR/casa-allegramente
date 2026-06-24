import { siteConfig } from '@/data/content';

export default function LegalEntityBlock() {
  const { legal, contact, piva } = siteConfig;

  return (
    <dl className="rounded-2xl border border-linen-300 bg-linen-50 p-5 font-sans text-sm text-ink-light">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-warm-brown">Ragione sociale</dt>
          <dd>{legal.companyName}</dd>
        </div>
        <div>
          <dt className="font-semibold text-warm-brown">Partita IVA</dt>
          <dd>{piva}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="font-semibold text-warm-brown">Sede legale</dt>
          <dd>{legal.registeredOffice.full}</dd>
        </div>
        <div>
          <dt className="font-semibold text-warm-brown">Legale rappresentante</dt>
          <dd>{legal.legalRepresentativeRegistry}</dd>
        </div>
        <div>
          <dt className="font-semibold text-warm-brown">PEC</dt>
          <dd>
            <a href={`mailto:${legal.pec}`} className="text-primary hover:underline">
              {legal.pec}
            </a>
          </dd>
        </div>
        {legal.rea ? (
          <div>
            <dt className="font-semibold text-warm-brown">REA</dt>
            <dd>{legal.rea}</dd>
          </div>
        ) : null}
        <div>
          <dt className="font-semibold text-warm-brown">Email</dt>
          <dd>
            <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
              {contact.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-warm-brown">Telefono</dt>
          <dd>
            <a href={`tel:${contact.phoneRaw}`} className="text-primary hover:underline">
              {contact.phone}
            </a>
          </dd>
        </div>
      </div>
    </dl>
  );
}
