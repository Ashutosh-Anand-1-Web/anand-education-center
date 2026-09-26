import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, BookOpen, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Programs | Anand Education Center — Bidupur, Vaishali",
  description:
    "Explore competitive examination preparation programs at Anand Education Center in Bidupur, Vaishali, Bihar. Structured guidance for UPSC, BPSC, SSC, Railway, and Banking examinations.",
};

interface CourseProgram {
  id: string;
  number: string;
  name: string;
  fullName: string;
  description: string;
  focusArea: string;
}

const COURSES: CourseProgram[] = [
  {
    id: "upsc",
    number: "01",
    name: "UPSC",
    fullName: "Union Public Service Commission",
    description:
      "This track is designed for candidates preparing for the Union Public Service Commission examination. Preparation focuses on syllabus orientation, General Studies foundations, and systematic comprehension.",
    focusArea: "Civil Services Curriculum",
  },
  {
    id: "bpsc",
    number: "02",
    name: "BPSC",
    fullName: "Bihar Public Service Commission",
    description:
      "This track is designed for candidates preparing for the Bihar Public Service Commission examination. Preparation emphasizes state-specific topics, General Studies fundamentals, and structured examination writing.",
    focusArea: "State Services Curriculum",
  },
  {
    id: "ssc",
    number: "03",
    name: "SSC",
    fullName: "Staff Selection Commission",
    description:
      "This track is designed for candidates preparing for Staff Selection Commission examinations. Preparation covers core quantitative aptitude, general intelligence and reasoning, English comprehension, and general awareness.",
    focusArea: "National Commission Recruitment",
  },
  {
    id: "railway",
    number: "04",
    name: "RAILWAY",
    fullName: "Railway Recruitment Boards",
    description:
      "This track is designed for candidates preparing for railway recruitment examinations. Preparation focuses on mathematics, general awareness, general intelligence, and computer-based test orientation.",
    focusArea: "Railway Recruitment Cadres",
  },
  {
    id: "banking",
    number: "05",
    name: "BANKING",
    fullName: "Banking Recruitment Examinations",
    description:
      "This track is designed for candidates preparing for banking recruitment examinations. Preparation centers on quantitative aptitude, logical reasoning, data analysis, and banking awareness fundamentals.",
    focusArea: "Public Sector Banking Cadres",
  },
];

const APPROACH_PILLARS = [
  {
    title: "Structured Preparation",
    description:
      "Organized coverage of prescribed examination syllabi, establishing steady subject-wise progress from foundational principles to advanced concepts.",
  },
  {
    title: "Examination-Focused Learning",
    description:
      "Curriculum alignment with commission patterns and question structures, ensuring study efforts remain directly applicable to competitive assessments.",
  },
  {
    title: "Consistent Practice",
    description:
      "Regular review sessions and problem-solving exercises to develop accuracy, analytical speed, and retention across all subject areas.",
  },
  {
    title: "Disciplined Study",
    description:
      "An orderly classroom environment in Bidupur emphasizing routine, focused attention, and direct access to mentorship for academic queries.",
  },
];

export default function CoursesPage() {
  return (
    <article className="w-full bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]">
      {/* 1. Page Hero */}
      <section
        aria-labelledby="courses-hero-heading"
        className="bg-[#FAFAF7] border-b border-[#EBECE9] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-[800px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FBF8EE] border border-[#E5C973] rounded-[4px] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] uppercase text-[#A6841C] font-sans">
                Academic Programs
              </span>
            </div>

            {/* Main Heading */}
            <h1
              id="courses-hero-heading"
              className="text-[30px] sm:text-[38px] md:text-[44px] font-semibold text-[#0B1F3A] font-serif leading-[1.2] tracking-tight mb-5"
            >
              Preparation for India&apos;s Competitive Examinations
            </h1>

            {/* Factual Introduction */}
            <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#475467] leading-[1.65] font-sans">
              Anand Education Center focuses on structured preparation for major competitive
              examinations, including UPSC, BPSC, SSC, Railway, and Banking examinations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Examination Programs */}
      <section
        aria-labelledby="courses-list-heading"
        className="py-14 sm:py-18 lg:py-20 bg-white border-b border-[#EBECE9]"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-[720px] mb-12 sm:mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                Available Programs
              </span>
            </div>
            <h2
              id="courses-list-heading"
              className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-4"
            >
              Examination Tracks
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed">
              Each academic program at Anand Education Center is centered on the established syllabus
              guidelines published by the respective examination authorities.
            </p>
          </div>

          <div className="space-y-6">
            {COURSES.map((course) => (
              <div
                key={course.id}
                id={course.id}
                className="bg-[#FAFAF7] border border-[#EBECE9] hover:border-[#163259] rounded-[4px] p-6 sm:p-8 transition-colors duration-150"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Left Column: Number & Track Identification (4 of 12 cols) */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[14px] font-bold text-[#C9A227] font-sans tracking-widest">
                        {course.number}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#F0F4F8] text-[#163259] rounded-[2px] font-sans">
                        Track
                      </span>
                    </div>
                    <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#0B1F3A] font-serif mb-1">
                      {course.name}
                    </h3>
                    <p className="text-[13px] font-medium text-[#667085] uppercase tracking-wider font-sans">
                      {course.fullName}
                    </p>
                  </div>

                  {/* Middle Column: Factual Description (5 of 12 cols) */}
                  <div className="lg:col-span-5 space-y-3">
                    <p className="text-[14px] sm:text-[15px] text-[#475467] font-sans leading-[1.65]">
                      {course.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#172033] font-sans">
                      <BookOpen className="w-3.5 h-3.5 text-[#C9A227]" aria-hidden="true" />
                      <span>{course.focusArea}</span>
                    </div>
                  </div>

                  {/* Right Column: Direct Inquire Action (3 of 12 cols) */}
                  <div className="lg:col-span-3 lg:text-right pt-2 lg:pt-0">
                    <Link
                      href="/#admissions"
                      className="min-h-[44px] inline-flex items-center gap-2 text-[13px] font-semibold text-[#0B1F3A] hover:text-[#163259] bg-white border border-[#D0D5DD] hover:border-[#0B1F3A] px-4 py-2.5 rounded-[4px] transition-colors focus-visible:outline-[#0B1F3A]"
                    >
                      <span>Enquire for Program</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C9A227]" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Academic Approach */}
      <section
        aria-labelledby="academic-approach-heading"
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
              id="academic-approach-heading"
              className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-4"
            >
              Academic Approach
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed">
              Preparation at Anand Education Center emphasizes systematic study habits, objective
              understanding of examination syllabi, and continuous practice.
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

      {/* 4. Enquiry CTA */}
      <section
        aria-labelledby="courses-cta-heading"
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
              id="courses-cta-heading"
              className="text-[30px] sm:text-[36px] md:text-[40px] font-semibold text-white font-serif leading-[1.2] tracking-tight"
            >
              Choose Your Examination Path
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
    </article>
  );
}
