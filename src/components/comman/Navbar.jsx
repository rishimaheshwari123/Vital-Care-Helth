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
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const aboutsubmenu = [
    {
      name: "About VitalCare Health",
      to: "/about",
    },
    {
      name: "Meet Our Founder",
      to: "/founder",
    },
  ];

  const links = [
    { name: "Home", to: "/" },
    // { name: "About ", to: "/about" },
    {
      name: "About",
      to: "/about",
      hasSubmenu: true,
      submenu: aboutsubmenu,
    },
    {
      name: "Services",
      to: "/services",
      hasSubmenu: true,
      submenu: services,
    },
    { name: "Urgent Care", to: "/urgent-care" },
    { name: "Weight Management", to: "/weight-management" },
  ];

  const [hoveredMenu, setHoveredMenu] = useState(null); // 🔹 New state to track hovered menu
  const hoveredSubmenu = hoveredMenu?.submenu || hoveredMenu || [];

  const toggleSubmenu = (index) => {
    if (openSubmenu === index) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(index);
    }
  };
  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
    setHoveredMenu(links[index]); // 🔹 Store hovered menu item
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setHoveredMenu(null); // 🔹 Clear hovered menu
  };

  return (
    <div className=" relative">
      <div className="w-full bg-white text-black shadow-lg fixed top-0 left-0 z-50 ">
        <TopHeader />
        <Fade direction="down" triggerOnce>
          <div className="hidden sm:flex justify-between max-w-11/12 mx-auto items-center px-6 py-4">
            <Zoom triggerOnce>
              <Link href="/" className="text-xl">
                <Image
                  src={logo || "/placeholder.svg"}
                  className="w-48 transition-transform duration-300 hover:scale-110"
                  alt="Logo"
                />
              </Link>
            </Zoom>
            <div>
              <div className="flex space-x-6 items-center">
                {links.map((link, index) => (
                  <Slide
                    direction="down"
                    triggerOnce
                    key={index}
                    delay={index * 100}
                  >
                    <div className=" ">
                      <Link
                        href={link.to}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        className="hover:text-[#0097a3c3] text-[17px] font-semibold transition-all duration-300 flex items-center"
                      >
                        {link.name}
                        {link.hasSubmenu && (
                          <FaChevronDown className="ml-1 text-xs" />
                        )}
                      </Link>
                    </div>
                  </Slide>
                ))}
              </div>
            </div>
            <div className="flex space-x-3">
              <Link
                className="border-2 border-[#0097a3c3] text-black hover:bg-gray-50 px-5 py-2 rounded-2xl transition-colors duration-300"
                href="/payment"
              >
                Pay Now
              </Link>
              <Link
                className="bg-[#0097a3c3] hover:bg-[#b0d0d8] text-white px-5 py-2 rounded-2xl transition-colors duration-300"
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
          className={`fixed top-0 left-0 w-70 h-screen bg-white shadow-lg z-50 transition-transform duration-500 ease-in-out overflow-y-auto ${
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
                      href={link.to}
                      className="block mb-4 hover:text-gray-600 text-lg font-medium"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.hasSubmenu && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevents parent click
                          toggleSubmenu(index);
                        }}
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
              href="https://www.facebook.com/share/1BAq26qeo6/?mibextid=wwXIfr"
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
              href="https://www.instagram.com/vitalcare__health?igsh=MXY0NnNsYWJmNHc1ag%3D%3D&utm_source=qr"
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
              className="bg-white border border-[#0097a3c3] text-[#0097a3c3] w-full text-center cursor-pointer py-3 rounded-2xl"
              href="/payment"
            >
              Pay Now
            </Link>
            <Link
              className="bg-[#0097a3c3] w-full text-center cursor-pointer py-3 rounded-2xl"
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

      {hoveredSubmenu.length > 0 && (
        <div className=" min-w-[70vw] mx-auto">
          <div
            className=" min-h-[20px] fixed top-[100px]  min-w-full left-0 z-[999999]"
            onMouseEnter={() => setHoveredMenu(hoveredSubmenu)}
            onMouseLeave={handleMouseLeave}
          ></div>
          <div
            className="fixed top-[120px] left-[28%] right-[30%]  bg-white shadow-lg py-4 px-6 z-[99999]"
            onMouseEnter={() => setHoveredMenu(hoveredSubmenu)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
              {hoveredSubmenu.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={subItem.to}
                  className="flex items-center px-4 py-2 text-sm hover:bg-[#0097a3c3] hover:text-white transition-colors duration-200 rounded"
                >
                  {subItem.icon} <span className="ml-2">{subItem.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
