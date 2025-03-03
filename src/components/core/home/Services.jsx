"use client";
import Link from "next/link";
import Image from "next/image";
import a1 from "@/assets/hero.png";
import a2 from "@/assets/hero2.png";
import a3 from "@/assets/hero3.png";
import a4 from "@/assets/hero4.png";
import a5 from "@/assets/hero5.png";
import a6 from "@/assets/hero6.png";
import a7 from "@/assets/hero7.png";
import a8 from "@/assets/hero8.png";
import a9 from "@/assets/hero9.png";
import { usePathname } from "next/navigation";
const services = [
  {
    image: a1,
    title: "Effective Migraine Relief Solutions",
    subtitle: "Regain Control, Live Pain-Free",
    description:
      "Experience expert care to alleviate migraines and restore your well-being.",
    link: "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1",
  },
  {
    image: a2,
    title: "Comprehensive Pain Management",
    subtitle: "Relief You Deserve, Mobility You Need",
    description:
      "Specialized treatment to help you overcome pain and enhance your quality of life.",
    link: "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1",
  },
  {
    image: a3,
    title: "Digestive Health & Gas Relief",
    subtitle: "Effective Solutions for Lasting Comfort",
    description:
      "Say goodbye to stomach discomfort with expert digestive care.",
    link: "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1",
  },
  {
    image: a4,
    title: "Protect Yourself from Viral Infections",
    subtitle: "Early Detection, Better Prevention",
    description:
      "Schedule a checkup today for proactive healthcare and peace of mind.",
    link: "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1",
  },
  {
    image: a5,
    title: "Take Charge of Your Diabetes",
    subtitle: "Proactive Care for a Healthier Future",
    description:
      "Manage your diabetes effectively with expert medical guidance and support.",
    link: "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1",
  },
  {
    image: a6,
    title: "Personalized Weight Loss Solutions",
    subtitle: "Start Your Transformation Today",
    description:
      "Achieve your health goals with tailored weight management programs.",
    link: "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1",
  },
  {
    image: a7,
    title: "Advanced Knee Pain Treatment",
    subtitle: "Regain Strength, Restore Mobility",
    description:
      "Expert orthopedic care to help you overcome knee pain and stay active.",
    link: "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1",
  },
  {
    image: a8,
    title: "Your Health is Our Priority",
    subtitle: "Comprehensive Care for a Better You",
    description:
      "Dedicated medical services to support your well-being at every stage.",
    link: "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1",
  },
  {
    image: a9,
    title: "Expert Urology Care",
    subtitle: "Relief from Painful Urination",
    description:
      "Specialized treatment for bladder health and urinary concerns.",
    link: "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1",
  },
];

const Services = () => {
  const path = usePathname("/services");
  return (
    <div className={`${path === "/services" ? "mt-44" : "mt-16"}`}>
      <div className="flex flex-col w-full items-center">
        <h3 className="text-4xl font-fjalla text-[#33536B]">Our Services</h3>
        <div className="flex items-center w-[75px]">
          <div className="h-0.5 bg-yellow-400"></div>
          <div className="h-1 w-1 bg-yellow-400 rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-yellow-400 rounded-full mx-1"></div>
          <div className="h-1 w-1 bg-yellow-400 rounded-full mx-1"></div>
          <div
            className="h-[4px] rounded-full w-[10px] flex-grow"
            style={{ backgroundColor: "#e2571a" }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Image Container */}
            <div className="h-64 w-full">
              <Image
                src={service.image}
                alt={`Service ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Shaded overlay */}
            <div className="absolute inset-0 bg-black/60 bg-opacity-40 z-10"></div>

            {/* Overlay for Title and Subtitle */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 z-20 transition-transform duration-500 ease-in-out group-hover:translate-x-full">
              <h6 className="text-xl font-bold">{service.title}</h6>
              <p className="text-sm">{service.subtitle}</p>
            </div>

            {/* Hidden content */}
            <div className="absolute inset-0 bg-white flex flex-col justify-center items-center text-center p-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20">
              <h6 className="text-xl font-bold">{service.title}</h6>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <Link
                href={service.link}
                className="mt-4 px-4 py-2 bg-[#37b7d7]  text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
