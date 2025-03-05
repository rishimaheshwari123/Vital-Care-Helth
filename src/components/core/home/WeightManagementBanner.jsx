"use client";
import Image from "next/image";
import weight from "@/assets/weight.avif";
import ingection from "@/assets/ingection.png";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const WeightManagementBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 flex flex-col md:flex-row items-center w-full gap-8 rounded-lg shadow-lg">
      {/* Left Section - Image */}
      <Fade direction="left" triggerOnce>
        <div className="flex-1 flex justify-center">
          <Image
            src={weight}
            alt="Weight Management"
            width={400}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </Fade>

      {/* Right Section - Content */}
      <Fade direction="right" triggerOnce>
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-4xl font-extrabold text-blue-900 leading-tight">
            Physician-led Weight Management
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            Achieve your health goals with expert guidance!
          </p>
          <blockquote className="text-md text-gray-600 italic">
            "Transforming lives, one pound at a time."
          </blockquote>
          <div className="flex justify-center md:justify-start">
            <Link
              href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default WeightManagementBanner;
