# 01 — Architettura infrastrutturale

**Progetto:** Casa Allegramente · Rivarolo Canavese (TO)  
**Tipo:** Single Page Application statica (SPA) con routing client-side  
**Vincolo assoluto:** nessun backend, nessun database, nessun form con invio dati

---

## 1. Scelta del framework: Vite vs Next.js

### Raccomandazione: **Vite + React + React Router**

| Criterio | Vite (raccomandato) | Next.js (static export) |
|----------|---------------------|-------------------------|
| Output deploy | Cartella `dist/` pura HTML/CSS/JS | Cartella `out/` dopo `output: 'export'` |
| Server Node in produzione | ❌ Non necessario | ❌ Non necessario (con export) |
| Complessità setup | Bassa | Media (App Router, convenzioni file) |
| Routing | React Router v6 | File-based (`app/`) |
| SEO metadata | `react-helmet-async` o plugin Vite | `metadata` nativo |
| Allineamento vincoli progetto | ✅ Ideale per 5 pagine statiche | ✅ Possibile ma sovradimensionato |

**Perché non Next.js “full”:** il sito esempio (`residence_vg-main`) usa Next.js 14 con API route (`/api/contact`), MySQL e form — funzionalità **esplicitamente escluse** da Casa Allegramente. Un export statico Next.js è fattibile, ma Vite offre meno superficie accidentale (nessuna tentazione di aggiungere API route) e deploy più lineare su hosting condiviso.

**Quando preferire Next.js static export:** se in futuro si volesse reintrodurre blog SSG o migrazione dal codebase esempio con minimo refactoring. Per la fase 1, **Vite è la scelta architetturale primaria**.

---

## 2. Stack tecnologico (sintesi)

```
┌─────────────────────────────────────────────────────────┐
│                    BROWSER (client)                      │
├─────────────────────────────────────────────────────────┤
│  React 18+          UI components + pages                │
│  React Router 6     Routing 5 pagine                     │
│  Framer Motion 11   Animazioni scroll / transizioni      │
│  Tailwind CSS 3     Design system + responsive           │
│  TypeScript 5       Type safety contenuti e props        │
├─────────────────────────────────────────────────────────┤
│  Vite 5             Dev server + build statica           │
│  vite-plugin-svgr   (opz.) Icone SVG come componenti     │
└─────────────────────────────────────────────────────────┘
         │
         ▼  npm run build
┌─────────────────────────────────────────────────────────┐
│  dist/  →  hosting statico (Apache/Nginx/CDN)            │
│  Nessun Node, PHP obbligatorio, DB, SMTP dal sito        │
└─────────────────────────────────────────────────────────┘
```

### Dipendenze escluse (rispetto al sito esempio)

| Pacchetto esempio | Motivo esclusione |
|-------------------|------------------|
| `mysql2` | Nessun database |
| `react-hook-form`, `zod`, `@hookform/resolvers` | Nessun form |
| API route Next.js | Nessun server-side |
| `sharp` (lato server) | Build Vite usa asset statici; ottimizzazione immagini in pipeline separata o plugin Vite |

---

## 3. Struttura cartelle proposta

