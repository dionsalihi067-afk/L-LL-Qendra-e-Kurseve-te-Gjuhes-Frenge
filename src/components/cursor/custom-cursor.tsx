"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/components/providers/cursor-provider";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const { variant, label } = useCursor();
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const ringSX = useSpring(ringX, springConfig);
  const ringSY = useSpring(ringY, springConfig);
  const enabled = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    enabled.current = fine;
    if (!fine) return;

    document.documentElement.classList.add("cursor-none-custom");

    const onMove = (e: MouseEvent) => {
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("cursor-none-custom");
    };
  }, [ringX, ringY, dotX, dotY]);

  if (typeof window !== "undefined") {
    // SSR-safe; visibility handled via CSS media below
  }

  const isHover = variant === "hover" || variant === "media";
  const isText = variant === "text";
  const isHidden = variant === "hidden";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9998] hidden md:block"
      aria-hidden
    >
      <motion.div
        className={cn(
          "absolute top-0 left-0 flex items-center justify-center rounded-full border border-french-blue/40 mix-blend-difference",
          isHidden && "opacity-0",
        )}
        style={{
          x: ringSX,
          y: ringSY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHover ? 72 : isText ? 56 : 36,
          height: isHover ? 72 : isText ? 56 : 36,
          borderColor: isHover
            ? "rgba(200,166,70,0.7)"
            : "rgba(255,255,255,0.45)",
          backgroundColor: isHover
            ? "rgba(200,166,70,0.12)"
            : "transparent",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      >
        {label ? (
          <span className="px-2 text-center font-heading text-[10px] font-semibold tracking-[0.12em] text-white uppercase">
            {label}
          </span>
        ) : null}
      </motion.div>

      <motion.div
        className={cn(
          "absolute top-0 left-0 h-1.5 w-1.5 rounded-full bg-luxury-gold mix-blend-difference",
          isHidden && "opacity-0",
        )}
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHover ? 0 : 1,
        }}
      />
    </div>
  );
}
