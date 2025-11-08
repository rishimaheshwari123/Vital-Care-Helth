"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
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
  FaFacebook,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { SiMaplibre } from "react-icons/si";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import logo from "@/assets/logo.jpg";
import TopHeader from "./TopBar";
import doctor from "@/assets/doc.png";
import vital from "@/assets/vital.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const services = [
    { name: "IV Hydration Therapy", to: "/services/iv-hydration-therapy", icon: <FaSyringe />, isNew: true },
    { name: "Urgent Care Needs", to: "/urgent-care", icon: <FaStethoscope /> },
    { name: "Weight Management", to: "/services/weight-management", icon: <FaWeight /> },
    { name: "Annual Physicals", to: "/services/annual-physicals", icon: <FaHeartbeat /> },
    { name: "Flu Testing & Treatment", to: "/services/flu-testing-treatment", icon: <FaVials /> },
    { name: "Sports Physicals", to: "/services/sports-physicals", icon: <FaRunning /> },
    { name: "COVID-19 Testing", to: "/services/covid-19-testing", icon: <FaSyringe /> },
    { name: "In-House Labs", to: "/services/in-house-labs", icon: <FaFlask /> },
    { name: "Diabetes Management", to: "/services/diabetes-managements", icon: <FaUserMd /> },
    { name: "Sore Throat", to: "/services/sore-throat", icon: <FaDiagnoses /> },
    { name: "Gastrointestinal Issues", to: "/services/gastrointestinal-issues", icon: <FaTooth /> },
    { name: "Telemedicine", to: "/services/telemedicine", icon: <FaPhone /> },
    { name: "Migraine Relief Solutions", to: "/services/migraine-relief", icon: <FaHeadSideVirus /> },
  ];

  const aboutsubmenu = [
    { name: "About VitalCare Health", to: "/about", image: vital },
    { name: "Meet Our Team", to: "/team", image: doctor },
  ];

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about", hasSubmenu: true, submenu: aboutsubmenu },
    { name: "Services", to: "/services", hasSubmenu: true, submenu: services },
    { name: "Urgent Care", to: "/urgent-care" },
    { name: "Weight Management", to: "/weight-management" },
  ];

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <div className="relative">
      <div className="bg-white shadow-lg text-black w-full fixed left-0 top-0 z-50">
        <TopHeader />
        <Fade direction="down" triggerOnce>
          <div className="justify-between hidden items-center max-w-11/12 mx-auto px-6 py-4 sm:flex">
            <Zoom triggerOnce>
              <Link href="/" className="text-xl">
                <Image src={logo || "/placeholder.svg"} className="w-80" alt="Logo" />
              </Link>
            </Zoom>
            <div>
              <div className="flex items-center space-x-6">
                {links.map((link, index) => (
                  <Slide direction="down" triggerOnce key={index} delay={index * 100}>
                    <div className="group relative">
                      <Link
                        href={link.to}
                        className="flex text-[17px] duration-300 font-semibold hover:text-[#0097a3c3] items-center transition-all"
                      >
                        {link.name}
                        {link.hasSubmenu && <FaChevronDown className="text-xs ml-1" />}
                      </Link>

                      {link.hasSubmenu && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] mt-6 z-50 invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2"
                        >
                          {/* Arrow pointer */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
                          
                          <div className="bg-white p-6 shadow-2xl rounded-2xl border border-gray-100 relative overflow-hidden">
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-5">
                              <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle, #0097a3 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                              }}></div>
                            </div>
                            
                            <div className="relative">
                              {link.name === "Services" && (
                                <div className="mb-4 pb-4 border-b border-gray-200">
                                  <h3 className="text-lg font-bold text-[#0097a3] mb-1">Our Healthcare Services</h3>
                                  <p className="text-sm text-gray-600">Comprehensive care for your health needs</p>
                                </div>
                              )}
                              
                              <div className={`grid gap-3 ${link.submenu.length <= 4 ? "grid-cols-2" : "grid-cols-3"}`}>
                                {link.submenu.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.to}
                                    className="relative flex items-center p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0097a3] hover:to-[#00BFB3] hover:text-white hover:shadow-lg hover:scale-105 group/item"
                                  >
                                    {subItem.isNew && (
                                      <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#FDB913] to-[#f59e0b] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse">
                                        NEW
                                      </span>
                                    )}
                                    {subItem.image ? (
                                      <Image
                                        src={subItem.image}
                                        alt={subItem.name}
                                        className="h-8 w-8 mr-3 rounded-lg"
                                      />
                                    ) : (
                                      <span className="text-xl text-[#0097a3] group-hover/item:text-white mr-3 transition-colors">
                                        {subItem.icon}
                                      </span>
                                    )}
                                    <span className="text-sm font-semibold">{subItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                              
                              {link.name === "Services" && (
                                <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                                  <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 text-[#0097a3] font-semibold hover:text-[#00BFB3] transition-colors"
                                  >
                                    View All Services
                                    <FaArrowRight className="text-sm" />
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
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
            className="duration-300 transition-all text-black"
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
            <Image src={logo || "/placeholder.svg"} className="w-48" alt="Logo" />
            <button onClick={() => setIsSidebarOpen(false)} className="text-black">
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
                      className="text-lg block font-medium text-black hover:text-gray-600 mb-4"
                      onClick={() => {
                        if (!link.hasSubmenu) {
                          setIsSidebarOpen(false);
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                    {link.hasSubmenu && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubmenu(index);
                        }}
                        className="p-2 mb-4 text-black"
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
                        <Fade direction="up" key={subIndex} delay={subIndex * 50}>
                          <Link
                            href={subItem.to}
                            className="text-base text-gray-700 block hover:text-[#0097a3c3] mb-2"
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
              href="https://www.google.com/maps?q=1130+Senoia+Road+Suite+B4+Peachtree+GA+30290&z=17&hl=en"
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
              className="bg-white border border-[#0097a3c3] rounded-2xl text-[#0097a3c3] text-center w-full cursor-pointer py-3"
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
    </div>
  );
};

export default Navbar;