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

export const generateMetadata = () => {
  return {
    title: "GLP-1 Weight Management Program | VitalCare Health",
    description:
      "Achieve sustainable weight loss with VitalCare Health’s FDA-approved GLP-1 Weight Management Program. Boost metabolism, reduce cravings, and transform your lifestyle with expert support.",
    keywords:
      "medical weight loss program Georgia, weight management clinic near me, physician-supervised weight loss Georgia, GLP-1 weight loss, weight management program, FDA-approved weight loss, sustainable weight loss, appetite control, metabolism booster, BMI over 30, obesity treatment, VitalCare Health, weight loss clinic Tyrone GA, lose weight with GLP-1, obesity-related disease prevention, body mass index calculator, medical weight loss program",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/services/weight-management",
      title: "Weight Management | GLP-1 Program at VitalCare Health",
      description:
        "Transform your health with VitalCare Health's GLP-1 Weight Management Program. A science-backed approach to long-term, effective weight loss with expert support.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "GLP-1 Weight Management - VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "GLP-1 Weight Loss Program | VitalCare Health",
      description:
        "Struggling with weight loss? Try VitalCare’s GLP-1 Weight Management Program — clinically proven, FDA-approved, and designed for lasting results.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
