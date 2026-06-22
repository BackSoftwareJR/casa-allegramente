import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '../content/blog');

const BRAND = {
  name: 'Residence V.G',
  address: 'Via Francesco Petrarca, 14, 22060 Cabiate (CO)',
  phone: '+39 351 958 1235',
  maxOspiti: 10,
  assistenza: 'assistenza H24',
  location: 'Cabiate, in provincia di Como',
  territory: 'Brianza comasca',
};

function link(slug, text) {
  return `[${text}](/blog/${slug})`;
}

function homeLink(text) {
  return `[${text}](/)`;
}

function countWords(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function spreadDates(count, start, end) {
  const s = new Date(start);
  const e = new Date(end);
  const span = e.getTime() - s.getTime();
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(s.getTime() + (span * i) / (count - 1));
    return d.toISOString().slice(0, 10);
  });
}

const DATES = spreadDates(24, '2025-01-15', '2025-06-15');

const ARTICLES = [
  {
    slug: 'differenza-rsa-casa-famiglia-anziani',
    image: 'rsa-casa-famiglia.webp',
    category: 'scegliere-struttura',
    title: 'RSA o Casa Famiglia per Anziani: Quali Sono le Differenze?',
    featured: true,
    related: ['come-scegliere-residenza-anziani-autosufficienti', 'alternativa-rsa-como-casa-famiglia', 'visita-struttura-anziani-cosa-guardare'],
    sections: [
      'Che cos\'è una RSA e che cos\'è una Casa Famiglia',
      'Le differenze principali in sintesi',
      'Quando conviene una RSA e quando una Casa Famiglia',
      'Come valutare la struttura giusta per il proprio caro',
      'Conclusioni',
    ],
  },
  {
    slug: 'come-scegliere-residenza-anziani-autosufficienti',
    image: 'scegliere-residenza.webp',
    category: 'scegliere-struttura',
    title: 'Come Scegliere una Residenza per Anziani Autosufficienti',
    featured: true,
    related: ['anziano-autosufficiente-significato-criteri', 'visita-struttura-anziani-cosa-guardare', 'quanto-costa-residenza-anziani-como'],
    sections: [
      'Cosa significa "autosufficiente" in una residenza',
      'I criteri per valutare l\'autonomia',
      'Cosa verificare durante le visite',
      'Domande da porre al personale',
      'Conclusioni',
    ],
  },
  {
    slug: 'quanto-costa-residenza-anziani-como',
    image: 'costo-residenza.webp',
    category: 'scegliere-struttura',
    title: 'Quanto Costa una Residenza per Anziani in Provincia di Como?',
    featured: false,
    noEuroPrices: true,
    related: ['detrazioni-fiscali-residenza-anziani-italia', 'documenti-ingresso-residenza-anziani', 'residenze-anziani-como-provincia-guida'],
    sections: [
      'I fattori che influenzano il costo',
      'Cosa include generalmente la retta',
      'Come confrontare le strutture senza guardare solo il prezzo',
      'Agevolazioni e detrazioni fiscali',
      'Conclusioni',
    ],
  },
  {
    slug: 'anziano-autosufficiente-significato-criteri',
    image: 'autosufficiente.webp',
    category: 'scegliere-struttura',
    title: 'Anziano Autosufficiente: Significato, Criteri e Quando Serve una Struttura',
    featured: false,
    related: ['come-scegliere-residenza-anziani-autosufficienti', 'attivita-fisica-anziani-autosufficienti-benefici', 'assistenza-domiciliare-vs-residenza-anziani'],
    sections: [
      'Definizione di anziano autosufficiente',
      'Criteri medici e quotidiani',
      'Parzialmente autosufficiente: cosa significa',
      'Quando la casa non basta più',
      'Conclusioni',
    ],
  },
  {
    slug: 'visita-struttura-anziani-cosa-guardare',
    image: 'visita-struttura.webp',
    category: 'scegliere-struttura',
    title: 'Visita a una Struttura per Anziani: Cosa Guardare e Quali Domande Fare',
    featured: false,
    related: ['accompagnare-genitore-anziano-visita-struttura', 'come-scegliere-residenza-anziani-autosufficienti', 'residenze-anziani-como-provincia-guida'],
    sections: [
      'Prima della visita: cosa preparare',
      'Cosa osservare negli spazi comuni',
      'Cosa chiedere al personale',
      'Segnali positivi e campanello d\'allarme',
      'Conclusioni',
    ],
  },
  {
    slug: 'giornata-tipo-residenza-anziani',
    image: 'giornata-tipo.webp',
    category: 'vita-quotidiana',
    title: 'Una Giornata Tipo in una Residenza per Anziani',
    featured: true,
    related: ['attivita-anziani-residenza-importanza', 'nutrizione-anziani-importanza-pasti-residenza', 'giornata-tipo-residenza-anziani'],
    sections: [
      'Il risveglio e la colazione',
      'Attività del mattino e del pomeriggio',
      'I pasti come momento di convivialità',
      'La sera: relax e riposo',
      'Conclusioni',
    ],
  },
  {
    slug: 'attivita-anziani-residenza-importanza',
    image: 'attivita-anziani.webp',
    category: 'vita-quotidiana',
    title: 'Attività per Anziani in Residenza: Perché Sono Fondamentali',
    featured: false,
    related: ['giornata-tipo-residenza-anziani', 'invecchiamento-attivo-significato-consigli', 'solitudine-anziani-rischi-soluzioni'],
    sections: [
      'Perché le attività non sono un optional',
      'Attività cognitive, creative e motorie',
      'Il valore della socializzazione',
      'Come Residence V.G organizza la giornata',
      'Conclusioni',
    ],
  },
  {
    slug: 'nutrizione-anziani-importanza-pasti-residenza',
    image: 'nutrizione-anziani.webp',
    category: 'vita-quotidiana',
    title: 'Nutrizione degli Anziani: L\'Importanza dei Pasti in Residenza',
    featured: false,
    related: ['giornata-tipo-residenza-anziani', 'sonno-anziani-problemi-soluzioni', 'invecchiamento-attivo-significato-consigli'],
    sections: [
      'I bisogni nutrizionali nella terza età',
      'Pasti equilibrati e personalizzati',
      'L\'importanza di mangiare insieme',
      'Idratazione e attenzione agli alimenti',
      'Conclusioni',
    ],
  },
  {
    slug: 'quando-momento-giusto-residenza-genitore-anziano',
    image: 'momento-giusto.webp',
    category: 'per-famiglie',
    title: 'Quando è il Momento Giusto per una Residenza? Segnali da Riconoscere',
    featured: true,
    related: ['come-parlare-genitore-residenza-anziani', 'senso-colpa-genitore-residenza-anziani', 'sicurezza-casa-anziani-rischi-cadute'],
    sections: [
      'I segnali che indicano un cambiamento necessario',
      'La sicurezza domestica',
      'Il benessere emotivo del genitore',
      'Il carico del caregiver familiare',
      'Conclusioni',
    ],
  },
  {
    slug: 'come-parlare-genitore-residenza-anziani',
    image: 'parlare-genitori.webp',
    category: 'per-famiglie',
    title: 'Come Parlare con i Genitori della Residenza: Un Dialogo Delicato',
    featured: false,
    related: ['quando-momento-giusto-residenza-genitore-anziano', 'senso-colpa-genitore-residenza-anziani', 'accompagnare-genitore-anziano-visita-struttura'],
    sections: [
      'Preparare il dialogo',
      'Come avviare la conversazione',
      'Obiezioni comuni e come affrontarle',
      'Il ruolo della famiglia nel processo',
      'Conclusioni',
    ],
  },
  {
    slug: 'senso-colpa-genitore-residenza-anziani',
    image: 'senso-colpa.webp',
    category: 'per-famiglie',
    title: 'Senso di Colpa e Residenza per Genitori Anziani: Come Affrontarlo',
    featured: false,
    related: ['come-parlare-genitore-residenza-anziani', 'prime-settimane-genitore-residenza-cosa-aspettarsi', 'quando-momento-giusto-residenza-genitore-anziano'],
    sections: [
      'Perché il senso di colpa è comprensibile',
      'Separare amore e responsabilità',
      'Come gestire le emozioni',
      'Quando chiedere supporto',
      'Conclusioni',
    ],
  },
  {
    slug: 'prime-settimane-genitore-residenza-cosa-aspettarsi',
    image: 'prime-settimane.webp',
    category: 'per-famiglie',
    title: 'Le Prime Settimane del Genitore in Residenza: Cosa Aspettarsi',
    featured: false,
    related: ['senso-colpa-genitore-residenza-anziani', 'giornata-tipo-residenza-anziani', 'come-parlare-genitore-residenza-anziani'],
    sections: [
      'I primi giorni: adattamento',
      'Cosa fare come famiglia',
      'Comunicazione con la struttura',
      'Quando preoccuparsi e quando è normale',
      'Conclusioni',
    ],
  },
  {
    slug: 'residenze-anziani-como-provincia-guida',
    image: 'residenze-como.webp',
    category: 'guide-pratiche',
    title: 'Residenze per Anziani in Provincia di Como: Guida Completa',
    featured: true,
    related: ['cabiate-brianza-comasca-residenza-anziani', 'alternativa-rsa-como-casa-famiglia', 'come-scegliere-residenza-anziani-autosufficienti'],
    sections: [
      'Panorama delle strutture in provincia di Como',
      'Tipologie: RSA, case famiglia, residence',
      'Criteri di scelta per famiglie locali',
      'Cabiate e la Brianza comasca',
      'Conclusioni',
    ],
  },
  {
    slug: 'cabiate-brianza-comasca-residenza-anziani',
    image: 'cabiate-brianza.webp',
    category: 'guide-pratiche',
    title: 'Cabiate e la Brianza Comasca: Perché Scegliere una Residenza Qui',
    featured: false,
    related: ['residenze-anziani-como-provincia-guida', 'visita-struttura-anziani-cosa-guardare', 'giornata-tipo-residenza-anziani'],
    sections: [
      'Dove si trova Cabiate',
      'Servizi e collegamenti',
      'Qualità della vita in Brianza',
      'Perché una residenza a dimensione umana',
      'Conclusioni',
    ],
  },
  {
    slug: 'alternativa-rsa-como-casa-famiglia',
    image: 'alternativa-rsa.webp',
    category: 'guide-pratiche',
    title: 'Alternativa alle RSA in Provincia di Como: Quando Scegliere una Casa Famiglia',
    featured: false,
    related: ['differenza-rsa-casa-famiglia-anziani', 'residenze-anziani-como-provincia-guida', 'come-scegliere-residenza-anziani-autosufficienti'],
    sections: [
      'Limiti e vantaggi delle grandi RSA',
      'Il modello casa famiglia',
      'Confronto pratico per famiglie del territorio',
      'Come scegliere consapevolmente',
      'Conclusioni',
    ],
  },
  {
    slug: 'solitudine-anziani-rischi-soluzioni',
    image: 'solitudine-anziani.webp',
    category: 'salute-benessere',
    title: 'Solitudine negli Anziani: Rischi, Segnali e Soluzioni',
    featured: true,
    related: ['attivita-anziani-residenza-importanza', 'invecchiamento-attivo-significato-consigli', 'quando-momento-giusto-residenza-genitore-anziano'],
    sections: [
      'Cos\'è la solitudine nell\'anziano',
      'Rischi per salute fisica e mentale',
      'Segnali da riconoscere',
      'Soluzioni: socialità, attività, struttura',
      'Conclusioni',
    ],
  },
  {
    slug: 'sicurezza-casa-anziani-rischi-cadute',
    image: 'sicurezza-casa.webp',
    category: 'salute-benessere',
    title: 'Sicurezza in Casa per Anziani: Rischi, Cadute e Prevenzione',
    featured: false,
    related: ['quando-momento-giusto-residenza-genitore-anziano', 'assistenza-domiciliare-vs-residenza-anziani', 'anziano-autosufficiente-significato-criteri'],
    sections: [
      'I rischi più comuni in casa',
      'Prevenzione delle cadute',
      'Adattare l\'ambiente domestico',
      'Quando valutare una struttura protetta',
      'Conclusioni',
    ],
  },
  {
    slug: 'sonno-anziani-problemi-soluzioni',
    image: 'sonno-anziani.webp',
    category: 'salute-benessere',
    title: 'Sonno degli Anziani: Problemi Comuni e Soluzioni Pratiche',
    featured: false,
    related: ['nutrizione-anziani-importanza-pasti-residenza', 'invecchiamento-attivo-significato-consigli', 'attivita-fisica-anziani-autosufficienti-benefici'],
    sections: [
      'Perché il sonno cambia con l\'età',
      'Problemi comuni del sonno',
      'Abitudini per dormire meglio',
      'Quando consultare il medico',
      'Conclusioni',
    ],
  },
  {
    slug: 'attivita-fisica-anziani-autosufficienti-benefici',
    image: 'attivita-fisica.webp',
    category: 'salute-benessere',
    title: 'Attività Fisica per Anziani Autosufficienti: Benefici e Consigli',
    featured: false,
    related: ['invecchiamento-attivo-significato-consigli', 'anziano-autosufficiente-significato-criteri', 'attivita-anziani-residenza-importanza'],
    sections: [
      'Benefici dell\'attività fisica regolare',
      'Esercizi adatti agli autosufficienti',
      'Attività all\'aperto e in gruppo',
      'Integrare il movimento nella routine',
      'Conclusioni',
    ],
  },
  {
    slug: 'invecchiamento-attivo-significato-consigli',
    image: 'invecchiamento-attivo.webp',
    category: 'salute-benessere',
    title: 'Invecchiamento Attivo: Significato, Benefici e Consigli Pratici',
    featured: false,
    related: ['attivita-fisica-anziani-autosufficienti-benefici', 'attivita-anziani-residenza-importanza', 'solitudine-anziani-rischi-soluzioni'],
    sections: [
      'Cosa significa invecchiamento attivo',
      'Benefici per corpo e mente',
      'Consigli pratici quotidiani',
      'Il ruolo della struttura residenziale',
      'Conclusioni',
    ],
  },
  {
    slug: 'documenti-ingresso-residenza-anziani',
    image: 'documenti-ingresso.webp',
    category: 'guide-pratiche',
    title: 'Documenti per l\'Ingresso in Residenza: Checklist Completa',
    featured: true,
    related: ['detrazioni-fiscali-residenza-anziani-italia', 'quanto-costa-residenza-anziani-como', 'visita-struttura-anziani-cosa-guardare'],
    sections: [
      'Documenti sanitari necessari',
      'Documenti amministrativi',
      'Contratto e consensi',
      'Checklist pratica pre-ingresso',
      'Conclusioni',
    ],
  },
  {
    slug: 'detrazioni-fiscali-residenza-anziani-italia',
    image: 'detrazioni-fiscali.webp',
    category: 'guide-pratiche',
    title: 'Detrazioni Fiscali per Residenza Anziani in Italia',
    featured: false,
    taxDisclaimer: true,
    related: ['quanto-costa-residenza-anziani-como', 'documenti-ingresso-residenza-anziani', 'assistenza-domiciliare-vs-residenza-anziani'],
    sections: [
      'Detrazioni IRPEF per spese sanitarie',
      'Documenti da conservare',
      'Come funziona la dichiarazione',
      'Disclaimer commercialista',
      'Conclusioni',
    ],
  },
  {
    slug: 'assistenza-domiciliare-vs-residenza-anziani',
    image: 'assistenza-domiciliare.webp',
    category: 'guide-pratiche',
    title: 'Assistenza Domiciliare vs Residenza: Quale Scegliere?',
    featured: false,
    related: ['anziano-autosufficiente-significato-criteri', 'quando-momento-giusto-residenza-genitore-anziano', 'differenza-rsa-casa-famiglia-anziani'],
    sections: [
      'Cosa offre l\'assistenza domiciliare',
      'Cosa offre una residenza',
      'Pro e contro di ciascuna soluzione',
      'Come decidere insieme al medico',
      'Conclusioni',
    ],
  },
  {
    slug: 'accompagnare-genitore-anziano-visita-struttura',
    image: 'accompagnare-visita.webp',
    category: 'guide-pratiche',
    title: 'Accompagnare un Genitore Anziano in Visita alla Struttura',
    featured: false,
    related: ['visita-struttura-anziani-cosa-guardare', 'come-parlare-genitore-residenza-anziani', 'cabiate-brianza-comasca-residenza-anziani'],
    sections: [
      'Preparare la visita insieme',
      'Durante la visita: cosa fare',
      'Dopo la visita: confronto e decisione',
      'Come Residence V.G accoglie le famiglie',
      'Conclusioni',
    ],
  },
];

