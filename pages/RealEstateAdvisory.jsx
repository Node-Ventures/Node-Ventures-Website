// RealEstateAdvisory — hero (text left / 3-tile notched image grid right,
// stacked tags) → lede (small heading + two offset paragraphs) → "Your
// advantage" alternating rows → dark Venn section → 2×2 service cards +
// 2×2 service breakdown → closing CTA.
// Built from the same shared kit as thecollective.html (DomainKit, site-ui.css,
// SiteNav, SiteFooter). Page-only styles live in real-estate-advisory.css.
function RealEstateAdvisory() {
  const { Button } = window.NodeVenturesDesignSystem_1fd7b8;
  const { SectionHead, GridFrame, GridCell } = window;
  const href = window.NV_HREF || (() => "#");
  const resolveAsset = (p) => (window.__resources && window.__resources[p]) || p;
  const IMG = "photos/real-estate-advisory/";

  // ---- shared text styles (tokens only — same objects as ContributorPlatform) ----
  const para = { fontFamily: "var(--font-body)", fontSize: "var(--body-size)", lineHeight: 1.6, color: "var(--color-body)", margin: 0, textWrap: "pretty" };
  const bodyLg = { fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)", color: "var(--color-body)", margin: 0, textWrap: "pretty" };
  const h2 = { fontFamily: "var(--font-display)", fontWeight: "var(--h2-weight)", fontSize: "var(--h2-size)", lineHeight: "var(--h2-line)", letterSpacing: "var(--h2-track)", color: "var(--color-ink)", margin: 0 };
  const h3 = { fontFamily: "var(--font-display)", fontWeight: "var(--h3-weight)", fontSize: "var(--h3-size)", lineHeight: "var(--h3-line)", letterSpacing: "var(--h3-track)", color: "var(--color-ink)", margin: 0 };
  const h4 = { fontFamily: "var(--font-display)", fontWeight: "var(--h4-weight)", fontSize: "var(--h4-size)", lineHeight: "var(--h4-line)", letterSpacing: "var(--h4-track)", color: "var(--color-ink)", margin: 0 };
  const kicker = { fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-primary)" };
  const btnLink = { textDecoration: "none" };

  // ---- content ----
  const rows = [
    {
      k: "Property intelligence",
      h: "See more than the market can tell you.",
      body: ["Market conditions are only one part of the story. Node brings property, planning and land-use intelligence into the advisory process. That helps us uncover constraints, opportunities and relationships that may not be obvious from a traditional market review alone."],
      img: "row-property-intelligence.webp", pos: "40% center",
      alt: "A planner reviewing a property and flood-risk map on a desktop screen",
    },
    {
      k: "Independent advice",
      h: "Recommendations should work for you, not for us.",
      body: [
        "A broker may focus on a transaction. A planner on approvals. A developer on what can be built.",
        "We don’t take sides. We compare the options on their own merits and recommend what makes the strongest case for the owner.",
      ],
      img: "row-independent-advice.webp", pos: "45% 40%",
      alt: "Two colleagues in conversation across a desk in a bright office",
      flip: true,
    },
    {
      k: "Years of expertise",
      h: "Data reveals opportunity. But experience tells us what it means.",
      body: ["Planning, development, finance and market conditions are all connected. Our team brings years of experience across these disciplines to understand what the data means for the asset."],
      img: "row-years-of-experience.webp", pos: "55% 50%",
      alt: "A person reviewing zoning and transportation map layers on a laptop",
    },
  ];

  const services = [
    {
      n: "01 — Owner Advisor",
      h: "Understand what you own, and what it could be doing for you.",
      b: "We help owners take a broader look at an existing property, from how it performs today to where additional value or optionality may exist.",
      q: ["Is the property performing as well as it should?", "Where could income, operations or value be improved?", "Is there unrealized potential in the land or building?", "Should you hold, improve, refinance, reposition or sell?"],
      img: "service-owner-advisory.webp", pos: "center 55%", alt: "A row of modern brick townhouses at dusk",
    },
    {
      n: "02 — Investment & Development",
      h: "Assess the full opportunity before you commit to it.",
      b: "We help investors and developers assess acquisitions, development potential and repositioning opportunities before moving forward.",
      q: ["Is the property worth acquiring?", "What could the site or building become?", "Does the proposed strategy make economic sense?", "Have market or planning conditions changed anything?"],
      img: "service-investment-development.webp", pos: "center 60%", alt: "New mid-rise apartment buildings around a landscaped courtyard path",
    },
    {
      n: "03 — Portfolio Advisory",
      h: "Know where your attention and capital can have the greatest impact.",
      b: "We help owners and organizations compare assets, identify priorities and uncover opportunities across the portfolio.",
      q: ["Which assets need attention first?", "Where could capital create the most value?", "Which properties are underperforming or carrying risk?", "Where should you hold, improve, refinance or reposition?"],
      img: "service-portfolio-advisory.webp", pos: "center 50%", alt: "Looking straight down on a dense city of high-rise buildings at dusk",
    },
    {
      n: "04 — Market Research",
      h: "Put the property in the context of the market around it.",
      b: "We examine demand, competition, rents and location to test the market assumptions behind a property or strategy.",
      q: ["What does the market currently support?", "How strong is demand for the proposed use?", "How does the asset compare with the competition?", "What market factors should shape the strategy?"],
      img: "service-market-research.webp", pos: "52% 45%", alt: "Two people reviewing a market benchmark report on a laptop",
    },
  ];

  const breakdown = [
    { h: "Owner Advisory", items: ["Property Screening", "Property Potential Analysis", "Investment & Hold/Sell Analysis", "Refinancing & Restructuring Review", "Property Financial Health Review", "Lease & Rent Roll Analysis", "Income & Expense Optimization", "Asset Management Planning & Advisory"] },
    { h: "Investment & Development", items: ["Development Feasibility Study", "Zoning Confirmation Support", "Adaptive Reuse & Conversion Study", "Highest & Best Use Analysis", "Construction Budget Review", "Project Recovery Analysis", "Acquisition Underwriting & Due Diligence", "Commercial Transaction Support for Agents"] },
    { h: "Portfolio Advisory", items: ["Portfolio Baseline Review", "Portfolio Performance Review", "Portfolio Optimization Strategy", "Capital Allocation & Prioritization", "Independent Portfolio Review", "Portfolio Monitoring & Change Review"] },
    { h: "Market Research", items: ["Property & Business Market Study", "Location Suitability Study", "Rent & Leasing Study", "Demand & Competitive Analysis", "Market Entry & Expansion Analysis"] },
  ];

  const Img = ({ src, alt, pos }) => (
    <img src={resolveAsset(IMG + src)} alt={alt} loading="lazy" decoding="async" style={pos ? { objectPosition: pos } : undefined} />
  );

  return (
    <div id="nv-page">
      <window.SiteNav />

      {/* ===== 1 · HERO ===== */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: 96, paddingBottom: 88 }}>
        <div className="nv-band-inner" style={{ position: "relative", zIndex: 2 }}>
          <div aria-hidden="true" className="nv-cp-hero-lower-dots"></div>
          <div className="nv-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="nv-label">REAL ESTATE ADVISORY</div>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h1-weight)", fontSize: "var(--h1-size)", lineHeight: "var(--h1-line)", letterSpacing: "var(--h1-track)", color: "var(--color-ink)", margin: "18px 0 0", maxWidth: "9.5em" }}>
                Understand the asset. Then decide what to do with it.
              </h1>
              <p style={{ ...bodyLg, marginTop: 22, maxWidth: 440 }}>
                Node Ventures helps property owners, investors and organizations understand what an asset is capable of, identify opportunities to protect and create value, and determine what to do next.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
                <a href={href("Contact")} style={btnLink}><Button variant="primary" size="lg">Talk to an advisor</Button></a>
              </div>
            </div>
            <div className="nv-ra-hero-media">
              <div className="nv-cp-hero-grid">
                <div className="nv-notch-tl nv-ra-ph" style={{ gridColumn: 1, gridRow: 1 }}>
                  <img src={resolveAsset(IMG + "hero-office-building.webp")} alt="A dark-framed mid-rise office building on a city street corner in autumn" fetchpriority="high" style={{ objectPosition: "45% center" }} />
                </div>
                <div className="nv-ra-ph" style={{ gridColumn: 1, gridRow: 2 }}>
                  <img src={resolveAsset(IMG + "hero-lakeshore-aerial.webp")} alt="Aerial view of a house among trees on a lakeshore" style={{ objectPosition: "60% 42%" }} />
                </div>
                <div className="nv-notch-br nv-ra-ph" style={{ gridColumn: 2, gridRow: "1 / span 2" }}>
                  <img src={resolveAsset(IMG + "hero-advisor.webp")} alt="An advisor in a navy blazer explaining something to a client in a bright office" fetchpriority="high" style={{ objectPosition: "52% center" }} />
                </div>
              </div>
              <ul className="nv-ra-tags">
                <li className="nv-ra-tag">Independent advice</li>
                <li className="nv-ra-tag">Proprietary intelligence</li>
                <li className="nv-ra-tag">Experienced judgment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2 · LEDE ===== */}
      <section className="nv-ra-lede-sec" style={{ position: "relative", zIndex: 2, paddingTop: 48, paddingBottom: 104 }}>
        <div className="nv-band-inner" style={{ position: "relative", zIndex: 1 }}>
          <div className="nv-ra-intro">
            <h2 className="nv-ra-intro-h" style={h3}>Our advice starts with the asset, not the outcome.</h2>
            <p className="nv-ra-intro-p" style={bodyLg}>
              A property can be held, improved, refinanced, repositioned, developed, partnered, acquired or sold. The right answer depends on the asset, the market, the owner’s objectives and the economics behind each option. What makes Node different is that our advisory work never pushes one particular outcome.
            </p>
            <p className="nv-ra-intro-p" style={bodyLg}>
              We won’t recommend a sale because we want to make the transaction, or push a development strategy because we want to advance the project. Our role is to look across the possibilities, challenge the assumptions behind them and determine which direction creates the strongest case for the owner.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 3 · YOUR ADVANTAGE — alternating rows ===== */}
      <section className="nv-ra-adv-sec" style={{ position: "relative", zIndex: 2, paddingTop: 40, paddingBottom: 120 }}>
        <div className="nv-band-inner">
          <SectionHead
            align="center"
            eyebrow="YOUR ADVANTAGE"
            title="What makes our real estate advisory services unique."
            lead="Node combines property intelligence, independent perspective and multidisciplinary real estate experience. Together, they allow us to examine an asset from broader angles, challenge the obvious answer and build a stronger case for what should happen next."
            maxTitle={700} maxLead={720}
          />
          <div className="nv-ra-rows">
            {rows.map((r) => (
              <div className={"nv-ra-row" + (r.flip ? " nv-ra-row--flip" : "")} key={r.k}>
                <div className="nv-ra-img nv-ra-ph"><Img src={r.img} alt={r.alt} pos={r.pos} /></div>
                <div className="nv-ra-text">
                  <div style={kicker}>{r.k}</div>
                  <h3 style={{ ...h3, marginTop: 14 }}>{r.h}</h3>
                  <div className="nv-ra-copy">
                    {r.body.map((t, i) => <p key={i} style={{ ...para, marginTop: i === 0 ? 16 : 0 }}>{t}</p>)}
                  </div>
                  <a href={href("Contact")} style={{ ...btnLink, marginTop: 28 }}><Button variant="primary">Talk to an advisor</Button></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4 · BETTER ASSET STRATEGY — Venn (dark) ===== */}
      <section className="nv-dark" style={{ position: "relative", zIndex: 2, background: "var(--color-surface-dark)", color: "var(--color-on-dark)", paddingTop: 104, paddingBottom: 104 }}>
        <div className="nv-band-inner" style={{ position: "relative", zIndex: 1 }}>
          <div className="nv-ra-venn-wrap">
            <div className="nv-ra-venn-copy">
              <div>
                <div className="nv-label" style={{ color: "var(--color-primary-on-dark)" }}>BETTER ASSET STRATEGY</div>
                <h2 style={{ ...h2, marginTop: 16, color: "var(--color-on-dark)", maxWidth: 479 }}>Three strengths combined to give you clearer direction.</h2>
                <p style={{ ...bodyLg, marginTop: 20, maxWidth: 460, color: "var(--color-on-dark-soft)" }}>
                  We combine deeper property intelligence, independent advice and expertise across disciplines to evaluate the asset as a whole.
                </p>
              </div>
              <div><a href={href("Contact")} style={btnLink}><Button variant="primary">Talk to an advisor</Button></a></div>
            </div>
            <VennDiagram />
          </div>
        </div>
      </section>

      {/* ===== 5 · SERVICES + BREAKDOWN ===== */}
      <section className="nv-grid-band" style={{ position: "relative", zIndex: 2, paddingTop: 104, paddingBottom: 104 }}>
        <div className="nv-band-inner">
          <div className="nv-label">OUR CAPABILITIES</div>
          <h2 style={{ ...h2, marginTop: 16, maxWidth: "14em" }}>Real estate advisory services.</h2>
          <p style={{ ...bodyLg, marginTop: 20, maxWidth: 760 }}>
            One asset can raise questions about performance, development, investment, financing and the market at the same time. But the objective remains the same: understand the asset, identify where value can be protected or created, and determine what deserves to happen next.
          </p>
          <div style={{ marginTop: 48 }}>
            <GridFrame cols={2} className="nv-swipe nv-ra-grid2">
              {services.map((s) => (
                <GridCell key={s.n} pad={40}>
                  <div className="nv-ra-card-img nv-ra-ph"><Img src={s.img} alt={s.alt} pos={s.pos} /></div>
                  <div style={kicker}>{s.n}</div>
                  <h3 style={{ ...h4, marginTop: 14, maxWidth: "20em" }}>{s.h}</h3>
                  <p style={{ ...para, marginTop: 14 }}>{s.b}</p>
                  <div style={{ marginTop: 24, fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "var(--color-ink)" }}>We help you explore:</div>
                  <ul className="nv-ra-list">{s.q.map((q) => <li key={q}>{q}</li>)}</ul>
                </GridCell>
              ))}
            </GridFrame>
          </div>

          <div className="nv-ra-caps">
            <div className="nv-2col" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "end" }}>
              <div>
                <div className="nv-label">SERVICE BREAKDOWN</div>
                <h2 style={{ ...h2, marginTop: 16, maxWidth: "14em" }}>Advisory capabilities across the asset.</h2>
              </div>
              <p style={{ ...para, maxWidth: 620 }}>
                Every engagement is shaped around the property and the question at hand. We offer a range of services across ownership, investment, development, portfolio strategy and market research.
              </p>
            </div>
            <div style={{ marginTop: 24 }}>
              <GridFrame cols={2} className="nv-swipe nv-ra-grid2">
                {breakdown.map((g) => (
                  <GridCell key={g.h} pad={40}>
                    <div className="nv-ra-tgroup">
                      <h3 style={h4}>{g.h}</h3>
                      <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
                    </div>
                  </GridCell>
                ))}
              </GridFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6 · CLOSING CTA (DARK, ONE BOX) ===== */}
      <section className="nv-grid-band" style={{ paddingTop: 0, paddingBottom: 0, background: "var(--color-surface-dark)", color: "var(--color-on-dark)" }}>
        <div className="nv-band-inner">
          <GridFrame cols={1} onDark className="nv-cta">
            <GridCell pad={56} minHeight={320} style={{ justifyContent: "center" }}>
              <div style={{ maxWidth: 720 }}>
                <h2 style={{ ...h2, color: "var(--color-on-dark)", maxWidth: 680 }}>You don’t need to know which analysis you need.</h2>
                <p style={{ ...bodyLg, color: "var(--color-on-dark-soft)", marginTop: 18, maxWidth: 620 }}>
                  You only need to know the decision you’re trying to make. Tell us about the property, portfolio or opportunity. We’ll start there.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
                  <a href={href("Contact")} style={btnLink}><Button variant="primary" size="lg">Start a conversation</Button></a>
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

