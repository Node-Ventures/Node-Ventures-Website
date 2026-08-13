// FundPage — the ONE shared layout for every fund page (Asset, Venture, Debt).
// Renders hero → two-column intro → focus → advantage cards → how-it-works (dark)
// → mandate list → closing CTA entirely from a `data` object (see fund-*.jsx).
// Edit this file once and every fund page updates. Per-fund COPY lives in the
// data files only.
//
// data shape:
//   {
//     eyebrow,
//     hero:   { headline, intro },
//     lede:   [paragraph, paragraph],                  // two-column pair
//     focus:  { title, lead, body: [paragraph, ...] },
//     more:   { title, lead, sub: { title, body, cards: [{ t, b }] } },  // 2-4 cards
//     how:    { title, steps: [{ t, b }] },
//     built:  { title, lead, items: [label, ...] },
//     cta:    { title, body, button },
//   }
function FundPage({
  data
}) {
  const {
    Button
  } = window.NodeVenturesDesignSystem_1fd7b8;
  const {
    SectionHead,
    GridFrame,
    GridCell
  } = window;
  const CONTACT = window.NV_HREF && window.NV_HREF("Contact") || "../pages/contact.html";
  const resolveAsset = p => window.__resources && window.__resources[p] || p;
  const hero = data.hero || {};
  const focus = data.focus || {};
  const more = data.more || {};
  const sub = more.sub || {};
  const how = data.how || {};
  const built = data.built || {};
  const cta = data.cta || {};
  const para = {
    fontFamily: "var(--font-body)",
    fontSize: "var(--body-size)",
    lineHeight: 1.6,
    color: "var(--color-body)",
    margin: 0,
    textWrap: "pretty"
  };
  const cardTitle = {
    fontFamily: "var(--font-display)",
    fontWeight: "var(--h4-weight)",
    fontSize: "var(--h4-size)",
    lineHeight: "var(--h4-line)",
    letterSpacing: "var(--h4-track)",
    margin: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "nv-page"
  }, /*#__PURE__*/React.createElement(window.SiteNav, null), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      paddingTop: 96,
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-2col nv-fund-hero",
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nv-label"
  }, data.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h1-weight)",
      fontSize: "var(--h1-size)",
      lineHeight: "var(--h1-line)",
      letterSpacing: "var(--h1-track)",
      color: "var(--color-ink)",
      margin: "18px 0 0",
      maxWidth: "9.5em"
    }
  }, hero.headline)), /*#__PURE__*/React.createElement("div", {
    className: "nv-fund-hero-aside",
    style: {
      position: "relative",
      borderLeft: "1px solid var(--color-grid-line)",
      paddingLeft: 22,
      alignSelf: "end",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "nv-fund-hero-mark",
    style: {
      position: "absolute",
      left: -2,
      top: 0,
      width: 4,
      height: 30,
      background: "var(--color-primary)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-size)",
      lineHeight: 1.55,
      color: "var(--color-body)",
      margin: 0,
      maxWidth: 400,
      textWrap: "pretty"
    }
  }, hero.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: CONTACT,
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Let's talk"))))), /*#__PURE__*/React.createElement("div", {
    className: "nv-fund-hero-img",
    style: {
      position: "relative",
      marginTop: 64
    }
  }, hero.image ? /*#__PURE__*/React.createElement("img", {
    src: resolveAsset(hero.image),
    alt: hero.imageAlt || "",
    style: {
      display: "block",
      width: "100%",
      height: "auto"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width: "100%",
      aspectRatio: "16 / 9",
      background: "var(--color-surface-soft, #eceae3)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "nv-fund-hero-dots"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "nv-dot-band",
    style: {
      position: "relative",
      zIndex: 2,
      paddingTop: 40,
      paddingBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-2col nv-fund-lede",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64
    }
  }, (data.lede || []).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: "clamp(21px, 2vw, 26px)",
      lineHeight: 1.4,
      letterSpacing: "-0.3px",
      color: "var(--color-ink)",
      margin: 0,
      textWrap: "pretty"
    }
  }, p))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 2,
      paddingTop: 96,
      paddingBottom: 104
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("div", null, focus.eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "nv-label"
  }, focus.eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h2-weight)",
      fontSize: "var(--h2-size)",
      lineHeight: "var(--h2-line)",
      letterSpacing: "var(--h2-track)",
      color: "var(--color-ink)",
      margin: focus.eyebrow ? "16px 0 0" : 0,
      maxWidth: "11em"
    }
  }, focus.title)), /*#__PURE__*/React.createElement("div", {
    className: "nv-2col nv-fund-3col",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 48,
      marginTop: 16
    }
  }, (focus.body || []).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: para
  }, p))))), /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      position: "relative",
      zIndex: 2,
      paddingBottom: 104
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-2col nv-fund-split",
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 56,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, sub.eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "nv-label"
  }, sub.eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h2-weight)",
      fontSize: "var(--h2-size)",
      lineHeight: "var(--h2-line)",
      letterSpacing: "var(--h2-track)",
      color: "var(--color-ink)",
      margin: sub.eyebrow ? "16px 0 0" : 0,
      maxWidth: 420
    }
  }, sub.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      ...para,
      maxWidth: 620
    }
  }, sub.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(GridFrame, {
    cols: (sub.cards || []).length || 3,
    className: "nv-swipe"
  }, (sub.cards || []).map(c => /*#__PURE__*/React.createElement(GridCell, {
    key: c.t,
    pad: 40,
    minHeight: 260
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": c.image ? undefined : "true",
    style: {
      height: 168,
      marginBottom: 28,
      background: "var(--color-surface-soft, #eceae3)",
      overflow: "hidden"
    }
  }, c.image ? /*#__PURE__*/React.createElement("img", {
    src: resolveAsset(c.image),
    alt: c.imageAlt || "",
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: c.imagePos || "center"
    }
  }) : null), /*#__PURE__*/React.createElement("h4", {
    style: cardTitle
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      ...para,
      marginTop: 14,
      fontSize: "var(--body-sm-size)",
      lineHeight: 1.55
    }
  }, c.b))))))), /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band nv-dark",
    style: {
      position: "relative",
      zIndex: 2,
      background: "var(--color-surface-dark)",
      color: "var(--color-on-dark)",
      paddingTop: 104,
      paddingBottom: 104
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: how.eyebrow,
    title: how.title,
    lead: how.lead,
    onDark: true,
    align: "center",
    maxTitle: 700,
    maxLead: 720
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(GridFrame, {
    cols: 3,
    onDark: true,
    className: "nv-swipe nv-fund-steps"
  }, (how.steps || []).map((s, i) => /*#__PURE__*/React.createElement(GridCell, {
    key: s.t,
    pad: 40,
    minHeight: 250
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      letterSpacing: "0.06em",
      color: "var(--color-primary-on-dark)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h4", {
    style: {
      ...cardTitle,
      color: "var(--color-on-dark)",
      marginTop: 18
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      ...para,
      color: "var(--color-on-dark-soft)",
      marginTop: 14,
      fontSize: "var(--body-sm-size)",
      lineHeight: 1.55
    }
  }, s.b))), (how.steps || []).length % 3 !== 0 ? /*#__PURE__*/React.createElement("div", {
    className: "nv-fund-step-filler",
    style: {
      position: "relative",
      padding: 40,
      display: "flex",
      flexDirection: "column"
    }
  }) : null)))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 2,
      paddingTop: 104,
      paddingBottom: 104
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: built.eyebrow,
    title: built.title,
    lead: built.lead,
    maxTitle: 620,
    maxLead: 680
  }), /*#__PURE__*/React.createElement("ul", {
    className: "nv-fund-tags" + (built.columns === 1 ? " nv-fund-tags-1" : ""),
    style: {
      listStyle: "none",
      margin: "32px 0 0",
      padding: 0,
      display: "grid",
      gridTemplateColumns: built.columns === 1 ? "1fr" : "1fr 1fr",
      columnGap: 72,
      rowGap: 0
    }
  }, (built.items || []).map(t => {
    const label = typeof t === "object" ? t.term : t;
    return /*#__PURE__*/React.createElement("li", {
      key: label,
      style: {
        padding: "22px 0",
        borderBottom: "1px solid var(--color-grid-line)",
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 9,
        height: 9,
        flex: "none",
        background: "var(--color-primary)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--body-lg-size)",
        color: "var(--color-ink)"
      }
    }, typeof t === "object" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
      href: window.NV_HREF && window.NV_HREF(t.link) || "#",
      style: {
        fontWeight: 600,
        textDecoration: "underline",
        textUnderlineOffset: 3,
        color: "var(--color-ink)"
      }
    }, t.term), t.rest) : t));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      background: "var(--color-surface-dark)",
      color: "var(--color-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement(GridFrame, {
    cols: 1,
    onDark: true,
    className: "nv-cta"
  }, /*#__PURE__*/React.createElement(GridCell, {
    pad: 56,
    minHeight: 320,
    style: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, cta.eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "nv-label",
    style: {
      color: "var(--color-primary-on-dark)"
    }
  }, cta.eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h2-weight)",
      fontSize: "var(--h2-size)",
      lineHeight: "var(--h2-line)",
      letterSpacing: "var(--h2-track)",
      color: "var(--color-on-dark)",
      margin: cta.eyebrow ? "16px 0 0" : 0,
      maxWidth: 680
    }
  }, cta.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-lg-size)",
      lineHeight: "var(--body-lg-line)",
      color: "var(--color-on-dark-soft)",
      margin: "18px 0 0",
      maxWidth: 600,
      textWrap: "pretty"
    }
  }, cta.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: CONTACT,
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, cta.button)))))))), /*#__PURE__*/React.createElement(window.SiteFooter, null));
}
window.FundPage = FundPage;
