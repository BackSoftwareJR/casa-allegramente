/**
 * Converte AVIF AllegraMente → WebP SEO e archivia gli originali.
 * Uso: node scripts/optimize-images.mjs
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const IMAGES = path.join(ROOT, 'public/images');
const ARCHIVE = path.join(IMAGES, '_archivio-originali');

/** @type {Array<{source: string, file: string, category: string, alt: string, keywords: string}>} */
export const PHOTO_MAP = [
  { source: '1120444.avif', file: 'villa-esterno-ingresso-principale-rivarolo.webp', category: 'esterni', alt: 'Facciata e ingresso della villa AllegraMente con giardino fiorito — casa famiglia anziani a Rivarolo Canavese (TO)', keywords: 'villa, ingresso, giardino, Rivarolo Canavese, casa famiglia anziani' },
  { source: '1120445.avif', file: 'villa-esterno-pergola-giardino-verde-canavese.webp', category: 'esterni', alt: 'Villa AllegraMente con pergola e ampio giardino verde — residenza anziani autosufficienti nel Canavese', keywords: 'villa, pergola, giardino, Canavese, casa famiglia' },
  { source: '1120446.avif', file: 'villa-esterno-vialetto-pavimentato-rivarolo.webp', category: 'esterni', alt: 'Vialetto pavimentato e facciata della villa Casa Famiglia AllegraMente a Rivarolo Canavese (TO)', keywords: 'villa, esterno, vialetto, Rivarolo Canavese' },
  { source: '1120447.avif', file: 'villa-facciata-ingresso-sentiero-pietra-allegramente.webp', category: 'esterni', alt: 'Ingresso principale con sentiero in pietra e acero rosso — villa AllegraMente, Rivarolo Canavese', keywords: 'villa, ingresso, giardino, AllegraMente, Rivarolo' },
  { source: '1120448.avif', file: 'giardino-prato-alberi-villa-rivarolo-canavese.webp', category: 'esterni', alt: 'Prato verde e alberi nel giardino della villa AllegraMente — casa famiglia anziani a Rivarolo Canavese', keywords: 'giardino, prato, villa, Rivarolo Canavese, verde' },
  { source: '1120449.avif', file: 'villa-esterno-panoramica-alberi-ornamentali-canavese.webp', category: 'esterni', alt: 'Panoramica esterna della villa con alberi ornamentali — Casa AllegraMente, Rivarolo Canavese (TO)', keywords: 'villa, esterno, giardino, Canavese, residenza anziani' },
  { source: '1120450.avif', file: 'porticato-tavolo-esterno-giardino-allegramente.webp', category: 'esterni', alt: 'Porticato ombreggiato con tavolo e sedie nel giardino della casa famiglia AllegraMente a Rivarolo', keywords: 'porticato, giardino, esterno, casa famiglia, relax' },
  { source: '1120452.avif', file: 'salotto-tv-poltrona-casa-famiglia-anziani.webp', category: 'spazi-comuni', alt: 'Salotto accogliente con divano, poltrona e area TV — spazi comuni Casa AllegraMente, Rivarolo Canavese', keywords: 'salotto, soggiorno, casa famiglia anziani, Rivarolo, interni' },
  { source: '1120454.avif', file: 'ingresso-scala-legno-villa-luminosa-rivarolo.webp', category: 'spazi-comuni', alt: 'Ingresso luminoso con scala in legno e vista sul giardino — villa AllegraMente, casa famiglia anziani', keywords: 'ingresso, scala legno, villa, Rivarolo Canavese, accoglienza' },
  { source: '1120456.avif', file: 'salotto-conviviale-stufa-casa-famiglia-canavese.webp', category: 'spazi-comuni', alt: 'Soggiorno conviviale con stufa e arredi caldi — ambiente familiare Casa AllegraMente nel Canavese', keywords: 'salotto, soggiorno, conviviale, casa famiglia, Canavese' },
  { source: '1120457.avif', file: 'giardino-pergola-rose-estate-rivarolo-canavese.webp', category: 'esterni', alt: 'Giardino fiorito con pergola in legno e rose — spazio verde Casa AllegraMente a Rivarolo Canavese (TO)', keywords: 'giardino, pergola, rose, estate, Rivarolo Canavese' },
  { source: '1120459.avif', file: 'giardino-pranzo-aperto-pergola-allegramente.webp', category: 'esterni', alt: 'Pranzo all\'aperto sotto la pergola nel giardino — vita quotidiana in casa famiglia AllegraMente', keywords: 'giardino, pranzo esterno, pergola, convivialità, AllegraMente' },
  { source: '1120462.avif', file: 'giardino-verde-pergola-pino-villa-canavese.webp', category: 'esterni', alt: 'Ampio giardino verde con pergola e pino — villa Casa Famiglia AllegraMente, Rivarolo Canavese', keywords: 'giardino, verde, pergola, villa, Canavese' },
  { source: '1120463.avif', file: 'giardino-relax-sdraio-ombra-rivarolo.webp', category: 'esterni', alt: 'Zona relax con sdraio all\'ombra degli alberi nel giardino AllegraMente — Rivarolo Canavese', keywords: 'giardino, relax, sdraio, ombra, Rivarolo' },
  { source: '1120464.avif', file: 'giardino-prato-sdraio-verde-canavese.webp', category: 'esterni', alt: 'Prato verde con sdraio sotto la pergola — giardino della casa famiglia anziani nel Canavese', keywords: 'giardino, prato, relax, Canavese, verde' },
  { source: '1120465.avif', file: 'porticato-tavola-apparecchiata-giardino-allegramente.webp', category: 'esterni', alt: 'Tavola apparecchiata sotto il porticato con vista sul giardino — Casa AllegraMente, Rivarolo Canavese', keywords: 'porticato, tavola, giardino, conviviale, casa famiglia' },
  { source: '1120466.avif', file: 'porticato-pranzo-esterno-villa-rivarolo.webp', category: 'esterni', alt: 'Area pranzo esterna coperta con vista sul grande giardino — villa AllegraMente a Rivarolo Canavese', keywords: 'porticato, pranzo, giardino, villa, Rivarolo' },
  { source: '1120467.avif', file: 'giardino-verde-estate-rivarolo-canavese.webp', category: 'esterni', alt: 'Ampio giardino verde della villa AllegraMente — casa famiglia anziani a Rivarolo Canavese (TO)', keywords: 'giardino, verde, estate, Rivarolo Canavese, villa' },
  { source: '1120470.avif', file: 'cucina-sala-pranzo-moderna-rivarolo-canavese.webp', category: 'spazi-comuni', alt: 'Cucina moderna e zona pranzo con sedie colorate — Casa Famiglia AllegraMente, Rivarolo Canavese', keywords: 'cucina, sala pranzo, moderna, casa famiglia, Rivarolo' },
  { source: '1120472.avif', file: 'giardino-prato-vita-quotidiana-villa-rivarolo.webp', category: 'esterni', alt: 'Giardino verde e vita quotidiana presso la villa AllegraMente — casa famiglia anziani nel Canavese', keywords: 'giardino, prato, vita quotidiana, villa, Canavese' },
  { source: '1120473.avif', file: 'giardino-cane-villa-esterno-canavese.webp', category: 'esterni', alt: 'Giardino accogliente e facciata laterale della villa — ambiente familiare Casa AllegraMente, Canavese', keywords: 'giardino, villa, esterno, familiare, Canavese' },
  { source: '1120477.avif', file: 'sala-pranzo-conviviale-allegramente.webp', category: 'spazi-comuni', alt: 'Sala pranzo e salotto conviviale con tulipani — spazi comuni luminosi Casa AllegraMente, Rivarolo', keywords: 'sala pranzo, salotto, conviviale, AllegraMente, spazi comuni' },
  { source: '1120480.avif', file: 'cucina-pranzo-vista-giardino-casa-famiglia.webp', category: 'spazi-comuni', alt: 'Cucina e sala pranzo con vista sul giardino — pasti genuini in casa famiglia a Rivarolo Canavese', keywords: 'cucina, pranzo, giardino, casa famiglia, Rivarolo' },
  { source: '1120481.avif', file: 'ingresso-accogliente-scala-giardino-rivarolo.webp', category: 'spazi-comuni', alt: 'Ingresso accogliente con scala in legno e luce naturale dal giardino — villa AllegraMente, Rivarolo', keywords: 'ingresso, accoglienza, scala, giardino, Rivarolo' },
  { source: '1120482.avif', file: 'soggiorno-luminoso-stufa-casa-famiglia-anziani.webp', category: 'spazi-comuni', alt: 'Soggiorno luminoso con divano e stufa — ambiente caldo della casa famiglia AllegraMente nel Canavese', keywords: 'soggiorno, salotto, luminoso, casa famiglia anziani, Canavese' },
  { source: '1120484.avif', file: 'villa-esterno-pergola-prato-rivarolo-canavese.webp', category: 'esterni', alt: 'Facciata della villa con pergola fiorita e prato verde — Casa AllegraMente, Rivarolo Canavese (TO)', keywords: 'villa, pergola, prato, Rivarolo Canavese, esterno' },
  { source: '1120486.avif', file: 'villa-pergola-verde-facciata-allegramente.webp', category: 'esterni', alt: 'Pergola coperta di verde sulla facciata della villa AllegraMente — casa famiglia anziani nel Canavese', keywords: 'villa, pergola, verde, facciata, AllegraMente' },
  { source: '1120489.avif', file: 'giardino-fiori-esterno-villa-canavese.webp', category: 'esterni', alt: 'Giardino fiorito e sentiero laterale della villa — spazi esterni Casa AllegraMente, Rivarolo Canavese', keywords: 'giardino, fiori, esterno, villa, Canavese' },
  { source: '1120490.avif', file: 'giardino-acero-rosso-villa-rivarolo-canavese.webp', category: 'esterni', alt: 'Giardino con acero rosso e prato verde presso la villa AllegraMente — Rivarolo Canavese (TO)', keywords: 'giardino, acero, villa, Rivarolo Canavese, verde' },
  { source: '1120491.avif', file: 'villa-esterno-giardino-rivarolo-canavese.webp', category: 'esterni', alt: 'Villa AllegraMente con giardino curato e ingresso principale — casa famiglia anziani a Rivarolo Canavese', keywords: 'villa, giardino, esterno, Rivarolo Canavese, casa famiglia anziani' },
  { source: '1120493.avif', file: 'villa-ingresso-fiori-giardino-allegramente.webp', category: 'esterni', alt: 'Ingresso fiorito e giardino della villa AllegraMente — residenza per anziani autosufficienti nel Canavese', keywords: 'villa, ingresso, fiori, giardino, AllegraMente' },
  { source: '1120495.avif', file: 'villa-esterno-panoramica-giardino-canavese.webp', category: 'esterni', alt: 'Panoramica della villa con ampio giardino e alberi — Casa Famiglia AllegraMente, Rivarolo Canavese (TO)', keywords: 'villa, panoramica, giardino, Canavese, residenza anziani' },
  { source: '1120497.avif', file: 'villa-esterno-acero-rosso-rivarolo-canavese.webp', category: 'esterni', alt: 'Esterno della villa con acero rosso e prato verde — Casa AllegraMente, Via Gria 12, Rivarolo Canavese', keywords: 'villa, acero, giardino, Rivarolo Canavese, Via Gria' },
  { source: 'IMG_4127.avif', file: 'giardino-estate-pergola-sdraio-canavese.webp', category: 'esterni', alt: 'Giardino estivo con pergola ombreggiata e sdraio — relax all\'aperto presso Casa AllegraMente nel Canavese', keywords: 'giardino, estate, pergola, sdraio, Canavese' },
  { source: 'IMG_4128.avif', file: 'porticato-giardino-tavolo-esterno-rivarolo.webp', category: 'esterni', alt: 'Porticato con tavolo da pranzo e ampio giardino verde — villa AllegraMente a Rivarolo Canavese (TO)', keywords: 'porticato, giardino, tavolo, Rivarolo, villa' },
  { source: 'IMG_4129.avif', file: 'villa-esterno-giardino-hero-allegramente.webp', category: 'esterni', alt: 'Facciata esterna e giardino fiorito della villa AllegraMente — casa famiglia anziani a Rivarolo Canavese', keywords: 'villa, hero, giardino, AllegraMente, Rivarolo Canavese' },
];

