/**
 * Casa Allegramente — Single source of truth per contenuti sito.
 * Dati estratti dalla Carta dei Servizi AllegraMente 2.0 — Via Gria 12, Rivarolo Canavese.
 */

export const siteConfig = {
  name: 'Casa Allegramente',
  nameFull: 'Casa Famiglia AllegraMente — Rivarolo Canavese',
  tagline: 'Dove ogni giorno è sentirsi a casa',
  description:
    'Casa famiglia per anziani over 65 autosufficienti a Rivarolo Canavese (TO), a circa 30 km da Torino e ben collegata al capoluogo. Villa accogliente su piano unico senza barriere, 6 ospiti, badanti H24 e ampio giardino verde nel Canavese.',
  url: 'https://www.casaallegramente.it',

  contact: {
    phone: '[Telefono da inserire]',
    phoneRaw: '',
    whatsapp: '',
    whatsappDisplay: '[Telefono da inserire]',
    email: '[Email da inserire]',
    address: {
      street: 'Via Gria, 12',
      city: 'Rivarolo Canavese',
      province: 'TO',
      cap: '10086',
      region: 'Piemonte',
      country: 'IT',
      full: 'Via Gria, 12 — 10086 Rivarolo Canavese (TO)',
    },
    hours: 'Familiari e amici sempre benvenuti — potete venire in qualsiasi momento a trovare i vostri cari',
    geo: {
      lat: 45.329559,
      lng: 7.71541,
    },
    maps: {
      google: 'https://maps.google.com/?q=Via+Gria+12,+10086+Rivarolo+Canavese+TO',
      googlemaps: 'https://maps.google.com/?q=Via+Gria+12,+10086+Rivarolo+Canavese+TO',
      embed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.5!2d7.71541!3d45.329559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478865a1b1b1b1b1%3A0x0!2sVia%20Gria%2012%2C%2010086%20Rivarolo%20Canavese%20TO!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit',
    },
  },

  seo: {
    defaultTitle: 'Casa Allegramente — Casa famiglia anziani a Rivarolo Canavese',
    defaultDescription:
      'Casa famiglia AllegraMente a Via Gria 12, Rivarolo Canavese: 6 ospiti over 65 autosufficienti, villa luminosa senza barriere, badanti H24, giardino verde e assistenza continua nel Canavese, a circa 30 km da Torino.',
    ogImage: '/images/og/casa-allegramente.jpg',
    themeColor: '#4A3829',
  },
} as const;

export const structureInfo = {
  ospiti: 6,
  camereDoppie: 3,
  bagni: 3,
  saloni: 2,
  pianoUnico: true,
  barriereArchitettoniche: false,
  assistenzaH24: true,
  target: 'over 65 autosufficienti',
  etaMinima: 65,
} as const;

export type QuoteTheme = 'accoglienza' | 'professionalità' | 'amore familiare';

export const siteQuotes = [
  {
    id: 'accoglienza-spazi',
    text: 'Qui ognuno trova i propri spazi luminosi e i propri tempi, in compagnia di coetanei e sotto la supervisione attenta di brave e pazienti badanti.',
    theme: 'accoglienza' as QuoteTheme,
  },
  {
    id: 'accoglienza-casa',
    text: 'Intorno a ogni ospite costruiamo un piano di vita ideale: ascoltiamo con cura, osserviamo e capiamo per creare un ambiente caldo dove sentirsi davvero a casa.',
    theme: 'accoglienza' as QuoteTheme,
  },
  {
    id: 'professionalita-badanti',
    text: 'Assistenza continuativa ventiquattr’ore su ventiquattro: presenza discreta e rassicurante, vigilanza h24 e mani gentili ogni giorno.',
    theme: 'professionalità' as QuoteTheme,
  },
  {
    id: 'professionalita-sanitaria',
    text: 'Gli ospiti mantengono il proprio Medico di Medicina Generale e l’assistenza sanitaria garantita dal SSN; in emergenza il personale contatta tempestivamente i servizi sanitari competenti e i familiari.',
    theme: 'professionalità' as QuoteTheme,
  },
  {
    id: 'famiglia-porte',
    text: 'Familiari e amici sono sempre benaccetti: potete venire in qualsiasi momento a trovare i vostri cari e condividere parte della giornata in un’atmosfera serena.',
    theme: 'amore familiare' as QuoteTheme,
  },
  {
    id: 'famiglia-feste',
    text: 'Compleanni, Vigilia di Natale, Pasqua e le ricorrenze dell’anno: feste calorose con le famiglie degli ospiti e attività creative insieme.',
    theme: 'amore familiare' as QuoteTheme,
  },
  {
    id: 'accoglienza-giardino',
    text: 'Una grande villa accogliente su piano unico, circondata da un ampio giardino verde: spazi curati per vivere una sana vita anche all’aperto, tra aria buona e quiete canavesana.',
    theme: 'accoglienza' as QuoteTheme,
  },
  {
    id: 'professionalita-ritmi',
    text: 'Rispettiamo i ritmi e i tempi di ogni singolo ospite: attività proposte e servizi organizzati con attenzione perché tutti e sei si sentano a proprio agio.',
    theme: 'professionalità' as QuoteTheme,
  },
] as const;

export const sectionQuotes = {
  values: 'accoglienza-casa',
  conviviality: 'famiglia-porte',
  included: 'professionalita-badanti',
  story: 'accoglienza-giardino',
  servicesPreview: 'professionalita-ritmi',
} as const;

export const pageHeroImages = {
  chiSiamo: '/images/pages/chi-siamo.jpg',
  servizi: '/images/gallery/sala-pranzo.jpg',
  vitaInCasa: '/images/gallery/salotto.jpg',
  doveSiamo: '/images/pages/dove-siamo.jpg',
} as const;

export const quoteBackgrounds = {
  accoglienza: '/images/quotes/accoglienza.jpg',
  professionalità: '/images/quotes/professionalita.jpg',
  'amore familiare': '/images/quotes/famiglia.jpg',
} as const;

export const navLinks = [
  { href: '/', label: 'Home', ariaLabel: 'Vai alla home' },
  { href: '/chi-siamo', label: 'Chi siamo', ariaLabel: 'La nostra casa' },
  { href: '/servizi', label: 'Servizi', ariaLabel: 'Cosa offriamo' },
  { href: '/la-vita-in-casa', label: 'La vita in casa', ariaLabel: 'Una giornata con noi' },
  { href: '/dove-siamo', label: 'Dove siamo', ariaLabel: 'Rivarolo Canavese' },
] as const;

