"use client";

import { useState } from "react";
import { LuxuryLoader } from "@/components/loader/luxury-loader";
import { CustomCursor } from "@/components/cursor/custom-cursor";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  return (
    <>
      <LuxuryLoader onComplete={() => setReady(true)} />
      <CustomCursor />
      <AmbientBackground />
      <SmoothScroll>
        <div
          className={`relative min-h-screen transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
