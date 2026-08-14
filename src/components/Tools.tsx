import type { CSSProperties } from "react";
import "./Tools.css";

type Tool = {
  name: string;
  tint: string;
  logo: string;
  lightLogo?: boolean;
};

const TOOLS: Tool[] = [
  { name: "Figma", tint: "#a259ff", logo: "/assets/logo-figma.png" },
  { name: "React", tint: "#61dafb", logo: "/assets/tools/react.svg" },
  { name: "TypeScript", tint: "#3178c6", logo: "/assets/tools/typescript.svg" },
  {
    name: "Next.js",
    tint: "#ffffff",
    logo: "/assets/tools/nextjs.svg",
    lightLogo: true,
  },
  { name: "Node.js", tint: "#68a063", logo: "/assets/tools/nodejs.svg" },
  { name: "Framer", tint: "#0055ff", logo: "/assets/tools/framer.svg" },
  { name: "Tailwind", tint: "#38bdf8", logo: "/assets/tools/tailwind.svg" },
  {
    name: "GitHub",
    tint: "#e6edf3",
    logo: "/assets/tools/github.svg",
    lightLogo: true,
  },
  {
    name: "Vercel",
    tint: "#ffffff",
    logo: "/assets/tools/vercel.svg",
    lightLogo: true,
  },
  { name: "Vite", tint: "#a855f7", logo: "/assets/tools/vite.svg" },
  { name: "PostgreSQL", tint: "#336791", logo: "/assets/tools/postgresql.svg" },
  { name: "MongoDB", tint: "#47a248", logo: "/assets/tools/mongodb.svg" },
  { name: "Supabase", tint: "#3ecf8e", logo: "/assets/tools/supabase.svg" },
  { name: "Firebase", tint: "#ffca28", logo: "/assets/tools/firebase.svg" },
  { name: "Docker", tint: "#2496ed", logo: "/assets/tools/docker.svg" },
  { name: "AWS", tint: "#ff9900", logo: "/assets/tools/aws.svg" },
  { name: "GraphQL", tint: "#e10098", logo: "/assets/tools/graphql.svg" },
  {
    name: "Notion",
    tint: "#ffffff",
    logo: "/assets/tools/notion.svg",
    lightLogo: true,
  },
  { name: "Slack", tint: "#e01e5a", logo: "/assets/tools/slack.svg" },
  { name: "Postman", tint: "#ff6c37", logo: "/assets/tools/postman.svg" },
  { name: "Webflow", tint: "#4353ff", logo: "/assets/tools/webflow.svg" },
  { name: "Adobe", tint: "#ff0000", logo: "/assets/tools/adobe.svg" },
  { name: "Claude", tint: "#d97757", logo: "/assets/tools/claude.svg" },
  {
    name: "Three.js",
    tint: "#ffffff",
    logo: "/assets/tools/threejs.svg",
    lightLogo: true,
  },
];

export function Tools() {
  return (
    <section className="tools" id="tools" aria-labelledby="tools-heading">
      <div className="tools__blueprint" aria-hidden="true" />

      <div className="container tools__inner">
        <h2 id="tools-heading" className="section-title">
          Tools We Trust
        </h2>
        <p className="tools__lede">
          The stack behind our craft — chosen for speed, reliability, and room
          to push creative work further.
        </p>

        <ul className="tools__grid" role="list">
          {TOOLS.map((tool) => (
            <li key={tool.name} className="tools__cell">
              <div
                className="tools__tile"
                style={{ "--tint": tool.tint } as CSSProperties}
                title={tool.name}
                data-light-logo={tool.lightLogo ? "true" : undefined}
              >
                <span className="tools__logo-wrap">
                  <img
                    className="tools__logo"
                    src={tool.logo}
                    alt=""
                    width={52}
                    height={52}
                  />
                </span>
                <span className="tools__name">{tool.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
