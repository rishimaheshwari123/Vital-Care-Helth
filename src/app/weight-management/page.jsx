import BMICalculator from "@/components/core/weightmanagement/BMICalculator";
import Glp1WeightManagement from "@/components/core/weightmanagement/Glp1WeightManagement";
import HeroSection from "@/components/core/weightmanagement/HeroSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Glp1WeightManagement />
      <BMICalculator />
    </div>
  );
};

export default page;
