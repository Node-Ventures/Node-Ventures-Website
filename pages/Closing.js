// Closing — two large CTA boxes attached to the footer. Each box: eyebrow +
// arrow button top-right, a large serif heading, and body copy anchored bottom.
function Closing() {
  const paths = [{
    eyebrow: "Contribute",
    t: "Contribute to the ventures.",
    b: "We provide the projects, the domain expertise and the hands-on support from day one to help you validate, build and scale faster."
  }, {
    eyebrow: "Invest",
    t: "Invest in the Node ecosystem.",
    b: "Participate through flexible investment opportunities designed to support innovation, infrastructure, and sustainable growth."
  }];
  const LINE = "var(--color-grid-line-dark)"; // divider color that reads on the dark surface

  const Arrow = ({
    href
  }) => /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": "Learn more",
    className: "cta-arrow-link",
    style: {
      flexShrink: 0,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "cta-arrow",
    style: {
      width: 56,
      height: 56,
      display: "grid",
      placeItems: "center",
      border: "1px dashed rgba(250,249,245,0.32)",
      transition: "background .3s, border-color .3s"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-on-dark)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 17L17 7M9 7h8v8"
  }))));

  // Inverted-triangle node where a vertical rule meets the top horizontal rule:
  // two diagonals funnel down to an apex, and the vertical continues from the apex.
  const NW = 5,
    NH = 7; // half-width, height of the triangle
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
      paddingTop: 0,
      paddingBottom: 0,
      background: "var(--color-surface-dark)",
      color: "var(--color-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("div", {
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
      left: "50%",
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
    left: "50%"
  }), /*#__PURE__*/React.createElement(TopNode, {
    left: "100%"
  }), /*#__PURE__*/React.createElement(BottomNode, {
    left: 0
  }), /*#__PURE__*/React.createElement(BottomNode, {
    left: "50%"
  }), /*#__PURE__*/React.createElement(BottomNode, {
    left: "100%"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nv-2col nv-cta-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 0
    }
  }, paths.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    className: "cta-box",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minHeight: 460,
      padding: "44px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-label",
    style: {
      color: "var(--color-primary-on-dark)"
    }
  }, p.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h2-weight)",
      fontSize: "var(--h2-size)",
      lineHeight: "var(--h2-line)",
      letterSpacing: "var(--h2-track)",
      margin: "20px 0 0",
      maxWidth: 460,
      color: "var(--color-on-dark)"
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 40,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-size)",
      lineHeight: 1.5,
      color: "var(--color-on-dark-soft)",
      margin: 0,
      maxWidth: 400
    }
  }, p.b), /*#__PURE__*/React.createElement(Arrow, {
    href: p.eyebrow === "Contribute" ? window.NV_HREF && window.NV_HREF("Contribute") || "#" : window.NV_HREF && window.NV_HREF("Contact") || "contact.html"
  }))))))));
}
window.Closing = Closing;
