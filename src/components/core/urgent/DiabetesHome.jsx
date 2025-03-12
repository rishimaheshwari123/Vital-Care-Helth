import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/service/diabties/hero.png";
export default function DiabetesHome() {
  return (
    <div className="bg-[#f2f5ef]">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            {/* <p className="mt-4  text-xl font-bold leading-relaxed">
              Why Diabetes Management Matters
            </p> */}
            <h2 className="text-3xl lg:text-5xl font-bold text-[#6bc0d5] leading-tight">
              Why Diabetes Management Matters
            </h2>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Proper diabetes management helps maintain stable blood sugar
              levels and prevents serious complications like heart disease,
              kidney failure, and nerve damage. It enhances daily energy,
              improves focus, and reduces fatigue. Managing diabetes also
              protects vision, supports heart health, and lowers the risk of
              high blood pressure. With the right care, individuals can prevent
              long-term complications and lead a healthier, more active life.
              Taking control of diabetes today ensures better well-being and
              longevity!
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

          <div className="">
            <Image
              src={hero}
              width={300}
              height={400}
              alt="Doctor and Patient"
              className="rounded-lg shadow-md shadow-yellow-500 min-w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
