# Piano di completamento — Casa Allegramente (`sito nuovo/`)

Documento di audit e roadmap per portare il sito Next.js 14 da **stato attuale (template VG parzialmente popolato)** a **sito pronto al lancio** per Casa Famiglia AllegraMente — Via Gria 12, Rivarolo Canavese (TO).

**Riferimenti nel workspace:**
- `sito nuovo/` — target (Next.js 14, `src/data/content.ts`)
- `sito vecchio/` — contenuti e sezioni complete (Vite/React)
- `sitotemplate/` — template originale VG Group / residence_vg

**Data audit:** 23 giugno 2026

---

## A. Stato attuale (cosa c'è già)

### Stack e infrastruttura

| Elemento | Stato | File / note |
|----------|-------|-------------|
| Next.js 14 App Router | ✅ | `src/app/` |
| TypeScript + Tailwind + Framer Motion | ✅ | `package.json`, `tailwind.config.js` |
| Single source of truth contenuti | ✅ parziale | `src/data/content.ts` (~460 righe Allegramente) |
| SEO helper | ✅ | `src/lib/seo.ts`, `createPageMetadata()` |
| JSON-LD | ✅ parziale | `src/components/JsonLd.tsx` (NursingHome, Organization, FAQ, Breadcrumb, Article) |
| Google Analytics | ✅ hardcoded | `G-PPG322967R` in `GoogleAnalytics.tsx` |
| Sitemap generator | ✅ | `scripts/generate-sitemap.mjs` → `public/sitemap.xml` |
| API contatto | ⚠️ stub | `src/app/api/contact/route.ts` (log only, no SMTP) |
| Env template | ✅ | `.env.example` |
| Build scripts | ✅ | `prebuild` genera sitemap; `predev` genera blog data |

### Palette e tipografia

- **Tailwind** (`tailwind.config.js`): palette Allegramente impostata — `gold` = `#F7941D`, `sage` = `#6BBF4A`, `forest` = `#333333`.
- **Font attuali** (`src/app/layout.tsx`): **Cormorant Garamond** (display) + **Inter** (sans).
- **Font sito vecchio** (`sito vecchio/src/index.css`): Cormorant Garamond + **Source Sans 3**.
- **Incoerenza**: molti componenti template usano ancora colori hardcoded VG (`#C9A84C`, `#7FA885`, `#2D3A2E`) invece dei token Tailwind aggiornati.

### Pagine esistenti e routing

| Path | File | In nav (`navigation`) |
|------|------|------------------------|
| `/` | `src/app/page.tsx` | Home |
| `/chi-siamo` | `src/app/chi-siamo/page.tsx` | Sì |
| `/servizi` | `src/app/servizi/page.tsx` | Sì |
| `/la-vita-in-casa` | `src/app/la-vita-in-casa/page.tsx` | Sì |
| `/galleria` | `src/app/galleria/page.tsx` + `GalleriaClient.tsx` | Sì |
| `/dove-siamo` | `src/app/dove-siamo/page.tsx` | Sì |
| `/contatti` | `src/app/contatti/page.tsx` | No (nav punta a `/#contatti`) |
| `/faq` | `src/app/faq/page.tsx` | No (link footer) |
| `/blog` | `src/app/blog/page.tsx` | No |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | No |
| `/privacy` | `src/app/privacy/page.tsx` | Footer |
| `/cookie` | `src/app/cookie/page.tsx` | Footer |
| 404 | `src/app/not-found.tsx` | — |

### Contenuti già in `content.ts` (Allegramente)

Presenti e in gran parte corretti per Rivarolo Canavese:

- `siteConfig` (nome, URL, indirizzo Via Gria 12, geo, SEO base)
- `structureInfo`, `heroStats`, `heroContent`, `heroSlides`
- `manifestoContent`, `storyContent`, `spacesAccordion`, `spacesSectionContent`
- `values` (5 valori Allegramente)
- `pricing`, `includedItems`, `extraServices`, `services` (6 servizi)
- `dailyRoutine` (5 momenti), `weeklyActivities` (6 attività, senza immagini)
- `faqs` (10 FAQ), `galleryImages` + categorie
- `territoryHighlights`, `howToArrive`
- `pageMeta` per tutte le pagine principali
- `chiSiamoContent`, `serviziContent`, `vitaInCasaContent`, `accessRequirements`

### Componenti riusati dal template (funzionanti)

