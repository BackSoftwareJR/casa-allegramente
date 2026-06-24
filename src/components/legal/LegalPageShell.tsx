import type { ReactNode } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import { BreadcrumbListSchema } from '@/components/JsonLd';
import { siteConfig, legalLinks } from '@/data/content';

interface LegalPageShellProps {
  eyebrow: string;
  title: string;
  children: ReactNode;
  path?: string;
}

export default function LegalPageShell({ eyebrow, title, children, path }: LegalPageShellProps) {
  const pagePath = path ?? title.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', path: '/' },
          { name: title, path: `/${pagePath}` },
        ]}
      />
      <div className="bg-linen-100 pt-24">
        <div className="container-site pb-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: title },
            ]}
          />
        </div>
      </div>

      <article className="section-spacing bg-transparent">
        <div className="container-site">
          <div className="mx-auto max-w-3xl rounded-3xl border border-linen-200/80 bg-white p-8 shadow-warm-md md:p-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </p>
            <h1
              className="mt-3 font-display font-bold text-warm-brown"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              {title}
            </h1>
            <div className="gold-line mt-5" />

            <div className="mt-8">{children}</div>

            <footer className="mt-12 border-t border-linen-200/80 pt-6">
              <p className="font-sans text-xs text-ink-muted">
                Ultimo aggiornamento: {siteConfig.legal.lastLegalUpdate} · {siteConfig.legal.companyNameFull} — P.IVA{' '}
                {siteConfig.piva}
              </p>
              <nav aria-label="Altri documenti legali" className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans text-xs text-primary/80 transition-colors hover:text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
