// BusinessAdvisory — the Business Advisory page (business-advisory.html).
// Generated from the Claude Design canvas (BusinessAdvisory.dc.html). Same layout as the
// redesigned Real Estate Advisory page. Page-only styles: pages/business-advisory.css.
class BusinessAdvisory extends React.Component {
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
    var N = 3;
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
      tabId: 'cs-tab-' + i,
      num: String(i + 1),
      counter: '0' + (i + 1),
      total: '0' + N,
      prev: go(i - 1),
      next: go(i + 1),
      pick0: go(0),
      pick1: go(1),
      pick2: go(2),
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
    const IMG = "photos/business-advisory/";
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
      id: "top",
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
    }, "BUSINESS ADVISORY"), /*#__PURE__*/React.createElement("h1", {
      className: "nv-h1",
      style: {
        marginTop: "18px",
        maxWidth: "9.5em"
      }
    }, "Understand the business. Then decide where to take it."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg",
      style: {
        marginTop: "22px",
        maxWidth: "440px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "Node Ventures Business Advisory helps business owners, investors and partners understand how a business is performing, where value can be protected or created, and what to do next, from improving profitability to restructuring or growth."), /*#__PURE__*/React.createElement("div", {
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
      href: "https://tidycal.com/moiengiashi/30-minute-consultation",
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
      src: IMG + "hero-advisor-conversation.webp",
      alt: "An advisor in glasses and a black blazer talking a client through her options",
      style: {
        objectPosition: "62% 35%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "nv-ph",
      style: {
        gridColumn: "1",
        gridRow: "2"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: IMG + "hero-open-sign.webp",
      alt: "An Open sign hanging in a shop's glass door",
      style: {
        objectPosition: "62% center"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "nv-notch-br nv-ph",
      style: {
        gridColumn: "2",
        gridRow: "1 / span 2"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: IMG + "hero-shopfront.webp",
      alt: "Two people at a counter inside a warmly lit shop, seen through its front window",
      style: {
        objectPosition: "45% center"
      }
    }))))))), /*#__PURE__*/React.createElement("section", {
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
    }, "Our advice starts with the business, not the outcome."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg nv-ra-intro-p"
    }, "Every business has more than one way forward. The right answer depends on the business, the market, the owner\u2019s objectives and the economics behind each option."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg nv-ra-intro-p"
    }, "Our role is to look across the possibilities, challenge the assumptions behind them and find the strongest case for you, not for a deal or a longer engagement.")))), /*#__PURE__*/React.createElement("section", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Small and mid-sized businesses")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Franchise and family businesses")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Partners and shareholders")))), /*#__PURE__*/React.createElement("div", {
      className: "nv-cell",
      style: {
        padding: "40px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Every option stays on the table"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-check nv-ra-check--2 nv-ba-opts"
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
    })), /*#__PURE__*/React.createElement("span", null, "Improve profitability")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Restructure operations")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Refocus the business")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Enter new markets")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Secure loans or grants")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Acquire a business")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Sell or divest")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Plan for succession")))))))), /*#__PURE__*/React.createElement("section", {
      id: "why",
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
    }, "BETTER BUSINESS STRATEGY"), /*#__PURE__*/React.createElement("h2", {
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
    }, "Node combines independent perspective, hands-on operating experience and real estate intelligence. Together, they allow us to examine a business from broader angles, challenge the obvious answer and build a stronger case for what should happen next."), /*#__PURE__*/React.createElement("div", {
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
      "aria-label": "Venn diagram: independent advice, operator experience, and business and property combine into better business strategy",
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
      d: "M216,82H182V48a14,14,0,0,0-14-14H40A14,14,0,0,0,26,48V176a6,6,0,0,0,3.42,5.41A5.86,5.86,0,0,0,32,182a6,6,0,0,0,3.77-1.33L73.71,150H74v34a14,14,0,0,0,14,14h94.29l37.94,30.67A6,6,0,0,0,224,230a5.86,5.86,0,0,0,2.58-.59A6,6,0,0,0,230,224V96A14,14,0,0,0,216,82ZM71.58,138a6,6,0,0,0-3.77,1.33L38,163.43V48a2,2,0,0,1,2-2H168a2,2,0,0,1,2,2v88a2,2,0,0,1-2,2ZM218,211.43l-29.81-24.1a6,6,0,0,0-3.770-1.33H88a2,2,0,0,1-2-2V150h82a14,14,0,0,0,14-14V94h34a2,2,0,0,1,2,2Z"
    }), /*#__PURE__*/React.createElement("text", {
      x: "400",
      y: "178",
      textAnchor: "middle",
      className: "nv-venn-t"
    }, "Independent"), /*#__PURE__*/React.createElement("text", {
      x: "400",
      y: "202",
      textAnchor: "middle",
      className: "nv-venn-t"
    }, "advice"), /*#__PURE__*/React.createElement("path", {
      className: "nv-venn-i",
      transform: "translate(234 382) scale(0.109375)",
      d: "M106,112a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,112ZM230,72V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V72A14,14,0,0,1,40,58H82V48a22,22,0,0,1,22-22h48a22,22,0,0,1,22,22V58h42A14,14,0,0,1,230,72ZM94,58h68V48a10,10,0,0,0-10-10H104A10,10,0,0,0,94,48ZM38,72v42.79A186,186,0,0,0,128,138a185.91,185.91,0,0,0,90-23.22V72a2,2,0,0,0-2-2H40A2,2,0,0,0,38,72ZM218,200V128.37A198.12,198.12,0,0,1,128,150a198.05,198.05,0,0,1-90-21.62V200a2,2,0,0,0,2,2H216A2,2,0,0,0,218,200Z"
    }), /*#__PURE__*/React.createElement("text", {
      x: "248",
      y: "438",
      textAnchor: "middle",
      className: "nv-venn-t"
    }, "Operator"), /*#__PURE__*/React.createElement("text", {
      x: "248",
      y: "462",
      textAnchor: "middle",
      className: "nv-venn-t"
    }, "experience"), /*#__PURE__*/React.createElement("path", {
      className: "nv-venn-i",
      transform: "translate(538 382) scale(0.109375)",
      d: "M26.22,94.41A6,6,0,0,0,26,96v16A38,38,0,0,0,42,143V216a6,6,0,0,0,6,6H208a6,6,0,0,0,6-6V143A38,38,0,0,0,230,112V96a5.91,5.91,0,0,0-.23-1.64L215.43,44.15A14.07,14.07,0,0,0,202,34H54A14.07,14.07,0,0,0,40.57,44.15Zm25.89-47A2,2,0,0,1,54,46H202a2,2,0,0,1,1.92,1.45L216.05,90H40ZM102,102h52v10a26,26,0,0,1-52,0Zm-64,0H90v10a26,26,0,0,1-38.18,23,6,6,0,0,0-1.65-1A26,26,0,0,1,38,112ZM202,210H54V148.66a38,38,0,0,0,42-16.21,37.95,37.95,0,0,0,64,0,38,38,0,0,0,42,16.21Zm3.83-76a6,6,0,0,0-1.65,1A26,26,0,0,1,166,112V102h52v10A26,26,0,0,1,205.83,134Z"
    }), /*#__PURE__*/React.createElement("text", {
      x: "552",
      y: "438",
      textAnchor: "middle",
      className: "nv-venn-t"
    }, "Business and"), /*#__PURE__*/React.createElement("text", {
      x: "552",
      y: "462",
      textAnchor: "middle",
      className: "nv-venn-t"
    }, "property")), /*#__PURE__*/React.createElement("g", {
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
    }, "business"), /*#__PURE__*/React.createElement("text", {
      x: "400",
      y: "363",
      textAnchor: "middle",
      className: "nv-venn-m"
    }, "strategy"))), /*#__PURE__*/React.createElement("ul", {
      className: "nv-venn-list"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Independent advice")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Operator experience")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Business and property")), /*#__PURE__*/React.createElement("li", {
      className: "nv-venn-list-c"
    }, /*#__PURE__*/React.createElement("strong", null, "Better business strategy"))))), /*#__PURE__*/React.createElement("div", {
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
    }, "A broker is paid when the deal closes. A lender when the loan is signed. A vendor when the system is sold. We don\u2019t take sides, and we recommend the strongest case for you, even when the answer is to walk away."), /*#__PURE__*/React.createElement("p", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Fee-for-service only: no commissions, referral fees or success fees.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Any potential conflict of interest is disclosed before work begins.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Hands-on support runs for a defined period, then hands over to your team.")))), /*#__PURE__*/React.createElement("div", {
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
    }, "Operator experience"), /*#__PURE__*/React.createElement("svg", {
      className: "nv-ra-pillar-i",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M106,112a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,112ZM230,72V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V72A14,14,0,0,1,40,58H82V48a22,22,0,0,1,22-22h48a22,22,0,0,1,22,22V58h42A14,14,0,0,1,230,72ZM94,58h68V48a10,10,0,0,0-10-10H104A10,10,0,0,0,94,48ZM38,72v42.79A186,186,0,0,0,128,138a185.91,185.91,0,0,0,90-23.22V72a2,2,0,0,0-2-2H40A2,2,0,0,0,38,72ZM218,200V128.37A198.12,198.12,0,0,1,128,150a198.05,198.05,0,0,1-90-21.62V200a2,2,0,0,0,2,2H216A2,2,0,0,0,218,200Z"
    }))), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h4",
      style: {
        marginTop: "20px",
        color: "var(--color-on-dark)"
      }
    }, "Advice from people who have run businesses."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "14px",
        color: "var(--color-on-dark-soft)"
      }
    }, "Strategy only matters if it works on a Monday morning. Our team brings experience across operations, finance, people and growth, and grounds every recommendation in your numbers, with a practical path to put it in place."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg",
      style: {
        marginTop: "28px",
        color: "var(--color-on-dark)"
      }
    }, "Where our experience comes from"), /*#__PURE__*/React.createElement("ul", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Investment decisions at a venture fund with over $75 million under management")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Board and advisory roles with growing technology companies")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Fundraising support that helped start-ups secure over $12 million")))), /*#__PURE__*/React.createElement("div", {
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
    }, "Business and property"), /*#__PURE__*/React.createElement("svg", {
      className: "nv-ra-pillar-i",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M26.22,94.41A6,6,0,0,0,26,96v16A38,38,0,0,0,42,143V216a6,6,0,0,0,6,6H208a6,6,0,0,0,6-6V143A38,38,0,0,0,230,112V96a5.91,5.91,0,0,0-.23-1.64L215.43,44.15A14.07,14.07,0,0,0,202,34H54A14.07,14.07,0,0,0,40.57,44.15Zm25.89-47A2,2,0,0,1,54,46H202a2,2,0,0,1,1.92,1.45L216.05,90H40ZM102,102h52v10a26,26,0,0,1-52,0Zm-64,0H90v10a26,26,0,0,1-38.18,23,6,6,0,0,0-1.65-1A26,26,0,0,1,38,112ZM202,210H54V148.66a38,38,0,0,0,42-16.21,37.95,37.95,0,0,0,64,0,38,38,0,0,0,42,16.21Zm3.83-76a6,6,0,0,0-1.65,1A26,26,0,0,1,166,112V102h52v10A26,26,0,0,1,205.83,134Z"
    }))), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h4",
      style: {
        marginTop: "20px",
        color: "var(--color-on-dark)"
      }
    }, "Most businesses sit on a lease or a property."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "14px",
        color: "var(--color-on-dark-soft)"
      }
    }, "We look at both. Rent, location, zoning and lease terms can make or break a business. Working alongside Node\u2019s ", /*#__PURE__*/React.createElement("a", {
      href: href("Real estate advisory"),
      className: "nv-inline-link"
    }, "real estate advisory team"), ", we assess the business and the property behind it as one decision, not two."), /*#__PURE__*/React.createElement("p", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Lease and property risks checked before you buy, sell or expand")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Property costs and constraints built into the plan where your project calls for it")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Real estate advisors in-house, so there\u2019s no second firm to hire or brief")))))))), /*#__PURE__*/React.createElement("section", {
      id: "services",
      className: "nv-ra-svc-sec",
      style: {
        position: "relative",
        zIndex: "2",
        paddingTop: "104px",
        paddingBottom: "64px",
        scrollMarginTop: "64px"
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
    }, "Business advisory services. Customized to your needs."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg",
      style: {
        marginTop: "20px",
        maxWidth: "760px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "One business can raise questions about value, performance, operations and direction at the same time. But the objective remains the same: understand the business, identify where value can be protected or created, and determine what deserves to happen next."), /*#__PURE__*/React.createElement("div", {
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
    }, "Valuation & investment advisory"), /*#__PURE__*/React.createElement("svg", {
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
    }, "Understand what a business is worth, and what it could be worth. We assess its value, check the opportunity through due diligence, and advise on acquisitions, dispositions and succession."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-sm",
      style: {
        marginTop: "14px",
        color: "var(--color-muted)",
        textWrap: "pretty"
      }
    }, /*#__PURE__*/React.createElement("em", null, "For example:"), " an investor weighing a franchise opportunity wants an independent view of the economics before committing.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Questions we answer"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-list",
      style: {
        marginTop: "16px"
      }
    }, /*#__PURE__*/React.createElement("li", null, "What is the business worth, and what drives that value?"), /*#__PURE__*/React.createElement("li", null, "Does the opportunity hold up under due diligence, including the lease or property?"), /*#__PURE__*/React.createElement("li", null, "What would increase value before an acquisition, disposition or succession?"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Typical deliverables"), /*#__PURE__*/React.createElement("ul", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Valuation Assessment", /*#__PURE__*/React.createElement("span", {
      className: "nv-caption nv-ba-note"
    }, "*Where a formal valuation or audited financial review is required, we coordinate with independent CBVs and CPAs."))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Due Diligence Review (Financial, operational and real estate)")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Investment Assessment")))))), /*#__PURE__*/React.createElement("div", {
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
    }, "Business analytics & performance"), /*#__PURE__*/React.createElement("svg", {
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
    }, "See what your numbers are telling you. We review performance and trends, pinpoint which customers and products drive profit, and set up the KPIs and reporting that keep you in control."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-sm",
      style: {
        marginTop: "14px",
        color: "var(--color-muted)",
        textWrap: "pretty"
      }
    }, /*#__PURE__*/React.createElement("em", null, "For example:"), " sales are growing but profit isn\u2019t, and the owner can\u2019t see which products or customers are responsible.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Questions we answer"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-list",
      style: {
        marginTop: "16px"
      }
    }, /*#__PURE__*/React.createElement("li", null, "Which customers, products or locations actually make money?"), /*#__PURE__*/React.createElement("li", null, "What trends should shape your next decisions?"), /*#__PURE__*/React.createElement("li", null, "Which numbers should you track each week to stay in control?"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Typical deliverables"), /*#__PURE__*/React.createElement("ul", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Performance Review")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Customer & Product Profitability Analysis")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "KPI Dashboard & Reporting")))))), /*#__PURE__*/React.createElement("div", {
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
    }, "Operations, efficiency & restructuring"), /*#__PURE__*/React.createElement("svg", {
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
    }, "Fix what\u2019s holding the business back. We find where the business loses time and money, plan how to improve profitability, restructure or turn it around, and help put the changes in place."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-sm",
      style: {
        marginTop: "14px",
        color: "var(--color-muted)",
        textWrap: "pretty"
      }
    }, /*#__PURE__*/React.createElement("em", null, "For example:"), " the owner works 70-hour weeks because every decision still runs through them.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Questions we answer"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-list",
      style: {
        marginTop: "16px"
      }
    }, /*#__PURE__*/React.createElement("li", null, "Where is time, money or capacity being lost?"), /*#__PURE__*/React.createElement("li", null, "Does the business need restructuring or a new direction?"), /*#__PURE__*/React.createElement("li", null, "Does it depend too heavily on the owner?"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Typical deliverables"), /*#__PURE__*/React.createElement("ul", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Efficiency Review")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Profitability Improvement Plan")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Restructuring or Turnaround Plan")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Interim Operations Support", /*#__PURE__*/React.createElement("span", {
      className: "nv-caption nv-ba-note"
    }, "*For a defined period, to put the plan in place and hand over to your team"))))))), /*#__PURE__*/React.createElement("div", {
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
    }, "Strategy, growth & funding"), /*#__PURE__*/React.createElement("svg", {
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
    }, "Set the direction, and fund the path to get there. We help owners choose how to grow, then prepare the business plan and financial model to secure a loan, investment or grant."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-sm",
      style: {
        marginTop: "14px",
        color: "var(--color-muted)",
        textWrap: "pretty"
      }
    }, /*#__PURE__*/React.createElement("em", null, "For example:"), " a business ready to open a second location needs a plan the bank will finance and a grant that could offset the cost.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Questions we answer"), /*#__PURE__*/React.createElement("ul", {
      className: "nv-ra-list",
      style: {
        marginTop: "16px"
      }
    }, /*#__PURE__*/React.createElement("li", null, "Where should the business go next, and why?"), /*#__PURE__*/React.createElement("li", null, "Should you build, buy or partner to grow?"), /*#__PURE__*/React.createElement("li", null, "What should your business plan show to secure a business loan, investment or grant?"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "nv-kicker"
    }, "Typical deliverables"), /*#__PURE__*/React.createElement("ul", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Strategic Action Plan")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Business Plan & Financial Model")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Loan & Grant Application Support")))))))))), /*#__PURE__*/React.createElement("section", {
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
      className: "nv-ra-cs-tabs nv-ba-cs-tabs"
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
    }, "New business launch"), /*#__PURE__*/React.createElement("button", {
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
    }, "Acquisition advisory"), /*#__PURE__*/React.createElement("button", {
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
    }, "Expansion strategy")), /*#__PURE__*/React.createElement("div", {
      id: "case-slide",
      role: "tabpanel",
      "aria-labelledby": d.tabId,
      className: "nv-ra-cs-box",
      style: {
        marginTop: "20px"
      }
    }, d.c0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-slide"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: "0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "nv-kicker"
    }, "New business launch"), /*#__PURE__*/React.createElement("span", {
      className: "nv-body-sm",
      style: {
        color: "var(--color-body)"
      }
    }, "GTHA, Ontario")), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h3",
      style: {
        marginTop: "14px",
        textWrap: "balance"
      }
    }, "A recycling plant, tested before the first machine was bought."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Equipment suppliers compared and visited on site in China"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "10")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Years to break even in the base-case plan"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "2"))), /*#__PURE__*/React.createElement("button", {
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
      "aria-label": "Three steps: equipment options compared side by side, the shredder\\u2019s fit tested first-hand at the factory, and cash flow modelled under several scenarios",
      style: {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
      id: "r1b2-gran",
      width: "5",
      height: "5",
      patternUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "2.5",
      cy: "2.5",
      r: "1.0",
      fill: "rgba(250,249,245,0.55)"
    }))), /*#__PURE__*/React.createElement("g", {
      transform: "translate(100 208)"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "-44",
      y: "-86",
      width: "40",
      height: "28",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-31 -81 H-17 L-20 -76 H-28 Z M-30 -76 H-18 V-64 H-30 Z",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "-86",
      width: "40",
      height: "28",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 -81 H31 L28 -76 H20 Z M18 -76 H30 V-64 H18 Z",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "-44",
      y: "-50",
      width: "40",
      height: "28",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-31 -45 H-17 L-20 -40 H-28 Z M-30 -40 H-18 V-28 H-30 Z",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "-50",
      width: "40",
      height: "28",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 -45 H31 L28 -40 H20 Z M18 -40 H30 V-28 H18 Z",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "-44",
      y: "-14",
      width: "40",
      height: "28",
      fill: "rgba(116,83,255,0.6)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-31 -9 H-17 L-20 -4 H-28 Z M-30 -4 H-18 V8 H-30 Z",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "-14",
      width: "40",
      height: "28",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 -9 H31 L28 -4 H20 Z M18 -4 H30 V8 H18 Z",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "-44",
      y: "22",
      width: "40",
      height: "28",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-31 27 H-17 L-20 32 H-28 Z M-30 32 H-18 V44 H-30 Z",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "22",
      width: "40",
      height: "28",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 27 H31 L28 32 H20 Z M18 32 H30 V44 H18 Z",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "-44",
      y: "58",
      width: "40",
      height: "28",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-31 63 H-17 L-20 68 H-28 Z M-30 68 H-18 V80 H-30 Z",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "58",
      width: "40",
      height: "28",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 63 H31 L28 68 H20 Z M18 68 H30 V80 H18 Z",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    })), /*#__PURE__*/React.createElement("g", {
      transform: "translate(280 208)"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "-58",
      y1: "88",
      x2: "58",
      y2: "88",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-40 -12 H40 L26 16 H-26 Z",
      fill: "rgba(116,83,255,0.28)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "-32",
      y: "16",
      width: "64",
      height: "60",
      fill: "rgba(116,83,255,0.28)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "-12",
      cy: "44",
      r: "9",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-3 44 L0 44 M-5.64 50.36 L-3.51 52.49 M-12 53 L-12 56 M-18.36 50.36 L-20.49 52.49 M-21 44 L-24 44 M-18.36 37.64 L-20.49 35.51 M-12 35 L-12 32 M-5.64 37.64 L-3.51 35.51",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "44",
      r: "9",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 44 L24 44 M18.36 50.36 L20.49 52.49 M12 53 L12 56 M5.64 50.36 L3.51 52.49 M3 44 L0 44 M5.64 37.64 L3.51 35.51 M12 35 L12 32 M18.36 37.64 L20.49 35.51",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-26 76 V88 M26 76 V88",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-18 88 Q0 72 18 88 Z",
      fill: "rgba(185,169,255,0.38)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-18 88 Q0 72 18 88 Z",
      fill: "url(#r1b2-gran)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "-12",
      cy: "-40",
      r: "10",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "-12",
      cy: "-40",
      r: "3.8",
      fill: "none",
      stroke: "rgba(160,157,150,0.35)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14",
      cy: "-68",
      r: "10",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14",
      cy: "-68",
      r: "3.8",
      fill: "none",
      stroke: "rgba(160,157,150,0.35)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-12 -58 V-68 M14 -86 V-96",
      fill: "none",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1",
      strokeDasharray: "2 3"
    })), /*#__PURE__*/React.createElement("g", {
      transform: "translate(460 208)"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "-68",
      y1: "0",
      x2: "68",
      y2: "0",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-68 0 C-54 72 -22 70 8 0 S48 -40 68 -46",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1.2",
      strokeDasharray: "4 3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-68 0 C-58 50 -40 40 -28 0 S30 -90 68 -98",
      fill: "none",
      stroke: "rgba(185,169,255,0.38)",
      strokeWidth: "1.2",
      strokeDasharray: "4 3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M-68 0 C-56 62 -32 52 -13.6 0 S40 -70 68 -78",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M152 208 H214",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M207.94 211.5 L214 208 L207.94 204.5",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1.2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M346 208 H384",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M377.94 211.5 L384 208 L377.94 204.5",
      fill: "none",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1.2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("text", {
      x: "100",
      y: "96",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#b9a9ff"
    }, "01 COMPARE"), /*#__PURE__*/React.createElement("text", {
      x: "280",
      y: "96",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#b9a9ff"
    }, "02 TEST"), /*#__PURE__*/React.createElement("text", {
      x: "460",
      y: "96",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#b9a9ff"
    }, "03 PLAN"), /*#__PURE__*/React.createElement("text", {
      x: "100",
      y: "330",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "EQUIPMENT OPTIONS"), /*#__PURE__*/React.createElement("text", {
      x: "100",
      y: "348",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#b9a9ff"
    }, "SIDE BY SIDE"), /*#__PURE__*/React.createElement("text", {
      x: "280",
      y: "330",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "FIT TESTED"), /*#__PURE__*/React.createElement("text", {
      x: "280",
      y: "348",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#b9a9ff"
    }, "AT THE FACTORY"), /*#__PURE__*/React.createElement("text", {
      x: "460",
      y: "330",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "CASH FLOW"), /*#__PURE__*/React.createElement("text", {
      x: "460",
      y: "348",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#b9a9ff"
    }, "SEVERAL SCENARIOS"))))), d.c1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-slide"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: "0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "nv-kicker"
    }, "Acquisition advisory"), /*#__PURE__*/React.createElement("span", {
      className: "nv-body-sm",
      style: {
        color: "var(--color-body)"
      }
    }, "GTHA, Ontario")), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h3",
      style: {
        marginTop: "14px",
        textWrap: "balance"
      }
    }, "Entering pet care through the right acquisition."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Years of financial records reviewed"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "5")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Below the asking price on the revised deal terms"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "10%"))), /*#__PURE__*/React.createElement("button", {
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
      "aria-label": "A pet care storefront with what we checked above it: the financial records, the lease and interviews. Beside it, what the client received: a valuation assessment, a due diligence review and a business plan for the first years of ownership",
      style: {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
      id: "p2a2-aw",
      x: "64",
      y: "0",
      width: "16",
      height: "40",
      patternUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("rect", {
      width: "8",
      height: "40",
      fill: "rgba(116,83,255,0.6)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "8",
      width: "8",
      height: "40",
      fill: "rgba(185,169,255,0.38)"
    }))), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "376",
      x2: "544",
      y2: "376",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "16",
      y: "196",
      width: "40",
      height: "180",
      fill: "rgba(250,249,245,0.04)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "24",
      y: "272",
      width: "24",
      height: "64",
      fill: "rgba(250,249,245,0.06)",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "328",
      y: "196",
      width: "24",
      height: "180",
      fill: "rgba(250,249,245,0.04)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "52",
      y: "182",
      width: "280",
      height: "12",
      fill: "rgba(250,249,245,0.06)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "56",
      y: "194",
      width: "272",
      height: "182",
      fill: "rgba(250,249,245,0.06)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "96",
      y: "204",
      width: "192",
      height: "30",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "153.5",
      cy: "221.5",
      rx: "5",
      ry: "4",
      fill: "#faf9f5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "147.3",
      cy: "215.4",
      rx: "1.9",
      ry: "2.4",
      fill: "#faf9f5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "151.2",
      cy: "212.2",
      rx: "1.9",
      ry: "2.4",
      fill: "#faf9f5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "155.8",
      cy: "212.2",
      rx: "1.9",
      ry: "2.4",
      fill: "#faf9f5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "159.7",
      cy: "215.4",
      rx: "1.9",
      ry: "2.4",
      fill: "#faf9f5"
    }), /*#__PURE__*/React.createElement("text", {
      x: "167.5",
      y: "223.5",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "1.2",
      fill: "#faf9f5"
    }, "PET CARE"), /*#__PURE__*/React.createElement("path", {
      d: "M64 242 H320 V258 A8 8 0 0 1 304 258 A8 8 0 0 1 288 258 A8 8 0 0 1 272 258 A8 8 0 0 1 256 258 A8 8 0 0 1 240 258 A8 8 0 0 1 224 258 A8 8 0 0 1 208 258 A8 8 0 0 1 192 258 A8 8 0 0 1 176 258 A8 8 0 0 1 160 258 A8 8 0 0 1 144 258 A8 8 0 0 1 128 258 A8 8 0 0 1 112 258 A8 8 0 0 1 96 258 A8 8 0 0 1 80 258 A8 8 0 0 1 64 258 Z",
      fill: "url(#p2a2-aw)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "66",
      y: "272",
      width: "97",
      height: "80",
      fill: "rgba(250,249,245,0.1)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "221",
      y: "272",
      width: "97",
      height: "80",
      fill: "rgba(250,249,245,0.1)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "114.5",
      y1: "272",
      x2: "114.5",
      y2: "352",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "66",
      y: "352",
      width: "97",
      height: "24",
      fill: "rgba(250,249,245,0.04)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "221",
      y: "352",
      width: "97",
      height: "24",
      fill: "rgba(250,249,245,0.04)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "171",
      y: "268",
      width: "42",
      height: "108",
      fill: "rgba(250,249,245,0.06)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "177",
      y: "276",
      width: "30",
      height: "56",
      fill: "rgba(250,249,245,0.1)",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "207",
      y1: "318",
      x2: "207",
      y2: "334",
      stroke: "#faf9f5",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M66 300 H163 M66 328 H163",
      fill: "none",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "72",
      y: "286",
      width: "9",
      height: "14",
      fill: "rgba(185,169,255,0.38)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "86",
      y: "291",
      width: "7",
      height: "9",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "98",
      y: "286",
      width: "9",
      height: "14",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "120",
      y: "291",
      width: "7",
      height: "9",
      fill: "rgba(185,169,255,0.38)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "134",
      y: "286",
      width: "9",
      height: "14",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "148",
      y: "291",
      width: "7",
      height: "9",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "76",
      y: "314",
      width: "9",
      height: "14",
      fill: "rgba(185,169,255,0.38)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "90",
      y: "319",
      width: "7",
      height: "9",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "102",
      y: "314",
      width: "9",
      height: "14",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "124",
      y: "319",
      width: "7",
      height: "9",
      fill: "rgba(185,169,255,0.38)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "138",
      y: "314",
      width: "9",
      height: "14",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "150",
      y: "319",
      width: "7",
      height: "9",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "269.5",
      cy: "317.5",
      rx: "11",
      ry: "8.8",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "255.86",
      cy: "304.08",
      rx: "4.18",
      ry: "5.28",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "264.44",
      cy: "297.04",
      rx: "4.18",
      ry: "5.28",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "274.56",
      cy: "297.04",
      rx: "4.18",
      ry: "5.28",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "283.14",
      cy: "304.08",
      rx: "4.18",
      ry: "5.28",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "92",
      y: "62",
      width: "26",
      height: "34",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "88",
      y: "66",
      width: "26",
      height: "34",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "84",
      y: "70",
      width: "26",
      height: "34",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "80",
      y: "74",
      width: "26",
      height: "34",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "76",
      y: "78",
      width: "26",
      height: "34",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M81 88 H97 M81 94 H97 M81 100 H97 M81 106 H97",
      fill: "none",
      stroke: "rgba(250,249,245,0.5)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M178 70 H200 L208 78 V110 H178 Z",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M200 70 V78 H208",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M183 84 H202 M183 90 H202 M183 96 H195",
      fill: "none",
      stroke: "rgba(250,249,245,0.5)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "206",
      cy: "104",
      r: "5",
      fill: "#141413",
      stroke: "#faf9f5",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M211 104 H224 M220 104 V108 M224 104 V108",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "262",
      y: "68",
      width: "36",
      height: "22",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M270 90 L268 97 L277 90",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#faf9f5"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "272",
      cy: "79",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "280",
      cy: "79",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "288",
      cy: "79",
      r: "1.6"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "284",
      y: "86",
      width: "36",
      height: "22",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M310 108 L313 115 L304 108",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#faf9f5"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "294",
      cy: "97",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "302",
      cy: "97",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "310",
      cy: "97",
      r: "1.6"
    })), /*#__PURE__*/React.createElement("text", {
      x: "97",
      y: "134",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "FINANCIAL RECORDS"), /*#__PURE__*/React.createElement("text", {
      x: "196",
      y: "134",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "LEASE"), /*#__PURE__*/React.createElement("text", {
      x: "291",
      y: "134",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "INTERVIEWS"), /*#__PURE__*/React.createElement("path", {
      d: "M97 140 V180 M196 140 V180 M291 140 V180",
      fill: "none",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1",
      strokeDasharray: "2 3"
    }), /*#__PURE__*/React.createElement("text", {
      x: "392",
      y: "134",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "DELIVERED"), /*#__PURE__*/React.createElement("path", {
      d: "M392 160 H422 L432 170 V216 H392 Z",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M422 160 V170 H432",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M398 174 H418 M398 180 H424",
      fill: "none",
      stroke: "rgba(250,249,245,0.5)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M403.0 195 H415.0 L422.0 201 L415.0 207 H403.0 Z",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1.1",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "414.0",
      cy: "201",
      r: "1.5",
      fill: "#faf9f5"
    }), /*#__PURE__*/React.createElement("text", {
      x: "442",
      y: "192",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "VALUATION"), /*#__PURE__*/React.createElement("path", {
      d: "M392 234 H422 L432 244 V290 H392 Z",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M422 234 V244 H432",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M398 248 H418 M398 254 H424",
      fill: "none",
      stroke: "rgba(250,249,245,0.5)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M402.0 271 l2.5 2.5 l4 -5",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1.1",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "411.0",
      y1: "271",
      x2: "422.0",
      y2: "271",
      stroke: "rgba(250,249,245,0.5)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M402.0 279 l2.5 2.5 l4 -5",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1.1",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "411.0",
      y1: "279",
      x2: "422.0",
      y2: "279",
      stroke: "rgba(250,249,245,0.5)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: "442",
      y: "266",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "DUE DILIGENCE"), /*#__PURE__*/React.createElement("path", {
      d: "M392 308 H422 L432 318 V364 H392 Z",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M422 308 V318 H432",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M398 322 H418 M398 328 H424",
      fill: "none",
      stroke: "rgba(250,249,245,0.5)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "412.0",
      cy: "349",
      r: "8",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M412.0 349 L412.0 341 A8 8 0 0 1 420.0 349 Z",
      fill: "#faf9f5",
      fillOpacity: "0.6"
    }), /*#__PURE__*/React.createElement("text", {
      x: "442",
      y: "340",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "BUSINESS PLAN"))))), d.c2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-slide"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: "0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "nv-kicker"
    }, "Expansion strategy"), /*#__PURE__*/React.createElement("span", {
      className: "nv-body-sm",
      style: {
        color: "var(--color-body)"
      }
    }, "Dallas, Texas")), /*#__PURE__*/React.createElement("h3", {
      className: "nv-h3",
      style: {
        marginTop: "14px",
        textWrap: "balance"
      }
    }, "Taking a proven technology to a new location."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Candidate sites assessed"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "4")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Tonnes of production capacity in year one"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "10,000"))), /*#__PURE__*/React.createElement("button", {
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
      "aria-label": "The new manufacturing plant with what we checked above it: production needs, local demand and the site's needs. Beside it, what the client received: a site and equipment plan, a structured licensing deal and a business plan",
      style: {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "376",
      x2: "544",
      y2: "376",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40 376 V200 L92 230 V200 L144 230 V200 L196 230 V200 L248 230 V200 L300 230 V376 Z",
      fill: "rgba(250,249,245,0.06)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "88",
      y: "240",
      width: "164",
      height: "26",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "104",
      cy: "253",
      r: "5",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M109 253 L111.5 253 M107.54 256.54 L109.3 258.3 M104 258 L104 260.5 M100.46 256.54 L98.7 258.3 M99 253 L96.5 253 M100.46 249.46 L98.7 247.7 M104 248 L104 245.5 M107.54 249.46 L109.3 247.7",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: "118",
      y: "257.5",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "1.2",
      fill: "#faf9f5"
    }, "MANUFACTURING"), /*#__PURE__*/React.createElement("rect", {
      x: "52",
      y: "280",
      width: "128",
      height: "20",
      fill: "rgba(250,249,245,0.1)",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M68 280 V300 M84 280 V300 M100 280 V300 M116 280 V300 M132 280 V300 M148 280 V300 M164 280 V300",
      fill: "none",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "198",
      y: "312",
      width: "36",
      height: "64",
      fill: "rgba(116,83,255,0.28)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M198 320 H234 M198 327 H234 M198 334 H234 M198 341 H234 M198 348 H234 M198 355 H234 M198 362 H234 M198 369 H234",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "0.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "244",
      y: "312",
      width: "36",
      height: "64",
      fill: "rgba(116,83,255,0.28)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M244 320 H280 M244 327 H280 M244 334 H280 M244 341 H280 M244 348 H280 M244 355 H280 M244 362 H280 M244 369 H280",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "0.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "64",
      y: "322",
      width: "24",
      height: "54",
      fill: "rgba(250,249,245,0.06)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "69",
      y: "328",
      width: "14",
      height: "22",
      fill: "rgba(250,249,245,0.1)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "300",
      y: "292",
      width: "52",
      height: "84",
      fill: "rgba(250,249,245,0.04)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "308",
      y: "304",
      width: "36",
      height: "14",
      fill: "rgba(250,249,245,0.1)",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "316",
      y: "336",
      width: "20",
      height: "40",
      fill: "rgba(250,249,245,0.06)",
      stroke: "rgba(160,157,150,0.8)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "150",
      y: "356",
      width: "10",
      height: "9",
      fill: "rgba(185,169,255,0.38)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "162",
      y: "356",
      width: "10",
      height: "9",
      fill: "rgba(185,169,255,0.38)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "174",
      y: "356",
      width: "10",
      height: "9",
      fill: "rgba(185,169,255,0.38)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "150",
      y: "346",
      width: "10",
      height: "9",
      fill: "rgba(185,169,255,0.38)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "162",
      y: "346",
      width: "10",
      height: "9",
      fill: "rgba(185,169,255,0.38)",
      stroke: "#b9a9ff",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "67",
      cy: "92",
      r: "11",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M78 92 L81.5 92 M75.9 98.47 L78.73 100.52 M70.4 102.46 L71.48 105.79 M63.6 102.46 L62.52 105.79 M58.1 98.47 L55.27 100.52 M56 92 L52.5 92 M58.1 85.53 L55.27 83.48 M63.6 81.54 L62.52 78.21 M70.4 81.54 L71.48 78.21 M75.9 85.53 L78.73 83.48",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "67",
      cy: "92",
      r: "4",
      fill: "#7453ff",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "87",
      cy: "76",
      r: "7",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M94 76 L97 76 M91.95 80.95 L94.07 83.07 M87 83 L87 86 M82.05 80.95 L79.93 83.07 M80 76 L77 76 M82.05 71.05 L79.93 68.93 M87 69 L87 66 M91.95 71.05 L94.07 68.93",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "87",
      cy: "76",
      r: "2.5",
      fill: "#141413",
      stroke: "#faf9f5",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: "74",
      y: "134",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "PRODUCTION NEEDS"), /*#__PURE__*/React.createElement("rect", {
      x: "174",
      y: "68",
      width: "36",
      height: "22",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M182 90 L180 97 L189 90",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#faf9f5"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "184",
      cy: "79",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "192",
      cy: "79",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "200",
      cy: "79",
      r: "1.6"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "196",
      y: "86",
      width: "36",
      height: "22",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M222 108 L225 115 L216 108",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#faf9f5"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "206",
      cy: "97",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "214",
      cy: "97",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "222",
      cy: "97",
      r: "1.6"
    })), /*#__PURE__*/React.createElement("text", {
      x: "202",
      y: "134",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "LOCAL DEMAND"), /*#__PURE__*/React.createElement("path", {
      d: "M282 112 L322 106 L334 112 L294 118 Z",
      fill: "rgba(116,83,255,0.28)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M308 110 L300.53 95.58 A9 9 0 1 1 315.47 95.58 Z",
      fill: "#7453ff",
      stroke: "#faf9f5",
      strokeWidth: "1",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "308",
      cy: "90",
      r: "3.42",
      fill: "#141413"
    }), /*#__PURE__*/React.createElement("text", {
      x: "308",
      y: "134",
      textAnchor: "middle",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "SITE NEEDS"), /*#__PURE__*/React.createElement("path", {
      d: "M74 140 V215.62 M202 140 V199.46 M308 140 V288",
      fill: "none",
      stroke: "rgba(160,157,150,0.6)",
      strokeWidth: "1",
      strokeDasharray: "2 3"
    }), /*#__PURE__*/React.createElement("text", {
      x: "392",
      y: "134",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "12",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "DELIVERED"), /*#__PURE__*/React.createElement("path", {
      d: "M392 160 H422 L432 170 V216 H392 Z",
      fill: "rgba(116,83,255,0.45)",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M422 160 V170 H432",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M398 174 H418 M398 180 H424",
      fill: "none",
      stroke: "rgba(250,249,245,0.5)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "401.0",
      y: "193",
      width: "22",
      height: "16",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M409.0 193 V203 M401.0 203 H416.0",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: "442",
      y: "185",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "SITE AND"), /*#__PURE__*/React.createElement("text", {
      x: "442",
      y: "200",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#faf9f5"
    }, "EQUIPMENT PLAN"), /*#__PURE__*/React.createElement("path", {
      d: "M392 234 H422 L432 244 V290 H392 Z",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M422 234 V244 H432",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M398 248 H418 M398 254 H424",
      fill: "none",
      stroke: "rgba(250,249,245,0.5)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M403.0 272 q3 -5 6 0 t6 0",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "419.0",
      cy: "277",
      r: "5",
      fill: "#7453ff",
      stroke: "#faf9f5",
      strokeWidth: "0.8"
    }), /*#__PURE__*/React.createElement("text", {
      x: "442",
      y: "266",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "LICENSING DEAL"), /*#__PURE__*/React.createElement("path", {
      d: "M392 308 H422 L432 318 V364 H392 Z",
      fill: "#141413",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M422 308 V318 H432",
      fill: "none",
      stroke: "#b9a9ff",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M398 322 H418 M398 328 H424",
      fill: "none",
      stroke: "rgba(250,249,245,0.5)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "412.0",
      cy: "349",
      r: "8",
      fill: "none",
      stroke: "#faf9f5",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M412.0 349 L412.0 341 A8 8 0 0 1 420.0 349 Z",
      fill: "#faf9f5",
      fillOpacity: "0.6"
    }), /*#__PURE__*/React.createElement("text", {
      x: "442",
      y: "340",
      fontFamily: "'Space Mono', ui-monospace, monospace",
      fontSize: "11",
      letterSpacing: "0.6",
      fill: "#a09d96"
    }, "BUSINESS PLAN")))))))), d.open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
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
    })))), d.c0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
    }, "A recycling plant, tested before the first machine was bought."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-facts"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Service"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "New business launch & investment assessment")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Sector"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Rubber recycling")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Location"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "GTHA, Ontario")))), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats nv-ra-cs-pad",
      style: {
        paddingTop: "28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Equipment suppliers compared and visited on site in China"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "10")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Potential customers and industry experts interviewed"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "15")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Years to break even in the base-case plan"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "2"))), /*#__PURE__*/React.createElement("div", {
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
    }, "An investor wanted to launch a rubber recycling plant. Before committing capital, they needed to know whether the equipment, the site and the market for recycled output could support a profitable business.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "Our approach"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "We assessed the technical requirements and equipment options, travelling to the manufacturer\u2019s facility in China to test the fit first-hand. We defined the site and real estate needs, interviewed potential buyers and industry experts, and modelled cash flow and profitability under several scenarios.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The outcome"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "The client received a detailed business plan and financial model, built with input from lawyers and accountants. The client was able to secure financing and choose a specific equipment line."))), /*#__PURE__*/React.createElement("div", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Equipment assessment")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Site requirements")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Customer interviews")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Cash flow model")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Business plan")))))), d.c1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
    }, "Entering pet care through the right acquisition."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-facts"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Service"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Acquisition advisory & due diligence")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Sector"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Pet care")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Location"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "GTHA, Ontario")))), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats nv-ra-cs-pad",
      style: {
        paddingTop: "28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Years of financial records reviewed"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "5")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Customers and industry experts interviewed"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "25")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Below the asking price on the revised deal terms"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "10%"))), /*#__PURE__*/React.createElement("div", {
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
    }, "An investor wanted to enter the pet care market by acquiring an established business rather than starting from scratch. They needed to know whether the business was worth the asking price, and whether its customers and location would hold after the change in ownership.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "Our approach"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "We reviewed the business\u2019s financial and operating performance, assessed the location and lease, and analyzed trends in the pet care market. We interviewed customers and industry experts, and worked with lawyers and accountants through due diligence and the deal structure.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The outcome"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "The client received a valuation assessment, a due diligence review and a business plan for the first years of ownership. They completed the purchase on revised terms, negotiated a transition period with the seller, and secured investment."))), /*#__PURE__*/React.createElement("div", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Due diligence")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Market trends")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Lease review")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Customer interviews")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Deal structure")))))), d.c2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
    }, "Taking a proven technology to a new location."), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-facts"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Service"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Expansion strategy & technology licensing")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Sector"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Manufacturing")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
      className: "nv-kicker"
    }, "Location"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-body",
      style: {
        margin: "4px 0 0",
        color: "var(--color-ink)"
      }
    }, "Dallas, Texas")))), /*#__PURE__*/React.createElement("dl", {
      className: "nv-ra-cs-stats nv-ra-cs-pad",
      style: {
        paddingTop: "28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Candidate sites assessed"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "4")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Potential customers and industry experts interviewed"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "30")), /*#__PURE__*/React.createElement("div", {
      className: "nv-ra-cs-stat"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "nv-body-sm"
    }, "Tonnes of production capacity in year one"), /*#__PURE__*/React.createElement("dd", {
      className: "nv-ra-cs-num"
    }, "10,000"))), /*#__PURE__*/React.createElement("div", {
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
    }, "An entrepreneur wanted to open a manufacturing operation in a new location, using a proven technology licensed from an established producer. The question was whether local demand, costs and the licensing terms would make the business viable.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "Our approach"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "We assessed the equipment and production requirements, defined the site and real estate needs, and tested local demand through market analysis and interviews with customers and industry experts. Working with lawyers and accountants, we helped structure the licensing agreement and modelled cash flow and profitability.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "nv-h4"
    }, "The outcome"), /*#__PURE__*/React.createElement("p", {
      className: "nv-body",
      style: {
        marginTop: "10px",
        color: "var(--color-body)",
        textWrap: "pretty"
      }
    }, "The client received a site and equipment plan, a structured licensing deal and a detailed business plan. The client was able to choose a new site location for expansion."))), /*#__PURE__*/React.createElement("div", {
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
    })), /*#__PURE__*/React.createElement("span", null, "Technology licensing")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Site selection")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Market analysis")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Deal structure")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 12.5 9.5 18 20 6.5"
    })), /*#__PURE__*/React.createElement("span", null, "Business plan")))))), /*#__PURE__*/React.createElement("div", {
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
      id: "process",
      className: "nv-ra-proc-sec nv-dot-page",
      style: {
        position: "relative",
        zIndex: "2",
        paddingTop: "56px",
        paddingBottom: "120px",
        scrollMarginTop: "64px"
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
    }, "We discuss the business and the decision you\u2019re facing. If we\u2019re the right fit, we follow up with a written scope, timeline and fee.")), /*#__PURE__*/React.createElement("li", {
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
    }, "We gather and test the facts: your financial and operating data, the lease or property where relevant, and every realistic option for the business.")), /*#__PURE__*/React.createElement("li", {
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
    }, "We present the findings and options in a clear written report, then walk you through them with the advisors who did the work.")), /*#__PURE__*/React.createElement("li", {
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
    }, "The decision is yours. You act on the plan, and if it helps, we stay involved, from follow-up analysis to hands-on support for a defined period."))))), /*#__PURE__*/React.createElement("section", {
      id: "contact",
      style: {
        background: "var(--color-surface-dark)",
        color: "var(--color-on-dark)",
        scrollMarginTop: "64px"
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
    }, "You don\u2019t need to know which service you need."), /*#__PURE__*/React.createElement("p", {
      className: "nv-body-lg",
      style: {
        marginTop: "18px",
        maxWidth: "620px",
        color: "var(--color-on-dark-soft)",
        textWrap: "pretty"
      }
    }, "You only need to know the decision you\u2019re trying to make. Tell us about the business, the opportunity or the problem. We\u2019ll start there."), /*#__PURE__*/React.createElement("div", {
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
      href: "https://tidycal.com/moiengiashi/30-minute-consultation",
      target: "_blank",
      rel: "noopener"
    }, "Book a free 30-minute call")))))))), /*#__PURE__*/React.createElement(window.SiteFooter, null));
  }
}
window.BusinessAdvisory = BusinessAdvisory;
