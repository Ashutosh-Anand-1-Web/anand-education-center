import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Banking Examination Preparation | Anand Education Center",
  description:
    "Explore Banking examination preparation at Anand Education Center in Bidupur, Vaishali, Bihar. Structured classroom guidance for public sector bank recruitment aspirants.",
};

const APPROACH_PILLARS = [
  {
    title: "Structured Preparation",
    description:
      "A systematic approach to studying the syllabus, focusing on building conceptual clarity and progressive understanding across core subjects.",
  },
  {
    title: "Examination-Focused Learning",
    description:
      "Instruction designed around examination patterns, helping candidates orient their studies directly toward the requirements of the commission.",
  },
  {
    title: "Consistent Practice",
    description:
      "Regular revision exercises, question practice, and analytical problem-solving routines to reinforce subject retention and clarity.",
  },
  {
    title: "Disciplined Study",
    description:
      "A focused classroom learning environment in Bidupur that encourages routine, academic discipline, and direct access to mentorship.",
  },
];

const RELATED_PROGRAMS = [
  {
    name: "UPSC",
    title: "Union Public Service Commission",
    href: "/courses/upsc",
    description: "National civil services examination preparation focusing on foundational General Studies and CSAT.",
  },
  {
    name: "BPSC",
    title: "Bihar Public Service Commission",
    href: "/courses/bpsc",
    description: "State civil services examination preparation focusing on Bihar special studies and General Studies.",
  },
  {
    name: "SSC",
    title: "Staff Selection Commission",
    href: "/courses/ssc",
    description: "Preparation covering Quantitative Aptitude, Reasoning, English, and General Awareness.",
  },
  {
    name: "Railway",
    title: "Railway Recruitment Boards",
    href: "/courses/railway",
    description: "Preparation focusing on mathematics, general science, and computer-based test orientation.",
  },
];

