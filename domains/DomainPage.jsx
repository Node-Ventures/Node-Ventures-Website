// DomainPage — the ONE shared layout for every domain page.
// Renders hero → why-this-domain → quote → get-involved → ventures → closing CTA
// entirely from a `data` object (see domain-*.jsx). Edit this file once and every
// domain page updates. Per-domain COPY and IMAGES live in the data files only.
//
// Data shape (all image fields optional — omit to fall back to an ImageBox placeholder):
//   {
//     eyebrow, navLabel,
//     hero:  { headline, body, image, primaryCta, secondaryCta },
//     why:   { title, lead, cards: [{ t, b, image }] },          // 6 cards
//     quote: { text, portrait, logo, logoAlt, lines: [] },   // or quotes: [ {...}, {...} ] for a carousel
//     getInvolved: { title, subhead, paths: [{ t, b, cta }] },   // 3 paths
//     ventures: { title, lead },
//     cta:   { title, body, primaryCta, secondaryCta },
//   }
// DomainQuoteCarousel — several quotes in the shared QuotePanel, with the same
// slide animation and dashed arrow buttons as the homepage QuoteBlock.
// Used when a domain's data has `quotes: [...]` instead of a single `quote`.
function DomainQuoteCarousel({ quotes }) {
  const { ImageBox } = window;
  const resolveAsset = (p) => (window.__resources && window.__resources[p]) || p;
  const [idx, setIdx] = React.useState(0);
  const [tx, setTx] = React.useState(0);
  const [op, setOp] = React.useState(1);
  const [trans, setTrans] = React.useState(true);
  const busy = React.useRef(false);

  const go = (dir) => {
    if (busy.current) return;
    busy.current = true;
    setTrans(true); setTx(-48 * dir); setOp(0);            // slide current out
    setTimeout(() => {
      setTrans(false); setTx(48 * dir); setOp(0);          // jump to the other side
      setIdx((i) => (i + dir + quotes.length) % quotes.length);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setTrans(true); setTx(0); setOp(1);                // slide the new one in
        setTimeout(() => { busy.current = false; }, 440);
      }));
    }, 360);
  };

  const cur = quotes[idx];
  const slideStyle = { transform: tx === 0 ? "none" : "translateX(" + tx + "px)", opacity: op,
    transition: trans ? "transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease" : "none" };
  const arrowBtn = { width: 46, height: 46, padding: 0, background: "transparent", border: "1px dashed var(--color-muted)",
    cursor: "pointer", color: "var(--color-ink)", display: "flex", alignItems: "center", justifyContent: "center" };
  const arrow = (flip) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
      strokeLinejoin="round" style={flip ? { transform: "rotate(180deg)" } : undefined} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
  const controls = quotes.length > 1 ? (
    <React.Fragment>
      <button type="button" aria-label="Previous quote" onClick={() => go(-1)} style={arrowBtn}>{arrow(true)}</button>
      <button type="button" aria-label="Next quote" onClick={() => go(1)} style={{ ...arrowBtn, marginLeft: -1 }}>{arrow(false)}</button>
    </React.Fragment>
  ) : null;

  // Every quote is laid out invisibly in the same spot, so the section is always
  // as tall as the longest quote and the page below doesn't jump when sliding.
  const sizers = quotes.map((q, i) => (
    <div key={i} aria-hidden="true" style={{ gridArea: "1 / 1", visibility: "hidden", pointerEvents: "none" }}>
      <window.QuotePanel quote={q.text} portrait={<div />} logo={q.logo} lines={q.lines || []}
        controls={controls ? <div style={{ width: 91, height: 46 }} /> : null} />
    </div>
  ));

  return (
    <div style={{ display: "grid" }}>
    {sizers}
    <div style={{ gridArea: "1 / 1", display: "grid" }}>
    <window.QuotePanel
      quote={cur.text}
      portrait={<div style={{ ...slideStyle, width: "100%", height: "100%" }}>
        {cur.portrait
          ? <img src={resolveAsset(cur.portrait)} alt="" aria-hidden="true"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          : <ImageBox label="Portrait" height="100%" style={{ height: "100%" }} />}
      </div>}
      logo={cur.logo}
      logoAlt={cur.logoAlt}
      lines={cur.lines || []}
      slideStyle={slideStyle}
      controls={controls}
    />
    </div>
    </div>
  );
}
window.DomainQuoteCarousel = DomainQuoteCarousel;

