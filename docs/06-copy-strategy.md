# 06 — Copy & Content Strategy

**Progetto:** Casa Allegramente  
**Località:** Rivarolo Canavese (TO), Piemonte  
**Lingua:** Italiano  
**Versione:** 1.0 · Maggio 2026  
**Allineamento:** doc 02 (UX/UI), doc 03 (Brand), doc 04 (IA)

---

## 1. Scopo del documento

Questo documento è la **fonte unica di verità** per tutti i testi del sito web: tono di voce, purpose del brand, bozze complete delle 5 pagine, microcopy e linee guida SEO. I testi sono pronti per essere trascritti in `src/data/content.ts` dopo validazione cliente.

**Vincoli assoluti:**
- Nessun form di contatto — conversione via **telefono**, **WhatsApp**, **email** (`mailto:`), **visita in sede**
- Registro **Lei** verso ospite e familiare
- Tono **casa dolce casa** — mai clinico, mai burocratico
- Terminologia: **casa famiglia**, **ospite**, **accoglienza** — mai *paziente*, *degenza*, *ricovero*

**Placeholder da sostituire con dati reali:**

| Token | Uso |
|-------|-----|
| `[TELEFONO]` | Numero display (es. +39 0123 456 789) |
| `[TELEFONO_RAW]` | Per `href="tel:"` (es. +390123456789) |
| `[WHATSAPP]` | Numero WhatsApp senza + (es. 390123456789) |
| `[EMAIL]` | Indirizzo email |
| `[INDIRIZZO]` | Via, numero, CAP |
| `[N_OSPITI]` | Posti letto massimi |
| `[ANNI]` | Anni di attività |

---

## 2. Brand Voice & Tone

### 2.1 Personalità verbale

Casa Allegramente parla come una **famiglia che apre la porta di casa**: calda, presente, rispettosa. Non come un istituto che spiega un regolamento.

| Tratto | Come suona | Come NON suona |
|--------|------------|----------------|
| **Calore** | “Qui ogni ospite ha un nome e una storia” | “La struttura garantisce standard assistenziali” |
| **Familiare** | “A tavola ci si conosce tutti” | “Reparto da N posti letto” |
| **Rassicurante** | “Siamo qui, giorno e notte, con discrezione” | “Personale sanitario h24” |
| **Autentico** | “Rivarolo è il nostro paese, non solo un indirizzo” | “Posizione strategica in provincia di Torino” |
| **Rispettoso** | “Accompagniamo, non sostituiamo” | “Gestiamo le non autosufficienze” |

### 2.2 Registro e stile

- **Pronome:** Lei (ospite e familiare); noi/noi di Casa Allegramente (struttura)
- **Tempo verbale:** presente per descrivere la quotidianità; passato per la storia
- **Lunghezza:** paragrafi 3–4 righe max; frasi preferibilmente sotto i 25 parole
- **Lessico preferito:** accoglienza, casa, insieme, abitudini, comunità, Canavese, ascoltare, accompagnare, conmotione, serenità, vicinanza
- **Lessico vietato:** paziente, degenza, ricovero, struttura sanitaria, reparto, degente, case di riposo (preferire *casa famiglia*), terminologia ospedaliera

### 2.3 Tono per contesto

| Contesto | Tono | Esempio |
|----------|------|---------|
| Hero | Accogliente, immediato | “Una casa per la terza età, nel cuore del Canavese” |
| Servizi | Trasparente, concreto | “Tutto incluso, spiegato senza sorprese” |
| Vita quotidiana | Narrativo, sensoriale | “Il profumo del caffè al mattino, le chiacchiere del pomeriggio” |
| Dove siamo | Pratico, locale | “A Rivarolo, a due passi da chi Le ama” |
| CTA | Umano, invitante | “Chiamaci — venite a trovarci quando volete” |
| FAQ | Onesto, diretto | Risposte brevi, niente giri di parole |

### 2.4 Checklist qualità copy

Prima di pubblicare ogni testo, verificare:

- [ ] Suona come una conversazione in salotto, non come un depliant ASL?
- [ ] Evita almeno un termine clinico sostituendolo con linguaggio domestico?
- [ ] Cita almeno una volta il territorio (Rivarolo, Canavese, Piemonte) dove pertinente?
- [ ] Include un invito al contatto umano (tel / visita), mai un form?
- [ ] È leggibile ad alta voce da un anziano con facilità?

---

## 3. Brand Purpose — Il Perché (Golden Circle)

### 3.1 WHY — Perché esistiamo

> **Perché ogni anziano merita di invecchiare circondato da calore umano, non da corridoio.**

Casa Allegramente nasce dalla convinzione che la terza età non debba significare solitudine o anonimato. Crediamo che **casa** sia una parola che si sente — nei profumi della cucina, nel saluto per nome, nella mano che accompagna senza imporre.

### 3.2 HOW — Come lo facciamo

- Accogliendo **poche persone**, così tutti si conoscono davvero
- **Ascoltando** abitudini, passioni e ritmi di una vita intera
- **Coinvolgendo le famiglie** come parte della casa, non come visitatori occasionali
- Offrendo **assistenza discreta h24**, presente ma mai invasiva
- Radicandoci a **Rivarolo Canavese**, nel territorio che ci conosce

### 3.3 WHAT — Cosa offriamo

