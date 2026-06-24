import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// ⚠️ SOSTITUIRE: imposta NEXT_PUBLIC_SITE_URL in .env.local o modifica il fallback
const BASE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.casaallegramente.it').replace(/\/$/, '');
const BLOG_DIR = path.join(__dirname, '../content/blog');
const outputPath = path.join(__dirname, '../public/sitemap.xml');

const mainPages = [
  { loc: BASE, changefreq: 'weekly', priority: '1.0' },
  { loc: `${BASE}/galleria`, changefreq: 'weekly', priority: '0.9' },
  { loc: `${BASE}/dove-siamo`, changefreq: 'weekly', priority: '0.9' },
  { loc: `${BASE}/la-vita-in-casa`, changefreq: 'weekly', priority: '0.85' },
  { loc: `${BASE}/servizi`, changefreq: 'weekly', priority: '0.85' },
  { loc: `${BASE}/chi-siamo`, changefreq: 'weekly', priority: '0.85' },
  { loc: `${BASE}/faq`, changefreq: 'weekly', priority: '0.8' },
  { loc: `${BASE}/contatti`, changefreq: 'weekly', priority: '0.85' },
  { loc: `${BASE}/blog`, changefreq: 'weekly', priority: '0.8' },
  { loc: `${BASE}/privacy`, changefreq: 'weekly', priority: '0.3' },
  { loc: `${BASE}/cookie`, changefreq: 'weekly', priority: '0.3' },
  { loc: `${BASE}/note-legali`, changefreq: 'monthly', priority: '0.3' },
  { loc: `${BASE}/termini-condizioni`, changefreq: 'monthly', priority: '0.3' },
  { loc: `${BASE}/informativa-sanitaria`, changefreq: 'monthly', priority: '0.3' },
  { loc: `${BASE}/accessibilita`, changefreq: 'monthly', priority: '0.3' },
];

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toLastMod(date) {
  return new Date(date).toISOString();
}

function urlEntry({ loc, lastmod, changefreq, priority }) {
  return [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

function getBlogPages() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8');
      const { data } = matter(raw);
      const slug = data.slug ?? filename.replace(/\.mdx$/, '');
      const lastModified = data.lastModified ?? data.date ?? new Date().toISOString();

      return {
        loc: `${BASE}/blog/${slug}`,
        lastmod: toLastMod(lastModified),
        changefreq: 'monthly',
        priority: '0.7',
      };
    });
}

const blogPages = getBlogPages();
const now = new Date().toISOString();
const staticPages = mainPages.map((page) => ({
  ...page,
  lastmod: now,
}));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...staticPages.map(urlEntry),
  ...blogPages.map(urlEntry),
  '</urlset>',
  '',
].join('\n');

fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Generated ${staticPages.length + blogPages.length} URLs → public/sitemap.xml`);
