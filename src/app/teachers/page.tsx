import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { TeachersSection } from "@/components/sections/teachers-section";
import { TEACHERS } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Teachers",
  description:
    "Meet the L&LL faculty—certified instructors, DELF examiners, and conversation artists dedicated to elegant fluency.",
};

export default function TeachersPage() {
  return (
    <>
      <PageHero
        eyebrow="Faculty"
        title="The minds behind your fluency."
        description="Scholars, examiners, and artists of conversation. Every teacher at L&LL is selected for craft, warmth, and uncompromising standards."
      />
      <TeachersSection />
      <section className="section-padding pt-0">
        <div className="container-luxury grid gap-6 md:grid-cols-2">
          {TEACHERS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <article className="rounded-[1.75rem] border border-white/60 bg-white/70 p-7 shadow-soft backdrop-blur">
                <h2 className="font-heading text-xl font-semibold text-dark-navy">{t.name}</h2>
                <p className="mt-1 text-xs tracking-[0.16em] text-luxury-gold uppercase">{t.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-dark-navy/65">{t.bio}</p>
                <p className="mt-4 text-xs text-dark-navy/45">
                  {t.specialty} · {t.languages.join(" · ")}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
