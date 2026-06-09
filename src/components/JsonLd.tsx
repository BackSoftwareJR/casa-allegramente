import { siteConfig } from '@/data/content';

export function JsonLd() {
  const { contact } = siteConfig;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'NursingHome'],
    name: siteConfig.nameFull,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.province,
      postalCode: contact.address.cap,
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contact.geo.lat,
      longitude: contact.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Canavese, Piemonte',
    },
  };

  if (contact.phoneRaw) {
    schema.telephone = contact.phone;
  }
  if (contact.email && !contact.email.startsWith('[')) {
    schema.email = contact.email;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
