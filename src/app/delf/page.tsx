import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Përgatitje DELF",
  description:
    "Përgatituni për provimet zyrtare DELF me kurse të strukturuara në L&LL. Praktikë për të katër aftësitë gjuhësore.",
};

const LEVELS = [
  { code: "DELF A1–A2", focus: "Bazat e komunikimit, fjalorin e përditshëm dhe gramatikën themelore." },
  { code: "DELF B1–B2", focus: "Shprehje e pavarur, argumentim dhe gatishmëri akademike." },
];

export default function DelfPage() {
  return (
    <>
      <PageHero
        eyebrow="Provime"
        title="Përgatitje DELF me besim."
        description="Përgatitje e strukturuar për provimet zyrtare DELF — praktikë e dedikuar për të katër aftësitë gjuhësore."
      />

      <section className="section-padding pt-0">
        <div className="container-luxury grid gap-6 md:grid-cols-2">
          {LEVELS.map((level, i) => (
            <Reveal key={level.code} delay={i * 0.08}>
              <article className="h-full rounded-[1.75rem] border border-white/60 bg-white/70 p-7 shadow-soft backdrop-blur">
                <p className="font-numbers text-2xl text-french-blue">{level.code}</p>
                <p className="mt-4 text-sm leading-relaxed text-dark-navy/65">{level.focus}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="container-luxury mt-14 max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">Çfarë përfshin përgatitja</h2>
            <ul className="mt-6 space-y-3 text-dark-navy/70">
              {[
                "Praktikë e strukturuar për dëgjim, lexim, shkrim dhe të folur",
                "Simulime provimi në kushte reale",
                "Fokus i veçantë në shqiptim dhe komunikim oral",
                "Material dhe ushtrime sipas formatit zyrtar DELF",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-luxury-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <MagneticButton href="/regjistrohu" variant="gold">
                Regjistrohu për DELF
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
