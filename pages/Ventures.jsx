// Ventures — full-bleed dark section with hero dot pattern behind filled cards.
// Header (label/heading/subhead) with arrows at the bottom-right of the text,
// then a looping logo + image + sign-up carousel that bleeds off both edges.
function Ventures() {
  const { Button } = window.NodeVenturesDesignSystem_1fd7b8;
  const resolveAsset = (p) => (window.__resources && window.__resources[p]) || p;
  const ventures = [
    { logo: "assets/landlogic-logo.svg", name: "LandLogic", img: "photos/venture-landlogic-c.jpg", desc: "A suite of products that help developers, planners, and municipalities make faster, more informed land-use decisions." },
    { logo: "assets/bluecanoe-logo.svg", name: "Blue Canoe", img: "photos/venture-bluecanoe-c.jpg", desc: "A platform that helps buyers discover the right Ontario cottage based on how they want to live, not just where they want to buy." },
    { logo: "assets/aecorn-logo.svg", name: "AECORN", img: "photos/venture-aecorn-c.jpg", desc: "A tech-enabled real estate brokerage that equips agents with AI tools, market intelligence, and modern marketing solutions" },
    { logo: "assets/parcella-logo.svg", name: "Parcella", img: "photos/venture-parcella-c.jpg", desc: "An AI property advisor that helps homeowners understand what they can build and guides them through every step of the project." },
    { logo: null, name: "Start your own", img: "photos/venture-startyourown-c.jpg", desc: "Have an idea for a venture? We'll help you build the team, the plan, the product and the release." },
  ];
  const CARD = "780px";
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  const cardW = isMobile ? "82%" : CARD;
  const [i, setI] = React.useState(0);
  const n = ventures.length;
  const prev = () => setI((v) => (v - 1 + n) % n);
  const next = () => setI((v) => (v + 1) % n);

  const Arrow = ({ dir, onClick }) => (
    <button onClick={onClick} aria-label={dir === "prev" ? "Previous" : "Next"} className="nv-vent-arrow"
      style={{ width: 46, height: 46, display: "grid", placeItems: "center", background: "transparent",
        border: "1px dashed rgba(250,249,245,0.35)", cursor: "pointer", marginLeft: dir === "next" ? -1 : 0, transition: "background .3s, border-color .3s" }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-on-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: dir === "prev" ? "rotate(180deg)" : "none" }}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );

  return (
    <section className="nv-grid-band" style={{ position: "relative", overflow: "hidden", paddingTop: 96, paddingBottom: 96, background: "var(--color-surface-dark)", color: "var(--color-on-dark)" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(250,249,245,0.08) 0.9px, transparent 1.3px)",
        backgroundSize: "13px 13px",
        WebkitMaskImage: "radial-gradient(120% 120% at 50% 30%, #000 55%, transparent 100%)",
        maskImage: "radial-gradient(120% 120% at 50% 30%, #000 55%, transparent 100%)" }}></div>
      <div className="nv-band-inner" style={{ position: "relative", zIndex: 1 }}>
        {/* header: heading left, arrows at bottom-right of the text */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap", marginBottom: 44 }}>
          <div>
            <div className="nv-label" style={{ color: "var(--color-primary-on-dark)" }}>Ventures</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h2-weight)", fontSize: "var(--h2-size)", lineHeight: "var(--h2-line)", letterSpacing: "var(--h2-track)", margin: "16px 0 0", maxWidth: 620, color: "var(--color-on-dark)" }}>
              Take a peek at some of Node's ventures.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)", color: "var(--color-on-dark-soft)", margin: "16px 0 0", maxWidth: 560 }}>
              Node has a portfolio of ventures from across the tech ecosystem. Contribute your skills, time or investment to as many as you like.
            </p>
          </div>
          {!isMobile && (
            <div style={{ display: "flex", flexShrink: 0 }}>
              <Arrow dir="prev" onClick={prev} />
              <Arrow dir="next" onClick={next} />
            </div>
          )}
        </div>
      </div>

      {/* carousel — spans the section (already full-bleed) without relying on
          100vw, which overflows by the scrollbar width and pushes page padding
          off-screen on the right */}
      <div className={isMobile ? "nv-vent-scroll" : ""} style={{ position: "relative", zIndex: 1, overflow: isMobile ? "auto" : "hidden", width: "100%", ...(isMobile ? { scrollSnapType: "x mandatory", scrollPaddingLeft: 20, WebkitOverflowScrolling: "touch" } : {}) }}>
        <div style={{ display: "flex", gap: isMobile ? 16 : 24,
          paddingLeft: isMobile ? "20px" : "max(var(--page-pad), calc((100vw - var(--content-max)) / 2 + var(--page-pad)))",
          paddingRight: isMobile ? 0 : 0,
          transform: isMobile ? "none" : `translateX(calc(${-i} * (${cardW} + 24px)))`, transition: "transform .55s cubic-bezier(0.76,0,0.24,1)" }}>
          {ventures.map((v) => (
            <div key={v.name} style={{ flex: `0 0 ${cardW}`, scrollSnapAlign: isMobile ? "start" : undefined, background: "var(--color-surface-dark)", border: "1px dashed rgba(250,249,245,0.28)", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", minHeight: isMobile ? "auto" : 440 }}>
              <div style={{ padding: isMobile ? "24px 24px 28px" : "28px 40px 40px", display: "flex", flexDirection: "column" }}>
                {v.logo
                  ? <img src={resolveAsset(v.logo)} alt={v.name} style={{ height: isMobile ? 44 : 56, width: "auto", maxWidth: "85%", objectFit: "contain", objectPosition: "left center", display: "block", filter: "brightness(0) invert(1)" }} />
                  : <div style={{ height: isMobile ? 44 : 56, display: "flex", alignItems: "center", fontFamily: "var(--font-display)", fontSize: isMobile ? 20 : 24, letterSpacing: "-0.5px", color: "var(--color-on-dark)" }}>{v.name}</div>}
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: isMobile ? "var(--body-size)" : "var(--body-lg-size)", lineHeight: isMobile ? "var(--body-line)" : "var(--body-lg-line)", color: "var(--color-on-dark)", margin: "6px 0 0", maxWidth: 360 }}>
                  {v.desc}
                </p>
                <div style={{ marginTop: "auto", paddingTop: 28 }}>
                  {v.logo
                    ? <a href={(window.NV_HREF && window.NV_HREF("Contact")) || "contact.html"} style={{ textDecoration: "none" }}><Button variant="primary" size="sm">Let's talk</Button></a>
                    : <a href={(window.NV_HREF && window.NV_HREF("Contact")) || "contact.html"} style={{ textDecoration: "none" }}><Button variant="primary" size="sm">Let's talk</Button></a>}
                </div>
              </div>
              <div className="nv-vent-img" style={{ padding: 20, ...(isMobile ? { height: 320 } : {}) }}>
                <img src={resolveAsset(v.img || "photos/venture-placeholder.jpg")} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: 8 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Ventures = Ventures;