- **Layout:** `Header.tsx`, `Footer.tsx`, `FloatingCTA.tsx`
- **Home sections:** `Hero`, `StatsBar`, `ManifestoSection`, `StorySection`, `ServicesSection`, `SpacesSection`, `DailyRoutine`, `ParallaxQuote`, `TestimonialsSection`, `GalleryPreview`, `FAQSection`, `VisitSection`
- **UI:** `location-map`, `portfolio-gallery`, `gallery-lightbox`, `interactive-image-accordion`, `container-scroll-animation`
- **Blog:** `BlogHero`, `BlogGrid`, `BlogCard`, `BlogCTA`, MDX pipeline

### Asset in `public/`

- **Logo:** `images/logo_cabiate.png`, `images/logo.jpg` (VG/Cabiate — da sostituire)
- **Foto template VG:** `*vg.webp`, `foto_orizzontali/IMG_*.webp` (foto reali VG, non villa Allegramente)
- **Video hero:** `videos/desktop.mp4`, `videos/mobile.mp4` (template — Hero non li usa)
- **Blog:** 24 MDX in `content/blog/`, immagini in `public/blog/` e `foto_blog/`
- **Legal PDF:** `uploads/Informativa utenti sito web CASA ANZIANI.pdf`, `uploads/Cookie policy CASA ANZIANI.pdf` (generici)
- **Foto reali sito vecchio:** NON ancora copiate (`sito vecchio/public/images/gallery/`, `activities/`, `territory/`, `quotes/`, `pages/`, `logo-allegramente.png`)

---

## B. Gap analysis (cosa manca vs sito vecchio)

### B.1 Dati in `content.ts` del sito vecchio assenti o incompleti nel nuovo

| Export (sito vecchio) | Nel sito nuovo | Impatto |
|----------------------|----------------|---------|
| `siteQuotes` + `sectionQuotes` + `quoteBackgrounds` | ❌ Assenti | Nessuna citazione tematica tra sezioni |
| `teamMembers` | ❌ Assente | Pagina Chi siamo senza team |
| `seasons` (4 stagioni) | ❌ Assente | Vita in casa incompleta |
| `spaces` (bento 4 aree con gallery) | ⚠️ Sostituito da `spacesAccordion` (5 item template) | Chi siamo / spazi meno ricchi |
| `includedSectionContent` | ❌ Assente | Sezione inclusi senza eyebrow/disclaimer |
| `extraServicesNote` | ❌ Assente | Manca nota su attivazione servizi extra |
| `pricing.items` + `pricing.disclaimer` | ⚠️ Struttura semplificata (`doubleBed`, `singleBed`, `festive`) | Funzionale ma meno testo carta servizi |
| `privacyNote` | ❌ Assente | Nessun richiamo GDPR inline |
| `faqs[].pages` + `faqForPage()` | ❌ Assente | FAQ identiche ovunque, non filtrate per pagina |
| `pageHeroImages` | ❌ Assente | Nessun hero visivo pagine interne |
| `manifestoSection` (3 pilastri) | ⚠️ Diverso da `manifestoContent` (4 righe poetiche) | Home usa template, non preview servizi vecchio |
| `servicesPreview` | ❌ Assente | Home usa accordion pesante al posto di preview leggera |
| `dailyRoutinePreview` | ❌ Assente | Home mostra routine scroll completa (pesante) |
| `laCasaSection` / `galleryTeaser` | ❌ Assente | Manca teaser «La casa» con carousel dedicato |
| `contactStrip` | ❌ Assente | Home usa `VisitSection` (template) |
| `doveSiamoContent` (territorio, parcheggio, visitNote) | ❌ Assente | Dove siamo più povero di testo |
| `testimonialsSection` copy | ⚠️ Array vuoto in entrambi | Sezione nascosta finché non ci sono recensioni |
| `siteConfig.logo` | ⚠️ Spostato in `assets.logo` | Path ancora `logo_cabiate.png` |
| `contact.maps.embed` | ❌ Assente | Mappa usa solo lat/lng embed generico |
| `heroIntro` / CTA condizionali | ⚠️ Parziale in `Hero.tsx` | Testi hardcoded, non da content |

### B.2 Sezioni / componenti del sito vecchio non portati nel nuovo

