import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { SiMaplibre } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#c5dee4] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Image
              src={logo}
              alt="Event Logo"
              className="h-16 w-auto mb-4 filter drop-shadow-lg"
            />
            <div className="flex justify-center md:justify-start">
              <a
                href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
                className="bg-[#40c8ea] hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Register Button */}

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-black mb-4">Contact</h3>
            <p className="text-black">
              🏠 1130 Senoia Road Suite B4 Tyrone GA 30290{" "}
            </p>
            <p className="text-black">📞 +1 (470) 851-3800 </p>
            <p className="text-black">📧 info@vitalcarega.com</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/wix"
                className="text-blue-500 text-2xl hover:text-white transition transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href=""
                className="text-pink-500 text-2xl hover:text-white transition transform hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/user/Wix"
                className="text-red-500 text-2xl hover:text-white transition transform hover:scale-110"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.google.com/maps?q=1130+Senoia+Road+Suite+B4+Tyrone+GA+30290&z=17&hl=en"
                aria-label="Map"
              >
                <SiMaplibre
                  size={22}
                  className="text-green-600 hover:scale-125 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-black text-sm">
          © 2025 by Rises. Powered by Varn Digihealth
        </div>
      </div>
    </footer>
  );
};

export default Footer;
