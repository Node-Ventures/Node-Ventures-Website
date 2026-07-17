// TrustedBy — an infinite horizontal logo marquee with fade-out edges.
function TrustedBy() {
  const logos = ["logos/landlogic.png", "logos/bluecanoe.png", "logos/parcella.png", "logos/aecorn.png", "logos/aeco.png", "logos/devnex.png", "logos/oneontario.png"];
  const resolveAsset = p => window.__resources && window.__resources[p] || p;
  const loop = logos.concat(logos); // duplicate for seamless scroll
  return /*#__PURE__*/React.createElement("section", {
    className: "nv-grid-band",
    style: {
      backgroundColor: "var(--color-surface-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      paddingTop: 8,
      paddingBottom: 8,
      backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 var(--line-dash), transparent var(--line-dash) var(--line-step))",
      backgroundSize: "100% 1px",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nv-tag",
    style: {
      margin: 0,
      flex: "none",
      color: "var(--color-on-dark)"
    }
  }, "Trusted by"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      overflow: "hidden",
      WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
      maskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-marquee",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 36,
      width: "max-content"
    }
  }, loop.map((n, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: resolveAsset(n),
    alt: "",
    "aria-hidden": i >= logos.length ? "true" : undefined,
    style: {
      height: 68,
      width: "auto",
      flex: "none",
      objectFit: "contain",
      opacity: 0.9
    }
  }))))));
}
window.TrustedBy = TrustedBy;
