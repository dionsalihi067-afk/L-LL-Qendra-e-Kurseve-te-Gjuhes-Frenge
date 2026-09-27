"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TEACHERS } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useCursor } from "@/components/providers/cursor-provider";

export function TeachersSection({ limit }: { limit?: number }) {
  const list = limit ? TEACHERS.slice(0, limit) : TEACHERS;
  const { setVariant, setLabel, reset } = useCursor();

  return (
    <section className="section-padding relative">
      <div className="container-luxury">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            className="mb-0"
            eyebrow="Faculty"
            title={<span className="font-display">Teachers who elevate every sentence.</span>}
            description="Scholars, examiners, and conversation artists—united by a love of precise, living French."
          />
          <MagneticButton href="/teachers" variant="ghost">
            Meet the team
          </MagneticButton>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((teacher, i) => (
            <Reveal key={teacher.id} delay={i * 0.08}>
              <article
                className="group relative overflow-hidden rounded-[1.75rem] bg-dark-navy text-white shadow-lift"
                onMouseEnter={() => {
                  setVariant("media");
                  setLabel(teacher.name.split(" ")[0]);
                }}
                onMouseLeave={reset}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-heading text-lg font-semibold">{teacher.name}</p>
                  <p className="text-xs tracking-[0.16em] text-luxury-gold uppercase">{teacher.title}</p>
                  <motion.div
                    initial={false}
                    className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr]"
                  >
                    <div className="overflow-hidden">
                      <p className="mt-3 text-sm text-white/70">{teacher.specialty}</p>
                      <p className="mt-2 text-xs text-white/45">{teacher.languages.join(" · ")}</p>
                    </div>
                  </motion.div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
