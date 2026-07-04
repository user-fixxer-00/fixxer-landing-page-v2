import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-fixxer-charcoal text-fixxer-text-on-dark">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/fixxer-logo.png"
              alt="Fixxer"
              width={118}
              height={70}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fixxer-text-on-dark/60">
              Fixxer connects South African homeowners with vetted, reviewed
              tradespeople — booked over WhatsApp, paid securely through the
              platform.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-caps text-fixxer-text-on-dark/50">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fixxer-text-on-dark/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-caps text-fixxer-text-on-dark/50">
              Legal
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-fixxer-text-on-dark/70 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-fixxer-text-on-dark/60">
              A tradesperson? Join our network —{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-fixxer-orange transition-colors hover:text-fixxer-orange-hover"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-caps text-fixxer-text-on-dark/50">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-fixxer-text-on-dark/70">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 text-whatsapp-green" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-fixxer-text-on-dark/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Fixxer. All rights reserved.</p>
          <p>Built for South Africa.</p>
        </div>
      </div>
    </footer>
  );
}
