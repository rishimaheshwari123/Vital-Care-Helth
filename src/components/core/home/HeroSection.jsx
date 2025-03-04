import Image from "next/image";
import hero from "@/assets/banner.jpg";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-[#f2f5ef]">
      {/* Background Image for Large Screens */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={hero}
          alt="not found"
          className="w-full h-[70vh] object-cover"
        />
      </div>

      <section className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 gap-12 items-center">
        {/* Content */}
        <div className="relative z-10 text-left bg-[#f2f5ef] bg-opacity-90 p-6 rounded-md lg:bg-transparent">
          <h2 className="text-3xl lg:text-5xl font-bold  leading-tight">
            Locally Owned by Doctors. <br /> Focused on Patients.
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Experience the difference{" "}
            <span className="font-semibold">doctor-designed</span> care can
            make.
          </p>

          <Link
            href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex md:justify-start justify-center"
          >
            <span className="inline-block mt-6 px-4 md:px-8 py-3 text-[14px] md:text-lg font-semibold text-gray-900 bg-[#c5dee4] rounded-lg shadow-md hover:bg-[#b0cbd7] transition duration-300 cursor-pointer">
              ACCEPTING NEW PATIENTS NOW!
            </span>
          </Link>
        </div>
      </section>

      {/* Image as Background for Small Screens */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={hero}
          alt="not found"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