Una **casa famiglia per anziani** autosufficienti e parzialmente autosufficienti: alloggio, vitto, pulizia, attività, progetto individuale e presenza continua del personale — il tutto in un ambiente domestico a dimensione umana.

### 3.4 Mission (ufficiale — bozza)

> *Offrire agli anziani e alle loro famiglie un luogo sicuro dove sentirsi accolti per nome, dove la cura quotidiana rispetta le abitudini di una vita e dove la comunità di Rivarolo fa da cornice a una nuova casa.*

### 3.5 Vision

> *Essere il punto di riferimento nel Canavese per chi cerca un’accoglienza autentica: non la struttura più grande, ma quella dove ogni ospite può dire «qui mi sento a casa».*

### 3.6 Valori (5 pilastri)

| Valore | Significato per il copy | Frase guida |
|--------|-------------------------|-------------|
| **Accoglienza** | Porta sempre aperta, literalmente e metaforicamente | “Entrare da noi significa essere attesi” |
| **Rispetto** | Dignità, autonomia, ascolto | “Non facciamo per voi ciò che potete fare da soli” |
| **Famiglia** | Rete ampliata, non sostitutiva | “I vostri cari sono benvenuti, sempre” |
| **Comunità** | Legame con Rivarolo e il Canavese | “Siamo del posto, per chi ama il posto” |
| **Serenità** | Trasparenza, presenza, niente sorprese | “Sapere che c’è qualcuno — fa dormire sonni tranquilli” |

### 3.7 Posizionamento unico

**Casa Allegramente** si distingue come:

1. **Casa famiglia a dimensione umana** — pochi ospiti, tutti si conoscono per nome
2. **Alternativa calda alle grandi RSA** — niente corridoio infinito, niente anonimato
3. **Radicamento canavesano** — Rivarolo Canavese come casa, non solo come indirizzo
4. **Cura rispettosa dell’autonomia** — accompagnare, non sostituire
5. **Famiglia coinvolta** — visite libere, partecipazione attiva al progetto di vita

**Tagline proposta (primaria):**  
> *Dove ogni giorno è sentirsi a casa*

**Tagline alternative:**
- *Accoglienza nel cuore del Canavese*
- *Casa famiglia per anziani a Rivarolo Canavese*
- *La terza età, con il calore di una famiglia*

---

## 4. Strategia keyword e SEO

### 4.1 Keyword primarie

| Keyword | Intento | Pagine target |
|---------|---------|---------------|
| casa famiglia Rivarolo Canavese | Transazionale/informativo | Home, Dove siamo |
| casa famiglia Canavese | Geografico ampliato | Home, Chi siamo |
| accoglienza anziani Rivarolo | Emotivo + locale | Home, Chi siamo |
| anziani autosufficienti Canavese | Specifico target | Servizi, Chi siamo |
| residenza anziani Rivarolo Canavese | Confronto offerte | Servizi, Home |

### 4.2 Keyword secondarie

- assistenza anziani h24 Canavese
- casa famiglia provincia Torino
- struttura anziani Rivarolo (usare con cautela — preferire *casa famiglia*)
- visita casa famiglia Canavese
- vitto e alloggio anziani Piemonte

### 4.3 Regole SEO copy

1. **Title tag:** max 60 caratteri; keyword locale entro i primi 40 caratteri
2. **Meta description:** 145–155 caratteri; invito a chiamare + keyword naturale
3. **H1:** unico per pagina; può differire dal title (più emotivo)
4. **Keyword stuffing:** vietato — massimo 2 occorrenze keyword primaria per sezione
5. **Local SEO:** sempre “Rivarolo Canavese (TO)” almeno una volta per pagina
6. **Schema.org:** LocalBusiness con `NursingHome` o `SeniorLiving` — testi coerenti con copy

---

## 5. Copy completo — pagine

---

### 5.1 HOME (`/`)

#### SEO

| Campo | Testo |
|-------|-------|
| **Title** | Casa Allegramente — Casa famiglia anziani a Rivarolo Canavese |
| **Meta description** | Casa famiglia per anziani nel Canavese: accoglienza calda, assistenza h24, pochi ospiti. A Rivarolo Canavese (TO). Chiamaci: [TELEFONO] |
| **H1** | Casa Allegramente — dove ogni giorno è sentirsi a casa |

#### Hero

| Elemento | Testo |
|----------|-------|
| **Eyebrow** | Casa famiglia · Rivarolo Canavese |
| **Headline** | Accoglienza per la terza età, con il calore di una famiglia |
| **Subheadline** | A Rivarolo Canavese, nel cuore del Canavese, offriamo agli anziani autosufficienti e parzialmente autosufficienti una casa a dimensione umana: pochi ospiti, tanta cura, zero anonimato. |
| **CTA primaria** | Chiamaci: [TELEFONO] |
| **CTA secondaria** | Scopri la nostra casa → `/chi-siamo` |

#### Sezione — Stats bar

| Label | Valore (placeholder) | Nota |
|-------|---------------------|------|
| Ospiti al massimo | [N_OSPITI] | Ambiente piccolo e familiare |
| Assistenza | 24 ore | Personale sempre presente |
| Radicati nel Canavese | [ANNI] anni | Conoscenza del territorio |
| Progetto individuale | 100% | Ogni ospite ha il suo percorso |

#### Sezione — Manifesto (3 pilastri)

