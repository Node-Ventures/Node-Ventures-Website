// HowWeBuild — 5-step list (left) with a node graphic that changes per active
// step (right): 1 node → line to 2 → pulse → tracking graphs → checkmarks.
function HowWeBuild() {
  const {
    Button
  } = window.NodeVenturesDesignSystem_1fd7b8;
  const resolveAsset = p => window.__resources && window.__resources[p] || p;
  const steps = [{
    t: "Create a profile",
    b: "Build your profile by defining your expertise, interests, and availability to get matched to the right projects."
  }, {
    t: "Discover opportunities",
    b: "Browse existing ventures, join active projects, or propose a new venture of your own."
  }, {
    t: "Build together",
    b: "Work alongside founders, advisors, and experts to help build innovative solutions."
  }, {
    t: "Track your impact",
    b: "Track assignments, milestones, requests, and venture progress through one connected platform."
  }, {
    t: "Share in success",
    b: "As the venture grows, so do your opportunities, relationships, and the value you help create."
  }];
  const [active, setActive] = React.useState(0);
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  const hwScRef = React.useRef(null);

  // steps that have a real product screenshot (others fall back to the node graphic)
  const stepImages = {
    0: {
      src: "photos/process-01-d.png",
      alt: "Create a profile — pick your areas of expertise"
    },
    1: {
      src: "photos/process-02-d.png",
      alt: "Matched to a venture — recommended ventures"
    },
    2: {
      src: "photos/process-03-d.png",
      alt: "Contribute — upcoming meeting"
    },
    3: {
      src: "photos/process-04-d.png",
      alt: "Track your impact — time tracked this week"
    },
    4: {
      src: "photos/process-05-d.png",
      alt: "Share in success — project complete"
    }
  };
  const LINE = "#d7d4cc";
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
      zIndex: 3,
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
      zIndex: 3,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: `M 0 ${NH} L ${NW} 0 L ${NW * 2} ${NH} Z`,
    fill: LINE,
    stroke: "none"
  }));
  const dotBg = {
    backgroundImage: "radial-gradient(rgba(20,20,19,0.14) 0.9px, transparent 1.3px)",
    backgroundSize: "13px 13px",
    maskImage: "radial-gradient(120% 100% at 50% 45%, #000 55%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(120% 100% at 50% 45%, #000 55%, transparent 100%)"
  };

  // ---- Mobile: horizontal scroll-snap cards, image above text, one at a time ----
  if (isMobile) {
    return /*#__PURE__*/React.createElement("section", {
      className: "nv-grid-band",
      style: {
        paddingTop: 48,
        paddingBottom: 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-band-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-label"
    }, "How to contribute"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--h2-weight)",
        fontSize: "var(--h2-size)",
        lineHeight: "var(--h2-line)",
        letterSpacing: "var(--h2-track)",
        margin: "12px 0 0"
      }
    }, "Interested in contributing your time to a venture?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--body-lg-size)",
        lineHeight: "var(--body-lg-line)",
        color: "var(--color-body)",
        margin: "14px 0 0"
      }
    }, "Put your skills to work on projects that match your passion, expertise and long-term goals. You choose your level of involvement."), /*#__PURE__*/React.createElement("div", {
      ref: hwScRef,
      className: "nv-howwe-scroll",
      style: {
        marginTop: 24
      }
    }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s.t,
      className: "nv-howwe-card",
      style: {
        border: `1px solid ${LINE}`,
        background: "var(--color-canvas)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 210,
        borderBottom: `1px solid ${LINE}`,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        ...dotBg
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 22
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: resolveAsset(stepImages[i].src),
      alt: stepImages[i].alt,
      style: {
        maxHeight: "100%",
        maxWidth: "100%",
        width: "auto",
        height: "auto",
        objectFit: "contain",
        filter: "drop-shadow(0 10px 24px rgba(20,20,19,0.15))"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20,
        display: "flex",
        gap: 12,
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 14,
        color: "var(--color-primary)"
      }
    }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 16,
        margin: 0,
        color: "var(--color-ink)"
      }
    }, s.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--body-size)",
        lineHeight: "var(--body-line)",
        color: "var(--color-body)",
        margin: "6px 0 0"
      }
    }, s.b))))))));
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      paddingTop: 56,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 40,
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-label"
  }, "How to contribute"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h2-weight)",
      fontSize: "var(--h2-size)",
      lineHeight: "var(--h2-line)",
      letterSpacing: "var(--h2-track)",
      margin: "16px 0 0"
    }
  }, "Interested in contributing your time to a venture?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-lg-size)",
      lineHeight: "var(--body-lg-line)",
      color: "var(--color-body)",
      margin: 0,
      maxWidth: 360
    }
  }, "Put your skills to work on projects that match your passion, expertise and long-term goals. You choose your level of involvement.")), /*#__PURE__*/React.createElement("div", {
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
      pointerEvents: "none",
      zIndex: 2
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
      pointerEvents: "none",
      zIndex: 2
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
      pointerEvents: "none",
      zIndex: 2
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
      pointerEvents: "none",
      zIndex: 2
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
      pointerEvents: "none",
      zIndex: 2
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
    className: "nv-2col nv-howwe-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", null, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    onMouseEnter: () => setActive(i),
    style: {
      padding: "22px 32px",
      cursor: "default",
      borderBottom: i < steps.length - 1 ? `1px solid ${LINE}` : "none",
      background: active === i ? "var(--color-active-row)" : "transparent",
      transition: "background .2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: active === i ? "var(--color-primary)" : "var(--color-muted-soft)"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 16,
      margin: 0,
      color: "var(--color-ink)"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-size)",
      lineHeight: "var(--body-line)",
      color: "var(--color-body)",
      margin: "6px 0 0"
    }
  }, s.b)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 420,
      overflow: "hidden"
    }
  }, stepImages[active] ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: "radial-gradient(rgba(20,20,19,0.14) 0.9px, transparent 1.3px)",
      backgroundSize: "13px 13px",
      maskImage: "radial-gradient(120% 100% at 50% 45%, #000 55%, transparent 100%)",
      WebkitMaskImage: "radial-gradient(120% 100% at 50% 45%, #000 55%, transparent 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: resolveAsset(stepImages[active].src),
    alt: stepImages[active].alt,
    style: {
      maxHeight: "100%",
      maxWidth: "100%",
      width: "auto",
      height: "auto",
      objectFit: "contain",
      filter: "drop-shadow(0 14px 32px rgba(20,20,19,0.15))"
    }
  }))) : /*#__PURE__*/React.createElement(window.StepGraphic, {
    step: active
  }))))));
}
window.HowWeBuild = HowWeBuild;

