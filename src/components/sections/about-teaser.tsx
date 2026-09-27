"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MILESTONES } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";
import { MagneticButton } from "@/components/ui/magnetic-button";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80",
  "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1200&q=80",
];

export function AboutTeaser() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el.querySelectorAll("[data-parallax]"), {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        el.querySelectorAll("[data-mile]"),
        { autoAlpha: 0, x: 40 },
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el.querySelector("[data-timeline]"), start: "top 75%" },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-luxury grid items-center gap-14 lg:grid-cols-2">
        <div className="relative h-[520px]">
          <div className="absolute top-0 left-0 h-[70%] w-[68%] overflow-hidden rounded-[2rem] shadow-lift">
            <div data-parallax className="relative h-[120%] w-full -top-[10%]">
              <Image src={IMAGES[0]} alt="Paris rooftops at dusk" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
          <div className="absolute right-0 bottom-8 h-[48%] w-[52%] overflow-hidden rounded-[1.5rem] border-4 border-bg shadow-soft">
            <div data-parallax className="relative h-[120%] w-full -top-[10%]">
              <Image src={IMAGES[1]} alt="Seine river view" fill className="object-cover" sizes="40vw" />
            </div>
          </div>
          <div className="absolute top-16 right-8 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-glow-gold">
            <Image src={IMAGES[2]} alt="Paris detail" fill className="object-cover" sizes="112px" />
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Our Story"
            title={<span className="font-display">Born beside the Louvre. Built for the world.</span>}
            description="L&LL began as an intimate atelier and grew into a premium French language center—still intimate, now international."
          />
          <div data-timeline className="space-y-6 border-l border-french-blue/15 pl-6">
            {MILESTONES.slice(0, 3).map((m) => (
              <div key={m.year} data-mile>
                <p className="font-numbers text-sm text-luxury-gold">{m.year}</p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-dark-navy">{m.title}</h3>
                <p className="mt-1 text-sm text-dark-navy/60">{m.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <MagneticButton href="/about" variant="primary">
              Read our story
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
