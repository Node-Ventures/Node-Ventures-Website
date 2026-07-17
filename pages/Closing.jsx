// Closing — two large CTA boxes attached to the footer. Each box: eyebrow +
// arrow button top-right, a large serif heading, and body copy anchored bottom.
function Closing() {
  const paths = [
    { eyebrow: "Contribute", t: "Contribute to the ventures.", b: "We provide the projects, the domain expertise and the hands-on support from day one to help you validate, build and scale faster." },
    { eyebrow: "Invest", t: "Invest in the Node ecosystem.", b: "Participate through flexible investment opportunities designed to support innovation, infrastructure, and sustainable growth." },
  ];

  const LINE = "var(--color-grid-line-dark)"; // divider color that reads on the dark surface

  const Arrow = ({ href }) => (
    <a href={href} aria-label="Learn more" className="cta-arrow-link" style={{ flexShrink: 0, textDecoration: "none" }}>
      <span aria-hidden="true" className="cta-arrow" style={{ width: 56, height: 56, display: "grid", placeItems: "center",
        border: "1px dashed rgba(250,249,245,0.32)", transition: "background .3s, border-color .3s" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-on-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </span>
    </a>
  );

  // Inverted-triangle node where a vertical rule meets the top horizontal rule:
  // two diagonals funnel down to an apex, and the vertical continues from the apex.
  const NW = 5, NH = 7; // half-width, height of the triangle
  const TopNode = ({ left }) => (
    <svg aria-hidden="true" width={NW * 2} height={NH} viewBox={`0 0 ${NW * 2} ${NH}`}
      style={{ position: "absolute", left, top: 0, transform: "translateX(-50%)", pointerEvents: "none", zIndex: 2, overflow: "visible" }}>
      <path d={`M 0 0 L ${NW} ${NH} L ${NW * 2} 0 Z`} fill={LINE} stroke="none" />
    </svg>
  );
  const BottomNode = ({ left }) => (
    <svg aria-hidden="true" width={NW * 2} height={NH} viewBox={`0 0 ${NW * 2} ${NH}`}
      style={{ position: "absolute", left, bottom: 0, transform: "translateX(-50%)", pointerEvents: "none", zIndex: 2, overflow: "visible" }}>
      <path d={`M 0 ${NH} L ${NW} 0 L ${NW * 2} ${NH} Z`} fill={LINE} stroke="none" />
    </svg>
  );

  return (
    <section className="nv-grid-band" style={{ paddingTop: 0, paddingBottom: 0, background: "var(--color-surface-dark)", color: "var(--color-on-dark)" }}>
      <div className="nv-band-inner">
        <div style={{ position: "relative" }}>
          <div className="nv-gridlines">
          {/* full-bleed horizontal rules matching the triangle pattern */}
          <div aria-hidden="true" style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100vw", height: 1, background: LINE, pointerEvents: "none" }}></div>
          <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100vw", height: 1, background: LINE, pointerEvents: "none" }}></div>
          {/* vertical rules: left, centered divider, right — start below the node apex so the triangle stays hollow */}
          <div aria-hidden="true" style={{ position: "absolute", top: NH, bottom: NH, left: 0, width: 1, background: LINE, pointerEvents: "none" }}></div>
          <div aria-hidden="true" style={{ position: "absolute", top: NH, bottom: NH, left: "50%", transform: "translateX(-0.5px)", width: 1, background: LINE, pointerEvents: "none" }}></div>
          <div aria-hidden="true" style={{ position: "absolute", top: NH, bottom: NH, right: 0, width: 1, background: LINE, pointerEvents: "none" }}></div>
          {/* inverted-triangle nodes at top intersections, upward at the bottom */}
          <TopNode left={0} /><TopNode left="50%" /><TopNode left="100%" />
          <BottomNode left={0} /><BottomNode left="50%" /><BottomNode left="100%" />
          </div>

          <div className="nv-2col nv-cta-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
            {paths.map((p, i) => (
              <div key={p.t} className="cta-box" style={{ position: "relative", display: "flex", flexDirection: "column",
                minHeight: 460, padding: "44px 48px" }}>
                {/* eyebrow */}
                <div className="nv-label" style={{ color: "var(--color-primary-on-dark)" }}>{p.eyebrow}</div>
                {/* large heading — top, just below eyebrow */}
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h2-weight)", fontSize: "var(--h2-size)", lineHeight: "var(--h2-line)", letterSpacing: "var(--h2-track)", margin: "20px 0 0", maxWidth: 460, color: "var(--color-on-dark)" }}>
                  {p.t}
                </h2>
                {/* bottom row: body left, arrow bottom-right */}
                <div style={{ marginTop: "auto", paddingTop: 40, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-size)", lineHeight: 1.5, color: "var(--color-on-dark-soft)", margin: 0, maxWidth: 400 }}>
                    {p.b}
                  </p>
                  <Arrow href={p.eyebrow === "Contribute"
                    ? ((window.NV_HREF && window.NV_HREF("Start contributing")) || "#")
                    : ((window.NV_HREF && window.NV_HREF("Contact")) || "contact.html")} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Closing = Closing;
