import { Github, Linkedin, Mail } from "lucide-react";
import type { NavLink, SiteConfig, SocialLink } from "@/lib/types";

export const site: SiteConfig = {
  name: "Vivek Joshi",
  shortName: "VJ",
  role: "AI Engineer & Full Stack Developer",
  tagline: "I build AI tools & automations that save businesses hours | RAG · LLM · AI Agents | Full Stack: React · Node.js · Python | Freelance · Remote",
  valueProp:
    "I build AI tools & automations that save businesses hours — specializing in RAG pipelines, LLM integrations, and autonomous AI agents, backed by production full-stack engineering across React, Node.js, and Python.",
  location: "Remote · India",
  email: "vivekjoshiktm2000@gmail.com",
  phone: "+91 91493 57330",
  phoneHref: "+919149357330",
  resumeUrl: "/Vivek_Joshi_Resume.pdf",
  // Used for metadataBase, Open Graph, sitemap, canonical + JSON-LD.
  // Defaults to the live Vercel URL; override with NEXT_PUBLIC_SITE_URL if you
  // later add a custom domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vivek-portfolio-f1p4.vercel.app",
  availability: "Available for new opportunities",
};

// Root-relative hashes so the nav works from any route: on the homepage they
// scroll in-page; from /projects/* they navigate home and then scroll.
export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/vive4545",
    handle: "github.com/vive4545",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivek-joshi-618384278/",
    handle: "in/vivek-joshi",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:vivekjoshiktm2000@gmail.com",
    handle: "vivekjoshiktm2000@gmail.com",
    icon: Mail,
  },
];