export const values = [
  {
    id: 'accoglienza',
    title: 'Accoglienza',
    tagline: 'Uno spazio sicuro e familiare',
    body: 'AllegraMente nasce per accogliere chi cerca uno spazio sicuro e una vera armonia familiare, con i propri tempi e spazi luminosi in compagnia di coetanei.',
    accent: '#C4632E',
  },
  {
    id: 'attenzione',
    title: 'Attenzione al singolo',
    tagline: 'Un piano di vita su misura',
    body: 'Ogni ospite è importante: intorno a lui o a lei costruiamo un piano di vita ideale, ascoltando con attenzione e osservando per creare routine serene e un ambiente dove sentirsi a casa.',
    accent: '#7A9B7E',
  },
  {
    id: 'famiglia',
    title: 'Famiglia coinvolta',
    tagline: 'Sempre benaccetti',
    body: 'Familiari e amici possono venire in qualsiasi momento a trovare i propri cari e condividere parte della giornata insieme, in un’atmosfera aperta e accogliente.',
    accent: '#B8893A',
  },
  {
    id: 'socialita',
    title: 'Socialità',
    tagline: 'Mente attiva, cuore in compagnia',
    body: 'Attività giornaliere studiate per mantenere le risorse personali, stimolare la mente e condividere momenti di scambio autentico — per non sentirsi mai più soli.',
    accent: '#8B6F5C',
  },
  {
    id: 'territorio',
    title: 'Territorio',
    tagline: 'Radicati nel Canavese',
    body: 'A Rivarolo Canavese, a circa 30 km da Torino e ben collegata al capoluogo, ai piedi del Gran Paradiso: clima mite d’inverno e fresco d’estate, con gite e uscite sul suggestivo territorio canavesano.',
    accent: '#5D7A61',
  },
] as const;

export const spaces = [
  {
    id: 'villa',
    title: 'La villa',
    subtitle: 'Piano unico senza barriere architettoniche.',
    description:
      'Grande villa accogliente su piano unico, senza barriere architettoniche, circondata da un ampio giardino verde con spazi curati per vivere una sana vita anche all’aperto — tra luce naturale, aria fresca e quiete canavesana.',
    gradient: 'from-honey/40 via-linen to-cedar/20',
    items: [
      {
        label: 'Villa su piano unico',
        image: '/images/gallery/salotto.jpg',
        alt: 'Interno luminoso della villa — ambienti accoglienti su un unico piano',
      },
      {
        label: 'Grande giardino',
        image: '/images/gallery/giardino.jpg',
        alt: 'Ampio giardino verde con spazi all’aperto — AllegraMente',
      },
    ],
  },
  {
    id: 'camere',
    title: 'Le camere',
    subtitle: '3 camere doppie, luminose e ben arredate.',
    description:
      'Tre camere doppie, luminose e ben arredate, pensate per il riposo e la privacy. Ogni ospite può portare abiti personali e oggetti affettivi per sentirsi davvero a casa.',
    gradient: 'from-terracotta/25 via-cream to-sage-light/50',
    items: [
      {
        label: 'Camera doppia — prima stanza',
        image: '/images/gallery/camera.jpg',
        alt: 'Prima camera doppia luminosa e ben arredata',
      },
      {
        label: 'Camera doppia — seconda stanza',
        image: '/images/spaces/camere.jpg',
        alt: 'Seconda camera doppia accogliente e ordinata',
      },
      {
        label: 'Camera doppia — terza stanza',
        image: '/images/gallery/dettaglio.jpg',
        alt: 'Terza camera doppia con arredi caldi e personali',
      },
    ],
  },
  {
    id: 'saloni',
    title: 'Spazi comuni',
    subtitle: 'Doppi saloni, cucina e convivialità.',
    description:
      'Doppi saloni luminosi e cucina accogliente: luoghi di incontro dove condividere pasti saporiti, chiacchiere, lettura, televisione e momenti di relax insieme.',
    gradient: 'from-sage-light via-sage-mist to-honey/20',
    items: [
      {
        label: 'Primo salone',
        image: '/images/gallery/salotto.jpg',
        alt: 'Primo salone conviviale e luminoso',
      },
      {
        label: 'Secondo salone',
        image: '/images/gallery/veranda.jpg',
        alt: 'Secondo salone luminoso con luce naturale',
      },
      {
        label: 'Cucina e zona pranzo',
        image: '/images/gallery/sala-pranzo.jpg',
        alt: 'Cucina e sala pranzo — convivialità calda in famiglia',
      },
    ],
  },
  {
    id: 'accessibilita',
    title: 'Accessibilità',
    subtitle: '3 bagni, di cui uno per diversamente abili.',
    description:
      'Tre bagni attrezzati e curati, di cui uno dedicato alle persone con disabilità. Ambiente pensato per sicurezza, comfort e autonomia di ogni ospite.',
    gradient: 'from-parchment via-linen to-warm-gray/30',
    items: [
      {
        label: 'Primo bagno',
        image: '/images/spaces/accessibilita.jpg',
        alt: 'Bagno attrezzato — comfort e sicurezza',
      },
      {
        label: 'Secondo bagno',
        image: '/images/gallery/dettaglio.jpg',
        alt: 'Secondo bagno luminoso della villa',
      },
      {
        label: 'Bagno per diversamente abili',
        image: '/images/spaces/sala.jpg',
        alt: 'Bagno accessibile e spazioso per diversamente abili',
      },
    ],
  },
] as const;

export const teamMembers = [
  {
    id: 'titolare',
    role: 'Titolare',
    name: 'La Titolare',
    description:
      'Coordina la casa con cura e umanità, garantendo un’atmosfera serena e accogliente. In caso di emergenza provvede, insieme al personale, a contattare tempestivamente i servizi sanitari competenti e i familiari di riferimento.',
    initials: 'TA',
  },
  {
    id: 'operatrici',
    role: 'Operatrici / badanti',
    name: 'Il nostro team H24',
    description:
      'Brave e pazienti badanti presenti ventiquattr’ore su ventiquattro. Supervisione continua, assistenza discreta e vigilanza h24 per ogni ospite, con attenzione ai ritmi e al benessere di ciascuno.',
    initials: 'H24',
  },
  {
    id: 'cucina',
    role: 'Ristorazione',
    name: 'La cucina di casa',
    description:
      'Pasti saporiti, genuini e variegati: cucina mediterranea con cibi freschissimi, menù condivisi e modificabili in base ai gusti personali, per momenti conviviali a tavola.',
    initials: 'CU',
  },
] as const;

