"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  m,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, Globe, Package, Star } from "lucide-react";
import type { Project, ProjectLink } from "@/lib/types";
import { cn } from "@/lib/utils";
import { TechBadge } from "@/components/ui/TechBadge";

const linkIcon = {
  github: Github,
  npm: Package,
  live: Globe,
  docs: Globe,
} as const;

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((link) => {
        const Icon = linkIcon[link.type];
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface-2/50 px-3 py-1.5 text-xs font-medium text-muted transition-colors duration-200 hover:border-accent/50 hover:text-foreground"
          >
            <Icon className="h-3.5 w-3.5" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // Pointer-tracked spotlight that follows the cursor across the card.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 20 });
  const sy = useSpring(my, { stiffness: 150, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(440px circle at ${sx}px ${sy}px, rgb(var(--accent) / 0.10), transparent 70%)`;

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  const featured = project.featured;

  return (
    <m.article
      ref={ref}
      onMouseMove={handleMove}
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-surface/40 p-6 transition-colors duration-300 hover:border-accent/40 sm:p-7",
        featured && "lg:col-span-2 lg:flex-row lg:items-stretch lg:gap-8",
      )}
    >
      {/* Cursor spotlight */}
      <m.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Optional screenshot — lazy-loaded & optimized via next/image. */}
      {project.image ? (
        <div
          className={cn(
            "relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/60",
            featured && "lg:mb-0 lg:w-1/2",
          )}
        >
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            {featured && (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-accent">
                <Star className="h-3 w-3 fill-accent" />
                Featured
              </span>
            )}
            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-accent">{project.blurb}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>

        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-col gap-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-muted">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span className="text-pretty">{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-4 pt-6">
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t}>
                <TechBadge label={t} size="sm" />
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <ProjectLinks links={project.links} />
            {/* Relative z-index keeps this link clickable above the spotlight overlay. */}
            <Link
              href={`/projects/${project.slug}`}
              className="relative z-10 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors duration-200 hover:text-foreground"
            >
              Read case study
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </m.article>
  );
}
