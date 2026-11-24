import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Pyetje të Shpeshta",
  description:
    "Pyetje të shpeshta rreth kurseve të gjuhës frënge në L&LL — nivelet, DELF, oraret, mësimi online dhe regjistrimi.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Përgjigje para se të filloni."
        description="Nivelet, certifikatat, formatet dhe oraret — gjithçka që duhet të dini para se të regjistroheni."
        ctaLabel="Keni pyetje të tjera?"
      />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
