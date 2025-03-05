import Client from "@/components/core/Client";
import About from "@/components/core/home/About";
import AppointmentSection from "@/components/core/home/AppointmentSection";
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
      <AppointmentSection />
      <Client />
    </div>
  );
};

export default Home;
