import Image from "next/image";
import weight from "@/assets/weight.avif";
import ingection from "@/assets/ingection.png";
import Link from "next/link";
const WeightManagementBanner = () => {
  return (
    <div className="bg-white border-t-4 border-blue-900 p-6 flex flex-col lg:flex-row items-center justify-between w-full">
      {/* Left Section - Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src={weight}
          alt="Weight Management"
          width={300} // Adjust width as needed
          height={400} // Adjust height as needed
          className="max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>

      {/* Middle Section - Content */}
      <div className="flex-1 text-center lg:text-left px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Physician lead Weight <br /> Management Program
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          ACHIEVE YOUR HEALTH GOALS WITH EXPERT GUIDANCE!
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">
          "TRANSFORMING LIVES, ONE POUND AT A TIME."
        </p>
        <br />
        <Link
          href={
            "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
          }
          className="bg-red-600 text-white px-6 py-2 rounded-full mt-4 text-lg font-semibold hover:bg-red-700"
        >
          Book Now
        </Link>
      </div>

      {/* Right Section - Information */}
      <div className="flex-1 flex flex-col items-center lg:items-end px-4 space-y-6">
        <div className="flex items-center space-x-2">
          <div className="text-blue-900 text-lg font-semibold">
            Compounded Semaglutide
          </div>
          <Image
            src={ingection}
            alt="Semaglutide"
            width={40}
            height={40}
            className="w-20 h-20"
          />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-blue-900 text-lg font-semibold">
            Compounded Tirzepatide
          </div>
          <Image
            src={ingection}
            alt="Tirzepatide"
            width={80}
            height={80}
            className="w-20 h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default WeightManagementBanner;
