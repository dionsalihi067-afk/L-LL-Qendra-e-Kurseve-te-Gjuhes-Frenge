"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { useCursor } from "@/components/providers/cursor-provider";
import { cn } from "@/lib/utils";

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80",
    alt: "Students collaborating",
    tag: "Atelier",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&q=80",
    alt: "Paris architecture",
    tag: "Paris",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=80",
    alt: "Study group",
    tag: "Campus",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1000&q=80",
    alt: "Eiffel Tower",
    tag: "Culture",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1000&q=80",
    alt: "Classroom moment",
    tag: "Learning",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000&q=80",
    alt: "Seine at dusk",
    tag: "Immersion",
    tall: false,
  },
] as const;

const FILTERS = ["All", "Atelier", "Paris", "Campus", "Culture", "Learning", "Immersion"] as const;

export function GallerySection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [active, setActive] = useState<(typeof GALLERY)[number] | null>(null);
  const { setVariant, setLabel, reset } = useCursor();

  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.tag === filter);

  return (
    <section className="section-padding relative">
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Gallery"
          title={<span className="font-display">Moments from the atelier.</span>}
          description="A glimpse of the rooms, the city, and the conversations that shape every L&LL journey."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-4 py-2 font-heading text-xs font-semibold tracking-wide transition-all",
                filter === f
                  ? "bg-french-blue text-white"
                  : "bg-white/70 text-dark-navy/60 hover:text-french-blue",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.05} className="mb-4 break-inside-avoid">
              <button
                className={cn(
                  "group relative block w-full overflow-hidden rounded-[1.5rem]",
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]",
                )}
                onClick={() => setActive(item)}
                onMouseEnter={() => {
                  setVariant("media");
                  setLabel("View");
                }}
                onMouseLeave={reset}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-dark-navy/0 transition-colors duration-500 group-hover:bg-dark-navy/25" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 font-heading text-[10px] tracking-[0.16em] text-dark-navy uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.tag}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-navy/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal
            aria-label={active.alt}
          >
            <button
              className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
              onClick={() => setActive(null)}
              aria-label="Close gallery viewer"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              className="relative h-[70vh] w-full max-w-4xl overflow-hidden rounded-[1.5rem]"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={active.src} alt={active.alt} fill className="object-cover" sizes="90vw" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