| Componente (sito vecchio) | Dove era usato | Stato sito nuovo |
|---------------------------|----------------|------------------|
| `ChiSiamoHero` | Chi siamo | ❌ Solo breadcrumb + sr-only h1 |
| `ChiSiamoBentoSection` | Chi siamo | ❌ |
| `TeamSection` | Chi siamo | ❌ |
| `ValuesSection` (dedicata) | — | ⚠️ Griglia inline su `/chi-siamo` |
| `PageHero` | Tutte le pagine interne | ❌ |
| `ServicesPreview` | Home | ❌ (usa `ServicesSection` full) |
| `DailyRoutinePreview` | Home | ❌ (usa `DailyRoutine` full scroll) |
| `LaCasaSection` | Home | ❌ (usa `SpacesSection` + `GalleryPreview`) |
| `ContactStrip` | Home | ❌ (usa `VisitSection`) |
| `CTAStrip` | Varie pagine | ⚠️ CTA inline minimali |
| `PricingSection` | Servizi | ⚠️ Inline in `servizi/page.tsx` |
| `IncludedSection` | Servizi | ⚠️ Inline lista |
| `ExtraServicesSection` | Servizi | ⚠️ Inline pill |
| `AccessRequirementsSection` | Servizi | ⚠️ Inline blocco testo |
| `WeeklyActivitiesSection` (con immagini) | Vita in casa | ⚠️ Griglia testo senza foto |
| `ConvivialitySection` | Vita in casa | ⚠️ Solo paragrafi inline |
| `SeasonsSection` | Vita in casa | ❌ |
| `DoveSiamoSections` (AddressBlock, Territory con img) | Dove siamo | ⚠️ Layout semplificato |
| `SectionQuote` | Varie | ❌ |
| `StorySection` slides su Chi siamo | Chi siamo | ❌ (solo paragrafi `chiSiamoContent.story`) |

### B.3 Residui template VG / placeholder (grep audit)

**Pattern trovati:** `bsbsbsbsbs`, `TODO_CITTA`, `TODO`, `Como`, `Cabiate`, `Brianza`, `Residence V.G`, `Residence bsbsbsbsbs Srl`

| File | Problema |
|------|----------|
| `src/components/sections/ParallaxQuote.tsx` | Valori VG hardcoded (Libertà, Empatia, Rispetto…); header `bsbsbsbsbs · TODO_CITTA`; non legge `values` da content |
| `src/components/sections/VisitSection.tsx` | Testo «TODO_CITTA» ×3; nessun form contatti |
| `src/components/ui/location-map.tsx` | Marker «bsbsbsbsbs»; footer «TODO_CITTA · Brianza»; title iframe placeholder |
| `src/components/layout/Footer.tsx` | `© Residence bsbsbsbsbs Srl`; aria-label mappa placeholder |
| `src/components/FloatingCTA.tsx` | WhatsApp message «Residence V.G» |
| `src/app/privacy/page.tsx` | Meta e copy `bsbsbsbsbs`, `TODO_CITTA`; `noIndex: true` |
| `src/app/cookie/page.tsx` | Idem privacy |
| `src/app/blog/page.tsx` | Meta, keywords Como/Brianza; BlogCTA placeholder |
| `src/components/blog/BlogHero.tsx` | Placeholder VG |
| `src/components/blog/BlogCTA.tsx` | Placeholder |
| `content/blog/*.mdx` (24 file) | Frontmatter e body con Como/Cabiate/Brianza/TODO |
| `src/lib/blog-data.generated.ts` | Generato — stessi placeholder |
| `public/robots.txt` | `Sitemap: https://TODO-sostituire-dominio.it/sitemap.xml` |
| `src/data/content.ts` | `[Telefono da inserire]`, `[Email da inserire]`, `logo_cabiate.png`, `piva` vuota |

**Bug tecnici emersi dall'audit:**

1. **`DailyRoutine.tsx`**: `slotConfig` ha **9** entry ma `dailyRoutine` in content ne ha **5** → rischio index out of bounds / immagini sbagliate sugli slot 6–9.
2. **`ServicesSection.tsx`**: `serviceImages` keyed su id abbreviati (`assistenza`, `vitto`…) ma `services[].id` è `assistenza-h24`, `vitto-alloggio`… → immagini fallback sempre uguali.
3. **`JsonLd.tsx`**: `buildAggregateRating()` con `testimonials = []` produce **NaN** (divisione per zero).
4. **Contatti vuoti**: `phoneRaw` e `whatsapp` vuoti → link `tel:` e `wa.me` non funzionanti ovunque.

### B.4 Confronto struttura Home

