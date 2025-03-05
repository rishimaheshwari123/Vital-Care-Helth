"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaIcons,
} from "react-icons/fa";
import {
  FaStethoscope,
  FaSyringe,
  FaHeartbeat,
  FaVials,
  FaRunning,
  FaWeight,
  FaFlask,
  FaUserMd,
  FaDiagnoses,
  FaTooth,
  FaPhone,
  FaHeadSideVirus,
} from "react-icons/fa";

import { Fade, Slide, Zoom } from "react-awesome-reveal";
import logo from "@/assets/logo.png";
import TopHeader from "./TopBar";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiMaplibre } from "react-icons/si";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const services = [
    {
      name: "Urgent Care Needs",
      to: "/services/urgent-care-needs",
      icon: <FaStethoscope />,
    },
    {
      name: "COVID-19 Testing",
      to: "/services/covid-19-testing",
      icon: <FaSyringe />,
    },
    {
      name: "Annual Physicals",
      to: "/services/annual-physicals",
      icon: <FaHeartbeat />,
    },
    {
      name: "Flu Testing & Treatment",
      to: "/services/flu-testing-treatment",
      icon: <FaVials />,
    },
    {
      name: "Sports Physicals",
      to: "/services/sports-physicals",
      icon: <FaRunning />,
    },
    {
      name: "Weight Management",
      to: "/services/weight-management",
      icon: <FaWeight />,
    },
    { name: "In-House Labs", to: "/services/in-house-labs", icon: <FaFlask /> },
    {
      name: "Diabetes Management",
      to: "/services/diabetes-managements",
      icon: <FaUserMd />,
    },
    { name: "Sore Throat", to: "/services/sore-throat", icon: <FaDiagnoses /> },
    {
      name: "Gastrointestinal Issues",
      to: "/services/gastrointestinal-issues",
      icon: <FaTooth />,
    },
    { name: "Telemedicine", to: "/services/telemedicine", icon: <FaPhone /> },
    {
      name: "Migraine Relief Solutions",
      to: "/services/migraine-relief",
      icon: <FaHeadSideVirus />,
    },
  ];

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    {
      name: "Services",
      to: "/services",
      hasSubmenu: true,
      submenu: services,
    },
    { name: "Urgent Care", to: "/urgent-care" },
    { name: "Weight Management", to: "/weight-management" },
  ];

  const toggleSubmenu = (index) => {
    if (openSubmenu === index) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(index);
    }
  };

  return (
    <>
      <div className="w-full bg-white text-black shadow-lg fixed top-0 left-0 z-50 ">
        <TopHeader />
        <Fade direction="down" triggerOnce>
          <div className="hidden sm:flex justify-between max-w-7xl mx-auto items-center px-6 py-4">
            <Zoom triggerOnce>
              <Link href="/" className="text-xl">
                <Image
                  src={logo || "/placeholder.svg"}
                  className="w-48 transition-transform duration-300 hover:scale-110"
                  alt="Logo"
                />
              </Link>
            </Zoom>
            <div className="flex space-x-6 items-center">
              {links.map((link, index) => (
                <Slide
                  direction="down"
                  triggerOnce
                  key={index}
                  delay={index * 100}
                >
                  <div className="relative group">
                    <Link
                      href={link.to}
                      className="hover:text-[#800080] text-[17px] font-semibold transition-all duration-300 flex items-center"
                    >
                      {link.name}
                      {link.hasSubmenu && (
                        <FaChevronDown className="ml-1 text-xs" />
                      )}
                    </Link>

                    {link.hasSubmenu && (
                      <div className="absolute left-0 mt-2 w-[600px] bg-white shadow-lg rounded-md overflow-hidden z-50 transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 origin-top">
                        <div className="py-4 px-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            {link.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.to}
                                className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 hover:text-[#800080] transition-colors duration-200 rounded"
                              >
                                {subItem.icon}{" "}
                                <span className="ml-2">{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Slide>
              ))}
            </div>
            <div className="flex space-x-3">
              <Link
                className="bg-white border border-[#800080] text-[#800080] hover:bg-gray-50 px-5 py-2 rounded-2xl transition-colors duration-300"
                href="/payment"
              >
                Pay Now
              </Link>
              <Link
                className="bg-[#c5dee4] hover:bg-[#b0d0d8] px-5 py-2 rounded-2xl transition-colors duration-300"
                href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
              >
                Book Now
              </Link>
            </div>
          </div>
        </Fade>

        {/* Mobile Navbar */}
        <div className="sm:hidden bg-white flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <Link href="/" className="text-xl">
            <Image
              src={logo || "/placeholder.svg"}
              className="w-36 transition-transform duration-300 hover:scale-110"
              alt="Logo"
            />
          </Link>
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="transition-all duration-300"
          >
            {isSidebarOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Sidebar for Small Devices */}
        <div
          className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-50 transition-transform duration-500 ease-in-out overflow-y-auto ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <Image
              src={logo || "/placeholder.svg"}
              className="w-32"
              alt="Logo"
            />
            <button onClick={() => setIsSidebarOpen(false)}>
              <FaTimes size={28} />
            </button>
          </div>
          <div className="px-6 py-2">
            {links.map((link, index) => (
              <div key={index}>
                <Fade direction="up" triggerOnce delay={index * 100}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.hasSubmenu ? "#" : link.to}
                      className="block mb-4 hover:text-gray-600 text-lg font-medium"
                      onClick={() => {
                        if (!link.hasSubmenu) {
                          setIsSidebarOpen(false);
                        } else {
                          toggleSubmenu(index);
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                    {link.hasSubmenu && (
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="mb-4 p-2"
                      >
                        {openSubmenu === index ? (
                          <FaChevronUp size={14} />
                        ) : (
                          <FaChevronDown size={14} />
                        )}
                      </button>
                    )}
                  </div>
                </Fade>

                {link.hasSubmenu && openSubmenu === index && (
                  <div className="ml-4 mb-4">
                    <div className="grid grid-cols-1 gap-1">
                      {link.submenu.map((subItem, subIndex) => (
                        <Fade
                          direction="up"
                          key={subIndex}
                          delay={subIndex * 50}
                        >
                          <Link
                            href={subItem.to}
                            className="block mb-2 text-gray-700 hover:text-[#800080] text-base"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </Fade>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex space-x-4 pl-10">
            <Link
              href="https://www.facebook.com/wix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
            <Link
              href="https://www.youtube.com/user/Wix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
            <Link
              href="https://www.google.com/maps?q=1130+Senoia+Road+Suite+B4+Tyrone+GA+30290&z=17&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Map"
            >
              <SiMaplibre
                size={22}
                className="text-gray-800 hover:text-gray-300"
              />
            </Link>
          </div>
          <div className="flex flex-col space-y-3 items-center mt-4 mb-6 px-6">
            <Link
              className="bg-white border border-[#800080] text-[#800080] w-full text-center cursor-pointer py-3 rounded-2xl"
              href="/payment"
            >
              Pay Now
            </Link>
            <Link
              className="bg-[#c5dee4] w-full text-center cursor-pointer py-3 rounded-2xl"
              href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Overlay (Fix for Sidebar Click Issue) */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${
            isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
