"use client";

import { useEffect, useRef } from "react";
import { FLOATING_WORDS } from "@/data/content";
import { cn } from "@/lib/utils";

export function AmbientBackground({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      el.style.setProperty("--px", `${x}px`);
      el.style.setProperty("--py", `${y}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}
      aria-hidden
    >
      <div className="gradient-aurora absolute inset-0" />
      <div
        className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full bg-french-blue/10 blur-[100px] transition-transform duration-700 ease-out"
        style={{ transform: "translate3d(var(--px, 0), var(--py, 0), 0)" }}
      />
      <div
        className="absolute top-1/3 -right-20 h-[36rem] w-[36rem] rounded-full bg-luxury-gold/10 blur-[110px] transition-transform duration-1000 ease-out"
        style={{
          transform: "translate3d(calc(var(--px, 0) * -1), calc(var(--py, 0) * -0.6), 0)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />

      {FLOATING_WORDS.map((word, i) => (
        <span
          key={word}
          className="absolute font-display text-2xl text-french-blue/[0.04] md:text-4xl"
          style={{
            left: `${8 + ((i * 17) % 80)}%`,
            top: `${12 + ((i * 23) % 75)}%`,
            transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (6 + i)}deg)`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
