import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProgramItem {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  href: string;
}

const PROGRAMS: ProgramItem[] = [
  {
    number: "01",
    name: "UPSC",
    subtitle: "Civil Services Examination",
    description:
      "Comprehensive foundational guidance for General Studies, CSAT, and answer-writing discipline aligned with UPSC syllabus standards.",
    href: "/courses/upsc",
  },
  {
    number: "02",
    name: "BPSC",
    subtitle: "Bihar Public Service Commission",
    description:
      "Specialized state services curriculum emphasizing Bihar special studies, General Studies, and structured Mains preparation.",
    href: "/courses/bpsc",
  },
  {
    number: "03",
    name: "SSC",
    subtitle: "Combined Graduate Level & CHSL",
    description:
      "Rigorous preparation covering Quantitative Aptitude, Reasoning, General Awareness, and English comprehension for national commissions.",
    href: "/courses/ssc",
  },
  {
    number: "04",
    name: "RAILWAY",
    subtitle: "RRB NTPC & Technical Cadres",
    description:
      "Targeted concept drills, computer-based test practice, and General Science foundation for Railway recruitment examinations.",
    href: "/courses/railway",
  },
  {
    number: "05",
    name: "BANKING",
    subtitle: "IBPS PO / Clerk & SBI Cadres",
    description:
      "Intensive numerical ability, reasoning speed, data interpretation, and banking awareness modules for public sector bank recruitment.",
    href: "/courses/banking",
  },
];

export default function ExamPrograms() {
  return (
    <section
      id="courses"
      aria-labelledby="programs-heading"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAFAF7] border-b border-[#EBECE9]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-[720px] mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
            <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
              Academic Curriculum
            </span>
          </div>
          <h2
            id="programs-heading"
            className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-4"
          >
            Examination Preparation Programs
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed">
            Structured foundation and test-series preparation tailored to the latest commission
            notification patterns and syllabus benchmarks.
          </p>
        </div>

        {/* 5 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((prog, idx) => (
            <div
              key={prog.number}
              className={`bg-white border border-[#EBECE9] hover:border-[#163259] rounded-[4px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[13px] font-bold text-[#C9A227] font-sans tracking-wider">
                    {prog.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#F0F4F8] text-[#163259] rounded-[2px] font-sans">
                    Track
                  </span>
                </div>
                <h3 className="text-[22px] font-semibold text-[#172033] font-serif mb-1">
                  {prog.name}
                </h3>
                <span className="text-[12px] font-medium text-[#667085] uppercase tracking-wider block mb-4 font-sans">
                  {prog.subtitle}
                </span>
                <p className="text-[14px] text-[#475467] leading-[1.6] font-sans mb-6">
                  {prog.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBECE9] flex items-center justify-between">
                <Link
                  href={prog.href}
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0B1F3A] hover:text-[#163259] transition-colors focus-visible:outline-[#0B1F3A]"
                >
                  <span>View Course Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A227]" aria-hidden="true" />
                </Link>
                <Link
                  href="/#admissions"
                  className="text-[12px] font-medium text-[#667085] hover:text-[#0B1F3A] transition-colors"
                >
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
