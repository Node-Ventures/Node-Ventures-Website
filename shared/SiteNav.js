// SiteNav — cream-on-dark top bar, boxed wordmark, mono nav links with
// dashed dropdown panels for the sections that have children.
// Link targets come from the shared site-links registry (window.NV_HREF).
function SiteNav() {
  const {
    Button
  } = window.NodeVenturesDesignSystem_1fd7b8;
  const href = window.NV_HREF || (() => "#");

  // main items; `menu` present → dashed dropdown, else a direct link
  // NOTE (pre-launch): Contribute / Invest / Ventures temporarily removed —
  // their pages aren't built yet. Restore these entries when they ship.
  const items = [{
    label: "Domains",
    menu: ["Built environment", "National defence", "Community infrastructure", "Enterprise AI"]
  }, {
    label: "Contact"
  }];
  const [open, setOpen] = React.useState(null);
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  const [drawer, setDrawer] = React.useState(false);
  const [acc, setAcc] = React.useState(null); // which mobile accordion is open
  React.useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);
  React.useEffect(() => {
    if (!isMobile) setDrawer(false);
  }, [isMobile]);
  const linkStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--color-on-dark)",
    opacity: 0.78,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    whiteSpace: "nowrap"
  };
  const caret = up => /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 10 10",
    "aria-hidden": "true",
    style: {
      transform: up ? "rotate(180deg)" : "none",
      transition: "transform 0.18s ease",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 3.5 L5 7 L8.5 3.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const Hover = ({
    t
  }) => /*#__PURE__*/React.createElement("span", {
    className: "nv-link-plain"
  }, /*#__PURE__*/React.createElement("span", {
    "data-t": t
  }, t));

  // ---- Mobile: wordmark + hamburger, full-screen slide-down drawer ----
  if (isMobile) {
    const barStyle = {
      position: "sticky",
      top: 0,
      zIndex: 40,
      display: "flex",
      alignItems: "center",
      height: 60,
      padding: "0 var(--page-pad)",
      backgroundColor: "var(--color-surface-dark)",
      backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
      backgroundSize: "100% 1px",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat"
    };
    return /*#__PURE__*/React.createElement("nav", {
      style: barStyle
    }, /*#__PURE__*/React.createElement("a", {
      href: href("Home"),
      style: {
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none"
      },
      "aria-label": "Node Ventures home"
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__resources && window.__resources["assets/node-wordmark.svg"] || "assets/node-wordmark.svg",
      alt: "Node Ventures",
      style: {
        height: 20,
        width: "auto",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": drawer ? "Close menu" : "Open menu",
      "aria-expanded": drawer,
      onClick: () => setDrawer(v => !v),
      style: {
        marginLeft: "auto",
        width: 44,
        height: 44,
        display: "grid",
        placeItems: "center",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--color-on-dark)",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round"
    }, drawer ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 5l14 14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 5L5 19"
    })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 18h18"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: "60px 0 0",
        zIndex: 39,
        backgroundColor: "var(--color-surface-dark)",
        transform: drawer ? "translateY(0)" : "translateY(-8px)",
        opacity: drawer ? 1 : 0,
        pointerEvents: drawer ? "auto" : "none",
        transition: "opacity .22s ease, transform .22s ease",
        overflowY: "auto",
        padding: "8px var(--page-pad) 40px"
      }
    }, /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column"
      }
    }, items.map(it => /*#__PURE__*/React.createElement("li", {
      key: it.label,
      style: {
        borderBottom: "1px dashed rgba(255,255,255,0.18)"
      }
    }, it.menu ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setAcc(acc === it.label ? null : it.label),
      style: {
        ...linkStyle,
        opacity: 1,
        fontSize: 14,
        width: "100%",
        justifyContent: "space-between",
        padding: "20px 0",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", null, it.label), caret(acc === it.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: acc === it.label ? 400 : 0,
        overflow: "hidden",
        transition: "max-height .25s ease"
      }
    }, /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: "0 0 14px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, it.menu.map(sub => /*#__PURE__*/React.createElement("li", {
      key: sub
    }, /*#__PURE__*/React.createElement("a", {
      href: href(sub),
      onClick: () => setDrawer(false),
      style: {
        display: "block",
        fontFamily: "var(--font-body)",
        fontSize: 16,
        color: "var(--color-on-dark-soft)",
        textDecoration: "none",
        padding: "10px 0"
      }
    }, sub)))))) : /*#__PURE__*/React.createElement("a", {
      href: href(it.label),
      onClick: () => setDrawer(false),
      style: {
        ...linkStyle,
        opacity: 1,
        fontSize: 14,
        display: "flex",
        padding: "20px 0"
      }
    }, it.label))), /*#__PURE__*/React.createElement("li", {
      style: {
        borderBottom: "1px dashed rgba(255,255,255,0.18)"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: href("Log in"),
      onClick: () => setDrawer(false),
      style: {
        ...linkStyle,
        opacity: 1,
        fontSize: 14,
        display: "flex",
        padding: "20px 0"
      }
    }, "Log in"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: href("Start contributing"),
      style: {
        textDecoration: "none",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      style: {
        width: "100%"
      }
    }, "Start contributing")))));
  }
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      display: "flex",
      alignItems: "center",
      gap: 24,
      height: 64,
      padding: "0 var(--page-pad)",
      backgroundColor: "var(--color-surface-dark)",
      backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
      backgroundSize: "100% 1px",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href("Home"),
    style: {
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none",
      flex: "none"
    },
    "aria-label": "Node Ventures home"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources["assets/node-wordmark.svg"] || "assets/node-wordmark.svg",
    alt: "Node Ventures",
    style: {
      height: 17.6,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: 22,
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.label,
    style: {
      position: "relative"
    },
    onMouseEnter: it.menu ? () => setOpen(it.label) : undefined,
    onMouseLeave: it.menu ? () => setOpen(null) : undefined
  }, /*#__PURE__*/React.createElement("a", {
    href: it.menu ? "#" : href(it.label),
    style: linkStyle,
    onClick: it.menu ? e => {
      e.preventDefault();
      setOpen(open === it.label ? null : it.label);
    } : undefined,
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.78;
    }
  }, /*#__PURE__*/React.createElement(Hover, {
    t: it.label
  }), it.menu ? caret(open === it.label) : null), it.menu && open === it.label ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 14px)",
      left: -16,
      minWidth: 220,
      backgroundColor: "var(--color-surface-dark)",
      border: "1px dashed rgba(255,255,255,0.28)",
      padding: 8,
      zIndex: 40,
      boxShadow: "0 8px 24px rgba(0,0,0,0.35)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -14,
      left: 0,
      right: 0,
      height: 14
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, it.menu.map(sub => /*#__PURE__*/React.createElement("li", {
    key: sub
  }, /*#__PURE__*/React.createElement("a", {
    href: href(sub),
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-on-dark-soft)",
      textDecoration: "none",
      padding: "9px 12px",
      letterSpacing: "-0.1px"
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = "var(--color-on-dark)";
      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = "var(--color-on-dark-soft)";
      e.currentTarget.style.backgroundColor = "transparent";
    }
  }, /*#__PURE__*/React.createElement(Hover, {
    t: sub
  })))))) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href("Log in"),
    style: linkStyle,
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.78;
    }
  }, /*#__PURE__*/React.createElement(Hover, {
    t: "Log in"
  })), /*#__PURE__*/React.createElement("a", {
    href: href("Start contributing"),
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Start contributing"))));
}
window.SiteNav = SiteNav;
