"use client";

import { useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex items-center gap-3 md:bottom-7 md:right-7">
      <span
        className={`pointer-events-none hidden rounded-pill bg-fixxer-charcoal px-4 py-2 text-sm font-medium text-white transition-opacity duration-200 md:block ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        Chat on WhatsApp
      </span>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        aria-label="Chat with Fixxer on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`flex h-[50px] w-[50px] items-center justify-center rounded-full bg-whatsapp-green text-white transition-all duration-200 md:h-14 md:w-14 ${
          hovered
            ? "scale-[1.08] shadow-whatsapp-hover"
            : "scale-100 shadow-whatsapp"
        }`}
      >
        <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
      </a>
    </div>
  );
}