export default function BankingCoursePage() {
  return (
    <article className="w-full bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]">
      {/* 1. Hero Section */}
      <section
        aria-labelledby="banking-hero-heading"
        className="bg-[#FAFAF7] border-b border-[#EBECE9] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-[800px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FBF8EE] border border-[#E5C973] rounded-[4px] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] uppercase text-[#A6841C] font-sans">
                Banking Preparation
              </span>
            </div>

            {/* Main Heading */}
            <h1
              id="banking-hero-heading"
              className="text-[30px] sm:text-[38px] md:text-[44px] font-semibold text-[#0B1F3A] font-serif leading-[1.2] tracking-tight mb-5"
            >
              Focused Preparation for Banking Recruitment Examinations
            </h1>

            {/* Factual Lead */}
            <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#475467] leading-[1.65] font-sans mb-8">
              Anand Education Center provides focused preparation for candidates preparing for banking
              recruitment examinations.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <Link
                href="/#admissions"
                className="min-h-[44px] bg-[#0B1F3A] hover:bg-[#163259] text-white text-[14px] font-semibold tracking-wider px-7 py-3 rounded-[4px] transition-colors text-center inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#0B1F3A]"
              >
                ENQUIRE NOW
              </Link>
              <Link
                href="/courses"
                className="min-h-[44px] bg-white hover:bg-[#F3F4F1] text-[#0B1F3A] border border-[#D0D5DD] hover:border-[#0B1F3A] text-[14px] font-semibold px-6 py-3 rounded-[4px] transition-colors text-center inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#0B1F3A]"
              >
                <ArrowLeft className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
                <span>BACK TO COURSES</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About The Examination */}
      <section
        aria-labelledby="banking-about-heading"
        className="py-14 sm:py-18 lg:py-20 bg-white border-b border-[#EBECE9]"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                  Examination Scope
                </span>
              </div>
              <h2
                id="banking-about-heading"
                className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-4"
              >
                Banking Examination Preparation
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed">
                Dedicated classroom guidance established to help candidates in Bidupur and Vaishali
                prepare methodically for banking sector recruitment examinations.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 text-[15px] sm:text-[16px] text-[#475467] font-sans leading-[1.65]">
              <p>
                This program is dedicated to students preparing for the competitive examinations
                conducted for banking recruitment. The study curriculum focuses on establishing solid
                conceptual clarity in foundational subjects and developing steady problem-solving
                habits.
              </p>
              <p>
                At Anand Education Center, preparation is structured around syllabus orientation,
                regular classroom discussions, and consistent practice routines without commercial
                exaggerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AEC Preparation Approach */}
      <section
        aria-labelledby="banking-approach-heading"
        className="py-14 sm:py-18 lg:py-20 bg-[#FAFAF7] border-b border-[#EBECE9]"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-[720px] mb-12 sm:mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                Methodology
              </span>
            </div>
            <h2
              id="banking-approach-heading"
              className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-4"
            >
              AEC Preparation Approach
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed">
              Our preparation model relies on steady, disciplined classroom instruction designed
              around core examination competencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {APPROACH_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-[#EBECE9] rounded-[4px] p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <CheckCircle className="w-4 h-4 text-[#C9A227] shrink-0" aria-hidden="true" />
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#172033] font-serif">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-[#475467] font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who This Page Is For */}
      <section
        aria-labelledby="banking-audience-heading"
        className="py-14 sm:py-18 lg:py-20 bg-white border-b border-[#EBECE9]"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                Aspirant Guidance
              </span>
            </div>
            <h2
              id="banking-audience-heading"
              className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-4"
            >
              Who This Page Is For
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-[1.65] mb-6">
              This page is intended for candidates considering Banking recruitment examination
              preparation at Anand Education Center. It provides an overview of the instructional
              orientation available at our Bidupur campus for aspirants aiming to prepare through
              systematic study.
            </p>
            <div className="p-4 bg-[#FAFAF7] border-l-2 border-[#0B1F3A] rounded-r-[4px]">
              <p className="text-[13px] text-[#475467] font-sans leading-relaxed">
                Candidates interested in discussing upcoming classroom schedules or course
                orientation are encouraged to connect with our campus admissions desk directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Enquiry Section */}
      <section
        aria-labelledby="banking-enquiry-heading"
        className="py-16 sm:py-20 bg-[#0B1F3A] text-white relative overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-[760px] mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#163259] border border-[#C9A227]/40 rounded-[4px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#F3E7C4] font-sans">
                Admissions Desk
              </span>
            </div>

            <h2
              id="banking-enquiry-heading"
              className="text-[30px] sm:text-[36px] md:text-[40px] font-semibold text-white font-serif leading-[1.2] tracking-tight"
            >
              Discuss Your Banking Preparation
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] font-sans leading-relaxed max-w-[620px] mx-auto">
              Connect with Anand Education Center to discuss your preparation requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/#admissions"
                className="w-full sm:w-auto min-h-[44px] bg-[#C9A227] hover:bg-[#A6841C] text-[#071527] text-[14px] font-bold tracking-wider px-7 py-3.5 rounded-[4px] transition-all duration-150 text-center inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
              >
                ENQUIRE NOW
              </Link>
              <Link
                href="/#contact"
                className="w-full sm:w-auto min-h-[44px] bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white text-[14px] font-semibold px-6 py-3.5 rounded-[4px] transition-all duration-150 text-center inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#C9A227]"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
              </Link>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-[13px] text-[#98A2B3] font-sans">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C9A227]" aria-hidden="true" />
                <span>+91 7766959980</span>
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C9A227]" aria-hidden="true" />
                <span>+91 9905871193</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Related Programs */}
      <section
        aria-labelledby="banking-related-heading"
        className="py-14 sm:py-18 lg:py-20 bg-[#FAFAF7] border-b border-[#EBECE9]"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-[720px] mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                Other Programs
              </span>
            </div>
            <h2
              id="banking-related-heading"
              className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-2"
            >
              Related Examination Programs
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#475467] font-sans">
              Explore other competitive examination preparation tracks offered at Anand Education Center.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RELATED_PROGRAMS.map((prog) => (
              <div
                key={prog.name}
                className="bg-white border border-[#EBECE9] hover:border-[#163259] rounded-[4px] p-5 flex flex-col justify-between transition-colors duration-150"
              >
                <div>
                  <h3 className="text-[20px] font-semibold text-[#0B1F3A] font-serif mb-1">
                    {prog.name}
                  </h3>
                  <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block mb-2 font-sans">
                    {prog.title}
                  </span>
                  <p className="text-[13px] text-[#475467] font-sans leading-relaxed mb-4">
                    {prog.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#EBECE9]">
                  <Link
                    href={prog.href}
                    className="min-h-[44px] inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0B1F3A] hover:text-[#163259] transition-colors focus-visible:outline-[#0B1F3A]"
                  >
                    <span>View Track</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A227]" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
