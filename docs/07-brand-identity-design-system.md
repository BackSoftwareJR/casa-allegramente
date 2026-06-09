# 07 — Design system visivo · Casa Allegramente

> **Stato:** DEFINITIVO per implementazione · Maggio 2026  
> **Relazione:** Estende e dettaglia [03 — Brand identity](./03-brand-identity.md) e [02 — UX/UI Strategy](./02-ux-ui-strategy.md)  
> **Principio guida:** *Casa dolce casa* — calore domestico piemontese, mai estetica clinica

---

## 0. Sintesi direttiva

| Aspetto | Residence V.G (esempio) | Casa Allegramente |
|---------|-------------------------|-------------------|
| Sensazione | Elegante, verde-oro “residenza” | **Più calda**, terracotta-legno-crema |
| Verde | Foresta freddo `#2D3A2E` | **Legno cedro** `#4A3829` + salvia morbida |
| Accento | Oro `#C9A84C` | **Terracotta** `#C4632E` + miele secondario |
| Sfondo | Linen `#F5F2ED` | **Crema burro** `#FAF5EB` (ancora più caldo) |
| Da evitare | — | Blu ospedale, bianco sterile, grigio cemento, verde acqua |

---

## 1. Palette colori

### 1.1 Filosofia cromatica

La palette evoca **casa piemontese**: intonaco caldo, legno, terracotta dei tetti, salvia del giardino, luce di tardo pomeriggio. I verdi sono **morbidi e domesticati**, mai “sanitari”. I neutri hanno **sottotono caldo** (giallo/ambra), mai grigio freddo.

### 1.2 Token principali

#### Primari — Calore e azione

| Token | HEX | Uso |
|-------|-----|-----|
| **terracotta** | `#C4632E` | CTA primarie, link attivi, accenti caldi |
| **terracotta-dark** | `#9E4E24` | Hover CTA, stati pressed |
| **terracotta-light** | `#E8B89A` | Badge, sfondi soft accent |
| **terracotta-50** | `#FBF0EA` | Highlight box, callout |

#### Secondari — Miele / ambra (dettaglio premium)

| Token | HEX | Uso |
|-------|-----|-----|
| **honey** | `#B8893A` | Divider, icone secondarie, numeri stats |
| **honey-light** | `#F2E2C4` | Hover decorativo, quote background |
| **honey-50** | `#FDF8EE` | Sezioni testimonianze |

#### Struttura — Legno caldo (autorevolezza domestica)

| Token | HEX | Uso |
|-------|-----|-----|
| **cedar** | `#4A3829` | Footer, hero overlay, titoli su foto |
| **cedar-dark** | `#352820` | Footer profondo, overlay forte |
| **cedar-light** | `#6B5344` | Sottotitoli su sfondo scuro |
| **wood** | `#8B6F5C` | Bordi card su crema, icone outline |

#### Natura — Salvia morbida (serenità, non clinica)

| Token | HEX | Uso |
|-------|-----|-----|
| **sage** | `#7A9B7E` | Icone servizi, badge “h24”, link secondari |
| **sage-light** | `#D4E5D6` | Sfondi card servizi, pill |
| **sage-mist** | `#EEF4EF` | Sezioni “natura / giardino” |
| **sage-dark** | `#5D7A61` | Testo su sage-mist (verificare contrasto) |

#### Neutri — Base “casa”

| Token | HEX | Uso |
|-------|-----|-----|
| **cream** | `#FAF5EB` | **Sfondo globale pagina** (default body) |
| **linen** | `#F3EDE2` | Sezioni alternate leggere |
| **parchment** | `#E8DFD0` | Bande sezione, separatori area |
| **warm-gray** | `#C9BFB0` | Bordi, divider, placeholder |
| **warm-gray-dark** | `#9A8F82` | Caption, meta, label disabilitate |

#### Testo

