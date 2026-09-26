import React from "react";
import Image from "next/image";

export default function Founders() {
  return (
    <section
      id="founders"
      aria-labelledby="founders-heading"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAFAF7] border-b border-[#EBECE9]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-[760px] mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
            <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
              Institutional Leadership
            </span>
          </div>
          <h2
            id="founders-heading"
            className="text-[28px] sm:text-[34px] md:text-[38px] font-semibold text-[#172033] font-serif leading-[1.22] tracking-tight mb-4"
          >
            Leadership & Mentorship Desk
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed">
            Anand Education Center was founded with a direct commitment to providing disciplined,
            authentic competitive-examination guidance to aspirants in Bidupur, Vaishali.
          </p>
        </div>

        {/* Primary Founder Portraits: Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Founder: Ajay Kumar */}
          <div className="bg-white border border-[#EBECE9] rounded-[4px] p-6 sm:p-8 flex flex-col">
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] rounded-[4px] overflow-hidden bg-[#EBECE9] mb-6">
              <Image
                src="/assets/founders/ajay-kumar.jpg"
                alt="Ajay Kumar — Founder, Anand Education Center"
                fill
                sizes="(max-width: 768px) 100vw, 540px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                  Founder
                </span>
              </div>
              <h3 className="text-[24px] sm:text-[26px] font-semibold text-[#172033] font-serif mb-3">
                Ajay Kumar
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#475467] font-sans leading-[1.65]">
                Guiding the academic vision and institutional discipline of Anand Education Center.
                Focused on establishing structured examination preparation and rigorous study habits
                for competitive aspirants in Bidupur and surrounding districts.
              </p>
            </div>
          </div>

          {/* Co-Founder: Brajmala Kumari */}
          <div className="bg-white border border-[#EBECE9] rounded-[4px] p-6 sm:p-8 flex flex-col">
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] rounded-[4px] overflow-hidden bg-[#EBECE9] mb-6">
              <Image
                src="/assets/founders/brajmala-kumari.jpg"
                alt="Brajmala Kumari — Co-Founder, Anand Education Center"
                fill
                sizes="(max-width: 768px) 100vw, 540px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                  Co-Founder
                </span>
              </div>
              <h3 className="text-[24px] sm:text-[26px] font-semibold text-[#172033] font-serif mb-3">
                Brajmala Kumari
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#475467] font-sans leading-[1.65]">
                Co-founder dedicated to institutional development and fostering educational
                opportunities for district aspirants. Committed to building an accessible, supportive
                academic environment for students pursuing public service careers.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Supporting Imagery: Founders Seated Together */}
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
                Institutional Commitment
              </span>
              <h4 className="text-[20px] sm:text-[22px] font-semibold text-[#172033] font-serif">
                A Shared Foundation for District Education
              </h4>
              <p className="text-[14px] sm:text-[15px] text-[#475467] font-sans leading-[1.65]">
                Under the combined stewardship of Ajay Kumar and Brajmala Kumari, Anand Education Center
                remains an authentic family-led educational initiative. The center prioritizes
                student welfare, grounded values, and systematic guidance for Bihar&apos;s dedicated civil
                service and competitive-examination candidates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
