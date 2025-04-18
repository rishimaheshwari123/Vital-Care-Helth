import Image from "next/image";
import hero from "@/assets/banner.jpg";
import topLogo from "@/assets/toplogo.avif"; // Make sure this is in your assets
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>

      {/* Top Right Box */}
      <div className="hidden lg:block">
        <div className="absolute  lg:top-12 lg:right-5 bg-white p-4 rounded-lg shadow-lg lg:max-w-sm w-[90vw] flex flex-col items-center text-center z-20 ">
          <p className="text-sm text-gray-800 mb-3">
            <span className="font-semibold">Proudly part of Piedmont</span>,
            provides fast, expert medical care near you. Walk in anytime for
            top-quality treatment from trusted professionals!
          </p>
          <Image
            src={topLogo}
            alt="Top Logo"
            className="w-56 h-auto object-contain"
          />
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="absolute top-16 right-0 lg:top-12 lg:right-5 bg-white p-4 rounded-lg shadow-lg sm:max-w-none w-[90vw] flex flex-col items-center text-center z-20 left-1/2 transform -translate-x-1/2">
          <p className="text-sm text-gray-800 mb-3">
            <span className="font-semibold">Proudly part of Piedmont</span>,
            provides fast, expert medical care near you. Walk in anytime for
            top-quality treatment from trusted professionals!
          </p>
          <Image
            src={topLogo}
            alt="Top Logo"
            className="w-40 h-auto object-contain"
          />
        </div>
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 flex items-center h-full px-6 lg:px-20">
        <div className="max-w-3xl text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-cyan-400 drop-shadow-lg">
            Your Health Is Our Priority
          </h1>

          <Link
            href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 px-2 py-3 text-lg font-semibold text-gray-900 bg-cyan-300 rounded-lg shadow-md hover:bg-cyan-400 transition duration-300"
          >
            ACCEPTING NEW PATIENTS NOW!
            <FaArrowRight className="text-xl hidden lg:block" />
          </Link>
          <br />
          <br />
          <Link
            href="/membership"
            className="bg-white rounded-xl shadow-md px-6 py-1 text-center inline-block"
          >
            <div className="text-lg font-semibold text-cyan-600">Annual</div>
            <div className="text-lg font-semibold text-cyan-600">
              Membership
            </div>
            <div className="text-xl font-bold text-red-600 mt-1">$399</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