function DomainPage({ data }) {
  const { Button } = window.NodeVenturesDesignSystem_1fd7b8;
  const { Eyebrow, SectionHead, ImageBox, GridFrame, GridCell } = window;
  const resolveAsset = (p) => (window.__resources && window.__resources[p]) || p;
  // Phones only (≤760px): Get involved intro drops under the heading.
  const isPhone = window.useIsMobile ? window.useIsMobile(760) : false;

  // Launch link routing: "contribute"-type CTAs → app login; everything else
  // (talk / invest / connect) → the contact page.
  const LOGIN = (window.NV_HREF && window.NV_HREF("Start contributing")) || "#";
  const CONTACT = (window.NV_HREF && window.NV_HREF("Contact")) || "../contact.html";
  const ctaHref = (label) => /contribut/i.test(label || "") ? LOGIN : CONTACT;
  // Optional per-button link: "#anchor" stays on the page, otherwise it's a
  // site-links label (e.g. "Contribute") resolved through NV_HREF.
  const pathHref = (p) => !p.href ? ctaHref(p.cta)
    : p.href.charAt(0) === "#" ? p.href
    : ((window.NV_HREF && window.NV_HREF(p.href)) || p.href);

  // Outlined secondary treatment for dark surfaces: transparent fill, cream
  // dashed frame + cream label, using the DS dash tokens so every dashed button
  // shares one dash rhythm. (DS 'secondary' dashes are ink and vanish on dark.)
  const ctaOutline = {
    backgroundColor: "transparent",
    color: "var(--color-on-dark)",
    backgroundImage: [
      "repeating-linear-gradient(90deg, var(--color-on-dark) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
      "repeating-linear-gradient(90deg, var(--color-on-dark) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
      "repeating-linear-gradient(0deg, var(--color-on-dark) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
      "repeating-linear-gradient(0deg, var(--color-on-dark) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
    ].join(", "),
    backgroundSize: "100% 1px, 100% 1px, 1px 100%, 1px 100%",
    backgroundPosition: "top, bottom, left, right",
    backgroundRepeat: "no-repeat",
  };

  const hero = data.hero || {};
  const why = data.why || {};
  const quote = data.quote || {};
  const gi = data.getInvolved || {};
  const ventures = data.ventures || {};
  const cta = data.cta || {};

  return (
    <div id="nv-page">
      <SiteNav />

      {/* ===== 1 · HERO (full-bleed dark image, interactive dot field) ===== */}
      <section className="nv-grid-band" style={{ position: "relative", overflow: "hidden", paddingTop: 148, paddingBottom: 148,
        background: "var(--color-surface-dark)", color: "var(--color-on-dark)" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {hero.image
            ? <img src={resolveAsset(hero.image)} alt="" aria-hidden="true"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            : <div style={{ width: "100%", height: "100%", background: "var(--color-surface-dark-elevated)" }} />}
        </div>
        <window.HeroDots gap={13} />
        <div className="nv-band-inner" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <Eyebrow onDark>{data.eyebrow}</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h1-weight)", fontSize: "var(--h1-size)",
              lineHeight: "var(--h1-line)", letterSpacing: "var(--h1-track)", color: "var(--color-on-dark)", margin: "18px 0 0", maxWidth: hero.headlineMaxWidth || 620 }}>
              {/* headline can be an array of lines: each starts on a new line */}
              {Array.isArray(hero.headline)
                ? hero.headline.map((line, i) => <React.Fragment key={i}>{i > 0 ? <br /> : null}{line}</React.Fragment>)
                : hero.headline}
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)",
              color: "var(--color-on-dark-soft)", margin: "22px 0 0", maxWidth: 640 }}>
              {hero.body}
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap", justifyContent: "center" }}>
              <a href={ctaHref(hero.primaryCta || "Become a contributor")} style={{ textDecoration: "none" }}><Button variant="primary" size="lg">{hero.primaryCta || "Become a contributor"}</Button></a>
              {hero.secondaryCta === null ? null : <a href={CONTACT} style={{ textDecoration: "none" }}><Button variant="secondary" size="lg" style={ctaOutline}>{hero.secondaryCta || "Talk to us"}</Button></a>}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2 · WHY THIS DOMAIN ===== */}
      <section className="nv-grid-band" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="nv-band-inner">
          <div style={{ marginBottom: 44 }}>
            <SectionHead eyebrow={why.eyebrow || "Why this domain"} title={why.title} lead={why.lead} />
          </div>
          <GridFrame cols={3} className="nv-swipe">
            {(why.cards || []).map((p, i) => (
              <GridCell key={p.t} minHeight={0} pad={28}
                style={i >= 3 ? { borderTop: "1px solid var(--color-grid-line)" } : undefined}>
                {p.image
                  ? <img src={resolveAsset(p.image)} alt={p.t}
                      style={{ width: "100%", height: 150, objectFit: "cover", objectPosition: p.imagePosition || "center", display: "block" }} />
                  : <ImageBox label={p.t} height={150} />}
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h4-weight)", fontSize: 22,
                  letterSpacing: "var(--h4-track)", margin: "22px 0 0", color: "var(--color-ink)" }}>{p.t}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-size)", lineHeight: "var(--body-line)",
                  color: "var(--color-body)", margin: "12px 0 0" }}>{p.b}</p>
              </GridCell>
            ))}
          </GridFrame>
        </div>
      </section>

      {/* ===== 3 · PULL-QUOTE (shared QuotePanel) ===== */}
      <section className="nv-grid-band" style={{ paddingTop: 8, paddingBottom: 96 }}>
        <div className="nv-band-inner">
          {Array.isArray(data.quotes) && data.quotes.length ? <DomainQuoteCarousel quotes={data.quotes} /> : (
          <window.QuotePanel
            quote={quote.text}
            portrait={quote.portrait
              ? <img src={resolveAsset(quote.portrait)} alt="" aria-hidden="true"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              : <ImageBox label="Portrait" height="100%" style={{ height: "100%" }} />}
            logo={quote.logo}
            logoAlt={quote.logoAlt}
            lines={quote.lines || []}
          />
          )}
        </div>
      </section>

      {/* ===== 4 · GET INVOLVED / HOW IT WORKS ===== */}
      <section id={gi.id} className="nv-grid-band" style={{ paddingTop: 96, paddingBottom: 96, background: "var(--color-surface-soft)", scrollMarginTop: 80 }}>
        <div className="nv-band-inner">
          {/* Default: label on top, then heading (left) and intro (right) sitting
              level with each other, however long the intro is.
              layout: "stacked" (Enterprise AI) puts the intro under the heading. */}
          {gi.layout === "stacked" ? (
            <div style={{ marginBottom: 44 }}>
              <SectionHead eyebrow={gi.eyebrow || "Get involved"} title={gi.title} lead={gi.subhead} />
            </div>
          ) : (
          <div style={{ marginBottom: 44 }}>
            <Eyebrow>{gi.eyebrow || "Get involved"}</Eyebrow>
            <div style={{ display: "flex", justifyContent: "space-between", gap: isPhone ? 20 : 48, marginTop: 16,
              flexDirection: isPhone ? "column" : "row", alignItems: isPhone ? "flex-start" : "center" }}>
              <div style={{ maxWidth: 620, flex: "1 1 auto" }}>
                <SectionHead title={gi.title} />
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)",
                color: "var(--color-body)", margin: 0, maxWidth: 360, flex: isPhone ? "none" : "0 1 360px", minWidth: isPhone ? 0 : 240 }}>
                {gi.subhead}
              </p>
            </div>
          </div>
          )}
          <GridFrame cols={3} className="nv-getinvolved">
            {(gi.paths || []).map((p) => {
              const giIcons = {
                "Become a contributor": "assets/getinvolved-contribute.jpg",
                "Explore investment": "assets/getinvolved-invest.jpg",
                "Connect with us": "assets/getinvolved-connect.jpg",
                "Data readiness": "assets/getinvolved-dataready.jpg",
                "AI opportunity mapping": "assets/getinvolved-mapping.jpg",
                "Agentic AI deployment": "assets/getinvolved-deploy.jpg",
              };
              return (
              <GridCell key={p.t} minHeight={300} pad={40}>
                {p.icon === null
                  ? <ImageBox label="" height={104} style={{ width: 104, marginTop: -6 }} />
                  : <img src={resolveAsset(p.icon || giIcons[p.t] || "assets/focus-building.png")} alt={p.t}
                      style={{ width: 104, height: 104, objectFit: "contain", display: "block", marginTop: -6 }} />}
                {p.label ? <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--color-primary)", display: "block", marginTop: 20 }}>{p.label}</span> : null}
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h4-weight)", fontSize: "var(--h4-size)",
                  letterSpacing: "var(--h4-track)", margin: p.label ? "14px 0 0" : "20px 0 0", color: "var(--color-ink)" }}>{p.t}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-size)", lineHeight: "var(--body-line)",
                  color: "var(--color-body)", margin: "12px 0 0" }}>{p.b}</p>
                {p.cta ? (
                  <div style={{ marginTop: "auto", paddingTop: 28 }}>
                    <a href={pathHref(p)} style={{ textDecoration: "none" }}><Button variant="primary" size="sm">{p.cta}</Button></a>
                  </div>
                ) : null}
              </GridCell>
              );
            })}
          </GridFrame>
        </div>
      </section>

      {/* ===== 6 · CLOSING CTA (DARK) ===== */}
      <section className="nv-grid-band" style={{ paddingTop: 0, paddingBottom: 0,
        background: "var(--color-surface-dark)", color: "var(--color-on-dark)" }}>
        <div className="nv-band-inner">
          <GridFrame cols={1} onDark className="nv-cta">
            <GridCell pad={56} minHeight={320} style={{ justifyContent: "center" }}>
              <div style={{ maxWidth: 720 }}>
                <Eyebrow onDark>Get started</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h2-weight)", fontSize: "var(--h2-size)",
                  lineHeight: "var(--h2-line)", letterSpacing: "var(--h2-track)", color: "var(--color-on-dark)", margin: "16px 0 0", maxWidth: 680 }}>
                  {Array.isArray(cta.title)
                    ? cta.title.map((line, i) => <React.Fragment key={i}>{i > 0 ? <br /> : null}{line}</React.Fragment>)
                    : cta.title}
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)",
                  color: "var(--color-on-dark-soft)", margin: "18px 0 0", maxWidth: 560 }}>
                  {cta.body}
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
                  <a href={cta.primaryHref ? ((window.NV_HREF && window.NV_HREF(cta.primaryHref)) || cta.primaryHref) : LOGIN} style={{ textDecoration: "none" }}><Button variant="primary" size="lg">{cta.primaryCta || "Become a contributor"}</Button></a>
                  {cta.secondaryCta === null ? null : <a href={CONTACT} style={{ textDecoration: "none" }}><Button variant="secondary" size="lg" style={ctaOutline}>{cta.secondaryCta || "Let's talk"}</Button></a>}
                </div>
              </div>
            </GridCell>
          </GridFrame>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
window.DomainPage = DomainPage;
