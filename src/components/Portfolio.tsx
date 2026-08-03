"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import "./Portfolio.css";

type Project = {
  id: string;
  name: string;
  image: string;
  /** Optional separate image for the popup cover */
  modalImage?: string;
  headline?: string;
  services: string;
  client: string;
  year: string;
  website?: string;
  challenge: string;
  goal: string;
  result?: string;
  closing?: string;
};

const PROJECTS: Project[] = [
  {
    id: "acorn",
    name: "Acorn Group",
    image: "/assets/portfolio/acorn.png",
    headline:
      "Breaking Boundaries, Powering Possibilities From airspace to classroom, cargo to comfort — we reimagined ACORN’s digital presence to reflect a conglomerate that leads, connects, and evolves across sectors.",
    services: "Design, Performance, Website",
    client: "Acorn Group",
    year: "2025",
    website: "https://acorn.lk",
    challenge:
      "Our client needed a brand refresh to better reflect their evolving business values and appeal to a younger demographic. In response to the dynamic shifts in their industry landscape and a desire to connect more effectively with a younger audience, our client recognized the imperative for a comprehensive brand refresh. Driven by a commitment to remaining current, aligning with contemporary values, and resonating authentically with a dynamic audience, the refresh encompassed a holistic approach — from visual aesthetics and messaging to a profound reimagining of the overall brand experience.",
    goal:
      "We did some intense market research, refined their brand message, and created a brand new look to truly showcase their identity. Armed with insights, we meticulously refined their brand message for authenticity and resonance. Beyond words, we embarked on a creative journey, crafting a fresh visual identity that truly showcases their unique essence. This integrated approach, blending refined messaging and a captivating visual aesthetic, empowers our client to confidently communicate their values and engage their audience in a meaningful way.",
    result:
      "The rebranded company experienced increased customer engagement, a boost in sales, and a stronger brand presence in the market. The comprehensive initiative, extending beyond visual changes, resonated authentically with the audience, resulting in heightened engagement metrics and a tangible boost in sales. The company now stands on a more robust foundation, embodying a stronger and more compelling brand presence, setting the stage for continued success in the competitive market.",
    closing: "We are redefining excellence in branding. Shaping tomorrow's icons.",
  },
  {
    id: "save",
    name: "Save Energy Systems",
    image: "/assets/portfolio/save-card.png",
    modalImage: "/assets/portfolio/save-modal.png",
    services: "Art Direction, Branding, Strategy",
    client: "Save Energy Systems",
    year: "2024",
    website: "https://saveenergysystems.com",
    challenge:
      "Our client needed a brand refresh to better reflect their evolving business values and appeal to a brand new audience. In response to the evolving demands of the industry and the necessity to engage more deeply with their audience, our client has identified the critical need for an extensive brand overhaul. This strategic renewal is guided by a commitment to staying abreast of current trends, aligning with modern values, and fostering genuine connections with an increasingly dynamic consumer base.",
    goal:
      "In executing the brand refresh for SES, we prioritized nuanced modifications to the logo's form while introducing significant updates through color palette adjustments. Armed with insights, we meticulously refined their brand message for authenticity and resonance. Beyond words, we embarked on a creative journey, crafting a fresh visual identity that truly showcases their unique essence. This integrated approach, blending refined messaging and a captivating visual aesthetic, empowers our client to confidently communicate their values and engage their audience in a meaningful way.",
  },
  {
    id: "erin",
    name: "Erin International",
    image: "/assets/portfolio/erin.jpg",
    services: "Art Direction, Branding, Website",
    client: "Erin International",
    year: "2024",
    website: "https://erininternational.lk",
    challenge:
      "Our client needed a brand refresh to better reflect their evolving business values and appeal to a younger demographic. In response to the dynamic shifts in their industry landscape and a desire to connect more effectively with a younger audience, our client recognized the imperative for a comprehensive brand refresh. Driven by a commitment to remaining current, aligning with contemporary values, and resonating authentically with a dynamic audience, the refresh encompassed a holistic approach — from visual aesthetics and messaging to a profound reimagining of the overall brand experience.",
    goal:
      "We carried out some competitor research to find trends and patterns in the Agri-industry and wanted to give the brand an elegant refresh. With the knowledge gained from market research and competitor research we found ourselves on a sweet spot to go on and give Erin a fresh start with a logo rebranding and a website revamp to best portray their values to the audience and potential customer base.",
  },
  {
    id: "islex",
    name: "Islex Consulting",
    image: "/assets/portfolio/islex.png",
    services: "Branding, Logo, Website",
    client: "Islex Consulting",
    year: "2024",
    website: "https://www.islexconsulting.com",
    challenge:
      "Our client needed a minimal, aesthetic looking style for her consulting business which is focused on helping purpose driven companies. Starting with the personal request of a hygge style, we wanted to give Islex an elegant and stand out look in the consulting industry. We wanted to choose colors and font faces for Islex that would aim to bring a soothing yet confident feeling towards Islex.",
    goal:
      "We did some intense market research, refined their brand message, and created a brand new look to truly showcase their identity. Armed with insights, we meticulously refined their brand message for authenticity and resonance. Beyond words, we embarked on a creative journey, crafting a fresh visual identity that truly showcases their unique essence. This integrated approach, blending refined messaging and a captivating visual aesthetic, empowers our client to confidently communicate their values and engage their audience in a meaningful way.",
  },
  {
    id: "shareparty",
    name: "ShareParty",
    image: "/assets/portfolio/shareparty.png",
    services: "Website Development",
    client: "ShareParty",
    year: "2023",
    website: "https://shareparty.org",
    challenge:
      "Our client needed a minimalistic yet attractive site for her new endeavor ShareParty initiative. ShareParty is a thoughtful initiative brought to life by Mrs. Shama Amalean. The ShareParty initiative encourages parents of young children to come together and have play dates for their children whilst sharing toys and joy among children.",
    goal:
      "We did some research on similar initiatives and came up with a proper tone and style for the site. We did our best to bring out the joyful and thoughtful nature of this initiative backed up by meaningful statistics. The aesthetics and visuals were set to be minimal with elegantly laid out information accompanied by vibrant images.",
  },
  {
    id: "hinza",
    name: "Hinza",
    image: "/assets/portfolio/hinza-hero.png",
    modalImage: "/assets/portfolio/hinza-modal.png",
    headline:
      "Even the best products have a bad day. Hinza is your QA team’s superpower — catching complaints before they become catastrophes and turning chaos into closure.",
    services: "Product Design, Branding, SaaS Development",
    client: "Hinza (Personal SaaS by Mask'd)",
    year: "2025",
    website: "https://www.hinza.app",
    challenge:
      "QA teams in medium to large organizations were drowning in scattered complaints — emails, WhatsApp threads, and floor-level chaos with no single source of truth. Inefficient resolution, missing transparency, and weak audit trails meant issues resurfaced and trust eroded.",
    goal:
      "Design and build Hinza as an end-to-end QA complaint management platform: submit issues in seconds with photos and location, auto-assign investigators, run RCA & CAPA in one place, and close cases with clean, audit-ready documentation — from the factory floor to the boardroom.",
    result:
      "Hinza gives manufacturing, FMCG, pharma, apparel, and other scaled organizations a clear path from complaint to closure — with analytics, real-time notifications, assignment workflows, and documentation built for compliance.",
    closing: "Designed & developed by Mask'd.",
  },
];

