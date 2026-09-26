"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Faculty", href: "/#founders" },
  { name: "Results", href: "/#results" },
  { name: "Admissions", href: "/#admissions" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* 1. Top Institutional Utility Strip (Desktop) */}
      <div className="bg-[#071527] text-[#CBD5E1] text-[12px] font-sans border-b border-white/10 hidden md:block">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 h-9 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C9A227]" aria-hidden="true" />
            <span className="tracking-wide">Bidupur, Vaishali, Bihar, India</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#98A2B3]">Helpline:</span>
            <div className="flex items-center gap-4">
              <a
                href="tel:+917766959980"
                className="flex items-center gap-1.5 text-white hover:text-[#C9A227] transition-colors focus-visible:outline-[#C9A227]"
                aria-label="Call primary helpline: 7766959980"
              >
                <Phone className="w-3 h-3 text-[#C9A227]" aria-hidden="true" />
                <span className="font-medium">+91 7766959980</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href="tel:+919905871193"
                className="flex items-center gap-1.5 text-white hover:text-[#C9A227] transition-colors focus-visible:outline-[#C9A227]"
                aria-label="Call secondary helpline: 9905871193"
              >
                <Phone className="w-3 h-3 text-[#C9A227]" aria-hidden="true" />
                <span className="font-medium">+91 9905871193</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Institutional Navigation Bar */}
      <div
        className={`w-full border-b border-[#EBECE9] transition-all duration-200 ${
          scrolled ? "py-2.5 shadow-xs" : "py-3 md:py-4"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Institute Master Logo Lockup */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-[#0B1F3A]"
            aria-label="Anand Education Center — Home"
          >
            <div className="relative h-10 sm:h-11 w-32 sm:w-36">
              <Image
                src="/assets/logo/anand-education-center-logo.png"
                alt="Anand Education Center Logo"
                fill
                priority
                sizes="(max-width: 640px) 128px, 144px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#172033]"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#163259] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C9A227] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-[#0B1F3A]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/#admissions"
              className="text-[13px] font-medium text-[#475467] hover:text-[#0B1F3A] transition-colors focus-visible:outline-[#0B1F3A] px-2 py-1"
            >
              Student Login
            </Link>
            <Link
              href="/#admissions"
              className="bg-[#0B1F3A] hover:bg-[#163259] text-white text-[13px] font-semibold tracking-wider px-5 py-2.5 rounded-[4px] transition-all duration-150 shadow-xs focus-visible:ring-2 focus-visible:ring-[#0B1F3A] focus-visible:ring-offset-2"
            >
              ENQUIRE NOW
            </Link>
          </div>

          {/* Mobile Right Controls: Phone + Menu */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+917766959980"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 text-[#0B1F3A] bg-[#F0F4F8] hover:bg-[#EBECE9] rounded-[4px] transition-colors focus-visible:outline-[#0B1F3A]"
              aria-label="Call Admissions Helpline: 7766959980"
            >
              <Phone className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 text-[#172033] hover:text-[#0B1F3A] bg-[#FAFAF7] border border-[#EBECE9] rounded-[4px] transition-colors focus-visible:outline-[#0B1F3A]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#0B1F3A]" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-[#0B1F3A]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] sm:top-[68px] z-40 bg-black/40 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-[340px] ml-auto h-full bg-white shadow-xl flex flex-col justify-between p-6 border-l border-[#EBECE9] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="pb-4 mb-4 border-b border-[#EBECE9]">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A6841C] block">
                  Anand Education Center
                </span>
                <span className="text-[13px] text-[#667085]">
                  Bidupur, Vaishali, Bihar
                </span>
              </div>

              <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[44px] flex items-center justify-between text-[16px] font-medium text-[#172033] hover:text-[#0B1F3A] px-3 py-2.5 rounded-[4px] hover:bg-[#FAFAF7] transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#EBECE9] space-y-3">
              <Link
                href="/#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[44px] bg-[#0B1F3A] text-white flex items-center justify-center py-3 rounded-[4px] text-[14px] font-semibold tracking-wider block"
              >
                ENQUIRE NOW
              </Link>

              <div className="bg-[#FAFAF7] border border-[#EBECE9] p-3.5 rounded-[4px] space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#667085] block">
                  Direct Campus Helplines
                </span>
                <a
                  href="tel:+917766959980"
                  className="min-h-[44px] flex items-center gap-2 text-[14px] font-medium text-[#0B1F3A]"
                >
                  <Phone className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
                  <span>+91 7766959980</span>
                </a>
                <a
                  href="tel:+919905871193"
                  className="min-h-[44px] flex items-center gap-2 text-[14px] font-medium text-[#0B1F3A]"
                >
                  <Phone className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
                  <span>+91 9905871193</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
