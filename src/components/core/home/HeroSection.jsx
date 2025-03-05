import Image from "next/image";
import hero from "@/assets/banner.jpg";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-screen relative">
      {/* Background Image Covering Entire Section */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex items-center h-full px-6 lg:px-20">
        <div className="max-w-3xl">
          <div className="">
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-700">
              Your Health
            </h1>
            <div className="flex items-center ">
              <div className="w-14 h-[2px] bg-blue-700"></div>
              <span className="mx-2 text-2xl lg:text-4xl font-bold text-red-600">
                is our
              </span>
              <div className="w-14 h-[2px] bg-blue-700"></div>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-red-600 mt-2">
              PRIORITY
            </h1>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900">
            Locally Owned by Doctors. <br /> Focused on Patients.
          </h2>
          <p className="mt-4 text-gray-800 text-lg leading-relaxed">
            Experience the difference{" "}
            <span className="font-semibold">doctor-designed</span> care can
            make.
          </p>

          <Link
            href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-gray-900 bg-[#c5dee4] rounded-lg shadow-md hover:bg-[#b0cbd7] transition duration-300 cursor-pointer">
              ACCEPTING NEW PATIENTS NOW!
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
