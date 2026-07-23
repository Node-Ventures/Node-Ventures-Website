// LegalPage — shared chrome for text-only legal pages (Privacy, Terms).
// Renders the site nav, a centered reading column (capped line length,
// left-aligned text on light cream), and the site footer. Page content is
// passed as children so both pages share ONE layout/typography definition.
//   title     — page H1
//   effective — "Effective date: …" line under the title
function LegalPage({ title, effective, children }) {
  return (
    <div id="nv-page">
      <window.SiteNav />
      <section style={{ position: "relative", zIndex: 2, paddingTop: 88, paddingBottom: 112 }}>
        <div className="nv-band-inner">
          <article className="nv-legal">
            <div className="nv-label">Legal</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h1-weight)", fontSize: "var(--h1-size)", lineHeight: "var(--h1-line)", letterSpacing: "var(--h1-track)", color: "var(--color-ink)", margin: "16px 0 0" }}>{title}</h1>
            {effective ? <p className="nv-legal-eff">{effective}</p> : null}
            <div className="nv-legal-body">{children}</div>
          </article>
        </div>
      </section>
      <window.SiteFooter />
    </div>
  );
}
window.LegalPage = LegalPage;
