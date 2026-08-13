function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SiteFooter — dark, boxed link columns, dot-marks in the corner.
// Link targets come from the shared site-links registry (window.NV_HREF).
function SiteFooter() {
  const href = window.NV_HREF || (() => "#");
  // NOTE (pre-launch): Invest / Ventures columns and the Contribute link
  // temporarily removed — pages not built yet. Restore when they ship.
  const cols = [{
    h: "Fund management",
    links: ["Asset fund", "Venture fund", "Debt fund"]
  }, {
    h: "Domains",
    links: ["Built environment", "National defence", "Community infrastructure", "Enterprise AI"]
  }, {
    h: "Company",
    links: [{
      address: ["95 Mural St. Richmond Hill", "Ontario L4B 3G2"]
    }, "admin@nodeventures.ca", "Contact", "Log in"]
  }];
  const Hover = ({
    t
  }) => /*#__PURE__*/React.createElement("span", {
    className: "nv-link"
  }, /*#__PURE__*/React.createElement("span", {
    "data-t": t,
    style: {
      whiteSpace: "normal"
    }
  }, t));
  const resolveAsset = p => window.__resources && window.__resources[p] || p;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-surface-dark)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-footer-box",
    style: {
      position: "relative",
      width: "100%",
      background: "transparent",
      color: "var(--color-on-dark)",
      borderRadius: 0,
      padding: "56px 56px 0",
      minHeight: 510,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 1,
      background: "#403d38",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      width: 1,
      background: "#403d38",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "nv-footer-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 0.85fr 1fr 1.05fr",
      gap: 32,
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: resolveAsset("assets/node-wordmark.svg"),
    alt: "Node Ventures",
    style: {
      display: "block",
      height: 30,
      width: "auto"
    }
  })), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "var(--color-on-dark)",
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, c.links.map(l => typeof l === "object" ? /*#__PURE__*/React.createElement("li", {
    key: "address",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-sm-size)",
      color: "var(--color-on-dark-soft)",
      lineHeight: 1.45
    }
  }, l.address.map(line => /*#__PURE__*/React.createElement("div", {
    key: line
  }, line))) : /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", _extends({
    href: href(l)
  }, href(l).indexOf("mailto:") === 0 ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}, {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-sm-size)",
      color: "var(--color-on-dark-soft)",
      textDecoration: "none"
    }
  }), /*#__PURE__*/React.createElement(Hover, {
    t: l
  })))))))), /*#__PURE__*/React.createElement("img", {
    src: resolveAsset("assets/node-footer-wordmark.svg"),
    alt: "",
    "aria-hidden": "true",
    style: {
      marginTop: "auto",
      alignSelf: "stretch",
      display: "block",
      width: "100%",
      height: "auto",
      marginBottom: 0,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "nv-footer-legal",
    style: {
      position: "absolute",
      left: 56,
      bottom: 28,
      display: "flex",
      gap: 12,
      alignItems: "baseline",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--caption-size)",
      color: "var(--color-on-dark-soft)"
    }
  }, "\xA9 2026 Node Ventures, Inc."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--caption-size)",
      color: "var(--color-on-dark-soft)"
    }
  }, "|"), /*#__PURE__*/React.createElement("a", {
    href: href("Privacy"),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--caption-size)",
      color: "var(--color-on-dark-soft)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Hover, {
    t: "Privacy"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--caption-size)",
      color: "var(--color-on-dark-soft)"
    }
  }, "|"), /*#__PURE__*/React.createElement("a", {
    href: href("Terms"),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--caption-size)",
      color: "var(--color-on-dark-soft)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Hover, {
    t: "Terms"
  }))))));
}
window.SiteFooter = SiteFooter;
