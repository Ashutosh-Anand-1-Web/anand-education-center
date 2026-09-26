import React from "react";
import { ShieldCheck, FileCheck } from "lucide-react";

export default function ResultsPreview() {
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EBECE9]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-[720px] mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
            <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
              Academic Integrity
            </span>
          </div>
          <h2
            id="results-heading"
            className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#172033] font-serif leading-[1.25] tracking-tight mb-4"
          >
            Verified Results Registry
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed">
            Anand Education Center adheres to strict ethical verification. We publish only verified,
            document-checked student examination records.
          </p>
        </div>

        {/* Elegant Empty State / Registry Notice Box */}
        <div className="bg-[#FAFAF7] border border-[#D0D5DD] rounded-[4px] p-8 sm:p-12 text-center max-w-[840px] mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#F0F4F8] border border-[#CBD5E1] flex items-center justify-center mx-auto mb-5">
            <ShieldCheck className="w-6 h-6 text-[#163259]" aria-hidden="true" />
          </div>

          <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#172033] font-serif mb-3">
            Official Verification in Progress
          </h3>

          <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed max-w-[620px] mx-auto mb-6">
            Official student achievements will be published here as they are verified.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#EBECE9] rounded-[4px] text-[13px] text-[#667085] font-sans">
            <FileCheck className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
            <span>Records verified with roll number and commission notification standards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
