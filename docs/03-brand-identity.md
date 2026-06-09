# 03 — Brand identity

> **Stato:** ALLINEATO — specifiche visive dettagliate in [07 — Design system](./07-brand-identity-design-system.md)  
> **Versione:** 1.0 · Maggio 2026

---

## 1. Identità del brand

| Campo | Valore proposto | Stato |
|-------|-----------------|-------|
| **Nome** | Casa Allegramente | ✅ Confermato dal nome progetto |
| **Tipologia** | Casa famiglia per anziani | ✅ |
| **Località** | Rivarolo Canavese (TO), Piemonte, Italia | ✅ |
| **Tagline** | *Da definire con cliente* | ⏳ TODO |
| **Payoff alternativi (bozza)** | “Dove ogni giorno è sentirsi a casa” / “Accoglienza nel cuore del Canavese” | ⏳ |
| **Tono** | Caldo, rassicurante, professionale, mai clinico | ✅ Direttiva progetto |

### 1.1 Posizionamento

Casa Allegramente si posiziona come **casa famiglia a dimensione umana** nel territorio canavesano: alternativa calda e domestica rispetto alle grandi RSA impersonali, con attenzione alle abitudini personali e al coinvolgimento delle famiglie.

**Differenziatore da comunicare** (da verificare con cliente):

- Numero limitato di ospiti (ambiente “tutti si conoscono”).
- Radicamento locale a Rivarolo Canavese.
- Assistenza rispettosa dell’autonomia residua.
- Spazi comuni vissuti come in famiglia.

### 1.2 Mission (bozza testuale)

> *“Offrire agli anziani e alle loro famiglie un luogo sicuro dove sentirsi accolti per nome, dove la cura quotidiana rispetta le abitudini di una vita e dove la comunità di Rivarolo fa da cornice a una nuova casa.”*

Adattare dopo intervista con la gestione.

---

## 2. Personalità del brand

| Tratto | Espressione visiva | Espressione verbale |
|--------|-------------------|---------------------|
| **Calore** | Palette crema/terracotta/legno, foto luminose | “Casa”, “accoglienza”, “insieme” |
| **Autorevolezza** | Cedro (legno caldo), tipografia serif | Competenza, personale qualificato |
| **Serenità** | Spazi bianchi, animazioni lente | Rassicurazione, trasparenza |
| **Vicinanza** | Riferimenti territoriali Canavese | “Qui da noi”, “nel paese” |
| **Rispetto** | Mai immagini pietistiche | “Ospite”, “signora/signor”, mai “paziente” |

### Anti-personalità (cosa NON siamo)

- Ospedale, clinica, laboratorio.
- Corporate freddo o startup tech.
- Lusso distaccato o “resort senior” artificiale.

---

## 3. Identità visiva — palette

> **Specifica completa:** [07 — Design system visivo](./07-brand-identity-design-system.md) (token, componenti, motion, fotografia).

Ispirata ai principi del sito esempio Residence V.G, **reinterpretata** con toni **più caldi e domestici** (terracotta, legno, crema) per il Canavese — distanza netta dall’estetica verde-oro “residenza” e dai colori clinici.

### 3.1 Palette “Allegramente” (sintesi)

```
PRIMARI — Calore e azione
  Terracotta:     #C4632E   (CTA primarie, accenti)
  Terracotta-dark:#9E4E24   (hover)

STRUTTURA — Legno caldo (autorevolezza domestica)
  Cedar:          #4A3829   (footer, overlay hero — NO verde foresta freddo)
  Wood:           #8B6F5C   (bordi, icone)

NATURA — Salvia morbida
  Sage:           #7A9B7E   (icone servizi, badge)
  Sage-mist:      #EEF4EF   (sfondi soft)

ACCENTO SECONDARIO — Miele
  Honey:          #B8893A   (divider, stats, dettagli)

NEUTRI — Base “casa”
  Cream:          #FAF5EB   (sfondo globale — MAI #FFFFFF come bg pagina)
  Linen:          #F3EDE2   (sezioni alternate)
  Parchment:      #E8DFD0   (bande sezione)
  Warm Gray:      #C9BFB0   (bordi)

TESTO
  Ink:            #2A221C   (titoli)
  Charcoal:       #443A32   (corpo)
  Muted:          #6B5F54   (meta)
```

**Regola:** sfondo pagina = `cream`. Il bianco puro come sfondo dominante evoca clinica.

### 3.2 Contrasto accessibilità

Tabella completa in doc 07. Sintesi:

- `charcoal` su `cream` → body standard (≥ 4.5:1)
- `white-warm` su `terracotta` → CTA primario
- `cream` su `cedar` → footer

### 3.3 Implementazione

Token Tailwind, CSS variables, ombre e gradienti → **doc 07, sezioni 1.5–1.6**.

---

## 4. Tipografia

| Ruolo | Font | Uso |
|-------|------|-----|
| **Display** | Cormorant Garamond | Titoli hero, headline, citazioni |
| **Body / UI** | Source Sans 3 | Paragrafi, nav, bottoni (min **18px**) |

