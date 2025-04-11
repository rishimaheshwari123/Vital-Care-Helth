import Image from "next/image";
import doctorImage from "@/assets/service/anual.avif";
import a1 from "@/assets/service/annual/a1.jpg";
import a2 from "@/assets/service/annual/a2.jpg";
import a3 from "@/assets/service/annual/a3.jpg";
import a4 from "@/assets/service/annual/a4.jpg";
import a5 from "@/assets/service/annual/a5.jpg";
import Link from "next/link";

export default function Annual() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-lg font-bold text-gray-800">
            Prioritizing Your Health and Wellness
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Primary Care Annual Physicals
            <br />
            <span>Annual Physicals</span>
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            An annual physical exam is a vital step toward a healthier life,
            enabling you to identify potential health risks, detect early signs
            of illness, and maintain overall well-being. The experienced team of
            healthcare professionals at VitalCare Health is dedicated to
            providing thorough assessments, personalized primary and urgent
            care, and professional guidance throughout your annual physical
          </p>

          <div className="mt-6">
            <Link
              href={
                "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
              }
              className="bg-[#7ed0e4] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
            >
              Contact Us Today
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center ">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={doctorImage}
              alt="Doctor holding vaccine"
              width={500}
              height={400}
              className="w-full max-w-xs md:min-w-[45vw]"
            />
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-10 px-5 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-bold text-gray-800">
            Why Annual Physical Exams Matter
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            The Importance of Physical Exams
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-6 text-gray-700 text-sm md:text-base">
          <p>
            Annual physical exams are vital for maintaining optimal health. By
            undergoing regular check-ups, you empower yourself with crucial
            insights into your well-being. These exams allow our healthcare
            professionals to assess your overall health status, detect any
            underlying health risks that require urgent care, and address them
            proactively.
          </p>
          <p>
            By conducting a thorough evaluation of your medical history, vital
            signs, and laboratory tests, our team can identify early signs of
            illness and provide timely interventions, increasing the chances of
            successful treatment and improved outcomes. VitalCare Health ensures
            that you receive the highest quality care and attention to promote
            your well-being.
          </p>
        </div>

        {/* Contact Button */}
        <div className="max-w-4xl mx-auto mt-6 flex justify-center">
          <Link
            href={
              "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            }
            className="bg-red-500 cursor-pointer text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
          >
            Get Tested Today
          </Link>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Essential Health Tests for Your Physical Exam
          </h2>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Rapid COVID Testing */}
          <div className="flex flex-col lg:flex-row items-center space-x-6">
            <div className="">
              <Image
                src={a1}
                alt="COVID Test"
                objectFit="cover"
                className="rounded-full md:w-[53vw] h-32 border-4 border-blue-900"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">Blood Tests</h3>
              <p className="text-gray-700">
                Blood tests play a crucial role in assessing your overall
                health. These tests analyze various components of your blood,
                such as cholesterol levels, blood sugar levels, and complete
                blood count (CBC). By evaluating these markers, healthcare
                professionals can identify potential risk factors, monitor
                existing conditions, and detect early signs of illnesses.
              </p>
            </div>
          </div>

          {/* Oxygen Saturation Monitoring */}
          <div className="flex flex-col lg:flex-row items-center space-x-6">
            <div className="">
              <Image
                src={a2}
                alt="Oxygen Monitoring"
                objectFit="cover"
                className="rounded-full md:w-[52vw] h-32 border-4 border-blue-900"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Health History Evaluation
              </h3>
              <p className="text-gray-700">
                A thorough health history evaluation enables healthcare
                providers to gain insights into your past and current medical
                conditions, surgeries, medications, allergies, and family
                medical history. Understanding your health background allows for
                personalized preventive measures and screenings tailored to your
                unique healthcare needs.
              </p>
            </div>
          </div>

          {/* Antiviral Medications */}
          <div className="flex flex-col lg:flex-row items-center space-x-6">
            <div className="">
              <Image
                src={a3}
                alt="Antiviral Medication"
                objectFit="cover"
                className="rounded-full md:w-[52vw] h-32 border-4 border-blue-900"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Blood Pressure Measurement
              </h3>
              <p className="text-gray-700">
                Measuring your blood pressure is a routine part of annual
                physical exams. High blood pressure can be an indicator of
                underlying health issues, including cardiovascular concerns.
                Regular monitoring helps in identifying hypertension early,
                allowing for timely interventions to protect your heart health.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center space-x-6">
            <div className="">
              <Image
                src={a4}
                alt="Antiviral Medication"
                objectFit="cover"
                className="rounded-full w-[35vw] h-32 border-4 border-blue-900"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Vision and Hearing Screening
              </h3>
              <p className="text-gray-700">
                Annual physical exams include basic vision and hearing
                screenings, which evaluate your visual clarity and detect any
                hearing difficulties. Early detection of sensory impairments
                ensures timely interventions for optimal vision and hearing
                health.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center space-x-6">
            <div className="">
              <Image
                src={a5}
                alt="Antiviral Medication"
                objectFit="cover"
                className="rounded-full md:w-[55vw] h-32 border-4 border-blue-900"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Physical Examination
              </h3>
              <p className="text-gray-700">
                As part of your annual check-up, a comprehensive physical
                examination is conducted. This involves assessing vital signs
                like heart rate, respiratory rate, and temperature.
                Additionally, your healthcare provider will examine body systems
                such as the heart, lungs, abdomen, and skin to identify any
                irregularities or signs of health concerns that may require
                urgent care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const generateMetadata = () => {
  return {
    title: "Annual Physicals | Preventive Health Exams | VitalCare Health",
    description:
      "Stay proactive about your health with annual physical exams at VitalCare Health. Our expert team provides personalized checkups, lab tests, and screenings to detect health risks early and ensure your overall wellness.",
    keywords:
      "annual physicals, preventive care, physical exam, health checkup, yearly health exam, primary care physical, medical examination, lab tests, blood pressure monitoring, vision screening, health risk detection, COVID testing, cholesterol test, diabetes screening, wellness exams, blood work, VitalCare Health annual checkup",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/services/annual-physicals",
      title: "Annual Physical Exams | VitalCare Health",
      description:
        "VitalCare Health offers comprehensive annual physicals to monitor your health, detect risks early, and support long-term wellness. Book your exam today.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "Annual Physical - VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Annual Physicals | VitalCare Health",
      description:
        "Get your annual checkup with VitalCare Health. We provide personalized exams, lab tests, and early detection to keep you healthy year-round.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