| Sezione | Sito vecchio | Sito nuovo |
|---------|--------------|------------|
| Hero + intro | `Hero` + `HeroIntro` | `Hero` (intro in hero) |
| Stats | `StatsBar` | `StatsBar` ✅ |
| Teaser casa | `LaCasaSection` | `SpacesSection` |
| Manifesto | `ManifestoSection` (3 pilastri) | `ManifestoSection` (4 righe) |
| Servizi | `ServicesPreview` (6 card) | `ServicesSection` (accordion full) |
| Routine | `DailyRoutinePreview` (4 slot) | `DailyRoutine` (scroll cinematico 5 slot) |
| Valori/filosofia | — | `ParallaxQuote` (VG!) |
| Storia | — | `StorySection` |
| Testimonianze | `TestimonialsSection` | `TestimonialsSection` (vuota → hidden) |
| FAQ | `FAQSection` (home subset) | `FAQSection` (tutte) |
| Contatti | `ContactStrip` | `VisitSection` |
| Galleria | — | `GalleryPreview` |

---

## C. Piano per fasi

### Fase 1 — Bloccanti pre-lancio (priorità massima)

Obiettivo: nessun placeholder visibile, contatti funzionanti, legal minimo, SEO base corretta.

#### C.1.1 Contenuti e `content.ts`

- [ ] Inserire **telefono**, **phoneRaw**, **WhatsApp**, **email** reali in `siteConfig.contact`
- [ ] Inserire **P.IVA** / ragione sociale corretta (es. titolare Casa Famiglia AllegraMente, non «Residence … Srl»)
- [ ] Aggiornare `assets.logo` → `logo-allegramente.png` (copiare da `sito vecchio/public/images/`)
- [ ] Aggiungere `legalName` / `copyrightLine` in content per Footer
- [ ] Portare da sito vecchio: `doveSiamoContent`, `extraServicesNote`, `includedSectionContent`, `pricing.disclaimer`
- [ ] Definire `ogImage` dedicata (`/images/og/casa-allegramente.jpg`)

**File:** `src/data/content.ts`

#### C.1.2 Sostituzione placeholder VG (grep zero)

- [ ] `ParallaxQuote.tsx` — riscrivere o sostituire con valori da `values` / `siteQuotes`
- [ ] `VisitSection.tsx` — «Rivarolo Canavese» / «Via Gria 12»
- [ ] `location-map.tsx` — `siteConfig.name`, città TO/Canavese
- [ ] `Footer.tsx` — copyright Allegramente
- [ ] `FloatingCTA.tsx` — messaggio WhatsApp Allegramente
- [ ] Fix `DailyRoutine` slotConfig (5 slot allineati a content)
- [ ] Fix `ServicesSection` serviceImages keys

#### C.1.3 Privacy e Cookie (GDPR)

**Situazione attuale:** pagine con `noIndex: true`, link a PDF generici «CASA ANZIANI», meta placeholder.

**Azioni:**

1. **Riscrivere** `src/app/privacy/page.tsx` e `src/app/cookie/page.tsx` con:
   - Titolare: Casa Famiglia AllegraMente / titolare trattamento
   - Indirizzo Via Gria 12, Rivarolo Canavese
   - Finalità (form contatto, analytics, cookie tecnici)
   - Diritti interessato, DPO/contatto privacy
   - Base giuridica, conservazione dati, trasferimenti
2. **PDF:** richiedere/creare PDF aggiornati «AllegraMente» o rimuovere link PDF se si opta per pagina HTML completa
3. Rimuovere `noIndex: true` quando il testo è definitivo
4. Integrare **CookieYes** o banner cookie se `NEXT_PUBLIC_COOKIEYES_ID` valorizzato (`.env.example` già predisposto)
5. Aggiungere link informativa privacy nel form contatti (quando creato)

#### C.1.4 Asset critici

| Asset | Azione | Path target |
|-------|--------|-------------|
| Logo Allegramente | Copiare da sito vecchio | `public/images/logo-allegramente.png` |
| Favicon | Generare da logo | `public/images/favicon.png`, `.ico` |
| OG image 1200×630 | Foto villa o composizione brand | `public/images/og/casa-allegramente.jpg` |
| Hero slides | Sostituire `*vg.webp` con foto reali | `public/images/gallery/`, `hero/` |
| Galleria | Copiare set sito vecchio + aggiornare `galleryImages` | vedi `sito vecchio/public/images/gallery/` |

#### C.1.5 SEO immediata

- [ ] Correggere `public/robots.txt` → `Sitemap: https://www.casaallegramente.it/sitemap.xml`
- [ ] Rigenerare sitemap (`npm run generate:sitemap`)
- [ ] Valutare **blog:** `noindex` globale fino a rewrite (vedi C.3)
- [ ] Fix `JsonLd` — non emettere `aggregateRating` se `testimonials.length === 0`
- [ ] Verificare `GOOGLE_SITE_VERIFICATION` in `.env.local`
- [ ] Confermare GA ID (`G-PPG322967R`) è quello Allegramente

#### C.1.6 Contatti e form