export const galleryImages = [
  { src: '/images/gallery/sala-pranzo.jpg', alt: 'Sala pranzo accogliente — Casa Famiglia AllegraMente Via Gria 12', category: 'Spazi comuni', featured: true },
  { src: '/images/gallery/camera.jpg', alt: 'Camera doppia luminosa e ben arredata — Casa famiglia Rivarolo Canavese', category: 'Camere', featured: true },
  { src: '/images/gallery/giardino.jpg', alt: 'Ampio giardino verde con spazi all’aperto — AllegraMente', category: 'Esterni', featured: true },
  { src: '/images/gallery/salotto.jpg', alt: 'Doppio salone conviviale e luminoso — ambiente familiare', category: 'Spazi comuni', featured: true },
  { src: '/images/gallery/dettaglio.jpg', alt: 'Dettaglio caldo e curato di una stanza — Casa Allegramente', category: 'Dettagli', featured: false },
  { src: '/images/gallery/veranda.jpg', alt: 'Veranda luminosa con vista sul verde del Canavese', category: 'Esterni', featured: false },
] as const;

export const services = [
  {
    id: 'assistenza-h24',
    icon: 'shield-heart',
    title: 'Assistenza continuativa 24 ore su 24',
    summary: 'Presenza continua giorno e notte, con vigilanza h24 e mani gentili.',
    description:
      'Assistenza continuativa e presenza ventiquattr’ore su ventiquattro sotto la supervisione di brave e pazienti badanti. Presenza discreta e rassicurante, vigilanza h24 e organizzazione dell’assistenza nel rispetto dell’autonomia e dei ritmi di ogni ospite.',
    highlights: ['Presenza h24', 'Badanti qualificate', 'Vigilanza continua', 'Emergenze gestite con prontezza'],
  },
  {
    id: 'vitto-alloggio',
    icon: 'utensils',
    title: 'Vitto e alloggio',
    summary: 'Pasti genuini e saporiti ispirati alla tradizione mediterranea.',
    description:
      'Vitto e alloggio inclusi nella retta. Dedichiamo particolare attenzione ai pasti, considerati momenti importanti di benessere e condivisione. La cucina propone piatti semplici, genuini e ispirati alla tradizione mediterranea, preparati con ingredienti freschi e di qualità. Chi lo desidera può partecipare alla preparazione dei pasti e alla cucina condivisa.',
    highlights: ['Cucina mediterranea', 'Ingredienti freschi', 'Pasti conviviali', 'Cucina condivisa'],
  },
  {
    id: 'animazione',
    icon: 'palette',
    title: 'Attività ricreative e ginnastica dolce',
    summary: 'Stimoli cognitivi, relazionali e motori nel rispetto dei ritmi personali.',
    description:
      'Attività ricreative e ginnastica dolce per favorire il mantenimento delle capacità cognitive, relazionali e motorie. Gli ospiti possono partecipare a lettura e conversazione, giochi da tavolo, attività manuali leggere, cura delle piante e del piccolo orto stagionale, passeggiate, gite ed escursioni sul territorio canavesano, eventi e momenti conviviali aperti ai familiari.',
    highlights: ['Ginnastica dolce', 'Giochi e laboratori', 'Gite ed escursioni', 'Eventi con i familiari'],
  },
  {
    id: 'pulizia-igiene',
    icon: 'sparkles',
    title: 'Pulizia, igiene e lavanderia',
    summary: 'Ambienti curati ogni giorno e supporto personale attento.',
    description:
      'Pulizia quotidiana degli ambienti, lavanderia e cambio biancheria. Supporto nell’igiene personale, con attenzione al comfort e alla dignità di ogni ospite.',
    highlights: ['Pulizia quotidiana', 'Cambio biancheria', 'Lavanderia', 'Supporto igiene personale'],
  },
  {
    id: 'assistenza-sanitaria',
    icon: 'heart-handshake',
    title: 'Assistenza sanitaria',
    summary: 'Medico di base, monitoraggio terapie e copertura SSN.',
    description:
      'Gli ospiti mantengono il proprio Medico di Medicina Generale e l’assistenza sanitaria garantita dal Servizio Sanitario Nazionale. Monitoraggio dell’assunzione delle terapie farmacologiche. In caso di necessità o emergenza, il personale contatterà tempestivamente i servizi sanitari competenti e i familiari di riferimento.',
    highlights: ['Medico di base', 'Monitoraggio terapie', 'Copertura SSN', 'Contatto familiari in emergenza'],
  },
  {
    id: 'confort-quotidiano',
    icon: 'home',
    title: 'Confort e accompagnamento quotidiano',
    summary: 'Wi-fi, televisione e supporto relazionale nella vita di tutti i giorni.',
    description:
      'WiFi e televisione per restare in contatto con il mondo esterno. Supporto relazionale e accompagnamento nella quotidianità: un presidio umano che favorisce benessere, autonomia e relazioni autentiche in un ambiente familiare e accogliente.',
    highlights: ['Wi-fi e televisione', 'Supporto relazionale', 'Camere doppie arredate', 'Giardino e spazi esterni'],
  },
] as const;

export const includedItems = [
  'Assistenza continuativa e presenza 24 ore su 24',
  'Vitto e alloggio',
  'Pulizia quotidiana degli ambienti',
  'Lavanderia e cambio biancheria',
  'Supporto nell’igiene personale',
  'Monitoraggio dell’assunzione delle terapie',
  'Attività ricreative e ginnastica dolce',
  'WiFi e televisione',
  'Supporto relazionale e accompagnamento nella quotidianità',
] as const;

export const includedSectionContent = {
  eyebrow: 'Carta dei servizi',
  title: 'Elenco completo incluso nella retta',
  subtitle: 'Come da carta dei servizi AllegraMente — tutto ciò che non richiede supplemento, in un’accoglienza integrata e trasparente.',
} as const;

