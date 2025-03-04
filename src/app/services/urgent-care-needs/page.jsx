import HealthConsultation from "@/components/core/urgent/HealthConsultation";
import UrgentCare from "@/components/core/urgent/UrgentCare";
import UrgentHome from "@/components/core/urgent/UrgentHome";
import React from "react";

const page = () => {
  return (
    <div>
      <UrgentHome />
      <UrgentCare />
      <HealthConsultation />
    </div>
  );
};

export default page;
