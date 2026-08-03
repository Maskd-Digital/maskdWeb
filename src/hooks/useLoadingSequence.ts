import { useEffect, useState } from "react";

export type LoadingPhase = "light" | "dark" | "done";

/**
 * Loading sequence (correct order):
 * 1. Light bluish (#0108B8) + logo
 * 2. Darker screen + boxes opening (reveals dark inside)
 * 3. Homepage
 */
export function useLoadingSequence(options?: {
  lightMs?: number;
  darkMs?: number;
}) {
  const lightMs = options?.lightMs ?? 1400;
  const darkMs = options?.darkMs ?? 1800;
  const [phase, setPhase] = useState<LoadingPhase>("light");

  useEffect(() => {
    const toDark = window.setTimeout(() => setPhase("dark"), lightMs);
    const toDone = window.setTimeout(
      () => setPhase("done"),
      lightMs + darkMs,
    );

    return () => {
      window.clearTimeout(toDark);
      window.clearTimeout(toDone);
    };
  }, [lightMs, darkMs]);

  return { phase, isLoading: phase !== "done" };
}
