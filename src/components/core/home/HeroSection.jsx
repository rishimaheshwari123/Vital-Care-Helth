import Image from "next/image";
import hero from "@/assets/newbannerII.jpg";
import topLogo from "@/assets/toplogo.avif";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
        <div className="absolute inset-0 bg-[#0a1d3a]/70"></div>
      </div>

      {/* Top Right Logo for Large Devices */}
      <div className="hidden lg:block">
        <div className="absolute lg:top-12 lg:right-20 bg-white p-4 rounded-lg shadow-lg lg:max-w-fit w-[90vw] flex flex-col items-center text-center z-20">
          <Image
            src={topLogo}
            alt="Top Logo"
            className="w-56 h-auto object-contain"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 lg:hidden space-y-6 text-center">
        <Image
          src={topLogo}
          alt="Top Logo"
          className="w-40 rounded-lg bg-white  p-4 h-auto object-contain"
        />
        <h1 className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg">
          Your Health Is Our Priority
        </h1>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <Link
            href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-1 py-3 w-full text-lg font-semibold text-gray-900 bg-cyan-300 rounded-lg shadow-md hover:bg-cyan-400 transition duration-300"
          >
            ACCEPTING NEW PATIENTS NOW!
            <FaArrowRight className="text-xl" />
          </Link>
          <Link
            href="/membership"
            className="flex items-center justify-center gap-2 px-4 py-3 w-full text-lg font-semibold text-cyan-600 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Annual Membership{" "}
            <span className="text-xl font-bold text-red-600">$399</span>
            <FaArrowRight className="text-xl text-cyan-600" />
          </Link>
        </div>
      </div>

      {/* Large Device Layout */}
      <div className="hidden lg:flex relative z-10 flex-row justify-between items-center h-full px-20">
        {/* Left - Heading */}
        <div className="w-1/2 text-left">
          <h1 className="text-6xl font-extrabold text-cyan-400 drop-shadow-lg">
            Your Health Is Our Priority
          </h1>
        </div>

        {/* Right - Buttons */}
        <div className="w-1/2 flex flex-col gap-4 max-w-md ml-auto">
          <Link
            href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-1 py-3 w-full text-lg font-semibold text-gray-900 bg-cyan-300 rounded-lg shadow-md hover:bg-cyan-400 transition duration-300"
          >
            ACCEPTING NEW PATIENTS NOW!
            <FaArrowRight className="text-xl" />
          </Link>
          <Link
            href="/membership"
            className="flex items-center justify-center gap-2 px-4 py-3 w-full text-lg font-semibold text-cyan-600 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Annual Membership{" "}
            <span className="text-xl font-bold text-red-600">$399</span>
            <FaArrowRight className="text-xl text-cyan-600" />
          </Link>
        </div>
      </div>
    </div>
  );
}
