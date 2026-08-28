import { useCallback, useEffect, useRef, useState } from "react";

/** Below Tailwind-style `md` — mobile scroll reveal only. */
export const MOBILE_SCROLL_REVEAL_MAX_WIDTH = 767;

const REVEAL_THRESHOLDS = [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1] as const;

type BaseOptions = {
  count: number;
  /** Minimum intersection ratio before a reveal counts. */
  minRatio?: number;
  /** Narrows the observed viewport band (centers detection). */
  rootMargin?: string;
};

type StickyRevealOptions = BaseOptions & {
  mode: "sticky";
};

type ProgressRevealOptions = BaseOptions & {
  mode: "progress";
};

type MobileScrollRevealOptions = StickyRevealOptions | ProgressRevealOptions;

type StickyRevealResult = {
  scrollEnabled: boolean;
  mode: "sticky";
  revealed: boolean[];
  setItemRef: (index: number) => (element: HTMLElement | null) => void;
};

type ProgressRevealResult = {
  scrollEnabled: boolean;
  mode: "progress";
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setItemRef: (index: number) => (element: HTMLElement | null) => void;
};

function useScrollEnabled() {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      `(max-width: ${MOBILE_SCROLL_REVEAL_MAX_WIDTH}px)`,
    );
    const apply = () => setScrollEnabled(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return scrollEnabled;
}

export function useMobileScrollReveal(
  options: StickyRevealOptions,
): StickyRevealResult;
export function useMobileScrollReveal(
  options: ProgressRevealOptions,
): ProgressRevealResult;
export function useMobileScrollReveal(
  options: MobileScrollRevealOptions,
): StickyRevealResult | ProgressRevealResult {
  const {
    count,
    minRatio = 0.55,
    rootMargin = "-22% 0px -22% 0px",
    mode,
  } = options;

  const scrollEnabled = useScrollEnabled();
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const ratiosRef = useRef<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [revealed, setRevealed] = useState<boolean[]>(() =>
    Array.from({ length: count }, () => false),
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const setItemRef = useCallback(
    (index: number) => (element: HTMLElement | null) => {
      const previous = elementsRef.current[index];
      if (previous && observerRef.current) {
        observerRef.current.unobserve(previous);
      }

      elementsRef.current[index] = element;

      if (element) {
        element.dataset.revealIndex = String(index);
        observerRef.current?.observe(element);
      }
    },
    [],
  );

  useEffect(() => {
    setRevealed(Array.from({ length: count }, () => false));
    ratiosRef.current = Array.from({ length: count }, () => 0);
    setActiveIndex(0);
  }, [count]);

  useEffect(() => {
    if (!scrollEnabled || count === 0) return;

    ratiosRef.current = Array.from({ length: count }, () => 0);

    const pickActiveIndex = () => {
      let bestIndex = 0;
      let bestRatio = 0;

      ratiosRef.current.forEach((ratio, index) => {
        if (ratio >= minRatio && ratio > bestRatio) {
          bestRatio = ratio;
          bestIndex = index;
        }
      });

      if (bestRatio > 0) {
        setActiveIndex((current) =>
          current === bestIndex ? current : bestIndex,
        );
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(
            (entry.target as HTMLElement).dataset.revealIndex,
          );
          if (Number.isNaN(index)) return;

          const ratio = entry.isIntersecting ? entry.intersectionRatio : 0;
          ratiosRef.current[index] = ratio;

          if (mode === "sticky" && ratio >= minRatio) {
            setRevealed((current) => {
              if (current[index]) return current;
              const next = [...current];
              next[index] = true;
              return next;
            });
          }
        });

        if (mode === "progress") {
          pickActiveIndex();
        }
      },
      {
        threshold: [...REVEAL_THRESHOLDS],
        rootMargin,
      },
    );

    observerRef.current = observer;

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [scrollEnabled, count, minRatio, rootMargin, mode]);

  if (mode === "progress") {
    return {
      scrollEnabled,
      mode: "progress",
      activeIndex,
      setActiveIndex,
      setItemRef,
    };
  }

  return {
    scrollEnabled,
    mode: "sticky",
    revealed,
    setItemRef,
  };
}
