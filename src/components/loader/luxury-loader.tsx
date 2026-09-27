"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/utils";

type LoaderProps = {
  onComplete?: () => void;
};

export function LuxuryLoader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2400;

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          onComplete?.();
        }, 380);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="noise-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-dark-navy"
          exit={{ opacity: 0, filter: "blur(12px)", scale: 1.04 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-live="polite"
          aria-label="Loading experience"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-1/4 left-1/4 h-[60vmax] w-[60vmax] rounded-full bg-french-blue/30 blur-[120px]"
              animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-0 bottom-0 h-[50vmax] w-[50vmax] rounded-full bg-luxury-gold/20 blur-[100px]"
              animate={{ x: [0, -30, 10, 0], y: [0, 20, -15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white/40"
                style={{
                  left: `${(i * 37) % 100}%`,
                  top: `${(i * 53) % 100}%`,
                }}
                animate={{ opacity: [0.1, 0.7, 0.1], y: [0, -12, 0] }}
                transition={{
                  duration: 3 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center gap-10 px-6">
            <div className="relative">
              <motion.div
                className="absolute -inset-8 rounded-full border border-luxury-gold/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="flex items-baseline gap-1 overflow-hidden font-display text-5xl tracking-[0.08em] text-white md:text-7xl">
                {"L&LL".split("").map((char, i) => (
                  <motion.span
                    key={`${char}-${i}`}
                    initial={{ y: "120%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      delay: 0.35 + i * 0.08,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <motion.div
                className="mx-auto mt-4 h-px origin-left bg-gradient-to-r from-transparent via-luxury-gold to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <motion.p
              className="font-heading text-xs tracking-[0.35em] text-white/55 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {SITE.fullName}
            </motion.p>

            <div className="flex w-48 flex-col gap-2">
              <div className="h-px overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-luxury-gold"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-numbers text-right text-xs text-luxury-gold/80 tabular-nums">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
