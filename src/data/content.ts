/**
 * Casa Allegramente — Single source of truth per tutti i contenuti del sito.
 * Dati dalla Carta dei Servizi AllegraMente 2.0 — Via Gria 12, Rivarolo Canavese.
 *
 * Foto: public/images/*.avif (36 foto reali AllegraMente, v. PHOTOS_MANIFEST.md)
 * Nomi SEO da mapping: scripts/optimize-images.mjs (PHOTO_MAP)
 */

import { brand } from '@/lib/brand-colors';

/** Prefisso path immagini pubbliche */
const I = (file: string) => `/images/${file}` as const;

export const siteConfig = {
  name: 'Casa Allegramente',
  nameFull: 'Casa Famiglia AllegraMente — Rivarolo Canavese',
  tagline: 'Dove ogni giorno è sentirsi a casa',
  description:
    'Casa famiglia per anziani over 65 autosufficienti a Rivarolo Canavese (TO), a circa 30 km da Torino. Villa accogliente su piano unico senza barriere, 6 ospiti, badanti H24 e ampio giardino verde nel Canavese.',
  url: 'https://www.casaallegramente.it',
  piva: '13446250014',

  /** Dati società titolare — SAEC S.r.l. (gestore Casa Allegramente) */
  legal: {
    companyName: 'SAEC SRL',
    companyNameFull: 'SAEC S.r.l.',
    pec: 'saec.srl@pec.it',
    legalRepresentative: 'CRESTO ELENA',
    legalRepresentativeRegistry: 'CRESTO ELENA',
    /** Sede legale (registro imprese) */
    registeredOffice: {
      street: 'Via Giuseppe Gria, 12',
      city: 'Rivarolo Canavese',
      province: 'TO',
      cap: '10086',
      country: 'Italia',
      full: 'Via Giuseppe Gria, 12 — 10086 Rivarolo Canavese (TO), Italia',
    },
    rea: 'TO - 1363582',
    websiteOperator: 'SAEC S.r.l., titolare e gestore della struttura Casa Allegramente',
    lastLegalUpdate: '24 giugno 2026',
  },

  contact: {
    phone: '+39 379 306 7797',
    phoneRaw: '+393793067797',
    phoneContact: 'Elena',
    phoneContactNote: 'Al telefono risponde Elena',
    phoneCtaLabel: 'Parla con Elena',
    whatsapp: '393793067797',
    whatsappDisplay: '+39 379 306 7797',
    email: 'info@casafamigliacanavese.com',
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
    hoursSchema: ['Mo-Su 00:00-24:00'],
    geo: {
      lat: 45.329559,
      lng: 7.71541,
    },
    maps: {
      openstreetmap: 'https://www.openstreetmap.org/?mlat=45.329559&mlon=7.71541#map=17/45.329559/7.71541',
      googlemaps: 'https://maps.google.com/?q=Via+Gria+12,+10086+Rivarolo+Canavese+TO',
    },
  },

  analytics: {
    googleAdsId: '',
    cookieyesId: '',
  },

  seo: {
    defaultTitle: 'Casa Allegramente — Casa famiglia anziani a Rivarolo Canavese',
    titleTemplate: '%s | Casa Allegramente',
    defaultDescription:
      'Casa famiglia AllegraMente a Via Gria 12, Rivarolo Canavese: 6 ospiti over 65 autosufficienti, villa luminosa senza barriere, badanti H24, giardino verde nel Canavese.',
    ogImage: I('villa-esterno-giardino-hero-allegramente.avif'),
    themeColor: brand.orange.accent,
  },
} as const;

export const structureInfo = {
  ospiti: 6,
  camereDoppie: 3,
  bagni: 3,
  saloni: 2,
  piani: 1,
  pianoUnico: true,
  barriereArchitettoniche: false,
  assistenzaH24: true,
  target: 'over 65 autosufficienti',
  etaMinima: 65,
  anniEsperienza: 10,
  vicinanzaServizi: 'A circa 30 km da Torino, ben collegata al capoluogo, ai piedi del Gran Paradiso',
} as const;

export const heroStats = [
  { value: 6, suffix: '', label: 'posti in tutta la villa', note: 'Non di più: così resta una casa vera.' },
  { text: 'Sempre', label: 'qualcuno di turno', note: 'Di giorno e di notte, con discrezione.' },
  { value: 3, suffix: '', label: 'stanze doppie', note: 'Luminose e arredate, ognuna con il proprio spazio.' },
  { text: 'Ognuno', label: 'col suo ritmo', note: 'Pasti, orari e abitudini come li conosce.' },
] as const;

export const heroContent = {
  eyebrow: 'Casa famiglia · Rivarolo Canavese',
  headline: ['La Casa che non', 'ti aspetti'],
  headlineAccent: 'Insieme come una famiglia',
  brand: 'AllegraMente',
} as const;

export const heroIntro =
  'A Rivarolo Canavese, in Via Gria 12 — a circa 30 km da Torino — AllegraMente accoglie 6 ospiti over 65 autosufficienti in una grande villa su piano unico: senza barriere, con ampio giardino verde e badanti H24.';

export const visitCta = {
  label: 'Vieni a conoscerci con una visita gratuita',
  galleryLink: 'Vieni a conoscerci con una visita gratuita — senza impegno',
} as const;

export const heroSlides = [
  { src: I('villa-esterno-giardino-hero-allegramente.avif'), alt: 'Facciata e giardino fiorito della villa AllegraMente — casa famiglia anziani a Rivarolo Canavese (TO)', caption: 'La villa, il giardino, casa vera' },
  { src: I('giardino-verde-estate-rivarolo-canavese.avif'), alt: 'Ampio giardino verde con pergola — Casa famiglia Via Gria 12, Rivarolo Canavese', caption: 'Il giardino, ogni giorno' },
  { src: I('sala-pranzo-conviviale-allegramente.avif'), alt: 'Sala pranzo e salotto conviviale luminosi — Casa famiglia AllegraMente nel Canavese', caption: 'A tavola, tutti insieme' },
  { src: I('salotto-tv-poltrona-casa-famiglia-anziani.avif'), alt: 'Salotto accogliente con divano e poltrona — spazi comuni Casa AllegraMente, Rivarolo', caption: 'Spazi luminosi, atmosfera familiare' },
  { src: I('porticato-tavola-apparecchiata-giardino-allegramente.avif'), alt: 'Pranzo all\'aperto sotto il porticato nel giardino — vita quotidiana AllegraMente', caption: 'Momenti veri, ogni pomeriggio' },
] as const;

