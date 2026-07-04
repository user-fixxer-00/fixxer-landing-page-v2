// Placeholder number — no WhatsApp number was published in the business plan.
export const WHATSAPP_NUMBER = "27871234567";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Fixxer! I need help with a job at home."
)}`;

export const CONTACT_EMAIL = "info@fixxer.co.za";
export const PRIVACY_EMAIL = "privacy@fixxer.co.za";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export const TRADE_CATEGORIES = [
  {
    icon: "wrench",
    label: "Plumbing",
    description: "Burst pipes, geysers, leaks and full installations.",
  },
  {
    icon: "zap",
    label: "Electrical",
    description: "Wiring, DB boards, compliance certificates and repairs.",
  },
  {
    icon: "sun",
    label: "Solar Installation",
    description: "Beat load shedding with vetted solar and backup installers.",
  },
  {
    icon: "paintbrush",
    label: "Painting",
    description: "Interior and exterior painting, waterproofing and prep.",
  },
  {
    icon: "hammer",
    label: "Handyman",
    description: "Those small jobs that never get done — sorted in one visit.",
  },
  {
    icon: "grid",
    label: "Tiling",
    description: "Bathrooms, kitchens, patios — neat lines, clean grout.",
  },
  {
    icon: "layers",
    label: "Flooring",
    description: "Laminate, vinyl and wooden floors, fitted properly.",
  },
  {
    icon: "leaf",
    label: "Landscaping",
    description: "Garden design, irrigation and outdoor upgrades.",
  },
  {
    icon: "plug",
    label: "Appliance Repair",
    description: "Fridges, washing machines, ovens — repaired, not replaced.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Thandi Mokoena",
    location: "Johannesburg",
    trade: "Plumbing",
    quote:
      "My geyser burst on a Sunday night. I sent one WhatsApp message and had a vetted plumber at my door by 8am. Paying through Fixxer meant no cash, no stress.",
    rating: 5,
  },
  {
    name: "Pieter van der Merwe",
    location: "Cape Town",
    trade: "Solar Installation",
    quote:
      "After months of load shedding chaos we finally went solar. Fixxer matched us with an installer whose credentials we could actually see. The whole job ran through WhatsApp.",
    rating: 5,
  },
  {
    name: "Ayesha Khan",
    location: "Pretoria",
    trade: "Painting",
    quote:
      "I've been burned by no-show painters before. With Fixxer I could read real reviews first, and my money only released when the job was done properly. Brilliant.",
    rating: 5,
  },
] as const;

export const STATS = [
  { value: "100%", label: "Vetted & verified tradespeople" },
  { value: "9", label: "Trade categories and growing" },
  { value: "4.8★", label: "Average job rating" },
  { value: "R0", label: "Hidden fees — ever" },
] as const;