**Titolo sezione:** Perché scegliere Casa Allegramente  
**Sottotitolo:** Tre promesse che manteniamo ogni giorno

**Pilastro 1 — Accoglienza**
- **Titolo:** Accoglienza vera
- **Testo:** Da noi non si è un numero. Si entra per nome, si condivide la tavola, si respira l’atmosfera di una casa dove tutti si conoscono. L’accoglienza non è un servizio: è il modo in cui viviamo ogni giorno.

**Pilastro 2 — Rispetto**
- **Titolo:** Rispetto dell’autonomia
- **Testo:** Accompagniamo senza imporre. Ogni ospite mantiene le proprie abitudini, i propri ritmi, la propria dignità. L’assistenza è discreta, presente quando serve, invisibile quando non serve.

**Pilastro 3 — Comunità**
- **Titolo:** Comunità e famiglia
- **Testo:** Le famiglie sono benvenute in qualsiasi momento. Rivarolo Canavese è la nostra casa comune: passeggiate nel paese, feste di quartiere, legami che contano.

**Link:** La nostra storia → `/chi-siamo`

#### Sezione — Anteprima servizi

**Titolo sezione:** Cosa offriamo  
**Sottotitolo:** Tutto ciò che serve per vivere sereni, con il calore di casa

**Card 1 — Assistenza h24**
- Presenza continua, giorno e notte. Sempre vicini, mai invasivi.

**Card 2 — Vitto e cucina**
- Pasti preparati ogni giorno, con cura e attenzione alle preferenze di ognuno.

**Card 3 — Attività e socialità**
- Laboratori, musica, passeggiate: ogni giorno qualcosa da conmotione.

**Card 4 — Progetto individuale**
- Un percorso personalizzato, costruito insieme a Lei e alla Sua famiglia.

**Link:** Tutti i servizi → `/servizi`

#### Sezione — Anteprima giornata

**Titolo sezione:** Una giornata con noi  
**Sottotitolo:** Un ritmo sereno, fatto di abitudini e piccoli piaceri

**Timeline compatta (4 slot):**

| Momento | Titolo | Testo breve |
|---------|--------|-------------|
| Mattina | Il risveglio | Calma, colazione insieme, il profumo del caffè |
| Mezzogiorno | A tavola | Pranzo preparato al momento, convivialità |
| Pomeriggio | Creatività | Laboratori, chiacchiere, passeggiata in giardino |
| Sera | Tranquillità | Cena leggera, serata raccolta, buonanotte serena |

**Link:** Scopri la vita quotidiana → `/la-vita-in-casa`

#### Sezione — Galleria teaser

**Titolo sezione:** I nostri spazi  
**Sottotitolo:** Ambienti luminosi, curati, pensati per sentirsi a casa

**Link:** Vedi tutte le foto → `/chi-siamo#galleria`

#### Sezione — Testimonianze

**Titolo sezione:** Chi ci ha scelto  
**Sottotitolo:** Parole di familiares che hanno trovato serenità per i loro cari

**Testimonianza 1 (bozza — da validare):**
> «Cercavamo una casa famiglia nel Canavese, non un istituto. Qui mio padre viene chiamato per nome da tutti. Sorride di nuovo.»
> — **Maria R.**, figlia di ospite

**Testimonianza 2 (bozza — da validare):**
> «La dimensione piccola fa la differenza. Mia madre si sente parte di una famiglia, non un numero. E noi siamo sempre benvenuti.»
> — **Giovanni T.**, figlio di ospite

#### Sezione — FAQ (Home)

**Titolo sezione:** Domande frequenti

**FAQ 1:** Quanti ospiti accogliete?  
Risposta: Accogliamo al massimo [N_OSPITI] ospiti. Una scelta voluta: così ognuno ha spazio, attenzione e un rapporto personale con chi lo accoglie.

**FAQ 2:** Che tipo di autonomia richiedete?  
Risposta: Accogliamo anziani autosufficienti e parzialmente autosufficienti. Valutiamo ogni situazione insieme alla famiglia, con una visita conoscitiva senza impegno.

**FAQ 3:** Come posso prenotare una visita?  
Risposta: Ci chiami al [TELEFONO], ci scriva su WhatsApp o ci mandi un’email a [EMAIL]. Organizziamo una visita guidata quando fa comodo a Lei.

**FAQ 4:** Quali sono i costi?  
Risposta: I costi variano in base alla tipologia di camera e alle esigenze individuali. La invitiamo a contattarci per un colloquio trasparente, senza sorprese.

#### Sezione — Contatto rapido

**Titolo sezione:** Venite a trovarci  
**Sottotitolo:** Siamo a Rivarolo Canavese, nel cuore del Canavese. Chiamateci o passate a conoscerci.

| Elemento | Testo |
|----------|-------|
| Telefono | [TELEFONO] |
| WhatsApp | Scrivici su WhatsApp |
| Email | [EMAIL] |
| Orari | Lun–Dom, 9:00–20:00 |
| Indirizzo | [INDIRIZZO], Rivarolo Canavese (TO) |

**CTA primaria:** Chiamaci ora  
**CTA secondaria:** Come raggiungerci → `/dove-siamo`

---

### 5.2 CHI SIAMO (`/chi-siamo`)

#### SEO

