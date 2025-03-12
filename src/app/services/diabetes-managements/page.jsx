import Services from "@/components/core/home/Services";
import DiabetesHome from "@/components/core/urgent/DiabetesHome";

import React from "react";
import DiabetesTest from "./DiabetesTest";

const Diabetes = () => {
  return (
    <div>
      <DiabetesHome />
      <DiabetesTest />
      <Services />
    </div>
  );
};

export default Diabetes;
