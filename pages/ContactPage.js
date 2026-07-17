// ContactPage — the Contact page shell (nav + hero copy + form + footer).
// Extracted from an inline block in contact.html so it can be pre-compiled
// like every other component (no runtime Babel).
function ContactPage() {
  return /*#__PURE__*/React.createElement("div", {
    id: "nv-page"
  }, /*#__PURE__*/React.createElement(window.SiteNav, null), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      paddingTop: 96,
      paddingBottom: 40,
      background: "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-label"
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--h1-weight)",
      fontSize: "var(--h1-size)",
      lineHeight: "var(--h1-line)",
      letterSpacing: "var(--h1-track)",
      color: "var(--color-ink)",
      margin: "18px 0 0",
      maxWidth: 620
    }
  }, "Let's start a conversation."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--body-lg-size)",
      lineHeight: "var(--body-lg-line)",
      color: "var(--color-body)",
      margin: "20px 0 0",
      maxWidth: 560
    }
  }, "Whether you want to invest, contribute, partner, or start a project, Node Ventures gives you a path into the ecosystem. Send us a note and we'll be in touch.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 2,
      paddingTop: 8,
      paddingBottom: 96,
      background: "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-band-inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(window.ContactForm, null)))), /*#__PURE__*/React.createElement(window.SiteFooter, null));
}
window.ContactPage = ContactPage;
