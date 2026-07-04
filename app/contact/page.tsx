import type { Metadata } from "next";
import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CONTACT_EMAIL, WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Fixxer — on WhatsApp for the fastest response, or send us an enquiry and we'll come back to you.",
};

export default function ContactPage() {
  return (
    <section className="bg-fixxer-surface-light pb-20 pt-40 md:pb-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-fixxer-text-primary">
            Let&apos;s get it sorted.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-body text-fixxer-text-muted">
            The fastest way to reach Fixxer is the same way you&apos;d book a
            job — a WhatsApp message. Prefer email? Use the form and we&apos;ll
            come back to you.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 flex items-center gap-4 rounded-card border border-fixxer-border bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-whatsapp-green text-white">
              <WhatsAppIcon className="h-6 w-6" />
            </span>
            <span>
              <span className="block font-semibold text-fixxer-text-primary">
                Chat on WhatsApp
              </span>
              <span className="mt-0.5 block text-sm text-fixxer-text-muted">
                Typically replies within minutes
              </span>
            </span>
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 flex items-center gap-4 rounded-card border border-fixxer-border bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fixxer-orange/10 text-fixxer-orange">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold text-fixxer-text-primary">
                {CONTACT_EMAIL}
              </span>
              <span className="mt-0.5 block text-sm text-fixxer-text-muted">
                For general and tradesperson enquiries
              </span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