| Campo | Testo |
|-------|-------|
| **Title** | Chi siamo — Casa Allegramente Rivarolo Canavese |
| **Meta description** | La storia di Casa Allegramente: casa famiglia per anziani a Rivarolo Canavese. Accoglienza, rispetto e comunità nel Canavese. Venite a conoscerci. |
| **H1** | La nostra casa |

#### Hero

| Elemento | Testo |
|----------|-------|
| **Eyebrow** | Chi siamo |
| **Headline** | Una casa familiare, non un istituto |
| **Subheadline** | Casa Allegramente è nata con un’idea semplice: offrire agli anziani del Canavese un luogo dove invecchiare circondati da calore, rispetto e comunità. |
| **CTA** | Venite a conoscerci — [TELEFONO] |

#### Sezione — Intro / Perché “Allegramente”

**Titolo:** Perché Allegramente

Allegramente non è solo un nome. È una promessa: che qui si sorride, si sta bene, si vive con leggerezza anche quando gli anni pesano un po’ di più.

Il nome unisce *casa* e *allegria* — perché crediamo che la terza età possa essere serena, sociale, piena di piccoli momenti belli. Non un capitolo da subire, ma una stagione da vivere con dignità e calore umano.

#### Sezione — La nostra storia

**Titolo:** La nostra storia

Casa Allegramente nasce a **Rivarolo Canavese**, nel cuore del Canavese piemontese, da chi conosce questo territorio e sa quanto conti restare vicini alle proprie radici.

Abbiamo scelto di accogliere **poche persone** — massimo [N_OSPITI] ospiti — perché la cura vera non si misura in metri quadri o posti letto, ma in rapporti umani. Qui ogni signora e ogni signore ha un nome, una storia, delle abitudini che rispettiamo.

Da [ANNI] anni siamo parte di questa comunità. Conosciamo i negozianti del paese, le passeggiate sotto i portici, il mercato del venerdì. Per molti dei nostri ospiti, Rivarolo non è solo dove viviamo: è casa.

#### Sezione — I nostri valori

**Titolo:** I valori che ci guidano

**Valore 1 — Empatia**  
Ascoltiamo prima di agire. Ogni ospite ha vissuto una vita intera: le sue abitudini, le sue paure, le sue gioie contano.

**Valore 2 — Autonomia**  
Non sostituiamo ciò che si può fare da soli. Accompagniamo con delicatezza, rispettando tempi e scelte personali.

**Valore 3 — Famiglia coinvolta**  
I familiares non sono visitatori: sono parte della nostra casa. Li accogliamo quando vogliono, li ascoltiamo, li coinvolgiamo nel progetto di vita.

**Valore 4 — Trasparenza**  
Niente sorprese, niente linguaggio burocratico. Spieghiamo tutto con chiarezza, dal primo telefono alla firma del contratto.

**Valore 5 — Territorio**  
Siamo di Rivarolo Canavese. Il Canavese è la cornice della vita quotidiana dei nostri ospiti: passeggiate, feste, legami con il paese.

#### Sezione — La struttura

**Titolo:** Gli spazi della nostra casa

Casa Allegramente è una **casa famiglia** pensata per far sentire a proprio agio: ambienti luminosi, arredamento caldo, spazi comuni vissuti come in famiglia.

**Camere**  
Camere singole e doppie, arredate con cura. Ogni ospite può portare oggetti personali — quadri, fotografie, la poltrona preferita — per sentirsi davvero a casa.

**Spazi comuni**  
Sala da pranzo, salotto, giardino: luoghi di incontro dove condividere pasti, chiacchiere, partite a carte e risate.

**Accessibilità**  
La struttura è pensata per la sicurezza e il comfort: percorsi agevoli, bagni attrezzati, ambienti caldi d’inverno e freschi d’estate.

#### Sezione — Il team

**Titolo:** Le persone di Casa Allegramente

Dietro ogni pasto, ogni sorriso, ogni notte tranquilla c’è un team di persone che ha scelto questo lavoro con il cuore.

**Coordinatrice** — [Nome da inserire]  
Guida la casa con esperienza e umanità. È il primo volto che incontrerete e il riferimento per le famiglie.

**Operatori socio-sanitari (OSS)**  
Presenti h24, formati e attenti. Assistenti al risveglio, al pasto, alla serata — sempre con rispetto e discrezione.

**Cuoca / servizio cucina**  
Prepara ogni giorno piatti genuini, adattati alle esigenze di ognuno. La cucina è il cuore pulsante della casa.

*Nota: inserire foto e nomi solo con consenso scritto.*

#### Sezione — In numeri

**Titolo:** Casa Allegramente in sintesi

| Dato | Valore |
|------|--------|
| Ospiti massimi | [N_OSPITI] |
| Assistenza | 24 ore su 24 |
| Tipologia ospiti | Autosufficienti e parzialmente autosufficienti |
| Età | Generalmente over 65 |
| Anni di attività | [ANNI] |
| Località | Rivarolo Canavese (TO), Piemonte |

#### Sezione — Galleria (`id="galleria"`)

**Titolo:** Gli ambienti in foto  
**Sottotitolo:** Luce naturale, spazi curati, dettagli che fanno casa

**Categorie filtro:** Tutte · Camere · Spazi comuni · Esterni · Dettagli

