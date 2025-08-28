"use client";
import Link from "next/link";

export default function UrgentHome() {
  return (
    <div className="h-screen relative">
      {/* Background Video */}
      <div className="-z-10 absolute inset-0">
        <video
          src="./Urgent.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full absolute object-cover"
        />
        <div className="bg-gradient-to-b absolute from-black/40 inset-0 to-black/60 via-black/50"></div>
      </div>

      {/* Content */}
      <div className="flex h-full justify-start items-center max-w-11/12 mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-white text-xl font-bold leading-relaxed">
            Walk-ins and Same-Day Appointments
          </p>
          <h2 className="text-3xl text-cyan-400 font-bold leading-tight lg:text-4xl mt-5">
            Locally Owned by Doctors.
          </h2>
          <h2 className="text-2xl text-cyan-400 font-bold leading-tight lg:text-3xl">
            Focused on Patients.
          </h2>
          <p className="text-lg text-white leading-relaxed lg:text-xl mt-5">
            When urgent healthcare needs arise, VitalCare Health is here to
            offer swift and responsive medical attention. Our clinic specializes
            in addressing urgent medical concerns{" "}
            <span className="hidden lg:inline">
              , ensuring you receive timely care for non-life-threatening
              conditions.Located in Peachtree, GA, our team of dedicated healthcare
              professionals is committed to providing comprehensive and
              compassionate urgent care services.
            </span>
          </p>
          <br />

          <Link
            href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-[#0097a3c3] rounded-lg shadow-md text-center text-lg text-white cursor-pointer duration-300 font-semibold hover:bg-[#5aaabd] inline-block mt-6 px-8 py-3 transition">
              ACCEPTING NEW PATIENTS NOW!
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