export const extraServices = [
  { id: 'fisioterapia', label: 'Fisioterapia', icon: 'activity' },
  { id: 'infermieristico', label: 'Servizio infermieristico', icon: 'stethoscope' },
  { id: 'parrucchiere', label: 'Parrucchiere ed estetista', icon: 'scissors' },
  { id: 'trasporti', label: 'Accompagnamenti e trasporti', icon: 'car' },
  { id: 'prenotazioni', label: 'Prenotazione visite ed esami', icon: 'calendar-check' },
  { id: 'lavanderia', label: 'Servizio lavanderia esterna per capi delicati', icon: 'shirt' },
] as const;

export const extraServicesNote =
  'I servizi extra si attivano su richiesta, in accordo con l’ospite e i familiari, per rispondere con flessibilità a esigenze specifiche.';

export const pricing = {
  title: 'Rette',
  items: [
    {
      id: 'camera-doppia',
      label: 'Camera doppia',
      amount: '€ 2.500',
      period: 'al mese',
      note: 'Tariffa indicata nella carta dei servizi.',
    },
    {
      id: 'transitorio',
      label: 'Soggiorni temporanei',
      amount: '€ 800',
      period: 'a settimana',
      note: 'Compatibilmente con la disponibilità delle camere.',
    },
    {
      id: 'ospitalita-diurna',
      label: 'Ospitalità diurna',
      amount: '€ 70',
      period: 'al giorno (9:00–19:00)',
      note: 'Alternativa mensile lun–ven: € 1.300. Ospitalità diurna occasionale per una persona anziana autosufficiente, con partecipazione alla vita quotidiana, ai pasti e alle attività condivise.',
    },
  ],
  disclaimer:
    'Le rette sono quelle indicate nella carta dei servizi e vengono confermate al momento del colloquio conoscitivo. Per informazioni aggiornate, contattateci direttamente.',
} as const;

export const accessRequirements = {
  title: 'Modalità di ingresso',
  intro:
    'L’ingresso in struttura prevede un colloquio conoscitivo preliminare con l’ospite e i familiari, finalizzato a comprendere bisogni, abitudini, autonomia e necessità assistenziali, così da garantire un’accoglienza serena, personalizzata e in armonia con la vita di casa. È inoltre richiesta la compilazione della documentazione amministrativa e socio-sanitaria necessaria all’organizzazione della permanenza in struttura.',
  documents: [
    'Copia di documento d’identità, tessera sanitaria e codice fiscale',
    'Documentazione socio-sanitaria aggiornata',
    'Certificazione della terapia farmacologica in corso redatta dal medico curante',
    'Certificazione di autosufficienza',
    'Contratto tra le parti',
  ],
} as const;

export const privacyNote =
  'La Casa Famiglia AllegraMente informa che la gestione dei dati personali e sanitari avviene nel pieno rispetto della normativa vigente in materia di protezione dei dati personali.';

export type FaqPage = 'home' | 'servizi' | 'dove-siamo';

export const faqs: readonly {
  id: string;
  question: string;
  answer: string;
  pages: readonly FaqPage[];
}[] = [
  {
    id: 'faq-ospiti',
    question: 'Quanti ospiti accogliete?',
    answer: `Accogliamo al massimo ${structureInfo.ospiti} ospiti over ${structureInfo.etaMinima}, autosufficienti. Una scelta voluta per garantire armonia familiare, attenzione al singolo e spazi condivisi sereni e accoglienti.`,
    pages: ['home'],
  },
  {
    id: 'faq-autonomia',
    question: 'Che tipo di autonomia richiedete?',
    answer:
      'Accogliamo persone over 65 autosufficienti che cercano uno spazio sicuro e una vera armonia familiare. È richiesto il certificato di autosufficienza per l’ingresso con assistenza e vigilanza h24.',
    pages: ['home', 'servizi'],
  },
  {
    id: 'faq-visita',
    question: 'Possiamo venire a trovare un ospite in qualsiasi momento?',
    answer:
      'Sì. Familiari e amici sono sempre benaccetti e possono venire in qualsiasi momento a trovare i propri cari e condividere parte della giornata in un’atmosfera aperta e familiare. Per una prima visita conoscitiva della struttura, vi invitiamo a contattarci.',
    pages: ['home', 'dove-siamo'],
  },
  {
    id: 'faq-costi',
    question: 'Quali sono i costi?',
    answer: `Camera doppia: ${pricing.items[0].amount} ${pricing.items[0].period}. Soggiorni temporanei: ${pricing.items[1].amount} ${pricing.items[1].period}. Ospitalità diurna (9:00–19:00): ${pricing.items[2].amount} al giorno, oppure € 1.300 al mese (lun–ven). Contattateci per un colloquio trasparente e senza impegno.`,
    pages: ['home', 'servizi'],
  },
  {
    id: 'faq-portare',
    question: "Cosa deve portare l'ospite in casa?",
    answer:
      'Abiti personali e oggetti affettivi (foto, libri, piccoli arredi). Le tre camere doppie sono già luminose e ben arredate — aggiungete ciò che fa sentire davvero a casa, con calore e familiarità.',
    pages: ['servizi'],
  },
  {
    id: 'faq-asl',
    question: "Come funziona l'assistenza sanitaria?",
    answer:
      'Gli ospiti mantengono il proprio Medico di Medicina Generale e l’assistenza sanitaria garantita dal SSN. In caso di necessità o emergenza, il personale contatta tempestivamente i servizi sanitari competenti e i familiari di riferimento.',
    pages: ['servizi'],
  },
  {
    id: 'faq-diete',
    question: 'Come vengono gestite le preferenze alimentari?',
    answer:
      'I menù propongono piatti semplici, genuini e ispirati alla tradizione mediterranea, preparati con ingredienti freschi e di qualità, nel rispetto delle preferenze personali. Chi lo desidera può partecipare alla preparazione dei pasti e alla cucina condivisa.',
    pages: ['servizi'],
  },
  {
    id: 'faq-pasti-famiglia',
    question: 'I familiari possono partecipare ai pasti?',
    answer:
      'Familiari e amici sono sempre benaccetti e possono venire in qualsiasi momento a trovare i propri cari e condividere parte della giornata, compresi i pasti conviviali su accordo.',
    pages: ['servizi'],
  },
  {
    id: 'faq-documenti',
    question: 'Quali documenti servono per l\'ingresso?',
    answer:
      'Servono copia di documento d’identità, tessera sanitaria e codice fiscale, documentazione socio-sanitaria aggiornata, certificazione della terapia farmacologica in corso e certificazione di autosufficienza, oltre al contratto tra le parti. La lista completa è disponibile nella sezione servizi o contattando la struttura.',
    pages: ['servizi'],
  },
  {
    id: 'faq-diurna',
    question: 'È prevista un’ospitalità diurna?',
    answer:
      'Sì. La casa offre ospitalità diurna occasionale per una persona anziana autosufficiente, con partecipazione alla vita quotidiana, ai pasti e alle attività condivise. Orario 9:00–19:00: € 70 al giorno oppure € 1.300 al mese (lun–ven).',
    pages: ['servizi', 'home'],
  },
];

