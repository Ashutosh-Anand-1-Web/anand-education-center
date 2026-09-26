import React from "react";
import { Phone, MapPin, Clock, Building2 } from "lucide-react";

export default function ContactPreview() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EBECE9]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Campus Directory (6 of 12 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A6841C] font-sans">
                Campus Location & Directory
              </span>
            </div>

            <h2
              id="contact-heading"
              className="text-[28px] sm:text-[34px] md:text-[38px] font-semibold text-[#172033] font-serif leading-[1.22] tracking-tight"
            >
              Contact Anand Education Center
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#475467] font-sans leading-relaxed">
              We welcome prospective candidates and parents to contact our admissions desk or visit
              the campus in Bidupur for detailed counseling on civil services and government
              recruitment examinations.
            </p>

            <div className="pt-2 space-y-4">
              {/* Address Item */}
              <div className="flex items-start gap-3.5 p-4 bg-[#FAFAF7] border border-[#EBECE9] rounded-[4px]">
                <MapPin className="w-5 h-5 text-[#0B1F3A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#A6841C] block mb-1 font-sans">
                    Physical Campus
                  </span>
                  <p className="text-[15px] font-semibold text-[#172033] font-sans">
                    Anand Education Center
                  </p>
                  <p className="text-[14px] text-[#475467] font-sans">
                    Bidupur, Vaishali, Bihar, India
                  </p>
                </div>
              </div>

              {/* Telephone Item */}
              <div className="flex items-start gap-3.5 p-4 bg-[#FAFAF7] border border-[#EBECE9] rounded-[4px]">
                <Phone className="w-5 h-5 text-[#0B1F3A] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#A6841C] block mb-1 font-sans">
                    Official Helplines
                  </span>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <a
                      href="tel:+917766959980"
                      className="min-h-[44px] flex items-center text-[15px] font-semibold text-[#0B1F3A] hover:text-[#163259] transition-colors focus-visible:outline-[#0B1F3A]"
                      aria-label="Call telephone number: 7766959980"
                    >
                      +91 7766959980
                    </a>
                    <a
                      href="tel:+919905871193"
                      className="min-h-[44px] flex items-center text-[15px] font-semibold text-[#0B1F3A] hover:text-[#163259] transition-colors focus-visible:outline-[#0B1F3A]"
                      aria-label="Call telephone number: 9905871193"
                    >
                      +91 9905871193
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Desk Information and Hours (6 of 12 cols) */}
          <div className="lg:col-span-6 bg-[#FAFAF7] border border-[#EBECE9] rounded-[4px] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#EBECE9]">
              <Building2 className="w-5 h-5 text-[#163259]" aria-hidden="true" />
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#172033] font-serif">
                Campus Counseling Desk
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C9A227] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <span className="text-[13px] font-semibold text-[#172033] font-sans block">
                    Campus Working Hours
                  </span>
                  <p className="text-[14px] text-[#475467] font-sans">
                    Monday to Saturday: 08:00 AM – 06:00 PM
                  </p>
                  <p className="text-[13px] text-[#667085] font-sans">
                    Sunday: Morning counseling session only
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#EBECE9] rounded-[4px] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A6841C] font-sans block">
                  Walk-In Guidance
                </span>
                <p className="text-[13px] text-[#475467] font-sans leading-relaxed">
                  Students may visit during working hours to review syllabus breakdowns, discuss target
                  exam timelines, and consult faculty members directly at the Bidupur center.
                </p>
              </div>

              <div className="pt-2 text-[12px] text-[#667085] font-sans">
                <p>Official communication channels are maintained directly through verified phone lines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
