import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { SiMaplibre } from "react-icons/si";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

const TopHeader = () => {
  return (
    <>
      <Fade direction="right" triggerOnce>
        <div className="bg-[#0097a3c3] text-white px-3 py-2 hidden md:block h-[55px]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 px-4">
            <div className="flex flex-wrap items-center space-x-6">
              <Zoom triggerOnce>
                <div className="flex items-center space-x-2">
                  <FiMapPin className="text-xl text-white  " />
                  <span className="font-semibold">
                    1130 Senoia Road Suite B4 Tyrone GA 30290
                  </span>
                </div>
              </Zoom>
              <Zoom triggerOnce delay={100}>
                <div className="hidden md:flex items-center space-x-2">
                  <FiPhone className="text-xl text-white" />
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
                  <FiMail className="text-xl text-whie" />
                  <a
                    href="mailto:info@vitalcarega.com"
                    className="font-semibold hover:underline"
                  >
                    info@vitalcarega.com
                  </a>
                </div>
              </Zoom>
            </div>

            <div className="flex space-x-4 bg-white px-3 py-1 rounded-2xl">
              <Zoom triggerOnce>
                <Link
                  href="https://www.facebook.com/share/1BAq26qeo6/?mibextid=wwXIfr"
                  aria-label="Facebook"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white  transition-colors duration-300"
                >
                  {/* <FaFacebook size={18} className="text-[#0097a3c3]" /> */}
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
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white  transition-colors duration-300"
                >
                  {/* <FaInstagram size={22} className="text-[#0097a3c3]" /> */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"
                    alt=""
                  />
                </Link>
              </Zoom>
              {/* <Zoom triggerOnce delay={200}>
                <Link
                  href="https://www.youtube.com/user/Wix"
                  aria-label="YouTube"
                >
                  <FaYoutube
                    size={22}
                    className="text-red-600 hover:scale-125 transition-transform duration-300"
                  />
                </Link>
              </Zoom> */}
              <Zoom triggerOnce delay={300}>
                <Link
                  href="https://www.google.com/maps?q=1130+Senoia+Road+Suite+B4+Tyrone+GA+30290&z=17&hl=en"
                  aria-label="Map"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white  transition-colors duration-300"
                >
                  {/* <SiMaplibre size={22} className="text-[#0097a3c3]" /> */}
                  <img
                    src="https://media.istockphoto.com/id/1148705812/vector/location-icon-vector-pin-sign-isolated-on-white-background-navigation-map-gps-direction.jpg?s=612x612&w=0&k=20&c=lqEIzW3QedZfytsX30NoBJbHxZZbWnlLsvEiwOSbaow="
                    alt=""
                  />
                </Link>
              </Zoom>
            </div>
          </div>
        </div>
      </Fade>

      {/* Mobile Header */}
      <div className="bg-[#c5dee4] text-black p-4 md:hidden">
        <div className="flex flex-wrap items-center justify-between space-x-4">
          <div className="flex items-center space-x-2">
            <FiMapPin className="text-xl text-red-600 animate-pulse" />
            <span className="font-semibold">B4 Tyrone GA</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMail className="text-xl text-blue-600" />
            <a
              href="mailto:info@vitalcarega.com"
              className="font-semibold hover:underline"
            >
              Email Us
            </a>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <div className="flex items-center space-x-2">
            <FiPhone className="text-xl text-green-600" />
            <a
              href="tel:+14708513800"
              className="font-semibold hover:underline"
            >
              +1 (470) 851-3800
            </a>
          </div>

          <div className="flex space-x-4">
            <Zoom triggerOnce>
              <Link
                href="https://www.facebook.com/share/1BAq26qeo6/?mibextid=wwXIfr"
                aria-label="Facebook"
              >
                <FaFacebook
                  size={22}
                  className="text-blue-600 hover:scale-125 transition-transform duration-300"
                />
              </Link>
            </Zoom>
            <Zoom triggerOnce delay={100}>
              <Link
                href="https://www.instagram.com/vitalcare__health?igsh=MXY0NnNsYWJmNHc1ag%3D%3D&utm_source=qr"
                aria-label="Instagram"
              >
                <FaInstagram
                  size={22}
                  className="text-pink-600 hover:scale-125 transition-transform duration-300"
                />
              </Link>
            </Zoom>

            <Zoom triggerOnce delay={300}>
              <Link
                href="https://www.google.com/maps?q=1130+Senoia+Road+Suite+B4+Tyrone+GA+30290&z=17&hl=en"
                aria-label="Map"
              >
                <SiMaplibre
                  size={22}
                  className="text-green-600 hover:scale-125 transition-transform duration-300"
                />
              </Link>
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
