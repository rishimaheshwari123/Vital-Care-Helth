import React from "react";

import logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Zoom } from "react-awesome-reveal";

const Footer = () => {
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

          {/* Register Button */}

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
            <p className="text-white">
              🏠 1130 Senoia Road Suite B4 Tyrone GA 30290{" "}
            </p>
            <p className="text-white">📞 +1 (470) 851-3800 </p>
            <p className="text-white">📧 info@vitalcarega.com</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex bg-white rounded-2xl w-fit px-1 py-1 space-x-4">
              <Zoom triggerOnce>
                <Link
                  href="https://www.facebook.com/share/1BAq26qeo6/?mibextid=wwXIfr"
                  aria-label="Facebook"
                  className="flex bg-white h-8 justify-center rounded-full w-8 duration-300 items-center transition-colors"
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
                  className="flex bg-white h-8 justify-center rounded-full w-8 duration-300 items-center transition-colors"
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
                    className="text-red-600 duration-300 hover:scale-125 transition-transform"
                  />
                </Link>
              </Zoom> */}
              <Zoom triggerOnce delay={300}>
                <Link
                  href="https://www.google.com/maps?q=1130+Senoia+Road+Suite+B4+Tyrone+GA+30290&z=17&hl=en"
                  aria-label="Map"
                  className="flex bg-white h-8 justify-center rounded-full w-8 duration-300 items-center transition-colors"
                >
                  {/* <SiMaplibre size={22} className="text-[#0097a3c3]" /> */}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png"
                    alt=""
                  />
                </Link>
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
