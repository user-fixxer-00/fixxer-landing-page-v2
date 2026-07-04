"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Pages with a dark hero get a transparent nav at the top of the page.
  const darkHero = pathname === "/" || pathname === "/how-it-works";
  const solid = scrolled || menuOpen || !darkHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-300 ${
        solid
          ? "bg-fixxer-charcoal/90 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/images/fixxer-logo.png"
            alt="Fixxer"
            width={91}
            height={54}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  pathname === link.href
                    ? "text-white"
                    : "text-fixxer-text-on-dark/70"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-btn bg-fixxer-orange px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-fixxer-orange-hover hover:shadow-[0_4px_16px_rgba(255,107,53,0.35)] md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Get Started on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-btn text-fixxer-text-on-dark md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full h-[calc(100vh-72px)] bg-fixxer-charcoal md:hidden">
          <ul className="flex flex-col gap-2 px-5 pt-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-btn px-4 py-4 text-lg font-semibold ${
                    pathname === link.href
                      ? "bg-fixxer-surface text-white"
                      : "text-fixxer-text-on-dark/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-btn bg-fixxer-orange px-5 py-4 text-base font-semibold text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Get Started on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
