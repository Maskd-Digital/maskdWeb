import "./About.css";

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="container about__inner">
        <h2 id="about-heading" className="section-title">
          Our Origin &amp; Intent
        </h2>
        <div className="about__copy">
          <p>
            {/* Placeholder — full copy not provided in design assets */}
            We are Mask&apos;d, a design and strategy studio born in Colombo.
            We craft visual systems and digital experiences that help brands
            speak with clarity and confidence.
          </p>
          <p>
            From identity to product interfaces, our work sits at the
            intersection of craft and strategy — built to resonate, not just to
            look good.
          </p>
        </div>

        <div className="about__carousel" aria-label="Team">
          <button type="button" className="about__arrow" aria-label="Previous">
            ‹
          </button>
          <div className="about__slides">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="about__slide"
                data-active={i === 1 ? "true" : "false"}
                aria-hidden={i !== 1}
              />
            ))}
          </div>
          <button type="button" className="about__arrow" aria-label="Next">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
