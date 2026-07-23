// LegalPage — shared chrome for text-only legal pages (Privacy, Terms).
// Renders the site nav, a centered reading column (capped line length,
// left-aligned text on light cream), and the site footer. Page content is
// passed as children so both pages share ONE layout/typography definition.
//   title     — page H1
//   effective — "Effective date: …" line under the title
function LegalPage({
  title,
  effective,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: "nv-page"
  }, /*#__PURE__*/React.createElement(window.SiteNav, null), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 2,
      paddingTop: 88,
      paddingBottom: 112
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("article", {
    className: "nv-legal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-label"
  }, "Legal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h1-weight)",
      fontSize: "var(--h1-size)",
      lineHeight: "var(--h1-line)",
      letterSpacing: "var(--h1-track)",
      color: "var(--color-ink)",
      margin: "16px 0 0"
    }
  }, title), effective ? /*#__PURE__*/React.createElement("p", {
    className: "nv-legal-eff"
  }, effective) : null, /*#__PURE__*/React.createElement("div", {
    className: "nv-legal-body"
  }, children)))), /*#__PURE__*/React.createElement(window.SiteFooter, null));
}
window.LegalPage = LegalPage;
