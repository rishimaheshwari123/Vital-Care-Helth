import React from "react";
import Image from "next/image";
import founder from "@/assets/team1.png";

const MeetOurTeam = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br ">
      {/* Image Section */}
      <div className="flex flex-col items-center text-center p-6">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src={founder}
            alt="Dr. Hardik Parekh"
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-full border-4 border-[#0097a3c3] shadow-lg"
          />
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mt-4">
          Meet Our Team
        </h1>
        <h2 className="text-lg font-semibold text-[#0097a3c3] mt-2">
          Megan McCullough Vieira
        </h2>
        <p className="text-gray-600 text-sm">MSN, FNP, AGACNP-BC</p>
      </div>

      {/* Content Section */}
      <div className="px-6 pb-6 space-y-6">
        {/* <p className="text-gray-700 text-base leading-relaxed text-center">
          Dr. Hardik Parekh, MD, MPH, is a board-certified medical director and
          the visionary founder of VitalCare Health. With over a decade of
          experience in emergency and family medicine, he is committed to
          delivering exceptional, patient-centered healthcare.
        </p> */}

        <div className="grid gap-6">
          <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-blue-500">
            <p className="text-md font-bold text-gray-800">
              👩‍⚕ Experience & Credentials
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Megan is a certified Nurse Practitioner with over 12 years of
              dedicated service in Fayette County. She began her healthcare
              journey in 2005 as an EMT, later becoming a Paramedic, Registered
              Nurse, and finally achieving her Nurse Practitioner certification.
              Her clinical expertise spans emergency care, urgent care, family
              practice, and adult-gerontological acute care.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-green-500">
            <p className="text-md font-bold text-gray-800">
              🎓 Education & Training
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Megan earned her Associate Degree in Nursing from Gordon College
              and completed her BSN at the Medical College of Georgia. She went
              on to receive her Master of Science in Nursing from the University
              of South Alabama in 2013, specializing in Emergency Nurse
              Practitioner studies.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-yellow-500">
            <h3 className="text-md font-bold text-gray-800">
              👩‍🏫 Teaching & Mentorship
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Megan is also committed to the next generation of healthcare
              professionals. She serves as an adjunct clinical instructor at
              Emory University School of Nursing’s Nurse Practitioner Program,
              mentoring students through hands-on clinical training.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-red-500">
            <h3 className="text-md font-bold text-gray-800">
              🏡 Community Engagement
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              A proud resident of Fayette County, Megan lives in the community
              she serves, along with her husband and two children. Her deep
              connection with the local community drives her compassionate and
              patient-centered approach to care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
