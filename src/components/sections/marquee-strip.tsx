"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const ITEMS = [
  "DELF · DALF · CEFR",
  "Paris Atelier",
  "Online Studio",
  "Business French",
  "98% Exam Success",
  "Small Groups",
  "Speaking First",
  "Certified Faculty",
];

export function MarqueeStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const track = el.querySelector<HTMLElement>("[data-track]");
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const content = [...ITEMS, ...ITEMS];

  return (
    <div ref={ref} className="overflow-hidden border-y border-dark-navy/8 bg-white/40 py-5 backdrop-blur">
      <div data-track className="flex w-max gap-10 whitespace-nowrap will-change-transform">
        {content.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-heading text-sm font-semibold tracking-[0.22em] text-dark-navy/45 uppercase"
          >
            {item}
            <span className="ml-10 text-luxury-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
