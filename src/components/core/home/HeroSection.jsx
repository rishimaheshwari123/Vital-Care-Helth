import Image from "next/image";
import hero from "@/assets/hero.png";
import Link from "next/link";

export default function HereSection() {
  return (
    <div className="bg-[#f2f5ef]">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#6bc0d5] leading-tight">
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
            >
              <span className="inline-block mt-6 px-8 py-3 text-lg font-semibold text-gray-900 bg-[#c5dee4] rounded-lg shadow-md hover:bg-[#b0cbd7] transition duration-300 cursor-pointer">
                ACCEPTING NEW PATIENTS NOW!
              </span>
            </Link>
          </div>

          <div className="flex justify-center">
            <Image
              src={hero}
              alt="Doctor and Patient"
              className="rounded-lg shadow-md shadow-yellow-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
