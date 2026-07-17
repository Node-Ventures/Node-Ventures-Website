# Node Ventures — marketing site

Static site (React attached to `window` globals, **pre-compiled** JSX — no runtime Babel).
Serve the repo root with any static file server; the homepage is `index.html`.

## Structure
- `index.html`, `contact.html`  — root pages
- `domains/*.html`              — the four domain pages (data-driven via `DomainPage`)
- `_ds/`                        — design-system tokens + component bundle
- `shared/`, `pages/`, `domains/` — component **sources** (`*.jsx`) + **compiled** output (`*.js`)
- `vendor/`                     — self-hosted production React, ReactDOM, three.js
- `assets/ logos/ photos/ avatars/`  — homepage images
- `domains/assets/`             — domain-page images

## Build
The HTML loads the compiled `*.js`. After editing any `*.jsx`, regenerate them:

```bash
npm install     # once
npm run build   # recompiles every .jsx -> .js
```

Compiled `.js` files are committed so the site deploys with **no build step** on the host.

## Local preview
```bash
npx http-server -p 8099    # or: python -m http.server 8099
```
Then open http://localhost:8099/
