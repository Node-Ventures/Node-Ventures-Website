// Funds — "Invest": left-aligned heading, then three horizontal cards.
function Funds() {
  const {
    Button
  } = window.NodeVenturesDesignSystem_1fd7b8;
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  const scRef = React.useRef(null);
  const items = [{
    t: "Venture Fund",
    b: "Invest in early-stage companies developing technologies with the potential to create long-term value and real-world impact."
  }, {
    t: "Debt Fund",
    b: "Provide capital that helps ventures scale while generating predictable, asset-backed returns."
  }, {
    t: "Asset Fund",
    b: "Participate in the infrastructure, property, and other real assets created and operated across the Node ecosystem."
  }];
  const LINE = "var(--color-grid-line)";
  const NW = 5,
    NH = 7; // triangle node, matching Domains
  const TopNode = ({
    left
  }) => /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: NW * 2,
    height: NH,
    viewBox: `0 0 ${NW * 2} ${NH}`,
    style: {
      position: "absolute",
      left,
      top: 0,
      transform: "translateX(-50%)",
      pointerEvents: "none",
      zIndex: 2,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `M 0 0 L ${NW} ${NH} L ${NW * 2} 0 Z`,
    fill: LINE,
    stroke: "none"
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
      left,
      bottom: 0,
      transform: "translateX(-50%)",
      pointerEvents: "none",
      zIndex: 2,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `M 0 ${NH} L ${NW} 0 L ${NW * 2} ${NH} Z`,
    fill: LINE,
    stroke: "none"
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      position: "relative",
      overflow: "hidden",
      paddingTop: isMobile ? 48 : 8,
      paddingBottom: isMobile ? 64 : 96,
      color: "var(--color-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      padding: isMobile ? "0 0 24px" : "0 0 40px",
      gap: isMobile ? 14 : 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-label"
  }, "How to invest"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h2-weight)",
      fontSize: "var(--h2-size)",
      lineHeight: "var(--h2-line)",
      letterSpacing: "var(--h2-track)",
      margin: "10px 0 0"
    }
  }, "Investment opportunities for every stage of growth.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-lg-size)",
      lineHeight: "var(--body-lg-line)",
      color: "var(--color-body)",
      margin: 0,
      maxWidth: 360
    }
  }, "Node Ventures offers investment structures designed to match your goals, timelines, and risk profiles.")), /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: NH,
      bottom: NH,
      left: 0,
      width: 1,
      background: LINE,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: NH,
      bottom: NH,
      left: "33.333%",
      transform: "translateX(-0.5px)",
      width: 1,
      background: LINE,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: NH,
      bottom: NH,
      left: "66.666%",
      transform: "translateX(-0.5px)",
      width: 1,
      background: LINE,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: NH,
      bottom: NH,
      right: 0,
      width: 1,
      background: LINE,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(TopNode, {
    left: 0
  }), /*#__PURE__*/React.createElement(TopNode, {
    left: "33.333%"
  }), /*#__PURE__*/React.createElement(TopNode, {
    left: "66.666%"
  }), /*#__PURE__*/React.createElement(TopNode, {
    left: "100%"
  }), /*#__PURE__*/React.createElement(BottomNode, {
    left: 0
  }), /*#__PURE__*/React.createElement(BottomNode, {
    left: "33.333%"
  }), /*#__PURE__*/React.createElement(BottomNode, {
    left: "66.666%"
  }), /*#__PURE__*/React.createElement(BottomNode, {
    left: "100%"
  })), /*#__PURE__*/React.createElement("div", {
    ref: scRef,
    className: "nv-3col nv-funds-boxes",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    style: {
      position: "relative",
      padding: 40,
      minHeight: 300,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--color-primary)"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h4-weight)",
      fontSize: "var(--h4-size)",
      letterSpacing: "var(--h4-track)",
      margin: "14px 0 0",
      color: "var(--color-ink)"
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-size)",
      lineHeight: "var(--body-line)",
      color: "var(--color-body)",
      margin: "12px 0 0"
    }
  }, it.b), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: isMobile ? 18 : 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: window.NV_HREF && window.NV_HREF("Contact") || "contact.html",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Let's talk")))))))));
}
window.Funds = Funds;
