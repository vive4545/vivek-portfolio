import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site, socials } from "@/data/site";
import { skillGroups, education } from "@/data/skills";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600"],
});

const description = site.valueProp;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Vivek Joshi",
    "Full Stack Developer",
    "Node.js",
    "React",
    "Python",
    "Django",
    "TypeScript",
    "REST API",
    "Ahmedabad",
    "Software Engineer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
    creator: "@vivekjoshi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#08080b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: site.valueProp,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  url: site.url,
  image: `${site.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  // Skills — helps Google associate you with these technologies.
  knowsAbout: skillGroups.flatMap((g) => g.skills),
  // Education — strengthens entity recognition for your name.
  alumniOf: education.map((e) => ({
    "@type": "CollegeOrUniversity",
    name: e.institution,
  })),
  // Verified profiles across the web — the strongest signal that all these
  // accounts are the same person, which is what ranks you #1 for your name.
  sameAs: socials
    .filter((s) => s.href.startsWith("http"))
    .map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla's
          cz-shortcut-listen, Grammarly) inject attributes on <body> before
          hydration. This silences only those benign attribute mismatches. */}
      <body suppressHydrationWarning>
        {/* Accessibility: jump straight to content for keyboard / screen-reader users. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
