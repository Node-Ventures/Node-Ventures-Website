// Hero — dark editorial hero with an interactive node-sphere (see sphere.js).
// Left copy column; the geodesic sphere sits on the right of a full-bleed
// canvas, spins slowly, responds to drag, and pops service callouts. The
// SiteNav logo bar renders above this component (App.jsx).
function Hero() {
  const { Button } = window.NodeVenturesDesignSystem_1fd7b8;
  const resolveAsset = (p) => (window.__resources && window.__resources[p]) || p;
  const hostRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const copyRef = React.useRef(null);
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;

  React.useEffect(() => {
    if (isMobile) return; // mobile shows a static image instead of the live sphere
    if (!window.NodeSphere || !canvasRef.current) return;
    const services = [
      { label: "Venture Building" },
      { label: "Fund Management" },
      { label: "Capital Deployment" },
      { label: "Applied Research" },
      { label: "Product Development" },
      { label: "Commercialization" },
      { label: "Strategic Partnerships" },
      { label: "Expert Network" },
      { label: "Founder Network" },
      { label: "Industry Collaboration" },
      { label: "Research Collaboration" },
      { label: "Artificial Intelligence" },
      { label: "Agentic AI" },
      { label: "AI Infrastructure" },
      { label: "Intelligent Automation" },
      { label: "Open Standards" },
      { label: "Platform Development" },
      { label: "Enterprise Transformation" },
      { label: "Government Innovation" },
      { label: "Market Validation" },
      { label: "Innovation Programs" },
      { label: "Solution Deployment" },
      { label: "Venture Capital" },
      { label: "Angel Investors" },
      { label: "Institutional Capital" },
      { label: "Family Offices" },
      { label: "Private Equity" },
      { label: "Corporate Ventures" },
    ];
    const sphere = new window.NodeSphere(canvasRef.current, {
      freq: 5,
      radiusFrac: 0.38, cx: 0.68, cy: 0.5,
      spin: 0.0015, tilt: -0.3, fov: 2.9,
      core: { color: "#7453ff", radiusFrac: 0.46 },
      preferDir: [1, 0], boxAlign: "right",
      avoidRect: { x0: 0, y0: 0, x1: 560, y1: 9999 },
      services,
    });

    // keep callout boxes clear of the actual copy column, at any width
    const updateAvoid = () => {
      const h = hostRef.current, c = copyRef.current;
      if (!h || !c) return;
      const hr = h.getBoundingClientRect(), cr = c.getBoundingClientRect();
      sphere.o.avoidRect = {
        x0: 0,
        y0: cr.top - hr.top - 24,
        x1: cr.right - hr.left + 40,
        y1: cr.bottom - hr.top + 24,
      };
    };
    updateAvoid();
    const ro = new ResizeObserver(updateAvoid);
    ro.observe(hostRef.current);
    window.addEventListener("resize", updateAvoid);
    return () => {
      sphere.destroy();
      ro.disconnect();
      window.removeEventListener("resize", updateAvoid);
    };
  }, [isMobile]);

  const dash = (c) => [
    `repeating-linear-gradient(90deg, ${c} 0 var(--line-dash), transparent var(--line-dash) var(--line-step))`,
    `repeating-linear-gradient(90deg, ${c} 0 var(--line-dash), transparent var(--line-dash) var(--line-step))`,
    `repeating-linear-gradient(0deg, ${c} 0 var(--line-dash), transparent var(--line-dash) var(--line-step))`,
    `repeating-linear-gradient(0deg, ${c} 0 var(--line-dash), transparent var(--line-dash) var(--line-step))`,
  ].join(",");
  const secondaryStyle = {
    color: "var(--color-on-dark)",
    backgroundColor: "var(--color-surface-dark)",
    backgroundImage: dash("var(--color-on-dark)"),
    backgroundSize: "100% 1px, 100% 1px, 1px 100%, 1px 100%",
    backgroundPosition: "top, bottom, left, right",
    backgroundRepeat: "no-repeat",
  };

  return (
    <header
      ref={hostRef}
      className="nv-grid-band"
      style={{ position: "relative", overflow: "hidden", backgroundColor: "var(--color-surface-dark)" }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <window.HeroDots gap={13} />
      </div>
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: isMobile ? "none" : "block", touchAction: "none", cursor: "grab", zIndex: 1 }}
      />
      <div
        className="nv-band-inner nv-hero-inner"
        style={{ position: "relative", zIndex: 2, minHeight: "min(640px, calc(100vh - 150px))", display: "flex", alignItems: "center", pointerEvents: "none" }}
      >
        <div ref={copyRef} style={{ maxWidth: 470 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h1-weight)", fontSize: "var(--h1-size)", lineHeight: "var(--h1-line)", letterSpacing: "var(--h1-track)", color: "var(--color-on-dark)", margin: 0, textWrap: "balance" }}>
            The ecosystem powering digital innovation.
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)", color: "var(--color-on-dark-soft)", margin: "18px 0 0", maxWidth: 430 }}>
            A central hub connecting the ventures, capital, and expertise that turn ambitious ideas into reality.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, pointerEvents: "auto", flexWrap: "wrap" }}>
            <a href={(window.NV_HREF && window.NV_HREF("Start contributing")) || "#"} style={{ textDecoration: "none" }}><Button variant="primary" size="lg">Start contributing</Button></a>
            <a href={(window.NV_HREF && window.NV_HREF("Contact")) || "contact.html"} style={{ textDecoration: "none" }}><Button variant="secondary" size="lg" style={secondaryStyle}>Let's talk</Button></a>
          </div>
        </div>
        {isMobile ? (
          <img src={resolveAsset("assets/hero-sphere.png")} alt="" aria-hidden="true" className="nv-hero-mobile-img"
            style={{ display: "block", width: 140, maxWidth: "40%", height: "auto", alignSelf: "center", pointerEvents: "none" }} />
        ) : null}
      </div>
    </header>
  );
}
window.Hero = Hero;