- [ ] **`VisitSection`**: aggiungere form (react-hook-form + zod) che POST a `/api/contact`
- [ ] **`api/contact/route.ts`**: implementare invio SMTP (variabili `.env.example`) o Resend/SendGrid
- [ ] Fallback UX quando telefono non configurato (CTA «Scrivici» invece di `tel:` vuoto)
- [ ] Pagina `/contatti` = stesso blocco `#contatti` (già usa `VisitSection`)

---

### Fase 2 — Parità contenuti con sito vecchio (priorità alta)

Obiettivo: ogni pagina interna ricca quanto il sito Vite, usando componenti template dove possibile.

#### C.2.1 `content.ts` — completamento dati

Portare in `src/data/content.ts`:

```text
siteQuotes, sectionQuotes, quoteBackgrounds
teamMembers
seasons
spaces (opzionale: unificare con spacesAccordion)
pageHeroImages
doveSiamoContent
serviziContent.pricingNote + serviziContent.cta
manifestoSection OPPURE allineare ManifestoSection al copy vecchio
contactStrip
faqForPage + faqs[].pages
privacyNote
```

Copiare asset correlati da `sito vecchio/public/images/{quotes,activities,territory,pages,routine,services}/`.

#### C.2.2 Componenti da creare o portare

| Componente | Priorità | Pagina target |
|------------|----------|---------------|
| `PageHero` | Alta | Tutte le pagine interne |
| `TeamSection` | Alta | `/chi-siamo` |
| `SeasonsSection` | Media | `/la-vita-in-casa` |
| `WeeklyActivitiesSection` (con img) | Media | `/la-vita-in-casa` |
| `ConvivialitySection` (layout vecchio) | Media | `/la-vita-in-casa` |
| `SectionQuote` | Media | Servizi, vita, dove siamo |
| `PricingSection` | Bassa | Refactor inline servizi |
| `IncludedSection` | Bassa | Refactor inline servizi |
| `ExtraServicesSection` | Bassa | Refactor inline servizi |
| `ChiSiamoBentoSection` | Media | `/chi-siamo` |
| `CTAStrip` riusabile | Media | Fine pagine |

**Alternativa pragmatica:** mantenere sezioni inline in `page.tsx` ma arricchirle con immagini e copy da content — meno componenti, stesso risultato.

#### C.2.3 Checklist pagina per pagina

**Home (`src/app/page.tsx`)**

- [ ] Decidere se tenere `ParallaxQuote` (valori Allegramente) o rimuoverlo
- [ ] Valutare `DailyRoutinePreview` al posto di scroll full su home (performance UX)
- [ ] Aggiungere `LaCasaSection` o migliorare `GalleryPreview` con foto reali
- [ ] Allineare ordine sezioni al vecchio se preferito dal cliente

**Chi siamo (`src/app/chi-siamo/page.tsx`)**

- [ ] `PageHero` con `pageHeroImages.chiSiamo`
- [ ] Sezione «La villa» con slides da `chiSiamoContent.story.slides` (vecchio)
- [ ] `TeamSection` da `teamMembers`
- [ ] `SpacesSection` o bento spazi dettagliati
- [ ] `GalleryPreview` / anchor `#galleria`
- [ ] Rimuovere duplicazione `ManifestoSection` + `StorySection` se ridondante con home

**Servizi (`src/app/servizi/page.tsx`)**

- [ ] `PageHero`
- [ ] `includedSectionContent` header
- [ ] `extraServicesNote` sotto pills
- [ ] `pricing.disclaimer`
- [ ] FAQ filtrate (`faqForPage('servizi')`)
- [ ] `serviziContent.cta` strip
- [ ] `SectionQuote` (professionalità badanti)

**La vita in casa (`src/app/la-vita-in-casa/page.tsx`)**

- [ ] `PageHero`
- [ ] Intro con immagine (`vitaInCasaContent.intro.image`)
- [ ] `weeklyActivities` con immagini da `sito vecchio`
- [ ] `SeasonsSection` da `seasons`
- [ ] `ConvivialitySection` con immagine vitto
- [ ] FAQ subset opzionale

**Galleria (`src/app/galleria/GalleriaClient.tsx`)**

- [ ] Sostituire voci `galleryImages` con foto reali (6+ immagini vecchio sito)
- [ ] Verificare categorie e lightbox

**Dove siamo (`src/app/dove-siamo/page.tsx`)**