const MAX_WIDTH = 2400;
const WEBP_QUALITY = 82;

async function convertOne(entry) {
  const input = path.join(IMAGES, entry.source);
  const output = path.join(IMAGES, entry.file);
  if (!fs.existsSync(input)) {
    console.warn(`⚠️  Mancante: ${entry.source}`);
    return null;
  }

  const meta = await sharp(input).metadata();
  const pipeline = sharp(input);
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(output);
  const outStat = fs.statSync(output);
  fs.renameSync(input, path.join(ARCHIVE, entry.source));

  return {
    ...entry,
    width: meta.width,
    height: meta.height,
    originalBytes: fs.statSync(path.join(ARCHIVE, entry.source)).size,
    webpBytes: outStat.size,
  };
}

async function main() {
  fs.mkdirSync(ARCHIVE, { recursive: true });

  const results = [];
  for (const entry of PHOTO_MAP) {
    const r = await convertOne(entry);
    if (r) {
      results.push(r);
      console.log(`✓ ${entry.source} → ${entry.file} (${(r.webpBytes / 1024).toFixed(0)} KB)`);
    }
  }

  const manifestPath = path.join(IMAGES, 'PHOTOS_MANIFEST.md');
  const lines = [
    '# PHOTOS_MANIFEST — Casa AllegraMente',
    '',
    'Foto reali della villa Via Gria 12, Rivarolo Canavese. Convertite da AVIF a WebP ottimizzato.',
    '',
    '| file | alt SEO (max 125 char) | category | used_in | keywords |',
    '|------|------------------------|----------|---------|----------|',
  ];

  for (const p of PHOTO_MAP) {
    const alt = p.alt.length > 125 ? p.alt.slice(0, 122) + '...' : p.alt;
    lines.push(`| \`${p.file}\` | ${alt} | ${p.category} | content.ts | ${p.keywords} |`);
  }

  lines.push('', '## Logo', '', '| file | alt SEO | category | used_in | keywords |');
  lines.push('|------|---------|----------|---------|----------|');
  lines.push('| `logo-allegramente.png` | Logo Casa Famiglia AllegraMente — residenza anziani Rivarolo Canavese | brand | assets.logo, Hero | logo, AllegraMente, brand |');

  lines.push('', '## Ottimizzazione', '');
  lines.push(`- Originali AVIF archiviati in \`_archivio-originali/\``);
  lines.push(`- WebP quality ${WEBP_QUALITY}, max width ${MAX_WIDTH}px`);
  lines.push(`- IMG_4127/4128/4129 erano >500KB (5712×4284 px) — ridimensionate e convertite`);

  const large = results.filter((r) => r.originalBytes > 500_000);
  if (large.length) {
    lines.push('', '### File originali >500KB', '');
    for (const r of large) {
      lines.push(`- \`${r.source}\`: ${(r.originalBytes / 1024).toFixed(0)} KB → \`${r.file}\`: ${(r.webpBytes / 1024).toFixed(0)} KB`);
    }
  }

  lines.push('', '## Note', '');
  lines.push('- Nessuna foto camere/bagni disponibile al momento — categorie `camere` e `dettagli` usano spazi comuni/esterni.');
  lines.push('- Riferimenti template VG (`*vg.webp`, `foto_orizzontali/`) rimossi da content.ts; file template non presenti in sito nuovo.');

  fs.writeFileSync(manifestPath, lines.join('\n') + '\n');
  console.log(`\nManifest: ${manifestPath}`);
  console.log(`Convertite: ${results.length} foto`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