```
casa-allegramente/                 # root progetto (da creare)
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml                # generato a build o statico
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero/
│   │   ├── struttura/             # foto reali casa
│   │   └── og/                    # Open Graph
│   └── documents/                 # PDF privacy/cookie (link download)
│       ├── privacy.pdf
│       └── cookie.pdf
├── src/
│   ├── main.tsx                   # entry + BrowserRouter
│   ├── App.tsx                    # Routes definition
│   ├── index.css                  # Tailwind directives + CSS variables
│   │
│   ├── data/
│   │   └── content.ts             # Single source of truth (testi, contatti, nav)
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ChiSiamoPage.tsx
│   │   ├── ServiziPage.tsx
│   │   ├── VitaInCasaPage.tsx
│   │   └── DoveSiamoPage.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── RootLayout.tsx     # Header + Outlet + Footer
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── SkipLink.tsx
│   │   ├── seo/
│   │   │   ├── PageMeta.tsx       # title, description, OG
│   │   │   └── JsonLd.tsx         # schema.org LocalBusiness
│   │   ├── ui/                    # atomi riusabili
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Accordion.tsx      # FAQ (Radix o custom accessibile)
│   │   │   ├── ImageGallery.tsx
│   │   │   └── ContactBlock.tsx   # tel/mailto — NO form
│   │   └── sections/              # blocchi compositi per pagina
│   │       ├── Hero.tsx
│   │       ├── StatsBar.tsx
│   │       ├── ServicesGrid.tsx
│   │       ├── DailyTimeline.tsx
│   │       ├── Testimonials.tsx
│   │       ├── FAQSection.tsx
│   │       └── MapEmbed.tsx
│   │
│   ├── hooks/
│   │   ├── useReducedMotion.ts
│   │   └── useScrollSpy.ts        # (opz.) highlight nav su anchor home
│   │
│   └── lib/
│       ├── animations.ts          # varianti Framer Motion condivise
│       └── utils.ts               # cn(), formattazione telefono
│
├── docs/                          # questa documentazione
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

### Convenzioni naming

- **Pagine:** suffisso `Page.tsx`, export default, una route ciascuna.
- **Sezioni:** suffisso descrittivo (`Hero.tsx`, non `HeroSection` obbligatorio ma coerente con esempio).
- **Dati:** tutto in `content.ts`; nessun JSON sparso salvo asset path.
- **Route path:** kebab-case italiano (`/chi-siamo`, `/la-vita-in-casa`).

---

## 4. Architettura componenti

### 4.1 Livelli

```
Pages (composizione route-specifica)
    └── Sections (blocchi semantici <section>)
            └── UI (bottoni, card, heading)
                    └── Layout (shell globale)
