import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "DELF / DALF",
  description:
    "Official DELF and DALF exam preparation with mock tests, examiner-aligned feedback, and a 98% success culture.",
};

const LEVELS = [
  { code: "DELF A1–A2", focus: "Everyday life, survival fluency, foundation grammar." },
  { code: "DELF B1–B2", focus: "Independent expression, argumentation, academic readiness." },
  { code: "DALF C1–C2", focus: "Near-native discourse, synthesis, specialized writing." },
];

export default function DelfDalfPage() {
  return (
    <>
      <PageHero
        eyebrow="Exams"
        title="DELF & DALF, without the dread."
        description="Official diploma preparation that feels calm, strategic, and relentlessly practical—mock exams, scoring clarity, and oral coaching that sticks."
      />

      <section className="section-padding pt-0">
        <div className="container-luxury grid gap-6 md:grid-cols-3">
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
            <h2 className="font-display text-3xl md:text-4xl">What you receive</h2>
            <ul className="mt-6 space-y-3 text-dark-navy/70">
              {[
                "Full-length mock exams under timed conditions",
                "Examiner-style rubrics and personalized score reports",
                "Speaking labs with pronunciation and structure coaching",
                "Writing ateliers for production tasks and synthesis",
                "Strategic pacing plans from now until exam day",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-luxury-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <MagneticButton href="/contact" variant="gold">
                Reserve exam coaching
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
