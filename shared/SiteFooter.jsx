// SiteFooter — dark, boxed link columns, dot-marks in the corner.
// Link targets come from the shared site-links registry (window.NV_HREF).
function SiteFooter() {
  const href = window.NV_HREF || (() => "#");
  // NOTE (pre-launch): Invest / Ventures columns and the Contribute link
  // temporarily removed — pages not built yet. Restore when they ship.
  const cols = [
    { h: "Fund management", links: ["Asset fund", "Venture fund", "Debt fund"] },
    { h: "Domains", links: ["Built environment", "National defence", "Community infrastructure", "Enterprise AI"] },
    { h: "Company", links: [{ address: ["95 Mural St. Richmond Hill", "Ontario L4B 3G2"] }, "admin@nodeventures.ca", "Contact", "Log in"] },
  ];
  const Hover = ({ t }) => (
    <span className="nv-link"><span data-t={t} style={{ whiteSpace: "normal" }}>{t}</span></span>
  );
  const resolveAsset = (p) => (window.__resources && window.__resources[p]) || p;
  return (
    <footer style={{ background: "var(--color-surface-dark)", padding: 0 }}>
      <div className="nv-band-inner">
      <div className="nv-footer-box" style={{ position: "relative", width: "100%", background: "transparent", color: "var(--color-on-dark)", borderRadius: 0, padding: "56px 56px 0", minHeight: 510, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* vertical rules continuing down either side of the footer */}
        <div aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 1, background: "#403d38", pointerEvents: "none", zIndex: 0 }}></div>
        <div aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 1, background: "#403d38", pointerEvents: "none", zIndex: 0 }}></div>
        <div className="nv-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 0.85fr 1fr 1.05fr", gap: 32, position: "relative", zIndex: 1 }}>
          <div>
            <img src={resolveAsset("assets/node-wordmark.svg")} alt="Node Ventures" style={{ display: "block", height: 30, width: "auto" }} />
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-on-dark)", marginBottom: 16 }}>{c.h}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.links.map((l) => (typeof l === "object" ? (
                  <li key="address" style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-sm-size)", color: "var(--color-on-dark-soft)", lineHeight: 1.45 }}>
                    {l.address.map((line) => <div key={line}>{line}</div>)}
                  </li>
                ) : (
                  <li key={l}><a href={href(l)} {...(href(l).indexOf("mailto:") === 0 ? { target: "_blank", rel: "noopener noreferrer" } : {})} style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-sm-size)", color: "var(--color-on-dark-soft)", textDecoration: "none" }}>{<Hover t={l} />}</a></li>
                )))}
              </ul>
            </div>
          ))}
        </div>
        {/* giant node mark, anchored to the bottom-left and bleeding off the bottom */}
        <img src={resolveAsset("assets/node-footer-wordmark.svg")} alt="" aria-hidden="true"
          style={{ marginTop: "auto", alignSelf: "stretch", display: "block", width: "100%", height: "auto", marginBottom: 0, opacity: 0.5 }} />
        {/* legal, overlaid at the bottom-left over the graphic */}
        <div className="nv-footer-legal" style={{ position: "absolute", left: 56, bottom: 28, display: "flex", gap: 12, alignItems: "baseline", zIndex: 2 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--caption-size)", color: "var(--color-on-dark-soft)" }}>© 2026 Node Ventures, Inc.</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--caption-size)", color: "var(--color-on-dark-soft)" }}>|</span>
          <a href={href("Privacy")} style={{ fontFamily: "var(--font-body)", fontSize: "var(--caption-size)", color: "var(--color-on-dark-soft)", textDecoration: "none" }}>{<Hover t="Privacy" />}</a>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--caption-size)", color: "var(--color-on-dark-soft)" }}>|</span>
          <a href={href("Terms")} style={{ fontFamily: "var(--font-body)", fontSize: "var(--caption-size)", color: "var(--color-on-dark-soft)", textDecoration: "none" }}>{<Hover t="Terms" />}</a>
        </div>
      </div>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
