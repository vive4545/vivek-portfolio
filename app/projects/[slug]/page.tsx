import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Globe, Mail, Package } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { site } from "@/data/site";
import type { ProjectLink } from "@/lib/types";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TechBadge } from "@/components/ui/TechBadge";

// Only the slugs below exist — anything else 404s instead of rendering.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  // e.g. "Apifdf — Trade analytics platform" (the name template appends "· Vivek Joshi").
  const title = `${project.title} — ${project.context.split("·")[0].trim()}`;
  const url = `${site.url}/projects/${project.slug}`;

  return {
    title,
    description: project.metaDescription,
    keywords: [project.title, ...project.tech, "Vivek Joshi", site.role],
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url,
      title: `${title} · ${site.name}`,
      description: project.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description: project.metaDescription,
    },
  };
}

const linkIcon = {
  github: Github,
  npm: Package,
  live: Globe,
  docs: Globe,
} as const;

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {links.map((link) => {
        const Icon = linkIcon[link.type];
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface-2/50 px-4 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:border-accent/50 hover:text-foreground"
          >
            <Icon className="h-4 w-4" />
            {link.label}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        );
      })}
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Breadcrumb structured data — helps Google show the Home › Projects › X trail.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${site.url}/projects` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${site.url}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main id="main" className="pt-32 sm:pt-36">
        <article className="shell pb-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/projects" className="transition-colors hover:text-foreground">
                  Projects
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">{project.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mt-10 flex max-w-3xl flex-col gap-5">
            <span className="eyebrow">{project.context}</span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="font-mono text-sm text-accent">{project.blurb}</p>
            <p className="text-pretty text-lg leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="pt-1">
              <ProjectLinks links={project.links} />
            </div>
          </header>

          {/* Tech stack */}
          <section aria-label="Tech stack" className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Tech stack
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t}>
                  <TechBadge label={t} />
                </li>
              ))}
            </ul>
          </section>

          {/* Case study prose */}
          <div className="mt-14 flex max-w-3xl flex-col gap-10">
            {project.caseStudy.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {section.heading}
                </h2>
                <p className="mt-3 text-pretty text-base leading-relaxed text-muted">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {/* Highlights */}
          <section aria-label="Highlights" className="mt-14 max-w-3xl">
            <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Highlights
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-base text-muted">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-pretty">{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <div className="mt-16 flex flex-col gap-4 border-t border-border/70 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              All projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform duration-200 hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" />
              Start a project with me
            </Link>
          </div>
        </article>
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
