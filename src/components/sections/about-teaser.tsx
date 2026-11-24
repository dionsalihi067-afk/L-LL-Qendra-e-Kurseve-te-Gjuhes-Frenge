"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "@/components/ui/section-header";
import { MagneticButton } from "@/components/ui/magnetic-button";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = [
  {
    title: "Nivelet A1–B2",
    description: "Kurse të strukturuara sipas Kornizës së Përbashkët Evropiane të Referencës.",
  },
  {
    title: "Përgatitje DELF",
    description: "Praktikë e dedikuar për provimet zyrtare të gjuhës frënge.",
  },
  {
    title: "Mësim Online",
    description: "Kurse live online që mundësojnë mësimin nga kudo.",
  },
];

export function AboutTeaser() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-mile]"),
        { autoAlpha: 0, x: 40 },
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el.querySelector("[data-timeline]"), start: "top 75%" },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-luxury grid items-center gap-14 lg:grid-cols-2">
        <div className="relative flex items-center justify-center">
          <div className="relative h-[400px] w-full max-w-md overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-french-blue via-[#1a4f8f] to-dark-navy shadow-lift">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center text-white">
              <span className="font-display text-7xl tracking-wide">L&LL</span>
              <span className="mt-4 font-heading text-sm tracking-[0.25em] text-luxury-gold uppercase">
                Prishtinë, Kosovë
              </span>
              <span className="mt-2 text-sm text-white/60">Est. 2026</span>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Rreth Nesh"
            title={<span className="font-display">Qendra juaj e gjuhës frënge në Prishtinë.</span>}
            description="L&LL është qendër e kurseve të gjuhës frënge e themeluar në vitin 2026 në Prishtinë, e dedikuar për mësimin cilësor të frëngjishtes nga niveli fillestar deri në të avancuar."
          />
          <div data-timeline className="space-y-6 border-l border-french-blue/15 pl-6">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} data-mile>
                <h3 className="font-heading text-lg font-semibold text-dark-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-dark-navy/60">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <MagneticButton href="/rreth-nesh" variant="primary">
              Mëso më shumë
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
