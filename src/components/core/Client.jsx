import React from "react";
import c1 from "@/assets/cb1.png";
import c2 from "@/assets/cb2.png";
import c3 from "@/assets/cb3.png";
import c4 from "@/assets/c4.png";
import c5 from "@/assets/c5.webp";
import c6 from "@/assets/c6.png";
import c7 from "@/assets/c7.webp";
import c8 from "@/assets/c8.png";
import c9 from "@/assets/c9.webp";
import c10 from "@/assets/c10.png";
import c11 from "@/assets/c11.webp";
import Image from "next/image";

const Client = () => {
  return (
    <div>
      <br />
      <div className="my-10">
        <div className=" flex flex-col  w-full items-center">
          <h3 className=" text-2xl lg:text-4xl font-semibold  text-black">
            We Accept Major Insurances
          </h3>
          <br />
          <div className="flex items-center w-[75px]">
            <div className="h-0.5 bg-[#cee21a]"></div>
            <div className="h-1 w-1 bg-[#cee21a] rounded-full mx-1"></div>
            <div className="h-1 w-1 bg-[#cee21a] rounded-full mx-1"></div>
            <div className="h-1 w-1 bg-[#cee21a] rounded-full mx-1"></div>
            <div
              className="h-[4px] rounded-full w-[10px] flex-grow"
              style={{ backgroundColor: "#cee21a" }}
            ></div>
          </div>
                    
        </div>
        <p className="text-center text-xl px-5">
          Commercial Plans, Medicare Plans ,Military Plans
        </p>
        <div className="scroll-container  max-w-7xl mx-auto my-10 px-5">
          <div className="scroll-right-to-left flex lg:gap-5 items-center ">
            <Image src={c1} alt="Client Logo" />
            <Image src={c2} alt="Client Logo" />
            <Image src={c3} alt="Client Logo" />
            <Image src={c4} alt="Client Logo" />
            <Image src={c5} alt="Client Logo" />
            <Image src={c6} alt="Client Logo" />
            <Image src={c7} alt="Client Logo" />
            <Image src={c8} alt="Client Logo" />
            <Image src={c9} alt="Client Logo" />
            <Image src={c10} alt="Client Logo" />
            <Image src={c11} alt="Client Logo" />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Client;
