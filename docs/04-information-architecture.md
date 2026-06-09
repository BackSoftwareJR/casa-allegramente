# 04 — Information Architecture

**Progetto:** Casa Allegramente  
**Scope:** 5 pagine principali + pagine legali opzionali  
**Lingua contenuti:** Italiano

---

## 1. Panoramica

Il sito è organizzato in **cinque pagine autonome** più eventuali pagine legali secondarie. Non è previsto blog, area riservata, form o e-commerce.

### Mappa del sito

```
casaallegramente.it/          (o dominio definitivo)
├── /                         Home
├── /chi-siamo                La nostra casa
├── /servizi                  Cosa offriamo
├── /la-vita-in-casa          Una giornata con noi
├── /dove-siamo               Rivarolo Canavese
├── /privacy                  (opz.) Informativa privacy
└── /cookie                   (opz.) Cookie policy
```

---

## 2. Titoli pagina — scelta editoriale

Per le case famiglia italiane, i titoli devono essere **immediati** (familiari stressati) e **caldi** (non burocratici).

| # | Path | Titolo nav (breve) | Titolo H1 pagina | Motivazione |
|---|------|-------------------|------------------|-------------|
| 1 | `/` | Home | *Casa Allegramente — [tagline]* | Entry point, sintesi valore |
| 2 | `/chi-siamo` | Chi siamo | **La nostra casa** | “Casa” > “Struttura”; emotivo |
| 3 | `/servizi` | Servizi | **Cosa offriamo** | Chiaro per chi confronta offerte |
| 4 | `/la-vita-in-casa` | La vita in casa | **Una giornata con noi** | Concretezza, riduce ansia |
| 5 | `/dove-siamo` | Dove siamo | **Rivarolo Canavese** | SEO locale + orientamento |

**Alternativa nav** se si preferisce uniformità geografica solo su pagina 5: mantenere “Dove siamo” in menu e H1 “Siamo a Rivarolo Canavese”.

---

## 3. Dettaglio pagine

### 3.1 Home (`/`)

**Obiettivo:** Comunicare in 10 secondi *chi siete*, *per chi*, *perché fidarsi*; indirizzare alle pagine profonde; convertire in **chiamata**.

| Ordine | Sezione | Contenuto | Link interno |
|--------|---------|-----------|----------------|
| 1 | Hero | Video/immagine, headline, subline, CTA tel + “Scopri di più” | scroll o `/chi-siamo` |
| 2 | Stats bar | 4 metriche (es. posti, h24, anni, % personalizzazione) | — |
| 3 | Manifesto | 3 pilastri valori (accoglienza, rispetto, comunità) | `/chi-siamo` |
| 4 | Anteprima servizi | 3–4 card top | `/servizi` |
| 5 | Anteprima giornata | Timeline compatta 4 slot | `/la-vita-in-casa` |
| 6 | Galleria teaser | 4–6 foto | `/chi-siamo#galleria` |
| 7 | Testimonianze | 2–3 quote (se disponibili) | — |
| 8 | FAQ | 4–6 domande top | espansione inline |
| 9 | Contatto rapido | Tel, email, orari | `/dove-siamo` |

**Meta SEO:**

- Title: `Casa Allegramente — Casa famiglia anziani a Rivarolo Canavese (TO)`
- Description: ~155 caratteri con keywords locali + invito a chiamare.

**JSON-LD:** `LocalBusiness` / `NursingHome` con indirizzo, tel, geo, orari.

---

### 3.2 Chi siamo (`/chi-siamo`)

**Obiettivo:** Storia, persone, filosofia, fiducia E-E-A-T.

| Sezione | Contenuto |
|---------|-----------|
| Intro | Chi siamo, da quanto, perché “Allegramente” |
| Storia | Origine, missione, legame con territorio |
| Valori | 3–5 card (empatia, autonomia, famiglia coinvolta, …) |
| La struttura | Descrizione edificio, camere, spazi comuni, giardino |
| Il team | Foto e ruoli (OSS, coordinatrice, …) — con consenso |
| Numeri | Posti letto, piani, tipologia ospiti accettati |
| Galleria | Grid foto reali + lightbox (`id="galleria"`) |
| CTA | “Venite a conoscerci” → tel |

