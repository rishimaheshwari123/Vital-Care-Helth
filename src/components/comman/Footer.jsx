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
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0097a3c3] text-white py-12">
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
                className="text-[#0097a3c3] hover:bg-green-600 bg-white font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Register Button */}

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <p className="text-white">
              🏠 1130 Senoia Road Suite B4 Tyrone GA 30290{" "}
            </p>
            <p className="text-white">📞 +1 (470) 851-3800 </p>
            <p className="text-white">📧 info@vitalcarega.com</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/share/1BAq26qeo6/?mibextid=wwXIfr"
                aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white  transition-colors duration-300"
              >
                <FaFacebook size={18} className="text-[#0097a3c3]" />
              </Link>
              <Link
                href="https://www.instagram.com/vitalcare__health?igsh=MXY0NnNsYWJmNHc1ag%3D%3D&utm_source=qr"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white  transition-colors duration-300"
              >
                <FaInstagram size={22} className="text-[#0097a3c3]" />
              </Link>

              <Link
                href="https://www.google.com/maps?q=1130+Senoia+Road+Suite+B4+Tyrone+GA+30290&z=17&hl=en"
                aria-label="Map"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white  transition-colors duration-300"
              >
                <SiMaplibre size={22} className="text-[#0097a3c3]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-white text-sm">
          © 2025 by Rises. Powered by Varn Digihealth
        </div>
      </div>
    </footer>
  );
};

export default Footer;
