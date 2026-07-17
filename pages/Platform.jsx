// Platform — dashboard screenshot with a centered headline and a subtle grid
// backdrop that fades out vertically behind the top of the image.
function Platform() {
  const { Button } = window.NodeVenturesDesignSystem_1fd7b8;
  const resolveAsset = (p) => (window.__resources && window.__resources[p]) || p;
  const href = (l) => (window.NV_HREF && window.NV_HREF(l)) || "#";
  const cards = [
    { title: "Contribute your skills", slot: "platform-contribute", placeholder: "Contribute image", graphic: "contribute",
      body: "Plug in to Node's ecosystem by contributing your time, skills and guidance to our hub of active ventures. Collaborate with like-minded experts to help take solutions from idea to implementation.",
      cta: "Become a contributor", href: href("Start contributing") },
    { title: "Invest in innovation", slot: "platform-invest", placeholder: "Invest image", graphic: "invest",
      body: "Explore investment opportunities across the Node ecosystem. Back ventures, projects, and assets designed to create long-term value while supporting practical innovation.",
      cta: "Discuss investment", href: href("Contact") },
  ];
  // Clean equilateral-triangle tessellation (SVG tile) — vertices align so lines
  // never cut through a triangle. Tile: side 52, height 45 (2 bands = 90 tall).
  const tri = encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='52' height='90' viewBox='0 0 52 90'>" +
    "<path d='M0 0 H52 M0 45 H52 M26 45 L0 0 M26 45 L52 0 M26 45 L0 90 M26 45 L52 90' " +
    "stroke='rgba(20,20,19,0.13)' stroke-width='1' fill='none'/></svg>"
  );
  return (
    <section className="nv-grid-band" style={{ paddingTop: 40, paddingBottom: 44 }}>
      <div className="nv-band-inner">
        <div style={{ position: "relative" }}>
          <div aria-hidden="true" className="nv-platform-tri" style={{ position: "absolute", left: "50%", top: -84, transform: "translateX(-50%)", width: "100vw", height: "100%",
            backgroundImage: `url("data:image/svg+xml,${tri}")`,
            backgroundSize: "52px 90px", backgroundPosition: "center top", backgroundRepeat: "repeat",
            WebkitMaskImage: "radial-gradient(ellipse 68% 82% at 50% 22%, #000 0%, rgba(0,0,0,0.85) 40%, transparent 74%), linear-gradient(to bottom, transparent 0%, #000 16%)",
            maskImage: "radial-gradient(ellipse 68% 82% at 50% 22%, #000 0%, rgba(0,0,0,0.85) 40%, transparent 74%), linear-gradient(to bottom, transparent 0%, #000 16%)",
            WebkitMaskComposite: "source-in", maskComposite: "intersect",
            pointerEvents: "none" }}></div>
          <div style={{ position: "relative", textAlign: "center", maxWidth: 720, margin: "0 auto 44px" }}>
            <div className="nv-label">How it works</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h2-weight)", fontSize: "var(--h2-size)", lineHeight: "var(--h2-line)", letterSpacing: "var(--h2-track)", margin: "16px auto 0", maxWidth: 620 }}>Two ways to participate in the Node Ventures ecosystem.</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)", color: "var(--color-body)", margin: "16px auto 0", maxWidth: 680 }}>
              Whether you want to build new ventures or invest in the vision behind them, Node connects you to an ecosystem built around Canada’s digital future.
            </p>
          </div>
          <div className="nv-platform-cards" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            {cards.map((c) => (
              <div key={c.title} style={{ filter: "drop-shadow(0 -6px 44px rgba(20,20,19,0.16))" }}>
                <div className="nv-feature-card" style={{ display: "flex", flexDirection: "column", background: "var(--color-canvas)", WebkitMaskImage: "linear-gradient(to bottom, #000 72%, transparent 100%)", maskImage: "linear-gradient(to bottom, #000 72%, transparent 100%)" }}>
                <div style={{ padding: c.graphic ? "28px 0 0" : 24, paddingBottom: 0 }}>{c.graphic === "contribute" ? <ContributeGraphic /> : c.graphic === "invest" ? <InvestGraphic /> : <image-slot id={c.slot} style={{ display: "block", width: "100%", aspectRatio: "16 / 10" }} placeholder={c.placeholder}></image-slot>}</div>
                <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: 40, paddingBottom: 156 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h3-weight)", fontSize: "var(--h3-size)", lineHeight: "var(--h3-line)", letterSpacing: "var(--h3-track)", margin: 0 }}>{c.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)", color: "var(--color-body)", margin: "14px 0 0" }}>{c.body}</p>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Platform = Platform;
