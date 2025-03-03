import Services from "@/components/core/home/Services";
import HealthConsultation from "@/components/core/urgent/HealthConsultation";
import UrgentCare from "@/components/core/urgent/UrgentCare";
import UrgentHome from "@/components/core/urgent/UrgentHome";

export default function UrgentPage() {
  return (
    <div>
      <UrgentHome />
      <UrgentCare />
      <HealthConsultation />
      <Services />
    </div>
  );
}
