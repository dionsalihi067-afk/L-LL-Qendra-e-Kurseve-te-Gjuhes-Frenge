"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOURNEY_STEPS } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";

gsap.registerPlugin(ScrollTrigger);

export function LearningJourney() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const line = el.querySelector<HTMLElement>("[data-progress]");
      const steps = el.querySelectorAll<HTMLElement>("[data-step]");

      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 60%",
              end: "bottom 70%",
              scrub: true,
            },
          },
        );
      }

      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { autoAlpha: 0, x: -30 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding relative bg-dark-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,58,113,0.45),transparent_55%)]" />
      <div ref={container} className="container-luxury relative">
        <SectionHeader
          eyebrow="Learning Journey"
          title={<span className="font-display text-white">From first hello to fluent confidence.</span>}
          description="A clear, cinematic path—designed so progress feels inevitable."
        />

        <div className="relative ml-3 md:ml-6">
          <div className="absolute top-0 left-0 h-full w-px origin-top bg-white/10" />
          <div
            data-progress
            className="absolute top-0 left-0 h-full w-px origin-top bg-gradient-to-b from-luxury-gold via-french-red to-french-blue"
          />

          <ol className="space-y-14 pl-10 md:pl-16">
            {JOURNEY_STEPS.map((step) => (
              <li key={step.step} data-step className="relative">
                <span className="absolute top-1 -left-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-luxury-gold/50 bg-dark-navy md:-left-16">
                  <span className="h-2 w-2 rounded-full bg-luxury-gold" />
                </span>
                <p className="font-numbers text-sm tracking-[0.2em] text-luxury-gold">{step.step}</p>
                <h3 className="mt-2 font-heading text-2xl font-semibold md:text-3xl">{step.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
