// App — assembles the Node Ventures homepage.
function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "nv-page",
    style: {
      minHeight: "100vh",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(window.SiteNav, null), /*#__PURE__*/React.createElement(window.Hero, null), /*#__PURE__*/React.createElement(window.TrustedBy, null), /*#__PURE__*/React.createElement(window.Narrative, null), window.Platform ? /*#__PURE__*/React.createElement(window.Platform, null) : null, window.HowWeBuild ? /*#__PURE__*/React.createElement(window.HowWeBuild, null) : null, window.QuoteBlock ? /*#__PURE__*/React.createElement(window.QuoteBlock, null) : null, window.Funds ? /*#__PURE__*/React.createElement(window.Funds, null) : null, window.Ventures ? /*#__PURE__*/React.createElement(window.Ventures, null) : null, window.FocusAreas ? /*#__PURE__*/React.createElement(window.FocusAreas, null) : null, window.Closing ? /*#__PURE__*/React.createElement(window.Closing, null) : null, window.SiteFooter ? /*#__PURE__*/React.createElement(window.SiteFooter, null) : null);
}
window.App = App;
