import Image from "next/image";
import doctorImage from "@/assets/service/flu/flu.avif";
import a1 from "@/assets/service/flu/a1.jpg";
import a2 from "@/assets/service/flu/a2.jpg";
import a3 from "@/assets/service/flu/a3.jpg";
import a4 from "@/assets/service/flu/a4.jpg";
import a5 from "@/assets/service/flu/a5.jpg";
import a6 from "@/assets/service/flu/a6.avif";
import a7 from "@/assets/service/annual/a5.jpg";
import Link from "next/link";

const fluTests = [
  {
    image: a1,
    title: "Flu Nasal Swab Test",
    description:
      "The flu nasal swab test is a quick and painless procedure used to collect respiratory samples for flu testing...",
  },
  {
    image: a2,
    title: "Online Follow-up",
    description:
      "VitalCare Health’s online follow-up services provide continuous care and support as you recover from the flu...",
  },
  {
    image: a3,
    title: "Flu Medication Treatment",
    description:
      "At VitalCare Health, we offer personalized flu medication management, prescribing antiviral medications when necessary...",
  },
  {
    image: a4,
    title: "Flu Vaccine (Influenza)",
    description:
      "As a preventive measure, our flu vaccine significantly reduces the risk of influenza infection...",
  },
  {
    image: a5,
    title: "Flu Infection Detection",
    description:
      "Flu diagnosis is the critical first step in managing influenza. Our healthcare professionals utilize state-of-the-art diagnostic tools...",
  },
  {
    image: a6,
    title: "Rapid Flu Test (Antigen)",
    description:
      "The rapid flu antigen test provides swift results by identifying flu antigens in respiratory samples...",
  },
  {
    image: a7,
    title: "Blood Test",
    description:
      "Our flu-specific blood test measures antibodies, helping our providers assess immune responses to the flu...",
  },
];

export default function FluTesting() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-lg font-bold text-gray-800">
            DISCOVER SPECIALIZED TREATMENT FOR INFLUENZA (FLU)
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Urgent Care Flu
            <br />
            Testing & Treatment
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            At VitalCare Health, our flu testing and treatment specialists are
            committed to offering comprehensive care designed to meet the
            specific needs of individuals dealing with influenza (flu). From
            accurate testing to tailored treatment plans, we focus on your
            well-being every step of the way.
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
            WHY FLU TESTING AND TREATMENT MATTERS
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Our Approach to Flu Test & Vaccination
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-6 text-gray-700 text-sm md:text-base">
          <p>
            Influenza is a contagious respiratory illness that requires timely
            and specialized care. There are four types of influenza viruses,
            three of which affect humans. At VitalCare Health, we prioritize
            addressing the unique needs, concerns, and conditions associated
            with the flu, providing comprehensive care and effective treatment
            plans. Our team of flu specialists is dedicated to guiding you
            through the entire process with precision and compassion.
          </p>
          <p>
            At VitalCare Health, we offer a streamlined approach to flu care,
            ensuring that your needs are met conveniently and efficiently. Our
            integrated care model eliminates the need for multiple appointments,
            allowing you to undergo flu testing and begin treatment all in one
            location. Additionally, our on-demand flu vaccine services ensure
            you can receive your flu shot without the need for an appointment.
            Whether you require flu testing, consultation, or vaccination,
            VitalCare Health is here to make your healthcare journey seamless
            and hassle-free.
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
            Flu Tests & Treatments Offered
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
                  <h3 className="text-lg font-bold text-blue-900">
                    {test.title}
                  </h3>
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
      "Flu Testing & Treatment | Rapid Flu Diagnosis & Care | VitalCare Health",
    description:
      "Get fast and reliable flu testing and treatment at VitalCare Health. We offer flu nasal swabs, rapid antigen tests, antiviral medication, and flu vaccines—all in one convenient location.",
    keywords:
      "flu testing, flu treatment, rapid flu test, flu nasal swab, flu vaccine, influenza care, flu symptoms, flu diagnosis, urgent care flu, flu medication, flu shot near me, flu antigen test, influenza testing and treatment, flu detection, VitalCare Health flu clinic",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/services/flu-testing-treatment",
      title: "Flu Testing & Treatment | VitalCare Health",
      description:
        "VitalCare Health offers same-day flu testing, diagnosis, and treatment. Visit our clinic for rapid flu tests, vaccines, and professional care tailored to your symptoms.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "Flu Testing - VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Flu Testing & Treatment | VitalCare Health",
      description:
        "Swift flu diagnosis and treatment available at VitalCare Health. Rapid tests, flu shots, and antiviral medication—get care when you need it most.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