| Token | HEX | Uso |
|-------|-----|-----|
| **ink** | `#2A221C` | Titoli, enfasi |
| **charcoal** | `#443A32` | Corpo, paragrafi |
| **muted** | `#6B5F54` | Didascalie, footer secondario su chiaro |

#### Superfici

| Token | HEX | Uso |
|-------|-----|-----|
| **white** | `#FFFFFF` | Solo card, modali, header scrolled |
| **white-warm** | `#FFFCF7` | Card su cream (leggermente più caldo del bianco puro) |

### 1.3 Regole d’uso colore

1. **Sfondo pagina = sempre `cream`** — mai `#FFFFFF` come background dominante.
2. **Bianco puro** solo su card elevate, modali, header dopo scroll.
3. **Terracotta** per un solo CTA primario per viewport; non saturare.
4. **Cedar** al posto del verde-foresta freddo per footer e overlay.
5. **Mai** usare: `#0077B6`, `#00A896`, `#E8F4F8`, `#F0F0F0` freddo, verde `#00B894` “ospedale”.

### 1.4 Combinazioni accessibilità (WCAG 2.1 AA)

| Sfondo | Testo | Rapporto target | Note |
|--------|-------|-----------------|------|
| cream | charcoal | ≥ 4.5:1 | ✅ Body standard |
| cream | ink | ≥ 4.5:1 | ✅ Titoli |
| cedar | cream / white-warm | ≥ 4.5:1 | ✅ Footer |
| terracotta | white-warm | ≥ 4.5:1 | ✅ CTA primario |
| sage-mist | cedar / charcoal | ≥ 4.5:1 | Verificare con WebAIM |
| honey-light | ink | ≥ 4.5:1 | Solo titoli brevi, non body lungo |

**Focus visible:** anello `2px` `honey` con offset `2px` su sfondo chiaro; `terracotta-light` su sfondo scuro.

### 1.5 Tailwind — estratto `tailwind.config`

```js
// tailwind.config.js — colori Casa Allegramente
colors: {
  terracotta: {
    DEFAULT: '#C4632E',
    dark: '#9E4E24',
    light: '#E8B89A',
    50: '#FBF0EA',
  },
  honey: {
    DEFAULT: '#B8893A',
    light: '#F2E2C4',
    50: '#FDF8EE',
  },
  cedar: {
    DEFAULT: '#4A3829',
    dark: '#352820',
    light: '#6B5344',
  },
  wood: { DEFAULT: '#8B6F5C' },
  sage: {
    DEFAULT: '#7A9B7E',
  light: '#D4E5D6',
    mist: '#EEF4EF',
    dark: '#5D7A61',
  },
  cream: { DEFAULT: '#FAF5EB' },
  linen: { DEFAULT: '#F3EDE2' },
  parchment: { DEFAULT: '#E8DFD0' },
  'warm-gray': { DEFAULT: '#C9BFB0', dark: '#9A8F82' },
  ink: { DEFAULT: '#2A221C' },
  charcoal: { DEFAULT: '#443A32' },
  muted: { DEFAULT: '#6B5F54' },
  'white-warm': '#FFFCF7',
},
boxShadow: {
  'warm-sm': '0 1px 3px rgba(74, 56, 41, 0.07)',
  'warm-md': '0 4px 16px rgba(74, 56, 41, 0.09)',
  'warm-lg': '0 12px 40px rgba(74, 56, 41, 0.11)',
  'terracotta-glow': '0 4px 24px rgba(196, 99, 46, 0.25)',
},
backgroundImage: {
  'hero-overlay': 'linear-gradient(to bottom, rgba(53,40,32,0.55) 0%, rgba(53,40,32,0.25) 55%, rgba(53,40,32,0.70) 100%)',
  'section-warm': 'linear-gradient(180deg, #FAF5EB 0%, #F3EDE2 100%)',
},
```

### 1.6 CSS custom properties (opzionale)

