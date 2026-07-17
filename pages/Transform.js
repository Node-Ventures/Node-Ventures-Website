// Transform — "05 / AI transformation": left heading column, right a list of
// how the transformation works, drawn from the AI Transformation proposal.
function Transform() {
  const {
    Button
  } = window.NodeVenturesDesignSystem_1fd7b8;
  const items = [{
    t: "Build the foundation first",
    b: "Your organization's data is carefully unified, digitized, and optimized in preparation for AI structuring."
  }, {
    t: "Agents are strictly governed",
    b: "Scoped MCP servers give each agent least-privilege access to only the data and tools it needs."
  }, {
    t: "Built on open standards",
    b: "MCP and A2A protocols are backed by the whole industry — so there's no vendor lock-in, ever."
  }, {
    t: "Automate your highest-value work",
    b: "We target the high-frequency, high-effort processes where agents deliver measurable return."
  }, {
    t: "Implementation and training",
    b: "We build the workflows, deploy the agents, and train your team — so the transformation sticks long after we're done."
  }];
  const LINE = "#d7d4cc";
  const NW = 5,
    NH = 7; // triangle node, matching Domains
  // inward-pointing triangles that sit on the side rules at each row divider
  const SideNodes = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: NH,
    height: NW * 2,
    viewBox: `0 0 ${NH} ${NW * 2}`,
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      transform: "translateY(50%)",
      pointerEvents: "none",
      zIndex: 3,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `M 0 0 L ${NH} ${NW} L 0 ${NW * 2} Z`,
    fill: LINE,
    stroke: "none"
  })), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: NH,
    height: NW * 2,
    viewBox: `0 0 ${NH} ${NW * 2}`,
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      transform: "translateY(50%)",
      pointerEvents: "none",
      zIndex: 3,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `M ${NH} 0 L 0 ${NW} L ${NH} ${NW * 2} Z`,
    fill: LINE,
    stroke: "none"
  })));
  return /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      position: "relative",
      overflow: "hidden",
      paddingTop: 96,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner",
    style: {
      position: "relative",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources["assets/node-vector-12.svg"] || "assets/node-vector-12.svg",
    alt: "",
    style: {
      position: "absolute",
      bottom: 0,
      left: "21%",
      transform: "translateX(-50%)",
      width: 460,
      height: "auto",
      opacity: 0.038
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-transform-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "5fr 6fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nv-label"
  }, "Enterprise AI"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h2-weight)",
      fontSize: "var(--h2-size)",
      lineHeight: "var(--h2-line)",
      letterSpacing: "var(--h2-track)",
      margin: "16px 0 0",
      maxWidth: 540
    }
  }, "We don't just build. We transform."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-lg-size)",
      lineHeight: "var(--body-lg-line)",
      color: "var(--color-body)",
      margin: "20px 0 0",
      maxWidth: 460
    }
  }, "We work with your team to convert outdated processes into agentic AI workflows built upon governed data, open standards and no vendor lock-in."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: window.NV_HREF && window.NV_HREF("Contact") || "contact.html",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md"
  }, "Start transformation")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 1,
      background: LINE,
      pointerEvents: "none",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 1,
      background: LINE,
      pointerEvents: "none",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 1,
      background: LINE,
      pointerEvents: "none",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      width: 1,
      background: LINE,
      pointerEvents: "none",
      zIndex: 2
    }
  }), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    style: {
      position: "relative",
      display: "flex",
      gap: 24,
      alignItems: "baseline",
      padding: "26px 28px",
      borderBottom: i < items.length - 1 ? `1px solid ${LINE}` : "none"
    }
  }, i < items.length - 1 && /*#__PURE__*/React.createElement(SideNodes, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--color-primary)",
      flexShrink: 0,
      paddingTop: 4
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h4-weight)",
      fontSize: "var(--h4-size)",
      letterSpacing: "var(--h4-track)",
      margin: 0,
      color: "var(--color-ink)"
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-size)",
      lineHeight: "var(--body-line)",
      color: "var(--color-body)",
      margin: "8px 0 0"
    }
  }, it.b))))))));
}
window.Transform = Transform;
