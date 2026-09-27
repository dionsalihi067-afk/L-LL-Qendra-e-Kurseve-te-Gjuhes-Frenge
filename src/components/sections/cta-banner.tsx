"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";

export function CtaBanner() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-luxury relative overflow-hidden rounded-[2.5rem] bg-french-blue px-8 py-16 text-white md:px-16 md:py-20">
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-luxury-gold/25 blur-[90px]" />
        <div className="absolute -bottom-28 -left-10 h-80 w-80 rounded-full bg-french-red/20 blur-[100px]" />
        <div className="relative max-w-2xl">
          <p className="font-heading text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase">
            Begin today
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
            Your French chapter starts with a single conversation.
          </h2>
          <p className="mt-5 text-base text-white/70 md:text-lg">
            Book a complimentary placement session. Leave with clarity, a pathway, and the confidence to begin.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href="/contact" variant="gold">
              Book Placement
            </MagneticButton>
            <MagneticButton href="/courses" variant="secondary">
              Browse Programs
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
