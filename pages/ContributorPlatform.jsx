// ContributorPlatform — hero (text left / notched image right) → offset lede
// → vertical numbered timeline → who-can-contribute cards → closing CTA.
// Typography, grid frame, labels and CTA box all come from the shared kit
// (DomainKit + site-ui.css) so this page matches the fund pages exactly.
function ContributorPlatform() {
  const { Button } = window.NodeVenturesDesignSystem_1fd7b8;
  const { SectionHead, GridFrame, GridCell } = window;
  const href = window.NV_HREF || (() => "#");

  const para = { fontFamily: "var(--font-body)", fontSize: "var(--body-size)", lineHeight: 1.6, color: "var(--color-body)", margin: 0, textWrap: "pretty" };
  const cardTitle = { fontFamily: "var(--font-display)", fontWeight: "var(--h4-weight)", fontSize: "var(--h4-size)", lineHeight: "var(--h4-line)", letterSpacing: "var(--h4-track)", margin: 0 };
  const h2 = { fontFamily: "var(--font-display)", fontWeight: "var(--h2-weight)", fontSize: "var(--h2-size)", lineHeight: "var(--h2-line)", letterSpacing: "var(--h2-track)", color: "var(--color-ink)", margin: 0 };

  const steps = [
    {
      t: "Create a profile",
      lead: "Tell us what you know and where you want to contribute.",
      b: "Build your profile around your skills, experience, interests, and availability. This helps Node understand where you can add the most value and connect you with relevant ventures and opportunities.",
      img: "photos/process-01b-profile-hor.png",
      alt: "Contributor profile — selecting areas of expertise",
    },
    {
      t: "Discover opportunities",
      lead: "Find ventures that need what you bring to the table.",
      b: "Explore active ventures and contributor opportunities across the Node ecosystem. Find opportunities that align with your expertise and interests, or discover where Node sees a strong match for your capabilities.",
      img: "photos/process-02-match-hor.png",
      alt: "Recommended ventures matched to a contributor’s expertise",
    },
    {
      t: "Build together",
      lead: "Bring your expert experience into the workflow.",
      b: "Work alongside founders, operators, advisors, and other contributors on real challenges and objectives. Your involvement can range from focused guidance to hands-on participation, depending on the opportunity and the role you want to play.",
      img: "photos/process-03-contribute-hor.png",
      alt: "Upcoming venture meeting with the contributor team",
    },
    {
      t: "Track your impact",
      lead: "Track your efforts and what they are accomplishing.",
      b: "Use the Node platform to follow assignments, track contributions, monitor milestones, and stay connected to the progress of the ventures you support. Your contribution becomes visible, organized, and measurable.",
      img: "photos/process-04-track-hor.png",
      alt: "Time tracked this week across venture assignments",
    },
    {
      t: "Share in success",
      lead: "Share in the value of what you help to create.",
      b: "The Contributor Program is built around the idea that meaningful contribution should have meaningful value. As ventures progress, contributors can participate in their success according to the structure of each opportunity.",
      img: "photos/process-05-success-hor.png",
      alt: "Project marked complete with all milestones done",
    },
  ];

  const who = [
    { t: "Operators & executives", b: "Bring practical experience from building, leading, and scaling organizations, helping ventures strengthen strategy, navigate challenges, improve operations, and make better decisions as they grow.", img: "photos/who-operators-executives.jpg", alt: "An executive leading a working session with colleagues around a boardroom table" },
    { t: "Industry specialists", b: "Apply sector knowledge and real-world experience to challenges where context matters, helping ventures better understand their markets, customers, regulations, opportunities, and industry-specific realities.", img: "photos/who-industry-specialists.jpg", alt: "A designer working on a 3D floor plan across dual monitors in a studio office" },
    { t: "Technology professionals", b: "Contribute expertise across AI, software, data, product, engineering, and other technical disciplines to help ventures develop stronger solutions, solve complex problems, and build with confidence.", img: "photos/who-technology-professionals.jpg", alt: "A developer reviewing code and data on multiple monitors" },
    { t: "Creative professionals", b: "Bring expertise across design, brand, marketing, communications, content, and other creative disciplines to help ventures communicate clearly, connect with audiences, and strengthen how ideas come to life.", img: "photos/who-creative-professionals.jpg", alt: "A creative lead running a workshop in front of a whiteboard of sketches and sticky notes" },
    { t: "Advisors & connectors", b: "Provide strategic guidance, market perspective, relationships, and valuable introductions that can help ventures navigate key decisions, access new opportunities, build partnerships, and move forward faster.", img: "photos/who-advisors-connectors.jpg", alt: "Advisors talking around a meeting table in a bright office" },
  ];

  return (
    <div id="nv-page">
      <window.SiteNav />

      {/* ===== 1 · HERO — text left, notched image right ===== */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: 96, paddingBottom: 88 }}>
        <div className="nv-band-inner" style={{ position: "relative", zIndex: 2 }}>
          <div aria-hidden="true" className="nv-cp-hero-lower-dots"></div>
          <div className="nv-2col nv-cp-hero" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="nv-label">CONTRIBUTOR PROGRAM</div>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h1-weight)", fontSize: "var(--h1-size)", lineHeight: "var(--h1-line)", letterSpacing: "var(--h1-track)", color: "var(--color-ink)", margin: "18px 0 0", maxWidth: "9em" }}>Your expertise has value. Put it to work.</h1>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)", color: "var(--color-body)", margin: "22px 0 0", maxWidth: 400, textWrap: "pretty" }}>
                Apply your skills and expertise to real ventures, meaningful challenges, and opportunities where you can make a difference.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
                <a href={href("Start contributing")} style={{ textDecoration: "none" }}><Button variant="primary" size="lg">Become a contributor</Button></a>
                <a href={href("Contact")} style={{ textDecoration: "none" }}><Button variant="secondary" size="lg">Let’s talk</Button></a>
              </div>
            </div>
            <div className="nv-cp-hero-grid">
              <div className="nv-notch-tl" style={{ gridColumn: 1, gridRow: 1 }}>
                <img src="photos/hero-focused-worker.jpg" alt="A professional working intently at a laptop in a coworking office" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ gridColumn: 1, gridRow: 2 }}>
                <img src="photos/hero-office-desk-wide.jpg" alt="A person working at a desktop computer in a bright open office" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="nv-notch-br" style={{ gridColumn: 2, gridRow: "1 / span 2" }}>
                <img src="photos/hero-presenter-tall.jpg" alt="A presenter leading a meeting in a glass-walled conference room" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "left center" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2 · LEDE — header with two offset paragraphs ===== */}
      <section style={{ position: "relative", zIndex: 2, paddingTop: 48, paddingBottom: 88 }}>
        <div className="nv-band-inner" style={{ position: "relative", zIndex: 1 }}>
          <div className="nv-cp-lede" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(21px, 2vw, 26px)", lineHeight: 1.4, letterSpacing: "-0.3px", color: "var(--color-ink)", margin: 0, textWrap: "pretty" }}>
              Building a great company takes more than capital. It takes people who know how to solve problems, make decisions, open doors, and turn ideas into something real. The Contributor Program is designed for people who want to do more than offer an occasional introduction or piece of advice.
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(21px, 2vw, 26px)", lineHeight: 1.4, letterSpacing: "-0.3px", color: "var(--color-ink)", margin: 0, textWrap: "pretty" }}>
              Become a Node contributor to apply your expertise to real work on a scheduled basis. Decide your level of contribution, choose the projects you’re interested in, and track your time. You become part of the venture development, and you share in its progress, launch and success.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 3 · TIMELINE — how the program works ===== */}
      <section className="nv-dark" style={{ position: "relative", zIndex: 2, background: "var(--color-surface-dark)", color: "var(--color-on-dark)", paddingTop: 104, paddingBottom: 104 }}>
        <div className="nv-band-inner" style={{ position: "relative", zIndex: 1 }}>
          <SectionHead
            onDark
            align="center"
            eyebrow="HOW IT WORKS"
            title="From what you know to what you can help build."
            lead="Create your profile, discover opportunities that match your experience, contribute alongside the Node collective, and follow the impact of the work you put in."
            maxTitle={680} maxLead={700}
          />
          <div className="nv-tl" style={{ marginTop: 96 }}>
            {steps.map((s, i) => (
              <div className="nv-tl-step" key={s.t}>
                <div className="nv-tl-visual-col">
                  {s.img ? (
                    <div className="nv-tl-visual">
                      <img src={s.img} alt={s.alt} />
                    </div>
                  ) : null}
                </div>
                <div className="nv-tl-rail"><div className="nv-tl-circle">{String(i + 1).padStart(2, "0")}</div></div>
                <div className="nv-tl-body">
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-primary-on-dark)" }}>{s.t}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h3-weight)", fontSize: "var(--h3-size)", lineHeight: "var(--h3-line)", letterSpacing: "var(--h3-track)", color: "var(--color-on-dark)", margin: "14px 0 0", maxWidth: "18em" }}>{s.lead}</h3>
                    <p style={{ ...para, color: "var(--color-on-dark-soft)", marginTop: 16 }}>{s.b}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4 · WHO CAN CONTRIBUTE — cards ===== */}
      <section className="nv-grid-band" style={{ position: "relative", zIndex: 2, paddingTop: 104, paddingBottom: 104 }}>
        <div className="nv-band-inner">
          <div className="nv-2col nv-cp-split" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "end" }}>
            <div>
              <div className="nv-label">WHO IT’S FOR</div>
              <h2 style={{ ...h2, maxWidth: 420, marginTop: 16 }}>Can I contribute to the ventures?</h2>
            </div>
            <p style={{ ...para, maxWidth: 620 }}>The Node ecosystem brings together contributors with a wide range of professional backgrounds, perspectives, and capabilities. We connect the right expertise to the ventures where it can have meaningful impact.</p>
          </div>
          <div style={{ marginTop: 24 }}>
            <GridFrame cols={3} className="nv-swipe nv-cp-cards">
              {who.map((c) => (
                <GridCell key={c.t} pad={36} minHeight={330}>
                  <div className="nv-cp-card-img" style={{ height: 168, marginBottom: 28 }}>
                    <img src={c.img} alt={c.alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <h4 style={cardTitle}>{c.t}</h4>
                  <p style={{ ...para, marginTop: 14, fontSize: "var(--body-sm-size)", lineHeight: 1.55 }}>{c.b}</p>
                </GridCell>
              ))}
              <div className="nv-cp-card-filler" aria-hidden="true"></div>
            </GridFrame>
          </div>
        </div>
      </section>

      {/* ===== 5 · CLOSING CTA (DARK, ONE BOX) ===== */}
      <section className="nv-grid-band" style={{ paddingTop: 0, paddingBottom: 0, background: "var(--color-surface-dark)", color: "var(--color-on-dark)" }}>
        <div className="nv-band-inner">
          <GridFrame cols={1} onDark className="nv-cta">
            <GridCell pad={56} minHeight={320} style={{ justifyContent: "center" }}>
              <div style={{ maxWidth: 720 }}>
                <div className="nv-label" style={{ color: "var(--color-primary-on-dark)" }}>Get started</div>
                <h2 style={{ ...h2, color: "var(--color-on-dark)", margin: "16px 0 0", maxWidth: 680 }}>Put your skills behind real opportunities.</h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)", color: "var(--color-on-dark-soft)", margin: "18px 0 0", maxWidth: 620, textWrap: "pretty" }}>
                  Find opportunities where your experience can make a difference, contribute in a way that works for you, and become part of what gets built.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
                  <a href={href("Start contributing")} style={{ textDecoration: "none" }}><Button variant="primary" size="lg">Become a contributor</Button></a>
                  <a href={href("Contact")} className="nv-btn-dark" style={{ textDecoration: "none" }}><Button variant="secondary" size="lg">Let’s talk</Button></a>
                </div>
              </div>
            </GridCell>
          </GridFrame>
        </div>
      </section>

      <window.SiteFooter />
    </div>
  );
}
window.ContributorPlatform = ContributorPlatform;
