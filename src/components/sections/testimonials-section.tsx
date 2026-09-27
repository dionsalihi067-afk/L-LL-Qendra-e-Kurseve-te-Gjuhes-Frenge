"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const item = TESTIMONIALS[index];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-luxury">
        <SectionHeader
          align="center"
          eyebrow="Success Stories"
          title={<span className="font-display">Voices that crossed oceans.</span>}
          description="Students who arrived curious—and left fluent, certified, and confident."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="glass relative overflow-hidden rounded-[2rem] p-8 shadow-lift md:p-12">
            <Quote className="absolute top-8 right-8 h-12 w-12 text-luxury-gold/20" />
            <AnimatePresence mode="wait">
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                <blockquote className="font-display text-2xl leading-snug text-dark-navy md:text-3xl">
                  “{item.quote}”
                </blockquote>
                <div className="mt-8">
                  <p className="font-heading font-semibold text-french-blue">{item.name}</p>
                  <p className="mt-1 text-sm text-dark-navy/55">{item.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-dark-navy/10 bg-white/70 backdrop-blur transition hover:border-french-blue/30"
              onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-luxury-gold" : "w-1.5 bg-dark-navy/20"
                  }`}
                />
              ))}
            </div>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-dark-navy/10 bg-white/70 backdrop-blur transition hover:border-french-blue/30"
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
