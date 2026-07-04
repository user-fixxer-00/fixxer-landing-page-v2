import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  MessageCircle,
  ShieldCheck,
  Star,
  Wallet,
} from "lucide-react";
import Button from "@/components/Button";
import CategoryCard from "@/components/CategoryCard";
import PhoneMockup from "@/components/PhoneMockup";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import StepCard from "@/components/StepCard";
import TestimonialCard from "@/components/TestimonialCard";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  STATS,
  TESTIMONIALS,
  TRADE_CATEGORIES,
  WHATSAPP_LINK,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative flex min-h-screen items-center bg-fixxer-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/images/trades/painter-on-ladder-south-africa.jpg"
            alt="A South African painter working on a ladder outside a home"
            fill
            priority
            className="object-cover object-[70%_30%] opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fixxer-charcoal via-fixxer-charcoal/75 to-fixxer-charcoal/20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-fixxer-charcoal to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-8">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-fixxer-text-on-dark/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-whatsapp-green" />
              Now matching jobs in Gauteng &amp; the Western Cape
            </p>
            <h1 className="mt-6 max-w-3xl text-[clamp(48px,7vw,80px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
              Trusted tradespeople, one WhatsApp away.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-body text-fixxer-text-on-dark/70 md:text-xl">
              Fixxer matches you with vetted, reviewed tradespeople for any job
              at home — and holds your payment securely until the work is done
              right.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href={WHATSAPP_LINK} external variant="primary">
                <WhatsAppIcon className="h-5 w-5" />
                Get Started on WhatsApp
              </Button>
              <Button href="/how-it-works" variant="ghost-dark">
                See How It Works
              </Button>
            </div>
            <p className="mt-8 text-sm text-fixxer-text-on-dark/50">
              Vetted professionals · Secure payments · Rated &amp; reviewed
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-fixxer-surface-light">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <Reveal>
            <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {[
                { icon: ShieldCheck, label: "Vetted Tradespeople" },
                { icon: MessageCircle, label: "WhatsApp Booking" },
                { icon: Star, label: "Reviewed & Rated" },
                { icon: Wallet, label: "Secure Payments" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center justify-center gap-3"
                >
                  <Icon
                    className="h-6 w-6 shrink-0 text-fixxer-orange"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-fixxer-text-primary md:text-base">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 3. HOW IT WORKS (summary) */}
      <section className="bg-fixxer-charcoal py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>How Fixxer Works</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.01em] text-white md:text-5xl">
              From &ldquo;help!&rdquo; to job done, in three steps.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Send a WhatsApp message",
                description:
                  "Tell us what needs fixing — no app to download, no forms to fill in. Just message Fixxer like you'd message a friend.",
              },
              {
                number: "02",
                title: "Get matched with a vetted tradesman",
                description:
                  "We match you with a nearby tradesperson whose ID, qualifications and reviews have been checked by Fixxer.",
              },
              {
                number: "03",
                title: "Job done — pay securely",
                description:
                  "Your money is held safely by Fixxer and only released when the job is finished to your satisfaction.",
              },
            ].map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <StepCard {...step} onDark />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 font-semibold text-fixxer-orange transition-colors hover:text-fixxer-orange-hover"
            >
              See the full process
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. TRADE CATEGORIES */}
      <section className="bg-fixxer-surface-light py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>Trade Categories</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.01em] text-fixxer-text-primary md:text-5xl">
              Whatever needs fixing, we&apos;ve got the right hands for it.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRADE_CATEGORIES.map((category, i) => (
              <Reveal key={category.label} delay={(i % 3) * 0.08}>
                <CategoryCard {...category} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY FIXXER */}
      <section className="bg-fixxer-charcoal py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-card lg:aspect-[3/4]">
              <Image
                src="/images/trades/carpenter-hammer-workshop.jpg"
                alt="A carpenter shaping timber with a hammer and chisel in warm workshop light"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel>Why Fixxer</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.01em] text-white md:text-5xl">
              Finding someone you can trust shouldn&apos;t be the hardest part
              of the job.
            </h2>
            <ul className="mt-10 space-y-7">
              {[
                {
                  icon: BadgeCheck,
                  title: "Every tradesman is vetted",
                  description:
                    "ID, qualifications, references and workmanship — checked before anyone gets a single job through Fixxer.",
                },
                {
                  icon: Wallet,
                  title: "Your money is protected",
                  description:
                    "Payments are held securely and only released when you're happy. No cash up front, no disappearing acts.",
                },
                {
                  icon: Star,
                  title: "Real reviews from real jobs",
                  description:
                    "Every rating comes from a completed, paid job — so a 4.8★ tradesman has genuinely earned it.",
                },
                {
                  icon: Eye,
                  title: "Honest, upfront pricing",
                  description:
                    "Clear quotes before work starts. No hidden fees, no surprises when the invoice arrives.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-fixxer-orange/15 text-fixxer-orange">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 text-[15px] leading-body text-fixxer-text-on-dark/60">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 6. WHATSAPP-FIRST */}
      <section className="bg-fixxer-surface-light py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>WhatsApp-First</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.01em] text-fixxer-text-primary md:text-5xl">
              No apps to download. No account to create.{" "}
              <span className="text-whatsapp-green">Just WhatsApp.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-body text-fixxer-text-muted">
              You already use WhatsApp every day — so that&apos;s where Fixxer
              lives. Describe the job, get matched, receive your quote and
              track progress, all in one chat. It works on any phone, even on a
              bad signal day.
            </p>
            <div className="mt-9">
              <Button href={WHATSAPP_LINK} external variant="primary">
                <WhatsAppIcon className="h-5 w-5" />
                Start a conversation
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <PhoneMockup />
          </Reveal>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>What Homeowners Say</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.01em] text-fixxer-text-primary md:text-5xl">
              South Africans are getting jobs done, the easy way.
            </h2>
          </Reveal>
          <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {TESTIMONIALS.map((testimonial, i) => (
              <Reveal
                key={testimonial.name}
                delay={i * 0.1}
                className="w-[85%] shrink-0 snap-center md:w-auto"
              >
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. STATS BAND */}
      <section className="bg-fixxer-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="text-center">
                  <dd className="text-5xl font-extrabold tracking-tight text-fixxer-orange md:text-6xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-3 text-sm font-medium text-fixxer-text-on-dark/60 md:text-base">
                    {stat.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 9. ABOUT TEASER */}
      <section className="bg-fixxer-surface-light py-20 md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.01em] text-fixxer-text-primary md:text-4xl">
              Built for South Africa&apos;s homes — and its hands.
            </h2>
            <p className="mt-6 text-lg leading-body text-fixxer-text-muted">
              Fixxer was born from a simple frustration: finding a reliable
              tradesman in South Africa is a gamble. We&apos;re building the
              trusted middle ground — connecting hands that build with homes
              that need them.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-semibold text-fixxer-orange transition-colors hover:text-fixxer-orange-hover"
              >
                Our story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="bg-fixxer-orange py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-[-0.02em] text-white md:text-6xl">
              Got a job that needs doing?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-body text-white/85">
              Send one message and consider it handled. Problem solved.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={WHATSAPP_LINK} external variant="white">
                <WhatsAppIcon className="h-5 w-5 text-whatsapp-green" />
                Get Started on WhatsApp
              </Button>
              <Button
                href="/how-it-works"
                variant="ghost-dark"
                className="border-white/40 text-white hover:border-white"
              >
                Learn more
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
