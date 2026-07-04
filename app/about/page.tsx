import type { Metadata } from "next";
import Image from "next/image";
import { HandHeart, ShieldCheck, Sparkles, Users } from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fixxer is closing South Africa's home services trust gap — connecting hands that build with homes that need them, over WhatsApp.",
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trust, earned",
    description:
      "Every tradesperson on Fixxer is vetted — ID, qualifications, references and past work. Trust isn't a slogan; it's our product.",
  },
  {
    icon: Users,
    title: "Dignity for the trades",
    description:
      "South Africa has millions of skilled hands working informally. We give great tradespeople the verified profile, steady work and recognition they deserve.",
  },
  {
    icon: Sparkles,
    title: "Radical simplicity",
    description:
      "If your gran can't book a plumber with it, it's too complicated. That's why Fixxer runs on WhatsApp — the app South Africa already knows.",
  },
  {
    icon: HandHeart,
    title: "Fair for both sides",
    description:
      "Homeowners get honest pricing and protected payments. Tradespeople get paid properly and on time. Nobody wins unless the job is done right.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-fixxer-surface-light pb-16 pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>About Fixxer</SectionLabel>
            <h1 className="mt-4 max-w-3xl text-[clamp(40px,6vw,68px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-fixxer-text-primary">
              Connecting hands that build, with homes that need them.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-body text-fixxer-text-muted md:text-xl">
              Fixxer is a South African home trades marketplace on a mission to
              fix the hardest part of home maintenance: finding someone you can
              actually trust.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-fixxer-charcoal py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Why We Built This</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.01em] text-white md:text-5xl">
              The trust gap was the whole problem. So we made it our whole
              business.
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-body text-fixxer-text-on-dark/70">
              <p>
                Every South African homeowner knows the story. Something breaks,
                you ask around for “a guy”, and then you hope — hope he shows
                up, hope he knows what he&apos;s doing, hope your deposit
                doesn&apos;t vanish. The market is full of skilled, honest
                tradespeople, but with no way to tell them apart from the
                chancers, everyone loses.
              </p>
              <p>
                It cuts both ways. Millions of genuinely skilled tradespeople
                work informally across South Africa with no credible way to
                prove their credentials or reach quality customers. They rely
                on word of mouth while unqualified competitors undercut them.
              </p>
              <p>
                Fixxer exists to close that gap. We rigorously vet every
                tradesperson, hold payments securely until the work is done,
                and put real reviews behind every name. And because we run on
                WhatsApp, there&apos;s nothing new to learn — booking a vetted
                professional is as easy as texting a friend.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-card">
              <Image
                src="/images/trades/tradespeople-ladders-storefront.jpg"
                alt="A team of tradespeople working together on ladders outside a building"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-fixxer-surface-light py-20 md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <SectionLabel>Our Mission</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.01em] text-fixxer-text-primary md:text-5xl">
              A South Africa where every home can find trusted hands — and
              every trusted pair of hands can find work.
            </h2>
            <p className="mt-6 text-lg leading-body text-fixxer-text-muted">
              We&apos;re professionalising a huge, informal industry one vetted
              tradesperson at a time — starting with plumbers, electricians,
              solar installers, painters and handymen, and growing from there.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.01em] text-fixxer-text-primary md:text-5xl">
              Our values do the heavy lifting.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={(i % 2) * 0.1}>
                <div className="h-full rounded-card border border-fixxer-border bg-fixxer-surface-light p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-fixxer-orange/10 text-fixxer-orange">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-fixxer-text-primary">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-body text-fixxer-text-muted">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fixxer-orange py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-white md:text-5xl">
              Be part of the fix.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-body text-white/85">
              Whether your tap is dripping or your whole kitchen needs redoing,
              it starts with one message.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={WHATSAPP_LINK} external variant="white">
                <WhatsAppIcon className="h-5 w-5 text-whatsapp-green" />
                Get Started on WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
