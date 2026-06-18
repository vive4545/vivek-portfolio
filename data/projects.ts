import type { Project } from "@/lib/types";

/**
 * Edit project links to point at your real repos / live URLs.
 * Links render only when present, so it's safe to leave private projects
 * without a `links` entry.
 */
export const projects: Project[] = [
  {
    title: "Code Review Genius",
    blurb: "Published NPM package · privacy-first CLI dev assistant",
    description:
      "A 100% offline, privacy-first CLI development assistant powered by local LLMs via Ollama — your code never leaves your machine.",
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
  },
  {
    title: "Remotexs",
    blurb: "Multi-tenant e-library · 300+ institutional sites",
    description:
      "A multi-tenant e-library platform managing 300+ institutional sites (RBI, Symbiosis) from a single codebase.",
    highlights: [
      "HTTP Proxy Middleware for secure URL proxying",
      "API gateway routing across 10+ databases",
      "Single codebase powering 300+ tenant deployments",
    ],
    tech: ["Node.js", "React", "MongoDB", "Express", "HPM"],
    links: [],
  },
  {
    title: "Apifdf",
    blurb: "Trade analytics · 1,800+ active users globally",
    description:
      "A trade analytics platform serving 1,800+ active users globally, hardened with a custom anti-abuse layer.",
    highlights: [
      "Digital fingerprinting system that cut unauthorized access by 92%",
      "Real-time trade analytics over an Elasticsearch backend",
    ],
    tech: ["Node.js", "React", "Elasticsearch"],
    links: [],
  },
  {
    title: "InterviewIQ",
    blurb: "Enterprise behavioral intelligence SDK",
    description:
      "An enterprise behavioral-intelligence SDK that tracks real-time interview signals and scores candidate integrity.",
    highlights: [
      "Weighted AI scoring engine over live interview signals",
      "Modular plugin system: Face, Voice, Browser Integrity",
      "React integration layer that cut integration time by 70%",
    ],
    tech: ["TypeScript", "React", "Node.js", "Socket.io", "MongoDB"],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/@interviewiq/core", type: "npm" },
    ],
  },
  {
    title: "Digital Fingerprinting & Anti-Fraud SDK",
    blurb: "High-entropy device identity · <100ms P95",
    description:
      "A high-entropy device-identification SDK using advanced browser APIs to prevent fraud at scale.",
    highlights: [
      "Device IDs from Canvas 2D, WebGL & WebRTC signals",
      "Integrity verification and bot probing built in",
      "<100ms P95 latency; persistent caching cut recalculations by 90%",
    ],
    tech: ["TypeScript", "Browser APIs", "Monorepo"],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/@vivejoshi/fingerprint-sdk", type: "npm" },
    ],
  },
];