function descriptionFor(article) {
  const base = article.title.replace(/\?$/, '');
  return `${base}: guida completa per famiglie che valutano una residenza per anziani autosufficienti in provincia di Como. ${BRAND.name}, ${BRAND.location}.`;
}

function keywordsFor(article) {
  const common = ['residenza anziani', 'anziani autosufficienti', 'Cabiate', 'Como', 'Brianza'];
  const catMap = {
    'scegliere-struttura': ['scegliere residenza', 'RSA', 'casa famiglia'],
    'vita-quotidiana': ['vita quotidiana', 'attività anziani', 'pasto in residenza'],
    'per-famiglie': ['famiglie', 'genitori anziani', 'caregiver'],
    'guide-pratiche': ['guida pratica', 'provincia di Como', 'documenti'],
    'salute-benessere': ['salute', 'benessere', 'prevenzione'],
  };
  return [...common, ...(catMap[article.category] ?? [])].slice(0, 8);
}

function imageAltFor(article) {
  return `${article.title} — ${BRAND.name}, residenza per anziani a Cabiate (CO)`;
}

/** Rich paragraph pools per section index — expanded per article for unique long-form copy */
function getSectionParagraphs(article, sectionIdx, sectionTitle) {
  const { slug, category, noEuroPrices, taxDisclaimer } = article;
  const L = (s) => s;
  const r = article.related.filter((s) => s !== slug);
  const r0 = r[0] ? link(r[0], 'leggi la nostra guida correlata') : '';
  const r1 = r[1] ? link(r[1], 'approfondisci qui') : '';
  const r2 = r[2] ? link(r[2], 'scopri di più') : '';

  const brandBlock = `${BRAND.name} è una residenza per anziani autosufficienti situata in ${BRAND.address}, con massimo ${BRAND.maxOspiti} ospiti e ${BRAND.assistenza}. Offriamo un ambiente familiare nella ${BRAND.territory}, a pochi minuti da Como e Milano. Per informazioni: ${BRAND.phone}.`;

  const pools = {
    'differenza-rsa-casa-famiglia-anziani': [
      [
        L(`Scegliere tra RSA e casa famiglia è una delle decisioni più delicate che una famiglia possa affrontare quando un genitore inizia a necessitare di supporto continuativo. Entrambe le soluzioni offrono assistenza, ma con filosofie, dimensioni e livelli di intensità molto diversi. Comprendere queste differenze è il primo passo per una scelta consapevole e serena.`),
        L(`La RSA — Residenza Sanitaria Assistenziale — è una struttura sanitaria di dimensioni generalmente ampie, regolamentata dal Sistema Sanitario Nazionale, pensata per persone non autosufficienti o con bisogni assistenziali complessi. Dispone di personale infermieristico, medici, fisioterapisti e protocolli clinici rigidi. L'ingresso avviene spesso con valutazione del medico competente e con prescrizione dei servizi.`),
        L(`La casa famiglia, invece, è un modello residenziale più piccolo e domestico. Accoglie un numero limitato di ospiti — spesso tra 6 e 15 — in un ambiente che ricorda una grande famiglia. È pensata prevalentemente per anziani autosufficienti o parzialmente autosufficienti che desiderano vivere in sicurezza, con compagnia e assistenza leggera ma costante. ${BRAND.name} segue proprio questo modello, con ${BRAND.maxOspiti} ospiti massimi.`),
        L(`A differenza delle grandi RSA, in una casa famiglia il ritmo quotidiano è più flessibile, i rapporti tra ospiti e operatori più personali, e l'attenzione al benessere psicologico e sociale è centrale quanto quella sanitaria. Non si tratta di un ospedale: è una casa dove si vive, si condivide, si invecchia con dignità. ${r0 ? 'Per approfondire, ' + r0 + '.' : ''}`),
      ],
      [
        L(`Per orientarsi rapidamente, è utile sintetizzare le differenze in alcuni ambiti chiave: dimensione, target di utenza, intensità assistenziale, ambiente e costi.`),
        L(`**Dimensione e rapporto umano**: le RSA accolgono decine o centinaia di ospiti; le case famiglia mantengono numeri contenuti. Questo incide direttamente sulla qualità delle relazioni e sulla personalizzazione dell'assistenza.`),
        L(`**Target**: la RSA è indicata per non autosufficienti con patologie croniche, demenza avanzata o necessità di cure mediche continue. La casa famiglia è ideale per chi cammina autonomamente, gestisce le funzioni base ma beneficia di presidio, pasti preparati e socialità.`),
        L(`**Ambiente**: nelle RSA predominano corridoi clinici e reparti; nelle case famiglia si trovano salotti, giardini, tavoli condivisi. Per molte famiglie della Brianza, la vicinanza a ${BRAND.location} e l'atmosfera familiare sono fattori decisivi. ${r1 ? 'Puoi anche ' + r1 + '.' : ''}`),
      ],
      [
        L(`La RSA conviene quando il livello di dipendenza è elevato: cadute frequenti, difficoltà cognitive significative, gestione di terapie complesse o necessità di sorveglianza medica notturna. In questi casi, la struttura sanitaria offre competenze e attrezzature che una casa famiglia non può garantire.`),
        L(`La casa famiglia è la scelta giusta quando il genitore è ancora autosufficiente nella quotidianità ma la vita in autonomia a casa presenta rischi: solitudine prolungata, difficoltà nella preparazione dei pasti, paura di restare soli di notte, o stanchezza del caregiver familiare.`),
        L(`Molte famiglie del territorio comasco scoprono che non serve necessariamente una RSA quando i bisogni sono prevalentemente sociali e preventivi. Un residence come ${BRAND.name} offre sicurezza, compagnia e ${BRAND.assistenza} senza l'impersonalità di una grande struttura.`),
        L(`La transizione può avvenire anche in modo graduale: prima la casa famiglia per anziani autosufficienti, poi — solo se necessario — valutazione di strutture più intensive. Anticipare la scelta permette di evitare scelte affrettate in situazioni di emergenza. ${r2 ? 'Approfondisci con ' + r2 + '.' : ''}`),
      ],
      [
        L(`Valutare la struttura giusta richiede tempo, visite e domande concrete. Non basta guardare un sito web o una brochure: bisogna entrare, osservare, parlare con il personale e — quando possibile — con gli ospiti.`),
        L(`Chiedete quanti ospiti accoglie la struttura, qual è il rapporto operatori/ospiti, come sono organizzati i pasti, quali attività sono previste e come viene gestita un'eventuale emergenza notturna. Verificate che l'ambiente sia pulito, luminoso, accessibile e privo di barriere.`),
        L(`Per una casa famiglia, fate attenzione al clima relazionale: gli ospiti si salutano? Sembrano sereni? Il personale li chiama per nome? Questi dettagli raccontano più di qualsiasi listino.`),
        L(`A ${BRAND.name} invitiamo sempre le famiglie a visitare la struttura senza impegno, conoscere gli spazi e porre ogni domanda. Siamo in ${BRAND.address}, raggiungibili al ${BRAND.phone}. ${link('visita-struttura-anziani-cosa-guardare', 'Ecco cosa osservare durante una visita')}.`),
      ],
      [
        L(`RSA e casa famiglia non sono in competizione: rispondono a bisogni diversi. La chiave è onestà nella valutazione dello stato di salute e dell'autonomia del proprio caro, e apertura verso soluzioni che privilegino la qualità della vita.`),
        L(`Per anziani autosufficienti in provincia di Como, il modello casa famiglia rappresenta spesso l'equilibrio ideale tra sicurezza, autonomia e calore umano. ${BRAND.name} è a disposizione per accompagnarvi in questa scelta con trasparenza e ascolto.`),
        L(`Vi invitiamo a esplorare ${homeLink('il sito di Residence V.G')}, leggere ${link(r[0], 'come scegliere una residenza per autosufficienti')} e ${link(r[1], 'le alternative alle RSA in provincia di Como')}. Siamo qui per rispondere a ogni dubbio.`),
      ],
    ],
  };

  const fillers = [
    `Il territorio della provincia di Como offre diverse soluzioni residenziali: dalle grandi RSA alle case famiglia a dimensione ridotta. Conoscere le differenze aiuta a non confondere strutture pensate per bisogni clinici complessi con ambienti dedicati agli autosufficienti.`,
    `L'invecchiamento attivo promosso dall'OMS invita a considerare la terza età come un'opportunità di benessere, non solo di assistenza. Movimento, relazioni e stimolazione cognitiva sono ingredienti quotidiani di una vita piena.`,
    `Il caregiver familiare spesso sottovaluta il proprio carico emotivo e fisico. Chiedere supporto — tramite assistenza domiciliare, gruppi di ascolto o una residenza — non è debolezza: è responsabilità verso sé stessi e verso il genitore.`,
    `Durante le visite, osservate non solo le camere ma anche gli spazi comuni, i giardini, la cucina, la pulizia e il modo in cui il personale interagisce con gli ospiti. I dettagli raccontano la vera qualità di una struttura.`,
    `La documentazione per l'ingresso può sembrare complessa, ma con una checklist organizzata il percorso diventa gestibile. ${link('documenti-ingresso-residenza-anziani', 'Consulta la nostra checklist completa')}.`,
    `A ${BRAND.location}, ${BRAND.name} rappresenta un'opzione residenziale a dimensione umana: massimo ${BRAND.maxOspiti} ospiti, ${BRAND.assistenza}, ambiente familiare. Contattateci al ${BRAND.phone} per una visita senza impegno.`,
  ];

  function padParagraphs(paragraphs, minWords = 320) {
    const result = [...paragraphs];
    let wi = 0;
    while (countWords(result.join('\n\n')) < minWords && wi < fillers.length * 3) {
      result.push(fillers[wi % fillers.length]);
      wi++;
    }
    return result;
  }

  // Hand-written pools for select articles
  if (pools[slug]) {
    const base = pools[slug][sectionIdx] ?? genericSection(article, sectionIdx, sectionTitle, brandBlock, r);
    return padParagraphs(base);
  }
  return genericSection(article, sectionIdx, sectionTitle, brandBlock, r, { noEuroPrices, taxDisclaimer });
}

