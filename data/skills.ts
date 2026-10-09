import { Cloud, Code2, Database, Layers } from "lucide-react";
import type { EducationItem, SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    label: "Frameworks & Libraries",
    icon: Layers,
    skills: ["Next.js", "Node.js", "React.js", "Express.js", "Django", "Socket.io", "Vite", "Tailwind CSS"],
  },
  {
    label: "Databases & Search",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Elasticsearch", "Redis"],
  },
  {
    label: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Cloudflare R2", "GitHub Actions", "Docker", "Nginx", "Linux", "Git"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.Sc. Information Technology",
    institution: "GLS University",
    year: "2022",
  },
  {
    degree: "B.Sc. Statistics & IT",
    institution: "Gujarat University",
    year: "2020",
  },
];

/** Headline stats shown in the About section. */
export const stats = [
  { value: "2+", label: "Years shipping production" },
  { value: "5k", label: "API req/min handled" },
  { value: "82%", label: "Query time reduced" },
  { value: "1,800+", label: "Users served globally" },
];