export const dailyRoutineStory = {
  eyebrow: 'Il ritmo della casa',
  title: 'La giornata tipo',
  subtitle:
    'Un equilibrio sereno tra cura individuale e momenti condivisi, nel rispetto dei tempi di ciascuno.',
  moments: [
    {
      id: 'risveglio',
      time: '07:30 — 10:30',
      title: 'Il risveglio',
      description:
        'Sveglia naturale, igiene personale e cura di sé — senza fretta, nel rispetto dei ritmi di ognuno. Colazione insieme: il primo rito conviviale e accogliente della giornata.',
    },
    {
      id: 'mattino',
      time: '10:30 — 11:30',
      title: 'Cuore del mattino',
      description:
        'Attività interne individualizzate o di gruppo, con uscite insieme sul suggestivo territorio canavesano — tra verde, storia e aria buona.',
    },
    {
      id: 'pranzo',
      time: '12:30',
      title: 'Tavola apparecchiata',
      description:
        'Pranzo conviviale: cucina mediterranea con ingredienti freschi e momenti di condivisione a tavola. Riposo pomeridiano in base alle necessità di ogni ospite.',
    },
    {
      id: 'pomeriggio',
      time: '15:00 — 18:30',
      title: 'Pomeriggio tra le mani',
      description:
        'Merenda in compagnia, attività occupazionali e ricreative, laboratori creativi ed eventuali passeggiate nel verde.',
    },
    {
      id: 'sera',
      time: '19:30 — Sera',
      title: 'Cena e convivialità',
      description:
        'Cena leggera e conviviale: la giornata si chiude a tavola, con calma e familiarità. Dopo cena: socializzazione, lettura, televisione e chiacchiere tutti insieme.',
    },
  ],
} as const;

export const weeklyActivities = [
  {
    id: 'ginnastica',
    title: 'Ginnastica dolce',
    description:
      'Attività motorie leggere per mantenere autonomia e benessere fisico, nel rispetto delle capacità individuali e in un ambiente sereno.',
    image: '/images/activities/ginnastica.jpg',
  },
  {
    id: 'cucina',
    title: 'Cucina condivisa',
    description:
      'Preparazione dei pasti insieme: un’occasione di relazione, stimolo e condivisione attorno ai sapori genuini della tradizione.',
    image: '/images/activities/cucina-condivisa.jpg',
  },
  {
    id: 'manuali',
    title: 'Attività manuali e giochi',
    description:
      'Laboratori leggeri, giochi da tavolo, lettura e conversazione per mantenere mente e relazioni attive e vivaci.',
    image: '/images/activities/manuali-giochi.jpg',
  },
  {
    id: 'giardino',
    title: 'Giardino e orto',
    description:
      'Cura delle piante, del piccolo orto stagionale e momenti all’aperto nell’ampio giardino verde attrezzato.',
    image: '/images/activities/giardino-orto.jpg',
  },
  {
    id: 'gite',
    title: 'Gite ed escursioni',
    description:
      'Uscite organizzate sul territorio canavesano — dal Parco del Castello Malgrà al centro storico di Rivarolo — compatibilmente con le preferenze e l’autonomia di ogni ospite.',
    image: '/images/activities/gite.jpg',
  },
  {
    id: 'eventi',
    title: 'Eventi conviviali',
    description:
      'Momenti di festa e condivisione aperti ai familiari, per mantenere vivi i legami affettivi in un’atmosfera calda.',
    image: '/images/activities/eventi.jpg',
  },
] as const;

export const seasons = [
  {
    id: 'estate',
    name: 'Estate',
    description: 'Clima fresco d’estate, pranzo in giardino e passeggiate nell’ampio giardino verde della villa.',
  },
  {
    id: 'autunno',
    name: 'Autunno',
    description: 'Colori caldi nel verde, laboratori creativi e gite verso le colline canavesane e i borghi storici.',
  },
  {
    id: 'inverno',
    name: 'Inverno',
    description: 'Sale accoglienti e clima mite di Rivarolo ai piedi del Gran Paradiso, tisane calde e convivialità.',
  },
  {
    id: 'primavera',
    name: 'Primavera',
    description: 'Fiori in giardino, passeggiate al Parco del Castello Malgrà e rinascita della vita all’aperto.',
  },
] as const;

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  relation: string;
  rating: number;
  context: 'general' | 'daily';
};

export const testimonials: readonly Testimonial[] = [];

export const territoryHighlights = [
  {
    id: 'parco-castello',
    title: 'Parco del Castello Malgrà',
    description:
      'Ampio parco comunale verde, aperto tutti i giorni attorno al castello: un polmone naturale ideale per passeggiate tranquille, aria fresca e momenti di relax all’aperto.',
    image: '/images/territory/parco-castello.jpg',
    imageAlt: 'Parco del Castello Malgrà — verde pubblico a Rivarolo Canavese',
  },
  {
    id: 'castello-malgra',
    title: 'Castello Malgrà',
    description:
      'Maniero storico avviato nel 1333 dai Conti di San Martino, con affreschi quattrocenteschi e sale espositive. Proprietà comunale dal 1982, ospita mostre e iniziative culturali.',
    image: '/images/territory/castello-malgra.jpg',
    imageAlt: 'Castello Malgrà — patrimonio storico di Rivarolo Canavese',
  },
  {
    id: 'chiesa-confraternita',
    title: 'Chiesa della Confraternita',
    description:
      'La Chiesa del SS. Nome di Gesù, rinnovata in epoca barocca, è una delle testimonianze artistiche più preziose del centro: decorazioni scenografiche, tele e un ricco patrimonio sacro.',
    image: '/images/territory/chiesa-confraternita.jpg',
    imageAlt: 'Chiesa della Confraternita del SS. Nome di Gesù — Rivarolo Canavese',
  },
  {
    id: 'centro-servizi',
    title: 'Centro e servizi',
    description:
      'Corso Torino e Corso Indipendenza, con i loro portici e il vivace centro storico: negozi, ristoranti e servizi a pochi minuti, comodi per ospiti e familiari.',
    image: '/images/territory/centro-servizi.jpg',
    imageAlt: 'Centro di Rivarolo Canavese con portici, negozi e servizi',
  },
] as const;

