import Image from "next/image";
import doctorImage from "@/assets/service/anual.avif";
import a1 from "@/assets/service/flu/a5.jpg";
import a2 from "@/assets/service/sport/a1.jpg";
import a3 from "@/assets/service/annual/a3.jpg";
import a4 from "@/assets/service/sport/a2.avif";
import a5 from "@/assets/service/sport/a3.jpg";
import a6 from "@/assets/service/sport/a4.jpg";

import Link from "next/link";

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

export default function SportPhysicals() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-lg font-bold text-gray-800">
            DISCOVER OUR SPORTS PHYSICALS
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Primary Care
            <br />
            Annual Physicals
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Ensuring your child’s health and readiness for athletic activities
            is crucial, especially since most athletic leagues and schools
            require sports physicals before participation. At VitalCare Health,
            we provide comprehensive sports physicals to assess your athlete’s
            physical fitness, medical history, and potential risk factors. With
            both scheduled primary care physician appointments and convenient
            walk-in urgent care options at one location, getting your child’s
            sports physical has never been easier.
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
          <p className="text-lg font-bold text-gray-800">
            THE IMPORTANCE OF SPORTS PHYSICALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Our Approach to Physicals for Sports
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-6 text-gray-700 text-sm md:text-base">
          <p>
            Even if your athlete participates in the same sport each year and
            maintains a clean bill of health, a yearly sports physical is
            crucial to ensure their safety and readiness for the activity they
            love. At VitalCare Health, we prioritize your athlete’s well-being,
            with our experienced team guiding you through every step of the exam
            process. Our aim is to make sure your child is healthy, confident,
            and prepared for their sport.
          </p>
          <p>
            During the physical, a VitalCare physician will perform a
            comprehensive assessment, including measuring vital signs such as
            blood pressure, heart rate, breathing rate, height, and weight.
            We’ll thoroughly examine the heart, lungs, abdomen, throat, ears,
            nose, and skin for any concerns. In addition, muscle strength and
            flexibility will be checked to ensure optimal physical fitness. If
            your athlete requires further evaluation or does not pass the
            physical, we can quickly refer them to one of our on-site primary
            care physicians for additional care or treatment.
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
            Our Sports Physical Exams
          </h2>
        </div>

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
                <p className="text-lg font-bold text-blue-900">{test.title}</p>
                <p className="text-gray-700">{test.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export const generateMetadata = () => {
  return {
    title: "Sports Physicals | Youth Athlete Exams | VitalCare Health",
    description:
      "Ensure your child's safety and readiness with a comprehensive sports physical at VitalCare Health. Walk-in and scheduled options available. Get cleared for the season today.",
    keywords:
      "sports physicals, pre-participation physicals, youth sports exams, school sports physical, athletic clearance, sports checkup, musculoskeletal exam, blood pressure check, vision screening, child physical exam, walk-in sports physical, VitalCare Health, physical for athletes, sports physical form, sports health exam",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/services/sports-physicals",
      title:
        "Sports Physicals | Athletic Clearance for Kids | VitalCare Health",
      description:
        "Get your child ready for the season with expert sports physicals at VitalCare Health. Full exam, health history evaluation, and sports form completion included.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "Sports Physical - VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Sports Physicals | VitalCare Health",
      description:
        "Fast, reliable sports physicals for kids at VitalCare Health. Comprehensive exams, musculoskeletal checks, and school form completion—all in one visit.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
