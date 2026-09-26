import React from "react";
import Image from "next/image";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#071527] text-white border-t-2 border-[#C9A227]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Institutional Identity (5 of 12 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-10 w-36">
              <Image
                src="/assets/logo/anand-education-center-logo.png"
                alt="Anand Education Center Logo"
                fill
                sizes="144px"
                className="object-contain object-left brightness-105"
              />
            </div>
            <p className="text-[14px] text-[#CBD5E1] font-sans leading-relaxed max-w-[380px]">
              An authentic competitive-examination preparation institute in Bidupur, Vaishali,
              Bihar. Mentoring aspirants for UPSC, BPSC, SSC, Railway, and Banking recruitment.
            </p>
            <div className="flex items-center gap-2 text-[12px] text-[#98A2B3] font-sans pt-1">
              <MapPin className="w-4 h-4 text-[#C9A227] shrink-0" aria-hidden="true" />
              <span>Bidupur, Vaishali, Bihar, India</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 of 12 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-white font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-[13px] text-[#CBD5E1] font-sans">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Institute
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-white transition-colors">
                  Founders & Mentors
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">
                  Results Registry
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Examination Tracks (2 of 12 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-white font-sans">
              Exam Tracks
            </h4>
            <ul className="space-y-2 text-[13px] text-[#CBD5E1] font-sans">
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  UPSC Civil Services
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  BPSC State Services
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  SSC CGL / CHSL
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Railway Recruitment
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Banking Examinations
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Help & Student Portal (3 of 12 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-white font-sans">
              Campus Helplines
            </h4>
            <div className="space-y-2 text-[13px] font-sans">
              <a
                href="tel:+917766959980"
                className="min-h-[44px] flex items-center gap-2 text-white hover:text-[#C9A227] transition-colors"
                aria-label="Call primary helpline: 7766959980"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A227]" aria-hidden="true" />
                <span>+91 7766959980</span>
              </a>
              <a
                href="tel:+919905871193"
                className="min-h-[44px] flex items-center gap-2 text-white hover:text-[#C9A227] transition-colors"
                aria-label="Call secondary helpline: 9905871193"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A227]" aria-hidden="true" />
                <span>+91 9905871193</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="#admissions"
                className="min-h-[44px] inline-flex items-center gap-2 px-3.5 py-2 bg-[#163259] hover:bg-[#0B1F3A] border border-white/10 rounded-[4px] text-[12px] font-semibold text-white transition-colors"
              >
                <span>Student Login Portal</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A227]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#98A2B3] font-sans text-center sm:text-left">
          <p>© 2026 Anand Education Center. All rights reserved.</p>
          <p>Bidupur, Vaishali, Bihar, India · Shaping Future Civil Servants</p>
        </div>
      </div>
    </footer>
  );
}