- [ ] `PageHero`
- [ ] `doveSiamoContent.territory` paragrafi introduttivi
- [ ] `territoryHighlights` con **immagini** (vecchio aveva `image` per ogni POI)
- [ ] Nota parcheggio + visitNote
- [ ] FAQ visite (`faqForPage('dove-siamo')`)
- [ ] CTA strip

**Contatti / FAQ**

- [ ] Form + mappa compatta
- [ ] FAQ page: intro testuale (opzionale)

**404 (`not-found.tsx`)**

- [ ] Copy da `notFound` content vecchio + link contatti

---

### Fase 3 — Blog, polish, pre-lancio (priorità media-bassa)

#### C.3.1 Blog — decisione e raccomandazione

**Stato:** 24 articoli MDX SEO-oriented per **Como / Cabiate / Brianza**, non indicizzabili così com'è.

| Opzione | Pro | Contro |
|---------|-----|--------|
| **A. Rimuovere** (delete routes + sitemap) | Zero rischio SEO cannibalization / contenuti falsi | Perdita canale content marketing |
| **B. Noindex + disabilitare sitemap** | Veloce, nessun placeholder pubblico | URL ancora raggiungibili |
| **C. Rewrite local SEO Canavese** | Valore SEO long-term («casa famiglia Rivarolo», «Canavese», «Torino 30 km») | **L** — 24 articoli da localizzare |
| **D. Starter pack 5 articoli** | Compromesso: costi, ingresso, visita, giornata tipo, Canavese | Resto 19 da fare o 410 |

**Raccomandazione:** **D + B interim** — subito `noindex` su `/blog/*` e rimozione URL blog dalla sitemap finché non ci sono almeno 5 articoli riscritti per il Canavese; non linkare blog in nav (già ok). Priorità rewrite: `quanto-costa-*`, `documenti-ingresso-*`, `visita-struttura-*`, `giornata-tipo-*`, nuovo articolo «Rivarolo Canavese / Canavese».

**File coinvolti:** `content/blog/*.mdx`, `scripts/generate-blog-data.mjs`, `src/app/blog/page.tsx`, `public/sitemap.xml`, eventuale `robots.txt` Disallow temporaneo.

#### C.3.2 Design e polish

- [ ] **Font:** decidere Inter (attuale) vs Source Sans 3 (vecchio) — se Source Sans 3, aggiornare `layout.tsx`
- [ ] Sostituire hex hardcoded `#C9A84C` con `gold` Tailwind in tutti i componenti
- [ ] **Video hero:** decidere sì/no — se sì, integrare `assets.heroVideoDesktop/Mobile` in `Hero.tsx`; se no, rimuovere video da `public/videos/`
- [ ] Uniformare `PageHero` / breadcrumb spacing
- [ ] Accessibilità: h1 visibile pagine interne (non solo sr-only) — decisione SEO/a11y
- [ ] `FloatingCTA`: nascondere se contatti non configurati

#### C.3.3 Legal aggiuntivo

- [ ] Verificare se servono PDF contrattuali / carta servizi scaricabile (non presente nel vecchio sito pubblico)
- [ ] Menzione trattamento dati sanitari (casa famiglia) in privacy

#### C.3.4 Pre-lancio checklist

**Contenuti**
- [ ] Zero occorrenze `bsbsbsbsbs`, `TODO_CITTA`, Como, Cabiate, Brianza (grep)
- [ ] Telefono cliccabile su mobile
- [ ] WhatsApp apre chat corretta
- [ ] Email mailto valida

**Tecnico**
- [ ] `npm run build` senza errori
- [ ] `npm run type-check`
- [ ] Lighthouse mobile ≥ 85 performance (target)
- [ ] Immagini Next/Image con `sizes` corretti
- [ ] `.env.local` produzione: SMTP, GA, CookieYes, SITE_URL

**SEO**
- [ ] robots.txt + sitemap.xml dominio finale
- [ ] Canonical su tutte le pagine
- [ ] JSON-LD valido (Google Rich Results Test)
- [ ] Open Graph preview corretta (Facebook/Twitter debugger)

**Legal**
- [ ] Privacy + Cookie pubblicate e indicizzabili
- [ ] Banner cookie funzionante
- [ ] Checkbox privacy su form

**Deploy**
- [ ] Hostinger/static export se usato (`build:hostinger`)
- [ ] Redirect www ↔ non-www
- [ ] Certificato SSL
- [ ] Google Search Console + sitemap submit

---

## D. Tabella pagine × sezioni × stato

Legenda: ✅ fatto · ⚠️ parziale · ❌ mancante · 🚫 nascosto/vuoto · 🔴 placeholder VG

