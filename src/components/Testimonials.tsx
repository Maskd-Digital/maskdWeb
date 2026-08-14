import "./Testimonials.css";

const TESTIMONIALS = [
  {
    id: "shama",
    quote:
      "I engaged Shiva and his team for an app development project and very much enjoyed working with them. They helped think through all the aspects of the development, leaving no stone unturned. I appreciate the thoroughness of their work. They were timely, professional and very pleasant to work with.",
    name: "Mrs. Shama Amalean Skinner",
    role: "CEO, Islex Consulting",
    initials: "SA",
  },
  {
    id: "benjamin",
    quote:
      "Maskd was a revelation for me; it is possible for website design, development, maintenance and branding support services to be delivered both cost-effectively and with efficiency. Shiva is a true professional! Overnight, he fixed issues that had plagued my old website for years.",
    name: "Mr. E. Benjamin Skinner",
    role: "Author, A Crime So Monstrous",
    initials: "EB",
  },
  {
    id: "aj",
    quote:
      "We had the pleasure of working with Shiva Balachandran from MASKD for our website development, and the experience was exceptional. Shiva demonstrated a high level of professionalism throughout every phase of the project, meticulously guiding us through the processes and conducting thorough research to ensure an optimally designed website.",
    name: "AJ",
    role: "Founder, AJ Solutions",
    initials: "AJ",
  },
  {
    id: "asitha",
    quote:
      "Shiva's contribution in the Atlas three pillar digital transformation journey was impressive both in terms of an understanding of the technical aspects of solutions as well as interacting with the stakeholders to bring out good outcomes.",
    name: "Asitha Samaraweera",
    role: "Managing Director, Hemas International",
    initials: "AS",
  },
  {
    id: "graham",
    quote:
      "I have worked with Chakravarthy Holdings, and their digital arm Mask'd, since the spring of 2023, following an introduction by a trusted mutual business acquaintance. Since then, Mask'd have worked on a variety of tasks, specifically helping with hosting, maintenance, design and problem-solving related to websites for two separate businesses. They have also resolved various other technical issues. I have always found Mask'd to be highly responsive, very professional, knowledgeable and generous with their time and skills. I am happy to recommend their services without hesitation.",
    name: "Graham",
    role: "Owner, Les Alpes d'Azur",
    initials: "G",
  },
] as const;

export function Testimonials() {
  return (
    <section
      className="testimonials"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container testimonials__inner">
        <header className="testimonials__header">
          <h2 id="testimonials-heading" className="section-title">
            Client Words About Mask&apos;d
          </h2>
          <p className="testimonials__lede">
            Trusted by founders and teams who care about craft, clarity, and
            outcomes.
          </p>
        </header>

        <div className="testimonials__rail">
          {TESTIMONIALS.map((item) => (
            <article key={item.id} className="testimonials__card">
              <p className="testimonials__quote">{item.quote}</p>
              <footer className="testimonials__author">
                <span className="testimonials__avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <span className="testimonials__meta">
                  <span className="testimonials__name">{item.name}</span>
                  <span className="testimonials__role">{item.role}</span>
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
