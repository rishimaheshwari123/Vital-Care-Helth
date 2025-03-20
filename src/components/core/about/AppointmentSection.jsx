import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import book from "@/assets/phone.png";
import Link from "next/link";

export default function AppointmentSection() {
  return (
    <div className="bg-white">
      <section className="grid p-5 gap-5 items-center lg:grid-cols-2 max-w-7xl mx-auto py-20">
        <div className="text-center md:text-left">
          <h5 className="text-[#0097a3c3] text-sm font-semibold uppercase">
            The Path to a Healthier Heart Awaits!
          </h5>
          <h2 className="text-4xl font-bold leading-tight mt-2">
            Same Day Appointments!
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            If you choose a date and time during our regular business hours, we
            can see you that same day and take care of you!
          </p>
          <div className="flex items-center mt-4 space-x-3">
            <FaPhoneAlt className="text-[#0097a3c3]" />
            <span className="text-lg font-semibold">+1 (470) 851-3800</span>
          </div>
          <div className="flex items-center mt-2 space-x-3">
            <MdEmail className="text-[#0097a3c3]" />
            <span className="text-lg font-semibold">info@vitalcarega.com</span>
          </div>
          <br />
          <Link
            href={
              "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            }
            className="bg-[#0097a3c3] rounded-md text-white font-bold hover:bg-[#007a85] mt-6 px-6 py-3 transition"
          >
            Book An Appointment
          </Link>
        </div>
        <div className="">
          <Image src={book} alt="Appointment Form" />
        </div>
      </section>
    </div>
  );
}