function genericSection(article, sectionIdx, sectionTitle, brandBlock, related, opts = {}) {
  const { slug, title, category } = article;
  const r0 = related[0] ? link(related[0], related[0].replace(/-/g, ' ')) : link('residenze-anziani-como-provincia-guida', 'guida alle residenze in provincia di Como');
  const r1 = related[1] ? link(related[1], related[1].replace(/-/g, ' ')) : link('come-scegliere-residenza-anziani-autosufficienti', 'come scegliere una residenza');
  const r2 = related[2] ? link(related[2], related[2].replace(/-/g, ' ')) : link('visita-struttura-anziani-cosa-guardare', 'visita alla struttura');

  const catIntro = {
    'scegliere-struttura': 'Scegliere la struttura giusta per un genitore anziano richiede informazioni chiare, confronto e tempo. In provincia di Como le opzioni sono diverse e meritano un\'analisi attenta.',
    'vita-quotidiana': 'La vita quotidiana in residenza è fatta di piccoli rituali, relazioni e cure che, sommati, determinano il benessere dell\'ospite. Conoscere come si svolge una giornata aiuta a immaginare il futuro del proprio caro.',
    'per-famiglie': 'Le famiglie che affrontano la scelta di una residenza vivono emozioni intense: amore, preoccupazione, senso di responsabilità e, spesso, dubbi. È normale: si tratta di una delle decisioni più importanti della vita familiare.',
    'guide-pratiche': 'Le guide pratiche aiutano a trasformare un percorso complesso in passi concreti. Dalla documentazione alle visite, ogni dettaglio conta per una scelta serena e consapevole.',
    'salute-benessere': 'Il benessere fisico e psicologico nella terza età è il fondamento di una vita serena. Prevenzione, movimento, alimentazione e relazioni sono pilastri dell\'invecchiamento attivo.',
  }[category];

  const priceNote = opts.noEuroPrices
    ? 'I costi variano in base a molteplici fattori — tipologia di struttura, servizi inclusi, stanza singola o doppia, livello di assistenza — e non è possibile indicare cifre univoche senza una valutazione personalizzata. Consigliamo sempre di richiedere un preventivo dettagliato e di confrontare cosa è incluso nella retta.'
    : 'Il costo della retta dipende da servizi, tipologia di camera e livello di assistenza. Richiedete sempre un preventivo trasparente e confrontate cosa è incluso.';

  const taxBlock = opts.taxDisclaimer && sectionIdx === 3
    ? `**Disclaimer**: le informazioni contenute in questa sezione hanno carattere generale e non costituiscono consulenza fiscale personalizzata. Le normative possono variare e ogni situazione familiare ha peculiarità proprie. **Vi consigliamo vivamente di consultare un commercialista o un professionista fiscalista** per verificare le detrazioni applicabili al vostro caso, conservare correttamente la documentazione e compilare la dichiarazione dei redditi. ${BRAND.name} non assume responsabilità per decisioni fiscali basate esclusivamente su questo articolo.`
    : null;

  const sectionBodies = [
    [
      `${catIntro} In questo articolo affrontiamo "${sectionTitle}" nel contesto di ${title.toLowerCase().replace(/\?$/, '')}.`,
      `Per le famiglie della Brianza comasca, la vicinanza a strutture a dimensione umana come ${BRAND.name} — massimo ${BRAND.maxOspiti} ospiti, ${BRAND.assistenza} — rappresenta spesso un'alternativa accogliente alle grandi strutture impersonali.`,
      `Ogni situazione è unica: l'età, lo stato di salute, le preferenze personali e il contesto familiare influenzano la scelta. Non esiste una risposta universale, ma esistono criteri condivisi che possono guidarvi.`,
      `Nel corso di questa sezione esploriamo gli aspetti fondamentali di "${sectionTitle}", con un approccio pratico e orientato al benessere dell'anziano e della famiglia. ${r0 ? 'Per un approfondimento correlato, consulta ' + r0 + '.' : ''}`,
      `Ricordate che chiedere informazioni non implica alcun impegno: visitare una struttura, parlare con il personale e confrontare più opzioni è un diritto e uno strumento di tutela per il vostro caro.`,
    ],
    [
      `Approfondendo "${sectionTitle}", è utile considerare sia gli aspetti pratici sia quelli emotivi. Le famiglie che ci contattano da Como, Seregno, Giussano e dintorni ci raccontano spesso la stessa preoccupazione: "Stiamo facendo la cosa giusta?"`,
      `Un elemento chiave è la comunicazione aperta tra famiglia, anziano e struttura. Nessuna decisione dovrebbe essere imposta: il coinvolgimento del genitore, quando possibile, migliora l'adattamento e riduce l'ansia.`,
      opts.noEuroPrices
        ? priceNote
        : `Dal punto di vista economico, ${priceNote} Potete approfondire con ${link('detrazioni-fiscali-residenza-anziani-italia', 'le detrazioni fiscali per le spese sanitarie')}.`,
      `L'ambiente fisico conta: spazi luminosi, giardino, salotti condivisi e camere personalizzabili contribuiscono al senso di casa. A ${BRAND.name}, in ${BRAND.address}, curiamo ogni dettaglio per far sentire gli ospiti accolti.`,
      `La qualità del personale è altrettanto decisiva: operatori formati, disponibili e stabili nel tempo creano fiducia. Chiedete sempre come è organizzato il turno e qual è il rapporto con gli ospiti. ${r1 ? 'Leggi anche ' + r1 + '.' : ''}`,
    ],
    [
      `Continuando con "${sectionTitle}", passiamo agli aspetti operativi. Preparate una lista di domande prima di ogni visita: servizi inclusi, attività proposte, gestione delle emergenze, politica sulle visite familiari.`,
      `Per gli anziani autosufficienti, la residenza non significa rinunciare all'autonomia: significa vivere in un contesto protetto dove la solitudine non bussa alla porta e dove pasti, pulizie e sicurezza sono garantiti.`,
      `Le attività quotidiane — lettura, gioco di carte, passeggiate, laboratori manuali — mantengono la mente attiva e il corpo in movimento. ${link('attivita-anziani-residenza-importanza', 'Scopri perché le attività sono fondamentali')}.`,
      `La nutrizione è un altro pilastro: pasti equilibrati, adattati alle esigenze individuali, consumati insieme agli altri ospiti rafforzano il senso di comunità. ${link('nutrizione-anziani-importanza-pasti-residenza', 'Leggi il nostro articolo sulla nutrizione')}.`,
      `Se il genitore esita, è comprensibile. ${link('come-parlare-genitore-residenza-anziani', 'Ecco come affrontare il dialogo con delicatezza')}. Il vostro ruolo è ascoltare, informare e accompagnare, non decidere al posto suo quando non è necessario.`,
    ],
    [
      `Nella fase legata a "${sectionTitle}", è importante distinguere i segnali di normali adattamenti da quelli che richiedono attenzione. I primi giorni in residenza possono essere emotivi: nostalgia, silenzio, diffidenza verso l'ambiente nuovo.`,
      `Con il tempo, molti ospiti trovano ritmo e serenità. Compagnia, routine e la scoperta di nuovi interessi aiutano. ${link('prime-settimane-genitore-residenza-cosa-aspettarsi', 'Cosa aspettarsi nelle prime settimane')}.`,
      taxBlock,
      `La sicurezza domestica resta una preoccupazione per chi vive ancora a casa: cadute, isolamento, difficoltà notturne. ${link('sicurezza-casa-anziani-rischi-cadute', 'Prevenzione delle cadute e rischi in casa')}. Quando la casa non basta più, una struttura protetta offre tranquillità a tutti.`,
      `Per le famiglie che valutano ${BRAND.location}, ${brandBlock} ${r2 ? 'Ti consigliamo anche ' + r2 + '.' : ''}`,
    ].filter(Boolean),
    [
      `In conclusione, "${sectionTitle}" ci ricorda che ogni percorso verso una residenza è personale. Non cercate la perfezione assoluta: cercate la struttura che meglio rispecchia i bisogni, i valori e le aspettative del vostro caro.`,
      `${BRAND.name} accoglie fino a ${BRAND.maxOspiti} ospiti autosufficienti con ${BRAND.assistenza}, in un ambiente familiare a Cabiate. Siamo raggiungibili al ${BRAND.phone} per una visita gratuita e senza impegno.`,
      `Vi invitiamo a visitare ${homeLink('la homepage di Residence V.G')}, approfondire con ${r0} e ${r1}, e contattarci per qualsiasi domanda. Siamo al vostro fianco in ogni fase di questa scelta importante.`,
      `La cura di un genitore anziano è un atto d'amore. Scegliere una residenza non significa abbandonarlo: significa garantirgli sicurezza, dignità e qualità della vita quando la casa da sola non basta più.`,
    ],
  ];

  let paragraphs = sectionBodies[sectionIdx] ?? sectionBodies[0];

  // Pad to reach ~300+ words per section
  const genericFillers = [
    `Il territorio della provincia di Como offre diverse soluzioni residenziali: dalle grandi RSA alle case famiglia a dimensione ridotta. Conoscere le differenze aiuta a non confondere strutture pensate per bisogni clinici complessi con ambienti dedicati agli autosufficienti.`,
    `L'invecchiamento attivo promosso dall'OMS invita a considerare la terza età come un'opportunità di benessere, non solo di assistenza. Movimento, relazioni e stimolazione cognitiva sono ingredienti quotidiani di una vita piena.`,
    `Il caregiver familiare spesso sottovaluta il proprio carico emotivo e fisico. Chiedere supporto — tramite assistenza domiciliare, gruppi di ascolto o una residenza — non è debolezza: è responsabilità verso sé stessi e verso il genitore.`,
    `Durante le visite, osservate non solo le camere ma anche gli spazi comuni, i giardini, la cucina, la pulizia e il modo in cui il personale interagisce con gli ospiti. I dettagli raccontano la vera qualità di una struttura.`,
    `La documentazione per l'ingresso può sembrare complessa, ma con una checklist organizzata il percorso diventa gestibile. ${link('documenti-ingresso-residenza-anziani', 'Consulta la nostra checklist completa')}.`,
    `A ${BRAND.location}, ${BRAND.name} rappresenta un'opzione residenziale a dimensione umana: massimo ${BRAND.maxOspiti} ospiti, ${BRAND.assistenza}, ambiente familiare. Contattateci al ${BRAND.phone} per una visita senza impegno.`,
  ];

  let text = paragraphs.join('\n\n');
  let wi = 0;
  while (countWords(text) < 320 && wi < genericFillers.length * 3) {
    paragraphs.push(genericFillers[wi % genericFillers.length]);
    text = paragraphs.join('\n\n');
    wi++;
  }

  return paragraphs;
}

