# Assets to export from the Claude Design project

> STATUS: ✅ COMPLETE. All referenced images are on disk and rendering with 0 broken
> across every page — homepage (`pages/` 47/47) and all four domain pages
> (`domains/` 42/42). Nothing outstanding. The lists below are kept for reference.


All image **references** are already wired into the code — these files just need to
be dropped into the matching folders. Filenames match exactly, so no code changes
are needed. Overwriting any files I already pulled is safe (the design originals
are equal or better quality).

Easiest path: in the Claude Design project, export/download these folders and drop
them in, overwriting:
- `pages/photos/`  →  `pages/photos/`
- `pages/assets/`  →  `pages/assets/`
- `pages/avatars/` →  `pages/avatars/`
- `domains/assets/` → `domains/assets/`

---

## Still missing (the files >256 KiB that the MCP couldn't transfer)

### Homepage — `pages/`
Ventures carousel (Ventures section):
- `photos/venture-landlogic-c.jpg`
- `photos/venture-bluecanoe-c.jpg`
- `photos/venture-aecorn-c.jpg`
- `photos/venture-parcella-c.jpg`
- `photos/venture-startyourown-c.jpg`
- `photos/venture-placeholder.jpg`

How-to-contribute steps (HowWeBuild section):
- `photos/process-01-d.png` … `photos/process-05-d.png`

Narrative section (canvas avatars — decorative, page falls back to drawn faces if absent):
- `photos/a1.jpg` … `photos/a13.jpg`

Mobile-only:
- `assets/hero-sphere.png` (mobile hero)
- `assets/narr-1-float.jpg`, `assets/narr-2-silos.jpg` (mobile narrative; narr-3 already present)

### Domain pages — `domains/assets/`
Hero backgrounds (full-bleed, top of each domain page):
- `hero-built-environment.jpg`
- `hero-national-defence.jpg`
- `hero-enterprise-ai.jpg`
- `hero-community.jpg`

"Why this domain" cards (6 per page):
- Built Environment: `why-housing.jpg`, `why-planning.jpg`, `why-infrastructure.jpg`, `why-construction.jpg`, `why-asset.jpg`, `why-digital.jpg`
- National Defence: `why-nd-sovereignty.jpg`, `why-nd-secure.jpg`, `why-nd-situational.jpg`, `why-nd-geospatial.jpg`, `why-nd-infrastructure.jpg`, `why-nd-resilience.jpg`
- Community Infrastructure: `why-ci-energy.jpg`, `why-ci-access.jpg`, `why-ci-education.jpg`, `why-ci-realestate.jpg`, `why-ci-community.jpg`, `why-ci-government.jpg`
- Enterprise AI: `why-ea-readiness.jpg`, `why-ea-workplace.jpg`, `why-ea-process.jpg`, `why-ea-deploy.jpg`, `why-ea-security.jpg`, `why-ea-conversational.jpg`

Quote portraits:
- `quote-defence.jpg`, `quote-enterprise.jpg`, `quote-community.jpg` (quote-landlogic.jpg already present)

---

## Already present (pulled successfully — no action needed)
- All SVG logos/wordmarks (nav, footer, venture logos, One Ontario, 3DRBI)
- `pages/logos/*` (7 marquee logos)
- `pages/photos/focus-building-iso.jpg`, `focus-shield.jpg`, `focus-school.jpg`, `focus-desk.jpg`
- `pages/photos/aecorn-mockup-c.jpg`, `landlogic-mockup-c.jpg`, `bluecanoe-mockup-c.jpg`
- `pages/assets/narr-3-network.jpg`
- `domains/assets/getinvolved-*.jpg` (6), `quote-landlogic.jpg`, `logo-3drbi.png`

## Referenced only in `<meta>` hints (not rendered — safe to ignore if absent)
`pages/assets/built-environment-c.jpg`, `node-footer-mark.svg`,
`pages/photos/focus-building.jpg`, `focus-conveyor.jpg`, `dashboard-mockup-g.png`,
`pages/avatars/cory.svg`, `sadra.svg`, `saeid.svg`
