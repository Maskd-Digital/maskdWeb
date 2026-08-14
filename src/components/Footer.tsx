"use client";

import { useState, type FormEvent } from "react";
import "./Footer.css";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const isSubmitting = status === "loading";
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const canSubmit = name.trim().length > 0 && emailValid && !isSubmitting;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;

    const form = event.currentTarget;
    const honeypot = new FormData(form).get("website");

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          website: typeof honeypot === "string" ? honeypot : "",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setFeedback(
          data.error ?? "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      setFeedback("Thank you — your message has been sent. We'll be in touch shortly.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer__panels" aria-hidden="true" />

      <div className="footer__shell">
        <div className="footer__content">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="footer__intro">
                <img
                  className="footer__logo"
                  src="/assets/footer/logo-maskd.png"
                  alt="Mask'd"
                  width={120}
                  height={120}
                />
                <h2 className="footer__tagline">
                  Engineering Digital Impact
                  <br className="footer__break" />
                  for Top Tier Companies.
                </h2>
                <p className="footer__desc">
                  We provide premium digital services, specializing in
                  <br className="footer__break" />
                  high-performance application development that
                  <br className="footer__break" />
                  drives growth.
                </p>
              </div>
              <div className="footer__links">
                <p className="footer__links-label">Quick Links</p>
                <nav aria-label="Footer quick links">
                  <a href="#about">About Us</a>
                  <span className="footer__links-sep" aria-hidden="true">
                    |
                  </span>
                  <a href="#capabilities">Our Services</a>
                  <span className="footer__links-sep" aria-hidden="true">
                    |
                  </span>
                  <a href="#work">Work</a>
                </nav>
              </div>
            </div>

            <form className="footer__form" onSubmit={handleSubmit} noValidate={false}>
              <h2 className="footer__form-title">Contact Us</h2>

              <label className="footer__honeypot" aria-hidden="true">
                <span>Website</span>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>

              <label className="footer__field">
                <span className="footer__label">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name here"
                  required
                  autoComplete="name"
                  maxLength={200}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  disabled={isSubmitting}
                />
              </label>

              <label className="footer__field">
                <span className="footer__label">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email here"
                  required
                  autoComplete="email"
                  maxLength={320}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={isSubmitting}
                />
              </label>

              <label className="footer__field">
                <span className="footer__label">Message</span>
                <textarea
                  name="message"
                  placeholder="Enter your message here"
                  rows={5}
                  maxLength={8000}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  disabled={isSubmitting}
                />
              </label>

              {feedback ? (
                <p
                  className="footer__status"
                  data-kind={status === "success" ? "success" : "error"}
                  role="status"
                  aria-live="polite"
                >
                  {feedback}
                </p>
              ) : null}

              <button
                type="submit"
                className="footer__submit"
                disabled={!canSubmit}
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <p className="footer__copy">All Rights Reserved.</p>
      </div>
    </footer>
  );
}