export const manifestoContent = {
  lines: [
    { text: 'Non una struttura.', em: false },
    { text: 'Una casa.', em: true },
    { text: 'Non pazienti.', em: false },
    { text: 'Persone.', em: true },
  ],
  quote:
    'Un posto sicuro dove ogni persona è conosciuta per nome, dove la routine quotidiana rispecchia le abitudini di una vita intera, dove la famiglia non è un ospite ma parte della nostra comunità.',
  locationLabel: 'AllegraMente · Rivarolo Canavese',
} as const;

export const storyContent = {
  eyebrow: 'Perché siamo diversi',
  title: 'Una casa famiglia pensata per gli over 65',
  paragraphs: [
    'AllegraMente nasce per accogliere chi cerca uno spazio sicuro e una vera armonia familiare: 6 ospiti over 65 autosufficienti, con i propri tempi e spazi luminosi in compagnia di coetanei sotto la supervisione di brave e pazienti badanti H24.',
    'Intorno a ogni ospite costruiamo un piano di vita ideale — ascoltiamo con cura, osserviamo e capiamo per creare un ambiente caldo dove sentirsi davvero a casa.',
  ],
  image: { src: I('villa-esterno-pergola-prato-rivarolo-canavese.avif'), alt: 'Villa AllegraMente con pergola e prato verde — casa famiglia su piano unico a Rivarolo Canavese (TO)' },
  stats: [
    { value: '6', label: 'posti in tutta la villa' },
    { value: 'Sempre', label: 'qualcuno di turno' },
    { value: 'Ognuno', label: 'col suo ritmo' },
  ],
  differentiators: [
    {
      title: 'Solo 6 ospiti',
      body: 'Una scelta voluta per garantire armonia familiare, attenzione al singolo e spazi condivisi sereni. Non sei un numero: sei una persona con nome, storia e abitudini.',
    },
    {
      title: 'Villa su piano unico',
      body: 'Grande villa accogliente senza barriere architettoniche, circondata da un ampio giardino verde. Doppi saloni, cucina accogliente e 3 camere doppie luminose.',
    },
    {
      title: 'Famiglia sempre benvenuta',
      body: 'Familiari e amici possono venire in qualsiasi momento a trovare i propri cari e condividere parte della giornata — compleanni, festività e momenti conviviali insieme.',
    },
  ],
  /** Statistiche in evidenza nella sezione storia (home) */
  highlightStats: [
    { value: '6', label: 'posti in tutta la villa', note: 'Non di più: così resta una casa vera.', accent: brand.orange.accent },
    { value: 'Sempre', label: 'qualcuno di turno', note: 'Di giorno e di notte, con discrezione.', accent: brand.green.accent },
    { value: '3', label: 'stanze doppie', note: 'Luminose e arredate, ognuna con il proprio spazio.', accent: brand.yellow.accent },
    { value: 'Ognuno', label: 'col suo ritmo', note: 'Pasti, orari e abitudini come li conosce.', accent: brand.terracotta.accent },
  ],
  /** Slide carousel cinematico — giardino, interni, convivialità */
  carouselSlides: [
    { src: I('villa-esterno-giardino-hero-allegramente.avif'), alt: 'Facciata e giardino fiorito della villa AllegraMente — casa famiglia anziani a Rivarolo Canavese (TO)', caption: 'La villa, il giardino, casa vera' },
    { src: I('giardino-verde-estate-rivarolo-canavese.avif'), alt: 'Ampio giardino verde con pergola — Casa famiglia Via Gria 12, Rivarolo Canavese', caption: 'Il giardino, ogni giorno' },
    { src: I('sala-pranzo-conviviale-allegramente.avif'), alt: 'Sala pranzo e salotto conviviale luminosi — Casa famiglia AllegraMente nel Canavese', caption: 'A tavola, tutti insieme' },
    { src: I('cucina-pranzo-vista-giardino-casa-famiglia.avif'), alt: 'Cucina e sala pranzo con vista sul giardino — pasti conviviali AllegraMente, Rivarolo Canavese', caption: 'Interni luminosi, vista giardino' },
    { src: I('salotto-tv-poltrona-casa-famiglia-anziani.avif'), alt: 'Salotto accogliente con divano e poltrona — spazi comuni Casa AllegraMente, Rivarolo', caption: 'Spazi comuni, atmosfera familiare' },
    { src: I('porticato-tavola-apparecchiata-giardino-allegramente.avif'), alt: 'Pranzo all\'aperto sotto il porticato nel giardino — vita quotidiana AllegraMente', caption: 'Momenti conviviali all\'aperto' },
    { src: I('villa-esterno-pergola-prato-rivarolo-canavese.avif'), alt: 'Villa AllegraMente con pergola e prato verde — casa famiglia su piano unico a Rivarolo Canavese (TO)', caption: 'Pergola e prato verde' },
  ],
  /** Moduli bento — 3 concetti chiave */
  bentoItems: [
    {
      id: 'ospiti',
      title: 'Solo 6 ospiti',
      body: 'Una scelta voluta per garantire armonia familiare, attenzione al singolo e spazi condivisi sereni.',
      accent: brand.orange.accent,
      icon: 'users' as const,
    },
    {
      id: 'villa',
      title: 'Villa su piano unico',
      body: 'Grande villa senza barriere, circondata da un ampio giardino verde. Doppi saloni e 3 camere doppie luminose.',
      accent: brand.green.accent,
      icon: 'home' as const,
    },
    {
      id: 'famiglia',
      title: 'Famiglia sempre benvenuta',
      body: 'Familiari e amici possono venire in qualsiasi momento — compleanni, festività e momenti conviviali insieme.',
      accent: brand.yellow.accent,
      icon: 'heart' as const,
    },
  ],
} as const;

