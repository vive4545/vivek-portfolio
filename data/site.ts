import { Github, Linkedin, Mail } from "lucide-react";
import type { NavLink, SiteConfig, SocialLink } from "@/lib/types";

export const site: SiteConfig = {
  name: "Vivek Joshi",
  shortName: "VJ",
  role: "Full Stack Developer",
  tagline: "Full Stack Developer building scalable web apps & data-intensive systems.",
  valueProp:
    "I architect and ship scalable web apps, high-performance REST APIs, and data-intensive pipelines — bridging front-end and back-end with Node.js, React, Python, and Django.",
  location: "Ahmedabad, India",
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

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
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
