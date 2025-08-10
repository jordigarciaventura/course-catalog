import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initializeHeroAnimation(): gsap.core.Timeline | null {
  gsap.registerPlugin(ScrollTrigger);

  const heroContainer = document.getElementById("hero-container");
  const heroContent = document.getElementById("hero-content");
  const heroStats = document.getElementById("hero-stats");
  const heroBackground = document.getElementById("hero-background");

  if (!heroContainer || !heroContent || !heroStats || !heroBackground) {
    console.warn("Hero animation elements not found");
    return null;
  }

  // Clear any existing ScrollTriggers for this element
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.trigger === heroContainer) {
      trigger.kill();
    }
  });

  // Set initial states to ensure elements start in correct position
  gsap.set([heroContent, heroStats, heroBackground], {
    clearProps: "all", // Clear any previous transforms
  });

  // Create a timeline for coordinated animations
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: heroContainer,
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
  });

  // Animate hero content (text)
  timeline.to(
    heroContent,
    {
      y: -50,
      filter: "blur(50px)",
      ease: "power2.out",
      scale: 0.9,
    },
    0.1,
  );

  // Animate stats cards
  timeline.to(
    heroStats,
    {
      y: -120,
      filter: "blur(100px)",
      ease: "power2.out",
      scale: 1.1,
    },
    0,
  );

  // Animate background pattern
  timeline.to(
    heroBackground,
    {
      scale: 1.5,
      y: -20,
      rotation: 5,
      filter: "blur(25px)",
      ease: "power1.out",
    },
    0.05,
  );

  return timeline;
}

export function refreshHeroAnimation(): void {
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh();
  }
}

export function killHeroAnimation(): void {
  ScrollTrigger.getAll().forEach((trigger) => {
    const heroContainer = document.getElementById("hero-container");
    if (trigger.trigger === heroContainer) {
      trigger.kill();
    }
  });
}