**Alt text esempi (da adattare alle foto reali):**
- “Sala pranzo apparecchiata con tovaglia e luce naturale — Casa Allegramente”
- “Camera singola luminosa con vista sul giardino — Rivarolo Canavese”
- “Giardino con sedute e fiori — Casa famiglia Canavese”
- “Sala comune con divani e libri — ambiente familiare”

#### CTA finale

**Titolo:** Venite a conoscerci di persona  
**Testo:** Nessuna decisione si prende al telefono. La invitiamo a passare, a vedere gli spazi, a sentire l’atmosfera. Chiami per fissare una visita — senza impegno.  
**CTA primaria:** Chiamaci: [TELEFONO]  
**CTA secondaria:** Scrivici su WhatsApp

---

### 5.3 SERVIZI (`/servizi`)

#### SEO

| Campo | Testo |
|-------|-------|
| **Title** | Servizi — Casa famiglia anziani Rivarolo Canavese |
| **Meta description** | Assistenza h24, vitto, pulizia, attività e progetto individuale. Tutti i servizi di Casa Allegramente, casa famiglia nel Canavese. Info: [TELEFONO] |
| **H1** | Cosa offriamo |

#### Hero

| Elemento | Testo |
|----------|-------|
| **Eyebrow** | I nostri servizi |
| **Headline** | Tutto ciò che serve, con il calore di casa |
| **Subheadline** | Un’assistenza completa e integrata, pensata per chi vuole vivere sereno senza rinunciare all’autonomia. Tutto incluso, spiegato con chiarezza. |
| **CTA** | Chiedi informazioni — [TELEFONO] |

#### Sezione — Intro

**Titolo:** Un’accoglienza a 360 gradi

In Casa Allegramente non deve pensare a nulla. Vitto, pulizia, assistenza, attività: ogni servizio è parte di un unico abbraccio, pensato per farLa sentire a casa — non in un istituto.

#### Sezione — Griglia servizi (6 blocchi)

---

**Servizio 1 — Assistenza 24 ore su 24**

*Presenza discreta e continua, giorno e notte.*

Il nostro personale è presente ogni ora del giorno e della notte — non per sostituire la Sua autonomia, ma per supportarla. Un’assistenza pensata per chi vuole continuare a vivere con libertà, sapendo che c’è sempre qualcuno a portata di mano.

- Presenza continua h24
- Mai invasivi
- Rispetto dell’autonomia
- Reperibilità notturna

---

**Servizio 2 — Vitto e alimentazione**

*Pasti preparati ogni giorno, con cura e attenzione.*

La cucina è il cuore della nostra casa. I pasti vengono preparati quotidianamente con ingredienti freschi, seguendo le indicazioni del medico e — soprattutto — le preferenze di ogni ospite. Diete speciali, menù stagionali, il gusto di mangiare bene insieme.

- Cucina fresca ogni giorno
- Diete personalizzate
- Tre pasti + merende
- Prodotti del territorio canavesano

---

**Servizio 3 — Pulizia e igiene**

*Camere e spazi comuni curati ogni giorno.*

La pulizia è un diritto, non un optional. Le camere vengono sistemate ogni giorno, la biancheria cambiata regolarmente. L’igiene personale è supportata con rispetto e delicatezza.

- Pulizia giornaliera della camera
- Cambio biancheria
- Igiene personale assistita
- Spazi comuni sempre in ordine

---

**Servizio 4 — Progetto di vita individuale**

*Un percorso su misura, costruito insieme.*

Ogni persona che arriva da noi porta con sé una storia unica. Il progetto di vita individuale nasce dall’ascolto: abitudini, passioni, esigenze di salute, obiettivi di benessere. Lo costruiamo con Lei e con la Sua famiglia, e lo rivediamo periodicamente.

- Piano personalizzato
- Coinvolgimento della famiglia
- Rivalutazione periodica
- Obiettivi condivisi

---

**Servizio 5 — Attività e socialità**

*Laboratori, musica, passeggiate: ogni giorno qualcosa da vivere.*

L’attività è vita. Ogni settimana proponiamo laboratori creativi, ginnastica dolce, letture ad alta voce, musica e momenti di socializzazione. Le uscite nel paese e nel Canavese fanno parte della routine.

- Laboratori manuali e creativi
- Ginnastica dolce e movimento
- Attività cognitive e giochi
- Passeggiate e uscite nel territorio

---

**Servizio 6 — Alloggio e comfort**

*Camere accoglienti, spazi comuni luminosi, giardino.*

La nostra casa famiglia a Rivarolo Canavese offre camere singole e doppie, bagni attrezzati, spazi comuni caldi e un giardino dove trascorrere le belle giornate. Tutto pensato per il comfort e la sicurezza.

- Camere singole e doppie
- Bagni accessibili
- Giardino e spazi all’aperto
- Ambiente a dimensione umana

---

#### Sezione — Cosa è incluso

**Titolo:** Cosa è incluso nel soggiorno

- Alloggio in camera singola o doppia
- Vitto completo (colazione, pranzo, cena + merende)
- Pulizia camera e spazi comuni
- Cambio biancheria
- Assistenza discreta 24 ore su 24
- Attività ricreative e sociali
- Progetto di vita individuale
- Coinvolgimento attivo della famiglia

**Nota prezzi (bozza — da decidere con cliente):**  
Per informazioni sui costi e le modalità di pagamento, La invitiamo a contattarci al [TELEFONO]. Saremo trasparenti fin dal primo colloquio.

