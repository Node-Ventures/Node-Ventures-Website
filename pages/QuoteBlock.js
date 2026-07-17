// QuoteBlock — editorial pull-quote with a real portrait. A rectangular photo
// sits left; the quote aligns to the top beside it, the attribution label pins
// to the bottom-left, and a dashed arrow at the bottom-right advances the
// carousel (slides the current quote out left, the next in from the right).
function QuoteBlock() {
  const quotes = [{
    q: "Instead of spending my time looking for the next opportunity, I get to spend it solving interesting problems with people who share the same ambition to create meaningful products.",
    name: "Helia Bootorabi",
    dept: "Digital Strategy & Marketing",
    venture: "AECORN Realty",
    logo: "assets/aecorn-logo.svg",
    pic: "photos/aecorn-mockup-c.jpg"
  }, {
    q: "Contributing to Node means working on problems that have a direct impact on how communities are planned and built. It's exciting to see research become tools that people can actually use.",
    name: "Saeid Emamgholian",
    dept: "Data Scientist",
    venture: "LandLogic Inc.",
    logo: "assets/landlogic-logo.svg",
    pic: "photos/landlogic-mockup-c.jpg"
  }, {
    q: "One of the things I value most about Node is the flexibility. I decide how much time I contribute, while still being part of projects that are making a real impact.",
    name: "Cory Rosenfield",
    dept: "Strategic Advisor",
    venture: "Blue Canoe",
    logo: "assets/bluecanoe-logo.svg",
    pic: "photos/bluecanoe-mockup-c.jpg"
  }];
  const [idx, setIdx] = React.useState(0);
  const [tx, setTx] = React.useState(0);
  const [op, setOp] = React.useState(1);
  const [trans, setTrans] = React.useState(true);
  const busy = React.useRef(false);
  const next = () => {
    if (busy.current) return;
    busy.current = true;
    setTrans(true);
    setTx(-48);
    setOp(0); // slide current out to the left
    setTimeout(() => {
      setTrans(false);
      setTx(48);
      setOp(0); // jump to the right (no transition)
      setIdx(i => (i + 1) % quotes.length);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setTrans(true);
        setTx(0);
        setOp(1); // slide the new one in
        setTimeout(() => {
          busy.current = false;
        }, 440);
      }));
    }, 360);
  };
  const prev = () => {
    if (busy.current) return;
    busy.current = true;
    setTrans(true);
    setTx(48);
    setOp(0); // slide current out to the right
    setTimeout(() => {
      setTrans(false);
      setTx(-48);
      setOp(0); // jump to the left (no transition)
      setIdx(i => (i - 1 + quotes.length) % quotes.length);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setTrans(true);
        setTx(0);
        setOp(1); // slide the new one in
        setTimeout(() => {
          busy.current = false;
        }, 440);
      }));
    }, 360);
  };
  const cur = quotes[idx];
  const slideStyle = {
    transform: tx === 0 ? "none" : "translateX(" + tx + "px)",
    opacity: op,
    transition: trans ? "transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease" : "none"
  };
  const controls = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous quote",
    onClick: prev,
    style: {
      width: 46,
      height: 46,
      padding: 0,
      background: "transparent",
      border: "1px dashed var(--color-muted)",
      cursor: "pointer",
      color: "var(--color-ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
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
      transform: "rotate(180deg)"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next quote",
    onClick: next,
    style: {
      width: 46,
      height: 46,
      marginLeft: -1,
      padding: 0,
      background: "transparent",
      border: "1px dashed var(--color-muted)",
      cursor: "pointer",
      color: "var(--color-ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
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
  }))));
  return /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      position: "relative",
      zIndex: 2,
      paddingTop: 8,
      paddingBottom: 96,
      color: "var(--color-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement(window.QuotePanel, {
    quote: cur.q,
    pic: cur.pic,
    picAlt: cur.name,
    logo: cur.logo,
    logoAlt: cur.venture,
    lines: ["Contributor: " + cur.name + ", " + cur.dept, "Venture: " + cur.venture],
    slideStyle: slideStyle,
    controls: controls
  })));
}
window.QuoteBlock = QuoteBlock;
