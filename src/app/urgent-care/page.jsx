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

export const generateMetadata = () => {
  return {
    title: "Urgent Care | Walk-In Clinic in Tyrone, GA | VitalCare Health",
    description:
      "Visit VitalCare Health for same-day urgent care and walk-in medical services in Tyrone, GA. We treat minor injuries, infections, allergic reactions, and more with compassionate and expert care.",
    keywords:
      "Urgent care Tyrone GA, walk-in clinic, same-day doctor appointment, minor injuries treatment, sore throat, fever, cough, allergic reactions, conjunctivitis, diarrhea, vomiting, sinus infection, urinary symptoms, non-emergency care, urgent medical help, VitalCare Health urgent care, STI concerns, skin rashes, abdominal pain, earache, sunburn, minor burns",

    metadataBase: new URL("https://palakchoudhary52.wixsite.com"),
    openGraph: {
      type: "website",
      url: "https://palakchoudhary52.wixsite.com/urgent-care",
      title: "Urgent Care Services | VitalCare Health | Tyrone, GA",
      description:
        "Same-day appointments and walk-in urgent care at VitalCare Health. Get timely treatment for cough, fever, infections, and minor injuries in Tyrone, GA.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "Urgent Care - VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Urgent Care | VitalCare Health",
      description:
        "Timely, expert urgent care in Tyrone, GA. Walk-in or schedule a same-day visit at VitalCare Health for minor illnesses and injuries.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
