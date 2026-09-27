import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Business French",
  description:
    "Corporate and professional French for meetings, negotiations, presentations, and francophone markets.",
};

export default function BusinessFrenchPage() {
  return (
    <>
      <PageHero
        eyebrow="Business"
        title="French that closes deals."
        description="From email register to negotiation rhythm—Business French at L&LL is built for professionals who cannot afford to sound approximate."
        ctaLabel="Design my program"
      />

      <section className="section-padding pt-0">
        <div className="container-luxury grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Individual professionals",
              body: "Managers, founders, and specialists who need fluent confidence in client calls, pitches, and written correspondence.",
            },
            {
              title: "Corporate teams",
              body: "Cohort programs for companies expanding into francophone markets—customized vocabulary, role-play, and cultural fluency.",
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <article className="min-h-[220px] rounded-[2rem] bg-dark-navy p-8 text-white shadow-lift">
                <h2 className="font-display text-3xl">{card.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
