// Content for the Enterprise AI domain page. [DRAFT COPY — replace with final.]
// Layout lives in DomainPage.jsx. Add `image:` fields when assets are supplied.
window.DOMAIN_ENTERPRISE_AI = {
  eyebrow: "Enterprise AI",
  navLabel: "Enterprise AI",

  hero: {
    headline: "Transforming enterprise systems into AI workflows.",
    body: "Move from scattered data and manual processes to governed AI systems. We build the secure foundation and deploy agents that automate real work, improve knowledge access, and create measurable operational value.",
    image: "assets/hero-enterprise-ai.jpg",
    primaryCta: "Start your transformation",
    secondaryCta: null,
  },

  why: {
    title: "AI is only as strong as the foundation beneath it.",
    lead: "Most organizations are experimenting with AI, but few are ready to scale it safely. Data is scattered, workflows are patchy, and governance is added too late. Node helps organizations close that gap by preparing the workplace, connecting data, and deploying AI agents within clear security and access boundaries.",
    cards: [
      { t: "Data readiness", image: "assets/why-ea-readiness.jpg", b: "Unify your documents, systems, and records into a governed knowledge layer that agents can query." },
      { t: "Workplace modernization", image: "assets/why-ea-workplace.jpg", b: "Move teams onto cloud-native platforms where knowledge, access, and collaboration are easier to manage." },
      { t: "Process automation", image: "assets/why-ea-process.jpg", b: "Identify high-value workflows where AI agents can reduce manual effort and improve consistency." },
      { t: "Agentic AI deployment", image: "assets/why-ea-deploy.jpg", b: "Design and deploy role-specific agents that operate within defined tasks, permissions, and escalation paths." },
      { t: "Security & governance", image: "assets/why-ea-security.jpg", b: "Build access control, audit logging, human review, and compliance into the architecture from day one." },
      { t: "Conversational AI", image: "assets/why-ea-conversational.jpg", b: "Create voice and text assistants grounded in your organization's own data and processes, not generic AI responses." },
    ],
  },

  quote: {
    text: "AI agents are only useful when they can access the right data, follow the right permissions, and operate within clear governance. They need the foundation that makes them secure, reliable, and valuable inside real organizations.",
    logo: "assets/landlogic-logo.svg",
    logoAlt: "LandLogic",
    lines: ["Contributor: Houman Haghighatgou", "Venture: LandLogic"],
    portrait: "assets/quote-enterprise.jpg",
  },

  getInvolved: {
    eyebrow: "How it works",
    layout: "stacked",
    title: "Build the foundation first. Then assess and deploy.",
    subhead: "Node's AI transformation model is built in two phases. First, we prepare the organization's data, workplace systems, and access controls. Then we deploy agentic AI in focused cohorts, using governed infrastructure, scoped permissions, and measurable performance benchmarks.",
    paths: [
      { label: "Phase 1", t: "Data readiness", b: "Prepare the organization for AI by modernizing workplace systems, organizing data, connecting key sources, and establishing the access controls and governance agents will rely on." },
      { label: "Phase 2", t: "AI opportunity mapping", b: "Identify the workflows, pain points, and decision bottlenecks where AI can create measurable value, then prioritize the use cases that are practical and ready for implementation." },
      { label: "Phase 3", t: "Agentic AI deployment", b: "Deploy governed AI agents into selected workflows with defined tasks, permissions, escalation paths, audit logging, and performance tracking." },
    ],
  },

  hideVentures: true,

  ventures: {
    title: "Discover ventures across the Node ecosystem.",
    lead: "Node Ventures is home to companies tackling meaningful challenges across multiple industries. Each venture benefits from Node's shared network of expertise, capital, technology, and strategic partnerships.",
  },

  cta: {
    title: "Build AI systems that your organization can trust.",
    body: "Prepare your data, modernize your workflows, and deploy governed AI agents that deliver real-world value to your business.",
    primaryCta: "Start your transformation",
    secondaryCta: null,
  },
};
