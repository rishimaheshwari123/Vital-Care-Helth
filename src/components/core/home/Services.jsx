"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
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
import a13 from "@/assets/ingection.png";

const treatments = [
  {
    title: "IV Hydration Therapy",
    desc: "Fast, effective hydration therapy to replenish fluids, electrolytes, and nutrients. Relieve dehydration, boost energy, and support recovery from illness or workouts.",
    image: a13,
    link: "services/iv-hydration-therapy",
    isNew: true,
  },
  {
    title: "Urgent Care Needs",
    desc: "Prompt care for immediate medical concerns, ensuring timely attention and relief.",
    image: a1,
    link: "/urgent-care",
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

const ServiceCard = ({ treatment, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      {/* NEW Badge for IV Hydration */}
      {treatment.isNew && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#FDB913] to-[#f59e0b] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
          NEW! 💧
        </div>
      )}
      
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={treatment.image}
          alt={treatment.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-90' : 'opacity-60'
        }`}></div>
        
        {/* Title Badge */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg font-bold leading-tight">
            {treatment.title}
          </h3>
        </div>
      </div>

      {/* Content Container */}
      <div className={`absolute inset-0 flex flex-col justify-center items-center p-6 bg-gradient-to-br from-[#0097a3]/95 to-[#005d67]/95 backdrop-blur-sm transition-all duration-500 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <div className="text-center space-y-4">
          <h3 className="text-white text-xl font-bold">
            {treatment.title}
          </h3>
          <p className="text-gray-100 text-sm leading-relaxed line-clamp-4">
            {treatment.desc}
          </p>
          <Link
            href={treatment.link}
            className="inline-flex items-center gap-2 bg-white text-[#0097a3] font-semibold px-6 py-3 rounded-full hover:bg-[#00BFB3] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Learn More
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className={`absolute top-4 right-4 w-12 h-12 bg-[#00BFB3] rounded-full flex items-center justify-center transition-all duration-500 ${
        isHovered ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
      }`}>
        <FaArrowRight className="text-white text-lg transform rotate-[-45deg]" />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0097a3] to-[#007a85] px-6 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16 mx-auto space-y-4">
          <div className="inline-block">
            <span className="text-[#00BFB3] text-sm font-bold uppercase tracking-wider bg-white/10 px-4 py-2 rounded-full">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white font-extrabold">
            Our Services
          </h2>
          <p className="text-white/90 text-lg leading-relaxed">
            Explore our comprehensive range of healthcare services designed to meet your medical needs with compassion, expertise, and cutting-edge care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {treatments.map((treatment, index) => (
            <ServiceCard key={index} treatment={treatment} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-white text-[#0097a3] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#00BFB3] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            View All Services
            <FaArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
