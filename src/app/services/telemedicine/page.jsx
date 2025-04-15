import Image from "next/image";

import main from "@/assets/service/telemedicine/ter.avif";
import a1 from "@/assets/service/telemedicine/a1.jpg";
import a2 from "@/assets/service/telemedicine/a2.jpg";
import a3 from "@/assets/service/telemedicine/a3.jpg";
import a4 from "@/assets/service/telemedicine/s4.jpg";
import a5 from "@/assets/service/telemedicine/a5.jpg";
import a6 from "@/assets/service/telemedicine/a6.avif";
import a7 from "@/assets/service/telemedicine/aa.jpg";
import a8 from "@/assets/service/telemedicine/a8.jpg";

import Link from "next/link";

const fluTests = [
  {
    image: a1,
    title: "Primary Care Consultations",
    description:
      "Receive comprehensive primary care services through telemedicine, including evaluations, diagnoses, personalized treatment plans, and ongoing management of chronic conditions.",
  },
  {
    image: a2,
    title: "Follow-up Appointments",
    description:
      "Connect with your healthcare provider virtually for follow-up visits to review treatment progress, adjust medications, and address any concerns or questions.",
  },
  {
    image: a3,
    title: "Medication Management",
    description:
      "Access prescriptions, refills, and medication adjustments remotely, ensuring continuous access to essential medications from the convenience of home.",
  },
  {
    image: a4,
    title: "Lab Result Reviews",
    description:
      "Review lab results, imaging reports, and diagnostic tests with your healthcare provider through virtual appointments for timely feedback and next steps.",
  },
  {
    image: a5,
    title: "Telehealth Urgent Care",
    description:
      "Seek prompt medical attention for non-emergency conditions through our telehealth urgent care services, where providers can assess and offer guidance remotely..",
  },
  {
    image: a6,
    title: "Specialist Referrals",
    description:
      "Receive referrals to consult with specialists for in-depth evaluations or specific care for conditions requiring expert attention.",
  },
  {
    image: a7,
    title: "Chronic Disease Management",
    description:
      "Get ongoing support and remote monitoring for chronic conditions such as diabetes, hypertension, asthma, and more, with our telemedicine services.",
  },
  {
    image: a8,
    title: "Preventive Care Discussions",
    description:
      "Engage in virtual discussions about preventive care, screenings, lifestyle modifications, and health promotion to proactively maintain your well-being.",
  },
];

export default function Telemedicine() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-lg font-bold text-gray-800">
            Care from the Comfort of Home
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Immediate Care & Primary Care Telemedicine Appointments
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Experience the convenience of healthcare from the comfort of your
            own home with VitalCare Health’s telemedicine appointments. Our
            dedicated healthcare professionals are available remotely to provide
            personalized primary and urgent care, offering expert guidance for
            your medical needs without the need for in-person visits.
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
              src={main}
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
            About Telemedicine at VitalCare Health
          </h3>
          {/* <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Our Approach to Flu Test & Vaccination
          </h2> */}
        </div>

        <div className="max-w-4xl mx-auto mt-6 text-gray-700 text-sm md:text-base">
          <p>
            At VitalCare Health, we recognize the importance of accessible and
            convenient healthcare, which is why we offer telemedicine
            appointments for your immediate and primary care needs. Through our
            secure and user-friendly platform, you can connect with experienced
            healthcare professionals from the comfort of your own home.
            Telemedicine provides a convenient alternative to in-person visits,
            minimizing travel time and reducing potential exposure to contagious
            illnesses.
          </p>
          <p>
            Please note that telemedicine appointments at VitalCare Health are
            currently available to individuals located within Georgia. In
            compliance with regulatory requirements, our providers offer
            telemedicine services only to patients located in the state where
            they are licensed. This ensures we meet state-specific healthcare
            regulations and maintain the highest standard of care for our
            patients.
          </p>
          <p>
            With VitalCare Health’s telemedicine, you can experience
            personalized consultations, discuss your health concerns, receive
            medical advice, and even obtain prescriptions when appropriate—all
            without leaving your home. Our dedicated healthcare professionals
            are committed to delivering comprehensive and compassionate care
            through this convenient and secure virtual platform.
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
            In-Office Tests & Urgent Care Procedures Available
          </h2>
        </div>
        <section className="py-12 px-6 bg-white">
          <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {fluTests.map((test, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center space-x-6"
              >
                <div className="min-w-[10vw] rounded-full overflow-hidden border-4 border-blue-900">
                  <Image
                    src={test.image}
                    alt={test.title}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>

                <div>
                  <p className="text-lg font-bold text-blue-900">
                    {test.title}
                  </p>
                  <p className="text-gray-700">{test.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export const generateMetadata = () => {
  return {
    title:
      "Telemedicine Services in Georgia | Virtual Care by VitalCare Health",
    description:
      "Access primary and urgent care from home with VitalCare Health’s telemedicine services. Available to patients across Georgia. Book your virtual visit today!",
    keywords:
      "telemedicine, virtual doctor consultation, online doctor Georgia, urgent care telehealth, remote primary care, chronic disease management, telehealth Georgia, online prescription, video doctor visit, VitalCare Health",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/services/telemedicine",
      title:
        "Online Doctor Visits | Telemedicine in Georgia | VitalCare Health",
      description:
        "Experience convenient virtual healthcare from your home. Telemedicine for urgent and primary care appointments now available at VitalCare Health in Georgia.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "Telemedicine consultation with VitalCare Health provider",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Virtual Healthcare at Home | VitalCare Health Telemedicine",
      description:
        "Book online doctor appointments for urgent and primary care. Telemedicine now available across Georgia at VitalCare Health.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
