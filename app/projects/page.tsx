import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TechBadge } from "@/components/ui/TechBadge";

const description =
  "Selected projects by Vivek Joshi, a full stack developer in Ahmedabad — from a privacy-first developer CLI published on npm to multi-tenant platforms serving 300+ institutions and anti-fraud SDKs. Built with Node.js, React, TypeScript and Python.";

export const metadata: Metadata = {
  title: "Projects — Full Stack Apps, APIs & Developer Tools",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: `${site.url}/projects`,
    title: `Projects · ${site.name}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects · ${site.name}`,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Projects · ${site.name}`,
  description,
  url: `${site.url}/projects`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projects.map((project, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: project.title,
      url: `${site.url}/projects/${project.slug}`,
    })),
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-32 sm:pt-36">
        <div className="shell pb-24">
          {/* Header */}
          <header className="flex max-w-3xl flex-col gap-5">
            <span className="eyebrow">Projects</span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Things I&apos;ve designed, built, and shipped.
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted">
              I&apos;m {site.name}, a full stack developer based in {site.location}. Here&apos;s a
              selection of products and tools I&apos;ve built — from a privacy-first developer CLI
              published on npm to multi-tenant platforms serving hundreds of institutions and
              anti-fraud SDKs used by thousands. Built with Node.js, React, TypeScript and Python.
            </p>
          </header>

          {/* Project list */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative flex flex-col rounded-3xl border border-border/70 bg-surface/40 p-6 transition-colors duration-300 hover:border-accent/40 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <h2 className="text-xl font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h2>
                    <p className="font-mono text-xs text-accent">{project.blurb}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>

                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.tech.map((t) => (
                    <li key={t}>
                      <TechBadge label={t} size="sm" />
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

          {/* Back to home */}
          <div className="mt-14 border-t border-border/70 pt-10">
            <Link
              href="/#top"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
