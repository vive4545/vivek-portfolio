import { ArrowUp } from "lucide-react";
import { navLinks, site, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70">
      <div className="shell py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent font-mono text-sm font-bold text-accent-foreground">
                {site.shortName}
              </span>
              {site.name}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.role} based in {site.location}, building scalable web apps and
              data-intensive systems.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Navigate</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Connect</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      <s.icon className="h-4 w-4" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} {site.name}. Built with Next.js, Tailwind &amp; Framer Motion.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/50 px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/50 hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
