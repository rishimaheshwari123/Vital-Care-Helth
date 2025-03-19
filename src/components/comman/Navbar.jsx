"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "@/assets/logo.png";

// import {
//   FaBars,
//   FaTimes,
//   FaChevronDown,
//   FaChevronUp,
//   FaIcons,
// } from "react-icons/fa";
// import {
//   FaStethoscope,
//   FaSyringe,
//   FaHeartbeat,
//   FaVials,
//   FaRunning,
//   FaWeight,
//   FaFlask,
//   FaUserMd,
//   FaDiagnoses,
//   FaTooth,
//   FaPhone,
//   FaHeadSideVirus,
// } from "react-icons/fa";
export const menuItems = [
  { title: "Home", link: "/" },

  {
    title: "About",
    submenu: [
      {
        name: "About Vital care Health",
        // img: <FaStethoscope />,
        link: "/about",
      },
      {
        name: "Meet Our Founder",
        // img: <FaStethoscope />,
        link: "/founder",
      },
    ],
  },
  {
    title: "Services",
    submenu: [
      {
        name: "Urgent Care Needs",
        // img: FaStethoscope,
        link: "/services/urgent-care-needs",
      },
      {
        name: "COVID-19 Testing",
        // img: FaSyringe,
        link: "/services/covid-19-testing",
      },
      {
        name: "Annual Physicals",
        // img: FaHeartbeat,
        link: "/services/annual-physicals",
      },
      {
        name: "Flu Testing & Treatment",
        // img: FaVials,
        link: "/services/flu-testing-treatment",
      },
      {
        name: "Sports Physicals",
        // img: FaRunning,
        link: "/services/sports-physicals",
      },
      {
        name: "Weight Management",
        // img: FaWeight,
        link: "/services/weight-management",
      },
      {
        name: "In-House Labs",
        // img: FaFlask,
        link: "/services/in-house-labs",
      },
      {
        name: "Diabetes Management",
        // img: FaUserMd,
        link: "/services/diabetes-managements",
      },
      {
        name: "Sore Throat",
        // img: FaDiagnoses,
        link: "/services/sore-throat",
      },
      {
        name: "Gastrointestinal Issues",
        // img: FaTooth,
        link: "/services/gastrointestinal-issues",
      },
      {
        name: "Telemedicine",
        // img: FaPhone,
        link: "/services/telemedicine",
      },
      {
        name: "Migraine Relief Solutions",
        // img: FaHeadSideVirus,
        link: "/services/migraine-relief",
      },
    ],
  },
  { title: "Urgent Care", link: "/urgent-care" },
  { title: "Weight Management", link: "/weight-management" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu((prev) => (prev === index ? null : index));
  };

  if (!isMounted) return null;

  return (
    <nav className="bg-white text-black shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl">
            <Image
              src={logo || "/placeholder.svg"}
              className="w-48 transition-transform duration-300 hover:scale-110"
              alt="Logo"
            />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group ">
                {item.submenu ? (
                  <>
                    <button className="flex items-center gap-2 py-2 hover:text-gray-500 transition-colors">
                      {item.title} <FaChevronDown className="h-4 w-4" />
                    </button>
                    <div className="fixed left-1/2 -translate-x-1/2 rounded-3xl mt-1 w-[90vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white grid grid-cols-5 w-full  text-black shadow-lg rounded-lg p-2 mt-1">
                        {item.submenu.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            href={sub.link}
                            className="flex items-center gap-4 p-2 hover:bg-blue-300 rounded transition-colors"
                          >
                            {/* <Image
                              src={sub.img}
                              alt={sub.name}
                              width={45}
                              height={24}
                              className="object-contain"
                            /> */}
                            <span className="font-bold">{sub.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.link}
                    className="py-2 hover:text-gray-500 transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
              className="bg-[#0097a3c3] px-4 py-2 rounded-lg text-white hover:bg-[#678db9] transition-colors ml-2"
            >
              Book Now
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-50 transition-transform duration-500 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-2">
          <p>Neurology P.C.</p>
          <button onClick={closeMobileMenu} className="">
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          {menuItems.map((item, index) => (
            <div key={index} className="py-2">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSubMenu(index)}
                    className="flex justify-between w-full font-medium mb-2 focus:outline-none"
                  >
                    {item.title}
                    <FaChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openSubMenu === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSubMenu === index && (
                    <div className="pl-4 border-l border-gray-300">
                      {item.submenu.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sub.link}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded transition-colors"
                          onClick={closeMobileMenu}
                        >
                          <Image
                            src={sub.img}
                            alt={sub.name}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.link}
                  className="block py-2 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/appointment"
            className="block w-full text-center bg-[#548ac8] px-4 py-2 rounded-lg hover:bg-red-700 transition-colors mt-4"
            onClick={closeMobileMenu}
          >
            Request an Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
