"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CursorVariant = "default" | "hover" | "text" | "media" | "hidden";

type CursorContextValue = {
  variant: CursorVariant;
  label: string;
  setVariant: (variant: CursorVariant) => void;
  setLabel: (label: string) => void;
  reset: () => void;
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [label, setLabel] = useState("");

  const reset = useCallback(() => {
    setVariant("default");
    setLabel("");
  }, []);

  const value = useMemo(
    () => ({ variant, label, setVariant, setLabel, reset }),
    [variant, label, reset],
  );

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) {
    throw new Error("useCursor must be used within CursorProvider");
  }
  return ctx;
}