// Venn diagram — three circles slide together when scrolled into view,
// then the titles, icons and centre label fade in. Hover lightens a circle.
// Same geometry as the approved design (viewBox 152 79 496 474).
function VennDiagram() {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries[0] && entries[0].isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const t = (x, y) => ({ transform: inView ? "translate(0px, 0px)" : `translate(${x}px, ${y}px)` });
  const fade = { opacity: inView ? 1 : 0 };
  // icon paths (Phosphor "light" outline set, 256×256 grid)
  const HEAD = "M190.37,170.62A86.27,86.27,0,0,0,222,102c-1-44.68-36.76-81.51-81.34-83.86A86,86,0,0,0,50,102.51l-22.690,43.6c-.07.13-.13.26-.19.4a14,14,0,0,0,6.61,18l.18.09,24.08,11V208a14,14,0,0,0,14,14h48a6,6,0,0,0,0-12H72a2,2,0,0,1-2-2V171.81a6,6,0,0,0-3.5-5.46L39,153.78a2,2,0,0,1-.93-2.4l23.21-44.61A6,6,0,0,0,62,104a74.05,74.050,0,0,1,60-72.68V50.84a22,22,0,1,0,12,0V30.05c2-.05,4-.05,6,.06A74.29,74.29,0,0,1,206.63,82H184a6,6,0,0,0-4.61,2.16L152.94,115.9a22.06,22.06,0,1,0,9.21,7.69L186.81,94h22.5a72.44,72.44,0,0,1,.67,8.26A74.24,74.24,0,0,1,180.4,163.2a6,6,0,0,0-2.35,5.54l8,64A6,6,0,0,0,192,238a6.3,6.3,0,0,0,.75-.05,6,6,0,0,0,5.21-6.7ZM138,72a10,10,0,1,1-10-10A10,10,0,0,1,138,72Zm6,74a10,10,0,1,1,10-10A10,10,0,0,1,144,146Z";
  const CHAT = "M216,82H182V48a14,14,0,0,0-14-14H40A14,14,0,0,0,26,48V176a6,6,0,0,0,3.42,5.41A5.86,5.86,0,0,0,32,182a6,6,0,0,0,3.77-1.33L73.71,150H74v34a14,14,0,0,0,14,14h94.29l37.94,30.67A6,6,0,0,0,224,230a5.86,5.86,0,0,0,2.58-.59A6,6,0,0,0,230,224V96A14,14,0,0,0,216,82ZM71.58,138a6,6,0,0,0-3.77,1.33L38,163.43V48a2,2,0,0,1,2-2H168a2,2,0,0,1,2,2v88a2,2,0,0,1-2,2ZM218,211.43l-29.810-24.1a6,6,0,0,0-3.770-1.33H88a2,2,0,0,1-2-2V150h82a14,14,0,0,0,14-14V94h34a2,2,0,0,1,2,2Z";
  const TROPHY = "M232,66H206V48a6,6,0,0,0-6-6H56a6,6,0,0,0-6,6V66H24A14,14,0,0,0,10,80V96a38,38,0,0,0,38,38h5.14A78,78,0,0,0,122,189.75V218H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V189.75c32.44-2.52,59.43-25.3,68.62-55.75H208a38,38,0,0,0,38-38V80A14,14,0,0,0,232,66ZM48,122A26,26,0,0,1,22,96V80a2,2,0,0,1,2-2H50v34a80.87,80.87,0,0,0,.65,10Zm146-10.9c0,36.62-29.38,66.63-65.5,66.9A66,66,0,0,1,62,112V54H194ZM234,96a26,26,0,0,1-26,26h-2.77a78.45,78.45,0,0,0,.77-10.9V78h26a2,2,0,0,1,2,2Z";
  const S = 0.109375; // 28px icon on the 256 grid
  return (
    <div className="nv-ra-venn" ref={ref}>
      <svg viewBox="152 79 496 474" role="img" aria-label="Venn diagram: property intelligence, independent advice and years of experience combine into better asset strategy">
        <g className="nv-ra-venn-move" style={t(0, -70)}><circle className="nv-ra-venn-c" cx="400" cy="242" r="160" /></g>
        <g className="nv-ra-venn-move" style={t(-62, 36)}><circle className="nv-ra-venn-c" cx="315" cy="389" r="160" /></g>
        <g className="nv-ra-venn-move" style={t(62, 36)}><circle className="nv-ra-venn-c" cx="485" cy="389" r="160" /></g>
        <g className="nv-ra-venn-fade" style={fade}>
          <path className="nv-ra-venn-i" transform={`translate(386 106) scale(${S})`} d={HEAD} />
          <text x="400" y="162" textAnchor="middle" className="nv-ra-venn-t">Property</text>
          <text x="400" y="186" textAnchor="middle" className="nv-ra-venn-t">intelligence</text>
          <path className="nv-ra-venn-i" transform={`translate(234 382) scale(${S})`} d={CHAT} />
          <text x="248" y="438" textAnchor="middle" className="nv-ra-venn-t">Independent</text>
          <text x="248" y="462" textAnchor="middle" className="nv-ra-venn-t">advice</text>
          <path className="nv-ra-venn-i" transform={`translate(538 382) scale(${S})`} d={TROPHY} />
          <text x="552" y="438" textAnchor="middle" className="nv-ra-venn-t">Years of</text>
          <text x="552" y="462" textAnchor="middle" className="nv-ra-venn-t">experience</text>
        </g>
        <g className="nv-ra-venn-fade" style={fade}>
          <text x="400" y="323" textAnchor="middle" className="nv-ra-venn-m">Better</text>
          <text x="400" y="343" textAnchor="middle" className="nv-ra-venn-m">asset</text>
          <text x="400" y="363" textAnchor="middle" className="nv-ra-venn-m">strategy</text>
        </g>
      </svg>
    </div>
  );
}

window.RealEstateAdvisory = RealEstateAdvisory;
