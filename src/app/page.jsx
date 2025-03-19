import Client from "@/components/core/Client";
import About from "@/components/core/home/About";
import AppointmentSection from "@/components/core/home/AppointmentSection";
import HereSection from "@/components/core/home/HeroSection";
import ReviewSLider1 from "@/components/core/home/ReviewSLider1";
import ReviewSlider2 from "@/components/core/home/ReviewSLider2";
import Services from "@/components/core/home/Services";
import WeightManagementBanner from "@/components/core/home/WeightManagementBanner";
import React from "react";

const Home = () => {
  return (
    <div>
      <HereSection />
      <About />
      <Services />
      {/* <WeightManagementBanner /> */}
      <AppointmentSection />
      <div className="bg-[#c2f6f5]">
        <div className="flex items-center max-w-7xl mx-auto  py-10 flex-col lg:flex-row">
          <ReviewSLider1 />
          <ReviewSlider2 />
        </div>
      </div>
      <Client />
    </div>
  );
};

export default Home;
