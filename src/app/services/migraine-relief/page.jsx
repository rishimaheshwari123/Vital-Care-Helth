import Image from "next/image";
import doctorImage from "@/assets/Migranne.png";
import Link from "next/link";
import Services from "@/components/core/home/Services";

const Migraine = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-lg font-bold text-gray-800">
            Effective Migraine Relief Solutions
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Experience expert care to alleviate
            <br />
            migraines and restore your well-being.{" "}
          </h1>

          <div className="mt-6">
            <Link
              href={
                "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
              }
              className="bg-[#7ed0e4] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
            >
              Contact Us Today
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center ">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={doctorImage}
              alt="Doctor holding vaccine"
              width={500}
              height={400}
              className="w-full max-w-xs md:min-w-[45vw]"
            />
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Migraine;
