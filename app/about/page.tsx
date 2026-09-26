import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Anand Education Center — Bidupur, Vaishali",
  description:
    "Learn about Anand Education Center, founded by Ajay Kumar and Brajmala Kumari in Bidupur, Vaishali, Bihar. Dedicated preparation for UPSC, BPSC, SSC, Railway, and Banking examinations.",
};

const EXAM_TRACKS = [
  {
    number: "01",
    name: "UPSC",
    title: "Civil Services Examination",
    description:
      "Foundational syllabus coverage for General Studies, CSAT, and disciplined answer-writing preparation.",
  },
  {
    number: "02",
    name: "BPSC",
    title: "Bihar Public Service Commission",
    description:
      "State-specific syllabus curriculum focusing on Bihar special studies, General Studies, and Mains guidance.",
  },
  {
    number: "03",
    name: "SSC",
    title: "CGL / CHSL National Commissions",
    description:
      "Structured concept drills and practice covering Quantitative Aptitude, Reasoning, English, and General Awareness.",
  },
  {
    number: "04",
    name: "RAILWAY",
    title: "RRB NTPC & Technical Cadres",
    description:
      "Computer-based test preparation, General Science foundation, and speed-oriented question solving.",
  },
  {
    number: "05",
    name: "BANKING",
    title: "IBPS PO / Clerk & SBI Cadres",
    description:
      "Intensive focus on numerical ability, reasoning logic, data interpretation, and banking awareness.",
  },
];

