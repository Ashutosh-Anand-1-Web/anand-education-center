import React from "react";

export default function IdentityStrip() {
  return (
    <section
      aria-label="Institutional Identity and Focus"
      className="bg-[#F0F4F8] border-b border-[#EBECE9] py-3.5"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-[12px] sm:text-[13px] font-sans">
            <span className="font-bold text-[#0B1F3A] uppercase tracking-wider">
              Anand Education Center
            </span>
            <span className="text-[#C9A227] hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="text-[#475467] font-medium">
              Bidupur, Vaishali, Bihar, India
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] font-semibold text-[#163259] tracking-wider uppercase font-sans">
            <span>UPSC</span>
            <span className="text-[#98A2B3]">·</span>
            <span>BPSC</span>
            <span className="text-[#98A2B3]">·</span>
            <span>SSC</span>
            <span className="text-[#98A2B3]">·</span>
            <span>RAILWAY</span>
            <span className="text-[#98A2B3]">·</span>
            <span>BANKING</span>
          </div>
        </div>
      </div>
    </section>
  );
}
