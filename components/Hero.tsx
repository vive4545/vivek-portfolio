"use client";

import Image from "next/image";
import { m, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { site, socials } from "@/data/site";
import { easeOut } from "@/lib/motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Parallax } from "@/components/ui/Parallax";
import { HeroBackground } from "@/components/three/HeroBackground";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export function Hero() {
  const reduced = useReducedMotion();

  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <Parallax className="pointer-events-none absolute inset-0" speed={0.22}>
        <HeroBackground />
      </Parallax>

      <div className="shell relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 pt-6 pb-12">
          {/* Left Column: Text & CTAs */}
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start gap-6 lg:col-span-7"
          >
            {/* Availability pill */}
            <m.div variants={item}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-surface/50 px-4 py-1.5 text-sm text-muted backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {site.availability}
              </span>
            </m.div>

            {/* Name + role */}
            <div className="flex flex-col gap-3">
              <m.p
                variants={item}
                className="font-mono text-sm text-accent sm:text-base"
              >
                Hi, I&apos;m
              </m.p>
              <m.h1
                variants={item}
                className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.25rem]"
              >
                <span className="text-gradient">{site.name}</span>
              </m.h1>
              <m.p
                variants={item}
                className="text-balance text-xl font-medium text-foreground/90 sm:text-2xl md:text-3xl"
              >
                {site.role}{" "}
                <span className="text-muted block sm:inline mt-1 sm:mt-0">— RAG · LLM · AI Agents · Full Stack</span>
              </m.p>
            </div>

            {/* Value prop */}
            <m.p
              variants={item}
              className="max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            >
              {site.valueProp}
            </m.p>

            {/* CTAs */}
            <m.div variants={item} className="flex flex-wrap items-center gap-3 pt-1">
              <MagneticButton href="#projects" variant="primary">
                View Work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
              <MagneticButton
                href={site.resumeUrl}
                variant="secondary"
                external
                ariaLabel="Download resume (opens in a new tab)"
              >
                <Download className="h-4 w-4" />
                Resume
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                <Mail className="h-4 w-4" />
                Contact
              </MagneticButton>
            </m.div>

            {/* Socials */}
            <m.ul variants={item} className="flex items-center gap-1 pt-1">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-transparent text-muted transition-all duration-200 hover:border-border hover:bg-surface hover:text-accent"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </m.ul>
          </m.div>

          {/* Right Column: Featured Cutout Portrait */}
          <m.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="relative flex items-center justify-center lg:col-span-5 order-first lg:order-last"
          >
            {/* Atmospheric teal/emerald radial glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-8 h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] rounded-full bg-accent/25 blur-[90px] -z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute top-10 h-[200px] w-[200px] rounded-full bg-emerald-400/20 blur-[60px] -z-10"
            />

            {/* Portrait Cutout with soft drop shadow */}
            <div className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[440px] aspect-[3/4] max-h-[560px]">
              <Image
                src="/hero-portrait.png"
                alt={site.name}
                fill
                priority
                sizes="(max-width: 768px) 340px, 440px"
                className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)]"
              />
            </div>
          </m.div>
        </div>
      </div>

      {/* Scroll cue */}
      <m.a
        href="#about"
        aria-label="Scroll to about section"
        variants={item}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted sm:flex"
      >
        <span className="font-mono uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-scroll-cue" />
      </m.a>
    </section>
  );
}
