"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COURSES } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useCursor } from "@/components/providers/cursor-provider";

function CourseCard({
  course,
  index,
}: {
  course: (typeof COURSES)[number];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { setVariant, setLabel, reset } = useCursor();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  return (
    <Reveal delay={(index % 4) * 0.05} y={40}>
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        <Link
          ref={ref}
          href={`/courses#${course.id}`}
          className="group relative block overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur-xl transition-shadow duration-500 hover:shadow-lift"
          onMouseEnter={() => {
            setVariant("hover");
            setLabel(course.level);
          }}
          onMouseLeave={() => {
            rotateX.set(0);
            rotateY.set(0);
            reset();
          }}
          onMouseMove={(e) => {
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            rotateX.set(((e.clientY - r.top - r.height / 2) / r.height) * -7);
            rotateY.set(((e.clientX - r.left - r.width / 2) / r.width) * 7);
          }}
        >
          <div
            className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
            style={{ background: course.accent }}
          />
          <div className="relative flex items-start justify-between">
            <span
              className="font-numbers text-4xl font-medium tracking-tight"
              style={{ color: course.accent }}
            >
              {course.level}
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-dark-navy/10 text-dark-navy/50 transition-all duration-400 group-hover:border-luxury-gold/40 group-hover:bg-luxury-gold group-hover:text-dark-navy">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <h3 className="relative mt-5 font-heading text-lg font-semibold text-dark-navy">
            {course.title}
          </h3>
          <p className="relative mt-2 text-sm leading-relaxed text-dark-navy/60">
            {course.description}
          </p>
          <div className="relative mt-6 flex items-center justify-between border-t border-dark-navy/8 pt-4 text-xs text-dark-navy/50">
            <span>
              {course.duration} · {course.hours}
            </span>
            <span className="font-numbers font-medium text-french-blue">{course.price}</span>
          </div>
        </Link>
      </motion.div>
    </Reveal>
  );
}

export function CoursesShowcase({ limit }: { limit?: number }) {
  const list = limit ? COURSES.slice(0, limit) : COURSES;

  return (
    <section id="courses" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 h-72 w-72 -translate-y-1/2 rounded-full bg-french-blue/5 blur-[80px]" />
      <div className="container-luxury relative">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <SectionHeader
            className="mb-0"
            eyebrow="Programs"
            title={<span className="font-display">A pathway for every ambition.</span>}
            description="From first words to DALF mastery—structured, beautiful, and relentlessly practical."
          />
          <MagneticButton href="/courses" variant="ghost">
            View all courses
          </MagneticButton>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3" style={{ perspective: 1000 }}>
          {list.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
