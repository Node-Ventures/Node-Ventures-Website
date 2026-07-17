// ContactPage — the Contact page shell (nav + hero copy + form + footer).
// Extracted from an inline block in contact.html so it can be pre-compiled
// like every other component (no runtime Babel).
function ContactPage() {
  return (
    <div id="nv-page">
      <window.SiteNav />
      <section style={{ position: "relative", overflow: "hidden", paddingTop: 96, paddingBottom: 40, background: "transparent" }}>
        <div className="nv-band-inner" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="nv-label">Contact</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h1-weight)", fontSize: "var(--h1-size)",
              lineHeight: "var(--h1-line)", letterSpacing: "var(--h1-track)", color: "var(--color-ink)", margin: "18px 0 0", maxWidth: 620 }}>
              Let's start a conversation.
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)",
              color: "var(--color-body)", margin: "20px 0 0", maxWidth: 560 }}>
              Whether you want to invest, contribute, partner, or start a project, Node Ventures gives you a path into the ecosystem. Send us a note and we'll be in touch.
            </p>
          </div>
        </div>
      </section>
      <section style={{ position: "relative", zIndex: 2, paddingTop: 8, paddingBottom: 96, background: "transparent" }}>
        <div className="nv-band-inner">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <window.ContactForm />
          </div>
        </div>
      </section>
      <window.SiteFooter />
    </div>
  );
}
window.ContactPage = ContactPage;
