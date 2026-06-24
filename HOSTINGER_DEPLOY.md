# Deploy su Hostinger (Node.js Web App)

Sito Next.js 14 in modalità `next start` (non static export). Hostinger esegue build e avvio tramite hPanel.

## Comandi consigliati in hPanel

| Impostazione | Valore |
|---|---|
| **Build command** | `npm run build:hostinger` |
| **Start command** | `npm start` |
| **Node.js version** | 18.x o 20.x |
| **Output directory** | `.next` |
| **Root directory** | `/` (root repo) |

### Perché `build:hostinger` e non `npm run build`?

Il blog usa `src/lib/blog-data.generated.ts`, file **già committato** con HTML pre-renderizzato.

Lo script `generate-blog-data.mjs` usa `Function` (via `next-mdx-remote`) solo in locale/CI quando si aggiungono o modificano articoli. Su Hostinger quel costruttore può essere bloccato e far **fallire il prebuild**, lasciando online la build precedente (con MDX runtime → 500 sulle pagine articolo).

`build:hostinger` rigenera solo la sitemap e lancia `next build`, usando il file generato già nel repo.

## Quando modifichi articoli blog

In locale:

```bash
npm run generate:blog    # rigenera src/lib/blog-data.generated.ts
npm run generate:sitemap # opzionale, anche in prebuild
git add src/lib/blog-data.generated.ts public/sitemap.xml
git commit -m "Update blog content"
git push
```

Poi redeploy su Hostinger (vedi sotto).

## Redeploy da hPanel (obbligatorio dopo ogni push)

Git push **non basta** se il redeploy automatico non è attivo o la build precedente è fallita.

1. Accedi a **hPanel** → **Websites**
2. Seleziona **TODO-sostituire-dominio.it**
3. Apri la dashboard **Node.js Web App**
4. Vai a **Deployments**
5. Clicca **Settings and redeploy**
6. Verifica:
   - Branch corretto (`main`)
   - Build command: `npm run build:hostinger`
   - Start command: `npm start`
7. Clicca **Save and redeploy** (o **Redeploy**)
8. Attendi build al 100% — controlla i **Build logs** per errori
9. Verifica:

```bash
curl -sI https://TODO-sostituire-dominio.it/blog/come-scegliere-residenza-anziani-autosufficienti | head -1
# Deve essere: HTTP/2 200
```

### Se la build fallisce

- Apri **Build logs** nella sezione Deployments
- Cerca errori su `Function`, `MDX`, o `generate-blog-data`
- Conferma che il build command sia `npm run build:hostinger` (non `npm run build` con prebuild MDX)

### Restart senza rebuild

Il pulsante **Restart** (dashboard Node.js → Running) riavvia solo il processo Node. **Non** applica nuovo codice da Git. Dopo un push serve sempre **Redeploy**.

## Struttura deploy

```
git push → Hostinger pull branch
         → npm install
         → npm run build:hostinger  (sitemap + next build)
         → npm start                (next start -p $PORT)
```

Non ci sono GitHub Actions in questo repo: il deploy passa interamente da Hostinger hPanel.
