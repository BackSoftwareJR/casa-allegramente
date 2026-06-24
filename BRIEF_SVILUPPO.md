# bsbsbsbsbs — Brief Completo Redesign
**Versione:** 1.0 · **Data:** Maggio 2026  
**Cliente:** bsbsbsbsbs, TODO_CITTA (TODO)  
**Dominio:** [TODO-sostituire-dominio.it](https://TODO-sostituire-dominio.it)

---

## 1. Panoramica progetto

Questo workspace contiene tutto il necessario per sviluppare il **nuovo sito da zero** di bsbsbsbsbs — una residenza per anziani familiare a TODO_CITTA (TODO).

Il sito precedente esisteva (in `../residence_vg/`) ed è stato analizzato in profondità. Qui trovi:
- ✅ Tutti gli **asset** (immagini, loghi, video) già copiati in `public/`
- ✅ Tutti i **contenuti** corretti e unificati in `src/data/content.ts`
- ✅ Tutti gli **articoli blog** in `src/data/blog/`
- ✅ **Configurazione** Tailwind, Next.js, TypeScript già impostata
- ✅ **Package.json** con tutte le dipendenze necessarie

### Cosa fare

Sviluppare **completamente da zero** il nuovo sito seguendo questo brief, il design system e le specifiche tecniche. Il codebase vecchio serve solo come riferimento per contenuti/logica — **non copiare codice vecchio**, sviluppa fresh.

---

## 2. Brand & identità

| Campo | Valore |
|-------|--------|
| Nome breve | **bsbsbsbsbs** |
| Nome completo | bsbsbsbsbs |
| Tagline ufficiale | *Libertà, accoglienza, empatia e rispetto* |
| Territorio | TODO_CITTA (TODO), Brianza, Lago di Como |
| Target primario | Anziani over 65, autosufficienti / parzialmente autosufficienti |
| Target secondario | Familiari che cercano la struttura per un proprio caro |
| Tono di comunicazione | Caldo, rassicurante, professionale, mai clinico |
| Differenziatore | **Piccola dimensione familiare** (max 10 ospiti) — tutti conoscono tutti |

### Mission (da usare nei testi)
> "Un posto sicuro e protetto dove ogni persona è conosciuta per nome, dove la routine quotidiana rispecchia le abitudini di una vita intera, dove la famiglia non è un ospite ma parte della nostra comunità."

---

## 3. Dati di contatto — UFFICIALI

⚠️ **Usare ESCLUSIVAMENTE questi valori.** Il vecchio sito aveva incoerenze (indirizzo sbagliato, numero ospiti errato).

| Campo | Valore |
|-------|--------|
| **Telefono** | TODO TELEFONO |
| **WhatsApp** | +39 TODO TELEFONO |
| **Email** | TODO@sostituire.it |
| **Indirizzo** | TODO Via **14**, 22060 TODO_CITTA (TODO) |
| **Numero ospiti MAX** | **10** (NON 5 — era un errore nel vecchio blog) |
| **P.IVA** | TODO_PIVA |
| **Orari** | Lun–Dom 09:00–20:00 |
| **Geo** | Lat: 45.674 / Lng: 9.107 |

---

## 4. Design system

### 4.1 Palette colori

La palette abbandona il teal "clinico" del vecchio sito in favore di colori caldi e autorevoli.

```
PRIMARI — Verde foresta/salvia
  Forest:  #2D3A2E  (primary — autorevolezza, natura)
  Sage:    #6B8F71  (secondary — benessere)
  Sage 100:#E0EDE1  (sfondi card su forest)

ACCENTO — Oro caldo
  Gold:    #C9A84C  (CTA, highlight, dettagli pregiati)
  Gold 300:#E8C97A  (hover stati, decorazioni leggere)
  Gold 700:#8B6914  (testo su sfondi chiari)

NEUTRI — Base sito
  Linen:   #F5F2ED  (sfondo globale — MAI bianco puro)
  Cream:   #FDF6E3  (sezioni warmth testimonial/quote)
  Parchment:#EDE9E0 (sezioni alternate)
  WarmGray:#D4CFC7  (bordi, divider)

TESTO
  Ink:     #1A1A1A  (titoli)
  Charcoal:#3D3D3D  (corpo testo)
  Muted:   #717171  (caption, meta)

SUPERFICI
  White:   #FFFFFF  (card, form)
  Forest:  #2D3A2E  (footer, hero overlay)
```

**Regola fondamentale:** sfondo globale = `#F5F2ED` (Linen). Mai `#FFFFFF` come background pagina.

### 4.2 Tipografia

```
DISPLAY (titoli grandi, hero, headline sezioni):
  Font:   Cormorant Garamond
  Peso:   600–700
  Usare: per tutto ciò che "racconta" — titoli hero, tagline, quote

BODY (testo corrente, navigazione, button, label):
  Font:   Inter
  Peso:   400 (body), 500–600 (UI/label/button)
  Min-size: 16px (accessibilità anziani!)

CONFIGURAZIONE next/font:
  import { Cormorant_Garamond, Inter } from 'next/font/google'
  
  const display = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-display',
    display: 'swap',
  })
  
  const sans = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
  })
```

### 4.3 Spaziatura e layout

- Container max-width: **1200px** con padding laterale 24px (mobile) / 48px (desktop)
- Gap tra sezioni: **96px** (6rem) desktop, **64px** mobile
- Border-radius card: **12px** (sm), **16px** (md), **24px** (lg)
- Nessun box-shadow aggressivo — usare ombre calde leggere

### 4.4 Responsive breakpoints (Tailwind default)
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

---

## 5. Animazioni — Framer Motion v11

### Principi

1. **Lente e morbide** — la struttura è una casa, non un'app tech. Max 0.8s per animazioni di ingresso.
2. **Sempre** `@media (prefers-reduced-motion)` — rispettarlo. Usare il hook di Framer Motion.
3. **Scroll-triggered** — la maggior parte delle animazioni si attiva all'entrata nel viewport.
4. **No loop infiniti** — solo hero (slide carousel) può avere autoplay.

### Pattern animazioni raccomandate

```tsx
// Pattern 1: Fade + slide-up (sezioni scroll)
const sectionVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

// Pattern 2: Stagger children (grid card)
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// Pattern 3: Counter animato (numeri hero stats)
// Usare useMotionValue + useTransform + animate()

// Pattern 4: SVG path draw (timeline)
// pathLength: 0 → 1

// Pattern 5: Layout animation (filtri galleria)
// <motion.div layout> su ogni item + AnimatePresence
```

### Componenti con animazione specifica

| Componente | Animazione | Note |
|------------|------------|------|
| Hero headline | Stagger word-by-word fade-up | Cormorant 64px |
| Stats bar | Count-up al viewport | useInView trigger |
| Servizi card | Fade-up stagger + hover scale | staggerChildren 0.1s |
| Testimonianze | Slide carousel autoplay + swipe | 5s interval |
| Timeline | SVG pathLength draw | scroll-triggered |
| Galleria | AnimatePresence layout | filtro in/out |
| Lightbox | Scale 0.95→1 + backdrop | dialog Radix |
| FAQ | Height accordion | Radix + framer |
| Page transition | Opacity fade | route change |

---

## 6. Struttura pagine

### Homepage `/`

```
1. Header (sticky, blur bg on scroll)
2. Hero
   - Video background (desktop.mp4 / mobile.mp4 — già in /public/videos/)
   - Overlay Forest semitrasparente
   - Headline Cormorant display-xl
   - Subline Inter
   - 2 CTA: "Prenota una visita" (Gold) + "Scopri i servizi" (outline)
3. Stats Bar
   - 4 numeri animati: 10 ospiti, 24h, 3 piani, 100% individuale
   - Sfondo Forest su sfondo Linen
4. Chi siamo #chi-siamo
   - Titolo Cormorant
   - Testo storia/valori
   - Foto struttura (IMG_2382–IMG_2393)
   - 3 pillole con icone (professionalità, calore, sicurezza)
5. Servizi #servizi
   - Grid 3×2 desktop / 1×6 mobile
   - Card con icona SVG + titolo + descrizione
   - Hover: lift + bordo Gold
6. Routine giornaliera
   - Timeline 9 slot (07:30–21:30)
   - Colori per fase: Gold mattina / Sage pomeriggio / Forest sera
   - SVG line draw animato
7. Testimonianze
   - 3 card con avatar, nome, ruolo, testo, stelle
   - Sfondo Cream, bordo sinistro Gold
   - Carousel su mobile
8. Galleria anteprima
   - 6 foto in griglia masonry
   - Link → /galleria
9. Blog preview
   - 3 articoli featured
   - Card con immagine, categoria, titolo, excerpt
10. FAQ
    - Accordion con Radix UI + Framer Motion
    - 8 domande da content.ts
11. Contatti #contatti
    - Indirizzo, Tel, WhatsApp, Email
    - Form di contatto (React Hook Form + Zod)
    - Foto struttura affiancata
12. Footer
    - Logo, nav, contatti, legal, P.IVA
```

### Pagine dedicate (da creare)

| Pagina | Path | Priorità |
|--------|------|----------|
| Galleria completa | `/galleria` | Alta |
| Dove siamo | `/dove-siamo` | Alta |
| Blog lista | `/blog` | Alta |
| Articolo singolo | `/blog/[slug]` | Alta |
| Servizi (dettaglio) | `/servizi` | Media — SEO campagne |
| Chi siamo (dettaglio) | `/chi-siamo` | Media — E-E-A-T |

---

## 7. Asset disponibili

### Loghi e icone
| File | Path | Uso |
|------|------|-----|
| Logo principale | `/public/images/logo.png` | Header, footer, OG |
| Logo alternativo | `/public/images/logo.jpg` | Backup |
| Favicon | `/public/images/favicon.png` | Browser tab |

### Video (usare nell'Hero — non erano usati nel vecchio sito!)
| File | Path | Uso |
|------|------|-----|
| Video desktop | `/public/videos/desktop.mp4` | Hero background ≥768px |
| Video mobile | `/public/videos/mobile.mp4` | Hero background <768px |

### Foto struttura reali (12 foto — LE PIÙ IMPORTANTI)
```
/public/images/foto_orizzontali/
  IMG_2382.webp  ← Ingresso / sala comune
  IMG_2384.webp  ← Sala comune
  IMG_2385.webp  ← Sala pranzo
  IMG_2386.webp  ← Cucina a vista
  IMG_2387.webp  ← Corridoio
  IMG_2388.webp  ← Camera ospite
  IMG_2389.webp  ← Camera matrimoniale
  IMG_2390.webp  ← Terrazzo
  IMG_2391.webp  ← Giardino
  IMG_2392.webp  ← Dettaglio
  IMG_2393.webp  ← Vista esterna
```
**Queste sono foto REALI della struttura.** Valorizzarle al massimo. Usarle in:
- Hero slideshow / video
- Sezione Chi siamo
- Galleria
- Sezione Invito visita

### Foto struttura aggiuntive
| File | Path | Uso |
|------|------|-----|
| Struttura 1 | `/public/images/IMG_4203.webp` | Chi siamo, contatti |
| Struttura 2 | `/public/images/IMG_4208.webp` | Chi siamo, contatti |
| OG Fallback | `/public/images/hero-fallback.jpg` | OpenGraph, Twitter |

### Foto galleria
```
/public/images/gallery/
  camera1.jpg      ← Camera singola
  camera2.jpg      ← Camera doppia
  bath.jpg         ← Bagno accessibile
  camera1mob.jpg   ← Camera (versione mobile)
  bathmob.jpg      ← Bagno (versione mobile)

/public/images/converted/
  camera1.jpg
  camera2.jpg
  bath.jpg
```

### Foto blog (Adobe Stock — per articoli)
```
/public/foto_blog/
  AdobeStock_1250550187.webp
  AdobeStock_276941334.webp
  AdobeStock_278581541.webp
  AdobeStock_280820574.webp
  AdobeStock_355946114.webp
  AdobeStock_455463094.webp
  AdobeStock_504936781.webp
  AdobeStock_534939175.webp
  AdobeStock_572240679.webp
  AdobeStock_76077733.webp
```

### Documenti legali
```
/public/uploads/
  Informativa utenti sito web CASA ANZIANI.pdf  ← rinominare con brand V.G!
  Cookie policy CASA ANZIANI.pdf                ← rinominare con brand V.G!
```
⚠️ I PDF hanno ancora il vecchio brand "CASA ANZIANI". Chiedere al cliente PDF aggiornati con brand bsbsbsbsbs.

---

## 8. Contenuti testuali

Tutti i contenuti sono in `src/data/content.ts`. Qui il riepilogo.

### Testi hero
```
Headline: "Libertà, accoglienza, empatia e rispetto"
Subline:  "Residence per anziani a TODO_CITTA. Una casa vera, con max 10 ospiti,
           assistenza 24h e un progetto di vita pensato per te."
CTA 1:    "Prenota una visita"
CTA 2:    "Scopri i servizi"
```

### Testo Chi siamo (da espandere con il cliente)
```
bsbsbsbsbs è una struttura residenziale per anziani autosufficienti e 
parzialmente autosufficienti situata a TODO_CITTA, in provincia di Como.

Siamo una palazzina di tre piani con un massimo di 10 ospiti: una scelta 
precisa, non un limite. La piccola dimensione ci permette di conoscere 
ogni persona per nome, di adattarci alle sue abitudini, di costruire 
con lei e la sua famiglia un progetto di vita vero.

Il nostro personale OSS è sempre presente, di giorno e di notte.
La nostra cucina prepara pasti freschi ogni giorno.
Il nostro terrazzo e il nostro giardino sono sempre aperti.

Questo è il modo in cui intendiamo prenderci cura.
```

### 6 Servizi
1. **Assistenza 24h** — OSS e infermieri sempre presenti
2. **Vitto e nutrizione** — Pasti freschi, diete personalizzate
3. **Pulizia e igiene** — Giornaliera, igiene personale assistita
4. **Progetto di vita individuale** — Piano personalizzato con la famiglia
5. **Attività ricreative** — Laboratori, ginnastica, musica, uscite
6. **Struttura moderna** — 3 piani, ascensore, giardino, terrazzo

### Prezzi (da mostrare sul nuovo sito)
| Tipo | Prezzo |
|------|--------|
| Camera doppia | € 2.400 / mese |
| Camera singola | € 2.850 / mese |
| Periodo festivo | € 800 / settimana |
| Caparra | 30% all'ingresso |

---

## 9. Blog — articoli disponibili (15)

I dati sono in `src/data/blog/articles.ts`. Tutti e 15 gli articoli sono completi con:
- Titolo, slug, excerpt, body HTML/Markdown
- Categoria, tag, data, autore
- Immagine associata (da `/public/foto_blog/`)
- readingTime, featuredHome

### Categorie blog
- `attivita` — Attività ricreative
- `alimentazione` — Alimentazione e nutrizione
- `salute` — Salute e benessere
- `consigli` — Consigli per famiglie
- `storie` — Storie dalla struttura

### ⚠️ Da correggere nel blog
In alcuni articoli vecchi il numero ospiti è scritto "5" invece di "10".  
Correggere in `src/data/blog/articles.ts` tutti i riferimenti.

---

## 10. SEO & struttura dati

### JSON-LD da implementare su ogni pagina

**Homepage** — `LocalBusiness` + `ResidenceOrSomeType`
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "bsbsbsbsbs",
  "url": "https://TODO-sostituire-dominio.it",
  "telephone": "0351958 1235",
  "email": "TODO@sostituire.it",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "TODO Via, Numero Civico",
    "addressLocality": "TODO_CITTA",
    "addressRegion": "CO",
    "postalCode": "22060",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.674,
    "longitude": 9.107
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "09:00",
    "closes": "20:00"
  }],
  "image": "https://TODO-sostituire-dominio.it/images/hero-fallback.jpg"
}
```

**Blog articolo** — `Article` con autore, datePublished, image

### Metadata Next.js
```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: { template: '%s | bsbsbsbsbs TODO_CITTA', default: 'bsbsbsbsbs — Casa per Anziani a TODO_CITTA (TODO)' },
  description: 'Residence per anziani a TODO_CITTA, provincia di Como. Assistenza 24h, max 10 ospiti, ambiente familiare. Chiama: TODO TELEFONO.',
  metadataBase: new URL('https://TODO-sostituire-dominio.it'),
  openGraph: { ... },
  twitter: { card: 'summary_large_image' },
}
```

---

## 11. Form contatti

Il vecchio sito aveva le API (`/api/contact` e `/api/callback`) ma **non le mostrava** in homepage.

### Form da implementare
```
Campi:
  - Nome e Cognome (required)
  - Telefono (required)
  - Email (optional)
  - Messaggio (optional)
  - Consenso privacy (required, checkbox)

