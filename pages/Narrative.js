// Narrative — the node story. The section PINS while you scroll: the text beats
// crossfade + rise in place (they don't scroll past), the right canvas animation
// advances (float → silo → constellation), and a 3-segment horizontal tracking
// bar fills to show how far through the section you are.
function Narrative() {
  const resolveAsset = p => window.__resources && window.__resources[p] || p;
  const sectionRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const beatRefs = React.useRef([]);
  const segRefs = React.useRef([]);
  const mobScRef = React.useRef(null);
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  const beats = [{
    k: "The talent",
    t: "The resources to solve our biggest challenges already exist.",
    b: "Founders. Researchers. Investors. Industry leaders. Advisors. Organizations. We have the talent, resources and capital to develop real-world digital solutions."
  }, {
    k: "The silos",
    t: "But those resources live in siloes, rarely pointed at the same problem.",
    b: "Ideas struggle to find capital. Investors struggle to find trusted opportunities. Experts struggle to find meaningful projects they can contribute to."
  }, {
    k: "The network",
    t: "Node Ventures builds the ecosystem to bring them together.",
    b: "We connect ventures, capital, and expertise through a collaborative platform designed to launch companies, manage funds, and accelerate practical digital innovation."
  }];
  // scroll-progress point where each beat is fully centered / read
  const CENTERS = [0.10, 0.52, 0.92];
  React.useEffect(() => {
    if (isMobile) return; // mobile shows a static image + stacked beats
    if (!canvasRef.current) return;
    const field = new window.NodeField(canvasRef.current, {
      mode: "narrative",
      count: 30,
      bg: "#F9FAF7",
      avatarBg: "#ece9e2",
      labelColor: "#6c6a64",
      containerTint: "58,58,60",
      containerFill: "#F9FAF7",
      containerFloor: "#F9FAF7",
      containerTop: "#F9FAF7",
      tones: {
        umber: "#9c988f"
      },
      avatarImages: ["photos/a1.jpg", "photos/a2.jpg", "photos/a3.jpg", "photos/a4.jpg", "photos/a5.jpg", "photos/a6.jpg", "photos/a7.jpg", "photos/a8.jpg", "photos/a9.jpg", "photos/a10.jpg", "photos/a11.jpg", "photos/a12.jpg", "photos/a13.jpg"]
    });
    const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? clamp(-rect.top, 0, total) / total : 0;

      // text beats: hold fully-opaque on a plateau, then a quick fade. The first
      // beat is already opaque when the section pins (no fade-in from blank).
      const HOLD = 0.15; // half-width of the full-opacity plateau (opaque + still)
      const FADE = 0.06; // quick fade once past the plateau
      beatRefs.current.forEach((node, i) => {
        if (!node) return;
        const d = p - CENTERS[i];
        const ad = Math.abs(d);
        const op = ad <= HOLD ? 1 : clamp(1 - (ad - HOLD) / FADE, 0, 1);
        const y = ad <= HOLD ? 0 : clamp(-Math.sign(d) * (ad - HOLD) * 260, -34, 34);
        node.style.opacity = op;
        node.style.transform = "translateY(" + y + "px)";
        node.style.pointerEvents = op > 0.5 ? "auto" : "none";
      });

      // 3-segment tracking bar — each segment fills across its third of scroll
      segRefs.current.forEach((node, i) => {
        if (!node) return;
        const f = clamp((p - i / 3) / (1 / 3), 0, 1);
        node.style.width = f * 100 + "%";
      });

      // Scroll(p) -> field-stage(fp) with HOLD plateaus so each stage SETTLES
      // while its beat is centered. Beats center at p≈0.10 / 0.52 / 0.92.
      //   fp 0.16 = float | fp 0.66 = in the jars | fp 1.0 = sphere
      const P = [0.00, 0.20, 0.42, 0.62, 0.84, 1.00];
      const F = [0.16, 0.16, 0.66, 0.66, 1.00, 1.00];
      let fp = F[F.length - 1];
      for (let i = 0; i < P.length - 1; i++) {
        if (p <= P[i + 1]) {
          const t = clamp((p - P[i]) / (P[i + 1] - P[i]), 0, 1);
          fp = F[i] + (F[i + 1] - F[i]) * t;
          break;
        }
      }
      field.setProgress(fp);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      field.destroy();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMobile]);
  if (isMobile) {
    const imgs = ["assets/narr-1-float.jpg", "assets/narr-2-silos.jpg", "assets/narr-3-network.jpg"];
    const nudge = dir => {
      const el = mobScRef.current;
      if (el) el.scrollBy({
        left: dir * el.clientWidth * 0.88,
        behavior: "smooth"
      });
    };
    const Arrow = ({
      dir
    }) => /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": dir < 0 ? "Previous" : "Next",
      onClick: () => nudge(dir),
      style: {
        width: 46,
        height: 46,
        display: "grid",
        placeItems: "center",
        background: "transparent",
        border: "1px dashed var(--color-muted)",
        cursor: "pointer",
        color: "var(--color-ink)",
        marginLeft: dir < 0 ? 0 : -1
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
      style: {
        transform: dir < 0 ? "rotate(180deg)" : "none"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    })));
    return /*#__PURE__*/React.createElement("section", {
      className: "nv-grid-band",
      style: {
        backgroundColor: "#F9FAF7",
        paddingTop: 56,
        paddingBottom: 60
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-band-inner"
    }, /*#__PURE__*/React.createElement("div", {
      ref: mobScRef,
      className: "nv-howwe-scroll"
    }, beats.map((bt, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "nv-howwe-card",
      style: {
        border: "1px solid var(--color-grid-line)",
        background: "var(--color-canvas)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 300,
        borderBottom: "1px solid var(--color-grid-line)",
        overflow: "hidden",
        background: "var(--color-canvas)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: resolveAsset(imgs[i]),
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-tag",
      style: {
        color: "var(--color-primary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, "[", String.fromCharCode(65 + i), "]"), " ", bt.k), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--h3-weight)",
        fontSize: "var(--h3-size)",
        lineHeight: "var(--h3-line)",
        letterSpacing: "var(--h3-track)",
        color: "var(--color-ink)",
        margin: "12px 0 0",
        textWrap: "balance"
      }
    }, bt.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--body-size)",
        lineHeight: "var(--body-line)",
        color: "var(--color-body)",
        margin: "12px 0 0"
      }
    }, bt.b)))))));
  }
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    className: "nv-grid-band",
    style: {
      position: "relative",
      backgroundColor: "#F9FAF7",
      height: "330vh",
      paddingTop: 0,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      height: "100vh",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner nv-narr-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-narr-text",
    style: {
      position: "relative",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-narr-beats",
    style: {
      position: "absolute",
      top: "44%",
      left: 0,
      right: 0,
      transform: "translateY(-50%)"
    }
  }, beats.map((bt, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    ref: el => beatRefs.current[i] = el,
    style: {
      position: i === 0 ? "relative" : "absolute",
      top: i === 0 ? "auto" : 0,
      left: 0,
      right: 0,
      opacity: 0,
      willChange: "opacity, transform"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-tag",
    style: {
      color: "var(--color-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "[", String.fromCharCode(65 + i), "]"), " ", bt.k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h3-weight)",
      fontSize: "var(--h3-size)",
      lineHeight: "var(--h3-line)",
      letterSpacing: "var(--h3-track)",
      color: "var(--color-ink)",
      margin: "14px 0 0",
      maxWidth: 640,
      textWrap: "balance"
    }
  }, bt.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-size)",
      lineHeight: "var(--body-line)",
      color: "var(--color-body)",
      margin: "14px 0 0",
      maxWidth: 420
    }
  }, bt.b))), /*#__PURE__*/React.createElement("div", {
    className: "nv-narr-track",
    style: {
      position: "absolute",
      top: "100%",
      marginTop: 26,
      left: 0,
      width: "min(420px, 62%)",
      display: "flex",
      gap: 10
    }
  }, beats.map((bt, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      letterSpacing: "0.08em",
      color: "var(--color-primary)",
      marginBottom: 9
    }
  }, String.fromCharCode(65 + i)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: "rgba(20,20,19,0.14)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: el => segRefs.current[i] = el,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "0%",
      background: "var(--color-primary)"
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "nv-narr-canvas",
    style: {
      position: "relative",
      width: "100%",
      height: "72vh"
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block",
      touchAction: "none"
    }
  })))));
}
window.Narrative = Narrative;
