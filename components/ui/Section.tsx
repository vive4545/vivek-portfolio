import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  /** aria-label for the section landmark. */
  label: string;
  children: ReactNode;
  className?: string;
}

/** Consistent vertical rhythm + a labelled landmark for every page section. */
export function Section({ id, label, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("scroll-mt-24 py-20 sm:py-28 lg:py-32", className)}
    >
      <div className="shell">{children}</div>
    </section>
  );
}
