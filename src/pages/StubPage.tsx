import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/data/content';
import { telHref } from '@/lib/utils';
import { ButtonLink } from '@/components/ui/Button';

type StubPageProps = {
  title: string;
  h1: string;
  message: string;
};

export function StubPage({ title, h1, message }: StubPageProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="section-spacing min-h-[60vh] bg-cream pt-28">
      <div className="container-site max-w-prose">
        <p className="eyebrow mb-3">Casa Allegramente</p>
        <h1 className="heading-display text-display-md">{h1}</h1>
        <div className="gold-divider mx-0 mt-4" />
        <p className="mt-6 font-sans leading-relaxed text-charcoal">{message}</p>
        <p className="mt-4 font-sans text-sm text-muted">
          Pagina in costruzione — contenuti da doc 06, implementazione Agent 2.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={telHref(siteConfig.contact.phoneRaw)} variant="primary">
            <Phone size={16} />
            Chiamaci: {siteConfig.contact.phone}
          </ButtonLink>
          <Link to="/" className="btn-secondary inline-flex items-center justify-center">
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}
