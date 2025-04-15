import { FaCheck } from "react-icons/fa";
import health from "@/assets/health.jpg";
import Image from "next/image";
const symptoms = [
  "Cough",
  "Wheezing",
  "Sore throat",
  "Sinus pressure or pain",
  "Runny or stuffy nose",
  "Fever",
  "Ear pain",
  "Pain during urination",
  "Frequent urination",
  "Penile or vaginal discharge",
  "Abdominal pain",
  "Nausea or vomiting",
  "Diarrhea",
  "Boils or skin redness",
  "Rash or itching",
  "Bug bites",
  "Headache",
  "Joint pain",
];

export default function HealthConsultation() {
  return (
    <div className="bg-gray-100">
      <div className="flex max-w-7xl mx-auto flex-col lg:flex-row items-center gap-8 p-6  rounded-lg shadow-md">
        <div className="w-full lg:w-1/2">
          <Image
            src={health}
            alt="Health Consultation"
            className="w-full  object-cover rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Health Consultation</h1>
          <p className="text-gray-700 mb-4">
            At VitalCare Health, we understand the importance of addressing
            urgent medical needs promptly. Our dedicated healthcare
            professionals provide immediate and comprehensive care for various
            urgent conditions.
          </p>
          <h2 className="text-lg font-semibold mb-2">
            Common Urgent Care Symptoms Treated:
          </h2>
          <ul className="grid grid-cols-2 gap-3 text-gray-800">
            {symptoms.map((symptom, index) => (
              <li key={index} className="flex  lg:items-center gap-2">
                <span className="text-green-500 mt-1 lg:mt-0 text-lg">
                  <FaCheck />
                </span>
                {symptom}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
