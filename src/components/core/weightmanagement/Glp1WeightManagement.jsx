"use client";
import Image from "next/image";
import a1 from "@/assets/f1.png";
import a2 from "@/assets/f2.png";
import a3 from "@/assets/f3.avif";
import a4 from "@/assets/f4.png";
import weight from "@/assets/weight.avif";

const Glp1WeightManagement = () => {
  return (
    <div className="bg-[#fdecd2]  px-5">
      <section className=" py-10 flex justify-center items-center md:gap-20">
        {/* <div className="">
          <Image
            src={weight}
            alt="Weight Loss"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div> */}
        <div className="max-w-7xl text-center md:text-left px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b3b8c]">
            Transform Your Health with Our GLP-1 Weight Management Program
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Are you struggling with weight loss and looking for a clinically
            proven solution? At VitalCare Health, our GLP-1 Weight Management
            Program helps you achieve lasting results with FDA-approved GLP-1
            medications.
          </p>
          <h3 className="text-2xl font-bold text-[#3b3b8c] mt-6">
            Why Choose GLP-1 for Weight Loss?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={60}
                  height={60}
                />
                <h4 className="font-bold mt-3 text-[#3b3b8c]">
                  {benefit.title}
                </h4>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const benefits = [
  {
    icon: a1,
    title: "Effective Weight Control",
    description: "Support steady, long-term weight loss",
  },
  {
    icon: a2,
    title: "Boost Metabolism",
    description: "Improve energy levels and burn fat naturally",
  },
  {
    icon: a3,
    title: "Appetite Management",
    description: "Reduce cravings and promote healthy eating habits",
  },
  {
    icon: a4,
    title: "Sustainable Lifestyle",
    description: "Maintain a healthier body weight with expert guidance",
  },
];

export default Glp1WeightManagement;
