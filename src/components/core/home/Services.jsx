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
    link: "services/urgent-care-needs",
  },
  {
    title: "Weight Management",
    desc: "Personalized plans for weight loss and maintenance, with guidance on nutrition, exercise, and lifestyle changes.",
    image: a6,
    link: "services/weight-management",
  },
  {
    title: "Annual Physicals",
    desc: "Comprehensive yearly check-ups to assess overall health, monitor progress, and detect potential issues early on.",
    image: a3,
    link: "services/annual-physicals",
  },
  {
    title: "Flu Testing & Treatment",
    desc: "Accurate flu tests and treatment options to ensure rapid recovery and minimize spread.",
    image: a4,
    link: "services/flu-testing-treatment",
  },
  {
    title: "Sports Physicals",
    desc: "Thorough check-ups to assess overall health and detect potential issues before sports participation.",
    image: a5,
    link: "services/sports-physicals",
  },
  {
    title: "COVID-19 Testing",
    desc: "Safe and efficient testing for COVID-19, ensuring early detection and appropriate care.",
    image: a2,
    link: "services/covid-19-testing",
  },

  {
    title: "In-House Labs",
    desc: "Convenient and accurate testing with our in-house labs.",
    image: a7,
    link: "services/in-house-labs",
  },
  {
    title: "Diabetes Management",
    desc: "Comprehensive management of diabetes to ensure optimal blood sugar control and long-term health.",
    image: a8,
    link: "services/diabetes-managements",
  },
  {
    title: "Sore Throat",
    desc: "Quick evaluations and treatment plans to soothe sore throats and promote healing.",
    image: a9,
    link: "services/sore-throat",
  },
  {
    title: "Gastrointestinal Issues",
    desc: "Focused care for digestive problems, offering timely treatment to ease discomfort and improve well-being.",
    image: a10,
    link: "services/gastrointestinal-issues",
  },
  {
    title: "Telemedicine",
    desc: "Convenient virtual consultations for remote healthcare, ensuring accessible and timely medical advice.",
    image: a11,
    link: "services/telemedicine",
  },
  {
    title: " Migraine Relief ",
    desc: "Experience expert care to alleviate migraines and restore your well-being.",
    image: a12,
    link: "services/migraine-relief",
  },
];

const Services = () => {
  return (
    <div className="bg-[#0097a3c3] px-6 py-12">
      <div className="text-center max-w-3xl mb-12 mx-auto">
        <h2 className="text-4xl text-white font-bold">Our Services</h2>
        <p className="text-white mt-2">
          Explore our wide range of health care services designed to meet your
          medical needs with compassion and expertise.
        </p>
      </div>

      <div className="grid p-6 gap-8 lg:grid-cols-4 max-w-6xl md:grid-cols-3 mx-auto sm:grid-cols-2">
        <Fade direction="up">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg duration-300 group overflow-hidden relative transition-all"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full duration-300 group-hover:scale-105 object-cover transition-transform"
                />
                <div className="bg-black bg-opacity-60 p-2 text-center text-white w-full absolute bottom-0">
                  <h3 className="text-lg font-semibold">{treatment.title}</h3>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="flex flex-col bg-black bg-opacity-60 justify-center p-4 text-center absolute duration-300 group-hover:opacity-100 inset-0 items-center opacity-0 transition-opacity">
                <h3 className="text-lg text-white font-semibold">
                  {treatment.title}
                </h3>
                <p className="text-gray-200 text-sm mt-2">{treatment.desc}</p>
                <Link
                  href={treatment?.link}
                  className="flex bg-[#00BFB3] justify-center rounded-md text-white gap-2 hover:bg-[#00a69b] items-center mt-3 px-4 py-2 transition"
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
