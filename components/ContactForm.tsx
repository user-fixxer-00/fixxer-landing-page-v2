"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const inputClass =
  "w-full rounded-input border border-fixxer-border bg-white px-4 py-3 text-[15px] text-fixxer-text-primary placeholder:text-fixxer-text-muted/60 focus:border-fixxer-orange focus:outline-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("Fixxer contact enquiry:", {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-card bg-white p-8 text-center shadow-card md:p-10">
        <p className="text-2xl font-bold text-fixxer-text-primary">
          Thanks — message received!
        </p>
        <p className="mt-3 leading-body text-fixxer-text-muted">
          We&apos;ll get back to you shortly. For anything urgent, WhatsApp is
          always the fastest way to reach us.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card bg-white p-8 shadow-card md:p-10"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-fixxer-text-primary"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-fixxer-text-primary"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-fixxer-text-primary"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Hello, I'd like to ask about…"
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-btn bg-fixxer-orange px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-fixxer-orange-hover hover:shadow-[0_4px_16px_rgba(255,107,53,0.35)]"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
