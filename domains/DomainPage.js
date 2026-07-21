// DomainPage — the ONE shared layout for every domain page.
// Renders hero → why-this-domain → quote → get-involved → ventures → closing CTA
// entirely from a `data` object (see domain-*.jsx). Edit this file once and every
// domain page updates. Per-domain COPY and IMAGES live in the data files only.
//
// Data shape (all image fields optional — omit to fall back to an ImageBox placeholder):
//   {
//     eyebrow, navLabel,
//     hero:  { headline, body, image, primaryCta, secondaryCta },
//     why:   { title, lead, cards: [{ t, b, image }] },          // 6 cards
//     quote: { text, portrait, logo, logoAlt, lines: [] },
//     getInvolved: { title, subhead, paths: [{ t, b, cta }] },   // 3 paths
//     ventures: { title, lead },
//     cta:   { title, body, primaryCta, secondaryCta },
//   }
function DomainPage({
  data
}) {
  const {
    Button
  } = window.NodeVenturesDesignSystem_1fd7b8;
  const {
    Eyebrow,
    SectionHead,
    ImageBox,
    GridFrame,
    GridCell
  } = window;
  const resolveAsset = p => window.__resources && window.__resources[p] || p;

  // Launch link routing: "contribute"-type CTAs → app login; everything else
  // (talk / invest / connect) → the contact page.
  const LOGIN = window.NV_HREF && window.NV_HREF("Start contributing") || "#";
  const CONTACT = window.NV_HREF && window.NV_HREF("Contact") || "../contact.html";
  const ctaHref = label => /contribut/i.test(label || "") ? LOGIN : CONTACT;

  // Outlined secondary treatment for dark surfaces: transparent fill, cream
  // dashed frame + cream label, using the DS dash tokens so every dashed button
  // shares one dash rhythm. (DS 'secondary' dashes are ink and vanish on dark.)
  const ctaOutline = {
    backgroundColor: "transparent",
    color: "var(--color-on-dark)",
    backgroundImage: ["repeating-linear-gradient(90deg, var(--color-on-dark) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))", "repeating-linear-gradient(90deg, var(--color-on-dark) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))", "repeating-linear-gradient(0deg, var(--color-on-dark) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))", "repeating-linear-gradient(0deg, var(--color-on-dark) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))"].join(", "),
    backgroundSize: "100% 1px, 100% 1px, 1px 100%, 1px 100%",
    backgroundPosition: "top, bottom, left, right",
    backgroundRepeat: "no-repeat"
  };
  const hero = data.hero || {};
  const why = data.why || {};
  const quote = data.quote || {};
  const gi = data.getInvolved || {};
  const ventures = data.ventures || {};
  const cta = data.cta || {};
  return /*#__PURE__*/React.createElement("div", {
    id: "nv-page"
  }, /*#__PURE__*/React.createElement(SiteNav, null), /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      position: "relative",
      overflow: "hidden",
      paddingTop: 148,
      paddingBottom: 148,
      background: "var(--color-surface-dark)",
      color: "var(--color-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0
    }
  }, hero.image ? /*#__PURE__*/React.createElement("img", {
    src: resolveAsset(hero.image),
    alt: "",
    "aria-hidden": "true",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement(ImageBox, {
    label: "Hero image",
    height: "100%",
    style: {
      height: "100%",
      border: "none"
    }
  })), /*#__PURE__*/React.createElement(window.HeroDots, {
    gap: 13
  }), /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, data.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h1-weight)",
      fontSize: "var(--h1-size)",
      lineHeight: "var(--h1-line)",
      letterSpacing: "var(--h1-track)",
      color: "var(--color-on-dark)",
      margin: "18px 0 0",
      maxWidth: 620
    }
  }, hero.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-lg-size)",
      lineHeight: "var(--body-lg-line)",
      color: "var(--color-on-dark-soft)",
      margin: "22px 0 0",
      maxWidth: 640
    }
  }, hero.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 30,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: ctaHref(hero.primaryCta || "Become a contributor"),
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, hero.primaryCta || "Become a contributor")), hero.secondaryCta === null ? null : /*#__PURE__*/React.createElement("a", {
    href: CONTACT,
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: ctaOutline
  }, hero.secondaryCta || "Talk to us")))))), /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      paddingTop: 96,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: why.eyebrow || "Why this domain",
    title: why.title,
    lead: why.lead
  })), /*#__PURE__*/React.createElement(GridFrame, {
    cols: 3,
    className: "nv-swipe"
  }, (why.cards || []).map((p, i) => /*#__PURE__*/React.createElement(GridCell, {
    key: p.t,
    minHeight: 0,
    pad: 28,
    style: i >= 3 ? {
      borderTop: "1px solid var(--color-grid-line)"
    } : undefined
  }, p.image ? /*#__PURE__*/React.createElement("img", {
    src: resolveAsset(p.image),
    alt: p.t,
    style: {
      width: "100%",
      height: 150,
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement(ImageBox, {
    label: p.t,
    height: 150
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h4-weight)",
      fontSize: 22,
      letterSpacing: "var(--h4-track)",
      margin: "22px 0 0",
      color: "var(--color-ink)"
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-size)",
      lineHeight: "var(--body-line)",
      color: "var(--color-body)",
      margin: "12px 0 0"
    }
  }, p.b)))))), /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      paddingTop: 8,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement(window.QuotePanel, {
    quote: quote.text,
    portrait: quote.portrait ? /*#__PURE__*/React.createElement("img", {
      src: resolveAsset(quote.portrait),
      alt: "",
      "aria-hidden": "true",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }) : /*#__PURE__*/React.createElement(ImageBox, {
      label: "Portrait",
      height: "100%",
      style: {
        height: "100%"
      }
    }),
    logo: quote.logo,
    logoAlt: quote.logoAlt,
    lines: quote.lines || []
  }))), /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      paddingTop: 96,
      paddingBottom: 96,
      background: "var(--color-surface-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, gi.layout === "stacked" ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: gi.eyebrow || "Get involved",
    title: gi.title,
    lead: gi.subhead
  })) : /*#__PURE__*/React.createElement("div", {
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
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: gi.eyebrow || "Get involved",
    title: gi.title
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-lg-size)",
      lineHeight: "var(--body-lg-line)",
      color: "var(--color-body)",
      margin: 0,
      maxWidth: 360
    }
  }, gi.subhead)), /*#__PURE__*/React.createElement(GridFrame, {
    cols: 3,
    className: "nv-getinvolved"
  }, (gi.paths || []).map(p => {
    const giIcons = {
      "Become a contributor": "assets/getinvolved-contribute.jpg",
      "Explore investment": "assets/getinvolved-invest.jpg",
      "Connect with us": "assets/getinvolved-connect.jpg",
      "Data readiness": "assets/getinvolved-dataready.jpg",
      "AI opportunity mapping": "assets/getinvolved-mapping.jpg",
      "Agentic AI deployment": "assets/getinvolved-deploy.jpg"
    };
    return /*#__PURE__*/React.createElement(GridCell, {
      key: p.t,
      minHeight: 300,
      pad: 40
    }, /*#__PURE__*/React.createElement("img", {
      src: resolveAsset(p.icon || giIcons[p.t] || "assets/focus-building.png"),
      alt: p.t,
      style: {
        width: 104,
        height: 104,
        objectFit: "contain",
        display: "block",
        marginTop: -6
      }
    }), p.label ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 14,
        color: "var(--color-primary)",
        display: "block",
        marginTop: 20
      }
    }, p.label) : null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--h4-weight)",
        fontSize: "var(--h4-size)",
        letterSpacing: "var(--h4-track)",
        margin: p.label ? "14px 0 0" : "20px 0 0",
        color: "var(--color-ink)"
      }
    }, p.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--body-size)",
        lineHeight: "var(--body-line)",
        color: "var(--color-body)",
        margin: "12px 0 0"
      }
    }, p.b), p.cta ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        paddingTop: 28
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: ctaHref(p.cta),
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, p.cta))) : null);
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
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "Get started"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h2-weight)",
      fontSize: "var(--h2-size)",
      lineHeight: "var(--h2-line)",
      letterSpacing: "var(--h2-track)",
      color: "var(--color-on-dark)",
      margin: "16px 0 0",
      maxWidth: 680
    }
  }, cta.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-lg-size)",
      lineHeight: "var(--body-lg-line)",
      color: "var(--color-on-dark-soft)",
      margin: "18px 0 0",
      maxWidth: 560
    }
  }, cta.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: LOGIN,
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, cta.primaryCta || "Become a contributor")), cta.secondaryCta === null ? null : /*#__PURE__*/React.createElement("a", {
    href: CONTACT,
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: ctaOutline
  }, cta.secondaryCta || "Let's talk")))))))), /*#__PURE__*/React.createElement(SiteFooter, null));
}
window.DomainPage = DomainPage;
