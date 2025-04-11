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

export const generateMetadata = () => {
  return {
    title: "Diabetes Management & Treatment Plans | VitalCare Health",
    description:
      "Take control of your diabetes with VitalCare Health. We offer personalized treatment, blood sugar testing, CGM devices, insulin therapy, and diet counseling to help you live healthier.",
    keywords:
      "diabetes management, blood sugar testing, insulin therapy, continuous glucose monitoring, CGM, diabetes medication, nutrition counseling, diabetes care Tyrone GA, VitalCare Health, diabetes treatment, online diabetes follow-up",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/services/diabetes-managements",
      title:
        "Personalized Diabetes Care | Blood Sugar Control | VitalCare Health",
      description:
        "Manage diabetes with expert care at VitalCare Health. From CGM devices to diet plans and insulin support, we help you maintain healthy blood sugar levels and live confidently.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "Diabetes care at VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Diabetes Treatment & Blood Sugar Monitoring | VitalCare Health",
      description:
        "From blood glucose testing to nutrition support and online consultations, VitalCare Health helps you manage diabetes with confidence and convenience.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
