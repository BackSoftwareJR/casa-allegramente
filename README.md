# Residence V.G — Nuovo Sito Web

Progetto Next.js 14 per il sito di **Residence V.G**, residenza per anziani a Cabiate (CO).

## Avvio rapido

```bash
# Prerequisiti: Node.js >= 18

npm install
cp .env.example .env.local
# Compila le variabili in .env.local

npm run dev
# http://localhost:3000
```

## Documentazione

Leggi **[BRIEF_SVILUPPO.md](./BRIEF_SVILUPPO.md)** per:
- Design system completo (colori, tipografia, spaziatura)
- Animazioni Framer Motion
- Struttura pagine
- Asset disponibili e dove trovarli
- Contenuti e testi ufficiali
- Checklist implementazione

## Stack

- **Next.js 14** (App Router) — Node.js 18+
- **TypeScript** — type safety
- **Tailwind CSS** — styling
- **Framer Motion v11** — animazioni
- **Radix UI** — componenti accessibili (Accordion, Dialog, Tabs)
- **React Hook Form + Zod** — form e validazione

## Struttura

```
src/
  app/          ← Pagine (App Router)
  components/   ← Componenti React
  data/         ← Contenuti (content.ts, blog/)
  lib/          ← Utilities
public/
  images/       ← Loghi e foto struttura
  videos/       ← Hero video (desktop.mp4 / mobile.mp4)
  foto_blog/    ← Immagini articoli blog
  uploads/      ← PDF legali
```

## Contatti cliente

- **Tel:** 035 195 812 35
- **Email:** vggroupsrl@gmail.com
- **WhatsApp:** +39 351 958 1235
