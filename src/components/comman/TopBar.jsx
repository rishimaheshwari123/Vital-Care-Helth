import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

const TopHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // State to track which dropdown is open: 'tyrone', 'peachtree', or null

  const addresses = {
    tyrone: {
      name: "Tyrone",
      fullAddress: "1130 Senoia Road Suite B4 Tyrone GA 30290",
      mapLink: "https://g.co/kgs/fjZMb8X", // Google Maps link for Tyrone
    },
    peachtree: {
      name: "Peachtree City",
      fullAddress: "8 Eastbrook Bend B, Peachtree City, GA 30269",
      mapLink: "https://g.co/kgs/4aiyjcN",
    },
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <div className="z-[9999999]">
      <Fade direction="right" triggerOnce>
        <div className="bg-[#0097a3c3] z-[9999999] h-[55px] text-white hidden md:block py-2 relative">
          <div className="flex flex-col justify-between items-center max-w-11/12 md:flex-row md:space-y-0 mx-auto px-4 space-y-2">
            <div className="flex flex-wrap items-center space-x-6">
              {/* Tyrone Address Dropdown */}
              

              {/* Peachtree Address Dropdown */}
              <Zoom triggerOnce delay={50}>
                {" "}
                {/* Added a slight delay for visual effect */}
                <div className="relative flex items-center space-x-2">
                  <FiMapPin className="text-white text-xl" />
                  <span
                    onClick={() => toggleDropdown("peachtree")}
                    className="font-semibold text-white cursor-pointer hover:underline"
                  >
                    {addresses.peachtree.name}
                  </span>
                  {openDropdown === "peachtree" && (
                    <div className="absolute top-4 left-0 mt-2 w-[25vw] bg-white text-black shadow-lg rounded-md z-[9999]">
                      <a
                        href={addresses.peachtree.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        {addresses.peachtree.fullAddress}
                      </a>
                    </div>
                  )}
                </div>
              </Zoom>

              <Zoom triggerOnce delay={100}>
                <div className="hidden items-center md:flex space-x-2">
                  <FiPhone className="text-white text-xl" />
                  <a
                    href="tel:+14708513800"
                    className="font-semibold hover:underline"
                  >
                    +1 (470) 851-3800
                  </a>
                </div>
              </Zoom>

              <Zoom triggerOnce delay={200}>
                <div className="flex items-center space-x-2">
                  <FiMail className="text-whie text-xl" />
                  <a
                    href="mailto:info@vitalcarega.com"
                    className="font-semibold hover:underline"
                  >
                    info@vitalcarega.com
                  </a>
                </div>
              </Zoom>
            </div>

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
                {/* Google Map Icon - Now also triggers a dropdown for both addresses */}
                <div className="relative">
                  <Link
                    href="#"
                    aria-label="Map"
                    className="flex bg-white h-6 justify-center rounded-full w-6 duration-300 items-center transition-colors"
                    onClick={() => toggleDropdown("mapIcon")} // Use a distinct name for the map icon dropdown
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png"
                      alt=""
                    />
                  </Link>
                  {openDropdown === "mapIcon" && (
                    <div className="absolute top-0 left-4 mt-2 w-fit bg-white text-black shadow-lg rounded-md z-[9999]">
                     
                      <a
                        href={addresses.peachtree.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4  hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        <span className="text-sm">
                          {addresses.peachtree.name}
                        </span>{" "}
                      </a>
                    </div>
                  )}
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </Fade>

      {/* Mobile Header */}
      <div className="bg-[#c5dee4] text-black md:hidden pb-[10px] px-2 py-1 relative">
        <div className="flex flex-wrap  items-center space-x-4">
          {/* Tyrone Address Dropdown (Mobile) */}
          
          {/* Peachtree Address Dropdown (Mobile) - Added for mobile */}
          <div className="relative flex items-center space-x-2">
            <FiMapPin className="text-black text-xl" />
            <span
              onClick={() => toggleDropdown("peachtreeMobile")}
              className="font-semibold text-[14px] text-black cursor-pointer hover:underline"
            >
              {addresses.peachtree.name}
            </span>
            {openDropdown === "peachtreeMobile" && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white text-black shadow-lg rounded-md z-[99999]">
                <a
                  href={addresses.peachtree.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  {addresses.peachtree.fullAddress}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <div className="flex items-center space-x-2">
            <FiPhone className="text-green-600 text-xl" />
            <a
              href="tel:+14708513800"
              className="font-semibold text-[14px] hover:underline"
            >
              +1 (470) 851-3800
            </a>
          </div>

          <div className="flex rounded-2xl px-1 py-1 space-x-4">
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
              {/* Google Map Icon (Mobile) - Now also triggers a dropdown for both addresses */}
              <div className="relative">
                <Link
                  href="#"
                  aria-label="Map"
                  className="flex bg-white h-6 justify-center rounded-full w-6 duration-300 items-center transition-colors"
                  onClick={() => toggleDropdown("mapIconMobile")} // Use a distinct name for the map icon dropdown
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png"
                    alt=""
                  />
                </Link>
                {openDropdown === "mapIconMobile" && (
                  <div className="absolute top-full right-0 mt-2 w-fit bg-white text-black shadow-lg rounded-md z-[999999]">
                    
                    <a
                      href={addresses.peachtree.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      <span className="font-bold">
                        {addresses.peachtree.name}
                      </span>{" "}
                    </a>
                  </div>
                )}
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
