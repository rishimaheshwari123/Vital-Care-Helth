import Image from "next/image";
import img1 from "@/assets/service/covid/rapid.png";
import img2 from "@/assets/service/covid/ox.png";
import img3 from "@/assets/service/covid/anti.png";
import doctorImage from "@/assets/service/covid1.avif";

import Link from "next/link";

export default function Covid() {
  return (
    <div>
      <div className="flex flex-col bg-white items-center md:flex-row md:px-20 md:space-y-0 px-5 py-10 space-y-8">
        {/* Left Content */}
        <div className="text-left md:w-1/2">
          <h1 className="text-gray-800 text-lg font-bold">
            Discover Our COVID-19 Tests
          </h1>
          <h2 className="text-3xl text-black font-bold md:text-4xl mt-2">
            Urgent Care <br />
            <span>COVID-19 Testing</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-4">
            At Vital Care, we provide comprehensive COVID-19 testing and
            vaccination services to support your health throughout the year. Our
            expert team offers precise and reliable testing, along with
            personalized treatment plans to manage COVID-19 effectively. Whether
            you need a test for travel, work, or health concerns, we prioritize
            your well-being with accurate results and dedicated care.
          </p>
          <h2 className="text-black text-lg font-bold md:text-xl mt-4">
            COVID-19 Testing:
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-2">
            <li>
              <strong>Diagnostic Testing:</strong> Accurate tests to detect
              current COVID-19 infections.
            </li>
            <li>
              <strong>Travel and Work Requirements:</strong> Convenient testing
              options for travel or workplace mandates.
            </li>
          </ul>

          <div className="mt-6">
            <Link
              href={
                "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
              }
              className="bg-[#7ed0e4] rounded-lg shadow-lg text-white hover:bg-red-600 px-6 py-3 transition"
            >
              Contact Us Today
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:w-1/2">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <Image
              src={doctorImage}
              alt="Doctor holding vaccine"
              width={500}
              height={400}
              className="w-full max-w-xs md:max-w-xl"
            />
          </div>
        </div>
      </div>

      <section className="bg-gray-100 md:px-20 px-5 py-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-800 text-lg font-bold">
            Discover Our COVID-19 Tests
          </p>
          <h2 className="text-3xl text-black font-bold md:text-4xl mt-2">
            Why COVID Testing and Vaccination Matters
          </h2>
        </div>

        <div className="text-gray-700 text-sm max-w-4xl md:text-base mt-6 mx-auto">
          <p>
            COVID-19 presents unique challenges that require specialized care
            and attention. At <span className="font-semibold">VitalCare</span>,
            we prioritize addressing your specific needs with a comprehensive
            approach to COVID-19 testing and vaccination. Our dedicated team of
            primary and urgent care providers is committed to offering precise
            and compassionate care throughout the testing and treatment process.
          </p>
        </div>

        {/* Two Columns: Testing & Vaccination */}
        <div className="grid gap-8 max-w-4xl md:grid-cols-2 mt-8 mx-auto">
          {/* Testing Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-black text-xl font-bold">
              Why Testing is Crucial:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
              <li>
                <span className="font-semibold">Accurate Diagnosis:</span> We
                offer Antigen (Rapid) Tests to provide reliable results,
                ensuring accurate diagnosis of COVID-19.
              </li>
              <li>
                <span className="font-semibold">Convenience:</span> On-demand
                testing services are available without the need for an
                appointment, making it easier for you to get tested when needed.
              </li>
            </ul>
          </div>

          {/* Vaccination Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-black text-xl font-bold">
              Why Vaccination Matters:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
              <li>
                <span className="font-semibold">Protection:</span> COVID-19
                vaccines are essential in preventing severe illness and reducing
                the spread of the virus.
              </li>
              <li>
                <span className="font-semibold">Peace of Mind:</span> Getting
                vaccinated protects not only yourself but also those around you,
                contributing to community health.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-700 max-w-4xl mt-8 mx-auto">
          <p>
            At <span className="font-semibold">VitalCare</span>, we simplify
            your healthcare experience by providing all COVID-19 services—
            <span className="font-semibold">
              testing, vaccination, and consultation
            </span>
            —during a single visit. Our approach ensures efficient and thorough
            care tailored to your needs.
          </p>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center max-w-4xl mt-6 mx-auto">
          <Link
            href={
              "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            }
            className="bg-red-500 rounded-lg shadow-lg text-white cursor-pointer hover:bg-red-600 px-6 py-3 transition"
          >
            Get Tested Today
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-3xl text-blue-900 font-bold md:text-4xl">
            COVID-19 Tests & Treatments Offered
          </h2>
        </div>

        <div className="grid gap-8 max-w-5xl md:grid-cols-2 mt-8 mx-auto">
          {/* Rapid COVID Testing */}
          <div className="flex flex-col items-center lg:flex-row space-x-6">
            <div className="border-4 border-blue-900 rounded-full min-w-[10vw] overflow-hidden">
              <Image
                src={img1}
                alt="COVID Test"
                objectFit="cover"
                className="h-full rounded-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-blue-900 text-lg font-bold">
                Rapid COVID Testing (Antigen):
              </p>
              <p className="text-gray-700">
                Our Rapid COVID Test Antigen Service provides quick and accurate
                results. We collect a nasal or throat swab and conduct an
                on-site analysis, delivering results within minutes for
                efficient diagnosis and peace of mind.
              </p>
            </div>
          </div>

          {/* Oxygen Saturation Monitoring */}
          <div className="flex flex-col items-center lg:flex-row space-x-6">
            <div className="border-4 border-blue-900 rounded-full min-w-[10vw] overflow-hidden">
              <Image
                src={img2}
                alt="Oxygen Monitoring"
                objectFit="cover"
                className="h-full rounded-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-blue-900 text-lg font-bold">
                Oxygen Saturation Monitoring:
              </p>
              <p className="text-gray-700">
                During your visit, we will measure your oxygen saturation using
                a non-invasive handheld device. This helps ensure your oxygen
                levels are within a healthy range, which is crucial for
                effective COVID-19 treatment.
              </p>
            </div>
          </div>

          {/* Antiviral Medications */}
          <div className="flex flex-col items-center lg:flex-row space-x-6">
            <div className="border-4 border-blue-900 rounded-full min-w-[10vw] overflow-hidden">
              <Image
                src={img3}
                alt="Antiviral Medication"
                objectFit="cover"
                className="h-full rounded-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-blue-900 text-lg font-bold">
                Antiviral Medications for COVID:
              </h2>
              <p className="text-gray-700">
                We offer prescription antiviral medications to treat COVID-19,
                available for eligible patients. These medications can help
                alleviate symptoms sooner and prevent serious complications.
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
    title: "COVID-19 Testing & Vaccination | Rapid Tests | VitalCare Health",
    description:
      "Get fast and reliable COVID-19 testing and vaccination at VitalCare Health. Rapid Antigen Tests, travel clearance, oxygen monitoring, and antiviral treatment—no appointment needed.",
    keywords:
      "COVID-19 testing, rapid COVID test, COVID-19 vaccine, travel COVID test, antigen testing, workplace COVID test, oxygen monitoring, antiviral medication for COVID, COVID diagnosis, urgent care COVID testing, same-day COVID test, VitalCare Health COVID services",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/services/covid-19-testing",
      title:
        "COVID-19 Testing & Vaccination | Reliable Rapid Tests | VitalCare",
      description:
        "Visit VitalCare Health for accurate COVID-19 testing and fast results. We offer vaccination, rapid antigen testing, and antiviral treatment—all in one visit.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "COVID-19 Testing at VitalCare",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "COVID-19 Testing | VitalCare Health",
      description:
        "Fast, walk-in COVID-19 tests and vaccines at VitalCare Health. Get diagnosed and treated quickly with same-day rapid results and expert care.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
