import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Kurse Online",
  description:
    "Kurse live online të gjuhës frënge me cilësi të lartë. Mësoni nga kudo me L&LL.",
};

export default function OnlinePage() {
  return (
    <>
      <PageHero
        eyebrow="Online"
        title="Mësoni frëngjisht nga kudo."
        description="Kurse live online me cilësi të njëjtë si ato në klasë — mësim interaktiv, praktikë e vazhdueshme, dhe fleksibilitet i plotë."
        ctaLabel="Regjistrohu për kurse online"
      />

      <section className="section-padding pt-0">
        <div className="container-luxury grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Mësime live në grupe të vogla",
            "Mjete interaktive digjitale",
            "Praktikë e fokusuar në të folur",
            "Orare fleksibël",
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
