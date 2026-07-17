// site-ventures — single source of truth for the Node venture roster and the
// horizontal card rail used on every domain page. Edit the roster here once and
// all domain pages update. Requires DomainKit's ImageBox + the design system's Button.
(function () {
  window.NV_VENTURES = [{
    logo: "assets/landlogic-logo.svg",
    name: "LandLogic",
    b: "A property intelligence platform that turns zoning, policy, parcel, and municipal data into clear answers about what can be built and where.",
    tags: ["Zoning intelligence", "Geospatial", "Document intelligence"]
  }, {
    logo: "assets/bluecanoe-logo.svg",
    name: "Blue Canoe",
    b: "A discovery platform that helps buyers find Ontario cottages using lifestyle preferences, location signals, access, and market data.",
    tags: ["Geospatial", "Matching", "Data pipelines"]
  }, {
    logo: "assets/parcella-logo.svg",
    name: "Parcella",
    b: "An AI property advisor that helps homeowners understand what they can build and move from feasibility to permit-ready planning.",
    tags: ["Zoning intelligence", "Regulatory analysis", "Workflow agent"]
  }, {
    logo: "assets/aecorn-logo.svg",
    name: "AECORN",
    b: "A tech-enabled real estate brokerage using AI tools, market intelligence, and modern marketing to help agents work smarter.",
    tags: ["Market intelligence", "Document intelligence", "Workflow automation"]
  }, {
    logo: "assets/one-ontario-logo.svg",
    name: "One Ontario",
    cta: "Explore this initiative →",
    b: "A digital permitting initiative connecting municipalities, industry, and standards bodies to modernize how development approvals work.",
    tags: ["Regulatory intelligence", "Compliance checking", "Open standards"]
  }];

  // VenturesRail — horizontally scrollable row of venture cards + a trailing
  // "Start your own" prompt, with prev/next arrow controls. Same markup on
  // every domain page.
  function VenturesRail({
    eyebrow,
    title,
    lead
  }) {
    const {
      Button
    } = window.NodeVenturesDesignSystem_1fd7b8;
    const {
      ImageBox,
      SectionHead
    } = window;
    const resolveAsset = p => window.__resources && window.__resources[p] || p;
    const ventures = window.NV_VENTURES;
    const scRef = React.useRef(null);
    const scrollByCards = dir => {
      const el = scRef.current;
      if (!el) return;
      const card = el.querySelector(".nv-rail-card");
      const step = card ? card.getBoundingClientRect().width + 24 : 360;
      el.scrollBy({
        left: dir * step,
        behavior: "smooth"
      });
    };
    const arrowBtn = {
      width: 46,
      height: 46,
      padding: 0,
      background: "transparent",
      border: "1px dashed var(--color-muted)",
      cursor: "pointer",
      color: "var(--color-ink)",
      display: "grid",
      placeItems: "center"
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-band-inner",
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 32,
        marginBottom: 44,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: eyebrow,
      title: title,
      lead: lead
    })), /*#__PURE__*/React.createElement("div", {
      className: "nv-rail-arrows",
      style: {
        display: "flex",
        flex: "0 0 auto"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Previous ventures",
      className: "nv-vent-arrow",
      onClick: () => scrollByCards(-1),
      style: arrowBtn
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        transform: "rotate(180deg)"
      },
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Next ventures",
      className: "nv-vent-arrow",
      onClick: () => scrollByCards(1),
      style: {
        ...arrowBtn,
        marginLeft: -1
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "nv-rail",
      role: "list",
      ref: scRef
    }, ventures.map(v => /*#__PURE__*/React.createElement("div", {
      className: "nv-rail-card",
      role: "listitem",
      key: v.name,
      style: {
        background: "var(--color-canvas)",
        border: "1px solid var(--color-hairline)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 168,
        borderBottom: "1px solid var(--color-hairline)",
        background: "var(--color-surface-soft)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "24px 26px 28px",
        display: "flex",
        flexDirection: "column",
        flex: 1
      }
    }, v.logo ? /*#__PURE__*/React.createElement("img", {
      src: resolveAsset(v.logo),
      alt: v.name,
      style: {
        height: 44,
        width: "auto",
        maxWidth: "78%",
        objectFit: "contain",
        objectPosition: "left center",
        display: "block"
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 30,
        letterSpacing: "-0.5px",
        color: "var(--color-ink)",
        height: 44,
        display: "flex",
        alignItems: "center"
      }
    }, v.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--body-size)",
        lineHeight: "var(--body-line)",
        color: "var(--color-body)",
        margin: "8px 0 0"
      }
    }, v.b), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        paddingTop: 20
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      size: "sm"
    }, v.cta || "Explore this venture →"))))), /*#__PURE__*/React.createElement("div", {
      className: "nv-rail-card",
      role: "listitem",
      style: {
        background: "var(--color-canvas)",
        border: "1px solid var(--color-hairline)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 168,
        borderBottom: "1px solid var(--color-hairline)",
        background: "var(--color-surface-soft)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "24px 26px 28px",
        display: "flex",
        flexDirection: "column",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 30,
        letterSpacing: "-0.5px",
        color: "var(--color-ink)",
        height: 44,
        display: "flex",
        alignItems: "center"
      }
    }, "Start your own"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--body-size)",
        lineHeight: "var(--body-line)",
        color: "var(--color-body)",
        margin: "8px 0 0"
      }
    }, "Have a venture idea? We'll help you build the team, the plan, and the product."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        paddingTop: 20
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      size: "sm"
    }, "Get in touch \u2192"))))));
  }
  window.VenturesRail = VenturesRail;
})();
