"use client";

import type { CSSProperties } from "react";
import type { LoadingPhase } from "../hooks/useLoadingSequence";
import "./LoadingScreen.css";

const COLUMN_COUNT = 7;

type LoadingScreenProps = {
  phase: LoadingPhase;
};

/** Stagger: center opens first → diamond gap (darker revealed inside) */
function openDelay(index: number, count: number) {
  const mid = (count - 1) / 2;
  return Math.abs(index - mid) * 0.09;
}

export function LoadingScreen({ phase }: LoadingScreenProps) {
  if (phase === "done") return null;

  const isDark = phase === "dark";

  return (
    <div
      className={`loading-screen loading-screen--${phase}${isDark ? " loading-screen--opening" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Mask'd"
    >
      <img
        className="loading-screen__logo"
        src="/assets/logo-maskd.png"
        alt="Mask'd"
        width={220}
        height={220}
      />

      {isDark ? (
        <div className="loading-boxes" aria-hidden="true">
          {Array.from({ length: COLUMN_COUNT }, (_, i) => (
            <div
              key={i}
              className="loading-boxes__col"
              style={
                {
                  "--open-delay": `${openDelay(i, COLUMN_COUNT)}s`,
                } as CSSProperties
              }
            >
              <span className="loading-boxes__bar loading-boxes__bar--top" />
              <span className="loading-boxes__bar loading-boxes__bar--bottom" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
