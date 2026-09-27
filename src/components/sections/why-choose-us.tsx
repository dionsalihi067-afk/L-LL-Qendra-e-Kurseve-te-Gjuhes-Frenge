"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Award,
  Sparkles,
  BadgeCheck,
  Calendar,
  Monitor,
  Users,
  MessageCircle,
  Mic,
  type LucideIcon,
} from "lucide-react";
import { REASONS } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { useCursor } from "@/components/providers/cursor-provider";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Award,
  Sparkles,
  BadgeCheck,
  Calendar,
  Monitor,
  Users,
  MessageCircle,
  Mic,
};

function ReasonCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { setVariant, setLabel, reset } = useCursor();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(200,166,70,0.18), transparent 45%)`;
  const Icon = ICONS[icon] ?? Sparkles;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set(px);
    y.set(py);
    const rx = ((py - rect.height / 2) / rect.height) * -8;
    const ry = ((px - rect.width / 2) / rect.width) * 8;
    rotateX.set(rx);
    rotateY.set(ry);
  };

  return (
    <Reveal delay={index * 0.06} y={36}>
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => {
          setVariant("hover");
          setLabel("Discover");
        }}
        onMouseLeave={() => {
          rotateX.set(0);
          rotateY.set(0);
          reset();
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={cn(
          "group relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/55 p-7 shadow-soft backdrop-blur-xl transition-shadow duration-500 hover:shadow-lift",
        )}
      >
        <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: glow }} />
        <div
          className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-french-blue/8 text-french-blue transition-transform duration-500 group-hover:scale-110 group-hover:bg-luxury-gold/15 group-hover:text-luxury-gold"
          style={{ transform: "translateZ(24px)" }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-dark-navy" style={{ transform: "translateZ(18px)" }}>
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-dark-navy/60" style={{ transform: "translateZ(12px)" }}>
          {description}
        </p>
      </motion.article>
    </Reveal>
  );
}

export function WhyChooseUs() {
  return (
    <section id="why" className="section-padding relative">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Why L&LL"
          title={<span className="font-display">Crafted for fluency that feels effortless.</span>}
          description="Every detail of the L&LL experience is designed to make French feel natural—rigorous where it matters, warm where it counts."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4" style={{ perspective: 1200 }}>
          {REASONS.map((reason, i) => (
            <ReasonCard key={reason.title} {...reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
