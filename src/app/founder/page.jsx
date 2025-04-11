import AppointmentSection from "@/components/core/about/AppointmentSection";
import MeetOurFounder from "@/components/core/about/MeetOurFounder";
import React from "react";

const page = () => {
  return (
    <div>
      <MeetOurFounder />
      <AppointmentSection />
    </div>
  );
};

export default page;

export const generateMetadata = () => {
  return {
    title: "Meet Our Founder | Dr. Hardik Parekh, MD, MPH | VitalCare Health",
    description:
      "Meet Dr. Hardik Parekh, the founder and Medical Director of VitalCare Health. With board certification and over a decade of experience in emergency and family medicine, he leads with compassion and clinical excellence.",
    keywords:
      "Dr. Hardik Parekh, VitalCare founder, medical director, board-certified physician, family medicine, emergency medicine, Piedmont Hospitals, public health, holistic healthcare, healthcare leadership, MD MPH, patient-centered care, urgent care expert, medical visionary, healthcare innovation",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "profile",
      url: "http://vitalcarega.com/founder",
      title: "Meet Our Founder | Dr. Hardik Parekh, MD, MPH",
      description:
        "Dr. Hardik Parekh, founder of VitalCare Health, brings over a decade of experience in family and emergency medicine. Discover his commitment to accessible, holistic healthcare.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "Dr. Hardik Parekh - VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Meet Our Founder | VitalCare Health",
      description:
        "Learn about Dr. Hardik Parekh, MD, MPH — the visionary leader behind VitalCare Health, known for compassionate and expert-driven care.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