export const howToArrive = [
  {
    id: 'auto',
    title: 'In auto',
    description:
      'Da Torino (circa 30 km): SS460 in direzione Rivarolo Canavese / Ivrea. Da Ivrea: direzione Rivarolo Canavese. La struttura si trova in Via Gria 12. Parcheggio comodo nelle vicinanze.',
  },
  {
    id: 'treno',
    title: 'In treno',
    description:
      'Stazione di Rivarolo Canavese sulla linea Torino–Ivrea, ben collegata al capoluogo. Da lì, breve tragitto verso Via Gria 12.',
  },
  {
    id: 'bus',
    title: 'In autobus',
    description:
      'Collegamenti regolari da Torino e dai comuni del Canavese verso Rivarolo Canavese, comodi per familiari e visite.',
  },
] as const;

export const pageMeta = {
  home: {
    title: 'Casa Allegramente — Casa famiglia anziani a Rivarolo Canavese',
    description: siteConfig.seo.defaultDescription,
    h1: 'Casa famiglia AllegraMente — Rivarolo Canavese',
    subtitle:
      'A Rivarolo Canavese, a circa 30 km da Torino e ben collegata al capoluogo: villa accogliente su piano unico, 6 ospiti over 65, badanti H24 e ampio giardino verde nel Canavese.',
  },
  chiSiamo: {
    title: 'Chi siamo — Casa Famiglia AllegraMente Rivarolo',
    description:
      'La villa AllegraMente in Via Gria 12: 6 ospiti over 65, piano unico senza barriere, badanti H24 e ampio giardino verde nel Canavese, a pochi chilometri da Torino.',
    h1: 'La nostra casa',
    subtitle:
      'AllegraMente è una casa famiglia accogliente in Via Gria 12: villa luminosa su piano unico, 6 ospiti over 65, badanti H24 e grande giardino verde nel Canavese.',
  },
  servizi: {
    title: 'Servizi e retta — Casa Allegramente Rivarolo Canavese',
    description:
      'Servizi compresi nella retta, attività, vitto, assistenza h24 e servizi extra. Casa famiglia accogliente in Via Gria 12, Rivarolo Canavese (TO).',
    h1: 'I nostri servizi compresi nella retta',
    subtitle:
      'Sei ambiti inclusi nella retta — assistenza h24, vitto, animazione, igiene, sanità di base e comfort alberghiero — più servizi extra su richiesta, in un’accoglienza integrata e trasparente.',
  },
  vitaInCasa: {
    title: 'La vita in casa — Giornata tipo AllegraMente',
    description:
      'Com’è una giornata in casa famiglia a Rivarolo Canavese? Routine serena, pasti conviviali, laboratori e momenti di condivisione a Casa Allegramente.',
    h1: 'La nostra giornata tipo',
    subtitle:
      'Il ritmo tranquillo di una casa calda dove ogni momento ha il suo sapore — dalla colazione alle 7:30 alla socializzazione serale, nel rispetto dei tempi di ognuno.',
  },
  doveSiamo: {
    title: 'Dove siamo — Via Gria 12, Rivarolo Canavese (TO)',
    description:
      'Casa Allegramente in Via Gria 12, Rivarolo Canavese — a circa 30 km da Torino. Mappa, indicazioni e contatti per visitare la casa famiglia nel Canavese.',
    h1: 'Rivarolo Canavese',
    subtitle:
      'Casa Allegramente è in Via Gria 12, Rivarolo Canavese — a circa 30 km da Torino, ai piedi del Gran Paradiso, nel cuore del Canavese piemontese.',
  },
} as const;

export const homeMeta = pageMeta.home;

export const heroContent = {
  headline: ['La Casa che non ti aspetti', 'la Casa di cui Necessiti'],
  brand: 'AllegraMente',
} as const;

export const heroIntro = {
  text: 'A Rivarolo Canavese, in Via Gria 12 — a circa 30 km da Torino e ben collegata al capoluogo — AllegraMente accoglie 6 ospiti over 65 autosufficienti in una grande villa accogliente su piano unico: senza barriere, con ampio giardino verde e badanti H24, per trovare uno spazio sicuro e una vera armonia familiare.',
  ctaPrimary: siteConfig.contact.phoneRaw ? `Chiamaci: ${siteConfig.contact.phone}` : 'Contattaci per informazioni',
  ctaSecondary: 'Scopri la nostra casa',
  ctaSecondaryHref: '/chi-siamo',
} as const;

export const heroSlides = [
  { src: '/images/hero/slide-1.jpg', alt: 'Villa AllegraMente — doppi saloni luminosi e spazi comuni accoglienti' },
  { src: '/images/hero/slide-2.jpg', alt: 'Ampio giardino verde — Casa famiglia Via Gria 12, Rivarolo Canavese' },
  { src: '/images/hero/slide-3.jpg', alt: 'Camera doppia luminosa e ben arredata — AllegraMente' },
] as const;

export const heroStats = [
  { value: structureInfo.ospiti, suffix: '', label: 'Ospiti al massimo', note: 'Ambiente familiare e raccolto' },
  { value: 24, suffix: 'h', label: 'Badanti presenti', note: 'Assistenza e vigilanza continua' },
  { value: structureInfo.camereDoppie, suffix: '', label: 'Camere doppie', note: 'Luminose e ben arredate' },
  { value: 0, suffix: '', label: 'Barriere architettoniche', note: 'Villa accogliente su piano unico' },
] as const;

