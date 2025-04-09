import Image from "next/image";
import hero from "@/assets/banner.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; // Importing icon

export default function HeroSection() {
  return (
    <div className="h-screen relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>

      <div className="relative z-10 flex items-center h-full px-6 lg:px-20">
        <div className="max-w-3xl text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-cyan-400 drop-shadow-lg">
            Your Health Is Our Priority
          </h1>

          {/* <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white leading-tight">
            Locally Owned <br />
            <span className="text-cyan-300">by Doctors.</span> <br />
            <span className="text-cyan-400">Focused</span> <br />
            <span className="text-cyan-500">on Patients.</span>
          </h2> */}

          {/* <p className="mt-4 text-white text-lg leading-relaxed">
            Experience the difference{" "}
            <span className="font-semibold text-cyan-300">doctor-designed</span>{" "}
            care can make.
          </p> */}
          <br />
          {/* CTA Button with Icon */}
          <Link
            href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 px-2 py-3 text-lg font-semibold text-gray-900 bg-cyan-300 rounded-lg shadow-md hover:bg-cyan-400 transition duration-300"
          >
            ACCEPTING NEW PATIENTS NOW!
            <FaArrowRight className="text-xl hidden lg:block" />
          </Link>
        </div>
      </div>
    </div>
  );
}
