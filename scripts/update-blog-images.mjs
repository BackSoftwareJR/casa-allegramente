/**
 * One-off: point all blog images to /images/*.avif from public/images only.
 * Run: node scripts/update-blog-images.mjs && npm run generate:blog
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '../content/blog');

const I = (file) => `/images/${file}`;

/** @type {Record<string, { cover: { file: string, alt: string }, inline?: { file: string, alt: string, caption: string } }>} */
const MAP = {
  'accompagnare-genitore-anziano-visita-struttura': {
    cover: {
      file: 'villa-facciata-ingresso-sentiero-pietra-allegramente.avif',
      alt: 'Ingresso principale con sentiero in pietra e acero rosso — villa AllegraMente, Rivarolo Canavese',
    },
    inline: {
      file: 'sala-pranzo-conviviale-allegramente.avif',
      alt: 'Sala pranzo e salotto conviviale — spazi comuni Casa AllegraMente, Rivarolo Canavese',
      caption: 'Una visita in orario di attività mostra la vita reale della struttura.',
    },
  },
  'assistenza-domiciliare-vs-residenza-anziani': {
    cover: {
      file: 'salotto-conviviale-stufa-casa-famiglia-canavese.avif',
      alt: 'Soggiorno conviviale con stufa e arredi caldi — ambiente familiare Casa AllegraMente nel Canavese',
    },
    inline: {
      file: 'sala-pranzo-conviviale-allegramente.avif',
      alt: 'Spazi comuni luminosi Casa AllegraMente — Rivarolo Canavese',
      caption: 'In residenza la socialità è quotidiana, non limitata al rapporto con un caregiver.',
    },
  },
  'detrazioni-fiscali-residenza-anziani-italia': {
    cover: {
      file: 'villa-esterno-ingresso-principale-rivarolo.avif',
      alt: 'Facciata e ingresso della villa AllegraMente con giardino fiorito — casa famiglia anziani a Rivarolo Canavese (TO)',
    },
    inline: {
      file: 'villa-esterno-acero-rosso-rivarolo-canavese.avif',
      alt: 'Esterno della villa AllegraMente con giardino — Rivarolo Canavese (TO)',
      caption: 'Conservate fatture e ricevute: la documentazione è essenziale per ogni pratica fiscale.',
    },
  },
  'documenti-ingresso-residenza-anziani': {
    cover: {
      file: 'ingresso-accogliente-scala-giardino-rivarolo.avif',
      alt: 'Ingresso accogliente con scala in legno e luce naturale dal giardino — villa AllegraMente, Rivarolo',
    },
    inline: {
      file: 'soggiorno-luminoso-stufa-casa-famiglia-anziani.avif',
      alt: 'Soggiorno luminoso Casa AllegraMente — Rivarolo Canavese',
      caption: "Dopo i documenti, inizia l'ambientamento: personalizzate gli spazi con oggetti di casa.",
    },
  },
  'invecchiamento-attivo-significato-consigli': {
    cover: {
      file: 'giardino-prato-vita-quotidiana-villa-rivarolo.avif',
      alt: 'Giardino verde e vita quotidiana presso la villa AllegraMente — casa famiglia anziani nel Canavese',
    },
    inline: {
      file: 'salotto-tv-poltrona-casa-famiglia-anziani.avif',
      alt: 'Salotto accogliente con poltrona e area conviviale — Casa AllegraMente, Rivarolo Canavese',
      caption: "Creatività e compagnia: l'invecchiamento attivo si vive ogni pomeriggio.",
    },
  },
  'attivita-fisica-anziani-autosufficienti-benefici': {
    cover: {
      file: 'giardino-relax-sdraio-ombra-rivarolo.avif',
      alt: "Zona relax con sdraio all'ombra degli alberi nel giardino AllegraMente — Rivarolo Canavese",
    },
    inline: {
      file: 'giardino-prato-sdraio-verde-canavese.avif',
      alt: 'Prato verde con sdraio sotto la pergola — giardino Casa AllegraMente nel Canavese',
      caption: "Muoversi all'aperto, in compagnia: attività dolce e benessere quotidiano.",
    },
  },
  'sonno-anziani-problemi-soluzioni': {
    cover: {
      file: 'soggiorno-luminoso-stufa-casa-famiglia-anziani.avif',
      alt: 'Soggiorno luminoso con divano e stufa — ambiente caldo della casa famiglia AllegraMente nel Canavese',
    },
    inline: {
      file: 'salotto-conviviale-stufa-casa-famiglia-canavese.avif',
      alt: 'Soggiorno tranquillo e accogliente — Casa AllegraMente, Rivarolo Canavese',
      caption: 'Un ambiente tranquillo e un ritmo sereno favoriscono il riposo notturno.',
    },
  },
  'sicurezza-casa-anziani-rischi-cadute': {
    cover: {
      file: 'ingresso-scala-legno-villa-luminosa-rivarolo.avif',
      alt: 'Ingresso luminoso con scala in legno e vista sul giardino — villa AllegraMente, casa famiglia anziani',
    },
    inline: {
      file: 'villa-esterno-vialetto-pavimentato-rivarolo.avif',
      alt: 'Vialetto pavimentato e accessi della villa AllegraMente — Rivarolo Canavese (TO)',
      caption: 'Percorsi piani e accessi curati riducono il rischio di cadute negli spazi comuni.',
    },
  },
  'solitudine-anziani-rischi-soluzioni': {
    cover: {
      file: 'sala-pranzo-conviviale-allegramente.avif',
      alt: 'Sala pranzo e salotto conviviale — spazi comuni luminosi Casa AllegraMente, Rivarolo',
    },
    inline: {
      file: 'porticato-tavola-apparecchiata-giardino-allegramente.avif',
      alt: 'Tavola apparecchiata sotto il porticato — Casa AllegraMente, Rivarolo Canavese',
      caption: "La convivialità quotidiana contrasta l'isolamento in modo concreto.",
    },
  },
  'alternativa-rsa-como-casa-famiglia': {
    cover: {
      file: 'villa-esterno-pergola-giardino-verde-canavese.avif',
      alt: 'Villa AllegraMente con pergola e ampio giardino verde — residenza anziani autosufficienti nel Canavese',
    },
    inline: {
      file: 'villa-pergola-verde-facciata-allegramente.avif',
      alt: 'Facciata della villa AllegraMente con pergola verde — casa famiglia nel Canavese',
      caption: 'Una casa famiglia offre convivialità e calore, non un reparto geriatrico.',
    },
  },
  'cabiate-brianza-comasca-residenza-anziani': {
    cover: {
      file: 'villa-esterno-panoramica-alberi-ornamentali-canavese.avif',
      alt: 'Panoramica esterna della villa con alberi ornamentali — Casa AllegraMente, Rivarolo Canavese (TO)',
    },
    inline: {
      file: 'giardino-prato-alberi-villa-rivarolo-canavese.avif',
      alt: 'Prato verde e alberi nel giardino AllegraMente — Rivarolo Canavese',
      caption: 'Il verde e la tranquillità del Canavese fanno parte della cura quotidiana.',
    },
  },
  'residenze-anziani-como-provincia-guida': {
    cover: {
      file: 'villa-esterno-panoramica-giardino-canavese.avif',
      alt: 'Panoramica della villa con ampio giardino e alberi — Casa Famiglia AllegraMente, Rivarolo Canavese (TO)',
    },
    inline: {
      file: 'giardino-verde-pergola-pino-villa-canavese.avif',
      alt: 'Ampio giardino verde con pergola — villa AllegraMente, Rivarolo Canavese',
      caption: 'Rivarolo Canavese offre tranquillità e collegamenti comodi con Torino e il Canavese.',
    },
  },
  'prime-settimane-genitore-residenza-cosa-aspettarsi': {
    cover: {
      file: 'porticato-tavola-apparecchiata-giardino-allegramente.avif',
      alt: 'Tavola apparecchiata sotto il porticato con vista sul giardino — Casa AllegraMente, Rivarolo Canavese',
    },
    inline: {
      file: 'ingresso-accogliente-scala-giardino-rivarolo.avif',
      alt: 'Ingresso accogliente con luce naturale — villa AllegraMente, Rivarolo Canavese',
      caption: "Personalizzare gli spazi con oggetti di casa aiuta l'ambientamento.",
    },
  },
  'senso-colpa-genitore-residenza-anziani': {
    cover: {
      file: 'salotto-tv-poltrona-casa-famiglia-anziani.avif',
      alt: 'Salotto accogliente con divano, poltrona e area TV — spazi comuni Casa AllegraMente, Rivarolo Canavese',
    },
    inline: {
      file: 'salotto-conviviale-stufa-casa-famiglia-canavese.avif',
      alt: 'Soggiorno conviviale Casa AllegraMente — Rivarolo Canavese',
      caption: 'Delegare la cura quotidiana non significa smettere di amare.',
    },
  },
  'come-parlare-genitore-residenza-anziani': {
    cover: {
      file: 'villa-ingresso-fiori-giardino-allegramente.avif',
      alt: 'Ingresso fiorito e giardino della villa AllegraMente — residenza per anziani autosufficienti nel Canavese',
    },
    inline: {
      file: 'soggiorno-luminoso-stufa-casa-famiglia-anziani.avif',
      alt: 'Soggiorno luminoso e accogliente — Casa AllegraMente, Rivarolo Canavese',
      caption: "In residenza, come in famiglia, l'ascolto viene prima di ogni decisione.",
    },
  },
  'quando-momento-giusto-residenza-genitore-anziano': {
    cover: {
      file: 'villa-esterno-giardino-hero-allegramente.avif',
      alt: 'Facciata esterna e giardino fiorito della villa AllegraMente — casa famiglia anziani a Rivarolo Canavese',
    },
    inline: {
      file: 'ingresso-scala-legno-villa-luminosa-rivarolo.avif',
      alt: 'Ingresso luminoso della villa AllegraMente — Rivarolo Canavese',
      caption: "Il dialogo e l'ascolto sono il primo passo, in famiglia come in residenza.",
    },
  },
  'nutrizione-anziani-importanza-pasti-residenza': {
    cover: {
      file: 'cucina-pranzo-vista-giardino-casa-famiglia.avif',
      alt: 'Cucina e sala pranzo con vista sul giardino — pasti genuini in casa famiglia a Rivarolo Canavese',
    },
    inline: {
      file: 'cucina-sala-pranzo-moderna-rivarolo-canavese.avif',
      alt: 'Cucina moderna e zona pranzo — Casa Famiglia AllegraMente, Rivarolo Canavese',
      caption: 'Il pranzo condiviso è un momento di nutrizione e convivialità.',
    },
  },
  'attivita-anziani-residenza-importanza': {
    cover: {
      file: 'giardino-estate-pergola-sdraio-canavese.avif',
      alt: "Giardino estivo con pergola ombreggiata e sdraio — relax all'aperto presso Casa AllegraMente nel Canavese",
    },
    inline: {
      file: 'salotto-tv-poltrona-casa-famiglia-anziani.avif',
      alt: 'Salotto con area conviviale — Casa AllegraMente, Rivarolo Canavese',
      caption: 'Le attività creative stimolano la mente e rafforzano i legami sociali.',
    },
  },
  'giornata-tipo-residenza-anziani': {
    cover: {
      file: 'giardino-pranzo-aperto-pergola-allegramente.avif',
      alt: "Pranzo all'aperto sotto la pergola nel giardino — vita quotidiana in casa famiglia AllegraMente",
    },
    inline: {
      file: 'porticato-pranzo-esterno-villa-rivarolo.avif',
      alt: 'Area pranzo esterna con vista sul giardino — villa AllegraMente, Rivarolo Canavese',
      caption: 'I pasti condivisi sono momenti di convivialità autentica, non solo refezioni.',
    },
  },
  'visita-struttura-anziani-cosa-guardare': {
    cover: {
      file: 'villa-esterno-giardino-rivarolo-canavese.avif',
      alt: 'Villa AllegraMente con giardino curato e ingresso principale — casa famiglia anziani a Rivarolo Canavese',
    },
    inline: {
      file: 'villa-esterno-ingresso-principale-rivarolo.avif',
      alt: 'Facciata e ingresso villa AllegraMente — Rivarolo Canavese (TO)',
      caption: "L'esterno della struttura racconta cura e attenzione: osservatelo con occhi critici.",
    },
  },
  'anziano-autosufficiente-significato-criteri': {
    cover: {
      file: 'giardino-verde-estate-rivarolo-canavese.avif',
      alt: 'Ampio giardino verde della villa AllegraMente — casa famiglia anziani a Rivarolo Canavese (TO)',
    },
    inline: {
      file: 'giardino-relax-sdraio-ombra-rivarolo.avif',
      alt: 'Giardino con zona relax — Casa AllegraMente, Rivarolo Canavese',
      caption: "L'attività fisica guidata mantiene l'autonomia e previene il declino.",
    },
  },
  'quanto-costa-residenza-anziani-como': {
    cover: {
      file: 'villa-esterno-vialetto-pavimentato-rivarolo.avif',
      alt: 'Vialetto pavimentato e facciata della villa Casa Famiglia AllegraMente a Rivarolo Canavese (TO)',
    },
    inline: {
      file: 'sala-pranzo-conviviale-allegramente.avif',
      alt: 'Sala pranzo conviviale Casa AllegraMente — Rivarolo Canavese',
      caption: 'I pasti condivisi sono parte integrante del canone: un valore che va valutato, non sottovalutato.',
    },
  },
  'come-scegliere-residenza-anziani-autosufficienti': {
    cover: {
      file: 'villa-esterno-pergola-prato-rivarolo-canavese.avif',
      alt: 'Facciata della villa con pergola fiorita e prato verde — Casa AllegraMente, Rivarolo Canavese (TO)',
    },
  },
  'differenza-rsa-casa-famiglia-anziani': {
    cover: {
      file: 'villa-pergola-verde-facciata-allegramente.avif',
      alt: 'Pergola coperta di verde sulla facciata della villa AllegraMente — casa famiglia anziani nel Canavese',
    },
    inline: {
      file: 'salotto-conviviale-stufa-casa-famiglia-canavese.avif',
      alt: 'Soggiorno conviviale Casa AllegraMente — casa famiglia a Rivarolo Canavese',
      caption: 'In una casa famiglia gli spazi condivisi favoriscono relazioni autentiche e un clima domestico.',
    },
  },
};

function escapeYaml(str) {
  return `"${str.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function updateMdx(slug, config) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(
    /^image: .+$/m,
    `image: ${escapeYaml(I(config.cover.file))}`,
  );
  content = content.replace(
    /^imageAlt: .+$/m,
    `imageAlt: ${escapeYaml(config.cover.alt)}`,
  );

  if (config.inline) {
    const { file, alt, caption } = config.inline;
    const inlineLine = `<BlogImage src=${escapeYaml(I(file))} alt=${escapeYaml(alt)} caption=${escapeYaml(caption)} />`;
    content = content.replace(/<BlogImage src="[^"]+" alt="[^"]*" caption="[^"]*" \/>/, inlineLine);
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${slug}.mdx`);
}

for (const [slug, config] of Object.entries(MAP)) {
  updateMdx(slug, config);
}

console.log(`Done — ${Object.keys(MAP).length} articles updated.`);
