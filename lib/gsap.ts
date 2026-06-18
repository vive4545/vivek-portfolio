let gsapInstance: typeof import("gsap").gsap | null = null;
let scrollTriggerInstance: typeof import("gsap/ScrollTrigger").ScrollTrigger | null = null;

async function initGsap() {
  if (gsapInstance) return { gsap: gsapInstance, ScrollTrigger: scrollTriggerInstance };

  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsapInstance = gsap;
  scrollTriggerInstance = ScrollTrigger;

  return { gsap, ScrollTrigger };
}

export async function getGsap() {
  return initGsap();
}
