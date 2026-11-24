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
            Filloni Sot
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
            Rruga juaj drejt frëngjishtes fillon me një bisedë.
          </h2>
          <p className="mt-5 text-base text-white/70 md:text-lg">
            Na kontaktoni përmes WhatsApp për një bisedë orientuese dhe filloni mësimin me besim.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href="/regjistrohu" variant="gold">
              Regjistrohu Tani
            </MagneticButton>
            <MagneticButton href="/kurset" variant="secondary">
              Shiko Kurset
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
