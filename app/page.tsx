import React from "react";
import Hero from "@/components/Hero";
import IdentityStrip from "@/components/IdentityStrip";
import AboutPreview from "@/components/AboutPreview";
import ExamPrograms from "@/components/ExamPrograms";
import AcademicPillars from "@/components/AcademicPillars";
import Founders from "@/components/Founders";
import ResultsPreview from "@/components/ResultsPreview";
import AdmissionCTA from "@/components/AdmissionCTA";
import ContactPreview from "@/components/ContactPreview";

export default function HomePage() {
  return (
    <>
      {/* 02 Hero Section */}
      <Hero />

      {/* 03 Identity Strip */}
      <IdentityStrip />

      {/* 04 About / Institute Introduction */}
      <AboutPreview />

      {/* 05 Examination Programs */}
      <ExamPrograms />

      {/* 06 Academic Pillars */}
      <AcademicPillars />

      {/* 07 Founders & Academic Mentorship */}
      <Founders />

      {/* 08 Results Registry */}
      <ResultsPreview />

      {/* 09 Admissions / Direct Enquiry */}
      <AdmissionCTA />

      {/* 10 Contact & Campus Directory */}
      <ContactPreview />
    </>
  );
}
