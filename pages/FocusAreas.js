// FocusAreas — "Domains": left heading column, right a stacked list of the
// four domains. Each row: small image left, content right.
function FocusAreas() {
  const {
    Button
  } = window.NodeVenturesDesignSystem_1fd7b8;
  const href = window.NV_HREF || (() => "#");
  const areas = [{
    t: "Built environment",
    b: "Accelerating how we plan, approve, build and manage the places where people live and work.",
    img: "photos/focus-building-iso.jpg"
  }, {
    t: "National defence",
    b: "Strengthening our technological sovereignty through secure, resilient digital capabilities.",
    img: "photos/focus-shield.jpg"
  }, {
    t: "Community infrastructure",
    b: "Building digital tools that support healthier, smarter, and more resilient communities across energy, mobility, education, and public systems.",
    img: "photos/focus-school.jpg"
  }, {
    t: "Enterprise AI",
    b: "Helping organizations and teams unlock productivity, automate complex workflows, and adopt AI with confidence.",
    img: "photos/focus-desk.jpg"
  }];
  const resolveAsset = p => window.__resources && window.__resources[p] || p;
  const LINE = "var(--color-grid-line)";
  const NW = 5,
    NH = 7; // triangle node, matching the Invest treatment
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
      paddingBottom: 96,
      color: "var(--color-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  }, "Domains"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h2-weight)",
      fontSize: "var(--h2-size)",
      lineHeight: "var(--h2-line)",
      letterSpacing: "var(--h2-track)",
      margin: "16px 0 0",
      maxWidth: 400
    }
  }, "Where we\u2019re focused today."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-lg-size)",
      lineHeight: "var(--body-lg-line)",
      color: "var(--color-body)",
      margin: "20px 0 0",
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-ink)"
    }
  }, "Node builds ecosystems around Canada\u2019s most important opportunities."), " We focus our ventures and investments in domains where digital innovation can create lasting national impact."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: window.NV_HREF && window.NV_HREF("Contribute") || "#",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md"
  }, "Start contributing")), /*#__PURE__*/React.createElement("a", {
    href: window.NV_HREF && window.NV_HREF("Contact") || "contact.html",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md"
  }, "Let\u2019s talk")))), /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    className: "nv-domain-cap",
    width: NW * 2,
    height: NH,
    viewBox: `0 0 ${NW * 2} ${NH}`,
    style: {
      position: "absolute",
      left: 148,
      top: 0,
      transform: "translateX(-50%)",
      pointerEvents: "none",
      zIndex: 3,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `M 0 0 L ${NW} ${NH} L ${NW * 2} 0 Z`,
    fill: LINE,
    stroke: "none"
  })), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    className: "nv-domain-cap",
    width: NW * 2,
    height: NH,
    viewBox: `0 0 ${NW * 2} ${NH}`,
    style: {
      position: "absolute",
      left: 148,
      bottom: 0,
      transform: "translateX(-50%)",
      pointerEvents: "none",
      zIndex: 3,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `M 0 ${NH} L ${NW} 0 L ${NW * 2} ${NH} Z`,
    fill: LINE,
    stroke: "none"
  })), areas.map((a, i) => /*#__PURE__*/React.createElement("a", {
    key: a.t,
    href: href(a.t),
    className: "nv-domain-card",
    style: {
      position: "relative",
      display: "flex",
      gap: 36,
      alignItems: "stretch",
      padding: "0 40px 0 0",
      minHeight: 148,
      borderBottom: i < areas.length - 1 ? `1px solid ${LINE}` : "none",
      textDecoration: "none",
      color: "inherit"
    }
  }, i < areas.length - 1 && /*#__PURE__*/React.createElement(SideNodes, null), /*#__PURE__*/React.createElement("div", {
    className: "nv-domain-media",
    style: {
      flexShrink: 0,
      width: 148,
      alignSelf: "stretch",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRight: `1px solid ${LINE}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: resolveAsset(a.img),
    alt: "",
    "aria-hidden": "true",
    style: {
      width: 90,
      height: 90,
      objectFit: "contain",
      pointerEvents: "none",
      userSelect: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "nv-domain-body",
    style: {
      alignSelf: "center",
      padding: "28px 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "nv-domain-title",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h4-weight)",
      fontSize: "var(--h4-size)",
      letterSpacing: "var(--h4-track)",
      margin: 0,
      color: "var(--color-ink)",
      transition: "color .15s"
    }
  }, a.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-size)",
      lineHeight: "var(--body-line)",
      color: "var(--color-body)",
      margin: "6px 0 0"
    }
  }, a.b))))))));
}
window.FocusAreas = FocusAreas;
