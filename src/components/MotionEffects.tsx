"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    root.dataset.motionReady = "true";

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return () => {
        delete root.dataset.motionReady;
      };
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    targets.forEach((target) => observer.observe(target));

    const visual = document.querySelector<HTMLElement>("[data-parallax]");
    let frame = 0;
    const updateParallax = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!visual) return;
        const distance = (visual.getBoundingClientRect().top - window.innerHeight * 0.42) * -0.045;
        const offset = Math.max(-30, Math.min(30, distance));
        visual.style.setProperty("--parallax-y", `${offset}px`);
      });
    };

    if (visual) {
      updateParallax();
      window.addEventListener("scroll", updateParallax, { passive: true });
      window.addEventListener("resize", updateParallax);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      if (visual) {
        window.removeEventListener("scroll", updateParallax);
        window.removeEventListener("resize", updateParallax);
      }
      delete root.dataset.motionReady;
    };
  }, []);

  return null;
}
