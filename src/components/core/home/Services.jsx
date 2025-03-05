// "use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import a1 from "@/assets/Urgent.png";
import a2 from "@/assets/Covid.png";
import a3 from "@/assets/Annual.png";
import a4 from "@/assets/Flu.png";
import a5 from "@/assets/Sports.png";
import a6 from "@/assets/Weight.png";
import a7 from "@/assets/In.png";
import a8 from "@/assets/Diabetic.png";
import a9 from "@/assets/Sore.png";
import a10 from "@/assets/Gastroitestonal.png";
import a11 from "@/assets/telemedicine.jpg";
import a12 from "@/assets/Migranne.png";

const treatments = [
  {
    title: "Urgent Care Needs",
    desc: "Prompt care for immediate medical concerns, ensuring timely attention and relief.",
    image: a1,
    link: "urgent-care-needs",
  },
  {
    title: "COVID-19 Testing",
    desc: "Safe and efficient testing for COVID-19, ensuring early detection and appropriate care.",
    image: a2,
    link: "covid-19-testing",
  },
  {
    title: "Annual Physicals",
    desc: "Comprehensive yearly check-ups to assess overall health, monitor progress, and detect potential issues early on.",
    image: a3,
    link: "annual-physicals",
  },
  {
    title: "Flu Testing & Treatment",
    desc: "Accurate flu tests and treatment options to ensure rapid recovery and minimize spread.",
    image: a4,
    link: "flu-testing-treatment",
  },
  {
    title: "Sports Physicals",
    desc: "Thorough check-ups to assess overall health and detect potential issues before sports participation.",
    image: a5,
    link: "sports-physicals",
  },
  {
    title: "Weight Management",
    desc: "Personalized plans for weight loss and maintenance, with guidance on nutrition, exercise, and lifestyle changes.",
    image: a6,
    link: "weight-management",
  },
  {
    title: "In-House Labs",
    desc: "Convenient and accurate testing with our in-house labs.",
    image: a7,
    link: "in-house-labs",
  },
  {
    title: "Diabetes Management",
    desc: "Comprehensive management of diabetes to ensure optimal blood sugar control and long-term health.",
    image: a8,
    link: "diabetes-management",
  },
  {
    title: "Sore Throat",
    desc: "Quick evaluations and treatment plans to soothe sore throats and promote healing.",
    image: a9,
    link: "sore-throat",
  },
  {
    title: "Gastrointestinal Issues",
    desc: "Focused care for digestive problems, offering timely treatment to ease discomfort and improve well-being.",
    image: a10,
    link: "gastrointestinal-issues",
  },
  {
    title: "Telemedicine",
    desc: "Convenient virtual consultations for remote healthcare, ensuring accessible and timely medical advice.",
    image: a11,
    link: "telemedicine",
  },
  {
    title: " Migraine Relief ",
    desc: "Experience expert care to alleviate migraines and restore your well-being.",
    image: a12,
    link: "migraine-relief",
  },
];

const Services = () => {
  return (
    <div className="bg-[#c2f6f5] py-12 px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="text-gray-700 mt-2">
          Explore our wide range of health care services designed to meet your
          medical needs with compassion and expertise.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 p-6">
        <Fade direction="up" cascade damping={0.1}>
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center p-2">
                  <h3 className="text-lg font-semibold">{treatment.title}</h3>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="text-lg font-semibold text-white">
                  {treatment.title}
                </h3>
                <p className="text-gray-200 text-sm mt-2">{treatment.desc}</p>
                <Link
                  href={treatment?.link}
                  className="mt-3 flex items-center justify-center gap-2 bg-[#00BFB3] text-white px-4 py-2 rounded-md hover:bg-[#00a69b] transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Services;
