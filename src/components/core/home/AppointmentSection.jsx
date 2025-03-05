import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import book from "@/assets/book.png";
import Link from "next/link";

export default function AppointmentSection() {
  return (
    <section className="grid lg:grid-cols-2 max-w-7xl mx-auto p-5 items-center gap-5">
      <div className=" text-center md:text-left">
        <h5 className="text-sm text-[#0096A5] font-semibold uppercase">
          The Path to a Healthier Heart Awaits!
        </h5>
        <h2 className="text-4xl font-bold mt-2 leading-tight">
          Same Day Appointments!
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          If you choose a date and time during our regular business hours, we
          can see you that same day and take care of you!
        </p>
        <div className="flex items-center mt-4 space-x-3">
          <FaPhoneAlt className="text-[#0096A5]" />
          <span className="text-lg font-semibold">+1 (470) 851-3800</span>
        </div>
        <div className="flex items-center mt-2 space-x-3">
          <MdEmail className="text-[#0096A5]" />
          <span className="text-lg font-semibold">info@vitalcarega.com</span>
        </div>
        <br />
        <Link
          href={
            "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
          }
          className="mt-6 px-6 py-3 bg-[#0096A5] text-white font-bold rounded-md hover:bg-[#007a85] transition"
        >
          Book An Appointment
        </Link>
      </div>
      <div className="">
        <Image src={book} alt="Appointment Form" />
      </div>
    </section>
  );
}
