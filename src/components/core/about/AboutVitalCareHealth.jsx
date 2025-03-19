export default function AboutVitalCareHealth() {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0477BF]">
          About VitalCare Health
        </h1>

        {/* Introduction */}
        <p className="mt-4 text-xl lg:text-2xl font-bold text-gray-800">
          More than just a healthcare provider – we are your health partners!
        </p>
        <p className="mt-2 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          VitalCare Health is a primary care and urgent care health center,
          dedicated to providing exceptional medical assistance and weight
          management services.
        </p>

        {/* Content Section */}
        <div className="mt-8 text-gray-700 max-w-4xl mx-auto leading-relaxed">
          <p>
            Our team of experienced doctors and healthcare professionals is
            committed to offering top-notch medical care. We believe in a
            holistic approach to health, combining cutting-edge medical
            expertise with personalized care to help you achieve your wellness
            goals.
          </p>
          <p className="mt-4 font-semibold">
            Founded on the principles of compassion, innovation, and excellence,
            we strive to make a meaningful impact on your health journey.
          </p>
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
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Why Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-gray-700 text-lg">
            <div>✔ Patient-Centered Care</div>
            <div>✔ Compassion in Action</div>
            <div>✔ Expert Team</div>
            <div>✔ Holistic Approach</div>
            <div>✔ Convenient Access</div>
            <div>✔ Proven Results</div>
          </div>
        </div>

        {/* Our Promise Section */}
        <div className="mt-12 text-gray-800 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold">Our Promise to You</h2>
          <p className="mt-4">
            At VitalCare, your well-being is our purpose. We’re not just here to
            provide care – we’re here to inspire healthier, happier lives. Every
            patient we serve is a testament to our mission: to make a
            meaningful, lasting impact on the health of our community.
          </p>
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
