import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  MessageCircle,
  Star,
  Wallet,
} from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From your first WhatsApp message to a completed, securely paid job — here's exactly how Fixxer works, step by step.",
};

const STEPS = [
  {
    icon: MessageCircle,
    step: "Step 1",
    title: "Send us a WhatsApp message",
    description:
      "Tell Fixxer what needs doing, in your own words — “my geyser is leaking”, “I need two rooms painted”, “the oven died”. Add a photo or voice note if it helps. There's no app to download and no account to create; if you can message a friend, you can book a tradesman.",
  },
  {
    icon: ClipboardList,
    step: "Step 2",
    title: "We scope the job with you",
    description:
      "Right there in the chat, we ask a few quick questions — where you are, when suits you, what the problem looks like. It takes a minute or two, and it means the tradesperson who arrives already knows exactly what the job involves.",
  },
  {
    icon: BadgeCheck,
    step: "Step 3",
    title: "Get matched with a vetted tradesman",
    description:
      "Fixxer matches you with a nearby tradesperson who has passed our vetting: verified identity, checked qualifications and licences, confirmed references and a track record of reviewed jobs. You'll see their profile, rating and reviews before you commit to anything.",
  },
  {
    icon: CalendarCheck,
    step: "Step 4",
    title: "Approve the quote, lock in the time",
    description:
      "You receive a clear, upfront quote in the chat. Happy? Accept it and the job is booked. Your payment goes into Fixxer's secure holding — not the tradesman's pocket — so both sides are protected from day one.",
  },
  {
    icon: Wallet,
    step: "Step 5",
    title: "Job done — payment released",
    description:
      "The tradesman arrives on time and does the work. Once you confirm you're happy with the result, Fixxer releases the payment. No cash changing hands, no awkward negotiations, no paying for half-finished work.",
  },
  {
    icon: Star,
    step: "Step 6",
    title: "Rate the job, help the next homeowner",
    description:
      "Leave a quick rating and review in the same chat. Reviews on Fixxer only come from real, completed jobs — they keep quality high and help the best tradespeople rise to the top.",
  },
];

const FAQS = [
  {
    question: "Do I need to download anything?",
    answer:
      "No. Fixxer runs entirely on WhatsApp, which you almost certainly already have. Send one message and you're in.",
  },
  {
    question: "How are tradespeople vetted?",
    answer:
      "Before joining Fixxer, every tradesperson goes through identity verification, checks on trade qualifications and licences, business registration checks where applicable, and reference confirmation. Only after passing do they receive jobs — and ongoing reviews keep them accountable.",
  },
  {
    question: "When do I pay, and is my money safe?",
    answer:
      "You pay when you accept the quote, but the money is held securely by Fixxer — not paid to the tradesperson. It's only released once you confirm the job is done to your satisfaction.",
  },
  {
    question: "What if something goes wrong with the job?",
    answer:
      "Because payment is held until you're satisfied, you're never stuck paying for bad work. Flag any issue in the chat and Fixxer's support team will step in to resolve it.",
  },
  {
    question: "What does Fixxer cost me as a homeowner?",
    answer:
      "The quote you accept is the price you pay — no hidden fees. Fixxer earns a commission from the completed transaction, so we only do well when your job goes well.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-fixxer-charcoal pb-20 pt-40 md:pb-28">
        <div className="absolute inset-0">
          <Image
            src="/images/trades/flooring-installation-hallway.jpg"
            alt="Tradespeople installing wooden flooring in a freshly painted home"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-fixxer-charcoal/70 via-fixxer-charcoal/85 to-fixxer-charcoal" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>How It Works</SectionLabel>
            <h1 className="mt-4 max-w-3xl text-[clamp(40px,6vw,68px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
              One WhatsApp message. Six simple steps. Job done.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-body text-fixxer-text-on-dark/70 md:text-xl">
              Here&apos;s exactly what happens between “something&apos;s
              broken” and “problem solved” — so you know what to expect at
              every step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-fixxer-surface-light py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <ol className="space-y-6">
            {STEPS.map(({ icon: Icon, step, title, description }) => (
              <Reveal key={step}>
                <li className="flex flex-col gap-5 rounded-card border border-fixxer-border bg-white p-8 shadow-card md:flex-row md:gap-8 md:p-10">
                  <div className="flex shrink-0 items-start gap-4 md:w-44 md:flex-col">
                    <span className="flex h-14 w-14 items-center justify-center rounded-card bg-fixxer-orange/10 text-fixxer-orange">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <span className="mt-3 text-sm font-semibold uppercase tracking-caps text-fixxer-orange md:mt-0">
                      {step}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-fixxer-text-primary md:text-2xl">
                      {title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-body text-fixxer-text-muted md:text-base">
                      {description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Reassurance / FAQ */}
      <section className="bg-fixxer-charcoal py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionLabel>Good To Know</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.01em] text-white md:text-5xl">
              Answering your questions.
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-body text-fixxer-text-on-dark/60">
              Still wondering about something? Ask us directly — on WhatsApp,
              naturally.
            </p>
            <div className="mt-8">
              <Button href={WHATSAPP_LINK} external variant="primary">
                <WhatsAppIcon className="h-5 w-5" />
                Ask on WhatsApp
              </Button>
            </div>
          </Reveal>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.05}>
                <details className="group rounded-card bg-fixxer-surface p-6 open:pb-7">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span
                      className="text-2xl font-light text-fixxer-orange transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[15px] leading-body text-fixxer-text-on-dark/60">
                    {faq.answer}
                  </p>
                </details>
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
              Ready when you are.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-body text-white/85">
              The first step takes about ten seconds. The rest is on us.
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
