# 05 — Tech stack e linee guida implementative

**Progetto:** Casa Allegramente  
**Tipo deploy:** Static site (HTML/CSS/JS)  
**Vincoli:** No backend · No database · No form · No API

---

## 1. Stack raccomandato (definitivo)

| Layer | Tecnologia | Versione min | Ruolo |
|-------|------------|--------------|-------|
| Runtime build | Node.js | 18 LTS+ | Solo sviluppo e CI |
| Bundler | **Vite** | 5.x | Dev server HMR, build produzione |
| UI library | **React** | 18.3+ | Componenti |
| Linguaggio | **TypeScript** | 5.x | Type safety |
| Routing | **react-router-dom** | 6.x | 5 pagine + 404 |
| Styling | **Tailwind CSS** | 3.4+ | Utility-first, design tokens |
| Animazioni | **framer-motion** | 11.x | Scroll reveal, transizioni |
| Icone | **lucide-react** | 0.4+ | Icon set coerente |
| SEO head | **react-helmet-async** | 2.x | Meta per route |
| Utilità classi | **clsx** + **tailwind-merge** | latest | `cn()` helper |

### Opzionali consigliati

| Pacchetto | Uso |
|-----------|-----|
| `@radix-ui/react-accordion` | FAQ accessibile (come esempio) |
| `react-intersection-observer` | Trigger animazioni viewport |
| `@fontsource/cormorant-garamond` + `@fontsource/inter` | Font self-hosted (GDPR, no Google CDN) |
| `vite-plugin-sitemap` | Generazione `sitemap.xml` a build |

### Esplicitamente NON usare

| Pacchetto | Motivo |
|-----------|--------|
| `next`, `mysql2`, API routes | Backend / SSR non richiesti |
| `react-hook-form`, `zod` | Nessun form |
| `axios`, `fetch` verso API proprie | Nessun dato dinamico |
| CMS headless (Sanity, Contentful) | Scope e budget fase 1 |
| Firebase, Supabase | Database escluso |

---

## 2. Confronto con sito esempio

**Path:** `sito esempio/residence_vg-main/`

| Aspetto | Esempio (Residence V.G) | Casa Allegramente |
|---------|-------------------------|-------------------|
| Framework | Next.js 14 App Router | Vite + React SPA |
| Deploy | Node server o static export | **Solo static** `dist/` |
| Form | React Hook Form + Zod + `/api/contact` | **Nessuno** |
| DB | mysql2 in dipendenze | **Nessuno** |
| Blog | 15 articoli in `articles.ts` | **Nessuno** |
| Immagini | `next/image` | `<img>` + srcset o `vite-imagetools` |
| Animazioni | Framer Motion 11 | ✅ Stesso |
| Tailwind | 3.4 custom palette | ✅ Palette Allegramente |
| Content | `src/data/content.ts` | ✅ Stesso pattern |

**Codice riutilizzabile dall’esempio (adattare, non copiare ciecamente):**

- `src/lib/animations.ts` — varianti motion
- `src/lib/utils.ts` — `cn()`
- Struttura componenti `sections/*` — Hero, StatsBar, DailyRoutine, FAQ
- `tailwind.config.js` — struttura colori (valori HEX da cambiare)
- Pattern Header sticky + menu mobile

---

## 3. Setup progetto (comandi)

```bash
# Dalla root workspace Casa allegramente
npm create vite@latest . -- --template react-ts
npm install react-router-dom framer-motion lucide-react react-helmet-async
npm install clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer @types/node
npx tailwindcss init -p
```

### `vite.config.ts` (essenziale)

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
});
```

### `tsconfig.json` paths

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  }
}
```

---

## 4. Script npm

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 5. Tailwind — integrazione design system

File `tailwind.config.js`: estendere `theme.colors` con token doc 03 (forest, sage, honey, linen, ink).

File `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply bg-linen-100 font-sans text-ink-light antialiased;
    font-size: 18px;
  }
  h1, h2, h3 {
    @apply font-display text-ink;
  }
}

@layer components {
  .container-site {
    @apply mx-auto w-full max-w-[1200px] px-6 md:px-12;
  }
  .heading-display {
    @apply font-display font-semibold tracking-tight;
  }
  .gold-divider {
    @apply mx-auto h-px w-16 bg-honey;
  }
}
```

---

## 6. Framer Motion — standard progetto

Centralizzare in `src/lib/animations.ts`:

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
```

Hook `useReducedMotion` — se true, sostituire varianti con `{ opacity: 0 }` → `{ opacity: 1 }` senza `y`.

Pattern sezione:

```tsx
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
  variants={fadeUp}
