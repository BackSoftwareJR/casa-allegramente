import { Link } from 'react-router-dom';
import { Phone, Home } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { notFound, siteConfig } from '@/data/content';
import { telHref } from '@/lib/utils';
import { ButtonLink } from '@/components/ui/Button';

export function NotFoundPage() {
  return (
    <>
      <PageMeta title={`${notFound.title} — Casa Allegramente`} description={notFound.text} />
      <div className="section-spacing flex min-h-[70vh] items-center bg-gradient-to-b from-cream to-linen pt-28">
        <div className="container-site max-w-prose text-center">
          <p className="font-display text-[7rem] font-bold leading-none text-cedar/10 md:text-[9rem]">404</p>
          <h1 className="heading-display -mt-4 text-display-md md:text-display-lg">{notFound.title}</h1>
          <div className="gold-divider mt-6" />
          <p className="mt-6 font-sans text-lg leading-relaxed text-charcoal">{notFound.text}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary inline-flex">
              <Home size={16} />
              {notFound.ctaHome}
            </Link>
            <ButtonLink href={telHref(siteConfig.contact.phoneRaw)} variant="secondary">
              <Phone size={16} />
              {notFound.ctaPhone}
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