export default function AboutPage() {
  return (
    <article className="w-full bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]">
      {/* 1. Page Hero */}
      <section
        aria-labelledby="about-hero-heading"
        className="bg-[#FAFAF7] border-b border-[#EBECE9] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-[800px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FBF8EE] border border-[#E5C973] rounded-[4px] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] uppercase text-[#A6841C] font-sans">
                About Anand Education Center
              </span>
            </div>

            {/* Main Heading */}
            <h1
              id="about-hero-heading"
              className="text-[30px] sm:text-[38px] md:text-[44px] font-semibold text-[#0B1F3A] font-serif leading-[1.2] tracking-tight mb-5"
            >
              Focused Preparation for Competitive Examinations
            </h1>

            {/* Factual Introduction */}
            <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#475467] leading-[1.65] font-sans">
              Anand Education Center is an educational preparation institute in Bidupur, Vaishali,
              Bihar. Established to serve regional aspirants, the institute provides structured
              classroom guidance for India&apos;s civil services and national competitive examinations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. About AEC */}
      <section
        aria-labelledby="about-institution-heading"
        className="py-14 sm:py-18 lg:py-20 bg-white border-b border-[#EBECE9]"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                  The Institute
                </span>
              </div>
              <h2
                id="about-institution-heading"
                className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-4"
              >
                Rooted in Bidupur, Vaishali
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed">
                Anand Education Center operates directly from Bidupur, offering accessible and
                disciplined coaching without commercial distractions.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 text-[15px] sm:text-[16px] text-[#475467] font-sans leading-[1.65]">
              <p>
                Aspirants preparing for competitive examinations require steady routine, consistent
                evaluation, and clear syllabus coverage. Anand Education Center was established to
                provide focused classroom instruction to candidates in Vaishali district.
              </p>
              <p>
                The academic programs focus systematically on the syllabi of five major examination
                streams:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <li className="flex items-center gap-2.5 p-3 bg-[#FAFAF7] border border-[#EBECE9] rounded-[4px] text-[14px] font-semibold text-[#0B1F3A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
                  <span>UPSC (Union Public Service Commission)</span>
                </li>
                <li className="flex items-center gap-2.5 p-3 bg-[#FAFAF7] border border-[#EBECE9] rounded-[4px] text-[14px] font-semibold text-[#0B1F3A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
                  <span>BPSC (Bihar Public Service Commission)</span>
                </li>
                <li className="flex items-center gap-2.5 p-3 bg-[#FAFAF7] border border-[#EBECE9] rounded-[4px] text-[14px] font-semibold text-[#0B1F3A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
                  <span>SSC (Staff Selection Commission)</span>
                </li>
                <li className="flex items-center gap-2.5 p-3 bg-[#FAFAF7] border border-[#EBECE9] rounded-[4px] text-[14px] font-semibold text-[#0B1F3A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
                  <span>Railway (RRB Recruitment)</span>
                </li>
                <li className="flex items-center gap-2.5 p-3 bg-[#FAFAF7] border border-[#EBECE9] rounded-[4px] text-[14px] font-semibold text-[#0B1F3A] sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
                  <span>Banking (IBPS & SBI Cadres)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founders Section */}
      <section
        aria-labelledby="about-founders-heading"
        className="py-14 sm:py-18 lg:py-20 bg-[#FAFAF7] border-b border-[#EBECE9]"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-[760px] mb-12 sm:mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                Leadership
              </span>
            </div>
            <h2
              id="about-founders-heading"
              className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-4"
            >
              Founders of Anand Education Center
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed">
              Anand Education Center is led by Ajay Kumar and Brajmala Kumari, providing direct
              administrative and academic stewardship at the Bidupur campus.
            </p>
          </div>

          {/* Two Prominent Founder Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Ajay Kumar — Founder */}
            <div className="bg-white border border-[#EBECE9] rounded-[4px] p-6 sm:p-8 flex flex-col">
              <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden bg-[#EBECE9] mb-6">
                <Image
                  src="/assets/founders/ajay-kumar.jpg"
                  alt="Ajay Kumar — Founder, Anand Education Center"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans block mb-1">
                  Founder
                </span>
                <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#172033] font-serif mb-2">
                  Ajay Kumar
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#475467] font-sans leading-relaxed">
                  Founder of Anand Education Center. Responsible for the academic curriculum,
                  instructional standards, and examination orientation for students preparing at
                  Bidupur.
                </p>
              </div>
            </div>

            {/* Brajmala Kumari — Co-Founder */}
            <div className="bg-white border border-[#EBECE9] rounded-[4px] p-6 sm:p-8 flex flex-col">
              <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden bg-[#EBECE9] mb-6">
                <Image
                  src="/assets/founders/brajmala-kumari.jpg"
                  alt="Brajmala Kumari — Co-Founder, Anand Education Center"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans block mb-1">
                  Co-Founder
                </span>
                <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#172033] font-serif mb-2">
                  Brajmala Kumari
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#475467] font-sans leading-relaxed">
                  Co-Founder of Anand Education Center. Dedicated to institutional management,
                  student support, and expanding educational opportunities for regional candidates.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Founders Together (Secondary Editorial Image) */}
          <div className="bg-white border border-[#EBECE9] rounded-[4px] p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[4px] overflow-hidden bg-[#EBECE9]">
                <Image
                  src="/assets/founders/founders-together.jpg"
                  alt="Ajay Kumar and Brajmala Kumari seated together — Founders of Anand Education Center"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover object-center"
                />
              </div>
              <div className="lg:col-span-7 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans block">
                  Institutional Foundation
                </span>
                <h4 className="text-[20px] sm:text-[22px] font-semibold text-[#172033] font-serif">
                  Ajay Kumar and Brajmala Kumari
                </h4>
                <p className="text-[14px] sm:text-[15px] text-[#475467] font-sans leading-[1.65]">
                  Working together, Ajay Kumar and Brajmala Kumari established Anand Education Center
                  in Bidupur, Vaishali to offer structured, transparent guidance for competitive
                  aspirants. The institute upholds a supportive learning environment grounded in
                  discipline and steady effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Examination Focus */}
      <section
        aria-labelledby="about-exams-heading"
        className="py-14 sm:py-18 lg:py-20 bg-white border-b border-[#EBECE9]"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-[720px] mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                Curriculum Scope
              </span>
            </div>
            <h2
              id="about-exams-heading"
              className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-4"
            >
              Examination Focus
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed">
              Our academic tracks are designed around published commission syllabi and examination
              patterns:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXAM_TRACKS.map((track, idx) => (
              <div
                key={track.number}
                className={`bg-[#FAFAF7] border border-[#EBECE9] rounded-[4px] p-6 flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[13px] font-bold text-[#C9A227] font-sans tracking-wider">
                      {track.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#F0F4F8] text-[#163259] rounded-[2px] font-sans">
                      Track
                    </span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#172033] font-serif mb-1">
                    {track.name}
                  </h3>
                  <span className="text-[12px] font-medium text-[#667085] uppercase tracking-wider block mb-3 font-sans">
                    {track.title}
                  </span>
                  <p className="text-[14px] text-[#475467] leading-[1.6] font-sans">
                    {track.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Location / Contact */}
      <section
        aria-labelledby="about-contact-heading"
        className="py-14 sm:py-18 lg:py-20 bg-[#FAFAF7] border-b border-[#EBECE9]"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-[720px] mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                Campus Location & Inquiries
              </span>
            </div>
            <h2
              id="about-contact-heading"
              className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-4"
            >
              Location & Contact Details
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed">
              Prospective students and parents may reach out through the official phone numbers or
              visit the center directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campus Address */}
            <div className="p-6 bg-white border border-[#EBECE9] rounded-[4px] flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#0B1F3A] shrink-0 mt-1" aria-hidden="true" />
              <div>
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#A6841C] block mb-1 font-sans">
                  Campus Address
                </span>
                <p className="text-[16px] font-semibold text-[#172033] font-sans">
                  Anand Education Center
                </p>
                <p className="text-[14px] text-[#475467] font-sans mt-0.5">
                  Bidupur, Vaishali, Bihar, India
                </p>
              </div>
            </div>

            {/* Official Telephones */}
            <div className="p-6 bg-white border border-[#EBECE9] rounded-[4px] flex items-start gap-4">
              <Phone className="w-5 h-5 text-[#0B1F3A] shrink-0 mt-1" aria-hidden="true" />
              <div className="space-y-1">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#A6841C] block mb-1 font-sans">
                  Official Helplines
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pt-1">
                  <a
                    href="tel:+917766959980"
                    className="min-h-[44px] flex items-center text-[15px] font-semibold text-[#0B1F3A] hover:text-[#163259] transition-colors focus-visible:outline-[#0B1F3A]"
                    aria-label="Call helpline 7766959980"
                  >
                    +91 7766959980
                  </a>
                  <a
                    href="tel:+919905871193"
                    className="min-h-[44px] flex items-center text-[15px] font-semibold text-[#0B1F3A] hover:text-[#163259] transition-colors focus-visible:outline-[#0B1F3A]"
                    aria-label="Call helpline 9905871193"
                  >
                    +91 9905871193
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section
        aria-labelledby="about-cta-heading"
        className="py-16 sm:py-20 bg-[#0B1F3A] text-white relative overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-[760px] mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#163259] border border-[#C9A227]/40 rounded-[4px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#F3E7C4] font-sans">
                Admissions Guidance
              </span>
            </div>

            <h2
              id="about-cta-heading"
              className="text-[30px] sm:text-[36px] md:text-[40px] font-semibold text-white font-serif leading-[1.2] tracking-tight"
            >
              Begin Your Preparation
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] font-sans leading-relaxed max-w-[620px] mx-auto">
              Inquire about upcoming examination foundation programs, batch schedules, and classroom
              mentorship at our Bidupur campus.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/#admissions"
                className="w-full sm:w-auto min-h-[44px] bg-[#C9A227] hover:bg-[#A6841C] text-[#071527] text-[14px] font-bold tracking-wider px-7 py-3.5 rounded-[4px] transition-all duration-150 text-center inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
              >
                ENQUIRE NOW
              </Link>
              <Link
                href="/courses"
                className="w-full sm:w-auto min-h-[44px] bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white text-[14px] font-semibold px-6 py-3.5 rounded-[4px] transition-all duration-150 text-center inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#C9A227]"
              >
                <span>Explore Courses</span>
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
    </article>
  );
}
