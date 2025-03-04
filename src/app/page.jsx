import About from "@/components/core/home/About";
import HereSection from "@/components/core/home/HeroSection";
import Services from "@/components/core/home/Services";
import WeightManagementBanner from "@/components/core/home/WeightManagementBanner";
import React from "react";

const Home = () => {
  return (
    <div>
      <HereSection />
      <About />
      <Services />
      <WeightManagementBanner />
    </div>
  );
};

export default Home;
