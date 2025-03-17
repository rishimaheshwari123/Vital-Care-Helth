import Image from "next/image";
import img1 from "@/assets/service/covid/rapid.png";
import img2 from "@/assets/service/covid/ox.png";
import img3 from "@/assets/service/covid/anti.png";
import doctorImage from "@/assets/service/covid1.avif";

import Link from "next/link";

export default function Covid() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-lg font-bold text-gray-800">
            Discover Our COVID-19 Tests
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Urgent Care <br />
            <span>COVID-19 Testing</span>
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            At Vital Care, we provide comprehensive COVID-19 testing and
            vaccination services to support your health throughout the year. Our
            expert team offers precise and reliable testing, along with
            personalized treatment plans to manage COVID-19 effectively. Whether
            you need a test for travel, work, or health concerns, we prioritize
            your well-being with accurate results and dedicated care.
          </p>
          <h2 className="text-lg md:text-xl font-bold text-black mt-4">
            COVID-19 Testing:
          </h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 text-sm md:text-base">
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
              className="bg-[#7ed0e4] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
            >
              Contact Us Today
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
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

      <section className="bg-gray-100 py-10 px-5 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-bold text-gray-800">
            Discover Our COVID-19 Tests
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Why COVID Testing and Vaccination Matters
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-6 text-gray-700 text-sm md:text-base">
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
        <div className="max-w-4xl mx-auto mt-8 grid gap-8 md:grid-cols-2">
          {/* Testing Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-black">
              Why Testing is Crucial:
            </h3>
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
            <h3 className="text-xl font-bold text-black">
              Why Vaccination Matters:
            </h3>
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
        <div className="max-w-4xl mx-auto mt-8 text-center text-gray-700">
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
          {/* Rapid COVID Testing */}
          <div className="flex flex-col lg:flex-row items-center space-x-6">
            <div className="">
              <Image
                src={img1}
                alt="COVID Test"
                objectFit="cover"
                className="rounded-full w-[41vw] h-32 border-4 border-blue-900"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Rapid COVID Testing (Antigen):
              </h3>
              <p className="text-gray-700">
                Our Rapid COVID Test Antigen Service provides quick and accurate
                results. We collect a nasal or throat swab and conduct an
                on-site analysis, delivering results within minutes for
                efficient diagnosis and peace of mind.
              </p>
            </div>
          </div>

          {/* Oxygen Saturation Monitoring */}
          <div className="flex flex-col lg:flex-row items-center space-x-6">
            <div className="">
              <Image
                src={img2}
                alt="Oxygen Monitoring"
                objectFit="cover"
                className="rounded-full w-[40vw] h-32 border-4 border-blue-900"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Oxygen Saturation Monitoring:
              </h3>
              <p className="text-gray-700">
                During your visit, we will measure your oxygen saturation using
                a non-invasive handheld device. This helps ensure your oxygen
                levels are within a healthy range, which is crucial for
                effective COVID-19 treatment.
              </p>
            </div>
          </div>

          {/* Antiviral Medications */}
          <div className="flex flex-col lg:flex-row items-center space-x-6">
            <div className="">
              <Image
                src={img3}
                alt="Antiviral Medication"
                objectFit="cover"
                className="rounded-full w-[35vw] h-32 border-4 border-blue-900"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Antiviral Medications for COVID:
              </h3>
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
