# Casa Allegramente — Sito Web

Sito Next.js 14 per **Casa Famiglia AllegraMente**, Rivarolo Canavese (TO).

Contenuti da `sito vecchio/src/data/content.ts` · Struttura e design da `sitotemplate`.

## Avvio

```bash
cd "sito nuovo"
npm install
cp .env.example .env.local
npm run dev
```

## Da completare

- [ ] **Telefono, email, WhatsApp** in `src/data/content.ts`
- [ ] **Logo Allegramente** → sostituire `public/images/logo_cabiate.png`
- [ ] **Foto reali** della villa (attualmente placeholder da template)
- [ ] **P.IVA** se disponibile
- [ ] Privacy/cookie policy personalizzate

## Struttura pagine

| Pagina | Path |
|--------|------|
| Home | `/` |
| Chi siamo | `/chi-siamo` |
| Servizi e retta | `/servizi` |
| La vita in casa | `/la-vita-in-casa` |
| Galleria | `/galleria` |
| Dove siamo | `/dove-siamo` |
| Contatti | `/contatti` · `/#contatti` |
| FAQ | `/faq` |

## Contenuti centrali

Tutto in **`src/data/content.ts`**: testi, servizi, FAQ, prezzi, territorio, navigazione.

## Stack

Next.js 14 · TypeScript · Tailwind · Framer Motion · Radix UI
