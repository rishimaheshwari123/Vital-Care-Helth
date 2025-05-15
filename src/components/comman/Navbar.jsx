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
import { FcAbout } from "react-icons/fc";
import { MdEmojiPeople } from "react-icons/md";

import { Fade, Slide, Zoom } from "react-awesome-reveal";
import logo from "@/assets/logo.png";
import TopHeader from "./TopBar";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiMaplibre } from "react-icons/si";
import doctor from "@/assets/doc.png";
import vital from "@/assets/vital.png";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const services = [
    {
      name: "Urgent Care Needs",
      to: "/urgent-care",
      icon: <FaStethoscope />,
    },
    {
      name: "Weight Management",
      to: "/services/weight-management",
      icon: <FaWeight />,
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
      name: "COVID-19 Testing",
      to: "/services/covid-19-testing",
      icon: <FaSyringe />,
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
      image: vital,
    },
    {
      name: "Meet Our Founder",
      to: "/founder",
      image: doctor,
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
    <div className="relative">
      <div className="bg-white shadow-lg text-black w-full fixed left-0 top-0 z-50">
        <TopHeader />
        <Fade direction="down" triggerOnce>
          <div className="justify-between hidden items-center  max-w-11/12 mx-auto px-6 py-4 sm:flex">
            <Zoom triggerOnce>
              <Link href="/" className="text-xl">
                <Image
                  src={logo || "/placeholder.svg"}
                  className="w-80"
                  alt="Logo"
                />
              </Link>
            </Zoom>
            <div>
              <div className="flex items-center space-x-6">
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
                        className="flex text-[17px] duration-300 font-semibold hover:text-[#0097a3c3] items-center transition-all"
                      >
                        {link.name}
                        {link.hasSubmenu && (
                          <FaChevronDown className="text-xs ml-1" />
                        )}
                      </Link>
                    </div>
                  </Slide>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                className="border-[#0097a3c3] border-2 rounded-2xl text-black duration-300 hover:bg-gray-50 px-5 py-2 transition-colors"
                href="https://mycw193.ecwcloud.com/portal24581/jsp/100mp/login_otp.jsp"
              >
                Pay Now
              </Link>
              <Link
                className="bg-[#0097a3c3] border-[#0097a3c3] border-2 rounded-2xl text-white duration-300 hover:bg-[#65a9b9] px-5 py-2 transition-colors"
                href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
              >
                Book Now
              </Link>
            </div>
          </div>
        </Fade>

        {/* Mobile Navbar */}
        <div className="flex bg-white border-b border-gray-200 justify-between items-center px-6 py-4 sm:hidden">
          <Link href="/" className="text-xl">
            <Image
              src={logo || "/placeholder.svg"}
              className="w-64 duration-300 hover:scale-110 transition-transform"
              alt="Logo"
            />
          </Link>
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="duration-300 transition-all"
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
          <div className="flex border-b border-gray-200 justify-between items-center px-6 py-4">
            <Image
              src={logo || "/placeholder.svg"}
              className="w-48"
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
                  <div className="flex justify-between items-center">
                    <Link
                      href={link.to}
                      className="text-lg block font-medium hover:text-gray-600 mb-4"
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
                        className="p-2 mb-4"
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
                  <div className="mb-4 ml-4">
                    <div className="grid grid-cols-1 gap-1">
                      {link.submenu.map((subItem, subIndex) => (
                        <Fade
                          direction="up"
                          key={subIndex}
                          delay={subIndex * 50}
                        >
                          <Link
                            href={subItem.to}
                            className="text-base text-gray-700 block hover:text-[#800080] mb-2"
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

          <div className="flex pl-10 space-x-4">
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
          <div className="flex flex-col items-center mb-6 mt-4 px-6 space-y-3">
            <Link
              className="bg-white  border border-[#0097a3c3] rounded-2xl text-[#0097a3c3] text-center w-full cursor-pointer py-3"
              href="https://mycw193.ecwcloud.com/portal24581/jsp/100mp/login_otp.jsp"
            >
              Pay Now
            </Link>
            <Link
              className="bg-[#0097a3c3] rounded-2xl text-center w-full cursor-pointer py-3"
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
        <div className="max-w-[50vw] mx-auto">
          <div
            className="fixed left-0 min-h-[20px] min-w-full top-[100px] z-[999999]"
            onMouseEnter={() => setHoveredMenu(hoveredSubmenu)}
            onMouseLeave={handleMouseLeave}
          ></div>
          <div
            className="bg-white p-1 shadow-lg w-full fixed left-[29%] max-w-[40vw] right-[32%] top-[125px] transform z-[99999]"
            onMouseEnter={() => setHoveredMenu(hoveredSubmenu)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`grid gap-3 ${
                hoveredSubmenu.length <= 4 ? "grid-cols-2" : "grid-cols-3"
              }`}
            >
              {hoveredSubmenu.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={subItem.to}
                  className="flex rounded text-sm hover:bg-[#0097a3c3] hover:text-white items-center px-3 py-2 transition-colors"
                >
                  {subItem.image ? (
                    <Image
                      src={subItem.image}
                      alt={subItem.name}
                      className="h-5 w-5 mr-2"
                    />
                  ) : (
                    <p className="text-lg">{subItem.icon}</p>
                  )}
                  <span className="text-[16px] ml-2">{subItem.name}</span>
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
