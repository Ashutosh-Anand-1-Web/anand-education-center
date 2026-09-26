import React from "react";

interface PillarItem {
  number: string;
  title: string;
  description: string;
}

const PILLARS: PillarItem[] = [
  {
    number: "01",
    title: "Faculty Guidance",
    description:
      "Direct classroom mentorship focused on conceptual foundations, syllabus discipline, and strategic examination orientation.",
  },
  {
    number: "02",
    title: "Structured Preparation",
    description:
      "Systematic phase-wise coverage of syllabus milestones, balancing fundamental subject clarity with progressive problem-solving.",
  },
  {
    number: "03",
    title: "Practice & Testing",
    description:
      "Consistent test assessments, mock question solving, and answer-evaluation routines aligned with current commission standards.",
  },
  {
    number: "04",
    title: "Curated Study Material",
    description:
      "Carefully reviewed reading outlines and revision notes designed to streamline focus on core examination requirements.",
  },
  {
    number: "05",
    title: "Personal Attention",
    description:
      "Individual doubt clearance and continuous academic support ensuring aspirants receive timely guidance throughout their preparation.",
  },
];

export default function AcademicPillars() {
  return (
    <section
      id="methodology"
      aria-labelledby="pillars-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EBECE9]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Sticky Title & Method Overview (4 of 12 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                Methodology
              </span>
            </div>
            <h2
              id="pillars-heading"
              className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-4"
            >
              Academic Framework & Pillars
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed mb-6">
              A disciplined pedagogical model structured around consistent learning habits, regular
              evaluation, and accessible district-level guidance.
            </p>
            <div className="p-4 bg-[#FBF8EE] border border-[#E5C973] rounded-[4px]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#A6841C] block mb-1 font-sans">
                Foundational Principle
              </span>
              <p className="text-[13px] text-[#172033] font-sans leading-normal">
                Academic progress is achieved through steady, verified effort and continuous practice.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Numbered List (8 of 12 cols) */}
          <div className="lg:col-span-8 divide-y divide-[#EBECE9]">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="py-6 sm:py-8 first:pt-0 last:pb-0 group transition-colors duration-150 hover:bg-[#FAFAF7] px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-[4px]"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="text-[14px] sm:text-[15px] font-bold text-[#C9A227] font-sans tracking-widest pt-1 min-w-[28px]">
                    {pillar.number}
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#172033] font-serif tracking-tight group-hover:text-[#0B1F3A] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[#475467] font-sans leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
