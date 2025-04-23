"use client";
import { useState } from "react";
import InquiryForm2 from "@/components/comman/InquiryForm2";

export default function HeroSection() {
  const [enquiry, setEnquiry] = useState(false);

  return (
    <div className="h-screen relative">
      {/* Background Image with Overlay */}
      <div className="-z-10 absolute inset-0">
        <video
          src={"./Weight.mp4"}
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        />
        <div className="bg-gradient-to-b absolute from-black/30 inset-0 to-black/30 via-black/30"></div>
      </div>

      <div className="flex h-full items-center lg:px-20 px-6 relative z-10">
        <div className="text-left max-w-3xl">
          <h2 className="text-2xl text-cyan-400 drop-shadow-lg font-extrabold lg:text-4xl">
            Why Choose GLP-1 for Weight Loss
          </h2>
          <br />
          <p className="text-gray-100 text-lg lg:text-2xl max-w-2xl mt-5">
            Are you struggling with weight loss and looking for a clinically
            proven solution? At VitalCare Health, our GLP-1 Weight Management
            Program helps you achieve lasting results with FDA-approved GLP-1
            medications.
          </p>
          <br />

          <button
            onClick={() => setEnquiry(true)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-300 cursor-pointer rounded-lg shadow-md text-gray-900 px-5 text-lg duration-300 font-semibold gap-3 hover:bg-cyan-400 inline-flex items-center mt-6  py-3 transition"
          >
            Contact Now
          </button>
        </div>
      </div>
      {enquiry && (
        <InquiryForm2 onClose={() => setEnquiry(false)} enquiry={enquiry} />
      )}
    </div>
  );
}
