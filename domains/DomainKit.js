// DomainKit — shared primitives for the domain template pages
// (Built Environment, National Defence). No animation. Exports to window.

// Eyebrow / section label — dotted purple square + mono caps (matches homepage .nv-label)
function Eyebrow({
  children,
  onDark
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nv-label",
    style: onDark ? {
      color: "var(--color-primary-on-dark)"
    } : undefined
  }, children);
}

// Section heading block: eyebrow + h2 + optional lead paragraph
function SectionHead({
  eyebrow,
  title,
  lead,
  onDark,
  align = "left",
  maxTitle = 640,
  maxLead = 660
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === "center" ? 820 : "none",
      margin: align === "center" ? "0 auto" : 0
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: onDark
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h2-weight)",
      fontSize: "var(--h2-size)",
      lineHeight: "var(--h2-line)",
      letterSpacing: "var(--h2-track)",
      margin: eyebrow ? "16px 0 0" : 0,
      maxWidth: maxTitle,
      color: onDark ? "var(--color-on-dark)" : "var(--color-ink)",
      marginInline: align === "center" ? "auto" : undefined
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-lg-size)",
      lineHeight: "var(--body-lg-line)",
      color: onDark ? "var(--color-on-dark-soft)" : "var(--color-body)",
      margin: "16px 0 0",
      maxWidth: maxLead,
      marginInline: align === "center" ? "auto" : undefined
    }
  }, lead) : null);
}

// Image placeholder — dashed frame + faint dot grid + mono caption. USER fills later.
function ImageBox({
  label = "Image",
  height = 260,
  onDark = false,
  style
}) {
  const line = onDark ? "rgba(250,249,245,0.28)" : "var(--color-grid-line)";
  const dot = onDark ? "rgba(250,249,245,0.10)" : "rgba(20,20,19,0.06)";
  const fill = onDark ? "var(--color-surface-dark-elevated)" : "var(--color-surface-soft)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height,
      background: fill,
      border: `1px dashed ${line}`,
      display: "grid",
      placeItems: "center",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `radial-gradient(${dot} 0.9px, transparent 1.3px)`,
      backgroundSize: "13px 13px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: onDark ? "rgba(250,249,245,0.5)" : "var(--color-muted-soft)",
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "16",
    rx: "0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "10",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 17l5-4 4 3 3-2 6 5"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: onDark ? "rgba(250,249,245,0.55)" : "var(--color-muted-soft)"
    }
  }, label)));
}

// GridFrame — full-bleed horizontal rules + vertical rules (edges + interior
// dividers) + inverted-triangle nodes, wrapping a CSS grid of `cols` columns.
// Mirrors the homepage FocusAreas/Closing node-grid motif exactly.
function GridFrame({
  cols = 2,
  onDark = false,
  className,
  children
}) {
  const LINE = onDark ? "var(--color-grid-line-dark)" : "var(--color-grid-line)";
  const NW = 5,
    NH = 7;
  const positions = [];
  for (let i = 0; i <= cols; i++) positions.push(i / cols * 100);
  const TopNode = ({
    left
  }) => /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: NW * 2,
    height: NH,
    viewBox: `0 0 ${NW * 2} ${NH}`,
    style: {
      position: "absolute",
      left: `${left}%`,
      top: 0,
      transform: "translateX(-50%)",
      pointerEvents: "none",
      zIndex: 2,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `M 0 0 L ${NW} ${NH} L ${NW * 2} 0 Z`,
    fill: LINE
  }));
  const BottomNode = ({
    left
  }) => /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: NW * 2,
    height: NH,
    viewBox: `0 0 ${NW * 2} ${NH}`,
    style: {
      position: "absolute",
      left: `${left}%`,
      bottom: 0,
      transform: "translateX(-50%)",
      pointerEvents: "none",
      zIndex: 2,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `M 0 ${NH} L ${NW} 0 L ${NW * 2} ${NH} Z`,
    fill: LINE
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-gridlines"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100vw",
      height: 1,
      background: LINE,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100vw",
      height: 1,
      background: LINE,
      pointerEvents: "none"
    }
  }), positions.map((p, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: NH,
      bottom: NH,
      left: `${p}%`,
      transform: idx === 0 ? "none" : idx === positions.length - 1 ? "translateX(-1px)" : "translateX(-0.5px)",
      width: 1,
      background: LINE,
      pointerEvents: "none"
    }
  })), positions.map((p, idx) => /*#__PURE__*/React.createElement(TopNode, {
    key: "t" + idx,
    left: p
  })), positions.map((p, idx) => /*#__PURE__*/React.createElement(BottomNode, {
    key: "b" + idx,
    left: p
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nv-2col nv-focus-boxes",
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: 0
    }
  }, children));
}

// A single cell inside a GridFrame
function GridCell({
  children,
  minHeight = 0,
  pad = 40,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: pad,
      minHeight,
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, children);
}

// ProcessFlow — a vertical chain of numbered node-circles connected by a
// dashed rule, matching the Node dot/line motif. Each step: circle + label.
// The final step is emphasized (filled primary). Reusable across pages.
function ProcessFlow({
  steps = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nv-flow",
    role: "list"
  }, steps.map((s, i) => {
    const last = i === steps.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      className: "nv-flow-step",
      role: "listitem",
      key: s
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-flow-node",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: "nv-flow-circle",
      style: last ? {
        background: "var(--color-primary)",
        borderColor: "var(--color-primary)",
        color: "var(--color-on-dark)"
      } : undefined
    }, String(i + 1).padStart(2, "0")), !last ? /*#__PURE__*/React.createElement("span", {
      className: "nv-flow-line"
    }) : null), /*#__PURE__*/React.createElement("div", {
      className: "nv-flow-label",
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: last ? "var(--h4-weight)" : 400,
        fontSize: last ? 26 : 22,
        letterSpacing: "var(--h4-track)",
        color: last ? "var(--color-ink)" : "var(--color-body)"
      }
    }, s));
  }));
}
Object.assign(window, {
  Eyebrow,
  SectionHead,
  ImageBox,
  GridFrame,
  GridCell,
  ProcessFlow
});
