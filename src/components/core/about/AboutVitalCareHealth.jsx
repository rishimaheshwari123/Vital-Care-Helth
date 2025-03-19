import Image from "next/image";
import hero from "@/assets/dr.png";
import Link from "next/link";
export default function AboutVitalCareHealth() {
  return (
    <div className="py-2 px-6">
      <br />
      <br />
      <div className="max-w-7xl mx-auto ">
        {/* Main Title */}
        <h1 className="text-3xl text-center lg:text-3xl font-extrabold text-[#058790c3]">
          About VitalCare Health
        </h1>

        {/* Introduction */}
        <p className="my-8 text-xl text-center lg:text-2xl font-bold text-gray-800">
          More than just a healthcare provider – we are your health partners!
        </p>

        <div className="">
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div className="text-center lg:text-left">
                <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                  VitalCare Health is a primary care and urgent care health
                  center, dedicated to providing exceptional medical assistance
                  and weight management services.
                </p>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                  Our team of experienced doctors and healthcare professionals
                  is committed to offering top-notch medical care. We believe in
                  a holistic approach to health, combining cutting-edge medical
                  expertise with personalized care to help you achieve your
                  wellness goals.
                </p>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                  Founded on the principles of compassion, innovation, and
                  excellence, we strive to make a meaningful impact on your
                  health journey.
                </p>

                <Link
                  href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
                  target="_blank"
                  rel="noopener noreferrer"
                ></Link>
              </div>

              <div className="">
                <Image
                  src={hero}
                  width={300}
                  height={400}
                  alt="Doctor and Patient"
                  className="rounded-lg shadow-md shadow-yellow-500 min-w-full h-full"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Our Story - Highlighted Box */}
        <div className="bg-white shadow-md p-6 mt-8 max-w-2xl mx-auto rounded-lg border-l-4 border-[#0477BF]">
          <h2 className="text-lg font-semibold text-[#0477BF]">Our Story</h2>
          <p className="text-gray-700 mt-2">
            Our journey began with a simple yet powerful idea: healthcare should
            be as much about prevention and empowerment as it is about
            treatment. Whether you’re seeking urgent medical attention, guidance
            for a chronic condition, or embarking on a journey to better health
            through weight management, we’re here to walk alongside you every
            step of the way.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Why Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
            {[
              "Patient-Centered Care",
              "Compassion in Action",
              "Expert Team",
              "Holistic Approach",
              "Convenient Access",
              "Proven Results",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-[#0097a3c3] shadow-md rounded-lg border text-white border-gray-200"
              >
                <span className="text-white text-xl">✔</span>
                <span className="ml-3  text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Promise Section */}
        <div className="mt-12 text-gray-800 max-w-4xl mx-auto">
          <h2 className="text-2xl text-center font-bold">Our Promise to You</h2>

          <div className="bg-white shadow-md p-6 mt-8 max-w-2xl mx-auto rounded-lg border-l-4 border-[#0477BF]">
            <p className="mt-4">
              At VitalCare, your well-being is our purpose. We’re not just here
              to provide care – we’re here to inspire healthier, happier lives.
              Every patient we serve is a testament to our mission: to make a
              meaningful, lasting impact on the health of our community.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 py-6 border-t text-gray-600 text-center">
          <p className="text-lg font-semibold">
            Healthcare is more than a service; it’s a partnership.
          </p>
        </div>
      </div>
    </div>
  );
}
