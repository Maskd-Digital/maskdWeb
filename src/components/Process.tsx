"use client";

import { useState, type CSSProperties } from "react";
import "./Process.css";

const STEPS = [
  {
    id: "01",
    title: "Discover the brief",
    body: "We start with conversation — goals, audience, constraints, and the story your brand needs to tell before a single frame is designed.",
  },
  {
    id: "02",
    title: "Shape the strategy",
    body: "We map the creative direction, structure, and success markers so every visual decision is intentional, not decorative.",
  },
  {
    id: "03",
    title: "Design & build",
    body: "Concepts move into polished interfaces and systems. You see living progress, not placeholders — craft refined in cycles.",
  },
  {
    id: "04",
    title: "Launch & refine",
    body: "We pressure-test performance, clarity, and consistency — then ship clean, with room to evolve as your brand grows.",
  },
] as const;

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section className="process" id="process" aria-labelledby="process-heading">
      <div className="container process__layout">
        <div className="process__intro">
          <h2 id="process-heading" className="process__title">
            How Ideas
            <span className="process__title-accent"> Take Shape</span>
          </h2>
          <p className="process__lede">
            A clear path from first conversation to launch — built to reduce
            guesswork and sharpen every creative decision.
          </p>

          <div className="process__meter" aria-hidden="true">
            <svg className="process__ring" viewBox="0 0 200 200">
              <circle className="process__ring-track" cx="100" cy="100" r="78" />
              <circle
                className="process__ring-progress"
                cx="100"
                cy="100"
                r="78"
                style={
                  {
                    "--progress": (active + 1) / STEPS.length,
                  } as CSSProperties
                }
              />
            </svg>
            <div className="process__meter-label">
              <span className="process__meter-num">0{active + 1}</span>
              <span className="process__meter-total">/ 04</span>
            </div>
          </div>
        </div>

        <ol className="process__steps">
          {STEPS.map((step, index) => {
            const state =
              index < active ? "done" : index === active ? "active" : "next";

            return (
              <li key={step.id} className="process__step" data-state={state}>
                <button
                  type="button"
                  className="process__step-btn"
                  aria-current={index === active ? "step" : undefined}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                >
                  <span className="process__badge">Phase {step.id}</span>
                  <span className="process__step-title">{step.title}</span>
                  <span className="process__step-body">{step.body}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
