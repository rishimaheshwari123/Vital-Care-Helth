import Image from "next/image";
import doctorImage from "@/assets/service/inhouse/inhouse.avif";
import a1 from "@/assets/service/inhouse/a1.jpg";
import a2 from "@/assets/service/inhouse/a2.jpg";
import a3 from "@/assets/service/inhouse/a3.jpg";

import Link from "next/link";

const fluTests = [
  {
    image: a1,
    title: "Blood Tests",
    description:
      "Comprehensive blood tests are available to assess various health markers, including cholesterol levels, liver function, and complete blood count (CBC), helping to diagnose conditions and monitor health.",
  },
  {
    image: a2,
    title: "Urine Tests",
    description:
      "We perform detailed urine tests to evaluate kidney function, detect urinary tract infections, and monitor overall health, providing quick and accurate results.",
  },
  {
    image: a3,
    title: "Rapid Diagnostic Tests",
    description:
      "Our in-house labs offer rapid diagnostic tests for conditions such as strep throat, flu, and pregnancy, ensuring timely and precise results for effective treatment.",
  },
];

export default function InHouseLab() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-lg font-bold text-gray-800">In-House Labs</h3>
          <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Convenient and Accurate
            <br />
            Diagnostic Testing{" "}
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            At VitalCare Health, we offer in-house laboratory services to
            provide you with fast and reliable diagnostic testing. Our on-site
            labs are equipped to perform a range of tests to quickly and
            accurately diagnose your condition, helping you receive the care you
            need without delay. Located in Tyrone, GA, our skilled healthcare
            professionals ensure efficient processing and interpretation of lab
            results, so you can get the answers and treatment you need promptly.
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
            IN-HOUSE LABS & DIAGNOSTIC TESTING
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Comprehensive COVID-19 Testing & Vaccination
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-6 text-gray-700 text-sm md:text-base">
          <p>
            COVID-19 presents unique challenges that require specialized care
            and attention. At
            <span className="font-bold"> Vital Care</span>, we prioritize
            addressing your specific needs with a comprehensive approach to
            COVID-19 testing and vaccination. Our dedicated team of primary and
            urgent care providers is committed to offering precise and
            compassionate care throughout the testing and treatment process.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4">
            Why Testing is Crucial:
          </h3>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Accurate Diagnosis:</span> We offer
              PCR and Antigen (Rapid) Tests to provide reliable results,
              ensuring accurate diagnosis of COVID-19.
            </li>
            <li>
              <span className="font-bold">Convenience:</span> On-demand testing
              services are available without the need for an appointment, making
              it easier for you to get tested when needed.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-gray-800 mt-4">
            Why Vaccination Matters:
          </h3>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Protection:</span> COVID-19 vaccines
              are essential in preventing severe illness and reducing the spread
              of the virus.
            </li>
            <li>
              <span className="font-bold">Peace of Mind:</span> Getting
              vaccinated protects not only yourself but also those around you,
              contributing to community health.
            </li>
          </ul>

          <p className="mt-4">
            At <span className="font-bold">Vital Care</span>, we simplify your
            healthcare experience by providing all COVID-19 services—testing,
            vaccination, and consultation—during a single visit. Our approach
            ensures efficient and thorough care tailored to your needs.
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
            COVID-19 Tests & Treatments Offered
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
    </div>
  );
}

export const generateMetadata = () => {
  return {
    title: "In-House Lab Testing | Fast Diagnostic Services | VitalCare Health",
    description:
      "VitalCare Health offers in-house lab testing for fast, accurate diagnosis. Blood tests, urine analysis, rapid diagnostics, and COVID-19 tests—all at one location in Tyrone, GA.",
    keywords:
      "in-house lab, diagnostic lab testing, blood tests, urine tests, rapid diagnostic test, on-site lab, urgent care labs, COVID-19 PCR test, strep test, flu test, pregnancy test, VitalCare Health lab services, Tyrone GA healthcare",

    metadataBase: new URL("https://palakchoudhary52.wixsite.com"),
    openGraph: {
      type: "website",
      url: "https://palakchoudhary52.wixsite.com/services/in-house-labs",
      title: "On-Site Lab Testing | Fast & Reliable | VitalCare Health",
      description:
        "Access quick and accurate diagnostic testing at VitalCare Health with our in-house lab. Get blood work, urine tests, and rapid results with no extra travel or delays.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "VitalCare In-House Lab Services",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "In-House Lab Testing | VitalCare Health",
      description:
        "On-site lab testing for blood, urine, and rapid diagnostics at VitalCare Health. Walk in for fast results and personalized treatment in Tyrone, GA.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
