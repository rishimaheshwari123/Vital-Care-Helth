import BMICalculator from "@/components/core/weightmanagement/BMICalculator";
import Glp1WeightManagement from "@/components/core/weightmanagement/Glp1WeightManagement";
import React from "react";

const page = () => {
  return (
    <div>
      <Glp1WeightManagement />
      <BMICalculator />
    </div>
  );
};

export default page;
