import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { siteConfig, contactStrip } from '@/data/content';
import { cn, mailtoHref, telHref, whatsappHref, hasPhone, hasWhatsapp, hasEmail } from '@/lib/utils';
import { ButtonLink } from './Button';

type ContactBlockProps = {
  variant?: 'inline' | 'card';
  showDirections?: boolean;
  className?: string;
};

export function ContactBlock({ variant = 'card', showDirections = true, className }: ContactBlockProps) {
  const { contact } = siteConfig;

  const items = [
    hasPhone(contact.phoneRaw) && {
      icon: Phone,
      label: contact.phone,
      href: telHref(contact.phoneRaw),
      aria: `Chiama ${contact.phone}`,
    },
    hasWhatsapp(contact.whatsapp) && {
      icon: MessageCircle,
      label: contactStrip.whatsappLabel,
      href: whatsappHref(contact.whatsapp, 'Buongiorno, vorrei informazioni su Casa Allegramente'),
      aria: 'Scrivi su WhatsApp',
      external: true,
    },
    hasEmail(contact.email) && {
      icon: Mail,
      label: contact.email,
      href: mailtoHref(contact.email),
      aria: `Invia email a ${contact.email}`,
    },
    {
      icon: MapPin,
      label: contact.address.full,
      href: contact.maps.google,
      aria: 'Apri indicazioni in Google Maps',
      external: true,
    },
    {
      icon: Clock,
      label: contact.hours,
      href: undefined,
      aria: undefined,
    },
  ].filter(Boolean) as Array<{
    icon: typeof Phone;
    label: string;
    href?: string;
    aria?: string;
    external?: boolean;
  }>;

  if (variant === 'inline') {
    return (
      <ul className={cn('flex flex-col gap-3', className)}>
        {items.map(({ icon: Icon, label, href, aria, external }) => (
          <li key={label}>
            {href ? (
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={aria}
                className="group inline-flex items-start gap-3 font-sans text-charcoal transition-colors hover:text-terracotta"
              >
                <Icon size={18} className="mt-0.5 shrink-0 text-sage" />
                <span>{label}</span>
              </a>
            ) : (
              <span className="inline-flex items-start gap-3 font-sans text-charcoal">
                <Icon size={18} className="mt-0.5 shrink-0 text-sage" />
                {label}
              </span>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={cn('rounded-2xl bg-linen p-6 md:p-8', className)}>
      <ul className="space-y-4">
        {items.map(({ icon: Icon, label, href, aria, external }) => (
          <li key={label}>
            {href ? (
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={aria}
                className="group flex items-start gap-3 font-sans text-charcoal transition-colors hover:text-terracotta"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-mist text-sage">
                  <Icon size={18} />
                </span>
                <span className="pt-1.5 leading-snug">{label}</span>
              </a>
            ) : (
              <div className="flex items-start gap-3 font-sans text-charcoal">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-mist text-sage">
                  <Icon size={18} />
                </span>
                <span className="pt-1.5 leading-snug">{label}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
      {showDirections && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {hasPhone(contact.phoneRaw) ? (
            <ButtonLink href={telHref(contact.phoneRaw)} variant="primary">
              <Phone size={16} />
              {contactStrip.ctaPrimary}
            </ButtonLink>
          ) : (
            <ButtonLink href={contactStrip.ctaSecondaryHref} variant="primary">
              <MapPin size={16} />
              {contactStrip.ctaPrimary}
            </ButtonLink>
          )}
          <ButtonLink href={contactStrip.ctaSecondaryHref} variant="secondary">
            {contactStrip.ctaSecondary}
          </ButtonLink>
        </div>
      )}
    </div>
  );
}