#### Sezione — FAQ servizi

**FAQ 1:** Cosa deve portare l’ospite in casa?  
Risposta: Abiti personali, oggetti affettivi (foto, libri, piccoli arredi). La camera è già arredata e pronta — aggiunga ciò che La fa sentire a casa.

**FAQ 2:** Siete convenzionati con l’ASL?  
Risposta: [Da confermare con cliente — inserire risposta accurata]

**FAQ 3:** Come vengono gestite le diete speciali?  
Risposta: Seguiamo le indicazioni del medico e rispettiamo le preferenze personali. Ogni menù è adattabile.

**FAQ 4:** I familiares possono partecipare ai pasti?  
Risposta: Con piacere, su accordo. La famiglia è parte della nostra casa.

#### CTA finale

**Titolo:** Ha domande sui nostri servizi?  
**Testo:** Siamo a disposizione per spiegare ogni dettaglio. Chiami, scriva o — meglio ancora — venga a trovarci.  
**CTA primaria:** Chiamaci: [TELEFONO]  
**CTA secondaria:** Prenota una visita via WhatsApp

---

### 5.4 LA VITA QUOTIDIANA (`/la-vita-in-casa`)

#### SEO

| Campo | Testo |
|-------|-------|
| **Title** | La vita in casa — Giornata tipo Casa Allegramente |
| **Meta description** | Com’è una giornata in casa famiglia a Rivarolo Canavese? Routine, pasti, attività e convivialità a Casa Allegramente. Scopri la vita quotidiana. |
| **H1** | Una giornata con noi |

#### Hero

| Elemento | Testo |
|----------|-------|
| **Eyebrow** | La vita quotidiana |
| **Headline** | Un ritmo sereno, fatto di abitudini e piccoli piaceri |
| **Subheadline** | Niente sirene, niente corridoio. Solo il ritmo tranquillo di una casa dove ogni momento ha il suo sapore — dal caffè del mattino alla buonanotte. |
| **CTA** | Venite a viverlo di persona — [TELEFONO] |

#### Sezione — Intro

**Titolo:** La quotidianità che fa casa

In Casa Allegramente i giorni non sono uguali — ma hanno un ritmo che rassicura. Abitudini rispettate, pasti condivisi, momenti di quiete e momenti di allegria. Le raccontiamo così come sono, perché sapere cosa aspettarsi fa stare tranquilli.

#### Sezione — Timeline giornata (8 slot)

**Titolo sezione:** Dall’alba alla buonanotte

---

**07:30 — Il risveglio**  
*Fase: Mattina*

Il giorno inizia con calma. Assistenza discreta al risveglio, igiene personale, la cura di prepararsi con dignità e senza fretta. Ognuno al proprio ritmo.

---

**08:30 — La colazione**  
*Fase: Mattina*

Prodotti freschi, caffè caldo, la sala pranzo che profuma di casa. Un momento semplice ma fondamentale per iniziare la giornata in compagnia.

---

**10:00 — La mattina attiva**  
*Fase: Mattina*

Ginnastica dolce, una passeggiata in giardino o per le strade di Rivarolo, un laboratorio creativo. La mattina è pensata su misura per ogni ospite.

---

**12:30 — Il pranzo**  
*Fase: Mezzogiorno*

Il pasto principale è un rito. Cucina preparata al momento, menù variato, tovaglie vere e il piacere di stare a tavola senza fretta.

---

**15:00 — Il riposo**  
*Fase: Pomeriggio*

Ogni ospite vive il pomeriggio come preferisce: nella propria camera, su una poltrona al sole, con un libro. Nessun obbligo, solo pace.

---

**16:30 — Merenda e socialità**  
*Fase: Pomeriggio*

Un momento tutto nostro. Qualcosa da sgranocchiare, un bicchiere di succo, tante chiacchiere. Il tempo rallenta e la casa diventa ancora più familiare.

---

**19:00 — La cena**  
*Fase: Sera*

Cena leggera, atmosfera raccolta. La giornata si chiude dolcemente a tavola, con le luci soffuse e le parole di sempre.

---

**21:00 — La buonanotte**  
*Fase: Sera*

Assistenza serale, cura personale, un pensiero gentile del personale. Ogni ospite va a riposare sapendo che qualcuno veglia su di Lui tutta la notte.

---

#### Sezione — Attività settimanali

**Titolo:** Ogni settimana, qualcosa di nuovo

| Attività | Descrizione breve |
|----------|-------------------|
| Laboratorio creativo | Pittura, collage, lavori manuali — creatività e convivialità |
| Ginnastica dolce | Esercizi guidati per mantenersi agili con leggerezza |
| Lettura ad alta voce | Racconti, poesie, giornali — la voce che unisce |
| Giochi di società | Carte, scarabeo, domino — il piacere di giocare insieme |
| Musica | Ascolto, canti, talvolta un accordatore e qualche canzone |
| Passeggiata | Nel giardino, per Rivarolo, verso le colline del Canavese |

#### Sezione — Convivialità

**Titolo:** I pasti, il cuore della casa

A Casa Allegramente si mangia insieme. La tavola è il luogo dove ci si conosce, si chiacchiera, si festeggia. I compleanni si celebrano con una torta. Le feste di Natale e Pasqua si vivono in famiglia — quella vera e quella allargata.