**Contenuti da raccogliere dal cliente:**

- Testo storia fondazione
- Tipologia ospiti (autosufficienti / parzialmente)
- Certificazioni / autorizzazioni regionali (se comunicabili)

**Meta SEO:**

- Title: `Chi siamo — Casa Allegramente Rivarolo Canavese`
- Description: storia + ambiente familiare + Canavese.

---

### 3.3 Servizi (`/servizi`)

**Obiettivo:** Elenco completo prestazioni incluse; ridurre dubbi su “cosa è compreso”.

| Sezione | Contenuto |
|---------|-----------|
| Intro | Panoramica assistenza integrata |
| Griglia servizi | 6 blocchi (vedi sotto) |
| Cosa è incluso | Lista bullet trasparente |
| Prezzi (opzionale) | Tabella o “contattaci per preventivo” |
| FAQ servizi | 3–4 domande specifiche |
| CTA | Chiamata |

**I 6 servizi** (allineati al settore e all’esempio Residence V.G):

1. **Assistenza 24 ore** — presenza personale qualificato, discreta  
2. **Vitto e alimentazione** — pasti preparati, diete personalizzate  
3. **Pulizia e igiene** — camere, spazi comuni, supporto personale  
4. **Progetto di vita individuale** — piano con famiglia e ospite  
5. **Attività e socialità** — laboratori, musica, passeggiate, feste  
6. **Alloggio e comfort** — camere, bagni, spazi comuni, accessibilità  

Ogni servizio: titolo, paragrafo, 3–4 bullet “highlight”, icona.

**Nota prezzi:** il sito esempio espone listino (camera singola/doppia). Per Allegramente: decidere con cliente se pubblicare o rimandare al telefono.

---

### 3.4 La vita in casa (`/la-vita-in-casa`)

**Obiettivo:** Far **visualizzare** la quotidianità; ridurre paura dell’ignoto.

| Sezione | Contenuto |
|---------|-----------|
| Intro | “Un ritmo sereno, fatto di abitudini e piccoli piaceri” |
| Timeline giornata | 8–10 slot orari (vedi tabella sotto) |
| Attività | Griglia attività settimanali (da `activities` se definiti) |
| Convivialità | Pasti insieme, feste, familiari benvenuti |
| Stagionalità | Es. estate in giardino, inverno in sala |
| CTA | Prenota visita (tel) |

**Timeline tipo** (bozza — orari da confermare):

| Ora | Attività | Fase colore |
|-----|----------|-------------|
| 07:30 | Sveglia assistita, igiene personale | Mattina (honey) |
| 08:30 | Colazione | Mattina |
| 10:00 | Attività / passeggiata / lettura | Mattina |
| 12:30 | Pranzo insieme | Mezzogiorno |
| 15:00 | Riposo o laboratorio | Pomeriggio (sage) |
| 16:30 | Merenda e socialità | Pomeriggio |
| 19:00 | Cena | Sera (forest) |
| 21:00 | Serata tranquilla, preparazione notte | Sera |

**Riferimento tecnico:** componente `DailyRoutine.tsx` nel sito esempio — timeline SVG animata scroll-triggered.

---

### 3.5 Dove siamo (`/dove-siamo`)

**Obiettivo:** Orientamento geografico, contatti, visita in sede.

| Sezione | Contenuto |
|---------|-----------|
| Hero | “Rivarolo Canavese, provincia di Torino” |
| Mappa | Embed interattivo o immagine statica con link Google Maps |
| Indirizzo completo | Via, CAP, TO |
| Come arrivare | Auto (autostrada/SS), treno (Torino → Rivarolo), bus |
| Orari visite / ufficio | Es. Lun–Dom 9–20 |
| Contatti | Tel (click), email (mailto), WhatsApp opzionale |
| Parcheggio | Info pratica |
| CTA | “Chiamaci prima della visita” |

**Dati geo:** da inserire in `content.ts` quando disponibili coordinate esatte.

**Meta SEO locale:**

- Title: `Dove siamo — Casa Allegramente, Rivarolo Canavese (TO)`
- Keywords: casa famiglia Rivarolo, anziani Canavese, RSA Rivarolo (se appropriato al posizionamento)

---

## 4. Navigazione e gerarchia

