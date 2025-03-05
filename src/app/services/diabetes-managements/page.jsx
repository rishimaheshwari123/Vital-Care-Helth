import Services from "@/components/core/home/Services";
import HealthConsultation from "@/components/core/urgent/HealthConsultation";
import UrgentCare from "@/components/core/urgent/UrgentCare";
import UrgentHome from "@/components/core/urgent/UrgentHome";
import React from "react";

const Diabetes = () => {
  return (
    <div>
      <UrgentHome />
      <UrgentCare />
      <HealthConsultation />
      <Services />
    </div>
  );
};

export default Diabetes;