export function Portfolio() {
  const mid = Math.floor(PROJECTS.length / 2);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selected) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  const modal =
    selected && mounted
      ? createPortal(
          <div
            className="portfolio-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={() => setSelected(null)}
          >
            <div
              className="portfolio-modal__panel"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="portfolio-modal__close"
                aria-label="Close project details"
                onClick={() => setSelected(null)}
              >
                ×
              </button>

              <div
                className={`portfolio-modal__media${selected.modalImage ? " portfolio-modal__media--brand" : ""}`}
                data-project={selected.id}
              >
                <img src={selected.modalImage ?? selected.image} alt="" />
              </div>

              <div className="portfolio-modal__body">
                <h3 id={titleId} className="portfolio-modal__title">
                  {selected.name}
                </h3>

                {selected.headline ? (
                  <p className="portfolio-modal__headline">{selected.headline}</p>
                ) : null}

                <dl className="portfolio-modal__facts">
                  <div>
                    <dt>Services</dt>
                    <dd>{selected.services}</dd>
                  </div>
                  <div>
                    <dt>Client</dt>
                    <dd>{selected.client}</dd>
                  </div>
                  <div>
                    <dt>Year</dt>
                    <dd>{selected.year}</dd>
                  </div>
                  {selected.website ? (
                    <div>
                      <dt>Website</dt>
                      <dd>
                        <a
                          href={selected.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {selected.website.replace(/^https?:\/\//, "")}
                        </a>
                      </dd>
                    </div>
                  ) : null}
                </dl>

                <section className="portfolio-modal__block">
                  <h4>Challenge</h4>
                  <p>{selected.challenge}</p>
                </section>

                <section className="portfolio-modal__block">
                  <h4>Goal</h4>
                  <p>{selected.goal}</p>
                </section>

                {selected.result ? (
                  <section className="portfolio-modal__block">
                    <h4>Result</h4>
                    <p>{selected.result}</p>
                  </section>
                ) : null}

                {selected.closing ? (
                  <p className="portfolio-modal__closing">{selected.closing}</p>
                ) : null}
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <section className="portfolio" id="work" aria-labelledby="portfolio-heading">
      <div className="container">
        <h2 id="portfolio-heading" className="section-title">
          Masterpieces Crafted By Us
        </h2>
        <p className="portfolio__hint">Hover to highlight · Click for details</p>

        <div className="portfolio__stage" role="list">
          {PROJECTS.map((project, index) => {
            const offset = index - mid;
            const isHighlighted = hoveredId === project.id;

            return (
              <article
                key={project.id}
                className="portfolio__card"
                role="listitem"
                tabIndex={0}
                data-offset={offset}
                data-highlighted={isHighlighted ? "true" : "false"}
                style={
                  {
                    "--offset": offset,
                    zIndex: isHighlighted ? 40 : 20 - Math.abs(offset),
                  } as CSSProperties
                }
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(project.id)}
                onBlur={() => setHoveredId(null)}
                onClick={() => setSelected(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(project);
                  }
                }}
                aria-label={`${project.name}. Open project details`}
              >
                <img
                  className="portfolio__card-media"
                  src={project.image}
                  alt=""
                  draggable={false}
                />
                <div className="portfolio__card-shade" aria-hidden="true" />
                <p className="portfolio__card-label">{project.name}</p>
              </article>
            );
          })}
        </div>
      </div>

      {modal}
    </section>
  );
}
