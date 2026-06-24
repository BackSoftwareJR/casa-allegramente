/**
 * Sostituisce i riferimenti VG Group con placeholder template.
 * Esegui: node scripts/template-replace.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const REPLACEMENTS = [
  // Ordine importante: match più lunghi prima
  ['Residence per Anziani Group V.G', 'bsbsbsbsbs'],
  ['Redazione Residence V.G', 'Redazione bsbsbsbsbs'],
  ['Residence V.G', 'bsbsbsbsbs'],
  ['Residenza V.G', 'bsbsbsbsbs'],
  ['Group V.G', 'bsbsbsbsbs'],
  ['www.vgresidence.com', 'TODO-sostituire-dominio.it'],
  ['vgresidence.com', 'TODO-sostituire-dominio.it'],
  ['vggroupsrl@gmail.com', 'TODO@sostituire.it'],
  ['info@vgresidence.com', 'TODO@sostituire.it'],
  ['+39 351 958 1235', '+39 TODO TELEFONO'],
  ['351 958 1235', 'TODO TELEFONO'],
  ['035 195 812 35', 'TODO TELEFONO'],
  ['+393519581235', '+390000000000'],
  ['393519581235', '390000000000'],
  ['14407090969', 'TODO_PIVA'],
  ['Via Francesco Petrarca, 14', 'TODO Via, Numero Civico'],
  ['Via Francesco Petrarca 14', 'TODO Via Numero Civico'],
  ['Via Francesco Petrarca', 'TODO Via'],
  ['Cabiate (CO)', 'TODO_CITTA (TODO)'],
  ['Cabiate,', 'TODO_CITTA,'],
  ['a Cabiate', 'a TODO_CITTA'],
  ['di Cabiate', 'di TODO_CITTA'],
  ['Cabiate ·', 'TODO_CITTA ·'],
  ['Cabiate', 'TODO_CITTA'],
  ['AW-17576720313', ''],
  ['residence-vg', 'sito-template'],
  ['logo_cabiate.png', 'logo.png'],
];

const EXTENSIONS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.md', '.mdx', '.json', '.xml', '.txt', '.example',
]);

const SKIP_DIRS = new Set(['node_modules', '.git', '.next']);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (EXTENSIONS.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

function applyReplacements(content) {
  let out = content;
  for (const [from, to] of REPLACEMENTS) {
    out = out.split(from).join(to);
  }
  return out;
}

const files = walk(ROOT).filter(
  (f) => !f.includes('template-replace.mjs') && !f.includes('blog-data.generated.ts')
);

let changed = 0;
for (const file of files) {
  const original = fs.readFileSync(file, 'utf8');
  const updated = applyReplacements(original);
  if (updated !== original) {
    fs.writeFileSync(file, updated, 'utf8');
    changed++;
    console.log('✓', path.relative(ROOT, file));
  }
}

console.log(`\nFatto: ${changed} file modificati.`);
