import Image from "next/image";
import hero from "@/assets/dr.png";
import Link from "next/link";
export default function AboutVitalCareHealth() {
  return (
    <div className="px-6 py-2">
      <br />
      <br />
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 className="text-[#058790c3] text-3xl text-center font-extrabold lg:text-3xl">
          About VitalCare Health
        </h1>

        {/* Introduction */}
        <p className="text-center text-gray-800 text-xl font-bold lg:text-2xl my-8">
          More than just a healthcare provider – we are your health partners!
        </p>

        <div className="">
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
              {/* Left Side */}
              <div className="text-center lg:text-left">
                <p className="text-gray-700 text-xl leading-relaxed mt-4">
                  VitalCare Health is a primary care and urgent care health
                  center, dedicated to providing exceptional medical assistance
                  and weight management services.
                </p>
                <p className="text-gray-700 text-xl leading-relaxed mt-4">
                  Our team of experienced doctors and healthcare professionals
                  is committed to offering top-notch medical care. We believe in
                  a holistic approach to health, combining cutting-edge medical
                  expertise with personalized care to help you achieve your
                  wellness goals.
                </p>
                <p className="text-gray-700 text-xl leading-relaxed mt-4">
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
                  height={200}
                  alt="Doctor and Patient"
                  className="min-w-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Our Story - Highlighted Box */}
        <div className="bg-white border-[#0477BF] border-l-4 p-6 rounded-lg shadow-md max-w-2xl mt-8 mx-auto">
          <h2 className="text-[#0477BF] text-lg font-semibold">Our Story</h2>
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
        <div className="text-center mt-12">
          <h2 className="text-2xl text-gray-900 font-bold">Why Choose Us</h2>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 md:grid-cols-3 mt-6">
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
                className="flex bg-[#0097a3c3] border border-gray-200 p-4 rounded-lg shadow-md text-white items-center"
              >
                <span className="text-white text-xl">✔</span>
                <span className="text-lg ml-3">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Promise Section */}
        <div className="text-gray-800 max-w-4xl mt-12 mx-auto">
          <h2 className="text-2xl text-center font-bold">Our Promise to You</h2>

          <div className="bg-white border-[#0477BF] border-l-4 p-6 rounded-lg shadow-md max-w-2xl mt-8 mx-auto">
            <p className="mt-4">
              At VitalCare, your well-being is our purpose. We’re not just here
              to provide care – we’re here to inspire healthier, happier lives.
              Every patient we serve is a testament to our mission: to make a
              meaningful, lasting impact on the health of our community.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t text-center text-gray-600 mt-12 py-6">
          <p className="text-lg font-semibold">
            Healthcare is more than a service; it’s a partnership.
          </p>
        </div>
      </div>
    </div>
  );
}