export const spacesAccordion = [
  {
    id: 1,
    title: 'Le camere',
    subtitle: '3 camere doppie, luminose e ben arredate.',
    src: I('soggiorno-luminoso-stufa-casa-famiglia-anziani.avif'),
    alt: 'Interni luminosi e accoglienti della villa — camere doppie arredate Casa AllegraMente, Rivarolo Canavese',
  },
  {
    id: 2,
    title: 'I saloni',
    subtitle: 'Doppi saloni conviviali dove ci si incontra ogni giorno.',
    src: I('sala-pranzo-conviviale-allegramente.avif'),
    alt: 'Doppio salone conviviale con sala pranzo — spazi comuni Casa AllegraMente, Rivarolo Canavese',
  },
  {
    id: 3,
    title: 'Il giardino',
    subtitle: 'Ampio giardino verde per vivere all\'aperto.',
    src: I('giardino-verde-estate-rivarolo-canavese.avif'),
    alt: 'Ampio giardino verde con pergola — villa Via Gria 12, Rivarolo Canavese (TO)',
  },
  {
    id: 4,
    title: 'La sala pranzo',
    subtitle: 'Pasti conviviali con cucina mediterranea genuina.',
    src: I('cucina-pranzo-vista-giardino-casa-famiglia.avif'),
    alt: 'Cucina e sala pranzo con vista sul giardino — pasti conviviali AllegraMente, Rivarolo Canavese',
  },
  {
    id: 5,
    title: 'L\'assistenza H24',
    subtitle: 'Badanti presenti giorno e notte, con discrezione.',
    src: I('ingresso-accogliente-scala-giardino-rivarolo.avif'),
    alt: 'Ingresso accogliente con presenza continua — assistenza H24 Casa Famiglia AllegraMente, Rivarolo',
  },
] as const;

export const spacesSectionContent = {
  eyebrow: 'I nostri spazi',
  title: 'Ogni angolo\nracconta casa.',
  description:
    'Non un corridoio d\'ospedale. Una villa vera a Rivarolo Canavese, su piano unico senza barriere, con spazi pensati per la vita di tutti i giorni.',
} as const;

export const values = [
  { id: 'accoglienza', title: 'Accoglienza', tagline: 'Uno spazio sicuro e familiare', body: 'AllegraMente nasce per accogliere chi cerca uno spazio sicuro e una vera armonia familiare, con i propri tempi e spazi luminosi in compagnia di coetanei.', accent: brand.orange.accent },
  { id: 'attenzione', title: 'Attenzione al singolo', tagline: 'Un piano di vita su misura', body: 'Ogni ospite è importante: intorno a lui o a lei costruiamo un piano di vita ideale, ascoltando con attenzione per creare routine serene.', accent: brand.green.accent },
  { id: 'famiglia', title: 'Famiglia coinvolta', tagline: 'Sempre benaccetti', body: 'Familiari e amici possono venire in qualsiasi momento a trovare i propri cari e condividere parte della giornata insieme.', accent: brand.yellow.accent },
  { id: 'socialita', title: 'Socialità', tagline: 'Mente attiva, cuore in compagnia', body: 'Attività giornaliere studiate per mantenere le risorse personali, stimolare la mente e condividere momenti autentici — per non sentirsi mai più soli.', accent: brand.terracotta.accent },
  { id: 'territorio', title: 'Territorio', tagline: 'Radicati nel Canavese', body: 'A Rivarolo Canavese, a circa 30 km da Torino, ai piedi del Gran Paradiso: clima mite, gite ed escursioni sul suggestivo territorio canavesano.', accent: brand.green.accent },
] as const;

export const seasons = [
  {
    id: 'primavera',
    name: 'Primavera',
    icon: '🌸',
    tagline: 'Il risveglio del giardino',
    description: 'La natura riprende vita e con lei la voglia di stare all\'aperto. Passeggiate tra i fiori, cura dell\'orto e prime uscite sul territorio canavesano sotto il sole tiepido.',
    color: brand.green.accent,
    bg: brand.green.pastel,
  },
  {
    id: 'estate',
    name: 'Estate',
    icon: '☀️',
    tagline: 'Giornate lunghe e conviviali',
    description: 'Aperitivi sul terrazzo, gite verso i laghi del Canavese, pranzi all\'ombra degli alberi e serate fresche in giardino. L\'estate allegramente è pura vita.',
    color: brand.yellow.accent,
    bg: brand.yellow.pastel,
  },
  {
    id: 'autunno',
    name: 'Autunno',
    icon: '🍂',
    tagline: 'Calore di casa e sapori autunnali',
    description: 'Profumi di cucina, colori caldi e laboratori creativi. L\'autunno è la stagione delle castagne, delle marmellate fatte insieme e delle passeggiate nei boschi dorati del Canavese.',
    color: brand.terracotta.accent,
    bg: brand.terracotta.pastel,
  },
  {
    id: 'inverno',
    name: 'Inverno',
    icon: '❄️',
    tagline: 'Intimità e calore familiare',
    description: 'Il focolare della casa si riempie di musica, giochi da tavolo e storie da raccontare. Le feste natalizie sono momenti speciali aperti a tutti i familiari.',
    color: brand.brown.accent,
    bg: brand.brown.pastel,
  },
] as const;

export const pricing = {
  doubleBed: { label: 'Camera doppia', price: 2500, period: 'mese', note: 'Tariffa indicata nella carta dei servizi.' },
  singleBed: { label: 'Soggiorno temporaneo', price: 800, period: 'settimana', note: 'Compatibilmente con la disponibilità delle camere.' },
  festive: { label: 'Ospitalità diurna', price: 70, period: 'giorno (9:00–19:00)', note: 'Alternativa mensile lun–ven: € 1.300.' },
  deposit: { label: 'Colloquio conoscitivo', percentage: 0, note: 'Rette confermate al colloquio conoscitivo, senza impegno.' },
  includedNote: 'Vitto, alloggio, pulizia, assistenza h24, attività ricreative e accompagnamento quotidiano inclusi nella retta.',
} as const;

export const includedItems = [
  'Assistenza continuativa e presenza 24 ore su 24',
  'Vitto e alloggio',
  'Pulizia quotidiana degli ambienti',
  'Lavanderia e cambio biancheria',
  'Supporto nell\'igiene personale',
  'Monitoraggio dell\'assunzione delle terapie',
  'Attività ricreative e ginnastica dolce',
  'WiFi e televisione',
  'Supporto relazionale e accompagnamento nella quotidianità',
] as const;

export const extraServices = [
  { id: 'fisioterapia', label: 'Fisioterapia' },
  { id: 'infermieristico', label: 'Servizio infermieristico' },
  { id: 'parrucchiere', label: 'Parrucchiere ed estetista' },
  { id: 'trasporti', label: 'Accompagnamenti e trasporti' },
  { id: 'prenotazioni', label: 'Prenotazione visite ed esami' },
  { id: 'lavanderia', label: 'Lavanderia esterna per capi delicati' },
] as const;

