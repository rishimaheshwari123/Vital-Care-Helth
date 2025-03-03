import Image from "next/image";
import founderImage from "@/assets/founder.avif"; // Ensure the correct image path
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-[#0477BF]">
          About VitalCare Health
        </h1>
        <p className="mt-6 text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
          VitalCare Health is a primary care and urgent care health center,
          dedicated to providing exceptional medical assistance and weight
          management services. Our team of experienced doctors and healthcare
          professionals is committed to offering top-notch medical care. We
          prioritize our patients' well-being and strive to make a meaningful
          impact on their health.
        </p>
      </div>
      {/* Founder Section */}
      <div className="max-w-6xl mx-auto mt-20 flex flex-col md:flex-row items-center bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <div className="w-48 h-48 flex-shrink-0 overflow-hidden rounded-full border-4 border-[#0477BF] shadow-lg">
          <Image
            src={founderImage}
            alt="Dr. Hardik Parekh"
            width={192}
            height={192}
            className="object-cover"
          />
        </div>
        <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Founder</h2>
          <h3 className="text-lg font-semibold text-gray-600 mt-2">
            Dr. Hardik Parekh, MD MPH
          </h3>
          <p className="text-md text-gray-500">Owner & Medical Director</p>
          <p className="mt-5 text-gray-700 leading-relaxed text-lg">
            Dr. Hardik Parekh, MD, MPH, is a board-certified medical director
            and the founder of VitalCare Health. With over a decade of
            experience in emergency medicine, he is dedicated to delivering the
            highest quality of healthcare services to his patients.
          </p>
          <p className="mt-4 text-gray-700 text-lg">
            He is board-certified by the American Board of Family Medicine and
            is affiliated with Piedmont Hospitals, ensuring trusted and reliable
            care for the community.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Link
          className="bg-[#c5dee4] px-5 py-2 rounded-2xl"
          href={
            "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
          }
        >
          Book Now
        </Link>{" "}
      </div>
    </div>
  );
}
