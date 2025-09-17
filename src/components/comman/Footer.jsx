import React, { useState } from "react";
import logo from "../../assets/footerlogo.png";
import Image from "next/image";
import Link from "next/link";
import { Zoom } from "react-awesome-reveal";
import { MdOutlinePrivacyTip } from "react-icons/md";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const addresses = {
    peachtree: {
      name: "Peachtree City",
      mapLink: "https://g.co/kgs/4aiyjcN",
    },
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => setOpenDropdown(null);

  const hours = {
    Mon: "9am – 7pm",
    Tue: "9am – 7pm",
    Wed: "9am – 7pm",
    Thu: "9am – 7pm",
    Fri: "9am – 7pm",
    Sat: "9am – 4pm",
    Sun: "Closed",
  };

  return (
    <footer className="bg-[#0097a3c3] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + CTA */}
          <div >
<div className="flex justify-center">
  <Image
    src={logo}
    alt="Event Logo"
    className="h-12 w-auto drop-shadow-lg mb-4"
  />
</div>

            <a
              href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
              className="block sm:inline-block bg-white rounded-full shadow-lg text-[#0097a3c3] font-semibold hover:bg-green-600 hover:scale-105 px-6 py-3 transform transition w-full sm:w-auto text-center"
            >
              Book Now
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-sm">🏠</span>
                <span className="text-sm">
                  8 Eastbrook Bend B, Peachtree City, GA 30269
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">📞</span>
                <a href="tel:+14708513800" className="text-sm hover:underline">
                  +1 (470) 851-3800
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">📧</span>
                <a
                  href="mailto:info@vitalcarega.com"
                  className="text-sm hover:underline"
                >
                  info@vitalcarega.com
                </a>
              </li>
              <li>
                <Link
                  href={"/privacy-policy"}
                  className="flex items-center gap-1 mt-2 hover:underline"
                >
                  <MdOutlinePrivacyTip size={18} />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 items-center">
              <Zoom triggerOnce>
                <Link
                  href="https://www.facebook.com/share/1BAq26qeo6/?mibextid=wwXIfr"
                  aria-label="Facebook"
                  className="flex bg-white h-8 w-8 rounded-full justify-center items-center"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
                    alt="Facebook"
                    className="h-4"
                  />
                </Link>
              </Zoom>
              <Zoom triggerOnce delay={100}>
                <Link
                  href="https://www.instagram.com/vitalcare__health?igsh=MXY0NnNsYWJmNHc1ag%3D%3D&utm_source=qr"
                  aria-label="Instagram"
                  className="flex bg-white h-8 w-8 rounded-full justify-center items-center"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram"
                    className="h-4"
                  />
                </Link>
              </Zoom>
              <Zoom triggerOnce delay={200}>
                <div className="relative">
                  <div
                    onClick={() => toggleDropdown("mapIconMobile")}
                    className="flex bg-white h-8 w-8 rounded-full justify-center items-center cursor-pointer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png"
                      alt="Map"
                      className="h-4"
                    />
                  </div>
                  {openDropdown === "mapIconMobile" && (
                    <div className="absolute top-full right-0 mt-2 bg-white text-black shadow-lg rounded-md">
                      <a
                        href={addresses.peachtree.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        <span className="font-bold">
                          {addresses.peachtree.name}
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </Zoom>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              {Object.entries(hours).map(([day, time]) => (
                <li
                  key={day}
                  className="flex justify-between border-b border-white/20 pb-1 text-sm md:text-base"
                >
                  <span>{day}:</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 text-center text-sm mt-8 pt-6">
          © 2025 by Rises. Powered by Varn Digihealth
        </div>
      </div>
    </footer>
  );
};

export default Footer;
