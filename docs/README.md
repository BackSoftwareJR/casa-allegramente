# Documentazione progetto — Casa Allegramente

**Progetto:** Sito web istituzionale per Casa Allegramente, casa famiglia per anziani a Rivarolo Canavese (TO), Piemonte.  
**Versione documentazione:** 1.0 · **Data:** Maggio 2026  
**Ruolo:** Fondazione architetturale per l’implementazione React statica.

---

## Indice documenti

| # | Documento | Contenuto |
|---|-----------|-----------|
| 01 | [Architettura infrastrutturale](./01-architettura-infrastrutturale.md) | Stack, struttura cartelle, componenti, routing, deploy statico |
| 02 | [UX/UI Strategy](./02-ux-ui-strategy.md) | Pubblico, tono visivo, accessibilità, responsive, pattern di navigazione |
| 03 | [Brand identity](./03-brand-identity.md) | Posizionamento, tono di voce, sintesi identità visiva |
| 04 | [Information architecture](./04-information-architecture.md) | Le 5 pagine, contenuti, gerarchia, SEO |
| 05 | [Tech stack](./05-tech-stack.md) | Dipendenze, tooling, vincoli tecnici, checklist implementazione |
| 07 | [Design system visivo](./07-brand-identity-design-system.md) | Palette, tipografia, griglia, componenti, motion, logo, fotografia |

---

## Riferimento nel workspace

Nel repository è presente un **sito esempio** di riferimento:

```
sito esempio/residence_vg-main/
```

Si tratta del progetto **Residence V.G** (Cabiate, CO) — stesso settore (casa famiglia / residenza anziani), stack Next.js 14 + Tailwind + Framer Motion. È utile come **ispirazione di pattern UX, sezioni e design system caldo**, ma **non va replicato integralmente**:

| Elemento esempio | Adozione per Casa Allegramente |
|------------------|--------------------------------|
| Palette calda (verde salvia + oro + linen) | ✅ Principi riutilizzabili; palette Allegramente più calda (terracotta/cedro/crema) — vedi doc 07 |
| Sezioni Hero, Stats, Servizi, Routine, FAQ | ✅ Pattern validi, contenuti ridistribuiti sulle 5 pagine |
| Blog multi-articolo | ❌ Fuori scope (5 pagine fisse) |
| Form contatti + API `/api/contact` | ❌ Esplicitamente escluso — solo `tel:` / `mailto:` / WhatsApp |
| Next.js con server Node | ⚠️ Sostituito da **Vite + export statico** (vedi doc 01 e 05) |

Brief completo dell’esempio: `sito esempio/residence_vg-main/BRIEF_SVILUPPO.md`.

---

## Decisioni chiave (sintesi)

1. **Sito 100% statico** — nessun backend, database, form o API.
2. **React 18+ con Vite** — build `dist/` deployabile su qualsiasi hosting statico (Hostinger, Netlify, GitHub Pages).
3. **5 pagine** — Home, Chi siamo, Servizi, La vita in casa, Dove siamo.
4. **Contatto** — telefono cliccabile, email `mailto:`, eventuale link WhatsApp; nessun invio dati dal sito.
5. **Accessibilità prioritaria** — pubblico anziano e familiari; WCAG 2.1 AA come obiettivo.
6. **Tono “casa dolce casa”** — calore domestico, mai estetica ospedaliera.

---

## Prossimi passi (implementazione)

1. Inizializzare progetto Vite + React + TypeScript nella root del workspace.
2. Configurare Tailwind, React Router, Framer Motion secondo doc 05.
3. Popolare `src/data/content.ts` con testi e contatti reali del cliente (da raccogliere).
4. Validare brand con cliente; logo SVG da produrre (brief doc 07 §7).
5. Implementare le 5 pagine seguendo l’IA del doc 04.

---

*Documentazione redatta dall’agente Main Architect — Maggio 2026*
