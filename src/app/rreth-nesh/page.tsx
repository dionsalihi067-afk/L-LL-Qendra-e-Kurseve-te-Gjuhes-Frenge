import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Rreth Nesh",
  description:
    "Mësoni për L&LL – Qendra e Kurseve të Gjuhës Frënge në Prishtinë. Kurse të strukturuara nga A1 deri në B2, përgatitje DELF, dhe mësim online.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Rreth Nesh"
        title="Qendra juaj e gjuhës frënge."
        description="L&LL është qendër e kurseve të gjuhës frënge e themeluar në vitin 2026 në Prishtinë, e dedikuar për mësimin cilësor të frëngjishtes."
      />

      <section className="section-padding pt-0">
        <div className="container-luxury max-w-3xl">
          <Reveal>
            <p className="font-display text-2xl leading-relaxed text-dark-navy md:text-3xl">
              Besojmë se gjuha frënge hap dyer — drejt kulturës, karrierës dhe mundësive ndërkombëtare.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-relaxed text-dark-navy/65 md:text-lg">
              Qendra ofron kurse nga niveli A1 fillestar deri në B2 i avancuar, me përgatitje të dedikuar për
              provimet zyrtare DELF dhe mundësi mësimi online. Metodologjia jonë bazohet në komunikim aktiv
              dhe praktikë të vazhdueshme të gjuhës.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-dark-navy text-white">
        <div className="container-luxury">
          <p className="font-heading text-xs tracking-[0.3em] text-luxury-gold uppercase">Çfarë Ofrojmë</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Shërbimet tona.</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Kurse A1–B2",
                description: "Kurse të strukturuara sipas Kornizës së Përbashkët Evropiane të Referencës (CEFR).",
              },
              {
                title: "Përgatitje DELF",
                description: "Praktikë e dedikuar për provimet zyrtare të gjuhës frënge.",
              },
              {
                title: "Mësim Online",
                description: "Kurse live online me cilësi të lartë, nga kudo që keni lidhje interneti.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 p-6">
                  <h3 className="font-heading text-xl font-semibold text-luxury-gold">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/60">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
