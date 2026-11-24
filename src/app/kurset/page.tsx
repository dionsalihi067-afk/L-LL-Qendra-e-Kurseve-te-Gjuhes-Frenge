import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { CoursesShowcase } from "@/components/sections/courses-showcase";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Kurset",
  description:
    "Eksploroni kurset e gjuhës frënge nga niveli A1 deri në B2 dhe përgatitje për DELF në L&LL, Prishtinë.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Kurset"
        title="Programet tona të gjuhës frënge."
        description="Kurse të strukturuara sipas CEFR — nga niveli fillestar deri në të avancuar. Gjeni rrugën tuaj drejt frëngjishtes."
        ctaHref="/regjistrohu"
        ctaLabel="Gjeni nivelin tuaj"
      />
      <CoursesShowcase />
      <CtaBanner />
    </>
  );
}
