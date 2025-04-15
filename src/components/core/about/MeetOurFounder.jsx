import React from "react";
import Image from "next/image";
import founder from "@/assets/founder.avif";

const MeetOurFounder = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br ">
      {/* Image Section */}
      <div className="flex flex-col items-center text-center p-6">
        <div className="relative">
          <Image
            src={founder}
            alt="Dr. Hardik Parekh"
            width={150}
            height={150}
            className="rounded-full border-4 border-[#0097a3c3] shadow-lg"
          />
          <div className="absolute bottom-0 right-0 bg-[#0097a3c3] text-white text-xs px-3 py-1 rounded-full shadow-md">
            Founder
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mt-4">
          Meet Our Founder
        </h1>
        <h2 className="text-lg font-semibold text-[#0097a3c3] mt-2">
          Dr. Hardik Parekh, MD, MPH
        </h2>
        <p className="text-gray-600 text-sm">Owner & Medical Director</p>
      </div>

      {/* Content Section */}
      <div className="px-6 pb-6 space-y-6">
        <p className="text-gray-700 text-base leading-relaxed text-center">
          Dr. Hardik Parekh, MD, MPH, is a board-certified medical director and
          the visionary founder of VitalCare Health. With over a decade of
          experience in emergency and family medicine, he is committed to
          delivering exceptional, patient-centered healthcare.
        </p>

        <div className="grid gap-6">
          <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-blue-500">
            <p className="text-md font-bold text-gray-800">
              🏥 Expertise & Credentials
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Board-certified by the American Board of Family Medicine, Dr.
              Parekh serves as a trusted Medical Director affiliated with
              Piedmont Hospitals. His expertise spans Emergency Medicine and
              Family Medicine, ensuring comprehensive care for both urgent and
              long-term health needs.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-green-500">
            <p className="text-md font-bold text-gray-800">
              🌍 A Holistic Approach
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Holding dual degrees in Medicine (MD) and Public Health (MPH), Dr.
              Parekh integrates clinical expertise with a deep understanding of
              public health, promoting overall wellness and preventive care.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-yellow-500">
            <p className="text-md font-bold text-gray-800">
              🤝 Community Leadership
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Affiliated with Piedmont Hospitals, Dr. Parekh ensures that
              VitalCare Health is equipped to handle urgent medical needs and
              long-term healthcare management with skill and compassion.
            </p>
          </div>
        </div>

        <p className="mt-6 text-lg font-semibold text-center text-white bg-[#0097a3c3]">
          "Healthcare should be accessible and transformative."
          <br />- Dr. Hardik Parekh
        </p>
      </div>
    </div>
  );
};

export default MeetOurFounder;
