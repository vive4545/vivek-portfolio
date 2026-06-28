import { GraduationCap, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { education, skillGroups, stats } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechBadge } from "@/components/ui/TechBadge";
import { CountUp } from "@/components/ui/CountUp";

export function About() {
  return (
    <Section id="about" label="About Vivek Joshi">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Engineering across the full stack — with a bias for performance."
        description={`Based in ${site.location}, I build production systems end to end: front-end interfaces, the APIs behind them, and the data pipelines that feed them.`}
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        {/* Bio + education */}
        <div className="flex flex-col gap-8">
          <Reveal className="space-y-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I&apos;m a Full Stack Developer with{" "}
              <span className="text-foreground">2+ years</span> of experience shipping scalable
              web apps, high-performance REST APIs, and data-intensive pipelines. I&apos;m happiest
              bridging the front-end and back-end — turning ambiguous product goals into systems
              that stay fast as they grow.
            </p>
            <p>
              My day-to-day spans <span className="text-foreground">Node.js</span> and{" "}
              <span className="text-foreground">React</span> on the product side, and{" "}
              <span className="text-foreground">Python</span> and{" "}
              <span className="text-foreground">Django</span> for data and automation. I care about
              query latency, clean CI/CD, and the small interaction details that make software feel
              considered.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col gap-3">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              <GraduationCap className="h-4 w-4 text-accent" />
              Education
            </h3>
            <ul className="flex flex-col divide-y divide-border/70 overflow-hidden rounded-2xl border border-border/70 bg-surface/40">
              {education.map((e) => (
                <li
                  key={e.degree}
                  className="flex flex-wrap items-center justify-between gap-2 px-5 py-4"
                >
                  <div>
                    <p className="font-medium text-foreground">{e.degree}</p>
                    <p className="text-sm text-muted">{e.institution}</p>
                  </div>
                  <span className="font-mono text-sm text-accent">{e.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Monogram card + stats */}
        <Reveal delay={0.1} className="flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-surface to-surface-2 p-8">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
            <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative flex flex-col items-start gap-5">
              <span className="grid h-20 w-20 place-items-center rounded-2xl bg-accent font-mono text-2xl font-bold text-accent-foreground">
                {site.shortName}
              </span>
              <div>
                <p className="text-lg font-semibold text-foreground">{site.name}</p>
                <p className="text-sm text-muted">{site.role}</p>
              </div>
              <p className="flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 text-accent" />
                {site.location}
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/70 bg-surface/40 p-4"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-2xl font-semibold text-foreground">
                  <CountUp value={s.value} />
                </dd>
                <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <Reveal>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Tech I work with
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-border/70 bg-border/70 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 0.05}
              className="flex flex-col gap-4 bg-surface/40 p-6"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent">
                  <group.icon className="h-[18px] w-[18px]" />
                </span>
                <h4 className="text-sm font-medium text-foreground">{group.label}</h4>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <TechBadge label={skill} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
