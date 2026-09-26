import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const EXAM_TRACKS = [
  { name: "UPSC", label: "Civil Services" },
  { name: "BPSC", label: "State Services" },
  { name: "SSC", label: "CGL / CHSL" },
  { name: "Railway", label: "RRB NTPC" },
  { name: "Banking", label: "IBPS / SBI" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative bg-[#FAFAF7] pt-10 sm:pt-14 md:pt-20 pb-12 sm:pb-16 md:pb-24 border-b border-[#EBECE9] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-[840px]">
          {/* Official Institute Master Logo (Crisp aspect ratio) */}
          <div className="mb-6 sm:mb-8">
            <div className="relative h-16 sm:h-20 md:h-24 w-56 sm:w-72 md:w-80">
              <Image
                src="/assets/logo/anand-education-center-logo.png"
                alt="Anand Education Center — Shaping Future Civil Servants"
                fill
                priority
                sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 320px"
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Academic Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FBF8EE] border border-[#E5C973] rounded-[4px] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] uppercase text-[#A6841C] font-sans">
              Bidupur, Vaishali, Bihar
            </span>
          </div>

          {/* Main Working Heading (Source Serif 4) */}
          <h1
            id="hero-heading"
            className="text-[30px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-semibold text-[#0B1F3A] font-serif leading-[1.18] tracking-tight mb-5 sm:mb-6"
          >
            Disciplined Preparation for Competitive Examinations
          </h1>

          {/* Factual Lead Copy */}
          <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#475467] leading-[1.65] font-sans mb-8 sm:mb-10 max-w-[720px]">
            Guiding aspirants through rigorous, structured preparation for civil services and
            national recruitment commissions. Grounded in academic integrity, syllabus depth, and
            dedicated classroom mentorship in Bidupur.
          </p>

          {/* Exam Category Badges */}
          <div className="mb-8 sm:mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#667085] block mb-3 font-sans">
              Core Examination Tracks:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {EXAM_TRACKS.map((track) => (
                <div
                  key={track.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#D0D5DD] rounded-[4px] shadow-xs"
                >
                  <span className="text-[13px] font-bold text-[#0B1F3A] font-sans">
                    {track.name}
                  </span>
                  <span className="text-[12px] text-[#667085] font-sans hidden xs:inline">
                    · {track.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <a
              href="#admissions"
              className="min-h-[44px] bg-[#0B1F3A] hover:bg-[#163259] text-white text-[14px] font-semibold tracking-wider px-7 py-3.5 rounded-[4px] shadow-xs transition-all duration-150 text-center inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#0B1F3A] focus-visible:ring-offset-2"
            >
              <span>ENQUIRE NOW</span>
            </a>
            <a
              href="#courses"
              className="min-h-[44px] bg-transparent hover:bg-white text-[#0B1F3A] border border-[#D0D5DD] hover:border-[#0B1F3A] text-[14px] font-semibold px-6 py-3.5 rounded-[4px] transition-all duration-150 text-center inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#0B1F3A]"
            >
              <span>EXPLORE COURSES</span>
              <ArrowRight className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
