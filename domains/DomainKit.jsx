// DomainKit — shared primitives for the domain template pages
// (Built Environment, National Defence). No animation. Exports to window.

// Eyebrow / section label — dotted purple square + mono caps (matches homepage .nv-label)
function Eyebrow({ children, onDark }) {
  return (
    <div className="nv-label" style={onDark ? { color: "var(--color-primary-on-dark)" } : undefined}>
      {children}
    </div>
  );
}

// Section heading block: eyebrow + h2 + optional lead paragraph
function SectionHead({ eyebrow, title, lead, onDark, align = "left", maxTitle = 640, maxLead = 660 }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === "center" ? 820 : "none", margin: align === "center" ? "0 auto" : 0 }}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: "var(--h2-weight)", fontSize: "var(--h2-size)",
        lineHeight: "var(--h2-line)", letterSpacing: "var(--h2-track)", margin: eyebrow ? "16px 0 0" : 0,
        maxWidth: maxTitle, color: onDark ? "var(--color-on-dark)" : "var(--color-ink)",
        marginInline: align === "center" ? "auto" : undefined,
      }}>{title}</h2>
      {lead ? (
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)",
          color: onDark ? "var(--color-on-dark-soft)" : "var(--color-body)", margin: "16px 0 0",
          maxWidth: maxLead, marginInline: align === "center" ? "auto" : undefined,
        }}>{lead}</p>
      ) : null}
    </div>
  );
}

// Image placeholder — dashed frame + faint dot grid + mono caption. USER fills later.
function ImageBox({ label = "Image", height = 260, onDark = false, style }) {
  const line = onDark ? "rgba(250,249,245,0.28)" : "var(--color-grid-line)";
  const dot = onDark ? "rgba(250,249,245,0.10)" : "rgba(20,20,19,0.06)";
  const fill = onDark ? "var(--color-surface-dark-elevated)" : "var(--color-surface-soft)";
  return (
    <div style={{
      position: "relative", height, background: fill, border: `1px dashed ${line}`,
      display: "grid", placeItems: "center", overflow: "hidden", ...style,
    }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(${dot} 0.9px, transparent 1.3px)`, backgroundSize: "13px 13px",
      }}></div>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
          stroke={onDark ? "rgba(250,249,245,0.5)" : "var(--color-muted-soft)"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="0" /><circle cx="9" cy="10" r="2" /><path d="M3 17l5-4 4 3 3-2 6 5" />
        </svg>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
          color: onDark ? "rgba(250,249,245,0.55)" : "var(--color-muted-soft)" }}>{label}</span>
      </div>
    </div>
  );
}

// GridFrame — full-bleed horizontal rules + vertical rules (edges + interior
// dividers) + inverted-triangle nodes, wrapping a CSS grid of `cols` columns.
// Mirrors the homepage FocusAreas/Closing node-grid motif exactly.
function GridFrame({ cols = 2, onDark = false, className, children }) {
  const LINE = onDark ? "var(--color-grid-line-dark)" : "var(--color-grid-line)";
  const NW = 5, NH = 7;
  const positions = [];
  for (let i = 0; i <= cols; i++) positions.push((i / cols) * 100);
  const TopNode = ({ left }) => (
    <svg aria-hidden="true" width={NW * 2} height={NH} viewBox={`0 0 ${NW * 2} ${NH}`}
      style={{ position: "absolute", left: `${left}%`, top: 0, transform: "translateX(-50%)", pointerEvents: "none", zIndex: 2, overflow: "visible" }}>
      <path d={`M 0 0 L ${NW} ${NH} L ${NW * 2} 0 Z`} fill={LINE} />
    </svg>
  );
  const BottomNode = ({ left }) => (
    <svg aria-hidden="true" width={NW * 2} height={NH} viewBox={`0 0 ${NW * 2} ${NH}`}
      style={{ position: "absolute", left: `${left}%`, bottom: 0, transform: "translateX(-50%)", pointerEvents: "none", zIndex: 2, overflow: "visible" }}>
      <path d={`M 0 ${NH} L ${NW} 0 L ${NW * 2} ${NH} Z`} fill={LINE} />
    </svg>
  );
  return (
    <div className={className} style={{ position: "relative" }}>
      <div className="nv-gridlines">
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100vw", height: 1, background: LINE, pointerEvents: "none" }}></div>
        <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100vw", height: 1, background: LINE, pointerEvents: "none" }}></div>
        {positions.map((p, idx) => (
          <div key={idx} aria-hidden="true" style={{
            position: "absolute", top: NH, bottom: NH,
            left: `${p}%`, transform: idx === 0 ? "none" : idx === positions.length - 1 ? "translateX(-1px)" : "translateX(-0.5px)",
            width: 1, background: LINE, pointerEvents: "none",
          }}></div>
        ))}
        {positions.map((p, idx) => <TopNode key={"t" + idx} left={p} />)}
        {positions.map((p, idx) => <BottomNode key={"b" + idx} left={p} />)}
      </div>
      <div className="nv-2col nv-focus-boxes" style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 0 }}>
        {children}
      </div>
    </div>
  );
}

// A single cell inside a GridFrame
function GridCell({ children, minHeight = 0, pad = 40, style }) {
  return (
    <div style={{ position: "relative", padding: pad, minHeight, display: "flex", flexDirection: "column", ...style }}>
      {children}
    </div>
  );
}

// ProcessFlow — a vertical chain of numbered node-circles connected by a
// dashed rule, matching the Node dot/line motif. Each step: circle + label.
// The final step is emphasized (filled primary). Reusable across pages.
function ProcessFlow({ steps = [] }) {
  return (
    <div className="nv-flow" role="list">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <div className="nv-flow-step" role="listitem" key={s}>
            <div className="nv-flow-node" aria-hidden="true">
              <span className="nv-flow-circle" style={last ? {
                background: "var(--color-primary)", borderColor: "var(--color-primary)", color: "var(--color-on-dark)",
              } : undefined}>{String(i + 1).padStart(2, "0")}</span>
              {!last ? <span className="nv-flow-line"></span> : null}
            </div>
            <div className="nv-flow-label" style={{
              fontFamily: "var(--font-display)", fontWeight: last ? "var(--h4-weight)" : 400,
              fontSize: last ? 26 : 22, letterSpacing: "var(--h4-track)",
              color: last ? "var(--color-ink)" : "var(--color-body)",
            }}>{s}</div>
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, { Eyebrow, SectionHead, ImageBox, GridFrame, GridCell, ProcessFlow });