export const services = [
  {
    id: 'assistenza-h24',
    icon: 'shield-heart',
    title: 'Assistenza continuativa 24 ore su 24',
    summary: 'Presenza continua giorno e notte, con vigilanza h24 e mani gentili.',
    description: 'Assistenza continuativa e presenza ventiquattro ore su ventiquattro sotto la supervisione di brave e pazienti badanti. Presenza discreta e rassicurante, vigilanza h24 e organizzazione dell\'assistenza nel rispetto dell\'autonomia e dei ritmi di ogni ospite.',
    highlights: ['Presenza h24', 'Badanti qualificate', 'Vigilanza continua', 'Emergenze gestite con prontezza'],
  },
  {
    id: 'vitto-alloggio',
    icon: 'utensils',
    title: 'Vitto e alloggio',
    summary: 'Pasti genuini e saporiti ispirati alla tradizione mediterranea.',
    description: 'Vitto e alloggio inclusi nella retta. Pasti semplici, genuini e ispirati alla tradizione mediterranea, preparati con ingredienti freschi. Chi lo desidera può partecipare alla preparazione dei pasti e alla cucina condivisa.',
    highlights: ['Cucina mediterranea', 'Ingredienti freschi', 'Pasti conviviali', 'Cucina condivisa'],
  },
  {
    id: 'animazione',
    icon: 'palette',
    title: 'Attività ricreative e ginnastica dolce',
    summary: 'Stimoli cognitivi, relazionali e motori nel rispetto dei ritmi personali.',
    description: 'Attività ricreative e ginnastica dolce per favorire il mantenimento delle capacità cognitive, relazionali e motorie. Lettura, giochi da tavolo, laboratori, cura delle piante, passeggiate, gite sul territorio canavesano ed eventi con i familiari.',
    highlights: ['Ginnastica dolce', 'Giochi e laboratori', 'Gite ed escursioni', 'Eventi con i familiari'],
  },
  {
    id: 'pulizia-igiene',
    icon: 'sparkles',
    title: 'Pulizia, igiene e lavanderia',
    summary: 'Ambienti curati ogni giorno e supporto personale attento.',
    description: 'Pulizia quotidiana degli ambienti, lavanderia e cambio biancheria. Supporto nell\'igiene personale, con attenzione al comfort e alla dignità di ogni ospite.',
    highlights: ['Pulizia quotidiana', 'Cambio biancheria', 'Lavanderia', 'Supporto igiene personale'],
  },
  {
    id: 'assistenza-sanitaria',
    icon: 'heart-handshake',
    title: 'Assistenza sanitaria',
    summary: 'Medico di base, monitoraggio terapie e copertura SSN.',
    description: 'Gli ospiti mantengono il proprio Medico di Medicina Generale e l\'assistenza sanitaria garantita dal SSN. Monitoraggio dell\'assunzione delle terapie farmacologiche. In emergenza, il personale contatta tempestivamente i servizi sanitari e i familiari.',
    highlights: ['Medico di base', 'Monitoraggio terapie', 'Copertura SSN', 'Contatto familiari in emergenza'],
  },
  {
    id: 'confort-quotidiano',
    icon: 'building',
    title: 'Confort e accompagnamento quotidiano',
    summary: 'Wi-fi, televisione e supporto relazionale nella vita di tutti i giorni.',
    description: 'WiFi e televisione per restare in contatto con il mondo esterno. Supporto relazionale e accompagnamento nella quotidianità in un ambiente familiare e accogliente.',
    highlights: ['Wi-fi e televisione', 'Supporto relazionale', 'Camere doppie arredate', 'Giardino e spazi esterni'],
  },
] as const;

export const dailyRoutine = [
  { moment: '07:30 — 10:30', phase: 'mattina', title: 'Il risveglio', description: 'Sveglia naturale, igiene personale e cura di sé — senza fretta, nel rispetto dei ritmi di ognuno. Colazione insieme: il primo rito conviviale della giornata.' },
  { moment: '10:30 — 11:30', phase: 'tarda mattina', title: 'Cuore del mattino', description: 'Attività interne individualizzate o di gruppo, con uscite insieme sul suggestivo territorio canavesano — tra verde, storia e aria buona.' },
  { moment: '12:30', phase: 'mezzogiorno', title: 'Tavola apparecchiata', description: 'Pranzo conviviale: cucina mediterranea con ingredienti freschi e momenti di condivisione a tavola. Riposo pomeridiano in base alle necessità di ogni ospite.' },
  { moment: '15:00 — 18:30', phase: 'pomeriggio', title: 'Pomeriggio tra le mani', description: 'Merenda in compagnia, attività occupazionali e ricreative, laboratori creativi ed eventuali passeggiate nel verde.' },
  { moment: '19:30 — Sera', phase: 'sera', title: 'Cena e convivialità', description: 'Cena leggera e conviviale: la giornata si chiude a tavola, con calma e familiarità. Dopo cena: socializzazione, lettura, televisione e chiacchiere tutti insieme.' },
] as const;

export const weeklyActivities = [
  { id: 'ginnastica', title: 'Ginnastica dolce', description: 'Attività motorie leggere per mantenere autonomia e benessere fisico, nel rispetto delle capacità individuali.', image: I('giardino-relax-sdraio-ombra-rivarolo.avif') },
  { id: 'cucina', title: 'Cucina condivisa', description: 'Preparazione dei pasti insieme: un\'occasione di relazione, stimolo e condivisione attorno ai sapori genuini.', image: I('cucina-pranzo-vista-giardino-casa-famiglia.avif') },
  { id: 'manuali', title: 'Attività manuali e giochi', description: 'Laboratori leggeri, giochi da tavolo, lettura e conversazione per mantenere mente e relazioni attive.', image: I('salotto-tv-poltrona-casa-famiglia-anziani.avif') },
  { id: 'giardino', title: 'Giardino e orto', description: 'Cura delle piante, del piccolo orto stagionale e momenti all\'aperto nell\'ampio giardino verde.', image: I('giardino-verde-estate-rivarolo-canavese.avif') },
  { id: 'gite', title: 'Gite ed escursioni', description: 'Uscite organizzate sul territorio canavesano — dal Parco del Castello Malgrà al centro storico di Rivarolo.', image: I('villa-esterno-panoramica-giardino-canavese.avif') },
  { id: 'eventi', title: 'Eventi conviviali', description: 'Momenti di festa e condivisione aperti ai familiari, per mantenere vivi i legami affettivi.', image: I('porticato-tavola-apparecchiata-giardino-allegramente.avif') },
] as const;