| Pagina | Sezione | Stato | File principale |
|--------|---------|-------|-----------------|
| **Home** | Hero + carousel | ⚠️ | `Hero.tsx` — foto VG, no video |
| | Stats bar | ✅ | `StatsBar.tsx` |
| | Manifesto | ✅ | `ManifestoSection.tsx` |
| | Story / chi siamo teaser | ✅ | `StorySection.tsx` |
| | Servizi accordion | ⚠️ | `ServicesSection.tsx` — img keys broken |
| | Spazi accordion | ⚠️ | `SpacesSection.tsx` — foto VG |
| | Routine giornaliera scroll | ⚠️ | `DailyRoutine.tsx` — slot mismatch |
| | Parallax valori | 🔴 | `ParallaxQuote.tsx` — VG values |
| | Testimonianze | 🚫 | array vuoto |
| | Galleria preview | ⚠️ | foto VG |
| | FAQ | ✅ | tutte le FAQ |
| | Visit / contatti | 🔴 | `VisitSection.tsx` — TODO_CITTA |
| **Chi siamo** | Page hero | ❌ | |
| | Perché AllegraMente | ✅ | inline section |
| | Valori (5) | ✅ | inline grid |
| | Manifesto + Story | ⚠️ | duplicati da home |
| | Team | ❌ | |
| | Spazi dettagliati / bento | ❌ | |
| | Galleria | ❌ | |
| | CTA visita | ✅ | inline |
| **Servizi** | Intro | ✅ | |
| | Servizi accordion | ⚠️ | |
| | Incluso retta | ⚠️ | inline, no section copy |
| | Pricing | ⚠️ | inline cards |
| | Extra services | ⚠️ | pills, no note |
| | Requisiti ingresso | ✅ | `accessRequirements` |
| | Routine (duplicate) | ⚠️ | |
| | FAQ servizi | ❌ | mostra tutte |
| | CTA | ❌ | |
| **La vita in casa** | Intro | ✅ | |
| | Routine scroll | ⚠️ | |
| | Attività settimanali | ⚠️ | no immagini |
| | Convivialità | ⚠️ | solo testo |
| | Stagioni | ❌ | |
| | Testimonianze | 🚫 | |
| | CTA | ✅ | |
| **Galleria** | Portfolio grid | ⚠️ | `GalleriaClient.tsx` — foto VG |
| **Dove siamo** | Mappa | 🔴 | `location-map.tsx` placeholder |
| | Indirizzo / orari | ✅ | |
| | Come arrivare | ✅ | |
| | Contatti box | ⚠️ | placeholder phone |
| | Territorio POI | ⚠️ | no immagini |
| | Hero territorio | ❌ | |
| | FAQ visite | ❌ | |
| **Contatti** | VisitSection | 🔴 | |
| **FAQ** | Accordion | ✅ | |
| **Blog** | 24 articoli | 🔴 | Como/Cabiate |
| **Privacy** | HTML + PDF | 🔴 | noIndex, placeholder |
| **Cookie** | HTML + PDF | 🔴 | noIndex, placeholder |
| **Header/Footer** | Nav | ✅ | 7 voci |
| | Logo | 🔴 | logo_cabiate |
| | Footer legal | 🔴 | bsbsbsbsbs Srl |
| **Global** | Floating CTA | 🔴 | V.G WhatsApp |
| | JSON-LD | ⚠️ | NaN rating |
| | robots.txt | 🔴 | TODO dominio |

---

## E. Stima effort (S / M / L)

| Task | Effort | Note |
|------|--------|------|
| Contatti reali in content.ts | **S** | Dipende dal cliente |
| Fix placeholder grep (Footer, map, Visit, FloatingCTA) | **S** | ~6 file |
| Fix DailyRoutine slotConfig + ServicesSection images | **S** | Bug fix |
| Fix JsonLd aggregateRating | **S** | |
| robots.txt + sitemap dominio | **S** | |
| Logo + favicon + OG image | **S** | Se asset forniti |
| Copia foto galleria da sito vecchio | **M** | ~30 file + update content |
| Privacy/Cookie HTML Allegramente | **M** | Richiede testo legale |
| PDF privacy/cookie Allegramente | **M** | Esterno o adattamento |
| Form contatti + SMTP API | **M** | UI + backend |
| PageHero su 6 pagine | **M** | 1 componente + meta |
| TeamSection + teamMembers | **S** | Port da vecchio |
| SeasonsSection + Conviviality layout | **M** | |
| WeeklyActivities con immagini | **M** | |
| doveSiamoContent + territory images | **M** | |
| ParallaxQuote → valori Allegramente | **M** | Redesign o rewrite |
| content.ts gap (quotes, faqForPage, etc.) | **M** | |
| Blog noindex interim | **S** | |
| Blog rewrite 5 articoli Canavese | **L** | |
| Blog rewrite completo 24 articoli | **L** | Multi-day |
| Blog rimozione completa | **S** | |
| Font Source Sans 3 switch | **S** | |
| Hardcoded colors cleanup | **M** | Molti componenti |
| Video hero decision + implement | **S–M** | |
| Testimonianze reali | **S** | Quando disponibili |
| Pre-lancio QA + Lighthouse | **M** | |
| **Totale minimo viable (Fase 1)** | **~M** | 2–4 giorni dev |
| **Parità sito vecchio (Fase 1+2)** | **~L** | 5–8 giorni dev |
| **Completo con blog SEO (Fase 1–3)** | **~L+** | 10–15 giorni dev |

