// QuotePanel — the editorial pull-quote layout, extracted so the homepage
// carousel (QuoteBlock) and the domain pages share ONE definition. Edit the
// quote's look here and it changes everywhere.
//
// Props:
//   quote      — string (quotation marks added automatically)
//   pic        — portrait image src (resolved through window.__resources); OR
//   portrait   — a React node to render in the portrait slot (e.g. a placeholder)
//   picAlt     — alt text for the portrait image
//   logo       — venture logo src (optional), rendered at 52px like the homepage
//   logoAlt    — alt text for the logo
//   lines      — array of attribution strings (mono caps, e.g. "Venture: …")
//   slideStyle — style applied to the animated pieces (carousel use); default {}
//   controls   — React node for the bottom-right control cluster (arrows); optional
function QuotePanel({ quote, pic, portrait, picAlt = "", logo, logoAlt = "", avatar, avatarAlt = "", lines = [], slideStyle = {}, controls = null }) {
  const resolveAsset = (p) => (window.__resources && window.__resources[p]) || p;
  const quoteStyle = {
    margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--h3-weight)",
    fontSize: "var(--h3-size)", lineHeight: 1.3, letterSpacing: "-0.5px", color: "var(--color-ink)",
  };
  return (
    <div className="nv-quote-row" style={{ display: "flex", alignItems: "stretch", gap: 48 }}>
      {/* left: rectangular portrait */}
      <div className="nv-quote-photo" style={{ flex: "0 0 300px", height: 367, overflow: "hidden" }}>
        {pic
          ? <img src={resolveAsset(pic)} alt={picAlt} style={{ ...slideStyle, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          : portrait}
      </div>
      {/* right: quote top, label bottom-left, controls bottom-right */}
      <div style={{ flex: "1 1 auto", minWidth: 0, display: "flex", flexDirection: "column" }}>
        <div style={{ ...slideStyle, overflow: "hidden" }}>
          <blockquote style={quoteStyle}>{"“" + quote + "”"}</blockquote>
        </div>
        <div className="nv-quote-foot" style={{ marginTop: "auto", paddingTop: 24, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
          <div style={{ ...slideStyle }}>
            {logo ? <img src={resolveAsset(logo)} alt={logoAlt} style={{ height: 52, width: "auto", display: "block", marginTop: 8, marginBottom: 8 }} /> : null}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {avatar ? <img src={resolveAsset(avatar)} alt={avatarAlt} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", flex: "none", display: "block" }} /> : null}
              <div>
                {lines.map((l, i) => (
                  <div key={i} className="nv-tag" style={{ color: "var(--color-body)", lineHeight: 1.5 }}>{l}</div>
                ))}
              </div>
            </div>
          </div>
          {controls ? <div style={{ flex: "0 0 auto", display: "flex" }}>{controls}</div> : null}
        </div>
      </div>
    </div>
  );
}
window.QuotePanel = QuotePanel;
