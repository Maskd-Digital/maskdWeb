"use client";

import { useState } from "react";
import "./About.css";

const TEAM = [
  {
    id: "afshad",
    name: "Afshad Fazeem",
    image: "/assets/team/afshad-fazeem.png",
  },
  {
    id: "sihala",
    name: "Sihala Weragama",
    image: "/assets/team/sihala-weragama.png",
  },
  {
    id: "shiva",
    name: "Shiva Chakravarthy Balachandran",
    image: "/assets/team/shiva-chakravarthy.png",
  },
  {
    id: "aron",
    name: "Aron Fernando",
    image: "/assets/team/aron-fernando.png",
  },
] as const;

function wrapOffset(index: number, active: number, length: number) {
  let diff = index - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

export function About() {
  const [active, setActive] = useState(2);

  const prev = () =>
    setActive((current) => (current - 1 + TEAM.length) % TEAM.length);
  const next = () => setActive((current) => (current + 1) % TEAM.length);

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="container about__inner">
        <h2 id="about-heading" className="section-title">
          Our Origin &amp; Intent
        </h2>

        <div className="about__copy">
          <p>
            What started as a passion for visual storytelling has grown into a
            powerhouse of digital innovation. While we provide a wide range of
            digital services to elevate your brand, we truly excel in end-to-end
            application development turning complex challenges into elegant,
            functional software. Over the years, we&apos;ve honed our craft by
            partnering with industry-leading companies to deliver exceptional,
            scalable results.
          </p>
          <p>
            Behind every successful launch is a dedicated team pushing the
            boundaries of what&apos;s possible. Meet the experts who will be
            bringing your next big idea to life.
          </p>
        </div>

        <div className="about__carousel">
          <button
            type="button"
            className="about__arrow"
            aria-label="Previous team member"
            onClick={prev}
          >
            ‹
          </button>

          <div className="about__stage" role="list">
            {TEAM.map((member, index) => {
              const offset = wrapOffset(index, active, TEAM.length);
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              return (
                <article
                  key={member.id}
                  className="about__slide"
                  role="listitem"
                  data-offset={offset}
                  data-active={isActive ? "true" : "false"}
                  aria-hidden={!isVisible}
                  aria-current={isActive ? "true" : undefined}
                >
                  <button
                    type="button"
                    className="about__slide-btn"
                    onClick={() => setActive(index)}
                    tabIndex={isVisible ? 0 : -1}
                    aria-label={`Show ${member.name}`}
                  >
                    <img
                      className="about__photo"
                      src={member.image}
                      alt=""
                      width={420}
                      height={560}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="about__shade" aria-hidden="true" />
                    <span className="about__name">{member.name}</span>
                  </button>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            className="about__arrow"
            aria-label="Next team member"
            onClick={next}
          >
            ›
          </button>
        </div>

        <div className="about__dots" role="tablist" aria-label="Team members">
          {TEAM.map((member, index) => (
            <button
              key={member.id}
              type="button"
              className="about__dot"
              role="tab"
              aria-label={`Show ${member.name}`}
              aria-selected={index === active}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