---

## F. Ordine di esecuzione consigliato

Sequenza ottimale per massimizzare valore e ridurre rischio di pubblicare placeholder:

1. **Raccogliere input cliente** — telefono, email, WhatsApp, P.IVA, ragione sociale, logo, foto villa, testimonianze (se esistono), testo legal privacy.
2. **Fase 1a — content.ts contatti + legal name** — sblocca tutti i CTA.
3. **Fase 1b — grep cleanup** — Footer, map, VisitSection, FloatingCTA, ParallaxQuote (minimo: testi città/nome).
4. **Fase 1c — bug fix** — DailyRoutine slots, ServicesSection images, JsonLd rating.
5. **Fase 1d — asset** — logo, favicon, OG, copia foto da `sito vecchio/public/images/` → aggiorna path in content.
6. **Fase 1e — robots + sitemap** — dominio finale.
7. **Fase 1f — privacy/cookie** — HTML Allegramente; PDF se necessario; rimuovere noIndex.
8. **Fase 1g — form contatti + SMTP** — collegare API esistente.
9. **Fase 2a — content.ts gap** — team, seasons, doveSiamoContent, quotes, faq pages.
10. **Fase 2b — PageHero** — tutte le pagine interne.
11. **Fase 2c — pagine priorità** — Chi siamo (team) → Servizi (FAQ filter) → Vita in casa (stagioni) → Dove siamo (territorio img).
12. **Fase 3a — blog noindex** — immediato se non si rewrite subito.
13. **Fase 3b — 5 articoli Canavese** — se SEO content desiderato.
14. **Fase 3c — design polish** — font, colori, h1, performance.
15. **Pre-lancio QA** — checklist C.3.4, build produzione, Search Console.

---

## Appendice — File path quick reference

```
sito nuovo/
├── src/data/content.ts              ← SSOT contenuti
├── src/app/
│   ├── page.tsx                     ← Home
│   ├── chi-siamo/page.tsx
│   ├── servizi/page.tsx
│   ├── la-vita-in-casa/page.tsx
│   ├── galleria/GalleriaClient.tsx
│   ├── dove-siamo/page.tsx
│   ├── contatti/page.tsx
│   ├── faq/page.tsx
│   ├── privacy/page.tsx             ← REWRITE
│   ├── cookie/page.tsx              ← REWRITE
│   └── api/contact/route.ts         ← SMTP TODO
├── src/components/sections/
│   ├── ParallaxQuote.tsx            ← VG PLACEHOLDER
│   ├── VisitSection.tsx             ← TODO_CITTA
│   ├── DailyRoutine.tsx             ← slot bug
│   └── ServicesSection.tsx          ← image keys bug
├── src/components/ui/location-map.tsx
├── src/components/layout/Footer.tsx
├── src/components/FloatingCTA.tsx
├── src/components/JsonLd.tsx
├── content/blog/*.mdx               ← 24 articoli Como
├── public/robots.txt                ← TODO dominio
├── public/uploads/*.pdf             ← PDF generici
└── .env.example
```

**Sito vecchio — fonti contenuti/componenti da portare:**

```
sito vecchio/src/data/content.ts
sito vecchio/src/components/sections/
  TeamSection.tsx, SeasonsSection.tsx, WeeklyActivitiesSection.tsx,
  ConvivialitySection.tsx, PageHero.tsx, ChiSiamoBentoSection.tsx,
  PricingSection.tsx, IncludedSection.tsx, ExtraServicesSection.tsx,
  AccessRequirementsSection.tsx, DoveSiamoSections.tsx, SectionQuote.tsx
sito vecchio/public/images/          ← asset reali Allegramente
```

---

*Documento generato da audit codebase — nessuna modifica al codice applicata.*
