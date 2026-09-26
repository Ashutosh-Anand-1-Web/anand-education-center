import React from "react";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EBECE9]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Editorial Label & Dominant Title (5 of 12 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                About Anand Education Center
              </span>
            </div>
            <h2
              id="about-heading"
              className="text-[28px] sm:text-[34px] md:text-[38px] font-semibold text-[#172033] font-serif leading-[1.22] tracking-tight mb-6"
            >
              Academic Discipline Rooted in Bidupur, Vaishali
            </h2>
            <div className="p-4 bg-[#FAFAF7] border-l-2 border-[#0B1F3A] rounded-r-[4px] mb-6">
              <p className="text-[13px] text-[#475467] font-sans leading-relaxed">
                Dedicated classroom guidance established to bring focused competitive-examination
                standards to students within Vaishali district.
              </p>
            </div>
            <a
              href="#founders"
              className="min-h-[44px] inline-flex items-center gap-2 text-[14px] font-semibold text-[#0B1F3A] hover:text-[#163259] transition-colors focus-visible:outline-[#0B1F3A]"
            >
              <span>READ ABOUT THE INSTITUTE</span>
              <ArrowRight className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
            </a>
          </div>

          {/* Right Column: Factual Editorial Narrative (7 of 12 cols) */}
          <div className="lg:col-span-7 space-y-5 text-[#475467] font-sans text-[15px] sm:text-[16px] leading-[1.65]">
            <p>
              Anand Education Center operates as an authentic competitive-examination preparation
              institute based in Bidupur, Vaishali, Bihar. Founded under the direct leadership of{" "}
              <strong className="text-[#172033] font-semibold">Ajay Kumar</strong> and{" "}
              <strong className="text-[#172033] font-semibold">Brajmala Kumari</strong>, the
              institution focuses on establishing structured learning habits, syllabus mastery, and
              uncompromising academic discipline.
            </p>
            <p>
              Preparation for premier government recruitment commissions requires consistency,
              conceptual depth, and continuous assessment. Rather than commercial coaching gimmicks,
              our methodology emphasizes step-by-step syllabus coverage, regular practice tests, and
              accessible personal guidance tailored to regional aspirants.
            </p>
            <div className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-[#EBECE9] p-4 rounded-[4px] bg-[#FAFAF7]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A6841C] block mb-1">
                    Institutional Focus
                  </span>
                  <p className="text-[13px] text-[#172033]">
                    Comprehensive mentorship for civil services and premier public examinations.
                  </p>
                </div>
                <div className="border border-[#EBECE9] p-4 rounded-[4px] bg-[#FAFAF7]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A6841C] block mb-1">
                    Classroom Grounding
                  </span>
                  <p className="text-[13px] text-[#172033]">
                    Direct teacher-student engagement with individualized doubt resolution in Bidupur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
