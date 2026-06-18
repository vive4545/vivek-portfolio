import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Pyther Innovations",
    period: "Jun 2024 – Present",
    start: "2024-06",
    current: true,
    summary:
      "Own end-to-end delivery of full-stack features across a microservice platform, with a focus on performance and reliability.",
    bullets: [
      "Shipped full-stack features with Node.js and React, cutting page load from 3.2s to 1.1s (65%)",
      "Optimized MongoDB / MySQL / Elasticsearch schemas, reducing query time from 450ms to 80ms (82%)",
      "Built REST APIs handling 5,000 req/min at <100ms latency across microservices",
      "Drove CI/CD via GitHub Actions in Agile 2-week sprints",
    ],
    stack: ["Node.js", "React", "MongoDB", "MySQL", "Elasticsearch", "GitHub Actions"],
  },
  {
    role: "Python Developer",
    company: "Spectrics Solutions",
    period: "Dec 2023 – May 2024",
    start: "2023-12",
    summary:
      "Built data automation and analytics pipelines that unified fragmented business data into a single source of truth.",
    bullets: [
      "Automated data workflows with Python / Django, cutting manual processing by 60%",
      "Integrated 5+ sources (Salesforce, HubSpot, Google Analytics) into a unified pipeline",
      "Used Django ORM to eliminate 90% of raw SQL; built live Power BI dashboards on PostgreSQL",
    ],
    stack: ["Python", "Django", "PostgreSQL", "Power BI"],
  },
];