export const testimonials: {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
  date: string;
}[] = [];

export const faqs = [
  { id: 'faq-ospiti', question: 'Quanti ospiti accogliete?', answer: `Accogliamo al massimo ${structureInfo.ospiti} ospiti over ${structureInfo.etaMinima}, autosufficienti. Una scelta voluta per garantire armonia familiare, attenzione al singolo e spazi condivisi sereni.` },
  { id: 'faq-autonomia', question: 'Che tipo di autonomia richiedete?', answer: 'Accogliamo persone over 65 autosufficienti che cercano uno spazio sicuro e una vera armonia familiare. È richiesto il certificato di autosufficienza per l\'ingresso con assistenza e vigilanza h24.' },
  { id: 'faq-visita', question: 'Possiamo venire a trovare un ospite in qualsiasi momento?', answer: 'Sì. Familiari e amici sono sempre benaccetti e possono venire in qualsiasi momento. Per una prima visita conoscitiva della struttura, vi invitiamo a contattarci.' },
  { id: 'faq-costi', question: 'Quali sono i costi?', answer: 'Camera doppia: € 2.500 al mese. Soggiorni temporanei: € 800 a settimana. Ospitalità diurna (9:00–19:00): € 70 al giorno, oppure € 1.300 al mese (lun–ven). Contattateci per un colloquio trasparente.' },
  { id: 'faq-portare', question: "Cosa deve portare l'ospite in casa?", answer: 'Abiti personali e oggetti affettivi (foto, libri, piccoli arredi). Le tre camere doppie sono già luminose e ben arredate — aggiungete ciò che fa sentire davvero a casa.' },
  { id: 'faq-asl', question: "Come funziona l'assistenza sanitaria?", answer: 'Gli ospiti mantengono il proprio Medico di Medicina Generale e l\'assistenza sanitaria garantita dal SSN. In emergenza, il personale contatta tempestivamente i servizi sanitari e i familiari.' },
  { id: 'faq-diete', question: 'Come vengono gestite le preferenze alimentari?', answer: 'Menù con piatti semplici, genuini e ispirati alla tradizione mediterranea, nel rispetto delle preferenze personali. Chi lo desidera può partecipare alla preparazione dei pasti.' },
  { id: 'faq-pasti-famiglia', question: 'I familiari possono partecipare ai pasti?', answer: 'Familiari e amici possono venire in qualsiasi momento e condividere parte della giornata, compresi i pasti conviviali su accordo.' },
  { id: 'faq-documenti', question: "Quali documenti servono per l'ingresso?", answer: 'Documento d\'identità, tessera sanitaria, codice fiscale, documentazione socio-sanitaria, certificazione terapia farmacologica, certificazione di autosufficienza e contratto tra le parti.' },
  { id: 'faq-diurna', question: 'È prevista un\'ospitalità diurna?', answer: 'Sì. Ospitalità diurna occasionale per una persona anziana autosufficiente, con partecipazione alla vita quotidiana, ai pasti e alle attività. Orario 9:00–19:00: € 70 al giorno oppure € 1.300 al mese (lun–ven).' },
] as const;

export type GalleryCategory = 'tutte' | 'camere' | 'spazi-comuni' | 'esterni' | 'dettagli';

