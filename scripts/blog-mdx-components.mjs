import React from 'react';

function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const WHATSAPP_BLOG =
  'https://wa.me/393519581235?text=Buongiorno%2C%20ho%20letto%20il%20vostro%20blog%20e%20vorrei%20informazioni%20su%20Residence%20V.G';

export function BlogCTA({
  title = 'Hai domande sulla nostra struttura?',
  description = 'Siamo a Cabiate (CO), residenza per anziani autosufficienti con massimo 10 ospiti. Prenota una visita gratuita e senza impegno.',
  variant = 'default',
}) {
  return React.createElement(
    'aside',
    { className: 'my-10 rounded-2xl bg-forest p-6 text-white md:p-8 not-prose' },
    React.createElement('h3', { className: 'font-display text-xl font-semibold' }, title),
    React.createElement(
      'p',
      { className: 'mt-2 font-sans text-sm leading-relaxed text-white/70' },
      description,
    ),
    React.createElement(
      'div',
      { className: 'mt-5 flex flex-wrap gap-3' },
      React.createElement(
        'a',
        { href: 'tel:+393519581235', className: 'btn-primary' },
        '+39 351 958 1235',
      ),
      variant === 'whatsapp'
        ? React.createElement(
            'a',
            {
              href: WHATSAPP_BLOG,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'btn-ghost-white',
            },
            'Scrivici su WhatsApp',
          )
        : React.createElement(
            'a',
            { href: '/#contatti', className: 'btn-ghost-white' },
            'Prenota una visita',
          ),
    ),
  );
}

export function BlogImage({ src, alt, caption }) {
  return React.createElement(
    'figure',
    { className: 'my-8 not-prose' },
    React.createElement(
      'div',
      { className: 'relative aspect-[16/10] overflow-hidden rounded-2xl shadow-warm-md' },
      React.createElement('img', {
        src,
        alt,
        className: 'h-full w-full object-cover',
        loading: 'lazy',
      }),
    ),
    caption
      ? React.createElement(
          'figcaption',
          { className: 'mt-2 text-center font-sans text-sm text-ink-muted' },
          caption,
        )
      : null,
  );
}

export const buildMdxComponents = {
  BlogCTA,
  BlogImage,
  h2: ({ children }) =>
    React.createElement(
      'h2',
      {
        id: slugify(typeof children === 'string' ? children : String(children)),
        className: 'scroll-mt-28 mt-10 font-display text-2xl font-semibold text-forest first:mt-0',
      },
      children,
    ),
  h3: ({ children }) =>
    React.createElement(
      'h3',
      { className: 'mt-6 font-display text-xl font-semibold text-forest' },
      children,
    ),
  p: ({ children }) =>
    React.createElement(
      'p',
      { className: 'font-sans text-base leading-[1.8] text-ink-light' },
      children,
    ),
  ul: ({ children }) =>
    React.createElement(
      'ul',
      { className: 'my-4 list-disc space-y-2 pl-5 font-sans text-base leading-[1.8] text-ink-light' },
      children,
    ),
  ol: ({ children }) =>
    React.createElement(
      'ol',
      { className: 'my-4 list-decimal space-y-2 pl-5 font-sans text-base leading-[1.8] text-ink-light' },
      children,
    ),
  li: ({ children }) => React.createElement('li', null, children),
  strong: ({ children }) =>
    React.createElement('strong', { className: 'font-semibold text-ink' }, children),
  a: ({ href, children }) => {
    const isInternal = href?.startsWith('/');
    if (isInternal && href) {
      return React.createElement(
        'a',
        { href, className: 'text-forest underline underline-offset-2 hover:text-gold-700' },
        children,
      );
    }
    return React.createElement(
      'a',
      {
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'text-forest underline underline-offset-2 hover:text-gold-700',
      },
      children,
    );
  },
  blockquote: ({ children }) =>
    React.createElement(
      'blockquote',
      { className: 'my-6 border-l-4 border-gold/60 pl-5 font-display text-lg italic text-forest/80' },
      children,
    ),
};
