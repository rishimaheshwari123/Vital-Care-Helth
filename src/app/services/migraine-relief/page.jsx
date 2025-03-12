import Image from "next/image";
import Link from "next/link";

import a1 from "@/assets/service/migrane/m1.png";
import a2 from "@/assets/service/migrane/m2.png";
import a3 from "@/assets/service/migrane/m3.png";
import a4 from "@/assets/service/migrane/m4.png";
import a5 from "@/assets/service/migrane/m5.png";
import a6 from "@/assets/service/migrane/m6.png";
import hero from "@/assets/service/migrane/hero.png";

const fluTests = [
  {
    image: a1,
    title: "Migraine Diagnosis & Evaluation",
    description:
      "Our specialists conduct thorough assessments to identify migraine triggers and provide personalized treatment plans.",
  },
  {
    image: a2,
    title: "Prescription Migraine Medications",
    description:
      "We offer effective medications, including triptans and preventive therapies, to help manage migraine attacks and reduce their frequency.",
  },
  {
    image: a3,
    title: "Botox for Chronic Migraines",
    description:
      "For those suffering from frequent migraines, Botox injections can help prevent attacks and provide long-term relief.",
  },
  {
    image: a4,
    title: "Lifestyle & Trigger Management",
    description:
      "Our experts help identify migraine triggers and provide guidance on diet, sleep, and stress management to minimize episodes.",
  },
  {
    image: a5,
    title: "Cognitive & Behavioral Therapy",
    description:
      "We offer therapy options to help manage migraine-related stress, anxiety, and other contributing factors.",
  },
  {
    image: a6,
    title: "Online Follow-up & Support",
    description:
      "VitalCare Health’s virtual consultations ensure continuous care, medication adjustments, and expert support for migraine management.",
  },
];

const Migraine = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-lg font-bold text-gray-800">
            {/* Walk-ins and Same-Day Appointments */}
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Why Migraine Relief Matters
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Effective migraine management reduces the frequency and severity of
            attacks, improving daily productivity and quality of life. Untreated
            migraines can lead to chronic pain, fatigue, and sensitivity to
            light and sound. Proper care helps identify triggers, prevent future
            episodes, and reduce dependency on pain medications. Managing
            migraines also supports mental well-being by lowering stress and
            anxiety. With the right treatment, individuals can regain control
            and live a more comfortable, pain-free life!
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
};

export default Migraine;
