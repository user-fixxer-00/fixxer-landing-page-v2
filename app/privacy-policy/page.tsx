import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fixxer collects, uses, discloses, stores and protects your personal information in accordance with POPIA.",
};

/*
 * The policy text below is reproduced verbatim from
 * privacy_policy/Fixxer_Privacy_Policy.md — do not edit the wording.
 */

const listClass = "list-disc space-y-1.5 pl-6 text-fixxer-text-muted";
const headingClass =
  "mt-12 text-2xl font-bold tracking-[-0.01em] text-fixxer-text-primary";
const paragraphClass = "mt-4 leading-body text-fixxer-text-muted";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-fixxer-charcoal pb-16 pt-40">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-caps text-fixxer-orange">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.02em] text-white md:text-5xl">
            Fixxer Privacy Policy (Draft)
          </h1>
          <p className="mt-4 text-fixxer-text-on-dark/60">
            <strong className="font-semibold text-fixxer-text-on-dark">
              Effective Date:
            </strong>{" "}
            July 1, 2026
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <article className="mx-auto max-w-3xl px-5 text-[15px] md:px-8 md:text-base">
          <h2 className={`${headingClass} mt-0`}>1. Introduction</h2>
          <p className={paragraphClass}>
            Welcome to Fixxer (&quot;Fixxer&quot;, &quot;we&quot;,
            &quot;our&quot;, &quot;us&quot;). Fixxer is a South African online
            marketplace that connects customers with verified tradespeople for
            home maintenance, repairs, installations and related services.
          </p>
          <p className={paragraphClass}>
            This Privacy Policy explains how we collect, use, disclose, store
            and protect your personal information in accordance with the
            Protection of Personal Information Act, 2013 (POPIA).
          </p>

          <h2 className={headingClass}>2. Scope</h2>
          <p className={paragraphClass}>This Policy applies to:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Website visitors</li>
            <li>Customers</li>
            <li>Tradespeople</li>
            <li>Business customers</li>
            <li>Mobile application users</li>
            <li>Anyone interacting with Fixxer</li>
          </ul>

          <h2 className={headingClass}>3. Information We Collect</h2>
          <h3 className="mt-6 text-lg font-semibold text-fixxer-text-primary">
            Information you provide
          </h3>
          <ul className={`${listClass} mt-3`}>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Physical address</li>
            <li>Identity verification information</li>
            <li>Business information</li>
            <li>Trade qualifications</li>
            <li>Certifications and licences</li>
            <li>Profile photographs</li>
            <li>Reviews</li>
            <li>Messages</li>
            <li>Support requests</li>
          </ul>
          <h3 className="mt-6 text-lg font-semibold text-fixxer-text-primary">
            Information collected automatically
          </h3>
          <ul className={`${listClass} mt-3`}>
            <li>Device information</li>
            <li>Browser information</li>
            <li>IP address</li>
            <li>Cookies</li>
            <li>Approximate location</li>
            <li>Usage analytics</li>
          </ul>
          <h3 className="mt-6 text-lg font-semibold text-fixxer-text-primary">
            Payment information
          </h3>
          <p className={paragraphClass}>
            Payments are processed by trusted third-party payment providers.
            Fixxer may store transaction records but does not intentionally
            store full payment card details.
          </p>

          <h2 className={headingClass}>4. How We Use Information</h2>
          <p className={paragraphClass}>We use personal information to:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Create and manage accounts</li>
            <li>Verify identities and professional credentials</li>
            <li>Match customers with tradespeople</li>
            <li>Process bookings</li>
            <li>Facilitate secure messaging</li>
            <li>Process payments and escrow</li>
            <li>Prevent fraud</li>
            <li>Improve our services</li>
            <li>Send service notifications</li>
            <li>Provide customer support</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className={headingClass}>5. Verification</h2>
          <p className={paragraphClass}>
            To improve trust and safety, Fixxer may verify:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Identity</li>
            <li>Trade qualifications</li>
            <li>Professional registrations</li>
            <li>Licences</li>
            <li>Business registrations</li>
            <li>Banking information</li>
            <li>References</li>
          </ul>

          <h2 className={headingClass}>6. Reviews</h2>
          <p className={paragraphClass}>
            Customers may leave reviews after completed jobs. Reviews may be
            displayed publicly with profile information.
          </p>

          <h2 className={headingClass}>7. Information Sharing</h2>
          <p className={paragraphClass}>We may share information with:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Payment processors</li>
            <li>Identity verification providers</li>
            <li>Cloud hosting providers</li>
            <li>Analytics providers</li>
            <li>Customer support providers</li>
            <li>Legal authorities where required by law</li>
          </ul>
          <p className={paragraphClass}>
            We never sell your personal information.
          </p>

          <h2 className={headingClass}>8. Cookies</h2>
          <p className={paragraphClass}>Fixxer uses cookies to:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Maintain login sessions</li>
            <li>Remember preferences</li>
            <li>Measure website performance</li>
            <li>Improve user experience</li>
          </ul>

          <h2 className={headingClass}>9. Security</h2>
          <p className={paragraphClass}>
            We use appropriate technical and organisational measures including
            encryption, secure authentication, access controls and monitoring.
          </p>

          <h2 className={headingClass}>10. Data Retention</h2>
          <p className={paragraphClass}>
            We retain personal information only for as long as necessary to
            provide services, comply with legal obligations and resolve
            disputes.
          </p>

          <h2 className={headingClass}>11. Your Rights</h2>
          <p className={paragraphClass}>Under POPIA you may:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Access your information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion where applicable</li>
            <li>Object to certain processing</li>
            <li>Withdraw consent where applicable</li>
            <li>Lodge a complaint with the Information Regulator</li>
          </ul>

          <h2 className={headingClass}>12. International Transfers</h2>
          <p className={paragraphClass}>
            Where services are hosted outside South Africa, we implement
            appropriate safeguards for international transfers.
          </p>

          <h2 className={headingClass}>13. Children&apos;s Privacy</h2>
          <p className={paragraphClass}>
            Fixxer is not intended for persons under 18 years of age.
          </p>

          <h2 className={headingClass}>14. Changes</h2>
          <p className={paragraphClass}>
            We may update this Privacy Policy from time to time. Material
            changes will be communicated through appropriate channels.
          </p>

          <h2 className={headingClass}>15. Contact</h2>
          <p className={paragraphClass}>
            Email:{" "}
            <a
              href="mailto:privacy@fixxer.co.za"
              className="font-medium text-fixxer-orange hover:text-fixxer-orange-hover"
            >
              privacy@fixxer.co.za
            </a>
            <br />
            Website:{" "}
            <a
              href="https://www.fixxer.co.za"
              className="font-medium text-fixxer-orange hover:text-fixxer-orange-hover"
            >
              https://www.fixxer.co.za
            </a>
          </p>
        </article>
      </section>
    </>
  );
}
