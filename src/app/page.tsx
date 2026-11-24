import { HeroSection } from "@/components/sections/hero-section";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CoursesShowcase } from "@/components/sections/courses-showcase";
import { LearningJourney } from "@/components/sections/learning-journey";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <AboutTeaser />
      <WhyChooseUs />
      <CoursesShowcase limit={4} />
      <LearningJourney />
      <FaqSection limit={4} />
      <CtaBanner />
    </>
  );
}
