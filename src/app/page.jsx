import Client from "@/components/core/Client";
import About from "@/components/core/home/About";
import AppointmentSection from "@/components/core/home/AppointmentSection";
import HereSection from "@/components/core/home/HeroSection";
import ReviewSLider1 from "@/components/core/home/ReviewSLider1";
import ReviewSlider2 from "@/components/core/home/ReviewSLider2";
import Services from "@/components/core/home/Services";
import React from "react";

const Home = () => {
  return (
    <div>
      <HereSection />
      <About />
      <Services />
      {/* <WeightManagementBanner /> */}
      <AppointmentSection />
      <div className="bg-[#f0fffe]">
        <div className="flex flex-col items-center lg:flex-row max-w-7xl mx-auto py-10">
          <ReviewSLider1 />
          <ReviewSlider2 />
        </div>
      </div>
      <Client />
    </div>
  );
};

export default Home;