export const galleryImages = [
  { src: I('villa-esterno-giardino-hero-allegramente.avif'), alt: 'Facciata e giardino fiorito della villa AllegraMente — casa famiglia anziani a Rivarolo Canavese (TO)', category: 'esterni' as GalleryCategory, featured: true },
  { src: I('giardino-verde-estate-rivarolo-canavese.avif'), alt: 'Ampio giardino verde con pergola — Casa famiglia Via Gria 12, Rivarolo Canavese', category: 'esterni' as GalleryCategory, featured: true },
  { src: I('sala-pranzo-conviviale-allegramente.avif'), alt: 'Sala pranzo e salotto conviviale — Casa Famiglia AllegraMente, Rivarolo Canavese', category: 'spazi-comuni' as GalleryCategory, featured: true },
  { src: I('cucina-pranzo-vista-giardino-casa-famiglia.avif'), alt: 'Cucina e sala pranzo con vista sul giardino — pasti genuini AllegraMente', category: 'spazi-comuni' as GalleryCategory, featured: true },
  { src: I('salotto-tv-poltrona-casa-famiglia-anziani.avif'), alt: 'Salotto accogliente con divano e area TV — spazi comuni Casa AllegraMente', category: 'spazi-comuni' as GalleryCategory, featured: true },
  { src: I('porticato-tavola-apparecchiata-giardino-allegramente.avif'), alt: 'Tavola apparecchiata sotto il porticato con vista sul giardino — AllegraMente', category: 'esterni' as GalleryCategory, featured: true },
  { src: I('villa-esterno-giardino-rivarolo-canavese.avif'), alt: 'Villa AllegraMente con giardino curato — residenza anziani autosufficienti nel Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('villa-esterno-ingresso-principale-rivarolo.avif'), alt: 'Ingresso principale e giardino fiorito — villa Casa Famiglia AllegraMente, Rivarolo Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('villa-esterno-pergola-giardino-verde-canavese.avif'), alt: 'Villa con pergola e ampio giardino verde — Casa AllegraMente nel Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('villa-esterno-vialetto-pavimentato-rivarolo.avif'), alt: 'Vialetto pavimentato e facciata della villa — Via Gria 12, Rivarolo Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('villa-facciata-ingresso-sentiero-pietra-allegramente.avif'), alt: 'Ingresso con sentiero in pietra e acero rosso — villa AllegraMente, Rivarolo Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('giardino-prato-alberi-villa-rivarolo-canavese.avif'), alt: 'Prato verde e alberi nel giardino della villa AllegraMente — Rivarolo Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('villa-esterno-panoramica-alberi-ornamentali-canavese.avif'), alt: 'Panoramica esterna con alberi ornamentali — Casa Famiglia AllegraMente, Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('porticato-tavolo-esterno-giardino-allegramente.avif'), alt: 'Porticato ombreggiato con tavolo nel giardino — relax all\'aperto AllegraMente', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('ingresso-scala-legno-villa-luminosa-rivarolo.avif'), alt: 'Ingresso luminoso con scala in legno — villa AllegraMente, casa famiglia anziani', category: 'spazi-comuni' as GalleryCategory, featured: false },
  { src: I('salotto-conviviale-stufa-casa-famiglia-canavese.avif'), alt: 'Soggiorno conviviale con stufa — ambiente familiare Casa AllegraMente nel Canavese', category: 'spazi-comuni' as GalleryCategory, featured: false },
  { src: I('giardino-pergola-rose-estate-rivarolo-canavese.avif'), alt: 'Giardino fiorito con pergola e rose — estate a Rivarolo Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('giardino-pranzo-aperto-pergola-allegramente.avif'), alt: 'Pranzo all\'aperto sotto la pergola — vita quotidiana in casa famiglia', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('giardino-verde-pergola-pino-villa-canavese.avif'), alt: 'Giardino verde con pergola e pino — villa AllegraMente, Rivarolo Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('giardino-relax-sdraio-ombra-rivarolo.avif'), alt: 'Zona relax con sdraio all\'ombra degli alberi — giardino AllegraMente', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('giardino-prato-sdraio-verde-canavese.avif'), alt: 'Prato verde con sdraio sotto la pergola — giardino casa famiglia Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('porticato-pranzo-esterno-villa-rivarolo.avif'), alt: 'Area pranzo esterna coperta con vista sul giardino — villa Rivarolo Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('cucina-sala-pranzo-moderna-rivarolo-canavese.avif'), alt: 'Cucina moderna e zona pranzo — Casa Famiglia AllegraMente, Rivarolo Canavese', category: 'spazi-comuni' as GalleryCategory, featured: false },
  { src: I('giardino-prato-vita-quotidiana-villa-rivarolo.avif'), alt: 'Giardino verde e vita quotidiana presso la villa AllegraMente — Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('giardino-cane-villa-esterno-canavese.avif'), alt: 'Giardino accogliente e facciata laterale — ambiente familiare AllegraMente', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('ingresso-accogliente-scala-giardino-rivarolo.avif'), alt: 'Ingresso accogliente con scala in legno e luce dal giardino — AllegraMente', category: 'dettagli' as GalleryCategory, featured: false },
  { src: I('soggiorno-luminoso-stufa-casa-famiglia-anziani.avif'), alt: 'Soggiorno luminoso con divano e stufa — interni caldi Casa AllegraMente', category: 'spazi-comuni' as GalleryCategory, featured: false },
  { src: I('villa-esterno-pergola-prato-rivarolo-canavese.avif'), alt: 'Facciata con pergola fiorita e prato verde — villa AllegraMente, Rivarolo Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('villa-pergola-verde-facciata-allegramente.avif'), alt: 'Pergola coperta di verde sulla facciata — Casa AllegraMente nel Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('giardino-fiori-esterno-villa-canavese.avif'), alt: 'Giardino fiorito e sentiero laterale della villa — Rivarolo Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('giardino-acero-rosso-villa-rivarolo-canavese.avif'), alt: 'Giardino con acero rosso e prato verde — villa AllegraMente, Rivarolo Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('villa-ingresso-fiori-giardino-allegramente.avif'), alt: 'Ingresso fiorito e giardino — residenza anziani AllegraMente nel Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('villa-esterno-panoramica-giardino-canavese.avif'), alt: 'Panoramica della villa con ampio giardino — Casa Famiglia AllegraMente, Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('villa-esterno-acero-rosso-rivarolo-canavese.avif'), alt: 'Esterno villa con acero rosso — Via Gria 12, Rivarolo Canavese (TO)', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('giardino-estate-pergola-sdraio-canavese.avif'), alt: 'Giardino estivo con pergola e sdraio — relax all\'aperto AllegraMente nel Canavese', category: 'esterni' as GalleryCategory, featured: false },
  { src: I('porticato-giardino-tavolo-esterno-rivarolo.avif'), alt: 'Porticato con tavolo da pranzo e giardino verde — villa Rivarolo Canavese', category: 'esterni' as GalleryCategory, featured: false },
] as const;

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'tutte', label: 'Tutte le foto' },
  { id: 'camere', label: 'Camere' },
  { id: 'spazi-comuni', label: 'Spazi comuni' },
  { id: 'esterni', label: 'Esterni' },
  { id: 'dettagli', label: 'Dettagli' },
];

export const territoryHighlights = [
  { id: 'parco-castello', title: 'Parco del Castello Malgrà', description: 'Ampio parco comunale verde attorno al castello: passeggiate tranquille, aria fresca e relax all\'aperto.' },
  { id: 'castello-malgra', title: 'Castello Malgrà', description: 'Maniero storico con affreschi quattrocenteschi e sale espositive. Proprietà comunale dal 1982.' },
  { id: 'chiesa-confraternita', title: 'Chiesa della Confraternita', description: 'Chiesa del SS. Nome di Gesù, rinnovata in epoca barocca — una delle testimonianze artistiche più preziose del centro.' },
  { id: 'centro-servizi', title: 'Centro e servizi', description: 'Corso Torino e Corso Indipendenza: portici, negozi, ristoranti e servizi a pochi minuti.' },
] as const;

export const howToArrive = [
  { id: 'auto', title: 'In auto', description: 'Da Torino (circa 30 km): SS460 in direzione Rivarolo Canavese / Ivrea. Da Ivrea: direzione Rivarolo Canavese. Via Gria 12. Parcheggio comodo nelle vicinanze.' },
  { id: 'treno', title: 'In treno', description: 'Stazione di Rivarolo Canavese sulla linea Torino–Ivrea, ben collegata al capoluogo. Breve tragitto verso Via Gria 12.' },
  { id: 'bus', title: 'In autobus', description: 'Collegamenti regolari da Torino e dai comuni del Canavese verso Rivarolo Canavese.' },
] as const;

/** Navigazione principale — header (max 5 voci) */
export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Chi siamo', href: '/chi-siamo' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Galleria', href: '/galleria' },
  { label: 'Contatti', href: '/contatti' },
] as const;

/** Link secondari — footer e menu mobile */
export const secondaryNavigation = [
  { label: 'La vita in casa', href: '/la-vita-in-casa' },
  { label: 'Dove siamo', href: '/dove-siamo' },
  { label: 'Domande frequenti', href: '/faq' },
] as const;

