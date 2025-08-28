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
    title: "Urgent Care | Walk-In Clinic in Peachtree, GA | VitalCare Health",
    description:
      "Visit VitalCare Health for same-day urgent care and walk-in medical services in Peachtree, GA. We treat minor injuries, infections, allergic reactions, and more with compassionate and expert care.",
    keywords:
      "Urgent care Peachtree GA, urgent care in Atlanta GA, primary care in peachtree city, top-rated urgent care Georgia, best walk-in clinic in peachtree city, local doctors office open now, Peachtree city georgia, Peachtree city, Clinic in peachtree city, Urgent care in peachtree city, minor injury treatment Georgia,flu testing near me,COVID testing urgent care Georgia, same-day urgent care visit minor injury treatment Georgia, flu testing near me walk-in clinic, COVID testing urgent care Georgia,same-day urgent care visit, same-day doctor appointment, minor injuries treatment, sore throat, fever, cough, allergic reactions, conjunctivitis, diarrhea, vomiting, sinus infection, urinary symptoms, non-emergency care, urgent medical help, VitalCare Health urgent care, STI concerns, skin rashes, abdominal pain, earache, sunburn, minor burns",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/urgent-care",
      title: "Urgent Care Services | VitalCare Health | Peachtree, GA",
      description:
        "Same-day appointments and walk-in urgent care at VitalCare Health. Get timely treatment for cough, fever, infections, and minor injuries in Peachtree, GA.",
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
        "Timely, expert urgent care in Peachtree, GA. Walk-in or schedule a same-day visit at VitalCare Health for minor illnesses and injuries.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
