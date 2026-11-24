// Content for the Not-for-profit domain page. Copy + images only — layout
// lives in DomainPage.jsx. Rendered via <window.DomainPage data={...} />.
window.DOMAIN_NOT_FOR_PROFIT = {
  eyebrow: "Not-for-profit",
  navLabel: "Not-for-profit",
  hero: {
    headline: ["The muscle behind", "mission-driven organizations."],
    headlineMaxWidth: 780,
    // wider than other domains so it stays on 2 lines longer
    body: "Node Ventures helps not-for-profit organizations turn purpose into action by connecting them with the expertise, operational resources, and partnerships needed to deliver programs and build long-term sustainability.",
    image: "assets/hero-not-for-profit.jpg",
    primaryCta: "Discuss not-for-profit support",
    secondaryCta: null
  },
  why: {
    eyebrow: "Why this domain",
    title: "Strong missions need the capacity to deliver results.",
    lead: "Not-for-profits play a vital role in bringing people together to address important industry and community challenges. Yet many operate with limited resources, relying on dedicated volunteers and industry experts to move their mandates forward. Node Ventures helps bridge that gap, bringing together the people, resources, and operating models that allow organizations to turn their expertise into sustainable, meaningful work.",
    cards: [{
      t: "Operational capacity",
      image: "assets/why-nfp-capacity.jpg",
      imagePosition: "center 65%",
      b: "Give organizations the support they need to move initiatives and projects forward without the cost and complexity of building a large internal team."
    }, {
      t: "Sustainable business models",
      image: "assets/why-nfp-business.jpg",
      b: "Develop practical revenue and delivery models that support long-term financial stability and reduce dependence on one-time funding."
    }, {
      t: "Program development",
      image: "assets/why-nfp-program.jpg",
      b: "Turn mandates into actionable programs and defined projects, then provide the hands-on support to execute them and deliver measurable results."
    }, {
      t: "Funding & project opportunities",
      image: "assets/why-nfp-funding.jpg",
      b: "Build the capacity to identify, pursue, and deliver funded projects, contracts, and new opportunities that advance the organization's mission."
    }, {
      t: "Access to expertise",
      image: "assets/why-nfp-expertise.jpg",
      imagePosition: "center 65%",
      b: "Leverage the Node Collective to bring together technical specialists, business leaders, and operational talent around specific organizational needs."
    }, {
      t: "Strategic partnerships",
      image: "assets/why-nfp-partnerships.jpg",
      imagePosition: "center 30%",
      b: "Connect industry, government, academia, and technology partners to create new opportunities for collaboration and collective impact."
    }]
  },
  // Several quotes → shown as a carousel with arrow buttons (like the homepage).
  quotes: [{
    text: "Our partnership with AECO Innovation Lab helped buildingSMART Canada advance key projects. It's exciting to see Node Ventures build on this successful model and extend its support to more not-for-profits across the industry.",
    portrait: "assets/quote-not-for-profit.jpg",
    logo: "assets/buildingsmart-canada-logo-v6.png",
    logoAlt: "buildingSMART Canada",
    lines: ["Gordon McElravy, Board of Directors", "buildingSMART Canada"]
  }, {
    text: "Node Ventures has provided One Ontario with the operational resources and expertise needed to build our organization, advance key initiatives, and bring our ambitious vision to life.",
    // portrait: none yet, shows a grey placeholder
    logo: "assets/one-ontario-logo.svg",
    logoAlt: "One Ontario",
    lines: ["Richard Lyall, Chair of the Board", "One Ontario"]
  }],
  getInvolved: {
    eyebrow: "Get involved",
    title: ["Put the collective to", "work for your organization."],
    subhead: "Node connects your mission with the expertise, resources, and partnerships needed to move forward.",
    paths: [{
      t: "Bring your organization",
      b: "Have a clear mandate but limited resources to execute it? Work with Node to explore an operational model.",
      cta: "Discuss your organization",
      icon: "assets/getinvolved-contribute.jpg"
    }, {
      t: "Become a contributor",
      b: "Put your expertise to work supporting initiatives that address meaningful industry and community challenges.",
      cta: "Join the collective",
      href: "Contribute",
      icon: "assets/getinvolved-deploy.jpg"
    }, {
      t: "Build a partnership",
      b: "Collaborate with Node to develop programs, mobilize industry expertise, and find solutions to shared challenges.",
      cta: "Let's talk",
      icon: "assets/getinvolved-invest.jpg"
    }]
  },
  cta: {
    title: ["Let's turn your mission", "into lasting impact."],
    body: "Your organization brings the purpose, knowledge, and connections. Node helps bring together the operational capacity and resources to make it happen.",
    primaryCta: "Discuss not-for-profit support",
    primaryHref: "Contact",
    secondaryCta: null
  }
};
