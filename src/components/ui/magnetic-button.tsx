"use client";

import Link from "next/link";
import { type ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/components/providers/cursor-provider";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  label?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-french-blue text-white shadow-[0_16px_40px_rgba(16,58,113,0.28)] hover:bg-[#0d2f5c]",
  secondary:
    "bg-white/70 text-french-blue backdrop-blur-xl border border-white/60 shadow-soft",
  ghost:
    "bg-transparent text-french-blue border border-french-blue/20 hover:border-french-blue/40",
  gold: "bg-luxury-gold text-dark-navy shadow-[0_16px_40px_rgba(200,166,70,0.35)] hover:brightness-105",
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  label,
  type = "button",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { setVariant, setLabel, reset } = useCursor();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 20 });
  const springY = useSpring(y, { stiffness: 280, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.28);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.28);
  };

  const handleEnter = () => {
    setVariant("hover");
    if (label) setLabel(label);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    reset();
  };

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-heading text-sm font-semibold tracking-wide transition-colors duration-300",
    variants[variant],
    className,
  );

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="inline-flex"
    >
      {href ? (
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      ) : (
        <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
