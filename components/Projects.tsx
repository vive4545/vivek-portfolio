import { projects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <Section id="projects" label="Selected projects">
      <SectionHeading
        index="02"
        eyebrow="Projects"
        title="Things I've designed, built, and shipped."
        description="A selection of products and tools — from a published, privacy-first developer CLI to multi-tenant platforms and anti-fraud SDKs serving thousands of users."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 2) * 0.06}
            className={project.featured ? "lg:col-span-2" : undefined}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
