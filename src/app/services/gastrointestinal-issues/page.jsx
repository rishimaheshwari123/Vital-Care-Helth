import Image from "next/image";
import a1 from "@/assets/service/gastrointestinal/g1.png";
import a2 from "@/assets/service/gastrointestinal/g2.png";
import a3 from "@/assets/service/gastrointestinal/g3.png";
import a4 from "@/assets/service/gastrointestinal/g4.png";
import a5 from "@/assets/service/gastrointestinal/g5.png";
import a6 from "@/assets/service/gastrointestinal/g6.png";
import hero from "@/assets/service/gastrointestinal/hero.png";

import Link from "next/link";

const fluTests = [
  {
    image: a1,
    title: "Digestive Health Consultation",
    description:
      "Our expert gastroenterologists provide comprehensive evaluations to diagnose and manage various digestive disorders.",
  },
  {
    image: a2,
    title: "Acid Reflux & Heartburn Treatment",
    description:
      "We offer effective treatment options, including medications and lifestyle adjustments, to relieve acid reflux and heartburn symptoms.",
  },
  {
    image: a3,
    title: "IBS & Digestive Disorder Management",
    description:
      "Personalized care plans for managing irritable bowel syndrome (IBS) and other digestive conditions to improve gut health and overall well-being.",
  },
  {
    image: a4,
    title: "Endoscopy & Colonoscopy",
    description:
      "Advanced diagnostic procedures, such as endoscopy and colonoscopy, help detect GI conditions early and guide treatment plans.",
  },
  {
    image: a5,
    title: "Liver & Gallbladder Health",
    description:
      "Our specialists assess and treat liver diseases, gallstones, and other related conditions to ensure optimal digestive function.",
  },
  {
    image: a6,
    title: "Online Follow-up & Support",
    description:
      "VitalCare Health’s virtual consultations provide ongoing support for managing gastrointestinal conditions, ensuring continuous care and treatment adjustments.",
  },
];

export default function Gastrointestinal() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-lg font-bold text-gray-800">
            {/* Walk-ins and Same-Day Appointments */}
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Why Gastrointestinal Care Matters
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Good gastrointestinal (GI) health is essential for digestion,
            nutrient absorption, and overall well-being. Proper care helps
            prevent issues like acid reflux, ulcers, IBS, and chronic digestive
            disorders. Managing GI health reduces discomfort, improves energy
            levels, and supports a strong immune system. Early detection of
            conditions like colon disease can prevent serious complications. A
            healthy gut leads to better digestion, improved metabolism, and
            overall wellness. Taking care of your digestive system ensures
            long-term health and vitality!
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
              src={hero}
              alt="Doctor holding vaccine"
              width={500}
              height={400}
              className="w-full max-w-xs md:min-w-[45vw]"
            />
          </div>
        </div>
      </div>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Get Tested Today
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
    title: "Gastrointestinal Care & Digestive Health | VitalCare Health",
    description:
      "Expert treatment for gastrointestinal issues including IBS, acid reflux, liver and gallbladder conditions, and more at VitalCare Health in Tyrone, GA.",
    keywords:
      "gastrointestinal care, digestive health, acid reflux treatment, IBS management, colonoscopy, endoscopy, liver health, gallbladder treatment, GI specialist Tyrone GA, stomach pain treatment, gut health, VitalCare Health",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/services/gastrointestinal-issues",
      title: "GI & Digestive Health Treatment | VitalCare Health",
      description:
        "Personalized care for acid reflux, IBS, ulcers, and chronic digestive issues. Book a GI consultation today at VitalCare Health in Tyrone, GA.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "Gastrointestinal health checkup at VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Digestive Care & GI Treatment | VitalCare Health",
      description:
        "Manage digestive conditions like reflux and IBS with expert gastrointestinal care at VitalCare Health. Book a consult now.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
