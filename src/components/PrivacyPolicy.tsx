import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./PrivacyPolicy.css";

const CONTACT_EMAIL = "maskddevelopment@gmail.com";
const LAST_UPDATED = "September 30, 2026";

export function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <Header />

      <main className="legal" aria-labelledby="privacy-heading">
        <div className="container legal__inner">
          <Link className="legal__back" href="/">
            ‹ Back to home
          </Link>

          <h1 id="privacy-heading" className="section-title legal__title">
            Privacy Policy
          </h1>
          <p className="legal__updated">Last updated: {LAST_UPDATED}</p>

          <article className="legal__panel">
            <p className="legal__intro">
              Mask&apos;d Studio (&ldquo;Mask&apos;d&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy. This
              policy explains what personal information we collect when you
              visit our website or contact us, how we use it, and the choices
              you have.
            </p>

            <section className="legal__section">
              <h2>1. Who we are</h2>
              <p>
                Mask&apos;d Studio is a design, strategy, and software
                development studio based in Colombo, Sri Lanka, and operates as
                part of Chakravarthy Holdings. We are responsible for the
                personal information collected through this website.
              </p>
            </section>

            <section className="legal__section">
              <h2>2. Information we collect</h2>
              <p>We only collect the information needed to respond to you:</p>
              <ul>
                <li>
                  <strong>Contact form details</strong> — your name, email
                  address, and any message you choose to send, along with the
                  date and time of your submission.
                </li>
                <li>
                  <strong>Technical information</strong> — your IP address is
                  processed briefly to protect the contact form from spam and
                  abuse. Our hosting provider may also keep standard server
                  logs (such as browser type and pages requested) for security
                  and reliability.
                </li>
              </ul>
              <p>
                We do not use advertising or tracking cookies, and we do not run
                third-party analytics on this website.
              </p>
            </section>

            <section className="legal__section">
              <h2>3. How we use your information</h2>
              <ul>
                <li>To reply to your enquiry and discuss potential projects.</li>
                <li>To provide and manage the services you engage us for.</li>
                <li>To keep our website and contact form secure.</li>
                <li>To meet our legal and regulatory obligations.</li>
              </ul>
              <p>
                We will never sell your personal information or use it to send
                you unsolicited marketing.
              </p>
            </section>

            <section className="legal__section">
              <h2>4. How we share your information</h2>
              <p>
                We only share your information when it is necessary to run our
                business:
              </p>
              <ul>
                <li>
                  <strong>Service providers</strong> — such as our email and
                  website hosting providers, who process data on our behalf to
                  deliver contact form messages and keep the site online.
                </li>
                <li>
                  <strong>Chakravarthy Holdings</strong> — where needed to
                  support or deliver the services you request.
                </li>
                <li>
                  <strong>Legal requirements</strong> — if we are required to by
                  law or to protect our rights, users, or the public.
                </li>
              </ul>
            </section>

            <section className="legal__section">
              <h2>5. How long we keep it</h2>
              <p>
                We keep enquiry messages only for as long as needed to respond,
                manage any resulting project, and maintain reasonable business
                records. After that, we delete or anonymise them.
              </p>
            </section>

            <section className="legal__section">
              <h2>6. How we protect it</h2>
              <p>
                Contact form submissions are sent over encrypted connections, and
                access to your information is limited to the people who need it
                to help you. No online system is completely secure, but we take
                reasonable steps to protect your data.
              </p>
            </section>

            <section className="legal__section">
              <h2>7. Your rights</h2>
              <p>
                Subject to applicable data protection laws, including Sri
                Lanka&apos;s Personal Data Protection Act, No. 9 of 2022, you can
                ask us to:
              </p>
              <ul>
                <li>Access the personal information we hold about you.</li>
                <li>Correct information that is inaccurate or incomplete.</li>
                <li>Delete your information.</li>
                <li>Object to or restrict how we use it.</li>
              </ul>
              <p>
                To make a request, email us using the details below. We will
                respond within a reasonable time.
              </p>
            </section>

            <section className="legal__section">
              <h2>8. Links to other websites</h2>
              <p>
                Our portfolio links to websites we have built for clients. Those
                sites are run by their owners and have their own privacy
                policies, which we encourage you to review.
              </p>
            </section>

            <section className="legal__section">
              <h2>9. Children&apos;s privacy</h2>
              <p>
                This website is not directed at children, and we do not knowingly
                collect personal information from anyone under 16.
              </p>
            </section>

            <section className="legal__section">
              <h2>10. Changes to this policy</h2>
              <p>
                We may update this policy from time to time. When we do, we will
                revise the &ldquo;Last updated&rdquo; date at the top of this
                page.
              </p>
            </section>

            <section className="legal__section">
              <h2>11. Contact us</h2>
              <p>
                If you have questions about this policy or how we handle your
                information, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
