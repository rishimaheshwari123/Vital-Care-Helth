import Image from "next/image";
import hero from "@/assets/ur.avif";
import Link from "next/link";

export default function UrgentHome() {
  return (
    <div className="bg-[#f2f5ef]">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <p className="mt-4  text-xl font-bold leading-relaxed">
              Walk-ins and Same-Day Appointments
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#6bc0d5] leading-tight">
              Locally Owned by Doctors. <br /> Focused on Patients.
            </h2>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              When urgent healthcare needs arise, VitalCare Health is here to
              offer swift and responsive medical attention. Our clinic
              specializes in addressing urgent medical concerns, ensuring you
              receive timely care for non-life-threatening conditions. Located
              in Tyrone, GA, our team of dedicated healthcare professionals is
              committed to providing comprehensive and compassionate urgent care
              services. make.
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
              src={
                "https://static.wixstatic.com/media/11062b_bfcf5102b38c4e90a231f048022bd37a~mv2.jpg/v1/crop/x_0,y_33,w_6720,h_4414/fill/w_1306,h_858,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Grandmother%20and%20Granddaughter.jpg"
              }
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