>
```

---

## 7. Routing e SEO

### React Router

```tsx
// main.tsx
<HelmetProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</HelmetProvider>
```

### PageMeta component

```tsx
<Helmet>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={`${siteConfig.url}${path}`} />
  <meta property="og:title" content={title} />
  <meta property="og:image" content={ogImage} />
</Helmet>
```

### JSON-LD

Componente `JsonLd.tsx` — iniettare `<script type="application/ld+json">` con `LocalBusiness` (stesso schema del brief esempio, dati Allegramente).

---

## 8. Asset e immagini

| Strategia | Dettaglio |
|-----------|-----------|
| Formato | WebP primario, JPEG fallback se necessario |
| Path | `/public/images/...` referenziati come `/images/...` |
| Lazy load | `loading="lazy"` sotto fold |
| Hero | `fetchpriority="high"` su LCP image |
| SVG | Logo inline o file in public |

**Ottimizzazione pre-upload:** Squoosh o Sharp CLI in script npm opzionale (`npm run optimize-images`) — non in runtime.

---

## 9. Accessibilità tecnica

- ESLint plugin `eslint-plugin-jsx-a11y`
- Focus trap nel menu mobile (opzionale con Radix Dialog)
- `eslint` + `prettier` per consistenza
- Test manuale keyboard + VoiceOver/NVDA

---

## 10. Qualità e CI (opzionale)

```yaml
# .github/workflows/build.yml
name: Build
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run type-check
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with: { name: dist, path: dist }
```

---

## 11. Deploy statico

### Hostinger (shared hosting)

1. `npm run build` in locale o CI  
2. Upload contenuto `dist/` in `public_html/`  
3. Copiare `.htaccess` per SPA fallback (vedi doc 01)  
4. HTTPS via pannello Hostinger  

### Alternative

- **Netlify / Vercel static:** drag-and-drop `dist/` o Git connect  
- **Cloudflare Pages:** build command `npm run build`, output `dist`  

**Nessuna variabile d’ambiente segreta** in produzione.

---

## 12. Alternative considerate

### Next.js 14 `output: 'export'`

**Pro:** `metadata` API, familiarità da esempio.  
**Contro:** tooling più pesante; rischio di usare feature server-only; per 5 pagine statiche il beneficio è marginale.

**Verdetto:** accettabile se il team preferisce Next, ma **Vite resta raccomandazione primaria**.

### Astro

**Pro:** HTML statico eccellente per SEO.  
**Contro:** meno allineato a richiesta esplicita “React”; curva se team solo React.

### CSS Modules al posto di Tailwind

**Pro:** scoping CSS.  
**Contro:** esempio e velocità prototipo usano Tailwind; design token già definiti in utility.

**Verdetto:** Tailwind confermato.

---

## 13. Checklist implementazione

### Fase 0 — Setup
- [ ] `npm create vite` + dipendenze
- [ ] Tailwind + alias `@/`
- [ ] `content.ts` scaffold con placeholder `TODO_CLIENTE`
- [ ] React Router 5 route + 404

### Fase 1 — Layout
- [ ] `RootLayout`, Header, Footer, SkipLink
- [ ] FloatingCTA `tel:`
- [ ] PageMeta + JsonLd homepage

### Fase 2 — Pagine
- [ ] Home (sezioni hub)
- [ ] Chi siamo + galleria
- [ ] Servizi grid
- [ ] La vita in casa timeline
- [ ] Dove siamo + mappa

### Fase 3 — Qualità
- [ ] `prefers-reduced-motion`
- [ ] Lighthouse > 90 (Performance, Accessibility, SEO, Best Practices)
- [ ] Verifica assenza `<form>` in tutto il repo (`rg "<form"`)
- [ ] `sitemap.xml` + `robots.txt`
- [ ] Test dispositivi reali

### Fase 4 — Deploy
- [ ] Build produzione
- [ ] Upload `dist/`
- [ ] Verifica deep link `/chi-siamo`
- [ ] Search Console + Google Business Profile (operazione cliente)

---

## 14. Dipendenze `package.json` target (riferimento)

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0",
    "framer-motion": "^11.18.0",
    "lucide-react": "^0.460.0",
    "react-helmet-async": "^2.0.5",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "@radix-ui/react-accordion": "^1.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "typescript": "^5.6.0",
    "vite": "^5.4.0",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-jsx-a11y": "^6.10.0"
  }
}
```

---

## 15. Sicurezza e privacy

- Nessun dato personale raccolto dal sito (no form, no analytics invasivi senza consenso).
- Cookie: solo tecnici o analytics con banner (CookieYes / Iubenda) se si aggiunge GA — configurazione esterna, non backend.
- PDF privacy in `public/documents/` — link nel footer.
- `rel="noopener noreferrer"` su link esterni (WhatsApp, Maps).

---

*Documento 05 — Tech stack · Casa Allegramente · v1.0*
