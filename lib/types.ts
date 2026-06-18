import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  handle: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  valueProp: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  resumeUrl: string;
  url: string;
  availability: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  type: "github" | "npm" | "live" | "docs";
}

export interface Project {
  title: string;
  blurb: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
  featured?: boolean;
  /** Optional screenshot in /public/projects — rendered with next/image when set. */
  image?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  start: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  stack: string[];
}

export interface SkillGroup {
  label: string;
  icon: LucideIcon;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}
