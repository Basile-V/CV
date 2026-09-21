import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis: Lenis | null = null;

if (!prefersReducedMotion) {
  lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

// Hero entrance (runs once on load, not scroll-triggered)
const heroTargets = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
if (heroTargets.length) {
  gsap.set(heroTargets, { opacity: 0, y: 24 });
  gsap.to(heroTargets, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.12,
    delay: 0.15,
  });
}

// Generic reveal-on-scroll for individual elements
gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
  gsap.set(el, { opacity: 0, y: 32 });
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      once: true,
    },
  });
});

// Staggered reveal for groups of items (skills badges, project cards, etc.)
gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
  const items = group.querySelectorAll<HTMLElement>("[data-reveal-item]");
  if (!items.length) return;
  gsap.set(items, { opacity: 0, y: 24 });
  gsap.to(items, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.08,
    scrollTrigger: {
      trigger: group,
      start: "top 80%",
      once: true,
    },
  });
});

// Timeline vertical line draws in as the experience section scrolls by
const timelineLine = document.querySelector<HTMLElement>("[data-timeline-line]");
const timelineSection = document.querySelector<HTMLElement>("[data-timeline]");
if (timelineLine && timelineSection) {
  gsap.set(timelineLine, { scaleY: 0, transformOrigin: "top center" });
  gsap.to(timelineLine, {
    scaleY: 1,
    ease: "none",
    scrollTrigger: {
      trigger: timelineSection,
      start: "top 70%",
      end: "bottom 60%",
      scrub: true,
    },
  });
}

// Expandable cards (experience timeline, project case studies): click to reveal full details
document.querySelectorAll<HTMLElement>("[data-expand-toggle]").forEach((toggle) => {
  const card = toggle.closest<HTMLElement>("[data-expand-card]");
  const details = card?.querySelector<HTMLElement>("[data-expand-details]");
  if (!card || !details) return;

  gsap.set(details, { height: 0, opacity: 0, overflow: "hidden" });

  toggle.addEventListener("click", () => {
    const isOpen = card.getAttribute("data-open") === "true";
    card.setAttribute("data-open", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(!isOpen));

    if (isOpen) {
      gsap.to(details, { height: 0, opacity: 0, duration: 0.35, ease: "power2.inOut" });
    } else {
      gsap.set(details, { height: "auto" });
      const target = details.offsetHeight;
      gsap.fromTo(
        details,
        { height: 0, opacity: 0 },
        {
          height: target,
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
          onComplete: () => gsap.set(details, { height: "auto" }),
        },
      );
    }
  });
});

// Scroll-to-top button: fades in past one viewport height, scrolls smoothly to top
const scrollTopButton = document.querySelector<HTMLElement>("[data-scroll-top]");
if (scrollTopButton) {
  const toggleVisibility = () => {
    scrollTopButton.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.6);
  };
  toggleVisibility();
  window.addEventListener("scroll", toggleVisibility, { passive: true });

  scrollTopButton.addEventListener("click", () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}
