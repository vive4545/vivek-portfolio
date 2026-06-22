import type { Project } from "@/lib/types";

/**
 * Edit project links to point at your real repos / live URLs.
 * Links render only when present, so it's safe to leave private projects
 * without a `links` entry.
 *
 * Each project has its own page at /projects/[slug] (see app/projects), so
 * `slug`, `metaDescription` and `caseStudy` feed real, indexable content and
 * unique metadata to search engines.
 */
export const projects: Project[] = [
  {
    slug: "code-review-genius",
    title: "Code Review Genius",
    blurb: "Published NPM package · privacy-first CLI dev assistant",
    description:
      "A 100% offline, privacy-first CLI development assistant powered by local LLMs via Ollama — your code never leaves your machine.",
    metaDescription:
      "Code Review Genius is a 100% offline, privacy-first CLI development assistant powered by local LLMs through Ollama. A local RAG pipeline, AST-aware code scanning and an AI review engine — built and published to npm by full stack developer Vivek Joshi.",
    context: "Open-source developer tool · published on npm",
    highlights: [
      "Local RAG pipeline with an AST-aware code scanner and a custom vector store",
      "AI code-review engine using qwen2.5-coder for security auditing & refactoring",
      "Interactive REPL with streaming output and slash commands",
      "Auto Conventional Commit message generation",
    ],
    tech: ["Node.js (ESM)", "Ollama", "Commander.js", "Vector Embeddings"],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/code-review-genius", type: "npm" },
      { label: "GitHub", href: "https://github.com/vive4545/code-review-genius", type: "github" },
    ],
    featured: true,
    caseStudy: [
      {
        heading: "Why I built it",
        body: "Most AI coding assistants ship your source code to a remote API to work. For teams under NDA, or anyone building proprietary systems, that's a non-starter. Code Review Genius runs entirely on your own machine using local models through Ollama, so no code, secrets, or project context ever leaves the device.",
      },
      {
        heading: "How it works",
        body: "At its core is a local Retrieval-Augmented Generation (RAG) pipeline. An AST-aware scanner parses the codebase into meaningful units, embeds them in a custom vector store, and retrieves the most relevant context for each request. The review engine then uses the qwen2.5-coder model to perform security auditing, surface bugs, and suggest refactors grounded in your actual code rather than generic advice.",
      },
      {
        heading: "Developer experience",
        body: "It ships as an interactive REPL with streaming output and slash commands, plus automatic Conventional Commit message generation from your staged changes. The whole tool is built in modern Node.js (ESM) with Commander.js and is published as an installable npm package, so any developer can add private, offline AI review to their workflow in seconds.",
      },
    ],
  },
  {
    slug: "remotexs",
    title: "Remotexs",
    blurb: "Multi-tenant e-library · 300+ institutional sites",
    description:
      "A multi-tenant e-library platform managing 300+ institutional sites (RBI, Symbiosis) from a single codebase.",
    metaDescription:
      "Remotexs is a multi-tenant e-library platform serving 300+ institutional sites — including RBI and Symbiosis — from a single Node.js, React and MongoDB codebase, with an API gateway across 10+ databases. Full stack case study by Vivek Joshi.",
    context: "Multi-tenant SaaS platform · Node.js & React",
    highlights: [
      "HTTP Proxy Middleware for secure URL proxying",
      "API gateway routing across 10+ databases",
      "Single codebase powering 300+ tenant deployments",
    ],
    tech: ["Node.js", "React", "MongoDB", "Express", "HPM"],
    links: [],
    caseStudy: [
      {
        heading: "The challenge",
        body: "Remotexs delivers secure remote access to licensed e-library resources for over 300 institutions — including the Reserve Bank of India and Symbiosis. Each institution needs its own branding, content, and access rules, but maintaining 300 separate codebases would have been impossible to scale or keep secure.",
      },
      {
        heading: "Multi-tenant architecture",
        body: "I built it as a true multi-tenant platform: one codebase powers every institutional deployment. An API gateway routes each request to the correct tenant and across 10+ databases, isolating every institution's data while sharing a single application layer — so a fix or feature ships to all 300+ sites at once.",
      },
      {
        heading: "Secure proxying",
        body: "Authenticated users reach publisher resources through HTTP Proxy Middleware, which securely proxies upstream URLs without ever exposing the real endpoints. The stack — Node.js, Express, React and MongoDB — keeps the platform fast and maintainable at institutional scale.",
      },
    ],
  },
  {
    slug: "apifdf",
    title: "Apifdf",
    blurb: "Trade analytics · 1,800+ active users globally",
    description:
      "A trade analytics platform serving 1,800+ active users globally, hardened with a custom anti-abuse layer.",
    metaDescription:
      "Apifdf is a trade analytics platform serving 1,800+ active users worldwide, with real-time analytics on Elasticsearch and a custom digital-fingerprinting anti-abuse layer that cut unauthorized access by 92%. Built by full stack developer Vivek Joshi.",
    context: "Trade analytics platform · global user base",
    highlights: [
      "Digital fingerprinting system that cut unauthorized access by 92%",
      "Real-time trade analytics over an Elasticsearch backend",
    ],
    tech: ["Node.js", "React", "Elasticsearch"],
    links: [],
    caseStudy: [
      {
        heading: "Overview",
        body: "Apifdf is a trade analytics platform used by more than 1,800 active users across the globe. It turns large, fast-moving trade datasets into real-time insight, so users can act on market data the moment it lands.",
      },
      {
        heading: "Real-time analytics on Elasticsearch",
        body: "The analytics layer is built on an Elasticsearch backend, which gives the platform fast full-text search and aggregation over very large trade datasets. That's what keeps queries and dashboards responsive even as data volume and the user base grow.",
      },
      {
        heading: "Anti-abuse layer",
        body: "Because access to the data has real value, account sharing and unauthorized access were a constant threat. I built a custom digital-fingerprinting system that identifies devices and flags abuse patterns — cutting unauthorized access by 92% while staying invisible to legitimate users.",
      },
    ],
  },
  {
    slug: "interviewiq",
    title: "InterviewIQ",
    blurb: "Enterprise behavioral intelligence SDK",
    description:
      "An enterprise behavioral-intelligence SDK that tracks real-time interview signals and scores candidate integrity.",
    metaDescription:
      "InterviewIQ is an enterprise behavioral-intelligence SDK that scores candidate integrity from real-time interview signals, with modular Face, Voice and Browser-Integrity plugins and a React integration layer. Built with TypeScript and Node.js by Vivek Joshi.",
    context: "Enterprise SDK · TypeScript & React",
    highlights: [
      "Weighted AI scoring engine over live interview signals",
      "Modular plugin system: Face, Voice, Browser Integrity",
      "React integration layer that cut integration time by 70%",
    ],
    tech: ["TypeScript", "React", "Node.js", "Socket.io", "MongoDB"],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/@interviewiq/core", type: "npm" },
    ],
    caseStudy: [
      {
        heading: "What it does",
        body: "InterviewIQ is an enterprise SDK that scores candidate integrity during live interviews. It ingests real-time behavioral signals and feeds them into a weighted AI scoring engine, giving teams an objective, continuously-updated read on each session.",
      },
      {
        heading: "Modular by design",
        body: "Detection is split into independent plugins — Face, Voice, and Browser Integrity — so teams can enable exactly the signals they need. Real-time signal streaming is handled over Socket.io, with TypeScript end-to-end and MongoDB for persistence.",
      },
      {
        heading: "Built to drop in",
        body: "A dedicated React integration layer cut the time to wire InterviewIQ into an existing product by 70%, turning what would be a multi-week integration into a same-day one. The core is published on npm as @interviewiq/core.",
      },
    ],
  },
  {
    slug: "fingerprint-sdk",
    title: "Digital Fingerprinting & Anti-Fraud SDK",
    blurb: "High-entropy device identity · <100ms P95",
    description:
      "A high-entropy device-identification SDK using advanced browser APIs to prevent fraud at scale.",
    metaDescription:
      "A high-entropy digital-fingerprinting and anti-fraud SDK that derives stable device identity from Canvas, WebGL and WebRTC signals at <100ms P95 latency. Built in TypeScript as a monorepo by Vivek Joshi.",
    context: "Anti-fraud SDK · TypeScript monorepo",
    highlights: [
      "Device IDs from Canvas 2D, WebGL & WebRTC signals",
      "Integrity verification and bot probing built in",
      "<100ms P95 latency; persistent caching cut recalculations by 90%",
    ],
    tech: ["TypeScript", "Browser APIs", "Monorepo"],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/@vivejoshi/fingerprint-sdk", type: "npm" },
    ],
    caseStudy: [
      {
        heading: "The problem",
        body: "Stopping fraud online starts with reliably recognising a device — even when users clear cookies or switch accounts. This SDK derives a high-entropy, stable device identity entirely in the browser, with no invasive tracking.",
      },
      {
        heading: "How identity is derived",
        body: "It combines signals from advanced browser APIs — Canvas 2D, WebGL and WebRTC — into a single high-entropy fingerprint, with integrity verification and bot probing built in to catch spoofed or automated clients.",
      },
      {
        heading: "Engineered for speed",
        body: "Performance was a hard requirement: the SDK runs at under 100ms P95 latency, and a persistent caching layer cut repeat recalculations by 90%. It's written in TypeScript and structured as a monorepo, and is published on npm.",
      },
    ],
  },
];

/** Look up a single project by its URL slug. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
