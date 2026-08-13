// FundPage — the ONE shared layout for every fund page (Asset, Venture, Debt).
// Renders hero → two-column intro → focus → advantage cards → how-it-works (dark)
// → mandate list → closing CTA entirely from a `data` object (see fund-*.jsx).
// Edit this file once and every fund page updates. Per-fund COPY lives in the
// data files only.
//
// data shape:
//   {
//     eyebrow,
//     hero:   { headline, intro },
//     lede:   [paragraph, paragraph],                  // two-column pair
//     focus:  { title, lead, body: [paragraph, ...] },
//     more:   { title, lead, sub: { title, body, cards: [{ t, b }] } },  // 2-4 cards
//     how:    { title, steps: [{ t, b }] },
//     built:  { title, lead, items: [label, ...] },
//     cta:    { title, body, button },
//   }
function FundPage({ data }) {
  const { Button } = window.NodeVenturesDesignSystem_1fd7b8;
  const { SectionHead, GridFrame, GridCell } = window;
  const CONTACT = (window.NV_HREF && window.NV_HREF("Contact")) || "../pages/contact.html";
  const resolveAsset = (p) => (window.__resources && window.__resources[p]) || p;

  const hero = data.hero || {};
  const focus = data.focus || {};
  const more = data.more || {};
  const sub = more.sub || {};
  const how = data.how || {};
  const built = data.built || {};
  const cta = data.cta || {};

  const para = { fontFamily: "var(--font-body)", fontSize: "var(--body-size)", lineHeight: 1.6, color: "var(--color-body)", margin: 0, textWrap: "pretty" };
  const cardTitle = { fontFamily: "var(--font-display)", fontWeight: "var(--h4-weight)", fontSize: "var(--h4-size)", lineHeight: "var(--h4-line)", letterSpacing: "var(--h4-track)", margin: 0 };

  return (
    <div id="nv-page">
      <window.SiteNav />

      {/* ===== 1 · HERO ===== */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: 96, paddingBottom: 56 }}>
        <div className="nv-band-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="nv-2col nv-fund-hero" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 56, alignItems: "start" }}>
            <div>
              <div className="nv-label">{data.eyebrow}</div>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h1-weight)", fontSize: "var(--h1-size)", lineHeight: "var(--h1-line)", letterSpacing: "var(--h1-track)", color: "var(--color-ink)", margin: "18px 0 0", maxWidth: "9.5em" }}>{hero.headline}</h1>
            </div>
            <div className="nv-fund-hero-aside" style={{ position: "relative", borderLeft: "1px solid var(--color-grid-line)", paddingLeft: 22, alignSelf: "end", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span aria-hidden="true" className="nv-fund-hero-mark" style={{ position: "absolute", left: -2, top: 0, width: 4, height: 30, background: "var(--color-primary)" }}></span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-size)", lineHeight: 1.55, color: "var(--color-body)", margin: 0, maxWidth: 400, textWrap: "pretty" }}>{hero.intro}</p>
              <div style={{ marginTop: 24 }}>
                <a href={CONTACT} style={{ textDecoration: "none" }}><Button variant="primary" size="sm">Let's talk</Button></a>
              </div>
            </div>
          </div>
          <div className="nv-fund-hero-img" style={{ position: "relative", marginTop: 64 }}>
            {hero.image
              ? <img src={resolveAsset(hero.image)} alt={hero.imageAlt || ""} style={{ display: "block", width: "100%", height: "auto" }} />
              : <div aria-hidden="true" style={{ width: "100%", aspectRatio: "16 / 9", background: "var(--color-surface-soft, #eceae3)" }}></div>}
            <div aria-hidden="true" className="nv-fund-hero-dots"></div>
          </div>
        </div>
      </section>

      {/* ===== 2 · TWO-COLUMN CALLOUT LEDE ===== */}
      <section className="nv-dot-band" style={{ position: "relative", zIndex: 2, paddingTop: 40, paddingBottom: 88 }}>
        <div className="nv-band-inner" style={{ position: "relative", zIndex: 1 }}>
          <div className="nv-2col nv-fund-lede" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            {(data.lede || []).map((p, i) => (<p key={i} style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(21px, 2vw, 26px)", lineHeight: 1.4, letterSpacing: "-0.3px", color: "var(--color-ink)", margin: 0, textWrap: "pretty" }}>{p}</p>))}
          </div>
        </div>
      </section>

      {/* ===== 3 · A FOCUSED APPROACH — heading left, body right ===== */}
      <section style={{ position: "relative", zIndex: 2, paddingTop: 96, paddingBottom: 104 }}>
        <div className="nv-band-inner">
          <div>
            {focus.eyebrow ? <div className="nv-label">{focus.eyebrow}</div> : null}
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h2-weight)", fontSize: "var(--h2-size)", lineHeight: "var(--h2-line)", letterSpacing: "var(--h2-track)", color: "var(--color-ink)", margin: focus.eyebrow ? "16px 0 0" : 0, maxWidth: "11em" }}>{focus.title}</h2>
          </div>
          <div className="nv-2col nv-fund-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48, marginTop: 16 }}>
            {(focus.body || []).map((p, i) => (<p key={i} style={para}>{p}</p>))}
          </div>
        </div>
      </section>

      {/* ===== 4 · THE NODE ADVANTAGE + CARDS ===== */}
      <section className="nv-grid-band" style={{ position: "relative", zIndex: 2, paddingBottom: 104 }}>
        <div className="nv-band-inner">
          <div className="nv-2col nv-fund-split" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "end" }}>
            <div>
              {sub.eyebrow ? <div className="nv-label">{sub.eyebrow}</div> : null}
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h2-weight)", fontSize: "var(--h2-size)", lineHeight: "var(--h2-line)", letterSpacing: "var(--h2-track)", color: "var(--color-ink)", margin: sub.eyebrow ? "16px 0 0" : 0, maxWidth: 420 }}>{sub.title}</h2>
            </div>
            <p style={{ ...para, maxWidth: 620 }}>{sub.body}</p>
          </div>
          <div style={{ marginTop: 24 }}>
            <GridFrame cols={(sub.cards || []).length || 3} className="nv-swipe">
              {(sub.cards || []).map((c) => (
                <GridCell key={c.t} pad={40} minHeight={260}>
                  <div aria-hidden={c.image ? undefined : "true"} style={{ height: 168, marginBottom: 28, background: "var(--color-surface-soft, #eceae3)", overflow: "hidden" }}>
                    {c.image ? <img src={resolveAsset(c.image)} alt={c.imageAlt || ""} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: c.imagePos || "center" }} /> : null}
                  </div>
                  <h4 style={cardTitle}>{c.t}</h4>
                  <p style={{ ...para, marginTop: 14, fontSize: "var(--body-sm-size)", lineHeight: 1.55 }}>{c.b}</p>
                </GridCell>
              ))}
            </GridFrame>
          </div>
        </div>
      </section>

      {/* ===== 5 · HOW IT WORKS (DARK) ===== */}
      <section className="nv-grid-band nv-dark" style={{ position: "relative", zIndex: 2, background: "var(--color-surface-dark)", color: "var(--color-on-dark)", paddingTop: 104, paddingBottom: 104 }}>
        <div className="nv-band-inner">
          <SectionHead eyebrow={how.eyebrow} title={how.title} lead={how.lead} onDark align="center" maxTitle={700} maxLead={720} />
          <div style={{ marginTop: 24 }}>
            <GridFrame cols={3} onDark className="nv-swipe nv-fund-steps">
              {(how.steps || []).map((s, i) => (
                <GridCell key={s.t} pad={40} minHeight={250}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.06em", color: "var(--color-primary-on-dark)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h4 style={{ ...cardTitle, color: "var(--color-on-dark)", marginTop: 18 }}>{s.t}</h4>
                  <p style={{ ...para, color: "var(--color-on-dark-soft)", marginTop: 14, fontSize: "var(--body-sm-size)", lineHeight: 1.55 }}>{s.b}</p>
                </GridCell>
              ))}
              {(how.steps || []).length % 3 !== 0 ? <div className="nv-fund-step-filler" style={{ position: "relative", padding: 40, display: "flex", flexDirection: "column" }}></div> : null}
            </GridFrame>
          </div>
        </div>
      </section>

      {/* ===== 6 · BUILT AROUND THE OPPORTUNITY — label list ===== */}
      <section style={{ position: "relative", zIndex: 2, paddingTop: 104, paddingBottom: 104 }}>
        <div className="nv-band-inner">
          <SectionHead eyebrow={built.eyebrow} title={built.title} lead={built.lead} maxTitle={620} maxLead={680} />
          <ul className={"nv-fund-tags" + (built.columns === 1 ? " nv-fund-tags-1" : "")} style={{ listStyle: "none", margin: "32px 0 0", padding: 0, display: "grid", gridTemplateColumns: built.columns === 1 ? "1fr" : "1fr 1fr", columnGap: 72, rowGap: 0 }}>
            {(built.items || []).map((t) => {
              const label = typeof t === "object" ? t.term : t;
              return (
              <li key={label} style={{ padding: "22px 0", borderBottom: "1px solid var(--color-grid-line)", display: "flex", alignItems: "center", gap: 14 }}>
                <span aria-hidden="true" style={{ width: 9, height: 9, flex: "none", background: "var(--color-primary)" }}></span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", color: "var(--color-ink)" }}>
                  {typeof t === "object"
                    ? <React.Fragment><a href={(window.NV_HREF && window.NV_HREF(t.link)) || "#"} style={{ fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3, color: "var(--color-ink)" }}>{t.term}</a>{t.rest}</React.Fragment>
                    : t}
                </span>
              </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ===== 7 · CLOSING CTA (DARK, ONE BOX) ===== */}
      <section className="nv-grid-band" style={{ paddingTop: 0, paddingBottom: 0, background: "var(--color-surface-dark)", color: "var(--color-on-dark)" }}>
        <div className="nv-band-inner">
          <GridFrame cols={1} onDark className="nv-cta">
            <GridCell pad={56} minHeight={320} style={{ justifyContent: "center" }}>
              <div style={{ maxWidth: 720 }}>
                {cta.eyebrow ? <div className="nv-label" style={{ color: "var(--color-primary-on-dark)" }}>{cta.eyebrow}</div> : null}
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h2-weight)", fontSize: "var(--h2-size)", lineHeight: "var(--h2-line)", letterSpacing: "var(--h2-track)", color: "var(--color-on-dark)", margin: cta.eyebrow ? "16px 0 0" : 0, maxWidth: 680 }}>{cta.title}</h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)", color: "var(--color-on-dark-soft)", margin: "18px 0 0", maxWidth: 600, textWrap: "pretty" }}>{cta.body}</p>
                <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
                  <a href={CONTACT} style={{ textDecoration: "none" }}><Button variant="primary" size="lg">{cta.button}</Button></a>
                </div>
              </div>
            </GridCell>
          </GridFrame>
        </div>
      </section>

      <window.SiteFooter />
    </div>
  );
}
window.FundPage = FundPage;