// StepGraphic — a small SVG node diagram that morphs with the active step.
function StepGraphic({
  step
}) {
  const ink = "var(--color-ink)",
    purple = "var(--color-primary)",
    hair = "#d7d4cc";
  const cx = 210,
    cy = 210;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 420 420",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, step >= 1 && /*#__PURE__*/React.createElement("g", {
    stroke: ink,
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("line", {
    x1: cx,
    y1: cy,
    x2: cx - 90,
    y2: cy + 70
  }), /*#__PURE__*/React.createElement("line", {
    x1: cx,
    y1: cy,
    x2: cx + 90,
    y2: cy + 70
  })), step >= 3 && /*#__PURE__*/React.createElement("g", {
    stroke: hair,
    strokeWidth: "1",
    fill: "none",
    opacity: step === 3 || step === 4 ? 1 : 0,
    style: {
      transition: "opacity .3s"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: cx - 150,
    y: cy - 150,
    width: "80",
    height: "46"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: `${cx - 146},${cy - 112} ${cx - 130},${cy - 128} ${cx - 112},${cy - 118} ${cx - 94},${cy - 138} ${cx - 74},${cy - 122}`,
    stroke: purple
  }), /*#__PURE__*/React.createElement("rect", {
    x: cx + 70,
    y: cy - 150,
    width: "80",
    height: "46"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: `${cx + 74},${cy - 116} ${cx + 92},${cy - 124} ${cx + 110},${cy - 110} ${cx + 128},${cy - 130} ${cx + 146},${cy - 120}`,
    stroke: purple
  })), step >= 1 && [[-90, 70], [90, 70]].map(([dx, dy], i) => {
    const isCheck = step >= 4;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("circle", {
      cx: cx + dx,
      cy: cy + dy,
      r: isCheck ? 18 : 12,
      fill: isCheck ? purple : ink,
      style: {
        transition: "all .3s"
      }
    }, step === 2 && /*#__PURE__*/React.createElement("animate", {
      attributeName: "r",
      values: "12;16;12",
      dur: "1.4s",
      repeatCount: "indefinite"
    })), isCheck && /*#__PURE__*/React.createElement("path", {
      d: `M ${cx + dx - 7} ${cy + dy} l 5 5 l 9 -10`,
      stroke: "#fff",
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "20",
    fill: ink
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy + 1,
    fill: "#fff",
    fontFamily: "var(--font-display)",
    fontSize: "20",
    textAnchor: "middle",
    dominantBaseline: "middle"
  }, "N"));
}
window.StepGraphic = StepGraphic;
