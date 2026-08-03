import "./Services.css";

const SERVICES = [
  {
    id: "app",
    title: "App Development.",
    icon: "/assets/services/app-development.png",
    body: "Our flagship specialty focuses on engineering high-performance, scalable software tailored to your business needs. As experts in the field, we leverage cutting-edge frameworks and the latest architectural trends to build powerful web and mobile applications. From fluid user interfaces to secure, robust backends, we deliver digital solutions that solve complex problems and drive measurable growth.",
  },
  {
    id: "web",
    title: "Web Development.",
    icon: "/assets/services/web-development.png",
    body: "A great website is the digital storefront of your brand. We specialize in building fast, secure, and highly responsive websites that captivate audiences on any device. By combining expert coding practices with modern design trends like immersive interactions and advanced accessibility standards we ensure your platform is not just visually stunning, but optimized for maximum conversion.",
  },
  {
    id: "branding",
    title: "Branding & Logo Design.",
    icon: "/assets/services/branding.png",
    body: "Your identity is more than just a visual marker; it is the emotional core of your business. We excel at translating your company's DNA into memorable logos and comprehensive brand systems. Staying tightly attuned to contemporary design aesthetics and shifting consumer behaviors, we create timeless yet modern identities that instantly build trust and stand out in crowded markets.",
  },
  {
    id: "campaigns",
    title: "Campaigns.",
    icon: "/assets/services/campaigns.png",
    body: "In a fast-moving digital landscape, capturing attention requires strategy and agility. Our team designs and executes high-impact marketing campaigns that cut through the noise and deliver results. By analyzing the latest market trends, platform algorithms, and consumer insights, we launch targeted creative campaigns that engage your audience, build loyalty, and drive real action.",
  },
] as const;

export function Services() {
  return (
    <section
      className="services"
      id="capabilities"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <h2 id="services-heading" className="section-title services__heading">
          Capabilities &amp; Craft
        </h2>
        <div className="services__grid">
          {SERVICES.map((service) => (
            <article key={service.id} className="service-card">
              {/* Rectangle 28 — active glow; bleeds past rounded corner */}
              <span className="service-card__glow" aria-hidden="true" />

              <div className="service-card__top">
                <div className="service-card__icon">
                  <img src={service.icon} alt="" width={99} height={99} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
              </div>
              <p className="service-card__body">{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