```css
:root {
  --color-bg: #FAF5EB;
  --color-bg-alt: #F3EDE2;
  --color-text: #443A32;
  --color-heading: #2A221C;
  --color-accent: #C4632E;
  --color-accent-secondary: #B8893A;
  --color-surface-dark: #4A3829;
  --color-focus: #B8893A;
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Source Sans 3', system-ui, sans-serif;
  --radius-card: 16px;
  --radius-button: 12px;
  --shadow-card: 0 4px 16px rgba(74, 56, 41, 0.09);
}
```

---

## 2. Tipografia

### 2.1 Famiglie (Google Fonts)

| Ruolo | Font | Peso | Motivazione |
|-------|------|------|-------------|
| **Display** | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) | 500, 600 | Eleganza domestica, calore serif |
| **Body / UI** | [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) | 400, 500, 600 | Leggibilità superiore a 18px, forme aperte |

**Alternativa body:** Inter (se già in stack team) — mantenere **min 18px**.

**Caricamento:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />
```

`font-display: swap` obbligatorio.

### 2.2 Scala tipografica

| Token | Desktop | Mobile | Line-height | Uso |
|-------|---------|--------|-------------|-----|
| `display-xl` | 56px | 40px | 1.1 | Hero H1 (max una per pagina) |
| `display-lg` | 44px | 34px | 1.15 | Titoli sezione principali |
| `display-md` | 36px | 28px | 1.2 | Sottotitoli hero secondari |
| `h2` | 32px | 26px | 1.25 | Titoli blocchi |
| `h3` | 24px | 22px | 1.3 | Card, FAQ |
| `body` | **18px** | **18px** | 1.7 | Paragrafi — **non scendere sotto 18px** |
| `body-lg` | 20px | 20px | 1.65 | Intro/manifesto |
| `small` | 15px | 15px | 1.5 | Solo meta, legali, caption |
| `label` | 13px | 13px | 1.4 | Eyebrow uppercase tracking |

### 2.3 Regole tipografiche

- **Titoli:** `font-display`, colore `ink`, peso 600 max.
- **Corpo:** `font-sans`, colore `charcoal`, peso 400.
- **Maiuscolo:** solo `label` (es. “I NOSTRI SERVIZI”), max 2 parole o breve frase.
- **Letter-spacing display:** `-0.02em` su titoli grandi.
- **Lunghezza riga:** 60–75 caratteri (`max-w-prose` ~ 65ch).
- **Enhancement fase 2:** classe `text-lg` su `<html>` per +2px (20px body).

---

## 3. Spaziatura e griglia layout

### 3.1 Griglia

| Parametro | Valore |
|-----------|--------|
| Container max | **1200px** (`max-w-content`) |
| Padding orizzontale mobile | **24px** (`px-6`) |
| Padding orizzontale desktop | **48px** (`px-12`) |
| Colonne (desktop) | 12 colonne logiche, gap **24px** |
| Prose (testo lungo) | max **680px** centrato |

### 3.2 Scala spaziatura (base 4px)

| Token | px | rem | Uso tipico |
|-------|-----|-----|------------|
| `space-1` | 4 | 0.25 | Micro gap icone |
| `space-2` | 8 | 0.5 | Gap link footer |
| `space-3` | 12 | 0.75 | Padding interno pill |
| `space-4` | 16 | 1 | Gap card mobile |
| `space-6` | 24 | 1.5 | Padding card, gutter |
| `space-8` | 32 | 2 | Gap griglia tablet |
| `space-12` | 48 | 3 | Padding sezione mobile |
| `space-16` | 64 | 4 | Gap tra sezioni mobile |
| `space-24` | 96 | 6 | Gap tra sezioni desktop |
| `space-30` | 120 | 7.5 | Hero padding bottom |

### 3.3 Ritmo verticale sezioni

```css
.section-spacing {
  padding-top: 4rem;    /* 64px mobile */
  padding-bottom: 4rem;
}
@media (min-width: 768px) {
  .section-spacing {
    padding-top: 6rem;  /* 96px desktop */
    padding-bottom: 6rem;
  }
}
```

- **Tra titolo sezione e contenuto:** `space-8` (32px).
- **Tra card in griglia:** `gap-6` mobile, `gap-8` desktop.
- **Hero:** min-height `85vh` mobile, `90vh` desktop; contenuto allineato bottom-third.

### 3.4 Breakpoints (Tailwind default)

| Breakpoint | px | Note |
|------------|-----|------|
| default | 0–639 | Design primario mobile |
| `sm` | 640 | Telefoni grandi |
| `md` | 768 | Tablet, griglia 2 col |
| `lg` | 1024 | Nav orizzontale, 3 col servizi |
| `xl` | 1280 | Container centrato |

---

## 4. Linguaggio visivo

### 4.1 Border radius

| Token | Valore | Applicazione |
|-------|--------|--------------|
| `radius-sm` | 8px | Input, badge piccoli |
| `radius-md` | **12px** | Bottoni, pill |
| `radius-lg` | **16px** | Card standard |
| `radius-xl` | **24px** | Card hero, immagini feature |
| `radius-full` | 9999px | FAB telefono, avatar |

**Filosofia:** angoli **morbidi** (domestico), mai squadrati 0px (troppo istituzionale) né pill eccessive ovunque.

### 4.2 Ombre

Ombre con **tinta cedar** (marrone caldo), mai nero puro:

| Classe | Valore | Uso |
|--------|--------|-----|
| `shadow-warm-sm` | `0 1px 3px rgba(74,56,41,0.07)` | Card a riposo |
| `shadow-warm-md` | `0 4px 16px rgba(74,56,41,0.09)` | Card hover, header |
| `shadow-warm-lg` | `0 12px 40px rgba(74,56,41,0.11)` | Modali, dropdown |
| `shadow-terracotta-glow` | `0 4px 24px rgba(196,99,46,0.25)` | CTA primario hover |

**Elevazione:** max 2 livelli visibili per pagina (card + CTA). No neumorphism.

### 4.3 Bordi e divider

- Bordo card: `1px solid warm-gray/60` oppure solo ombra (preferire ombra su cream).
- **Gold divider** (sotto titoli sezione):

```css
.gold-divider {
  height: 1px;
  width: 64px;
  margin: 1rem auto 0;
  background: linear-gradient(90deg, transparent, #B8893A, transparent);
}
```

- Linea laterale timeline: `2px solid sage-light`.

### 4.4 Immagini

| Aspetto | Specifica |
|---------|-----------|
| Formato | WebP q80–85, AVIF opzionale |
| Hero desktop | max 1920px, **< 250 KB** |
| Hero mobile | 800px, **< 120 KB** |
| Card/thumb | 600px, lazy load |
| Aspect ratio hero | 16:9 o 4:3 con `object-cover` |
| Aspect card servizi | 4:3 o 1:1 |
| Border radius immagini | `radius-xl` (24px) o `radius-lg` (16px) |
| Overlay | `hero-overlay` gradient cedar |
| Filtro mappa | `sepia(0.06) saturate(0.95) hue-rotate(5deg)` — tono caldo |
| Hover | `scale(1.02)` in 600ms — disabilitato con `prefers-reduced-motion` |

**Trattamento:** leggero aumento warmth in post (temperature +5, no filtri freddi/blu).

### 4.5 Texture e pattern (opzionali)

- **Noise overlay** al 3–4% opacità su hero o footer (come esempio, tinta calda).
- **Pattern brand** (fase 2): motivo stilizzato foglia vite / griglia tessile piemontese a `opacity-5` su `parchment`.

### 4.6 Iconografia

- **Libreria:** Lucide React.
- **Stroke:** 1.75px default, 2px su touch grandi.
- **Colore:** `sage` su sfondo chiaro; `honey` su sfondo scuro; `terracotta` per icone CTA.
- **Dimensione min:** 24×24px hit area 44×44px.

---

## 5. Animazioni Framer Motion

### 5.1 Principi

1. **Lentezza** — il sito “respira”; niente rimbalzi o snap aggressivi.
2. **Entrata una tantum** — elementi animano al primo scroll into view, non in loop.
3. **Rispetto** — `prefers-reduced-motion: reduce` sempre implementato.
4. **Utilità** — animazione guida l’attenzione, non decora vuoto.

### 5.2 Token motion

```ts
// src/lib/motion.ts
export const easing = {
  smooth: [0.4, 0, 0.2, 1] as const,      // cubic-bezier standard
  gentle: [0.25, 0.1, 0.25, 1] as const,   // entrata sezioni
};

export const duration = {
  fast: 0.25,
  normal: 0.5,
  slow: 0.7,
  reveal: 0.8,
};

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: duration.reveal, ease: easing.gentle },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: duration.slow, ease: easing.smooth },
};