```

### 4.2 Principi

1. **Presentational vs container leggero:** le pagine importano sezioni e passano solo override opzionali; i testi provengono da `content.ts`.
2. **Layout unico:** `RootLayout` wrappa tutte le route; Header/Footer non duplicati.
3. **Sezioni riusabili cross-page:** es. `ContactBlock`, `SectionHeading`, `ServicesGrid` (anteprima in Home, dettaglio in Servizi).
4. **Animazioni centralizzate:** `lib/animations.ts` espone `fadeUp`, `staggerContainer`, `sectionReveal` — ogni sezione importa le stesse varianti (pattern dal sito esempio `residence_vg-main/src/lib/animations.ts`).
5. **Nessun stato globale obbligatorio:** per 5 pagine statiche, Context/Zustand non necessari. Eventuale `ThemeContext` solo se si aggiunge toggle font-size accessibilità.

### 4.3 Diagramma composizione Home (esempio)

```
HomePage
├── PageMeta
├── JsonLd (LocalBusiness)
├── Hero
├── StatsBar
├── ManifestoPreview      → link /chi-siamo
├── ServicesPreview       → link /servizi
├── DailyRoutinePreview   → link /la-vita-in-casa
├── GalleryTeaser         → foto in /chi-siamo o lightbox inline
├── Testimonials
├── FAQSection
└── ContactCTA            → tel + mailto, NO form
```

Le altre pagine espandono il contenuto delle rispettive anteprime senza duplicare logica: stessi componenti con prop `variant="full" | "preview"`.

---

## 5. Routing

### 5.1 Mappa route

| Path | Componente | Titolo nav |
|------|------------|------------|
| `/` | `HomePage` | Home |
| `/chi-siamo` | `ChiSiamoPage` | Chi siamo |
| `/servizi` | `ServiziPage` | Servizi |
| `/la-vita-in-casa` | `VitaInCasaPage` | La vita in casa |
| `/dove-siamo` | `DoveSiamoPage` | Dove siamo |

### 5.2 Configurazione React Router

```tsx
// App.tsx (schema)
<Routes>
  <Route element={<RootLayout />}>
    <Route index element={<HomePage />} />
    <Route path="chi-siamo" element={<ChiSiamoPage />} />
    <Route path="servizi" element={<ServiziPage />} />
    <Route path="la-vita-in-casa" element={<VitaInCasaPage />} />
    <Route path="dove-siamo" element={<DoveSiamoPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
</Routes>
```

### 5.3 Hosting statico e fallback SPA

Su Apache (Hostinger tipico), file `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Senza rewrite, URL dirette tipo `/chi-siamo` restituirebbero 404 dal server.

### 5.4 Transizioni pagina

- `AnimatePresence` + `motion.div` con `key={location.pathname}` nel layout, oppure fade leggero 200–300ms su cambio route.
- Rispettare `prefers-reduced-motion`: transizione disabilitata o ridotta a opacity instant.

### 5.5 Pagine legali (opzionali, fuori dalle 5 principali)

Se richiesto dal cliente, aggiungere senza espandere la nav principale:

- `/privacy` — testo o link PDF in `public/documents/`
- `/cookie` — informativa cookie (banner CookieYes o testo statico)

Restano **route statiche aggiuntive**, non conteggiate nelle 5 pagine core.

---

## 6. Gestione contenuti

### Single source of truth: `src/data/content.ts`

Struttura ispirata al sito esempio, adattata:

```ts
export const siteConfig = {
  name: "Casa Allegramente",
  tagline: "...",           // da definire con cliente
  description: "...",
  url: "https://...",       // dominio finale
  contact: {
    phone: "...",
    phoneRaw: "...",        // per href tel:
    whatsapp: "...",        // opzionale
    email: "...",
    address: { street, city, province: "TO", cap, full },
    hours: "...",
    geo: { lat, lng },
    maps: { google, openstreetmap },
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Chi siamo", href: "/chi-siamo" },
  ...
];

export const services = [ /* ... */ ];
export const dailyRoutine = [ /* slot orari */ ];
export const faq = [ /* domande */ ];
export const testimonials = [ /* se disponibili */ ];
```

**Nessun CMS headless** in fase 1: aggiornamenti = modifica file + rebuild + deploy.

---

## 7. Contatto senza form

Pattern obbligatorio per ogni CTA “Contattaci”:

```tsx
<a href={`tel:${siteConfig.contact.phoneRaw}`}>Chiama</a>
<a href={`mailto:${siteConfig.contact.email}`}>Scrivici</a>
<a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
  WhatsApp
</a>
```

Componente `ContactBlock`: card con icona, orari, indirizzo, tre azioni cliccabili. **Mai** `<form>`, **mai** `fetch` verso endpoint.

---

## 8. SEO e dati strutturati

- `PageMeta` per `<title>`, `<meta name="description">`, Open Graph, canonical.
- `JsonLd` con `@type: "LocalBusiness"` o `NursingHome` / `SeniorLiving` (validare con Google Rich Results).
- `sitemap.xml` in `public/` con le 5 URL.
- `robots.txt` permissivo.

---

## 9. Performance (obiettivi)

| Metrica | Target |
|---------|--------|
| LCP | < 2.5s mobile 4G |
| CLS | < 0.1 |
| Bundle JS iniziale | < 150 KB gzip (senza immagini) |
| Immagini | WebP, `loading="lazy"`, dimensioni responsive `srcset` |

Hero: preferire **immagine statica** con poster opzionale; video solo se asset leggeri (< 2 MB mobile). Il sito esempio usa video hero — valutare banda mobile per utenza anziana.

---

## 10. Pipeline build e deploy

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output → dist/
npm run preview  # verifica locale post-build
```

**Deploy:** upload `dist/` via FTP/SFTP su Hostinger, oppure CI (GitHub Actions → artifact → deploy).

Variabili ambiente: **nessuna obbligatoria** in produzione (sito statico). Eventuale `VITE_SITE_URL` solo per canonical assoluti in build.

---

## 11. Confronto strutturale con sito esempio

| Aspetto | Residence V.G (esempio) | Casa Allegramente |
|---------|-------------------------|-------------------|
| Framework | Next.js 14 App Router | Vite + React Router |
| Pagine | Home + galleria + blog + dove siamo + legal | **5 pagine** fisse |
| Form contatti | Sì (API + email) | **No** |
| Blog | 15 articoli | **No** (fase 1) |
| `content.ts` | Sì | Sì (stesso pattern) |
| Componenti `sections/` | Ricco set (~12 sezioni home) | Subset ridistribuito su 5 pagine |
| Floating CTA telefono | Sì | ✅ Consigliato (mobile) |

---

## 12. Rischi architetturali e mitigazioni

| Rischio | Mitigazione |
|---------|-------------|
| SEO SPA debole vs SSR | Meta per pagina via `react-helmet-async`; prerender opzionale (`vite-plugin-ssr` o servizio post-build) se Lighthouse SEO insufficiente |
| URL 404 su refresh | `.htaccess` rewrite verso `index.html` |
| Scope creep (form, blog) | Vincolo documentato; contatto solo link nativi |
| Contenuti mancanti | Placeholder in `content.ts` marcati `TODO_CLIENTE` |

---

*Documento 01 — Architettura infrastrutturale · Casa Allegramente · v1.0*
