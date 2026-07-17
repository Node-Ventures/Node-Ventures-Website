// ContributeGraphic — static node network for the Contribute card.
// Center purple "N" hub with colored outer dots at varied distances, each
// joined to the hub by a thin solid line. A small colored dot travels inward
// along each line into the N, then returns to normal.
function ContributeGraphic() {
  const N = 12;
  const C = 200,
    HUB = 22;
  const A = i => (-90 + i * (360 / N)) * (Math.PI / 180);
  const purple = "#7453ff",
    line = "rgba(20,20,19,0.13)",
    dashCol = "#141413";
  const SEL = 1; // purple-filled node, upper right
  const palette = ["#7453ff", "#c2922e", "#141413"]; // purple, umber, ink
  const DUR = 11,
    PER = 6; // cycle (s), travelling dots per line
  const RING = 82; // outer ring radius

  // Deterministic-ish per-spoke setup: color, random radius, random launch order.
  const spokes = Array.from({
    length: N
  }).map((_, i) => {
    const r = RING;
    const ux = Math.cos(A(i)),
      uy = Math.sin(A(i));
    const dotP = {
      x: C + r * ux,
      y: C + r * uy
    };
    const edgeP = {
      x: C + HUB * ux,
      y: C + HUB * uy
    };
    return {
      i,
      color: palette[i % palette.length],
      dotP,
      edgeP,
      tx: edgeP.x - dotP.x,
      ty: edgeP.y - dotP.y
    };
  });
  const order = spokes.map(s => s.i);
  for (let k = order.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [order[k], order[j]] = [order[j], order[k]];
  }
  spokes.forEach(s => {
    s.delay = order.indexOf(s.i) / N * DUR;
  });
  const keyframes = spokes.map(s => `@keyframes nvTravel${s.i}{0%{transform:translate(0,0);opacity:0}6%{opacity:1}55%{transform:translate(${s.tx}px,${s.ty}px);opacity:1}56%{transform:translate(${s.tx}px,${s.ty}px);opacity:0}100%{transform:translate(${s.tx}px,${s.ty}px);opacity:0}}`).join("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "400 / 228",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, keyframes), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 75 400 228",
    width: "100%",
    height: "100%",
    style: {
      display: "block"
    }
  }, spokes.map(s => /*#__PURE__*/React.createElement("line", {
    key: "l" + s.i,
    x1: s.edgeP.x,
    y1: s.edgeP.y,
    x2: s.dotP.x,
    y2: s.dotP.y,
    stroke: line,
    strokeWidth: "0.8"
  })), spokes.map(s => Array.from({
    length: PER
  }).map((_, k) => /*#__PURE__*/React.createElement("circle", {
    key: "t" + s.i + "-" + k,
    cx: s.dotP.x,
    cy: s.dotP.y,
    r: "1.8",
    fill: s.color,
    style: {
      animation: `nvTravel${s.i} ${DUR}s linear infinite`,
      animationDelay: `${-((k + Math.random() * 0.7) * (DUR / PER))}s`
    }
  }))), spokes.map(s => /*#__PURE__*/React.createElement("circle", {
    key: "d" + s.i,
    cx: s.dotP.x,
    cy: s.dotP.y,
    r: "7",
    fill: "#F9FAF7",
    stroke: "rgba(0,0,0,0.42)",
    strokeWidth: "1",
    strokeDasharray: "2 1"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: C,
    cy: C,
    r: HUB,
    fill: purple
  }), /*#__PURE__*/React.createElement("text", {
    x: C,
    y: C + 1,
    textAnchor: "middle",
    dominantBaseline: "central",
    fill: "#fff",
    fontFamily: "var(--font-display)",
    fontSize: "24",
    fontWeight: "500"
  }, "N")));
}

// InvestGraphic — NOTE: the source project references <InvestGraphic /> in
// Platform.jsx but ships no definition for it (only ContributeGraphic exists in
// pages/). This on-brand placeholder keeps the homepage from crashing: an
// ascending dashed-outline bar chart with the purple "N" hub, matching the
// Contribute card's container conventions (aspectRatio 400/228, same palette).
function InvestGraphic() {
  const C = 200,
    HUB = 22;
  const purple = "#7453ff";
  const line = "rgba(20,20,19,0.13)";
  // ascending bars beneath a rising trend line
  const bars = [{
    x: 96,
    h: 34
  }, {
    x: 132,
    h: 54
  }, {
    x: 168,
    h: 72
  }, {
    x: 204,
    h: 96
  }, {
    x: 240,
    h: 120
  }, {
    x: 276,
    h: 150
  }];
  const baseY = 262;
  const trend = bars.map(b => `${b.x + 14},${baseY - b.h - 10}`).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "400 / 228",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 75 400 228",
    width: "100%",
    height: "100%",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "80",
    y1: baseY,
    x2: "320",
    y2: baseY,
    stroke: line,
    strokeWidth: "0.8"
  }), bars.map((b, i) => /*#__PURE__*/React.createElement("rect", {
    key: "b" + i,
    x: b.x,
    y: baseY - b.h,
    width: "28",
    height: b.h,
    fill: i === bars.length - 1 ? purple : "#F9FAF7",
    stroke: i === bars.length - 1 ? purple : "rgba(0,0,0,0.42)",
    strokeWidth: "1",
    strokeDasharray: i === bars.length - 1 ? "0" : "2 1"
  })), /*#__PURE__*/React.createElement("polyline", {
    points: trend,
    fill: "none",
    stroke: purple,
    strokeWidth: "1.4"
  }), bars.map((b, i) => /*#__PURE__*/React.createElement("circle", {
    key: "p" + i,
    cx: b.x + 14,
    cy: baseY - b.h - 10,
    r: "2.6",
    fill: purple
  })), /*#__PURE__*/React.createElement("circle", {
    cx: C,
    cy: 130,
    r: HUB,
    fill: purple
  }), /*#__PURE__*/React.createElement("text", {
    x: C,
    y: 131,
    textAnchor: "middle",
    dominantBaseline: "central",
    fill: "#fff",
    fontFamily: "var(--font-display)",
    fontSize: "24",
    fontWeight: "500"
  }, "N")));
}
Object.assign(window, {
  ContributeGraphic,
  InvestGraphic
});