export const staggerChildren = {
  staggerChildren: 0.12,
  delayChildren: 0.1,
};
```

### 5.3 Pattern consentiti

| Pattern | Parametri | Dove |
|---------|-----------|------|
| Fade up | `y: 24→0`, 0.7–0.8s | Titoli sezione, card grid |
| Fade in | opacity 0→1, 0.5s | Paragrafi, immagini |
| Stagger | delay 0.1–0.12s | Liste servizi, stats |
| Hero text | sequenza 0.15s tra righe | Solo H1 + sottotitolo + CTA |
| Header | background opacity 0→1, 300ms | Scroll > 80px |

### 5.4 Pattern vietati

- Parallax multi-layer aggressivo.
- Loop infiniti (ken-burns, shimmer, marquee) senza pausa utente.
- Scale > 1.05 su hover elementi grandi.
- Rotazioni decorative.
- Autoplay carousel senza controllo pause.

### 5.5 `prefers-reduced-motion`

```tsx
// Hook esempio
import { useReducedMotion } from 'framer-motion';

const prefersReducedMotion = useReducedMotion();

const variants = prefersReducedMotion
  ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
  : fadeUp;
```

**CSS globale (backup):**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Con reduced motion: **solo fade** breve (≤ 0.2s), **zero** translate/scale.

---

## 6. Componenti — style guide

### 6.1 Bottoni

#### Primario (CTA)

| Proprietà | Valore |
|-----------|--------|
| Sfondo | `terracotta` |
| Testo | `white-warm` |
| Font | Source Sans 3, 600, 16–18px |
| Padding | `14px 28px` (min height **48px**) |
| Radius | `radius-md` (12px) o `rounded-full` per FAB |
| Ombra | `shadow-terracotta-glow` |
| Hover | `terracotta-dark`, `translateY(-2px)`, ombra più ampia |
| Focus | ring `honey` 2px offset 2px |
| Disabled | opacity 0.5, no hover |

```html
<!-- Semantica -->
<a href="tel:+39..." class="btn-primary">Chiamaci per una visita</a>
```

#### Secondario (outline)

- Bordo `2px cedar`, testo `cedar`, sfondo trasparente.
- Hover: sfondo `terracotta-50`, bordo `terracotta`.

#### Ghost (su hero scuro)

- Bordo `white/40`, testo bianco, `backdrop-blur-sm`.
- Hover: `white/20` background.

#### FAB telefono (mobile)

- `fixed bottom-6 right-6`, `rounded-full`, `bg-terracotta`, icona 24px.
- Min **56×56px**, `z-50`, ombra `warm-lg`.
- WhatsApp (se presente): verde brand solo per icona WA, non per CTA principale sito.

### 6.2 Card

| Variante | Sfondo | Bordo/Ombra | Padding |
|----------|--------|-------------|---------|
| Standard | `white-warm` | `shadow-warm-sm`, hover `warm-md` | 24px |
| Servizio | `white-warm` | + icona `sage` in cerchio `sage-mist` | 28px |
| Testimonianza | `honey-50` | nessun bordo, quote serif | 32px |
| Stat | trasparente | numero `terracotta` display | 16px |

- Radius: **16px**.
- Hover: `translateY(-4px)` + ombra (solo se motion OK).
- Immagine card: top, `radius-lg`, ratio 4:3.

### 6.3 Navigazione (header)

| Stato | Aspetto |
|-------|---------|
| Top (hero) | Trasparente, logo bianco o scuro in base a foto, link `white` o `ink` |
| Scrolled | `bg-white-warm/95` + `backdrop-blur-md`, ombra `warm-sm`, link `charcoal` |
| Link attivo | sottolineatura `honey` 2px o `font-semibold` + `aria-current="page"` |
| Altezza | 72px mobile, 80px desktop |
| Tap target | min 44px altezza per ogni voce |
| CTA header | pill terracotta “Chiama” + icona Phone |

**Mobile menu:** full-screen overlay `cream`, link `24px`, chiusura in alto a destra, contatti in footer menu.

### 6.4 Hero

```
┌─────────────────────────────────────────────┐
│  [Header trasparente]                        │
│                                              │
│     Eyebrow label (honey, uppercase)         │
│     H1 display-xl (white, text-balance)      │
│     Sottotitolo body-lg (white/90)           │
│     [CTA primario] [CTA secondario ghost]    │
│                                              │
│  ░░░ gradient overlay cedar ░░░              │
│  ████████ foto full-bleed ████████           │
└─────────────────────────────────────────────┘
```

- Min-height 85vh.
- Stats bar sotto hero: sfondo `linen`, 4 colonne, numeri `terracotta` + label `muted`.

### 6.5 Footer

| Zona | Stile |
|------|-------|
| Sfondo | `cedar` (non forest freddo) |
| Testo | `cream` / `linen` |
| Link | `cream`, hover `honey-light` |
| Logo | versione monocroma chiara |
| Divider | `cedar-light` 1px |
| Padding | `py-16` mobile, `py-20` desktop |

Colonne: Logo+tagline · Nav · Contatti · Legale.

### 6.6 Altri componenti

| Componente | Note |
|------------|------|
| **FAQ accordion** | Domanda `font-semibold` 18px, chevron `wood`, risposta `body` con padding 16px |
| **Stats bar** | Numero `display-md` terracotta, label `small` uppercase tracking |
| **Timeline giornata** | Linea `sage-light`, dot `terracotta`, orario `honey` |
| **Skip link** | `cedar` bg, `honey` testo, primo focus |
| **Badge** | `sage-mist` bg, `sage-dark` testo, radius-full, px-3 py-1 |
| **Blockquote** | `font-display` italic 24px, bordo sinistro `terracotta` 4px |

---

## 7. Logo e brand mark — concept

### 7.1 Direzione A — “La casa accogliente” (consigliata)

- **Simbolo:** sagoma casa con tetto morbido (arco, non punta spigolosa); dentro o accanto, **foglia stilizzata** o piccolo sole al tramonto (cerchio con raggi corti e arrotondati).
- **Tipogramma:** “Casa” in Cormorant semibold; “Allegramente” stessa famiglia, peso 500, leggermente più piccolo o stessa riga con interlinea stretta.
- **Sensazione:** quotidiana, familiare, Piemonte.

### 7.2 Direzione B — “Iniziale monogramma”

- Lettera **A** stilizzata come tetto + due linee che suggeriscono porta/apertura.
- Accanto logotipo completo per header; solo monogramma per favicon.

### 7.3 Direzione C — “Segno territoriale”

- Casa minimal + **silhouette colline Canavese** (3 curve morbide) sotto il nome.
- Uso predominante in materiali stampa / cartello stradale.

### 7.4 Vincoli comuni

| ✅ Sì | ❌ No |
|------|------|
| Linee arrotondate, spessore uniforme | Croce medica, caduceo, cuore “ospedale” |
| Leggibile a 32px altezza header | Dettagli microscopici |
| Versione mono cedar su cream | Gradienti arcobaleno |
| Versione bianca su foto hero | Ombre 3D logo |

### 7.5 Spazio di rispetto

Clear space = **altezza della “C”** di Casa su tutti i lati.

### 7.6 Favicon

- Monogramma **CA** o casa minimal su sfondo `cedar`, lettera `cream`.
- Export: 16, 32, 180 (apple-touch), 512 (PWA).

---

## 8. Direzione fotografica

### 8.1 Mood

Luce **naturale** (finestra, porticato), temperature colore **4800–5500K** in post, ombre morbide. Sensazione: “domenica pomeriggio in famiglia”, non reportage clinico.

### 8.2 Soggetti prioritari

| Categoria | Cosa mostrare | Composizione |
|-----------|---------------|--------------|
| **Spazi comuni** | Sala, pranzo, veranda | Angolo che include tavola, piante, luce |
| **Camere** | Letto fatto, coperta, luce finestra | Mai barella o corrimano in primo piano |
| **Cucina / vitto** | Tavola apparecchiata, mani che servono | Dettaglio + contesto |
| **Giardino** | Sedute, fiori, stagioni | Stagionalità Canavese |
| **Persone** | Ospiti e staff con **liberatoria** | Sorrisi naturali, interazione, non posa stock |
| **Territorio** | Rivarolo, centro storico, colline | Radicamento locale per fiducia familiare |

### 8.3 Cosa evitare

- Corridoi lunghi prospettiva ospedaliera.
- Verde acqua pareti, lino istitutionali stirati perfetti.
- Stock “infermiera che sorride al tablet”.
- Filtri freddi, HDR estremo, vignette drammatiche.
- Immagini che infantilizzano gli anziani.

### 8.4 Post-produzione

- Contrasto moderato, highlights caldi.
- Rimuovere elementi clinici visibili (cartelli, dispositivi medici) se inquadrati.
- Crop per web: soggetto a regola dei terzi, spazio testo overlay hero a sinistra o centro-basso.

### 8.5 Alt text (esempi)

- *“Sala da pranzo con tavola apparecchiata e luce naturale dalle finestre.”*
- *“Giardino di Casa Allegramente con sedute e rose in fiore.”*
- *“La signora Maria e la coordinatrice Anna chiacchierano in veranda.”* (solo con consenso)

---

## 9. Checklist implementazione

- [ ] `tailwind.config` con token sezione 1.5
- [ ] Google Fonts caricati con `display=swap`
- [ ] `body` 18px, `bg-cream`, `text-charcoal`
- [ ] `prefers-reduced-motion` in CSS + hook Framer Motion
- [ ] Contrasto verificato WebAIM su coppie tabella 1.4
- [ ] Tap target ≥ 44px su tutti i controlli
- [ ] Hero overlay `cedar`, CTA `terracotta`
- [ ] Footer `cedar`, non verde freddo
- [ ] Immagini WebP + lazy + alt descrittivi
- [ ] Logo SVG (quando pronto) in `/public/brand/`

---

## 10. Riferimenti incrociati

| Documento | Contenuto |
|-----------|-----------|
| [02 — UX/UI Strategy](./02-ux-ui-strategy.md) | Personas, accessibilità, pattern nav |
| [03 — Brand identity](./03-brand-identity.md) | Posizionamento, tono di voce, deliverable logo |
| [05 — Tech stack](./05-tech-stack.md) | Vite, Tailwind, Framer Motion |

---

*Documento 07 — Design system visivo · Casa Allegramente · v1.0 · Maggio 2026*
