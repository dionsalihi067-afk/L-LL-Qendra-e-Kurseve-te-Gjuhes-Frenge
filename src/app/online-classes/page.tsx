import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Online Classes",
  description:
    "Studio-quality live French classes online—interactive boards, breakout rooms, recordings, and the same L&LL standard worldwide.",
};

export default function OnlineClassesPage() {
  return (
    <>
      <PageHero
        eyebrow="Online"
        title="Paris quality. Anywhere you are."
        description="Our digital atelier delivers the same intimacy and rigor as our campus—live instructors, interactive tools, and cohorts that feel close."
        ctaLabel="Join an online cohort"
      />

      <section className="section-padding pt-0">
        <div className="container-luxury grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Live small-group sessions",
            "Interactive digital whiteboard",
            "Breakout speaking rooms",
            "Session recordings on demand",
          ].map((item, i) => (
            <Reveal key={item} delay={i * 0.06}>
              <div className="rounded-[1.5rem] border border-white/60 bg-white/70 px-5 py-8 text-center shadow-soft backdrop-blur">
                <p className="font-heading text-sm font-semibold text-dark-navy">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
