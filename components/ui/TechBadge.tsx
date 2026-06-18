import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  size?: "sm" | "md";
  className?: string;
}

/** Monospace tech chip used by the skills grid and project cards. */
export function TechBadge({ label, size = "md", className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/80 bg-surface-2/60 font-mono text-muted transition-colors duration-200 hover:border-accent/40 hover:text-foreground",
        size === "sm" ? "px-2.5 py-1 text-[0.7rem]" : "px-3 py-1.5 text-xs",
        className,
      )}
    >
      {label}
    </span>
  );
}
