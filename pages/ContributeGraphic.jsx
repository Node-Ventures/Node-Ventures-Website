// ContributeGraphic — static node network for the Contribute card.
// Center purple "N" hub with colored outer dots at varied distances, each
// joined to the hub by a thin solid line. A small colored dot travels inward
// along each line into the N, then returns to normal.
function ContributeGraphic() {
  const N = 12;
  const C = 200, HUB = 22;
  const A = (i) => (-90 + i * (360 / N)) * (Math.PI / 180);

  const purple = "#7453ff", line = "rgba(20,20,19,0.13)", dashCol = "#141413";
  const SEL = 1; // purple-filled node, upper right
  const palette = ["#7453ff", "#c2922e", "#141413"]; // purple, umber, ink
  const DUR = 11, PER = 6; // cycle (s), travelling dots per line
  const RING = 82; // outer ring radius

  // Deterministic-ish per-spoke setup: color, random radius, random launch order.
  const spokes = Array.from({ length: N }).map((_, i) => {
    const r = RING;
    const ux = Math.cos(A(i)), uy = Math.sin(A(i));
    const dotP = { x: C + r * ux, y: C + r * uy };
    const edgeP = { x: C + HUB * ux, y: C + HUB * uy };
    return { i, color: palette[i % palette.length], dotP, edgeP,
      tx: edgeP.x - dotP.x, ty: edgeP.y - dotP.y };
  });
  const order = spokes.map((s) => s.i);
  for (let k = order.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [order[k], order[j]] = [order[j], order[k]]; }
  spokes.forEach((s) => { s.delay = (order.indexOf(s.i) / N) * DUR; });

  const keyframes = spokes.map((s) =>
    `@keyframes nvTravel${s.i}{0%{transform:translate(0,0);opacity:0}6%{opacity:1}55%{transform:translate(${s.tx}px,${s.ty}px);opacity:1}56%{transform:translate(${s.tx}px,${s.ty}px);opacity:0}100%{transform:translate(${s.tx}px,${s.ty}px);opacity:0}}`
  ).join("");

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "400 / 228", overflow: "hidden" }}>
      <style>{keyframes}</style>
      <svg viewBox="0 75 400 228" width="100%" height="100%" style={{ display: "block" }}>
        {/* thin solid connecting lines */}
        {spokes.map((s) => (
          <line key={"l" + s.i} x1={s.edgeP.x} y1={s.edgeP.y} x2={s.dotP.x} y2={s.dotP.y}
            stroke={line} strokeWidth="0.8" />
        ))}
        {/* small colored dots travelling inward along each line, loosely paced */}
        {spokes.map((s) => (
          Array.from({ length: PER }).map((_, k) => (
            <circle key={"t" + s.i + "-" + k} cx={s.dotP.x} cy={s.dotP.y} r="1.8" fill={s.color}
              style={{ animation: `nvTravel${s.i} ${DUR}s linear infinite`, animationDelay: `${-((k + Math.random() * 0.7) * (DUR / PER))}s` }} />
          ))
        ))}
        {/* outer dots — dashed outline, cream fill */}
        {spokes.map((s) => (
          <circle key={"d" + s.i} cx={s.dotP.x} cy={s.dotP.y} r="7" fill="#F9FAF7"
            stroke="rgba(0,0,0,0.42)" strokeWidth="1" strokeDasharray="2 1" />
        ))}
        {/* hub */}
        <circle cx={C} cy={C} r={HUB} fill={purple} />
        <text x={C} y={C + 1} textAnchor="middle" dominantBaseline="central"
          fill="#fff" fontFamily="var(--font-display)" fontSize="24" fontWeight="500">N</text>
      </svg>
    </div>
  );
}

// InvestGraphic — animated bar chart for the Invest card. A dashed grid
// (radially masked so it's solid in the center and fades at the top/sides)
// sits behind three solid bars that rise from the baseline in sequence,
// hold, then collapse, looping forever.
function InvestGraphic() {
  const purple = "#7453ff", umber = "#c2922e", ink = "#141413";
  const gridColor = "rgba(20,20,19,0.22)";
  const baseY = 283, topY = 125, x0 = 97, x1 = 277;
  const cx = (x0 + x1) / 2;

  const rows = [];
  for (let y = baseY - 18; y >= topY; y -= 18) rows.push(y);
  const topRow = rows[rows.length - 1];

  const cols = [];
  for (let x = x0; x <= x1; x += 18) cols.push(x);

  const bars = [
    { x: 151, h: 42, color: ink, delay: 0 },
    { x: 187, h: 74, color: umber, delay: 0.8 },
    { x: 223, h: 108, color: purple, delay: 1.6 },
  ];

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "400 / 228", overflow: "hidden" }}>
      <style>{`
        @keyframes nvBarRise {
          0% { transform: scaleY(0); }
          16% { transform: scaleY(1); }
          84% { transform: scaleY(1); }
          100% { transform: scaleY(0); }
        }
      `}</style>
      <svg viewBox="0 75 400 228" width="100%" height="100%" style={{ display: "block" }}>
        <defs>
          <radialGradient id="investGridFade" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1"
            gradientTransform={`translate(${cx} ${baseY}) scale(112 150)`}>
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset="0.55" stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="investGridMask" maskUnits="userSpaceOnUse" x="0" y="75" width="400" height="228">
            <rect x="0" y="75" width="400" height="228" fill="url(#investGridFade)" />
          </mask>
        </defs>

        {/* dashed grid, radially masked */}
        <g mask="url(#investGridMask)">
          {rows.map((y) => (
            <line key={"row" + y} x1={x0} y1={y} x2={x1} y2={y}
              stroke={gridColor} strokeWidth="0.8" strokeDasharray="2 1" />
          ))}
          {cols.map((x) => (
            <line key={"col" + x} x1={x} y1={baseY} x2={x} y2={topRow}
              stroke={gridColor} strokeWidth="0.8" strokeDasharray="2 1" />
          ))}
        </g>

        {/* crisp baseline, kept outside the mask */}
        <line x1={x0} y1={baseY} x2={x1} y2={baseY}
          stroke={gridColor} strokeWidth="0.8" strokeDasharray="2 1" />

        {/* three bars, rising in sequence */}
        {bars.map((b) => (
          <rect key={b.x} x={b.x - 6.5} y={baseY - b.h} width="13" height={b.h} fill={b.color}
            style={{
              transformBox: "fill-box",
              transformOrigin: "bottom",
              animation: "nvBarRise 7s cubic-bezier(0.4,0,0.2,1) infinite",
              animationDelay: `${b.delay}s`,
            }} />
        ))}
      </svg>
    </div>
  );
}
Object.assign(window, { ContributeGraphic, InvestGraphic });
