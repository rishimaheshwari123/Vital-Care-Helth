import Image from "next/image";
import hero from "@/assets/whero2.webp";
import Link from "next/link";

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/30"></div>
      </div>

      <div className="relative z-10 flex items-center h-full px-6 lg:px-20">
        <div className="max-w-3xl text-left">
          <h1 className="text-2xl lg:text-4xl max-w-lg font-extrabold text-cyan-400 drop-shadow-lg">
            Why Choose GLP-1 for Weight Loss
          </h1>
          <p className="mt-5 max-w-lg text-xl text-gray-100">
            Are you struggling with weight loss and looking for a clinically
            proven solution? At VitalCare Health, our GLP-1 Weight Management
            Program helps you achieve lasting results with FDA-approved GLP-1
            medications.
          </p>

          {/* CTA Button with Icon */}
          <Link
            href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 px-2 py-3 text-lg font-semibold text-gray-900 bg-cyan-300 rounded-lg shadow-md hover:bg-cyan-400 transition duration-300"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </div>
  );
}
