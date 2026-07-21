// SiteNav — cream-on-dark top bar, boxed wordmark, mono nav links with
// dashed dropdown panels for the sections that have children.
// Link targets come from the shared site-links registry (window.NV_HREF).
function SiteNav() {
  const { Button } = window.NodeVenturesDesignSystem_1fd7b8;
  const href = window.NV_HREF || (() => "#");

  // main items; `menu` present → dashed dropdown, else a direct link
  // NOTE (pre-launch): Contribute / Invest / Ventures temporarily removed —
  // their pages aren't built yet. Restore these entries when they ship.
  const items = [
    { label: "Domains", menu: ["Built environment", "National defence", "Community infrastructure", "Enterprise AI"] },
    { label: "Contact" },
  ];
  const [open, setOpen] = React.useState(null);
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  const [drawer, setDrawer] = React.useState(false);
  const [acc, setAcc] = React.useState(null); // which mobile accordion is open
  React.useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawer]);
  React.useEffect(() => { if (!isMobile) setDrawer(false); }, [isMobile]);

  const linkStyle = {
    fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em",
    textTransform: "uppercase", color: "var(--color-on-dark)", opacity: 0.78,
    textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6,
    background: "none", border: "none", cursor: "pointer", padding: 0, whiteSpace: "nowrap",
  };

  const caret = (up) => (
    <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true"
      style={{ transform: up ? "rotate(180deg)" : "none", transition: "transform 0.18s ease", opacity: 0.7 }}>
      <path d="M1.5 3.5 L5 7 L8.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const Hover = ({ t }) => (
    <span className="nv-link-plain"><span data-t={t}>{t}</span></span>
  );

  // ---- Mobile: wordmark + hamburger, full-screen slide-down drawer ----
  if (isMobile) {
    const barStyle = {
      position: "sticky", top: 0, zIndex: 40,
      display: "flex", alignItems: "center", height: 60, padding: "0 var(--page-pad)",
      backgroundColor: "var(--color-surface-dark)",
      backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
      backgroundSize: "100% 1px", backgroundPosition: "bottom", backgroundRepeat: "no-repeat",
    };
    return (
      <nav style={barStyle}>
        <a href={href("Home")} style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }} aria-label="Node Ventures home">
          <img src={(window.__resources && window.__resources["assets/node-wordmark.svg"]) || "assets/node-wordmark.svg"} alt="Node Ventures" style={{ height: 20, width: "auto", display: "block" }} />
        </a>
        <button type="button" aria-label={drawer ? "Close menu" : "Open menu"} aria-expanded={drawer}
          onClick={() => setDrawer((v) => !v)}
          style={{ marginLeft: "auto", width: 44, height: 44, display: "grid", placeItems: "center",
            background: "none", border: "none", cursor: "pointer", color: "var(--color-on-dark)", padding: 0 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            {drawer
              ? <React.Fragment><path d="M5 5l14 14" /><path d="M19 5L5 19" /></React.Fragment>
              : <React.Fragment><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></React.Fragment>}
          </svg>
        </button>

        <div style={{ position: "fixed", inset: "60px 0 0", zIndex: 39,
          backgroundColor: "var(--color-surface-dark)",
          transform: drawer ? "translateY(0)" : "translateY(-8px)",
          opacity: drawer ? 1 : 0, pointerEvents: drawer ? "auto" : "none",
          transition: "opacity .22s ease, transform .22s ease",
          overflowY: "auto", padding: "8px var(--page-pad) 40px" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
            {items.map((it) => (
              <li key={it.label} style={{ borderBottom: "1px dashed rgba(255,255,255,0.18)" }}>
                {it.menu ? (
                  <React.Fragment>
                    <button type="button" onClick={() => setAcc(acc === it.label ? null : it.label)}
                      style={{ ...linkStyle, opacity: 1, fontSize: 14, width: "100%", justifyContent: "space-between",
                        padding: "20px 0", cursor: "pointer" }}>
                      <span>{it.label}</span>{caret(acc === it.label)}
                    </button>
                    <div style={{ maxHeight: acc === it.label ? 400 : 0, overflow: "hidden", transition: "max-height .25s ease" }}>
                      <ul style={{ listStyle: "none", margin: 0, padding: "0 0 14px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
                        {it.menu.map((sub) => (
                          <li key={sub}><a href={href(sub)} onClick={() => setDrawer(false)}
                            style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 16,
                              color: "var(--color-on-dark-soft)", textDecoration: "none", padding: "10px 0" }}>{sub}</a></li>
                        ))}
                      </ul>
                    </div>
                  </React.Fragment>
                ) : (
                  <a href={href(it.label)} onClick={() => setDrawer(false)}
                    style={{ ...linkStyle, opacity: 1, fontSize: 14, display: "flex", padding: "20px 0" }}>{it.label}</a>
                )}
              </li>
            ))}
            <li style={{ borderBottom: "1px dashed rgba(255,255,255,0.18)" }}>
              <a href={href("Log in")} onClick={() => setDrawer(false)} style={{ ...linkStyle, opacity: 1, fontSize: 14, display: "flex", padding: "20px 0" }}>Log in</a>
            </li>
          </ul>
          <div style={{ marginTop: 28 }}>
            <a href={href("Start contributing")} style={{ textDecoration: "none", display: "block" }}><Button variant="primary" size="lg" style={{ width: "100%" }}>Start contributing</Button></a>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 30,
      display: "flex", alignItems: "center", gap: 24, height: 64, padding: "0 var(--page-pad)",
      backgroundColor: "var(--color-surface-dark)",
      backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
      backgroundSize: "100% 1px", backgroundPosition: "bottom", backgroundRepeat: "no-repeat",
    }}>
      <a href={href("Home")} style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", flex: "none" }} aria-label="Node Ventures home">
        <img src={(window.__resources && window.__resources["assets/node-wordmark.svg"]) || "assets/node-wordmark.svg"} alt="Node Ventures" style={{ height: 17.6, width: "auto", display: "block" }} />
      </a>

      <ul style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 22, listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((it) => (
          <li
            key={it.label}
            style={{ position: "relative" }}
            onMouseEnter={it.menu ? () => setOpen(it.label) : undefined}
            onMouseLeave={it.menu ? () => setOpen(null) : undefined}
          >
            <a
              href={it.menu ? "#" : href(it.label)}
              style={linkStyle}
              onClick={it.menu ? (e) => { e.preventDefault(); setOpen(open === it.label ? null : it.label); } : undefined}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.78; }}
            >
              <Hover t={it.label} />
              {it.menu ? caret(open === it.label) : null}
            </a>

            {it.menu && open === it.label ? (
              <div style={{
                position: "absolute", top: "calc(100% + 14px)", left: -16, minWidth: 220,
                backgroundColor: "var(--color-surface-dark)",
                border: "1px dashed rgba(255,255,255,0.28)",
                padding: 8, zIndex: 40,
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
              }}>
                {/* hover bridge so the gap doesn't close the menu */}
                <div style={{ position: "absolute", top: -14, left: 0, right: 0, height: 14 }} />
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
                  {it.menu.map((sub) => (
                    <li key={sub}>
                      <a href={href(sub)} style={{
                        display: "block", fontFamily: "var(--font-body)", fontSize: 14,
                        color: "var(--color-on-dark-soft)", textDecoration: "none",
                        padding: "9px 12px", letterSpacing: "-0.1px",
                      }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-on-dark)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-on-dark-soft)"; e.currentTarget.style.backgroundColor = "transparent"; }}
                      >{<Hover t={sub} />}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 20 }}>
        <a href={href("Log in")} style={linkStyle}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.78; }}
        >{<Hover t="Log in" />}</a>
        <a href={href("Start contributing")} style={{ textDecoration: "none" }}><Button variant="primary" size="sm">Start contributing</Button></a>
      </div>
    </nav>
  );
}
window.SiteNav = SiteNav;
