import React from "react";
import Image from "next/image";
import founder from "@/assets/founder.avif";

const MeetOurFounder = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      {/* Image Section - Placed at the Top */}
      <div className="flex justify-center mb-6">
        <Image
          src={founder}
          alt="Dr. Hardik Parekh"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
      </div>

      <h2 className="text-3xl font-bold text-center mb-4">Meet Our Founder</h2>

      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900">
          Dr. Hardik Parekh, MD, MPH
        </h3>
        <p className="text-lg text-gray-600">Owner & Medical Director</p>
      </div>

      <p className="mt-4 text-lg leading-relaxed text-center">
        Dr. Hardik Parekh, MD, MPH, is a board-certified medical director and
        the visionary founder of VitalCare Health. With over a decade of
        experience in emergency and family medicine, he is committed to
        delivering exceptional, patient-centered healthcare.
      </p>

      <h3 className="text-xl font-semibold mt-6">Expertise & Credentials</h3>
      <p className="mt-2 text-lg leading-relaxed">
        Board-certified by the American Board of Family Medicine, Dr. Parekh
        serves as a trusted Medical Director affiliated with Piedmont Hospitals.
        His expertise spans Emergency Medicine and Family Medicine, ensuring
        comprehensive care for both urgent and long-term health needs.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        A Holistic Approach to Medicine
      </h3>
      <p className="mt-2 text-lg leading-relaxed">
        Holding dual degrees in Medicine (MD) and Public Health (MPH), Dr.
        Parekh integrates clinical expertise with a deep understanding of public
        health, promoting overall wellness and preventive care.
      </p>

      <h3 className="text-xl font-semibold mt-6">
        A Trusted Leader in the Community
      </h3>
      <p className="mt-2 text-lg leading-relaxed">
        Affiliated with Piedmont Hospitals, Dr. Parekh ensures that VitalCare
        Health is equipped to handle urgent medical needs and long-term
        healthcare management with skill and compassion.
      </p>

      <p className="mt-6 text-lg leading-relaxed font-semibold text-center">
        Driven by the belief that healthcare should be accessible and
        transformative, Dr. Parekh leads VitalCare Health with dedication and
        integrity.
      </p>
    </div>
  );
};

export default MeetOurFounder;