I familiares sono sempre benvenuti. Un pranzo domenicale con i nipoti, un caffè con la figlia: sono momenti che contano.

#### Sezione — Stagionalità

**Titolo:** Le stagioni in casa

**Estate**  
Pranzo in giardino, passeggiate all’ombra, gelsomino e serate fresche sulla terrazza.

**Autunno**  
Castagne, foglie nel giardino, laboratori con i colori caldi della stagione.

**Inverno**  
Sale accoglienti, tisane calde, giochi e letture davanti al calore.

**Primavera**  
Fiori in giardino, passeggiate verso le colline canavesane, rinascita e luce.

#### CTA finale

**Titolo:** Vuole vedere con i Suoi occhi?  
**Testo:** La giornata tipo si capisce meglio visitandoci. La invitiamo a passare un pomeriggio con noi — senza impegno, con un caffè e una chiacchiera.  
**CTA primaria:** Chiamaci per una visita: [TELEFONO]  
**CTA secondaria:** Come raggiungerci → `/dove-siamo`

---

### 5.5 DOVE SIAMO (`/dove-siamo`)

#### SEO

| Campo | Testo |
|-------|-------|
| **Title** | Dove siamo — Casa Allegramente, Rivarolo Canavese (TO) |
| **Meta description** | Casa Allegramente si trova a Rivarolo Canavese, nel Canavese (TO). Mappa, indicazioni e contatti. Casa famiglia per anziani — chiama [TELEFONO] |
| **H1** | Rivarolo Canavese |

#### Hero

| Elemento | Testo |
|----------|-------|
| **Eyebrow** | Dove siamo |
| **Headline** | Nel cuore del Canavese, vicino a chi La ama |
| **Subheadline** | Casa Allegramente è a Rivarolo Canavese, in provincia di Torino. Un paese del Canavese dove la comunità conta — e dove i Suoi cari possono venirLa a trovare facilmente. |
| **CTA** | Apri in Google Maps |

#### Sezione — Indirizzo

**Titolo:** Il nostro indirizzo

**Casa Allegramente**  
[INDIRIZZO]  
10086 Rivarolo Canavese (TO)  
Piemonte, Italia

**CTA:** Indicazioni stradali → link Google Maps

#### Sezione — Mappa

**Titolo:** Ci trovi qui  
**Alt iframe mappa:** Mappa interattiva — Casa Allegramente, Rivarolo Canavese

#### Sezione — Come arrivare

**Titolo:** Come raggiungerci

**In auto**  
Da Torino: seguire la SS460 in direzione Rivarolo Canavese / Ivrea. [Integrare indicazioni precise con cliente.]  
Parcheggio disponibile nelle vicinanze della struttura.

**In treno**  
Stazione di Rivarolo Canavese sulla linea Torino–Ivrea. Dalla stazione, [X minuti a piedi / breve tragitto in auto — da confermare].

**In autobus**  
Collegamenti da Torino e dai comuni del Canavese. [Inserire linee con cliente.]

#### Sezione — Il territorio

**Titolo:** Rivarolo Canavese e il Canavese

Rivarolo Canavese è un comune del Canavese, ai piedi delle Alpi piemontesi, a circa 30 km da Torino. Un paese a dimensione umana, con negozi, servizi, parchi e una comunità attiva.

Per i nostri ospiti, restare nel Canavese spesso significa restare vicini a vecchi amici, al parrucchiere di sempre, alla piazza del mercato. Per le famiglie, significa una visita domenicale senza ore di viaggio.

#### Sezione — Contatti e orari

**Titolo:** Contatti

| Canale | Dettaglio |
|--------|-----------|
| **Telefono** | [TELEFONO] |
| **WhatsApp** | [TELEFONO] — rispondiamo nei giorni feriali |
| **Email** | [EMAIL] |
| **Orari ufficio / visite** | Lunedì–Domenica, 9:00–20:00 |

**Nota visite:** La invitiamo a chiamare prima della visita, così possiamo accoglierLa con calma e dedicarLe il tempo che merita.

#### Sezione — Parcheggio

**Titolo:** Parcheggio

Parcheggio disponibile [descrizione da confermare — es. “davanti alla struttura” / “in via adiacente”]. Per esigenze di mobilità ridotta, La preghiamo di segnalarcelo al telefono: organizzeremo l’accoglienza al meglio.

#### CTA finale

**Titolo:** La porta è aperta  
**Testo:** Chiami per fissare un appuntamento o passi quando preferisce. Siamo qui, a Rivarolo Canavese, pronti ad accoglierLa.  
**CTA primaria:** Chiama ora: [TELEFONO]  
**CTA secondaria:** Scrivici su WhatsApp  
**CTA terziaria:** Invia un’email → `mailto:[EMAIL]`

---

## 6. Microcopy

### 6.1 Navigazione principale

| Label | href | aria-label (se diverso) |
|-------|------|-------------------------|
| Home | `/` | Vai alla home |
| Chi siamo | `/chi-siamo` | La nostra casa |
| Servizi | `/servizi` | Cosa offriamo |
| La vita in casa | `/la-vita-in-casa` | Una giornata con noi |
| Dove siamo | `/dove-siamo` | Rivarolo Canavese |
| Chiama | `tel:[TELEFONO_RAW]` | Chiama Casa Allegramente |

