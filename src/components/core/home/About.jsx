import { Slide } from "react-awesome-reveal";
import a1 from "@/assets/feature/a1.png";
import a2 from "@/assets/feature/a2.png";
import a3 from "@/assets/feature/a3.png";
import a4 from "@/assets/feature/a4.png";
import a5 from "@/assets/feature/a5.png";
import a6 from "@/assets/feature/a6.png";
import a7 from "@/assets/feature/a7.png";
import a8 from "@/assets/feature/a8.png";
import a9 from "@/assets/feature/a9.png";
import a10 from "@/assets/feature/a10.png";
import a11 from "@/assets/feature/a11.png";
import a12 from "@/assets/feature/a12.png";

import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="">
      <div className="py-5">
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:gap-32 py-1 bg-opacity-90 bg-transparent text-black">
          <div className="main items-center grid gap-5 lg:grid-cols-2">
            <Slide direction="left">
              <div className="second border overflow-hidden grid gap-3 p-5">
                <p className="text-black font-semibold text-2xl text-center">
                  We can help you in{" "}
                </p>
                <div className="scroll-container">
                  <div className="scroll-left-to-right flex gap-2 lg:gap-1">
                    <Image
                      src={a1}
                      alt="Featured logo"
                      className="lg:w-36 lg:h-36 w-28 h-28 rounded-full"
                    />
                    <Image
                      src={a2}
                      alt="Featured logo"
                      className="lg:w-36 lg:h-36 w-28 h-28 rounded-full"
                    />
                    <Image
                      src={a3}
                      alt="Featured logo"
                      className="lg:w-36 lg:h-36 w-28 h-28 rounded-full"
                    />
                    <Image
                      src={a4}
                      alt="Featured logo"
                      className="lg:w-36 lg:h-36 w-28 h-28 rounded-full"
                    />
                    <Image
                      src={a5}
                      alt="Featured logo"
                      className="lg:w-36 lg:h-36 w-28 h-28 rounded-full"
                    />
                    <Image
                      src={a6}
                      alt="Featured logo"
                      className="lg:w-36 lg:h-36 w-28 h-28 rounded-full"
                    />
                  </div>
                </div>
                <div className="scroll-container">
                  <div className="scroll-right-to-left flex gap-2 lg:gap-1">
                    <Image
                      src={a7}
                      alt="Featured logo"
                      className="lg:w-36 lg:h-36 w-28 h-28 rounded-full"
                    />
                    <Image
                      src={a8}
                      alt="Featured logo"
                      className="lg:w-36 lg:h-36 w-28 h-28 rounded-full"
                    />
                    <Image
                      src={a9}
                      alt="Featured logo"
                      className="lg:w-36 lg:h-36 w-28 h-28 rounded-full"
                    />
                    <Image
                      src={a10}
                      alt="Featured logo"
                      className="lg:w-36 lg:h-36 w-28 h-28 rounded-full"
                    />
                    <Image
                      src={a11}
                      alt="Featured logo"
                      className="lg:w-36 lg:h-36 w-28 h-28 rounded-full"
                    />
                    <Image
                      src={a12}
                      alt="Featured logo"
                      className="lg:w-36 lg:h-36 w-28 h-28 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </Slide>
            <Slide direction="right">
              <div className="first grid gap-4 p-4 md:gap-6 md:p-8">
                <p className="text-xl md:text-3xl font-semibold border-l-4 border-yellow-400 pl-4">
                  Your Journey to Exceptional Health Care{" "}
                </p>
                <p className="text-sm md:text-xl"></p>
                <p className="text-sm md:text-xl">
                  Discover how VitalCare Health has emerged as a leader in
                  providing comprehensive health care solutions to our
                  community. Our commitment to excellence and patient-centered
                  care has been the driving force behind our journey.
                </p>
                <p className="text-sm md:text-xl">
                  We are passionate about making a positive impact on the lives
                  of our patients. Through continuous improvement and a
                  patient-centric approach, we have redefined the standards of
                  primary and urgent care.
                </p>
                <div className="mt-5">
                  <Link href={"/about"}>
                    <span className="bg-[#0097a3c3] mt-4 rounded-full text-white w-fit px-5 py-4 text-xl lg:text-xl">
                      Learn more about us
                    </span>
                  </Link>
                </div>
                {/* <p className="text-xl mt-1">Check our reviews on</p>
                <p className="text-xl mt-1">
                  Upwork, Clutch, & Google my business now!
                </p> */}
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