export const manifestoSection = {
  title: 'Perché scegliere AllegraMente',
  subtitle: 'Spazio sicuro, armonia familiare e attenzione continua al singolo',
  pillars: [
    {
      title: 'Uno spazio studiato per gli over 65',
      text: 'AllegraMente nasce per offrire accoglienza calda e attenzione continua al singolo e alle sue reali necessità, in un contesto familiare e non istituzionale.',
    },
    {
      title: 'Un piano di vita ideale',
      text: 'Ogni ospite è importante. Ascoltiamo con cura, osserviamo e capiamo per creare un ambiente sereno e una routine dove sentirsi a casa, con le attenzioni che danno tranquillità.',
    },
    {
      title: 'Famiglia sempre benvenuta',
      text: 'Familiari e amici possono venire in qualsiasi momento. Condividete parte della giornata, festeggiate insieme compleanni e festività in un’atmosfera aperta e accogliente.',
    },
  ],
  quote: 'Attività stimolanti che mirano al mantenimento delle risorse personali di ognuno — per non sentirsi mai più soli.',
  linkLabel: 'La nostra storia',
  linkHref: '/chi-siamo',
} as const;

export const servicesPreview = {
  title: 'Servizi compresi nella retta',
  subtitle: 'Sei ambiti inclusi nella retta — come da carta servizi AllegraMente, in un’accoglienza integrata e curata',
  items: [
    {
      id: 'assistenza',
      icon: 'heart-handshake',
      title: 'Assistenza continuativa h24',
      description: 'Badanti presenti 24 ore su 24, con vigilanza continua, discrezione e mani gentili.',
    },
    {
      id: 'vitto',
      icon: 'utensils',
      title: 'Vitto e alloggio',
      description: 'Cinque pasti al giorno, cucina mediterranea genuina e camere doppie luminose.',
    },
    {
      id: 'attivita',
      icon: 'users',
      title: 'Animazione e gite',
      description: 'Ginnastica dolce, laboratori, feste e uscite sul suggestivo territorio canavesano.',
    },
    {
      id: 'pulizia',
      icon: 'clipboard-list',
      title: 'Pulizia e igiene',
      description: 'Pulizia giornaliera, biancheria, lavanderia e aiuto personale attento.',
    },
    {
      id: 'sanitaria',
      icon: 'shield',
      title: 'Assistenza sanitaria',
      description: 'Medico di base, monitoraggio terapie — con copertura SSN.',
    },
    {
      id: 'alberghiero',
      icon: 'home',
      title: 'Confort e accompagnamento',
      description: 'Wi-fi, televisione e supporto relazionale quotidiano in un ambiente familiare.',
    },
  ],
  linkLabel: 'Tutti i servizi e le rette',
  linkHref: '/servizi',
} as const;

export const dailyRoutinePreview = {
  title: 'Una giornata con noi',
  subtitle: 'Ritmi rispettati, attività proposte e servizi organizzati con cura perché tutti e sei gli ospiti si sentano a proprio agio',
  slots: [
    {
      phase: 'Mattina',
      title: 'Sveglia e colazione',
      text: '07:30–10:30: sveglia naturale, igiene, cura di sé e colazione insieme in un’atmosfera serena',
      color: 'honey' as const,
      image: '/images/routine/mattina.jpg',
    },
    {
      phase: 'Mezzogiorno',
      title: 'Pranzo',
      text: '12:30: pasto conviviale con cucina mediterranea genuina e ingredienti freschi',
      color: 'terracotta' as const,
      image: '/images/routine/pranzo.jpg',
    },
    {
      phase: 'Pomeriggio',
      title: 'Attività e merenda',
      text: 'Laboratori creativi, passeggiate nel verde e merenda dalle 15:00 alle 16:30',
      color: 'sage' as const,
      image: '/images/routine/pomeriggio.jpg',
    },
    {
      phase: 'Sera',
      title: 'Cena e relax',
      text: '19:30 cena conviviale, poi socializzazione, lettura e buonanotte serena',
      color: 'cedar' as const,
      image: '/images/routine/sera.jpg',
    },
  ],
  linkLabel: 'Scopri la vita quotidiana',
  linkHref: '/la-vita-in-casa',
} as const;

export const laCasaSection = {
  title: 'La casa',
  subtitle: 'Piano unico senza barriere, 3 camere doppie luminose e ampi spazi verdi',
  slides: [
    { src: '/images/gallery/sala-pranzo.jpg', alt: 'Sala pranzo accogliente — Villa Via Gria 12' },
    { src: '/images/gallery/salotto.jpg', alt: 'Doppio salone conviviale e luminoso' },
    { src: '/images/gallery/camera.jpg', alt: 'Camera doppia luminosa e ben arredata' },
    { src: '/images/gallery/giardino.jpg', alt: 'Ampio giardino verde AllegraMente' },
    { src: '/images/gallery/veranda.jpg', alt: 'Veranda luminosa e spazi aperti' },
  ],
  linkLabel: 'Vedi tutte le foto',
  linkHref: '/chi-siamo#galleria',
} as const;

/** @deprecated Usare laCasaSection — mantenuto per compatibilità */
export const galleryTeaser = laCasaSection;

export const testimonialsSection = {
  title: 'Chi ci ha scelto',
  subtitle: 'Le parole calde delle famiglie — presto condivideremo le loro testimonianze',
} as const;

export const contactStrip = {
  title: 'Venite a trovarci',
  subtitle: 'Via Gria 12, Rivarolo Canavese — a circa 30 km da Torino, nel cuore del Canavese ai piedi del Gran Paradiso. Chiamateci o passate a conoscerci di persona.',
  whatsappLabel: 'Scrivici su WhatsApp',
  ctaPrimary: 'Contattaci',
  ctaSecondary: 'Come raggiungerci',
  ctaSecondaryHref: '/dove-siamo',
} as const;

export const notFound = {
  title: 'Pagina non trovata',
  text: 'Sembra che questa pagina non esista più. Tornate alla home o contattateci: siamo sempre felici di sentirvi e accogliervi.',
  ctaHome: 'Torna alla home',
  ctaPhone: siteConfig.contact.phoneRaw ? `Chiama ${siteConfig.contact.phone}` : 'Contattaci',
} as const;

export function faqForPage(page: FaqPage) {
  return faqs.filter((f) => f.pages.includes(page));
}

