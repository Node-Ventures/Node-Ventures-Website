// App — assembles the Node Ventures homepage.
function App() {
  return (
    <div id="nv-page" style={{ minHeight: "100vh", position: "relative" }}>
      <window.SiteNav />
      <window.Hero />
      <window.TrustedBy />
      <window.Narrative />
      {window.Platform ? <window.Platform /> : null}
      {window.HowWeBuild ? <window.HowWeBuild /> : null}
      {window.QuoteBlock ? <window.QuoteBlock /> : null}
      {window.Funds ? <window.Funds /> : null}
      {window.Ventures ? <window.Ventures /> : null}
      {window.FocusAreas ? <window.FocusAreas /> : null}
      {window.Closing ? <window.Closing /> : null}
      {window.SiteFooter ? <window.SiteFooter /> : null}
    </div>
  );
}
window.App = App;