### Header (tutte le pagine)

```
Logo | Home | Chi siamo | Servizi | La vita in casa | Dove siamo | [Chiama]
```

### Footer

```
Colonna 1: Logo + tagline
Colonna 2: Navigazione
Colonna 3: Contatti
Colonna 4: Legale (Privacy, Cookie) + © anno
```

### Breadcrumb (opzionale)

`Home > Servizi` — utile per accessibilità, visibile da `md` in su.

---

## 5. Contenuti trasversali

### 5.1 FAQ globale (distribuzione)

| Domanda tipo | Home | Servizi | Dove siamo |
|--------------|------|---------|------------|
| Quanti ospiti accettate? | ✅ | | |
| Che tipo di autonomia richiedete? | ✅ | ✅ | |
| Come funzionano le visite? | ✅ | | ✅ |
| Cosa portare in casa? | | ✅ | |
| Costi e modalità pagamento? | ✅ | ✅ | |
| Siete convenzionati ASL? | | ✅ | |

**Fonte dati:** array `faq[]` in `content.ts`, filtrato per tag `page: 'home' | 'servizi' | ...`.

### 5.2 Testimonianze

```ts
{
  quote: "...",
  author: "Maria R.",
  relation: "Figlia di ospite",
  rating: 5, // opzionale, stelle visive
}
```

Minimo 2, massimo 6 in rotazione carousel.

### 5.3 Contatti (sempre visibili)

- Header: icona telefono  
- Floating CTA mobile  
- Footer completo  
- Blocco finale ogni pagina interna  

**Nessun form** — vedi doc 01.

---

## 6. Confronto IA: esempio vs Casa Allegramente

| Pagina / funzione | Residence V.G (esempio) | Casa Allegramente |
|-------------------|-------------------------|-------------------|
| Home monolitica | 12+ sezioni, anchor `#chi-siamo` | Hub + 5 route dedicate |
| `/galleria` | Pagina separata | Integrata in Chi siamo |
| `/blog` + articoli | 15 post SEO | ❌ Escluso fase 1 |
| `/servizi` | Media priorità | Pagina dedicata piena |
| `/chi-siamo` | Anchor + sezione home | Pagina dedicata |
| Form contatti | Homepage + API | ❌ Solo tel/mailto |
| `/dove-siamo` | Sì | Sì (equivalente) |
| Privacy/Cookie | Sì | Opzionale PDF/link |

---

## 7. SEO e URL

| URL | Priorità sitemap | Changefreq |
|-----|------------------|------------|
| `/` | 1.0 | monthly |
| `/chi-siamo` | 0.9 | monthly |
| `/servizi` | 0.9 | monthly |
| `/la-vita-in-casa` | 0.8 | monthly |
| `/dove-siamo` | 0.9 | monthly |

**Canonical:** ogni pagina auto-referenziale con dominio produzione.

**Open Graph:** immagine default `og/casa-allegramente.jpg` 1200×630.

---

## 8. Inventario contenuti da produrre

| Contenuto | Responsabile | Priorità |
|-----------|--------------|----------|
| Testi definitivi 5 pagine | Cliente + copywriter | Alta |
| Telefono, email, indirizzo, P.IVA | Cliente | Alta |
| 12–20 foto struttura | Cliente / fotografo | Alta |
| Logo e favicon | Grafico | Alta |
| Testimonianze approvate | Cliente | Media |
| PDF privacy/cookie aggiornati | Cliente / legale | Media |
| Coordinate GPS | Cliente | Media |
| Listino prezzi (se pubblico) | Cliente | Bassa |
| Video hero (opzionale) | Cliente | Bassa |

---

## 9. User stories (accettazione)

1. **Come familiare**, voglio capire che tipo di anziani accogliete, **per** valutare se contattarvi.  
2. **Come familiare**, voglio vedere foto degli ambienti, **per** immaginare mio padre lì.  
3. **Come familiare**, voglio chiamare con un tap da mobile, **senza** compilare moduli.  
4. **Come anziano**, voglio leggere testi grandi e chiari sulla giornata tipo.  
5. **Come visitatore locale**, voglio trovare indirizzo e mappa rapidamente.

---

*Documento 04 — Information Architecture · Casa Allegramente · v1.0*