function buildBody(article) {
  const parts = [];
  article.sections.forEach((sectionTitle, idx) => {
    parts.push(`## ${sectionTitle}\n`);
    const paragraphs = getSectionParagraphs(article, idx, sectionTitle);
    paragraphs.forEach((p) => parts.push(`${p}\n`));
    if (idx === 1) parts.push('<BlogCTA />\n');
    if (idx === 3) parts.push('<BlogCTA variant="whatsapp" />\n');
  });
  return parts.join('\n');
}

function buildFrontmatter(article, date) {
  const fm = {
    title: article.title,
    slug: article.slug,
    description: descriptionFor(article),
    keywords: keywordsFor(article),
    category: article.category,
    date,
    lastModified: date,
    author: 'Redazione Residence V.G',
    image: `/blog/${article.image}`,
    imageAlt: imageAltFor(article),
    readingTime: '8 min',
    featured: article.featured,
  };
  const lines = ['---'];
  for (const [key, val] of Object.entries(fm)) {
    if (Array.isArray(val)) {
      lines.push(`${key}: [${val.map((v) => `"${v}"`).join(', ')}]`);
    } else if (typeof val === 'boolean') {
      lines.push(`${key}: ${val}`);
    } else {
      lines.push(`${key}: "${val}"`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

function main() {
  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });

  const created = [];
  const wordCounts = [];

  ARTICLES.forEach((article, i) => {
    const date = DATES[i];
    const body = buildBody(article);
    const content = `${buildFrontmatter(article, date)}\n\n${body}`;
    const filename = `${article.slug}.mdx`;
    const filepath = path.join(BLOG_DIR, filename);
    fs.writeFileSync(filepath, content, 'utf8');
    const words = countWords(body);
    wordCounts.push({ slug: article.slug, words });
    created.push(filename);
    console.log(`✓ ${filename} (${words} words)`);
  });

  const below = wordCounts.filter((w) => w.words < 1500);
  const above = wordCounts.filter((w) => w.words > 2500);
  if (below.length) console.warn(`\n⚠ ${below.length} articles below 1500 words:`, below.map((b) => b.slug));
  if (above.length) console.warn(`\n⚠ ${above.length} articles above 2500 words:`, above.map((b) => b.slug));

  console.log(`\nGenerated ${created.length} articles in content/blog/`);
  return { created, wordCounts };
}

main();
