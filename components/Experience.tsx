import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechBadge } from "@/components/ui/TechBadge";

export function Experience() {
  return (
    <Section id="experience" label="Work experience">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Where I've been building."
        description="A track record of shipping performant systems and turning messy data into reliable products."
      />

      <ol className="relative mt-14 flex flex-col">
        {/* Continuous timeline rail */}
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:left-[9px]"
        />

        {experience.map((job, i) => (
          <li key={`${job.company}-${job.role}`} className="relative pl-8 pb-12 last:pb-0 md:pl-12">
            {/* Node */}
            <span
              aria-hidden
              className="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border border-accent/50 bg-background md:h-[19px] md:w-[19px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent md:h-2 md:w-2" />
            </span>

            <Reveal delay={i * 0.05}>
              <div className="rounded-3xl border border-border/70 bg-surface/40 p-6 transition-colors duration-300 hover:border-accent/40 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {job.role}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-2 text-accent">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-medium">{job.company}</span>
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface-2/50 px-3 py-1 font-mono text-xs text-muted">
                    {job.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
                    )}
                    {job.period}
                  </span>
                </div>

                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-base">
                  {job.summary}
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span className="text-pretty">{b}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <li key={t}>
                      <TechBadge label={t} size="sm" />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
