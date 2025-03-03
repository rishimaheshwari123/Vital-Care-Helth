import About from "@/components/core/home/About";
import HereSection from "@/components/core/home/HeroSection";
import Services from "@/components/core/home/Services";
import React from "react";

const Home = () => {
  return (
    <div>
      <HereSection />
      <About />
      <Services />
    </div>
  );
};

export default Home;
