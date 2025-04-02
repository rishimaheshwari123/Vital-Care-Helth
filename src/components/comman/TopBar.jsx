import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

const TopHeader = () => {
  return (
    <div className="">
      <Fade direction="right" triggerOnce>
        <div className="bg-[#0097a3c3] h-[55px] text-white hidden md:block py-2">
          <div className="flex flex-col justify-between items-center max-w-11/12 md:flex-row md:space-y-0 mx-auto px-4 space-y-2">
            <div className="flex flex-wrap items-center space-x-6">
              <Zoom triggerOnce>
                <div className="flex items-center space-x-2">
                  <FiMapPin className="text-white text-xl" />
                  <a
                    href="https://g.co/kgs/fjZMb8X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white"
                  >
                    1130 Senoia Road Suite B4 Tyrone GA 30290
                  </a>
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
                  className="flex bg-white h-6 justify-center rounded-full w-6 duration-300 items-center transition-colors"
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
                  className="flex bg-white h-6 justify-center rounded-full w-6 duration-300 items-center transition-colors"
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
      </Fade>

      {/* Mobile Header */}
      <div className="bg-[#c5dee4] text-black md:hidden pb-[10px] px-2">
        <div className="flex flex-wrap justify-between items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FiMapPin className="text-black text-xl" />
            <a
              href="https://g.co/kgs/fjZMb8X"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black"
            >
              1130 Senoia Road Suite B4 Tyrone GA 30290
            </a>
          </div>
          {/* <div className="flex items-center space-x-2">
            <FiMapPin className="text-red-600 text-xl animate-pulse" />
            <span className="font-semibold">B4 Tyrone GA</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMail className="text-blue-600 text-xl" />
            <a
              href="mailto:info@vitalcarega.com"
              className="font-semibold hover:underline"
            >
              Email Us
            </a>
          </div> */}
        </div>

        <div className="flex justify-between mt-3">
          <div className="flex items-center space-x-2">
            <FiPhone className="text-green-600 text-xl" />
            <a
              href="tel:+14708513800"
              className="font-semibold hover:underline"
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
                className="flex bg-white h-6 justify-center rounded-full w-6 duration-300 items-center transition-colors"
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
                className="flex bg-white h-6 justify-center rounded-full w-6 duration-300 items-center transition-colors"
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
    </div>
  );
};

export default TopHeader;
