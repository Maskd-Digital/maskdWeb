"use client";

import type { FormEvent } from "react";
import "./Footer.css";

export function Footer() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer__panels" aria-hidden="true" />

      <div className="footer__shell">
        <div className="footer__content">
          <div className="footer__grid">
            <div className="footer__brand">
              <img
                className="footer__logo"
                src="/assets/footer/logo-maskd.png"
                alt="Mask'd"
                width={120}
                height={120}
              />
              <h2 className="footer__tagline">
                Engineering Digital Impact for Top Tier Companies.
              </h2>
              <p className="footer__desc">
                We provide premium digital services, specializing in
                high-performance application development that drives growth.
              </p>
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

            <form className="footer__form" onSubmit={handleSubmit}>
              <h2 className="footer__form-title">Contact Us</h2>

              <label className="footer__field">
                <span className="footer__label">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name here"
                  required
                  autoComplete="name"
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
                />
              </label>

              <label className="footer__field">
                <span className="footer__label">Message</span>
                <textarea
                  name="message"
                  placeholder="Enter your message here"
                  rows={5}
                  required
                />
              </label>

              <button type="submit" className="footer__submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <p className="footer__copy">All Rights Reserved.</p>
      </div>
    </footer>
  );
}
