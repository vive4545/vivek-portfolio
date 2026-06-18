type ClassValue = string | number | false | null | undefined;

/**
 * Tiny className joiner — keeps the bundle lean (no clsx/tailwind-merge dep).
 * Filters falsy values and joins with a space.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
