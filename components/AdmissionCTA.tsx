"use client";

import React, { useState } from "react";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AdmissionCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="admissions"
      aria-labelledby="admissions-heading"
      className="py-16 sm:py-20 lg:py-24 bg-[#0B1F3A] text-white border-b border-[#071527] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct Helplines and Enrollment Guidance (6 of 12 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#163259] border border-[#C9A227]/40 rounded-[4px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#F3E7C4] font-sans">
                Admissions & Desk Guidance
              </span>
            </div>

            <h2
              id="admissions-heading"
              className="text-[30px] sm:text-[36px] md:text-[42px] font-semibold text-white font-serif leading-[1.2] tracking-tight"
            >
              Begin Your Preparation
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] font-sans leading-relaxed">
              Inquire about upcoming examination foundation programs, classroom batches, and test
              series at our Bidupur center. Speak directly with the admissions desk or submit an
              enquiry.
            </p>

            {/* Direct Phone Helplines */}
            <div className="pt-2 space-y-3">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#A6841C] block font-sans">
                Call Admissions Desk Directly:
              </span>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="tel:+917766959980"
                  className="min-h-[44px] flex items-center justify-center sm:justify-start gap-2.5 px-4 py-3 bg-[#071527] hover:bg-[#163259] border border-white/10 rounded-[4px] text-white font-medium text-[15px] transition-colors focus-visible:outline-[#C9A227]"
                  aria-label="Call admissions helpline 1: 7766959980"
                >
                  <Phone className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
                  <span>+91 7766959980</span>
                </a>
                <a
                  href="tel:+919905871193"
                  className="min-h-[44px] flex items-center justify-center sm:justify-start gap-2.5 px-4 py-3 bg-[#071527] hover:bg-[#163259] border border-white/10 rounded-[4px] text-white font-medium text-[15px] transition-colors focus-visible:outline-[#C9A227]"
                  aria-label="Call admissions helpline 2: 9905871193"
                >
                  <Phone className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
                  <span>+91 9905871193</span>
                </a>
              </div>
            </div>

            <div className="pt-2 text-[13px] text-[#98A2B3] font-sans">
              <p>Campus Address: Bidupur, Vaishali, Bihar, India</p>
              <p className="mt-1">In-person counseling available during campus hours.</p>
            </div>
          </div>

          {/* Right Column: Clean Visual Enquiry Form (6 of 12 cols) */}
          <div className="lg:col-span-6 bg-white text-[#172033] p-6 sm:p-8 rounded-[4px] shadow-sm border border-[#EBECE9]">
            <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#172033] font-serif mb-2">
              Send an Enquiry
            </h3>
            <p className="text-[13px] sm:text-[14px] text-[#475467] font-sans mb-6">
              Fill out your details below. For urgent assistance, please call the helpline numbers directly.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-[#EDF7F1] border border-[#1E6B47]/20 rounded-[4px] text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#1E6B47] mx-auto" aria-hidden="true" />
                <h4 className="text-[17px] font-semibold text-[#1E6B47] font-serif">
                  Enquiry Registered
                </h4>
                <p className="text-[13px] text-[#475467] font-sans leading-relaxed">
                  Thank you for your interest in Anand Education Center. Please reach out to our
                  campus desk at{" "}
                  <strong className="text-[#172033]">+91 7766959980</strong> for immediate batch
                  timings and counseling.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="min-h-[44px] text-[13px] font-semibold text-[#0B1F3A] underline pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[12px] font-semibold uppercase tracking-wider text-[#475467] mb-1.5 font-sans"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder="Enter student full name"
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-[14px] border border-[#D0D5DD] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:border-[#0B1F3A] font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-[12px] font-semibold uppercase tracking-wider text-[#475467] mb-1.5 font-sans"
                  >
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-[14px] border border-[#D0D5DD] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:border-[#0B1F3A] font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="targetExam"
                    className="block text-[12px] font-semibold uppercase tracking-wider text-[#475467] mb-1.5 font-sans"
                  >
                    Target Examination *
                  </label>
                  <select
                    id="targetExam"
                    required
                    defaultValue="BPSC"
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-[14px] border border-[#D0D5DD] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:border-[#0B1F3A] font-sans bg-white"
                  >
                    <option value="UPSC">UPSC — Civil Services Examination</option>
                    <option value="BPSC">BPSC — Bihar Public Service Commission</option>
                    <option value="SSC">SSC — CGL / CHSL National Commissions</option>
                    <option value="Railway">Railway — RRB NTPC & Technical</option>
                    <option value="Banking">Banking — IBPS PO / Clerk & SBI</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiryMessage"
                    className="block text-[12px] font-semibold uppercase tracking-wider text-[#475467] mb-1.5 font-sans"
                  >
                    Message or Academic Query
                  </label>
                  <textarea
                    id="enquiryMessage"
                    rows={3}
                    placeholder="Tell us about your background or specific questions..."
                    className="w-full px-3.5 py-2.5 text-[14px] border border-[#D0D5DD] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:border-[#0B1F3A] font-sans"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full min-h-[44px] bg-[#0B1F3A] hover:bg-[#163259] text-white py-3 rounded-[4px] text-[14px] font-semibold tracking-wider transition-colors inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#0B1F3A] focus-visible:ring-offset-2"
                  >
                    <span>ENQUIRE NOW</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
                  </button>
                </div>

                <p className="text-[11px] text-[#667085] text-center font-sans pt-1">
                  Direct telephone contact is also active daily: +91 7766959980
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