**Menu mobile (hamburger):**
- Titolo overlay: Menu
- Sottotitolo: Casa Allegramente · Rivarolo Canavese
- Footer menu: [TELEFONO] · [EMAIL]

### 6.2 Footer

**Colonna 1 — Brand**
```
Casa Allegramente
Dove ogni giorno è sentirsi a casa

Casa famiglia per anziani
Rivarolo Canavese (TO)
```

**Colonna 2 — Navigazione**
- Titolo: Esplora
- Link: Home · Chi siamo · Servizi · La vita in casa · Dove siamo

**Colonna 3 — Contatti**
- Titolo: Contatti
- Telefono: [TELEFONO]
- WhatsApp: Scrivici
- Email: [EMAIL]
- Indirizzo: [INDIRIZZO], Rivarolo Canavese (TO)
- Orari: Lun–Dom 9:00–20:00

**Colonna 4 — Legale**
- Titolo: Informazioni
- Privacy Policy → `/privacy`
- Cookie Policy → `/cookie`
- © 2026 Casa Allegramente · Tutti i diritti riservati
- P.IVA: [DA INSERIRE]

### 6.3 Floating CTA (mobile)

| Elemento | Testo | aria-label |
|----------|-------|------------|
| FAB telefono | Icona telefono | Chiama Casa Allegramente |
| Tooltip (opz.) | Chiamaci | — |

### 6.4 Breadcrumb

Formato: `Home > [Nome pagina] [--]]`

Esempi:
- Home > Chi siamo
- Home > Servizi
- Home > La vita in casa
- Home > Dove siamo

### 6.5 CTA — testi standard

| Tipo | Testo | Azione |
|------|-------|--------|
| Primaria | Chiamaci: [TELEFONO] | `tel:` |
| Primaria alt. | Chiamaci per una visita | `tel:` |
| Secondaria | Scrivici su WhatsApp | `https://wa.me/[WHATSAPP]` |
| Secondaria alt. | Invia un’email | `mailto:` |
| Link interno | Scopri di più | href pagina |
| Link interno | Venite a trovarci | `/dove-siamo` |
| Visita | Prenota una visita | `tel:` (mai form) |

### 6.6 Etichette accessibilità (ARIA)

| Elemento | aria-label / alt |
|----------|------------------|
| Logo header | Casa Allegramente — torna alla home |
| Skip link | Vai al contenuto principale |
| Nav principale | Navigazione principale |
| Menu hamburger | Apri menu di navigazione |
| Chiudi menu | Chiudi menu |
| Icona telefono header | Chiama [TELEFONO] |
| Icona WhatsApp | Scrivi su WhatsApp |
| Icona email | Invia email a [EMAIL] |
| Freccia/carousel | Slide successiva / precedente |
| FAQ accordion | Espandi risposta: [domanda] |
| Galleria lightbox | Ingrandisci foto: [alt] |
| Mappa | Mappa — Casa Allegramente, Rivarolo Canavese |
| Link esterno Maps | Apri indicazioni in Google Maps (si apre in nuova finestra) |
| Pagina corrente nav | aria-current="page" |

### 6.7 Pagina 404

**Titolo:** Pagina non trovata  
**Testo:** Sembra che questa pagina non esista più — o forse si è smarrita, come capita a tutti. Torni alla home, o chiami pure: siamo sempre felici di sentirLa.  
**CTA primaria:** Torna alla home  
**CTA secondaria:** Chiama [TELEFONO]

### 6.8 Open Graph (default)

| Campo | Valore |
|-------|--------|
| og:title | Casa Allegramente — Casa famiglia anziani a Rivarolo Canavese |
| og:description | Accoglienza calda nel Canavese. Assistenza h24, pochi ospiti, tanta umanità. |
| og:locale | it_IT |
| og:site_name | Casa Allegramente |

---

## 7. Glossario — parole da usare e evitare

| ✅ Usare | ❌ Evitare | Motivo |
|---------|-----------|--------|
| casa famiglia | RSA, casa di riposo | Posizionamento caldo |
| ospite | paziente, degente | Non siamo un ospedale |
| accoglienza | ricovero, ammissione | Tono familiare |
| soggiorno | degenza | Neutralità positiva |
| accompagnare | assistere (solo) | Rispetto autonomia |
| signora / signor | l’anziano (generic) | Dignità individuale |
| familiares | visitatori | Famiglia coinvolta |
| personale / operatori | infermieri (se non infermieri) | Precisione ruoli |
| Canavese / Rivarolo | “zona Torino” generica | Radicamento locale |
| venite a trovarci | compila il form | No form nel sito |

---

## 8. Prossimi passi

1. **Validazione cliente** — tagline, numeri ([N_OSPITI], [ANNI]), dati legali, prezzi sì/no
2. **Inserimento contatti reali** — telefono, WhatsApp, email, indirizzo, coordinate GPS
3. **Testimonianze** — approvazione scritta con nomi/iniziali
4. **Trascrizione in `content.ts`** — agente dev popola da questo documento
5. **Revisione SEO** — verifica lunghezza title/description con tool (Screaming Frog, etc.)
6. **Lettura ad alta voce** — test con 1–2 familiares target per tono e chiarezza

---

*Documento 06 — Copy & Content Strategy · Casa Allegramente · v1.0*
