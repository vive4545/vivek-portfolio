import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site, socials } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CopyButton } from "@/components/ui/CopyButton";

export function Contact() {
  return (
    <Section id="contact" label="Get in touch">
      <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-surface to-background p-8 sm:p-12 lg:p-16">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
        <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-[100px]" />
        <div aria-hidden className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-iris/15 blur-[110px]" />

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">
                <span className="text-muted/70">04</span>
                <span aria-hidden className="h-px w-6 bg-accent/50" />
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Let&apos;s build something <span className="text-gradient">worth shipping.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                I&apos;m currently open to new opportunities and interesting problems. Whether
                you&apos;ve got a role, a project, or just want to talk shop — my inbox is open.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton href={`mailto:${site.email}`} variant="primary">
                <Mail className="h-4 w-4" />
                Say hello
              </MagneticButton>
              <CopyButton value={site.email} label="Copy email" />
            </Reveal>
          </div>

          {/* Direct details + socials */}
          <Reveal delay={0.1} className="w-full max-w-sm">
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-surface/50 p-4 transition-colors hover:border-accent/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-muted">Email</span>
                    <span className="block truncate text-sm text-foreground">{site.email}</span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-surface/50 p-4 transition-colors hover:border-accent/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-muted">Phone</span>
                    <span className="block text-sm text-foreground">{site.phone}</span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-border/70 bg-surface/50 p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted">Location</span>
                  <span className="block text-sm text-foreground">{site.location}</span>
                </span>
              </li>
            </ul>

            <div className="mt-3 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="grid h-11 flex-1 place-items-center rounded-2xl border border-border/70 bg-surface/50 text-muted transition-all hover:border-accent/40 hover:text-accent"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