export const chiSiamoContent = {
  whyName: {
    title: 'Perché AllegraMente',
    paragraphs: [
      'AllegraMente è il nome della nostra casa famiglia per anziani: un luogo accogliente dove allegria e attenzione alla persona si incontrano ogni giorno.',
      'Il nome riflette l’obiettivo che ci guidiamo: mantenere la mente attiva, le risorse personali e la socializzazione attraverso attività stimolanti — perché la terza età possa essere serena, conviviale e piena di piccoli momenti belli.',
    ],
    image: '/images/pages/chi-siamo.jpg',
  },
  story: {
    title: 'La villa',
    slides: [
      { src: '/images/gallery/sala-pranzo.jpg', alt: 'Sala pranzo accogliente — Casa Famiglia AllegraMente' },
      { src: '/images/gallery/salotto.jpg', alt: 'Doppio salone conviviale e luminoso' },
      { src: '/images/gallery/camera.jpg', alt: 'Camera doppia luminosa e ben arredata' },
      { src: '/images/gallery/giardino.jpg', alt: 'Ampio giardino verde con spazi all’aperto' },
      { src: '/images/gallery/veranda.jpg', alt: 'Veranda luminosa — Villa Via Gria 12' },
      { src: '/images/gallery/dettaglio.jpg', alt: 'Dettaglio caldo e curato degli ambienti' },
    ],
    paragraphs: [
      'La Casa Famiglia AllegraMente, sita a Rivarolo Canavese in Via Gria 12 — a circa 30 km da Torino e ben collegata al capoluogo — nasce per accogliere fino a 6 ospiti over 65 autosufficienti che cercano uno spazio sicuro e una vera armonia familiare, con i propri spazi luminosi e tempi sereni in compagnia di coetanei sotto la supervisione di brave e pazienti badanti H24.',
      'La casa offre anche ospitalità diurna occasionale per una persona anziana autosufficiente, con partecipazione alla vita quotidiana, ai pasti e alle attività condivise.',
      'Siamo ubicati in una grande villa accogliente su piano unico, senza barriere architettoniche, circondata da un ampio giardino verde attrezzato con spazi curati per vivere una sana vita anche all’aperto.',
      `La villa è composta da ${structureInfo.camereDoppie} camere doppie luminose e ben arredate, doppi saloni conviviali, cucina accogliente e ${structureInfo.bagni} bagni — di cui uno per diversamente abili.`,
    ],
  },
  cta: {
    title: 'Venite a conoscerci di persona',
    text: 'Nessuna decisione si prende al telefono. Vi invitiamo a passare in Via Gria 12, a vedere gli spazi luminosi e a sentire l’atmosfera calda della casa.',
  },
} as const;

export const serviziContent = {
  intro: {
    title: 'I nostri servizi compresi nella retta',
    text: 'In Casa Allegramente vitto, alloggio, pulizia, assistenza h24, attività ricreative e accompagnamento quotidiano fanno parte di un’unica accoglienza integrata e calda, come descritto nella carta dei servizi AllegraMente 2.0.',
  },
  pricingNote: `${pricing.items[0].label}: ${pricing.items[0].amount} ${pricing.items[0].period}. ${pricing.items[1].label}: ${pricing.items[1].amount} ${pricing.items[1].period}. ${pricing.items[2].label}: ${pricing.items[2].amount} al giorno (9:00–19:00), oppure € 1.300 al mese (lun–ven). ${pricing.disclaimer}`,
  cta: {
    title: 'Avete domande sui servizi o sulle rette?',
    text: 'Siamo a disposizione per spiegare ogni dettaglio con chiarezza. Contattateci o venite a trovarci in Via Gria 12.',
  },
} as const;

export const vitaInCasaContent = {
  intro: {
    title: 'La nostra giornata tipo',
    text: 'AllegraMente ha come obiettivo il rispetto dei ritmi e dei tempi di ogni singolo ospite. Le attività proposte e i servizi alberghieri sono organizzati con cura perché tutti e 6 gli ospiti si sentano sempre a proprio agio e trovino spazi luminosi, persone attente e tempi in linea con i propri bisogni.',
    image: '/images/gallery/salotto.jpg',
  },
  conviviality: {
    title: 'Ristorazione e convivialità',
    paragraphs: [
      'La Casa Famiglia AllegraMente si impegna giornalmente per soddisfare i gusti dei propri ospiti, conoscendo l’importanza di vivere momenti conviviali assaporando insieme pasti semplici, genuini e ispirati alla tradizione mediterranea, preparati con ingredienti freschi e di qualità.',
      'Chi lo desidera può partecipare alla preparazione dei pasti e alla cucina condivisa. I menù tengono conto delle preferenze personali, sempre nel rispetto dell’autonomia e del benessere di ogni ospite.',
    ],
    image: '/images/services/vitto.jpg',
  },
  cta: {
    title: 'Volete vedere con i vostri occhi?',
    text: 'La giornata tipo si capisce meglio visitandoci. Vi invitiamo a passare un pomeriggio sereno in Via Gria 12 — senza impegno.',
  },
} as const;

export const doveSiamoContent = {
  territory: {
    title: 'Rivarolo Canavese e il Canavese',
    paragraphs: [
      'Rivarolo Canavese è un comune della città metropolitana di Torino, situato a circa 30 km dal capoluogo e ben collegato per strada e treno. Ai piedi del Gran Paradiso, gode di un clima particolarmente mite d’inverno e fresco d’estate — ideale per una vita serena all’aperto.',
      'Il Parco del Castello Malgrà, il Castello Malgrà con le sue mostre culturali, la Chiesa della Confraternita del SS. Nome di Gesù e il vivace centro storico con portici, negozi e ristoranti rendono il territorio accogliente e stimolante per ospiti e familiari.',
    ],
  },
  parking: 'Parcheggio comodo e disponibile nelle vicinanze di Via Gria 12.',
  visitNote:
    'Familiari e amici possono venire in qualsiasi momento a trovare i propri cari. Per una prima visita conoscitiva della struttura, contattateci così possiamo accogliervi con calma e senza fretta.',
  cta: {
    title: 'La porta è aperta',
    text: 'Siamo in Via Gria 12, Rivarolo Canavese — a pochi minuti dal centro e a circa 30 km da Torino. Contattateci per un appuntamento o passate quando preferite.',
  },
} as const;
