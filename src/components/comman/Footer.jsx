import React, { useState } from "react";

import logo from "../../assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { Zoom } from "react-awesome-reveal";
import { MdOutlinePrivacyTip } from "react-icons/md";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // State to track which dropdown is open: 'tyrone', 'peachtree', or null

  const addresses = {
    tyrone: {
      name: "Tyrone", // Only display this
      fullAddress: "1130 Senoia Road Suite B4 Tyrone GA 30290", // This won't be displayed in the dropdown
      mapLink: "https://g.co/kgs/fjZMb8X", // Link to this
    },
    peachtree: {
      name: "Peachtree City", // Only display this
      fullAddress: "8 Eastbrook Bend B, Peachtree City, GA 30269", // This won't be displayed in the dropdown
      mapLink: "https://g.co/kgs/4aiyjcN", // Link to this
    },
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <footer className="bg-[#0097a3c3] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid gap-8 items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Image
              src={logo}
              alt="Event Logo"
              className="h-16 w-auto drop-shadow-lg filter mb-4"
            />
            <div className="flex justify-center md:justify-start">
              <a
                href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
                className="bg-white rounded-full shadow-lg text-[#0097a3c3] font-semibold hover:bg-green-600 hover:scale-105 px-6 py-3 transform transition"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
            
            <p className="text-white">
              🏠 8 Eastbrook Bend B, Peachtree City, GA 30269
            </p>
            <p className="text-white">📞 +1 (470) 851-3800 </p>
            <p className="text-white">📧 info@vitalcarega.com</p>
            <Link
              href={"/privacy-policy"}
              className="text-white flex items-center gap-1"
            >
              <MdOutlinePrivacyTip size={19} />{" "}
              <span className="ml-1">Privacy Policy</span>
            </Link>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex rounded-2xl mt-1 px-1 py-1 space-x-4">
              <Zoom triggerOnce>
                <Link
                  href="https://www.facebook.com/share/1BAq26qeo6/?mibextid=wwXIfr"
                  aria-label="Facebook"
                  className="flex bg-white h-6 justify-center rounded-full w-6 duration-300 items-center transition-colors"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/667px-2023_Facebook_icon.svg.png"
                    alt=""
                  />
                </Link>
              </Zoom>
              <Zoom triggerOnce delay={100}>
                <Link
                  href="https://www.instagram.com/vitalcare__health?igsh=MXY0NnNsYWJmNHc1ag%3D%3D&utm_source=qr"
                  aria-label="Instagram"
                  className="flex bg-white h-6 justify-center rounded-full w-6 duration-300 items-center transition-colors"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"
                    alt=""
                  />
                </Link>
              </Zoom>
              <Zoom triggerOnce delay={300}>
                <div className="relative">
                  <div
                    aria-label="Map"
                    className="flex bg-white h-6 justify-center rounded-full w-6 duration-300 items-center transition-colors cursor-pointer"
                    onClick={() => toggleDropdown("mapIconMobile")}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png"
                      alt=""
                    />
                  </div>
                  {openDropdown === "mapIconMobile" && (
                    <div className="absolute top-full right-0 mt-2 w-fit bg-white text-black shadow-lg rounded-md z-[999999]">
                     
                      <a
                        href={addresses.peachtree.mapLink} // Link to Peachtree map
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        <span className="font-bold">
                          {addresses.peachtree.name}
                        </span>{" "}
                        {/* Display only Peachtree name */}
                      </a>
                    </div>
                  )}
                </div>
              </Zoom>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-gray-700 border-t text-center text-sm text-white mt-8 pt-6">
          © 2025 by Rises. Powered by Varn Digihealth
        </div>
      </div>
    </footer>
  );
};

export default Footer;
