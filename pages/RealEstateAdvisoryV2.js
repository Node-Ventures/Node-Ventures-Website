// RealEstateAdvisoryV2 — the redesigned Real Estate Advisory page (NOT yet approved).
// Generated from the approved-for-review Claude Design canvas (RealEstateAdvisory.dc.html).
// Published on an unlinked preview URL only — see HANDOFF.md.
// Page-only styles: pages/real-estate-advisory-v2.css (loaded only by the preview page).
class RealEstateAdvisoryV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vin: false,
      idx: 0,
      open: false,
      svc: [false, false, false, false]
    };
    this.setVenn = this.setVenn.bind(this);
  }
  setVenn(el) {
    if (!el || this._io) return;
    var self = this;
    if (typeof IntersectionObserver === 'undefined') {
      this._io = true;
      setTimeout(function () {
        self.setState({
          vin: true
        });
      }, 0);
      return;
    }
    this._io = new IntersectionObserver(function (entries) {
      if (entries[0] && entries[0].isIntersecting) {
        self.setState({
          vin: true
        });
        self._io.disconnect();
      }
    }, {
      threshold: 0.3
    });
    this._io.observe(el);
  }
  renderVals() {
    var v = this.state.vin;
    var self = this;
    // Case studies: one case at a time; "Read the case study" opens a pop-up.
    var N = 5;
    var i = typeof this.state.idx === 'number' ? this.state.idx : 0;
    if (!this._setPanel) {
      this._setPanel = function (el) {
        self.panel = el;
        if (el && el.focus) el.focus({
          preventScroll: true
        });
      };
      this._dlgKey = function (e) {
        if (e && e.key === 'Escape') self.setState({
          open: false
        });
      };
    }
    var go = function (k) {
      return function () {
        self.setState({
          idx: (k + N) % N
        });
      };
    };
    // On the design canvas the page is one very tall board, so the pop-up opens next to the button.
    var openCase = function (e) {
      var tg = e && e.currentTarget;
      var r = tg && tg.getBoundingClientRect ? tg.getBoundingClientRect() : null;
      var tall = (window.innerHeight || 0) > 1600;
      self.setState({
        open: true,
        tall: tall,
        top: tall && r ? Math.max(24, Math.round(r.top - 360)) : 24
      });
    };
    var cs = {
      c0: i === 0,
      c1: i === 1,
      c2: i === 2,
      c3: i === 3,
      c4: i === 4,
      tabId: 'cs-tab-' + i,
      counter: '0' + (i + 1),
      total: '0' + N,
      prev: go(i - 1),
      next: go(i + 1),
      pick0: go(0),
      pick1: go(1),
      pick2: go(2),
      pick3: go(3),
      pick4: go(4),
      open: !!this.state.open,
      dlgAlign: this.state.tall ? 'flex-start' : 'center',
      dlgPad: (this.state.tall ? this.state.top : 24) + 'px',
      setPanel: this._setPanel,
      dlgKey: this._dlgKey,
      openCase: openCase,
      closeCase: function () {
        self.setState({
          open: false
        });
      },
      nextCase: function () {
        if (self.panel) self.panel.scrollTop = 0;
        self.setState({
          idx: (i + 1) % N,
          open: true
        });
      }
    };
    for (var k = 0; k < N; k++) {
      cs['t' + k] = i === k ? 'var(--color-primary)' : 'var(--color-grid-line)';
      cs['tc' + k] = i === k ? 'var(--color-ink)' : 'var(--color-muted)';
    }
    // Services: accordions on phones (desktop CSS always shows everything)
    var svc = this.state.svc || [false, false, false, false];
    for (var s = 0; s < 4; s++) {
      cs['o' + s] = svc[s] ? 'true' : 'false';
      // the arrow/title toggles; tapping anywhere else on a closed card opens it
      cs['tog' + s] = function (n) {
        return function (e) {
          if (e && e.stopPropagation) e.stopPropagation();
          var next = (self.state.svc || [false, false, false, false]).slice();
          next[n] = !next[n];
          self.setState({
            svc: next
          });
        };
      }(s);
      cs['opn' + s] = function (n) {
        return function () {
          var cur = self.state.svc || [false, false, false, false];
          if (cur[n]) return;
          var next = cur.slice();
          next[n] = true;
          self.setState({
            svc: next
          });
        };
      }(s);
    }
    return Object.assign(cs, {
      setVenn: this.setVenn,
      t1: v ? 'translate(0px, 0px)' : 'translate(0px, -70px)',
      t2: v ? 'translate(0px, 0px)' : 'translate(-62px, 36px)',
      t3: v ? 'translate(0px, 0px)' : 'translate(62px, 36px)',
      lop: v ? 1 : 0,
      cop: v ? 1 : 0
    });
  }
  componentWillUnmount() {
    if (this._io && this._io.disconnect) this._io.disconnect();
  }
  render() {
    const d = this.renderVals();
    const href = window.NV_HREF || (() => "#");
    const IMG = "photos/real-estate-advisory/";
    return /*#__PURE__*/React.createElement("div", {
      id: "nv-page",
      className: "nv-rav2",
      style: {
        minHeight: "100vh",
        background: "var(--color-canvas)",
        color: "var(--color-ink)",
        fontFamily: "var(--font-body)",
        overflowX: "clip"
      }
    }, /*#__PURE__*/React.createElement(window.SiteNav, null), /*#__PURE__*/React.createElement("section", {
      className: "nv-ra-hero-sec",
      style: {
        position: "relative",
        overflow: "hidden",
        paddingTop: "96px",
        paddingBottom: "88px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-band-inner",
      style: {
        position: "relative",
        zIndex: "2"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      className: "nv-cp-hero-lower-dots"
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-2col",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "64px",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-label"
    }, "REAL ESTATE ADVISORY"), /*#__PURE__*/React.createElement("h1", {
      className: "nv-h1",
      style: {
        marginTop: "18px",
        maxWidth: "9.5em"
      }
    }, "Understand the asset. Then decide what to do with it."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg",
      style: {
        marginTop: "22px",
        maxWidth: "440px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "\"Hanken Grotesk\", -apple-system, \"system-ui\", \"Segoe UI\", Roboto, sans-serif"
      }
    }, "Node is an independent real estate advisory firm. We help property owners, investors and organizations understand what an asset is capable of, identify opportunities to protect and create value, and determine what to do next.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "12px",
        marginTop: "30px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "nv-btn nv-btn--primary nv-btn--lg",
      href: href("Contact")
    }, "Talk to an advisor"), /*#__PURE__*/React.createElement("a", {
      className: "nv-btn nv-btn--secondary nv-btn--lg",
      href: "#",
      target: "_blank",
      rel: "noopener"
    }, "Book a free 30-minute call"))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-hero-media"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-cp-hero-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-notch-tl nv-ph",
      style: {
        gridColumn: "1",
        gridRow: "1"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: IMG + "hero-office-building.webp",
      alt: "A dark-framed mid-rise office building on a city street corner in autumn",
      style: {
        objectPosition: "45% center"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "nv-ph",
      style: {
        gridColumn: "1",
        gridRow: "2"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: IMG + "hero-lakeshore-aerial.webp",
      alt: "Aerial view of a house among trees on a lakeshore",
      style: {
        objectPosition: "60% 42%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "nv-notch-br nv-ph",
      style: {
        gridColumn: "2",
        gridRow: "1 / span 2"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: IMG + "hero-advisor.webp",
      alt: "An advisor in a navy blazer explaining something to a client in a bright office",
      style: {
        objectPosition: "52% center"
      }
    }))), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-tags"
    }, /*#__PURE__*/React.createElement("li", {
      className: "nv-ra-tag"
    }, "MULTIDISCIPLINARY TEAM"), /*#__PURE__*/React.createElement("li", {
      className: "nv-ra-tag"
    }, "Independent advice"), /*#__PURE__*/React.createElement("li", {
      className: "nv-ra-tag"
    }, "PROPERTY INTELLIGENCE")))))), /*#__PURE__*/React.createElement("section", {
      className: "nv-ra-lede-sec",
      style: {
        position: "relative",
        zIndex: "2",
        paddingTop: "48px",
        paddingBottom: "72px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-band-inner",
      style: {
        position: "relative",
        zIndex: "1"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-intro",
      style: {
        marginTop: "0"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "nv-h3 nv-ra-intro-h"
    }, "Our advice starts with the asset, not the outcome."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg nv-ra-intro-p"
    }, "Every property has more than one possible future. The right answer depends on the asset, the market, the owner\u2019s objectives and the economics behind each option."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg nv-ra-intro-p"
    }, "Our role is to look across the possibilities, challenge the assumptions behind them and determine which direction creates the strongest case for the owner.")))), /*#__PURE__*/React.createElement("section", {
      className: "nv-ra-fit-sec",
      style: {
        position: "relative",
        zIndex: "2",
        paddingTop: "0",
        paddingBottom: "104px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-band-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-gf nv-ra-fit"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-gridlines",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-h nv-gf-top"
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-h nv-gf-bottom"
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-v nv-gf-v--first",
      style: {
        left: "0%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-v",
      style: {
        left: "33.333%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-v nv-gf-v--last",
      style: {
        left: "100%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nt",
      style: {
        left: "0%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nt",
      style: {
        left: "33.333%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nt",
      style: {
        left: "100%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nb",
      style: {
        left: "0%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nb",
      style: {
        left: "33.333%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nb",
      style: {
        left: "100%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "nv-2col nv-focus-boxes",
      style: {
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-cell",
      style: {
        padding: "40px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Who we work with"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Property owners")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Investors")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Developers")))), /*#__PURE__*/React.createElement("div", {
      className: "nv-cell",
      style: {
        padding: "40px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Every option stays on the table"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--2"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Hold")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Improve")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Refinance")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Reposition")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Develop")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Bring in a partner")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Buy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Sell")))))))), /*#__PURE__*/React.createElement("section", {
      className: "nv-dark nv-ra-venn-sec",
      style: {
        position: "relative",
        zIndex: "2",
        background: "var(--color-surface-dark)",
        color: "var(--color-on-dark)",
        paddingTop: "104px",
        paddingBottom: "92px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-band-inner",
      style: {
        position: "relative",
        zIndex: "1"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-venn-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-venn-copy"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-label",
      style: {
        color: "var(--color-primary-on-dark)"
      }
    }, "BETTER ASSET STRATEGY"), /*#__PURE__*/React.createElement("h2", {
      className: "nv-h2",
      style: {
        marginTop: "16px",
        color: "var(--color-on-dark)",
        maxWidth: "13em",
        width: "479px"
      }
    }, "Three strengths combined to give you clearer direction."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg",
      style: {
        marginTop: "20px",
        maxWidth: "460px",
        color: "var(--color-on-dark-soft)",
        textWrap: "pretty"
      }
    }, "Different disciplines, no stake in the outcome and better property data. Together, they let us examine an asset from more angles and build a stronger case for what should happen next."), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-venn-btn",
      style: {
        marginTop: "32px"
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "nv-btn nv-btn--primary",
      href: href("Contact")
    }, "Talk to an advisor")))), /*#__PURE__*/React.createElement("div", {
      ref: d.setVenn,
      className: "nv-venn"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "152 79 496 474",
      role: "img",
      "aria-label": "Venn diagram: a multidisciplinary team, independent advice and property intelligence combine into better asset strategy",
      style: {
        display: "block",
        width: "100%",
        height: "auto",
        overflow: "visible"
      }
    }, /*#__PURE__*/React.createElement("g", {
      className: "nv-venn-move",
      style: {
        transform: d.t1
      }
    }, /*#__PURE__*/React.createElement("circle", {
      className: "nv-venn-c",
      cx: "400",
      cy: "242",
      r: "160"
    })), /*#__PURE__*/React.createElement("g", {
      className: "nv-venn-move",
      style: {
        transform: d.t2
      }
    }, /*#__PURE__*/React.createElement("circle", {
      className: "nv-venn-c",
      cx: "315",
      cy: "389",
      r: "160"
    })), /*#__PURE__*/React.createElement("g", {
      className: "nv-venn-move",
      style: {
        transform: d.t3
      }
    }, /*#__PURE__*/React.createElement("circle", {
      className: "nv-venn-c",
      cx: "485",
      cy: "389",
      r: "160"
    })), /*#__PURE__*/React.createElement("g", {
      className: "nv-venn-lab nv-venn-fade",
      style: {
        opacity: d.lop
      }
    }, /*#__PURE__*/React.createElement("path", {
      className: "nv-venn-i",
      transform: "translate(386 122) scale(0.109375)",
      d: "M243.6,148.8a6,6,0,0,1-8.4-1.2A53.58,53.58,0,0,0,192,126a6,6,0,0,1,0-12,26,26,0,1,0-25.18-32.5,6,6,0,0,1-11.62-3,38,38,0,1,1,59.91,39.63A65.69,65.69,0,0,1,244.8,140.4,6,6,0,0,1,243.6,148.8ZM189.19,213a6,6,0,0,1-2.19,8.2,5.9,5.9,0,0,1-3,.81,6,6,0,0,1-5.2-3,59,59,0,0,0-101.62,0,6,6,0,1,1-10.38-6A70.1,70.1,0,0,1,103,182.55a46,46,0,1,1,50.1,0A70.1,70.1,0,0,1,189.19,213ZM128,178a34,34,0,1,0-34-34A34,34,0,0,0,128,178ZM70,120a6,6,0,0,0-6-6A26,26,0,1,1,89.18,81.49a6,6,0,1,0,11.62-3,38,38,0,1,0-59.91,39.63A65.69,65.69,0,0,0,11.2,140.4a6,6,0,1,0,9.6,7.2A53.58,53.58,0,0,1,64,126,6,6,0,0,0,70,120Z"
    }), /*#__PURE__*/React.createElement("text", {
      x: "400",
      y: "178",
      textAnchor: "middle",
      className: "nv-venn-t"
    }, "Multidisciplinary"), /*#__PURE__*/React.createElement("text", {
      x: "400",
      y: "202",
      textAnchor: "middle",
      className: "nv-venn-t"
    }, "team"), /*#__PURE__*/React.createElement("path", {
      className: "nv-venn-i",
      transform: "translate(234 382) scale(0.109375)",
      d: "M216,82H182V48a14,14,0,0,0-14-14H40A14,14,0,0,0,26,48V176a6,6,0,0,0,3.42,5.41A5.86,5.86,0,0,0,32,182a6,6,0,0,0,3.77-1.33L73.71,150H74v34a14,14,0,0,0,14,14h94.29l37.94,30.67A6,6,0,0,0,224,230a5.86,5.86,0,0,0,2.58-.59A6,6,0,0,0,230,224V96A14,14,0,0,0,216,82ZM71.58,138a6,6,0,0,0-3.77,1.33L38,163.43V48a2,2,0,0,1,2-2H168a2,2,0,0,1,2,2v88a2,2,0,0,1-2,2ZM218,211.43l-29.81-24.1a6,6,0,0,0-3.770-1.33H88a2,2,0,0,1-2-2V150h82a14,14,0,0,0,14-14V94h34a2,2,0,0,1,2,2Z"
    }), /*#__PURE__*/React.createElement("text", {
      x: "248",
      y: "438",
      textAnchor: "middle",
      className: "nv-venn-t"
    }, "Independent"), /*#__PURE__*/React.createElement("text", {
      x: "248",
      y: "462",
      textAnchor: "middle",
      className: "nv-venn-t"
    }, "advice"), /*#__PURE__*/React.createElement("path", {
      className: "nv-venn-i",
      transform: "translate(538 382) scale(0.109375)",
      d: "M190.37,170.62A86.27,86.27,0,0,0,222,102c-1-44.68-36.76-81.51-81.34-83.86A86,86,0,0,0,50,102.51l-22.690,43.6c-.07.13-.13.26-.19.4a14,14,0,0,0,6.61,18l.18.09,24.08,11V208a14,14,0,0,0,14,14h48a6,6,0,0,0,0-12H72a2,2,0,0,1-2-2V171.81a6,6,0,0,0-3.5-5.46L39,153.78a2,2,0,0,1-.93-2.4l23.21-44.61A6,6,0,0,0,62,104a74.05,74.050,0,0,1,60-72.68V50.84a22,22,0,1,0,12,0V30.05c2-.05,4-.05,6,.06A74.29,74.29,0,0,1,206.63,82H184a6,6,0,0,0-4.61,2.16L152.94,115.9a22.06,22.06,0,1,0,9.21,7.69L186.81,94h22.5a72.44,72.44,0,0,1,.67,8.26A74.24,74.24,0,0,1,180.4,163.2a6,6,0,0,0-2.35,5.54l8,64A6,6,0,0,0,192,238a6.3,6.3,0,0,0,.75-.05,6,6,0,0,0,5.21-6.7ZM138,72a10,10,0,1,1-10-10A10,10,0,0,1,138,72Zm6,74a10,10,0,1,1,10-10A10,10,0,0,1,144,146Z"
    }), /*#__PURE__*/React.createElement("text", {
      x: "552",
      y: "438",
      textAnchor: "middle",
      className: "nv-venn-t"
    }, "Property"), /*#__PURE__*/React.createElement("text", {
      x: "552",
      y: "462",
      textAnchor: "middle",
      className: "nv-venn-t"
    }, "intelligence")), /*#__PURE__*/React.createElement("g", {
      className: "nv-venn-fade nv-venn-centre",
      style: {
        opacity: d.cop
      }
    }, /*#__PURE__*/React.createElement("text", {
      x: "400",
      y: "323",
      textAnchor: "middle",
      className: "nv-venn-m"
    }, "Better"), /*#__PURE__*/React.createElement("text", {
      x: "400",
      y: "343",
      textAnchor: "middle",
      className: "nv-venn-m"
    }, "asset"), /*#__PURE__*/React.createElement("text", {
      x: "400",
      y: "363",
      textAnchor: "middle",
      className: "nv-venn-m"
    }, "strategy"))), /*#__PURE__*/React.createElement("ul", {
      className: "nv-venn-list"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Multidisciplinary team")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Independent advice")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Property intelligence")), /*#__PURE__*/React.createElement("li", {
      className: "nv-venn-list-c"
    }, /*#__PURE__*/React.createElement("strong", null, "Better asset strategy"))))), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf nv-gf--dark nv-swipe nv-ra-pillars"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-gridlines",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-h nv-gf-top"
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-h nv-gf-bottom"
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-v nv-gf-v--first",
      style: {
        left: "0%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-v",
      style: {
        left: "33.333%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-v",
      style: {
        left: "66.667%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-v nv-gf-v--last",
      style: {
        left: "100%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nt",
      style: {
        left: "0%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nt",
      style: {
        left: "33.333%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nt",
      style: {
        left: "66.667%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nt",
      style: {
        left: "100%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nb",
      style: {
        left: "0%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nb",
      style: {
        left: "33.333%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nb",
      style: {
        left: "66.667%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nb",
      style: {
        left: "100%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "nv-2col nv-focus-boxes",
      style: {
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-cell",
      style: {
        padding: "40px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-pillar-top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker",
      style: {
        color: "var(--color-primary-on-dark)"
      }
    }, "Multidisciplinary team"), /*#__PURE__*/React.createElement("svg", {
      className: "nv-ra-pillar-i",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M243.6,148.8a6,6,0,0,1-8.4-1.2A53.58,53.58,0,0,0,192,126a6,6,0,0,1,0-12,26,26,0,1,0-25.18-32.5,6,6,0,0,1-11.62-3,38,38,0,1,1,59.91,39.63A65.69,65.69,0,0,1,244.8,140.4,6,6,0,0,1,243.6,148.8ZM189.19,213a6,6,0,0,1-2.19,8.2,5.9,5.9,0,0,1-3,.81,6,6,0,0,1-5.2-3,59,59,0,0,0-101.62,0,6,6,0,1,1-10.38-6A70.1,70.1,0,0,1,103,182.55a46,46,0,1,1,50.1,0A70.1,70.1,0,0,1,189.19,213ZM128,178a34,34,0,1,0-34-34A34,34,0,0,0,128,178ZM70,120a6,6,0,0,0-6-6A26,26,0,1,1,89.18,81.49a6,6,0,1,0,11.62-3,38,38,0,1,0-59.91,39.63A65.69,65.69,0,0,0,11.2,140.4a6,6,0,1,0,9.6,7.2A53.58,53.58,0,0,1,64,126,6,6,0,0,0,70,120Z"
    }))), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h4",
      style: {
        marginTop: "20px",
        color: "var(--color-on-dark)"
      }
    }, "See more than the market can tell you."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "14px",
        color: "var(--color-on-dark-soft)"
      }
    }, "Our experts come from different fields, not just real estate, planning or development. Each asset is reviewed through several lenses, so constraints, risks and opportunities come to the surface that might otherwise be missed."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg",
      style: {
        marginTop: "28px",
        color: "var(--color-on-dark)"
      }
    }, "Disciplines at the table"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--dark"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Planning")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Development")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Market research")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Appraisals")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Asset cashflow analysis")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Asset management")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Property management")))), /*#__PURE__*/React.createElement("div", {
      className: "nv-cell",
      style: {
        padding: "40px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-pillar-top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker",
      style: {
        color: "var(--color-primary-on-dark)"
      }
    }, "Independent advice"), /*#__PURE__*/React.createElement("svg", {
      className: "nv-ra-pillar-i",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M216,82H182V48a14,14,0,0,0-14-14H40A14,14,0,0,0,26,48V176a6,6,0,0,0,3.42,5.41A5.86,5.86,0,0,0,32,182a6,6,0,0,0,3.77-1.33L73.71,150H74v34a14,14,0,0,0,14,14h94.29l37.94,30.67A6,6,0,0,0,224,230a5.86,5.86,0,0,0,2.58-.59A6,6,0,0,0,230,224V96A14,14,0,0,0,216,82ZM71.58,138a6,6,0,0,0-3.77,1.33L38,163.43V48a2,2,0,0,1,2-2H168a2,2,0,0,1,2,2v88a2,2,0,0,1-2,2ZM218,211.43l-29.81-24.1a6,6,0,0,0-3.770-1.33H88a2,2,0,0,1-2-2V150h82a14,14,0,0,0,14-14V94h34a2,2,0,0,1,2,2Z"
    }))), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h4",
      style: {
        marginTop: "20px",
        color: "var(--color-on-dark)"
      }
    }, "Recommendations should work for you, not for us."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "14px",
        color: "var(--color-on-dark-soft)"
      }
    }, "A broker may focus on a transaction. A planner on approvals. A developer on what can be built. Unlike brokerage-led firms, we have no incentive to push a property in any direction, so we compare the options on their merits."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg",
      style: {
        marginTop: "28px",
        color: "var(--color-on-dark)"
      }
    }, "How we stay independent"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--dark"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Paid for advice, not outcomes: no commissions or success fees.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "We don\u2019t list, broker or develop the properties we advise on.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Any potential conflict of interest is disclosed before work begins.")))), /*#__PURE__*/React.createElement("div", {
      className: "nv-cell",
      style: {
        padding: "40px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-pillar-top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker",
      style: {
        color: "var(--color-primary-on-dark)"
      }
    }, "Property intelligence"), /*#__PURE__*/React.createElement("svg", {
      className: "nv-ra-pillar-i",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M190.37,170.62A86.27,86.27,0,0,0,222,102c-1-44.68-36.76-81.51-81.34-83.86A86,86,0,0,0,50,102.51l-22.690,43.6c-.07.13-.13.26-.19.4a14,14,0,0,0,6.61,18l.18.09,24.08,11V208a14,14,0,0,0,14,14h48a6,6,0,0,0,0-12H72a2,2,0,0,1-2-2V171.81a6,6,0,0,0-3.5-5.46L39,153.78a2,2,0,0,1-.93-2.4l23.21-44.61A6,6,0,0,0,62,104a74.05,74.050,0,0,1,60-72.68V50.84a22,22,0,1,0,12,0V30.05c2-.05,4-.05,6,.06A74.29,74.29,0,0,1,206.63,82H184a6,6,0,0,0-4.61,2.16L152.94,115.9a22.06,22.06,0,1,0,9.21,7.69L186.81,94h22.5a72.44,72.44,0,0,1,.67,8.26A74.24,74.24,0,0,1,180.4,163.2a6,6,0,0,0-2.35,5.54l8,64A6,6,0,0,0,192,238a6.3,6.3,0,0,0,.75-.05,6,6,0,0,0,5.21-6.7ZM138,72a10,10,0,1,1-10-10A10,10,0,0,1,138,72Zm6,74a10,10,0,1,1,10-10A10,10,0,0,1,144,146Z"
    }))), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h4",
      style: {
        marginTop: "20px",
        color: "var(--color-on-dark)"
      }
    }, "Data reveals opportunity. Experience gives it meaning."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "14px",
        color: "var(--color-on-dark-soft)"
      }
    }, "Our property intelligence platform brings the planning rules for a property together in one place. Research that usually means chasing dozens of PDFs and maps becomes faster and more complete, so our advisors spend their time on judgment."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg",
      style: {
        marginTop: "28px",
        color: "var(--color-on-dark)"
      }
    }, "What it means for you"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--dark"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Faster answers on research-heavy questions")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "A more complete picture of every site")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "More time interpreting, less time gathering")))))))), /*#__PURE__*/React.createElement("section", {
      className: "nv-ra-svc-sec",
      style: {
        position: "relative",
        zIndex: "2",
        paddingTop: "104px",
        paddingBottom: "64px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-band-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-label"
    }, "OUR SERVICES"), /*#__PURE__*/React.createElement("h2", {
      className: "nv-h2",
      style: {
        marginTop: "16px",
        maxWidth: "14em"
      }
    }, "Real estate advisory services. Customized to your needs."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg",
      style: {
        marginTop: "20px",
        maxWidth: "760px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "One asset can raise questions about performance, development, investment, financing and the market at the same time. But the objective remains the same: understand the asset, identify where value can be protected or created, and determine what deserves to happen next."), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf nv-ra-svc",
      style: {
        marginTop: "48px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-gridlines",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-h nv-gf-top"
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-h nv-gf-bottom"
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-v nv-gf-v--first",
      style: {
        left: "0%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-v nv-gf-v--last",
      style: {
        left: "100%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nt",
      style: {
        left: "0%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nt",
      style: {
        left: "100%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nb",
      style: {
        left: "0%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nb",
      style: {
        left: "100%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "nv-focus-boxes",
      style: {
        gridTemplateColumns: "minmax(0, 1fr)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-cell nv-ra-svc-row",
      "data-open": d.o0,
      onClick: d.opn0
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-svc-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "nv-ra-svc-head",
      "aria-expanded": d.o0,
      onClick: d.tog0
    }, /*#__PURE__*/React.createElement("h3", {
      className: "nv-h3"
    }, "Owner advisory"), /*#__PURE__*/React.createElement("svg", {
      className: "nv-ra-svc-chev",
      viewBox: "0 0 10 10",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1.5 3.5 L5 7 L8.5 3.5",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.1",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg nv-ra-svc-sub",
      style: {
        marginTop: "20px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "Understand what you own, and what it could be doing for you. A broader look at an existing property, from how it performs today to where additional value or optionality may exist.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Questions we answer"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-list",
      style: {
        marginTop: "16px"
      }
    }, /*#__PURE__*/React.createElement("li", null, "Is the property performing as well as it should?"), /*#__PURE__*/React.createElement("li", null, "Where could income, operations or value be improved?"), /*#__PURE__*/React.createElement("li", null, "Should you hold, improve, refinance, reposition or sell?"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Services"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--svc"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Property Screening")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Property Potential Analysis")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Investment & Hold/Sell Analysis")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Refinancing & Restructuring Review")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Property Financial Health Review")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Lease & Rent Roll Analysis")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Income & Expense Optimization")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Asset Management Planning & Advisory")))))), /*#__PURE__*/React.createElement("div", {
      className: "nv-cell nv-ra-svc-row nv-row2",
      "data-open": d.o1,
      onClick: d.opn1
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-svc-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "nv-ra-svc-head",
      "aria-expanded": d.o1,
      onClick: d.tog1
    }, /*#__PURE__*/React.createElement("h3", {
      className: "nv-h3"
    }, "Investment & development"), /*#__PURE__*/React.createElement("svg", {
      className: "nv-ra-svc-chev",
      viewBox: "0 0 10 10",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1.5 3.5 L5 7 L8.5 3.5",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.1",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg nv-ra-svc-sub",
      style: {
        marginTop: "20px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "Assess the full opportunity before you commit to it. For investors and developers weighing acquisitions, development potential and repositioning opportunities before moving forward.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Questions we answer"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-list",
      style: {
        marginTop: "16px"
      }
    }, /*#__PURE__*/React.createElement("li", null, "Is the property worth acquiring?"), /*#__PURE__*/React.createElement("li", null, "What could the site or building become?"), /*#__PURE__*/React.createElement("li", null, "Does the proposed strategy make economic sense?"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Services"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--svc"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Development Feasibility Study")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Zoning Confirmation Support")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Adaptive Reuse & Conversion Study")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Highest & Best Use Analysis")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Construction Budget Review")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Project Recovery Analysis")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Acquisition Underwriting & Due Diligence")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Commercial Transaction Support for Agents")))))), /*#__PURE__*/React.createElement("div", {
      className: "nv-cell nv-ra-svc-row nv-row2",
      "data-open": d.o2,
      onClick: d.opn2
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-svc-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "nv-ra-svc-head",
      "aria-expanded": d.o2,
      onClick: d.tog2
    }, /*#__PURE__*/React.createElement("h3", {
      className: "nv-h3"
    }, "Portfolio advisory"), /*#__PURE__*/React.createElement("svg", {
      className: "nv-ra-svc-chev",
      viewBox: "0 0 10 10",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1.5 3.5 L5 7 L8.5 3.5",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.1",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg nv-ra-svc-sub",
      style: {
        marginTop: "20px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "Know where your attention and capital can have the greatest impact. For owners and organizations comparing assets, setting priorities and uncovering opportunities across a portfolio.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Questions we answer"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-list",
      style: {
        marginTop: "16px"
      }
    }, /*#__PURE__*/React.createElement("li", null, "Which assets need attention first?"), /*#__PURE__*/React.createElement("li", null, "Where could capital create the most value?"), /*#__PURE__*/React.createElement("li", null, "Which properties are underperforming or carrying risk?"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Services"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--svc"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Portfolio Baseline Review")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Portfolio Performance Review")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Portfolio Optimization Strategy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Capital Allocation & Prioritization")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Independent Portfolio Review")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Portfolio Monitoring & Change Review")))))), /*#__PURE__*/React.createElement("div", {
      className: "nv-cell nv-ra-svc-row nv-row2",
      "data-open": d.o3,
      onClick: d.opn3
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-svc-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "nv-ra-svc-head",
      "aria-expanded": d.o3,
      onClick: d.tog3
    }, /*#__PURE__*/React.createElement("h3", {
      className: "nv-h3"
    }, "Market research"), /*#__PURE__*/React.createElement("svg", {
      className: "nv-ra-svc-chev",
      viewBox: "0 0 10 10",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1.5 3.5 L5 7 L8.5 3.5",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.1",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg nv-ra-svc-sub",
      style: {
        marginTop: "20px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "Put the property in the context of the market around it. Demand, competition, rents and location, examined to test the market assumptions behind a property or strategy.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Questions we answer"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-list",
      style: {
        marginTop: "16px"
      }
    }, /*#__PURE__*/React.createElement("li", null, "What does the market currently support?"), /*#__PURE__*/React.createElement("li", null, "How strong is demand for the proposed use?"), /*#__PURE__*/React.createElement("li", null, "How does the asset compare with the competition?"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Services"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--svc"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Property & Business Market Study")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Location Suitability Study")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Rent & Leasing Study")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Demand & Competitive Analysis")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Market Entry & Expansion Analysis")))))))))), /*#__PURE__*/React.createElement("section", {
      id: "work",
      className: "nv-ra-cs-sec",
      "aria-labelledby": "work-title",
      style: {
        position: "relative",
        zIndex: "2",
        paddingTop: "24px",
        paddingBottom: "72px",
        scrollMarginTop: "64px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-band-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-head"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: "0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-label"
    }, "Case studies"), /*#__PURE__*/React.createElement("h2", {
      id: "work-title",
      className: "nv-h2",
      style: {
        marginTop: "16px"
      }
    }, "See the work behind the advice.")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-nav"
    }, /*#__PURE__*/React.createElement("span", {
      className: "nv-tag",
      style: {
        marginRight: "20px"
      }
    }, d.counter, " / ", d.total), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "nv-arrow",
      "aria-label": "Previous case study",
      onClick: d.prev
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      style: {
        transform: "rotate(180deg)"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "nv-arrow",
      "aria-label": "Next case study",
      onClick: d.next
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
      role: "tablist",
      "aria-label": "Case studies",
      className: "nv-ra-cs-tabs"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      role: "tab",
      id: "cs-tab-0",
      "aria-selected": d.c0,
      "aria-controls": "case-slide",
      onClick: d.pick0,
      className: "nv-body-sm nv-ra-cs-tab",
      style: {
        color: "var(--color-muted)"
      }
    }, "Development feasibility"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      role: "tab",
      id: "cs-tab-1",
      "aria-selected": d.c1,
      "aria-controls": "case-slide",
      onClick: d.pick1,
      className: "nv-body-sm nv-ra-cs-tab",
      style: {
        color: "var(--color-muted)"
      }
    }, "Seniors housing"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      role: "tab",
      id: "cs-tab-2",
      "aria-selected": d.c2,
      "aria-controls": "case-slide",
      onClick: d.pick2,
      className: "nv-body-sm nv-ra-cs-tab",
      style: {
        color: "var(--color-muted)"
      }
    }, "Market study"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      role: "tab",
      id: "cs-tab-3",
      "aria-selected": d.c3,
      "aria-controls": "case-slide",
      onClick: d.pick3,
      className: "nv-body-sm nv-ra-cs-tab",
      style: {
        color: "var(--color-muted)"
      }
    }, "Site suitability"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      role: "tab",
      id: "cs-tab-4",
      "aria-selected": d.c4,
      "aria-controls": "case-slide",
      onClick: d.pick4,
      className: "nv-body-sm nv-ra-cs-tab",
      style: {
        color: "var(--color-muted)"
      }
    }, "Property potential")), /*#__PURE__*/React.createElement("div", {
      id: "case-slide",
      role: "tabpanel",
      "aria-labelledby": d.tabId,
      className: "nv-ra-cs-box",
      style: {
        marginTop: "20px"
      }
    }, d.c2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-slide"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: "0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "nv-kicker"
    }, "Market study"), /*#__PURE__*/React.createElement("span", {
      className: "nv-body-sm",
      style: {
        color: "var(--color-body)"
      }
    }, "Chicago, Illinois")), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h3",
      style: {
        marginTop: "14px",
        textWrap: "balance"
      }
    }, "Sizing up the parking market around O\u2019Hare."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Parking operators mapped within 7 km"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "16")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Estimated parking spaces"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "~51,000"))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: d.openCase,
      className: "nv-btn nv-btn--primary nv-btn--lg",
      style: {
        marginTop: "32px"
      }
    }, "Read the case study", /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      width: "16",
      height: "12",
      viewBox: "0 0 18 12",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 6h15M12 1l5 5-5 5"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-media nv-notch-tl"
    }, /*#__PURE__*/React.createElement("img", {
      src: IMG + "case-market-study-map.webp",
      alt: "",
      style: {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        opacity: "0.8"
      }
    }), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 560 440",
      role: "img",
      "aria-label": "Street map of the area around O\\u2019Hare, marked with a plane icon, with the off-airport parking operators within 7 km each shown at its real location as a circle sized by number of spaces",
      style: {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "cs-scrim-mkt",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0",
      stopColor: "#141413",
      stopOpacity: "0"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "1",
      stopColor: "#141413",
      stopOpacity: "0.92"
    }))), /*#__PURE__*/React.createElement("rect", {
      x: "0",
      y: "352",
      width: "560",
      height: "88",
      fill: "url(#cs-scrim-mkt)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "280",
      cy: "228",
      r: "180",
      fill: "none",
      stroke: "rgba(185,169,255,0.95)",
      strokeWidth: "2.5",
      strokeDasharray: "8 7"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "280",
      cy: "228",
      r: "120",
      fill: "none",
      stroke: "rgba(185,169,255,0.8)",
      strokeWidth: "2.25",
      strokeDasharray: "8 7"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "280",
      cy: "228",
      r: "60",
      fill: "none",
      stroke: "rgba(185,169,255,0.65)",
      strokeWidth: "2",
      strokeDasharray: "8 7"
    }), /*#__PURE__*/React.createElement("text", {
      x: "280",
      y: "38",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.8",
      fill: "#a09d96",
      stroke: "#141413",
      strokeWidth: "3",
      strokeLinejoin: "round",
      paintOrder: "stroke"
    }, "7 KM"), /*#__PURE__*/React.createElement("path", {
      d: "M0 -13 C1.1 -13 1.7 -12 1.7 -10.6 L1.7 -3.2 L12 3.2 L12 5.4 L1.7 2.2 L1.7 8.2 L5.4 11 L5.4 12.6 L0 11.4 L-5.4 12.6 L-5.4 11 L-1.7 8.2 L-1.7 2.2 L-12 5.4 L-12 3.2 L-1.7 -3.2 L-1.7 -10.6 C-1.7 -12 -1.1 -13 0 -13 Z",
      transform: "translate(280 228) rotate(45) scale(1.6)",
      fill: "#faf9f5",
      stroke: "#141413",
      strokeWidth: "2.5",
      strokeLinejoin: "round",
      paintOrder: "stroke"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "rgba(116,83,255,0.6)",
      stroke: "#b9a9ff",
      strokeWidth: "1.2"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "322.3",
      cy: "181.3",
      r: "22.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "352.4",
      cy: "236.2",
      r: "22.3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "371.9",
      cy: "198.8",
      r: "14.7"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "312.8",
      cy: "290.6",
      r: "9.7"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "342.7",
      cy: "261.6",
      r: "6.8"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "319",
      cy: "304.7",
      r: "6.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "321.1",
      cy: "313.9",
      r: "5.8"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "369.3",
      cy: "237.1",
      r: "5.8"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "366.7",
      cy: "252.4",
      r: "5.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "377.6",
      cy: "200",
      r: "5.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "312.8",
      cy: "287.9",
      r: "3.9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "320.9",
      cy: "293.9",
      r: "3.7"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "321",
      cy: "306.9",
      r: "3.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "320.6",
      cy: "310.6",
      r: "3.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "319.9",
      cy: "169.1",
      r: "3.5"
    })), /*#__PURE__*/React.createElement("text", {
      x: "280",
      y: "266",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.8",
      fill: "#faf9f5",
      stroke: "#141413",
      strokeWidth: "3",
      strokeLinejoin: "round",
      paintOrder: "stroke"
    }, "O\u2019HARE"), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "410",
      r: "5",
      fill: "rgba(116,83,255,0.6)",
      stroke: "#b9a9ff",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("text", {
      x: "46",
      y: "414",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "CIRCLE SIZE = SPACES"), /*#__PURE__*/React.createElement("text", {
      x: "544",
      y: "414",
      textAnchor: "end",
      fontFamily: "'Hanken Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontSize: "8.5",
      fill: "#a09d96"
    }, "Map: Esri, HERE, Garmin, \xA9 OpenStreetMap contributors, GIS user community"))))), d.c0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-slide"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: "0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "nv-kicker"
    }, "Development feasibility"), /*#__PURE__*/React.createElement("span", {
      className: "nv-body-sm",
      style: {
        color: "var(--color-body)"
      }
    }, "Barrie, Ontario")), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h3",
      style: {
        marginTop: "14px",
        textWrap: "balance"
      }
    }, "More homes from the same two lots."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Units in the new concept, up from 46"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "60")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Units possible with two more storeys"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "84"))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: d.openCase,
      className: "nv-btn nv-btn--primary nv-btn--lg",
      style: {
        marginTop: "32px"
      }
    }, "Read the case study", /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      width: "16",
      height: "12",
      viewBox: "0 0 18 12",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 6h15M12 1l5 5-5 5"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-media nv-notch-tl"
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      className: "nv-ra-cs-dots"
    }), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 560 440",
      role: "img",
      "aria-label": "Building elevation: six storeys with 60 units, with two more storeys shown dashed for 84 units",
      style: {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
      id: "cs-win-a",
      x: "190",
      y: "152",
      width: "32",
      height: "38",
      patternUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "11",
      width: "14",
      height: "16",
      fill: "rgba(250,249,245,0.22)"
    }))), /*#__PURE__*/React.createElement("line", {
      x1: "70",
      y1: "380",
      x2: "490",
      y2: "380",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "rgba(116,83,255,0.28)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "190",
      y: "342",
      width: "160",
      height: "38"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "190",
      y: "304",
      width: "160",
      height: "38"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "190",
      y: "266",
      width: "160",
      height: "38"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "190",
      y: "228",
      width: "160",
      height: "38"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "190",
      y: "190",
      width: "160",
      height: "38"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "190",
      y: "152",
      width: "160",
      height: "38"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "190",
      y: "152",
      width: "160",
      height: "228",
      fill: "url(#cs-win-a)"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1",
      strokeDasharray: "5 5"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "190",
      y: "114",
      width: "160",
      height: "38"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "190",
      y: "76",
      width: "160",
      height: "38"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      stroke: "rgba(250,249,245,0.5)",
      strokeWidth: "1"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M368 154 h8 v224 h-8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M368 78 h8 v72 h-8"
    })), /*#__PURE__*/React.createElement("text", {
      x: "390",
      y: "262",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "6 STOREYS"), /*#__PURE__*/React.createElement("text", {
      x: "390",
      y: "282",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "60 UNITS"), /*#__PURE__*/React.createElement("text", {
      x: "390",
      y: "110",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#b9a9ff"
    }, "+2 STOREYS"), /*#__PURE__*/React.createElement("text", {
      x: "390",
      y: "130",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#b9a9ff"
    }, "84 UNITS"), /*#__PURE__*/React.createElement("text", {
      x: "190",
      y: "408",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "EARLIER DESIGN: 46 UNITS"))))), d.c1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-slide"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: "0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "nv-kicker"
    }, "Seniors housing"), /*#__PURE__*/React.createElement("span", {
      className: "nv-body-sm",
      style: {
        color: "var(--color-body)"
      }
    }, "Toronto, Ontario")), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h3",
      style: {
        marginTop: "14px",
        textWrap: "balance"
      }
    }, "Finding the right size for a retirement residence."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Suites and rooms across three levels of care"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "279")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Building heights tested"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "3"))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: d.openCase,
      className: "nv-btn nv-btn--primary nv-btn--lg",
      style: {
        marginTop: "32px"
      }
    }, "Read the case study", /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      width: "16",
      height: "12",
      viewBox: "0 0 18 12",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 6h15M12 1l5 5-5 5"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-media nv-notch-tl"
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      className: "nv-ra-cs-dots"
    }), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 560 440",
      role: "img",
      "aria-label": "Three building heights tested: 8, 9 and 10 storeys. The 9-storey option is highlighted, with independent living, assisted living, memory care and amenity floors",
      style: {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: "40",
      y: "26",
      width: "10",
      height: "10",
      fill: "rgba(185,169,255,0.38)"
    }), /*#__PURE__*/React.createElement("text", {
      x: "58",
      y: "35",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "INDEPENDENT LIVING"), /*#__PURE__*/React.createElement("rect", {
      x: "40",
      y: "46",
      width: "10",
      height: "10",
      fill: "#9b86ff"
    }), /*#__PURE__*/React.createElement("text", {
      x: "58",
      y: "55",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "ASSISTED LIVING"), /*#__PURE__*/React.createElement("rect", {
      x: "40",
      y: "66",
      width: "10",
      height: "10",
      fill: "#7453ff"
    }), /*#__PURE__*/React.createElement("text", {
      x: "58",
      y: "75",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "MEMORY CARE"), /*#__PURE__*/React.createElement("rect", {
      x: "40",
      y: "86",
      width: "10",
      height: "10",
      fill: "rgba(250,249,245,0.22)"
    }), /*#__PURE__*/React.createElement("text", {
      x: "58",
      y: "95",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "AMENITY AND SERVICES"), /*#__PURE__*/React.createElement("line", {
      x1: "56",
      y1: "392",
      x2: "504",
      y2: "392",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      stroke: "rgba(160,157,150,0.7)",
      strokeWidth: "1"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "364",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "336",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "308",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "280",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "252",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "224",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "196",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "168",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "376",
      y: "364",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "376",
      y: "336",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "376",
      y: "308",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "376",
      y: "280",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "376",
      y: "252",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "376",
      y: "224",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "376",
      y: "196",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "376",
      y: "168",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "376",
      y: "140",
      width: "104",
      height: "28"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "376",
      y: "112",
      width: "104",
      height: "28"
    })), /*#__PURE__*/React.createElement("g", {
      stroke: "#141413",
      strokeWidth: "1"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "228",
      y: "364",
      width: "104",
      height: "28",
      fill: "rgba(250,249,245,0.22)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "228",
      y: "336",
      width: "104",
      height: "28",
      fill: "#7453ff"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "228",
      y: "308",
      width: "104",
      height: "28",
      fill: "#9b86ff"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "228",
      y: "280",
      width: "104",
      height: "28",
      fill: "rgba(185,169,255,0.38)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "228",
      y: "252",
      width: "104",
      height: "28",
      fill: "rgba(185,169,255,0.38)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "228",
      y: "224",
      width: "104",
      height: "28",
      fill: "rgba(185,169,255,0.38)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "228",
      y: "196",
      width: "104",
      height: "28",
      fill: "rgba(185,169,255,0.38)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "228",
      y: "168",
      width: "104",
      height: "28",
      fill: "rgba(185,169,255,0.38)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "228",
      y: "140",
      width: "104",
      height: "28",
      fill: "rgba(185,169,255,0.38)"
    })), /*#__PURE__*/React.createElement("text", {
      x: "132",
      y: "416",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "8 STOREYS"), /*#__PURE__*/React.createElement("text", {
      x: "280",
      y: "416",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "9 STOREYS"), /*#__PURE__*/React.createElement("text", {
      x: "428",
      y: "416",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "10 STOREYS"))))), d.c3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-slide"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: "0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "nv-kicker"
    }, "Site suitability"), /*#__PURE__*/React.createElement("span", {
      className: "nv-body-sm",
      style: {
        color: "var(--color-body)"
      }
    }, "Niagara Falls, Ontario")), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h3",
      style: {
        marginTop: "14px",
        textWrap: "balance"
      }
    }, "Two sites, two very different answers."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Developable on the stronger site"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "~74 ac")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Usable on the second site once wetlands are excluded"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "36%"))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: d.openCase,
      className: "nv-btn nv-btn--primary nv-btn--lg",
      style: {
        marginTop: "32px"
      }
    }, "Read the case study", /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      width: "16",
      height: "12",
      viewBox: "0 0 18 12",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 6h15M12 1l5 5-5 5"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-media nv-notch-tl"
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      className: "nv-ra-cs-dots"
    }), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 560 440",
      role: "img",
      "aria-label": "Two sites compared: most of site one is developable, about 74 acres; wetlands cover most of site two, leaving 36% usable in two pieces",
      style: {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
      id: "cs-hatch-a",
      width: "8",
      height: "8",
      patternUnits: "userSpaceOnUse",
      patternTransform: "rotate(45)"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "8",
      stroke: "rgba(160,157,150,0.75)",
      strokeWidth: "2"
    }))), /*#__PURE__*/React.createElement("text", {
      x: "44",
      y: "84",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "SITE ONE"), /*#__PURE__*/React.createElement("path", {
      d: "M56.3 318.9 L248.3 301 L236 92 L44 104 Z",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M58 348 L250 330 L248.6 305.9 L56.6 323.9 Z",
      fill: "url(#cs-hatch-a)",
      stroke: "#a09d96",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: "44",
      y: "380",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#b9a9ff"
    }, "~74 AC DEVELOPABLE"), /*#__PURE__*/React.createElement("text", {
      x: "300",
      y: "84",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "SITE TWO"), /*#__PURE__*/React.createElement("path", {
      d: "M312 332 L418.6 339.8 L423.2 238.7 L509.3 243.7 L516 114 L409.2 107.1 L402.7 211.3 L305.4 204.8 Z",
      fill: "url(#cs-hatch-a)",
      stroke: "#a09d96",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M305.2 199.8 L398 206 L404.2 106.8 L300 100 Z",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M504 346 L509 248.7 L428 244 L423.6 340.1 Z",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: "300",
      y: "380",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#b9a9ff"
    }, "36% USABLE"), /*#__PURE__*/React.createElement("rect", {
      x: "44",
      y: "404",
      width: "12",
      height: "12",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: "64",
      y: "414",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "DEVELOPABLE"), /*#__PURE__*/React.createElement("rect", {
      x: "200",
      y: "404",
      width: "12",
      height: "12",
      fill: "url(#cs-hatch-a)",
      stroke: "#a09d96",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: "220",
      y: "414",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "WETLAND OR PROTECTED"))))), d.c4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-slide"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: "0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "nv-kicker"
    }, "Property potential"), /*#__PURE__*/React.createElement("span", {
      className: "nv-body-sm",
      style: {
        color: "var(--color-body)"
      }
    }, "Toronto, Ontario")), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h3",
      style: {
        marginTop: "14px",
        textWrap: "balance"
      }
    }, "Learning from the approvals next door."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Nearby approvals studied in detail"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "4")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Of recent nearby proposals are 50+ storeys, vs 16% citywide"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "35%"))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: d.openCase,
      className: "nv-btn nv-btn--primary nv-btn--lg",
      style: {
        marginTop: "32px"
      }
    }, "Read the case study", /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      width: "16",
      height: "12",
      viewBox: "0 0 18 12",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 6h15M12 1l5 5-5 5"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-media nv-notch-tl"
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      className: "nv-ra-cs-dots"
    }), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 560 440",
      role: "img",
      "aria-label": "Schematic street view: heritage houses kept at the front with a new building behind them, among nearby approved buildings of 17, 35, 43 and 45 storeys",
      style: {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
      id: "cs-floor-a",
      width: "8",
      height: "12",
      patternUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "0",
      y1: "11.5",
      x2: "8",
      y2: "11.5",
      stroke: "rgba(160,157,150,0.3)",
      strokeWidth: "1"
    }))), /*#__PURE__*/React.createElement("line", {
      x1: "24",
      y1: "372",
      x2: "536",
      y2: "372",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "url(#cs-floor-a)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "36",
      y: "162",
      width: "60",
      height: "210"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "108",
      y: "270",
      width: "52",
      height: "102"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "352",
      y: "114",
      width: "60",
      height: "258"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "440",
      y: "102",
      width: "60",
      height: "270"
    })), /*#__PURE__*/React.createElement("g", {
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96",
      textAnchor: "middle"
    }, /*#__PURE__*/React.createElement("text", {
      x: "66",
      y: "150"
    }, "35 STOREYS"), /*#__PURE__*/React.createElement("text", {
      x: "134",
      y: "258"
    }, "17 STOREYS"), /*#__PURE__*/React.createElement("text", {
      x: "382",
      y: "102"
    }, "43 STOREYS"), /*#__PURE__*/React.createElement("text", {
      x: "470",
      y: "90"
    }, "45 STOREYS")), /*#__PURE__*/React.createElement("rect", {
      x: "176",
      y: "150",
      width: "152",
      height: "222",
      fill: "rgba(116,83,255,0.16)",
      stroke: "#b9a9ff",
      strokeWidth: "1",
      strokeDasharray: "5 5"
    }), /*#__PURE__*/React.createElement("text", {
      x: "252",
      y: "136",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#b9a9ff"
    }, "HOW TALL?"), /*#__PURE__*/React.createElement("g", {
      fill: "#7453ff",
      stroke: "#141413",
      strokeWidth: "1.5",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M186 372 V340 L208 322 L230 340 V372 Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M230 372 V340 L252 322 L274 340 V372 Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M274 372 V340 L296 322 L318 340 V372 Z"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "32",
      y: "404",
      width: "12",
      height: "12",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: "52",
      y: "414",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "NEARBY APPROVALS"), /*#__PURE__*/React.createElement("rect", {
      x: "196",
      y: "404",
      width: "12",
      height: "12",
      fill: "#7453ff"
    }), /*#__PURE__*/React.createElement("text", {
      x: "216",
      y: "414",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "HERITAGE HOUSES"), /*#__PURE__*/React.createElement("rect", {
      x: "352",
      y: "404",
      width: "12",
      height: "12",
      fill: "rgba(116,83,255,0.16)",
      stroke: "#b9a9ff",
      strokeWidth: "1",
      strokeDasharray: "3 3"
    }), /*#__PURE__*/React.createElement("text", {
      x: "372",
      y: "414",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "NEW BUILDING BEHIND")))))))), d.open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "cs-dlg-title",
      onKeyDown: d.dlgKey,
      style: {
        position: "fixed",
        inset: "0",
        zIndex: "50",
        display: "flex",
        alignItems: d.dlgAlign,
        justifyContent: "center",
        padding: `${d.dlgPad} 24px 24px`,
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Close case study",
      onClick: d.closeCase,
      className: "nv-ra-cs-scrim"
    }), /*#__PURE__*/React.createElement("div", {
      ref: d.setPanel,
      tabIndex: "-1",
      className: "nv-ra-cs-panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-bar"
    }, /*#__PURE__*/React.createElement("span", {
      className: "nv-tag"
    }, "Case study ", d.counter, " / ", d.total), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "nv-arrow",
      "aria-label": "Close case study",
      onClick: d.closeCase,
      style: {
        borderColor: "transparent"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 1l12 12M13 1L1 13"
    })))), d.c2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-pad",
      style: {
        paddingTop: "36px"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      id: "cs-dlg-title",
      className: "nv-h2",
      style: {
        textWrap: "balance"
      }
    }, "Sizing up the parking market around O\u2019Hare."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-facts"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Service"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Market study")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Sector"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Airport parking")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Location"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Chicago, Illinois")))), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats nv-ra-cs-pad",
      style: {
        paddingTop: "28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Parking operators within 7 km"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "16")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Estimated parking spaces"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "~51,000")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Range of daily rates"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "$7\u2013$39"))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-cols nv-ra-cs-pad",
      style: {
        paddingTop: "36px"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The situation"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "O\u2019Hare handled 83 million passengers in 2018, making it one of the busiest airports in the world. Anyone looking at an off-airport parking business there needs to know who they would compete with, how much space already exists and what drivers pay.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "Our approach"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "We drew a 7 km catchment around the airport and profiled the parking operators in it: lot size, number of spaces, daily and weekly rates, extra services, and whether each is a local business or part of a larger chain.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The outcome"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "We mapped 16 operators with about 51,000 spaces between them, from a 100-space local lot to two operations with about 16,000 each. Daily rates ran from $7 to $39, and only four offered extra services such as car washes. We used the same method for Orlando and Ottawa."))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-pad",
      style: {
        paddingTop: "32px",
        paddingBottom: "36px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "What we looked at"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--cs"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Competitors")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Pricing")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Capacity")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Services")))))), d.c0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-pad",
      style: {
        paddingTop: "36px"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      id: "cs-dlg-title",
      className: "nv-h2",
      style: {
        textWrap: "balance"
      }
    }, "More homes from the same two lots."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-facts"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Service"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Development feasibility")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Sector"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Mid-rise residential")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Location"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Barrie, Ontario")))), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats nv-ra-cs-pad",
      style: {
        paddingTop: "28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Units in the new concept"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "60")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "More units than the earlier design"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "+30%")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Units possible with two more storeys"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "84"))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-cols nv-ra-cs-pad",
      style: {
        paddingTop: "36px"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The situation"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "The owner of two side-by-side residential lots on a busy road wanted to know what could be built there, and whether to develop or sell. An earlier design by another team had missed a planned road widening and struggled to meet zoning standards.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "Our approach"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "We reviewed the planning rules for the site, from height and parking to affordable housing incentives, and consulted city planning staff and the conservation authority. Then we tested new concepts with a planner and an architect.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The outcome"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "The new concept is a 6-storey building with 60 units, up from 46, using the lower parking ratio in the city\u2019s draft zoning by-law. Two more storeys could take it to 84. Once an appraisal is in, the owner can weigh developing against selling."))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-pad",
      style: {
        paddingTop: "32px",
        paddingBottom: "36px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "What we looked at"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--cs"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Planning policy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Conservation authority")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Concept design")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Housing incentives")))))), d.c1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-pad",
      style: {
        paddingTop: "36px"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      id: "cs-dlg-title",
      className: "nv-h2",
      style: {
        textWrap: "balance"
      }
    }, "Finding the right size for a retirement residence."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-facts"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Service"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Seniors housing feasibility")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Sector"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Seniors housing")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Location"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Toronto, Ontario")))), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats nv-ra-cs-pad",
      style: {
        paddingTop: "28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Building heights tested"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "3")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Suites and rooms in the chosen option"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "279")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Levels of care under one roof"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "3"))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-cols nv-ra-cs-pad",
      style: {
        paddingTop: "36px"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The situation"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "An owner with an assembled site wanted to know whether a retirement residence with several levels of care would work there, what mix of care to offer, and whether buying the lot next door would add value.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "Our approach"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "We tested 8-, 9- and 10-storey versions of the building, each with a development budget and operating forecast. We also looked at seniors housing demand in Ontario and the GTA, new supply across Canada, and what nearby residences charge for care.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The outcome"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "Nine storeys struck the best balance: 279 suites and rooms, including a secure memory-care floor, and a return that clears the target while keeping planning risk lower than ten storeys would. Buying the lot next door only made sense at nine storeys or more."))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-pad",
      style: {
        paddingTop: "32px",
        paddingBottom: "36px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "What we looked at"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--cs"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Demand and supply")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Development budget")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Operating forecast")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Care mix")))))), d.c3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-pad",
      style: {
        paddingTop: "36px"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      id: "cs-dlg-title",
      className: "nv-h2",
      style: {
        textWrap: "balance"
      }
    }, "Two sites, two very different answers."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-facts"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Service"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Site suitability")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Sector"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Data centres")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Location"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Niagara Falls, Ontario")))), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats nv-ra-cs-pad",
      style: {
        paddingTop: "28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Sites assessed"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "2")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Developable on the stronger site"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "~74 ac")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Usable on the second site"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "36%"))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-cols nv-ra-cs-pad",
      style: {
        paddingTop: "36px"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The situation"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "Two large, industrially zoned sites were being considered for a data centre. The question was whether either could support one, and what would stand in the way.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "Our approach"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "We reviewed the planning rules for each site, from zoning to provincial policy, along with conservation authority rules, wetlands and woodlands, and the local electricity supply.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The outcome"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "The first site could host a data centre, with about 74 developable acres, and the city would likely back the plan change needed, though the limited local power supply needs more study. On the second, wetlands leave only about a third of the land usable, so a light recreational use is the more realistic path."))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-pad",
      style: {
        paddingTop: "32px",
        paddingBottom: "36px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "What we looked at"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--cs"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Planning policy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Natural heritage")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Power capacity")))))), d.c4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-pad",
      style: {
        paddingTop: "36px"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      id: "cs-dlg-title",
      className: "nv-h2",
      style: {
        textWrap: "balance"
      }
    }, "Learning from the approvals next door."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-facts"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Service"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Property potential analysis")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Sector"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Downtown redevelopment")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Location"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Toronto, Ontario")))), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats nv-ra-cs-pad",
      style: {
        paddingTop: "28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Nearby approvals studied in detail"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "4")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Of nearby projects needed a rezoning"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "86%")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Of recent nearby proposals are 50+ storeys (city: 16%)"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "35%"))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-cols nv-ra-cs-pad",
      style: {
        paddingTop: "36px"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The situation"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "The site is an\xA0assembly made up of heritage-listed houses that form a small downtown corner, on a street the city wants to keep small in scale. The question was how much could be built there, and how far the city might bend its rules.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "Our approach"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "We analyzed development applications and building permits within 1 km and compared them with the whole city. Then we studied four nearby approvals in detail, from a tower next door to a comparable project across the street that kept two heritage houses, and checked the area plan\u2019s rules for heritage and height.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The outcome"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "Developers in the area ask for more than elsewhere in Toronto, and nearby approvals set precedents for zero setbacks, towers closer together and more height. They also show the city expects heritage houses to stay. Pending a heritage study, the likely path is to keep the houses as whole buildings, build behind them and use a heritage policy that allows extra height."))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-pad",
      style: {
        paddingTop: "32px",
        paddingBottom: "36px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "What we looked at"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--cs"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Development applications")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Building permits")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Heritage")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Height and setbacks")))))), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-foot"
    }, /*#__PURE__*/React.createElement("a", {
      href: href("Contact"),
      className: "nv-btn nv-btn--secondary nv-btn--lg"
    }, "Talk to an advisor"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: d.nextCase,
      className: "nv-btn nv-btn--primary nv-btn--lg"
    }, "Next case study", /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      width: "16",
      height: "12",
      viewBox: "0 0 18 12",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M1 6h15M12 1l5 5-5 5"
    }))))))), /*#__PURE__*/React.createElement("section", {
      className: "nv-ra-proc-sec nv-dot-page",
      style: {
        position: "relative",
        zIndex: "2",
        paddingTop: "56px",
        paddingBottom: "120px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-band-inner",
      style: {
        position: "relative",
        zIndex: "1"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-2col",
      style: {
        display: "grid",
        gridTemplateColumns: "1.35fr 1fr",
        gap: "56px",
        alignItems: "last baseline"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-label"
    }, "PROCESS"), /*#__PURE__*/React.createElement("h2", {
      className: "nv-h2",
      style: {
        marginTop: "16px",
        maxWidth: "11em"
      }
    }, "What working with us looks like.")), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg",
      style: {
        margin: "0",
        maxWidth: "470px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "A clear path from first conversation to a decision you can act on. Timing depends on the work, so every scope comes with its own timeline.")), /*#__PURE__*/React.createElement("ol", {
      className: "nv-ra-steps"
    }, /*#__PURE__*/React.createElement("li", {
      className: "nv-ra-step"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-step-n",
      "aria-hidden": "true"
    }, "01"), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h4",
      style: {
        marginTop: "32px"
      }
    }, "First contact"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-sm",
      style: {
        marginTop: "12px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "Tell us about the property and the decision you\u2019re facing. If we\u2019re the right fit, we follow up with a written scope, timeline and fee.")), /*#__PURE__*/React.createElement("li", {
      className: "nv-ra-step"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-step-n",
      "aria-hidden": "true"
    }, "02"), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h4",
      style: {
        marginTop: "32px"
      }
    }, "Analysis"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-sm",
      style: {
        marginTop: "12px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "We gather and test the facts: what the planning rules allow, market conditions, financial performance and every realistic option for the asset.")), /*#__PURE__*/React.createElement("li", {
      className: "nv-ra-step"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-step-n",
      "aria-hidden": "true"
    }, "03"), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h4",
      style: {
        marginTop: "32px"
      }
    }, "Report & walkthrough"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-sm",
      style: {
        marginTop: "12px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "You receive a clear written report with our recommendation, then walk through it with the advisors who did the work.")), /*#__PURE__*/React.createElement("li", {
      className: "nv-ra-step"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-step-n",
      "aria-hidden": "true"
    }, "04"), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h4",
      style: {
        marginTop: "32px"
      }
    }, "Next steps"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-sm",
      style: {
        marginTop: "12px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "The decision is yours. If it helps, we stay involved as the plan takes shape, from follow-up analysis to ongoing monitoring."))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--color-surface-dark)",
        color: "var(--color-on-dark)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-band-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-gf nv-gf--dark nv-cta"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-gridlines",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-h nv-gf-top"
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-h nv-gf-bottom"
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-v nv-gf-v--first",
      style: {
        left: "0%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-v nv-gf-v--last",
      style: {
        left: "100%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nt",
      style: {
        left: "0%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nt",
      style: {
        left: "100%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nb",
      style: {
        left: "0%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nv-gf-nb",
      style: {
        left: "100%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "nv-focus-boxes",
      style: {
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-cell",
      style: {
        padding: "56px",
        minHeight: "320px",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "720px"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "nv-h2",
      style: {
        maxWidth: "680px",
        color: "var(--color-on-dark)"
      }
    }, "You don\u2019t need to know which analysis you need."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg",
      style: {
        marginTop: "18px",
        maxWidth: "620px",
        color: "var(--color-on-dark-soft)",
        textWrap: "pretty"
      }
    }, "Just tell us about the property, portfolio or opportunity, and we will guide you from there. Book a free call or send us a message anytime \u2014 we will respond within 24 hours!"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "12px",
        marginTop: "30px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "nv-btn nv-btn--primary nv-btn--lg",
      href: href("Contact")
    }, "Talk to an advisor"), /*#__PURE__*/React.createElement("a", {
      className: "nv-btn nv-btn--secondary-dark nv-btn--lg",
      href: "#",
      target: "_blank",
      rel: "noopener"
    }, "Book a free 30-minute call")))))))), /*#__PURE__*/React.createElement(window.SiteFooter, null));
  }
}
window.RealEstateAdvisoryV2 = RealEstateAdvisoryV2;
