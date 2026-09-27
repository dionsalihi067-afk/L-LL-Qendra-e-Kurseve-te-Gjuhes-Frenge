"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/data/content";
import { formatNumber } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>("[data-count]").forEach((node) => {
        const target = Number(node.dataset.count ?? 0);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 85%",
          },
          onUpdate: () => {
            node.textContent = formatNumber(Math.round(obj.val));
          },
        });
      });

      gsap.fromTo(
        el.querySelectorAll("[data-stat]"),
        { autoAlpha: 0, y: 40, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 75%" },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,58,113,0.06),rgba(200,166,70,0.08),rgba(230,57,70,0.05))]" />
      <div className="container-luxury relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} data-stat className="text-center lg:text-left">
            <p className="font-numbers text-5xl font-medium tracking-tight text-french-blue md:text-6xl">
              <span data-count={stat.value}>0</span>
              <span className="text-luxury-gold">{stat.suffix}</span>
            </p>
            <p className="mt-3 font-heading text-sm tracking-[0.18em] text-dark-navy/55 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