Scala completa, pesi e regole → **doc 07, sezione 2**.

---

## 5. Logo e asset grafici

### 5.1 Stato attuale

| Asset | Stato |
|-------|-------|
| Logo vettoriale SVG | ⏳ Da produrre (agente grafico) |
| Logo raster PNG/WebP | ⏳ |
| Favicon set (16, 32, 180 apple-touch) | ⏳ |
| Pattern decorativo (opz.) | ⏳ Foglia/stelo stilizzato, motivo tessile piemontese leggero |

### 5.2 Direzione logo (brief per grafico)

Tre concept descritti in **doc 07, sezione 7** (casa accogliente · monogramma · territorio Canavese).

Vincoli: nome leggibile a 32px; **no** simboli sanitari; versioni chiara/scura/mono; clear space = altezza “C”.

### 5.3 Fotografia

Linee guida complete → **doc 07, sezione 8** (mood, soggetti, post-produzione, alt text).

**Formato:** WebP q80–85, hero &lt; 250 KB desktop.

---

## 6. Iconografia e illustrazioni

- **Set icone:** Lucide React (coerente con esempio) — line weight 1.5–2px, colore `sage` o `honey`.
- **Illustrazioni custom:** opzionali fase 2; fase 1 solo icone + foto.
- **Stile icone servizi:** outline, arrotondate, mai “medical cross”.

Mapping servizi (bozza):

| Servizio | Icona Lucide |
|----------|--------------|
| Assistenza h24 | `Shield` / `HeartHandshake` |
| Vitto | `UtensilsCrossed` |
| Pulizia | `Sparkles` |
| Progetto individuale | `ClipboardList` |
| Attività | `Music` / `Palette` |
| Struttura | `Home` |

---

## 7. UI components — linguaggio visivo

Style guide componenti (bottoni, card, nav, hero, footer, motion) → **doc 07, sezioni 4–6**.

| Elemento | Stile (sintesi) |
|----------|-----------------|
| **Bottoni primari** | `terracotta`, testo `white-warm`, radius 12px, min 48px altezza |
| **Bottoni secondari** | Outline `cedar` |
| **Card** | `white-warm`, `shadow-warm`, radius 16px |
| **Footer** | Sfondo `cedar`, testo `cream` |

---

## 8. Tono di voce — copywriting

| Dimensione | Linea guida |
|------------|-------------|
| Registro | Formale-cordiale (“Lei”) |
| Lunghezza | Paragrafi 3–4 righe max in body |
| Verbi | Accogliere, accompagnare, condividere, ascoltare |
| Evitare | Ricovero, degenza, paziente, struttura sanitaria (preferire “casa famiglia”) |
| Localismo | Citare Rivarolo, Canavese, Torino provincia con naturalezza |

### Esempi headline (bozza)

- Hero: **“Casa Allegramente — accoglienza per la terza età a Rivarolo”**
- Chi siamo: **“Una casa familiare, non un istituto”**
- Servizi: **“Tutto ciò che serve, con il calore di casa”**
- Vita in casa: **“Una giornata tipo da Allegramente”**
- Dove siamo: **“Nel cuore del Canavese, vicino a chi vi ama”**

---

## 9. Confronto con brand sito esempio (Residence V.G)

| Elemento | Residence V.G | Casa Allegramente |
|----------|---------------|-------------------|
| Territorio | Cabiate, Brianza | Rivarolo Canavese, Piemonte |
| Accento CTA | Oro `#C9A84C` | Terracotta `#C4632E` |
| Scuro struttura | Verde foresta `#2D3A2E` | Legno cedro `#4A3829` |
| Sfondo | Linen `#F5F2ED` | Crema `#FAF5EB` (più caldo) |
| Sensazione | Residenza elegante | Casa familiare domestica |
| Tagline | Libertà, accoglienza… | Da definire |

**Nota:** non copiare logo, testi o foto dall’esempio — solo principi di design system.

---

## 10. Deliverable attesi dall’agente grafico

- [ ] Logo SVG + PNG (varianti)
- [ ] Favicon package
- [x] Palette definitiva con codici HEX → doc 07
- [ ] Eventuale pattern/texture brand
- [ ] Template social (opzionale) — formato 1200×630 per OG image default
- [ ] Guida 1 pagina “Brand guidelines” PDF

---

## 11. Open points per il cliente

1. Tagline ufficiale e eventuale claim registrato.
2. Ragione sociale completa, P.IVA, dati legali footer.
3. Numero massimo ospiti e dati struttura (piani, camere).
4. Disponibilità foto professionali o autorizzazione shooting.
5. Testimonianze utilizzabili (con nome o iniziali).
6. Indicazione prezzi sul sito (sì/no/“su richiesta”).
7. Colori istituzionali preesistenti da rispettare.

---

*Documento 03 — Brand identity · Casa Allegramente · v1.0 · Design system: [07](./07-brand-identity-design-system.md)*
