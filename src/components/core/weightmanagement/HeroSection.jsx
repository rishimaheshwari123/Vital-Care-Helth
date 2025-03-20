import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-screen relative">
      {/* Background Image with Overlay */}
      <div className="-z-10 absolute inset-0">
        <video
          src={"./Weight.mp4"}
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        />
        <div className="bg-gradient-to-b absolute from-black/30 inset-0 to-black/30 via-black/30"></div>
      </div>

      <div className="flex h-full items-center lg:px-20 px-6 relative z-10">
        <div className="text-left max-w-3xl">
          <h1 className="text-2xl text-cyan-400 drop-shadow-lg font-extrabold lg:text-4xl max-w-lg">
            Why Choose GLP-1 for Weight Loss
          </h1>
          <br />
          <p className="text-gray-100 text-xl max-w-lg mt-5">
            Are you struggling with weight loss and looking for a clinically
            proven solution? At VitalCare Health, our GLP-1 Weight Management
            Program helps you achieve lasting results with FDA-approved GLP-1
            medications.
          </p>
          <br />

          {/* CTA Button with Icon */}
          <Link
            href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-300 rounded-lg shadow-md text-gray-900 text-lg duration-300 font-semibold gap-3 hover:bg-cyan-400 inline-flex items-center mt-6 px-2 py-3 transition"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </div>
  );
}
