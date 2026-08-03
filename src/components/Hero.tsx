"use client";

import { useEffect, useState } from "react";
import "./Hero.css";

const ROTATING_WORDS = ["Design", "Strategy", "Experience", "Branding"] as const;
const HOLD_MS = 2600;
const FADE_MS = 400;
const GAP_MS = 40;

export function Hero() {
  const [index, setIndex] = useState(0);
  /** When false, no word node is in the DOM — prevents stacked/overlapping text */
  const [mounted, setMounted] = useState(true);
  const [entering, setEntering] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    (async () => {
      while (!cancelled) {
        await wait(HOLD_MS);
        if (cancelled) return;

        setEntering(false);
        await wait(FADE_MS);
        if (cancelled) return;

        setMounted(false);
        await wait(GAP_MS);
        if (cancelled) return;

        setIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setEntering(false);
        setMounted(true);
        await wait(GAP_MS);
        if (cancelled) return;
        setEntering(true);
      }
    })();

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="hero__title">
        Let&apos;s Tell Your Brand Story
        <br />
        <span className="hero__title-line2">
          Through
          <span className="hero__rotate" aria-live="polite" aria-atomic="true">
            {mounted ? (
              <span
                key={index}
                className={
                  entering
                    ? "hero__rotate-word hero__rotate-word--in"
                    : "hero__rotate-word hero__rotate-word--out"
                }
              >
                {ROTATING_WORDS[index]}.
              </span>
            ) : (
              <span
                className="hero__rotate-word hero__rotate-word--out"
                aria-hidden="true"
              >
                {ROTATING_WORDS[index]}.
              </span>
            )}
          </span>
        </span>
      </h1>
      <p className="hero__sub">
        A design and strategy studio born in Colombo that creates visual stories
        that resonate with your brand.
      </p>
      <a className="hero__cta" href="#work">
        <span className="hero__cta-label">Check Us Out</span>
      </a>
    </section>
  );
}