Comportamento:
  - Validazione client con Zod + React Hook Form
  - Submit a /api/contact (POST)
  - Feedback visivo: loading → success → error
  - Privacy link al PDF in /public/uploads/
```

### API route da creare
```
POST /api/contact
  → Invia email a TODO@sostituire.it (SMTP)
  → Salva in DB (opzionale — come nel vecchio sito)
  → Risponde { success: true } o { error: string }
```

---

## 12. Accessibilità (WCAG 2.1 AA)

Il vecchio sito aveva buona accessibilità. Mantenerla e migliorarla:

- Skip link "Vai al contenuto" in cima a ogni pagina
- Focus ring visibile su tutti gli elementi interattivi (`focus-visible:ring-2`)
- `alt` significativo su tutte le immagini
- Contrasto testo ≥ 4.5:1 (verificare con la nuova palette!)
- Font size min 16px — aumentabile da utente (eventuale toolbar)
- `aria-label` su bottoni icona
- Semantic HTML: `<header>`, `<main>`, `<nav>`, `<footer>`, `<article>`, `<section>`
- `prefers-reduced-motion` rispettato nelle animazioni

---

## 13. Performance

- `next/image` per **tutte** le immagini — lazy loading automatico
- LCP target: < 2.5s su mobile 4G
- Hero: video autoplay muted, poster image come placeholder
- Font: `display: swap` per evitare FOIT
- CSS critico inline (Next.js lo gestisce automaticamente)
- Nessuna dipendenza pesante non necessaria

---

## 14. Checklist sviluppo

### Setup iniziale
- [ ] `npm install` nella cartella `residence_vg_new`
- [ ] Creare `.env.local` da `.env.example`
- [ ] Verificare `npm run dev` funziona (Node 18+)

### Layout base
- [ ] `app/layout.tsx` — font, metadata, providers
- [ ] `app/globals.css` — CSS variables, reset
- [ ] `components/layout/Header.tsx` — navbar sticky
- [ ] `components/layout/Footer.tsx`
- [ ] Navigazione con `/dove-siamo` inclusa

### Homepage (sezioni in ordine)
- [ ] Hero con video background (usare `/public/videos/`)
- [ ] Stats bar con count-up animato
- [ ] Chi siamo con foto reali (IMG_2382–IMG_2393)
- [ ] Servizi grid 6 card
- [ ] Testimonianze (NON presenti nel vecchio sito — da creare)
- [ ] Timeline giornata
- [ ] Galleria anteprima 6 foto
- [ ] Blog preview 3 articoli
- [ ] FAQ accordion
- [ ] Form contatti integrato

### Pagine
- [ ] `/galleria` — masonry + filtri + lightbox
- [ ] `/dove-siamo` — mappa + contatti
- [ ] `/blog` — lista + categorie
- [ ] `/blog/[slug]` — articolo (SSG)
- [ ] `not-found.tsx` — 404

### Qualità
- [ ] Correggere "5 ospiti" → "10 ospiti" in tutti gli articoli blog
- [ ] JSON-LD corretto (indirizzo 14, non 12)
- [ ] Test accessibilità (keyboard nav, screen reader)
- [ ] Test mobile (Safari iOS, Chrome Android)
- [ ] `npm run type-check` senza errori
- [ ] `npm run lint` senza errori
- [ ] Lighthouse score > 90 su tutte le metriche

---

## 15. Deploy su Hostinger

La documentazione completa del deploy è nel vecchio progetto (`../residence_vg/*.md`).  
Riferimenti chiave:
- `AVVIO_SERVER.md` — avvio produzione
- `VARIABILI_AMBIENTE.md` — variabili necessarie
- `DEPLOY_PHP_TRACKING_HOSTINGER.md` — setup tracking

Il nuovo sito usa lo stesso stack (Next.js su Node) → stesso processo di deploy.

---

*Brief preparato sulla base dell'analisi completa del progetto esistente — Maggio 2026*
