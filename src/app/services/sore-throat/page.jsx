import Image from "next/image";
import doctorImage from "@/assets/service/throught/troghth.avif";
import a1 from "@/assets/service/throught/a1.jpg";
import a2 from "@/assets/service/throught/a2.jpg";
import a3 from "@/assets/service/throught/a3.jpg";
import a4 from "@/assets/service/throught/a4.avif";
import a5 from "@/assets/service/throught/a5.jpg";
import a6 from "@/assets/service/throught/a6.jpg";
import Link from "next/link";

const fluTests = [
  {
    image: a1,
    title: "Rapid Strep Throat Test",
    description:
      "Our rapid strep throat test is a fast and reliable diagnostic tool designed to determine if your sore throat is caused by a bacterial infection.",
  },
  {
    image: a2,
    title: "Throat Culture",
    description:
      "A throat culture is a simple, painless test used to detect bacterial infections. Results are typically available within 2 to 3 days.",
  },
  {
    image: a3,
    title: "Pain Relief Medications",
    description:
      "We offer both prescription and over-the-counter medications to relieve pain and discomfort associated with sore throats. This includes throat lozenges, pain relievers, and anti-inflammatory drugs.",
  },
  {
    image: a4,
    title: "Antibiotic Treatment",
    description:
      "For bacterial infections such as strep throat, we provide antibiotic treatment to clear the infection and ease your symptoms.",
  },
  {
    image: a5,
    title: "Throat Sprays and Gargles",
    description:
      "Throat sprays and gargles can help soothe irritation and reduce inflammation, offering temporary relief from sore throat symptoms.",
  },
  {
    image: a6,
    title: "Education",
    description:
      "Alongside medical treatments, we emphasize the importance of staying hydrated and getting adequate rest to support your body’s natural healing and promote a speedy recovery.",
  },
];

export default function SoreThroat() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-lg font-bold text-gray-800">
            DISCOVER OUR SORE THROAT SERVICES
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Urgent Care for Strep Throat
            <br />& Sore Throat Treatment{" "}
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            At VitalCare Health, our specialized team is dedicated to addressing
            your sore throat concerns with precision and care. We provide
            accurate diagnoses and customized treatment plans to manage sore
            throats effectively. Our priority is your comfort and well-being
            throughout your recovery, ensuring you receive the best care
            possible.
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
            WHY SORE THROAT TREATMENT MATTERS
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Our Approach to Sore Throat Treatment
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-6 text-gray-700 text-sm md:text-base">
          <p>
            A sore throat can be quite uncomfortable, and at VitalCare Health,
            we recognize the importance of addressing it swiftly and
            effectively. Our team of healthcare professionals is skilled in
            assessing your symptoms and providing targeted treatments to
            alleviate your discomfort. From detailed throat examinations to
            personalized treatment plans, we are dedicated to helping you
            recover as quickly as possible.
          </p>
          <p>
            We offer a thorough approach to sore throat treatment, including a
            range of diagnostic tests and treatment options tailored to your
            needs. Whether you're dealing with mild soreness or more severe
            symptoms, VitalCare Health aims to streamline your care by providing
            comprehensive sore throat services all in one place.
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
        <section className="py-12 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Sore Throat Testing and Treatment Offered
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
    title: "Sore Throat & Strep Throat Treatment | VitalCare Health",
    description:
      "Get fast relief for sore throat symptoms at VitalCare Health. We offer rapid strep tests, throat cultures, pain relief, and antibiotic treatments tailored to your needs.",
    keywords:
      "sore throat treatment, strep throat test, rapid strep test, throat culture, throat pain relief, urgent care sore throat, sore throat medication, strep throat Tyrone GA, VitalCare Health, antibiotics for sore throat, throat sprays and gargles",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/services/sore-throat",
      title: "Urgent Care for Sore Throat & Strep | VitalCare Health",
      description:
        "VitalCare Health provides expert sore throat and strep throat treatment, including rapid tests, pain relief, and antibiotics. Walk in or book online today.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "Sore throat care at VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Strep & Sore Throat Relief | VitalCare Health",
      description:
        "From throat cultures to soothing sprays, get complete sore throat care at VitalCare Health. Trusted treatment in Tyrone, GA.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
