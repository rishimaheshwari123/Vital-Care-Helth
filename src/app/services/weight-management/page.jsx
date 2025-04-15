import Image from "next/image";
import doctorImage from "@/assets/service/wight/weight.avif";
import a1 from "@/assets/service/flu/a5.jpg";
import a2 from "@/assets/service/sport/a1.jpg";
import a3 from "@/assets/service/annual/a3.jpg";
import a4 from "@/assets/service/sport/a2.avif";
import a5 from "@/assets/service/sport/a3.jpg";
import a6 from "@/assets/service/sport/a4.jpg";

import Link from "next/link";
import Glp1WeightManagement from "@/components/core/weightmanagement/Glp1WeightManagement";
import BmiCalculator from "@/components/core/weightmanagement/BMICalculator";

const fluTests = [
  {
    image: a1,
    title: "Sports Physical Form",
    description:
      "Once the exam is complete, your healthcare provider will fill out the required sports physical form. This includes documenting the examination results, addressing any health concerns, offering recommendations for safe participation, and noting any necessary restrictions or modifications. The form will be signed and dated to confirm your child’s readiness for the season.",
  },
  {
    image: a2,
    title: "Health History Evaluation",
    description:
      "A thorough health history evaluation enables healthcare providers to gain insights into your past and current medical conditions, surgeries, medications, allergies, and family medical history. Understanding your health background allows for personalized preventive measures and screenings tailored to your unique healthcare needs.",
  },
  {
    image: a3,
    title: "Blood Pressure Measurement",
    description:
      "Measuring your blood pressure is a routine part of annual physical exams. High blood pressure can be an indicator of underlying health issues, including cardiovascular concerns. Regular monitoring helps in identifying hypertension early, allowing for timely interventions to protect your heart health.",
  },
  {
    image: a4,
    title: "Vision and Hearing Screening",
    description:
      "Annual physical exams include basic vision and hearing screenings, which evaluate your visual clarity and detect any hearing difficulties. Early detection of sensory impairments ensures timely interventions for optimal vision and hearing health.",
  },
  {
    image: a5,
    title: "Physical Examination",
    description:
      "As part of your annual check-up, a comprehensive physical examination is conducted. This involves assessing vital signs like heart rate, respiratory rate, and temperature. Additionally, your healthcare provider will examine body systems such as the heart, lungs, abdomen, and skin to identify any irregularities or signs of health concerns that may require urgent care.",
  },
  {
    image: a6,
    title: "Musculoskeletal Exam",
    description:
      "The musculoskeletal exam assesses joints, muscles, and overall movement to identify any issues that could impact sports participation. This exam is particularly important for young athletes, as it helps detect movement limitations and any developmental concerns with their growing musculoskeletal systems.",
  },
];

export default function WeightManagment() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-lg font-bold text-gray-800">
            Supporting Your Weight Management Journey
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Physician-led Weight
            <br />
            Loss & Management Program{" "}
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            At VitalCare Health, we understand that effective weight management
            is key to achieving overall health and well-being. We are committed
            to helping you navigate your weight loss and management journey with
            personalized care and expert guidance. We create customized
            treatment plans that focus on sustainable weight management
            strategies, aiming to improve your health outcomes and quality of
            life.
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
      <Glp1WeightManagement />
      <BmiCalculator />
    </div>
  );
}

export const generateMetadata = () => {
  return {
    title: "GLP-1 Weight Management Program | VitalCare Health",
    description:
      "Achieve sustainable weight loss with VitalCare Health’s FDA-approved GLP-1 Weight Management Program. Boost metabolism, reduce cravings, and transform your lifestyle with expert support.",
    keywords:
      "GLP-1 weight loss, weight management program, FDA-approved weight loss, sustainable weight loss, appetite control, metabolism booster, BMI over 30, obesity treatment, VitalCare Health, weight loss clinic Tyrone GA, lose weight with GLP-1, obesity-related disease prevention, body mass index calculator, medical weight loss program",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/services/weight-management",
      title: "Weight Management | GLP-1 Program at VitalCare Health",
      description:
        "Transform your health with VitalCare Health's GLP-1 Weight Management Program. A science-backed approach to long-term, effective weight loss with expert support.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "GLP-1 Weight Management - VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "GLP-1 Weight Loss Program | VitalCare Health",
      description:
        "Struggling with weight loss? Try VitalCare’s GLP-1 Weight Management Program — clinically proven, FDA-approved, and designed for lasting results.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