/** Documenti legali e informativi — footer e pagine dedicate */
export const legalLinks = [
  { label: 'Note legali', href: '/note-legali' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie' },
  { label: 'Informativa dati sanitari', href: '/informativa-sanitaria' },
  { label: 'Termini e condizioni', href: '/termini-condizioni' },
  { label: 'Accessibilità', href: '/accessibilita' },
] as const;

export const assets = {
  logo: I('logo-allegramente.png'),
  logoAlt: I('logo-allegramente.png'),
  favicon: I('logo-allegramente.png'),
  heroFallback: I('villa-esterno-giardino-hero-allegramente.avif'),
  heroVideoDesktop: '/videos/desktop.mp4',
  heroVideoMobile: '/videos/mobile.mp4',
  heroImages: [
    I('villa-esterno-giardino-hero-allegramente.avif'),
    I('giardino-verde-estate-rivarolo-canavese.avif'),
    I('sala-pranzo-conviviale-allegramente.avif'),
    I('salotto-tv-poltrona-casa-famiglia-anziani.avif'),
  ],
} as const;

export const pageHeroImages = {
  home: I('villa-esterno-giardino-hero-allegramente.avif'),
  chiSiamo: I('villa-esterno-giardino-rivarolo-canavese.avif'),
  servizi: I('cucina-pranzo-vista-giardino-casa-famiglia.avif'),
  vitaInCasa: I('sala-pranzo-conviviale-allegramente.avif'),
  galleria: I('giardino-verde-estate-rivarolo-canavese.avif'),
  doveSiamo: I('villa-esterno-ingresso-principale-rivarolo.avif'),
} as const;

export const laCasaSection = {
  hero: I('villa-esterno-pergola-prato-rivarolo-canavese.avif'),
  images: [
    { src: I('villa-esterno-giardino-rivarolo-canavese.avif'), alt: 'Villa AllegraMente con giardino curato — casa famiglia anziani a Rivarolo Canavese' },
    { src: I('giardino-verde-estate-rivarolo-canavese.avif'), alt: 'Ampio giardino verde con pergola — spazio all\'aperto per gli ospiti' },
    { src: I('sala-pranzo-conviviale-allegramente.avif'), alt: 'Sala pranzo e salotto conviviali — doppi saloni luminosi su piano unico' },
    { src: I('ingresso-accogliente-scala-giardino-rivarolo.avif'), alt: 'Ingresso accogliente con scala in legno — villa senza barriere architettoniche' },
  ],
} as const;

export const pageMeta = {
  home: {
    title: 'Casa Allegramente — Casa famiglia anziani a Rivarolo Canavese',
    description: siteConfig.seo.defaultDescription,
    keywords: ['casa famiglia anziani Rivarolo Canavese', 'residenza anziani Canavese', 'AllegraMente', 'anziani autosufficienti Torino'],
  },
  chiSiamo: {
    title: 'Chi siamo — Casa Famiglia AllegraMente Rivarolo',
    description: 'La villa AllegraMente in Via Gria 12: 6 ospiti over 65, piano unico senza barriere, badanti H24 e ampio giardino verde nel Canavese.',
    keywords: ['chi siamo casa famiglia Rivarolo', 'AllegraMente storia', 'villa anziani Canavese'],
  },
  servizi: {
    title: 'Servizi e retta — Casa Allegramente Rivarolo Canavese',
    description: 'Servizi compresi nella retta, attività, vitto, assistenza h24 e servizi extra. Casa famiglia in Via Gria 12, Rivarolo Canavese (TO).',
    keywords: ['servizi casa famiglia anziani', 'retta residenza Rivarolo', 'assistenza h24 anziani'],
  },
  vitaInCasa: {
    title: 'La vita in casa — Giornata tipo AllegraMente',
    description: 'Com\'è una giornata in casa famiglia a Rivarolo Canavese? Routine serena, pasti conviviali, laboratori e momenti di condivisione.',
    keywords: ['giornata tipo casa famiglia', 'vita quotidiana anziani Rivarolo', 'attività anziani Canavese'],
  },
  galleria: {
    title: 'Galleria — Casa Allegramente Rivarolo Canavese',
    description: 'Scopri gli spazi di Casa Allegramente: camere, saloni, giardino e ambienti della villa su piano unico a Rivarolo Canavese.',
    keywords: ['foto casa famiglia Rivarolo', 'galleria AllegraMente'],
  },
  doveSiamo: {
    title: 'Dove siamo — Via Gria 12, Rivarolo Canavese (TO)',
    description: 'Casa Allegramente in Via Gria 12, Rivarolo Canavese — a circa 30 km da Torino. Mappa, indicazioni e contatti.',
    keywords: ['Via Gria 12 Rivarolo', 'come arrivare Casa Allegramente', 'Canavese residenza anziani'],
  },
  contatti: {
    title: 'Contatti — Prenota una visita | Casa Allegramente',
    description: 'Contattate Casa Allegramente a Rivarolo Canavese per informazioni o per prenotare una visita conoscitiva senza impegno.',
    keywords: ['contatti casa famiglia Rivarolo', 'visita AllegraMente'],
  },
  faq: {
    title: 'FAQ — Domande frequenti Casa Allegramente',
    description: 'Risposte su ingresso, prezzi, visite familiari e servizi della casa famiglia AllegraMente a Rivarolo Canavese.',
    keywords: ['FAQ casa famiglia anziani', 'domande residenza Rivarolo'],
  },
} as const;

export const chiSiamoContent = {
  whyName: {
    title: 'Perché AllegraMente',
    paragraphs: [
      'AllegraMente è il nome della nostra casa famiglia per anziani: un luogo accogliente dove allegria e attenzione alla persona si incontrano ogni giorno.',
      'Il nome riflette l\'obiettivo che ci guidiamo: mantenere la mente attiva, le risorse personali e la socializzazione attraverso attività stimolanti — perché la terza età possa essere serena, conviviale e piena di piccoli momenti belli.',
    ],
  },
  story: {
    title: 'La villa',
    paragraphs: [
      `La Casa Famiglia AllegraMente, sita a Rivarolo Canavese in Via Gria 12, accoglie fino a ${structureInfo.ospiti} ospiti over ${structureInfo.etaMinima} autosufficienti che cercano uno spazio sicuro e una vera armonia familiare.`,
      'Siamo ubicati in una grande villa accogliente su piano unico, senza barriere architettoniche, circondata da un ampio giardino verde attrezzato.',
      `La villa è composta da ${structureInfo.camereDoppie} camere doppie luminose, doppi saloni conviviali, cucina accogliente e ${structureInfo.bagni} bagni — di cui uno per diversamente abili.`,
    ],
  },
  cta: {
    title: 'Venite a conoscerci di persona',
    text: 'Nessuna decisione si prende al telefono. Vi invitiamo a passare in Via Gria 12, a vedere gli spazi luminosi e a sentire l\'atmosfera calda della casa.',
  },
} as const;

export const vitaInCasaContent = {
  intro: {
    title: 'La nostra giornata tipo',
    text: 'AllegraMente ha come obiettivo il rispetto dei ritmi e dei tempi di ogni singolo ospite. Le attività proposte e i servizi sono organizzati con cura perché tutti e 6 gli ospiti si sentano sempre a proprio agio.',
  },
  conviviality: {
    title: 'Ristorazione e convivialità',
    paragraphs: [
      'La Casa Famiglia AllegraMente si impegna giornalmente per soddisfare i gusti dei propri ospiti, con pasti semplici, genuini e ispirati alla tradizione mediterranea.',
      'Chi lo desidera può partecipare alla preparazione dei pasti e alla cucina condivisa, nel rispetto delle preferenze personali.',
    ],
  },
  cta: {
    title: 'Volete vedere con i vostri occhi?',
    text: 'La giornata tipo si capisce meglio visitandoci. Vi invitiamo a passare un pomeriggio sereno in Via Gria 12 — senza impegno.',
  },
} as const;

export const accessRequirements = {
  title: 'Modalità di ingresso',
  intro: 'L\'ingresso prevede un colloquio conoscitivo preliminare con l\'ospite e i familiari, finalizzato a comprendere bisogni, abitudini e autonomia.',
  documents: [
    'Copia di documento d\'identità, tessera sanitaria e codice fiscale',
    'Documentazione socio-sanitaria aggiornata',
    'Certificazione della terapia farmacologica in corso',
    'Certificazione di autosufficienza',
    'Contratto tra le parti',
  ],
} as const;

/** Immagini servizi — mapping id → foto AVIF */
export const serviceImages = {
  'assistenza-h24': I('soggiorno-luminoso-stufa-casa-famiglia-anziani.avif'),
  'vitto-alloggio': I('sala-pranzo-conviviale-allegramente.avif'),
  'animazione': I('giardino-relax-sdraio-ombra-rivarolo.avif'),
  'pulizia-igiene': I('ingresso-accogliente-scala-giardino-rivarolo.avif'),
  'assistenza-sanitaria': I('salotto-tv-poltrona-casa-famiglia-anziani.avif'),
  'confort-quotidiano': I('giardino-verde-estate-rivarolo-canavese.avif'),
} as const;

/** Foto sfondo slot routine giornaliera (5 momenti) */
export const dailyRoutineSlotImages = [
  I('soggiorno-luminoso-stufa-casa-famiglia-anziani.avif'),
  I('giardino-prato-alberi-villa-rivarolo-canavese.avif'),
  I('cucina-sala-pranzo-moderna-rivarolo-canavese.avif'),
  I('salotto-conviviale-stufa-casa-famiglia-canavese.avif'),
  I('porticato-tavola-apparecchiata-giardino-allegramente.avif'),
] as const;

/** Manifest foto SEO — sync con public/images/PHOTOS_MANIFEST.md e scripts/optimize-images.mjs */
export const photoManifest = [
  { file: 'villa-esterno-giardino-hero-allegramente.avif', category: 'esterni', alt: 'Facciata e giardino fiorito della villa AllegraMente — casa famiglia anziani a Rivarolo Canavese (TO)', keywords: 'villa, hero, giardino, AllegraMente, Rivarolo Canavese' },
  { file: 'giardino-verde-estate-rivarolo-canavese.avif', category: 'esterni', alt: 'Ampio giardino verde della villa AllegraMente — casa famiglia anziani a Rivarolo Canavese (TO)', keywords: 'giardino, verde, estate, Rivarolo Canavese, villa' },
  { file: 'sala-pranzo-conviviale-allegramente.avif', category: 'spazi-comuni', alt: 'Sala pranzo e salotto conviviale — spazi comuni luminosi Casa AllegraMente, Rivarolo', keywords: 'sala pranzo, salotto, conviviale, spazi comuni' },
  { file: 'salotto-tv-poltrona-casa-famiglia-anziani.avif', category: 'spazi-comuni', alt: 'Salotto accogliente con divano, poltrona e area TV — Casa AllegraMente, Rivarolo Canavese', keywords: 'salotto, soggiorno, casa famiglia anziani' },
  { file: 'cucina-pranzo-vista-giardino-casa-famiglia.avif', category: 'spazi-comuni', alt: 'Cucina e sala pranzo con vista sul giardino — pasti genuini in casa famiglia a Rivarolo Canavese', keywords: 'cucina, pranzo, giardino, casa famiglia' },
  { file: 'porticato-tavola-apparecchiata-giardino-allegramente.avif', category: 'esterni', alt: 'Tavola apparecchiata sotto il porticato con vista sul giardino — Casa AllegraMente, Rivarolo Canavese', keywords: 'porticato, tavola, giardino, conviviale' },
  { file: 'villa-esterno-giardino-rivarolo-canavese.avif', category: 'esterni', alt: 'Villa AllegraMente con giardino curato — residenza anziani autosufficienti nel Canavese', keywords: 'villa, giardino, Rivarolo Canavese, casa famiglia anziani' },
  { file: 'ingresso-accogliente-scala-giardino-rivarolo.avif', category: 'spazi-comuni', alt: 'Ingresso accogliente con scala in legno e luce dal giardino — villa AllegraMente, Rivarolo', keywords: 'ingresso, accoglienza, scala, giardino' },
  { file: 'villa-esterno-pergola-prato-rivarolo-canavese.avif', category: 'esterni', alt: 'Facciata della villa con pergola fiorita e prato verde — Casa AllegraMente, Rivarolo Canavese (TO)', keywords: 'villa, pergola, prato, Rivarolo Canavese' },
  { file: 'logo-allegramente.png', category: 'brand', alt: 'Logo Casa Famiglia AllegraMente — residenza anziani Rivarolo Canavese', keywords: 'logo, AllegraMente, brand' },
] as const;

// Mapping completo 36 foto: public/images/PHOTOS_MANIFEST.md
// Originali AVIF: public/images/_archivio-originali/
