import Client from "@/components/core/Client";
import About from "@/components/core/home/About";
import AppointmentSection from "@/components/core/home/AppointmentSection";
import HereSection from "@/components/core/home/HeroSection";
import ReviewSLider1 from "@/components/core/home/ReviewSLider1";
import ReviewSlider2 from "@/components/core/home/ReviewSLider2";
import Services from "@/components/core/home/Services";
import React from "react";

const Home = () => {
  return (
    <div>
      <HereSection />
      <About />
      <Services />
      {/* <WeightManagementBanner /> */}
      <AppointmentSection />
      <div className="bg-[#f0fffe]">
        <div className="flex flex-col items-center lg:flex-row max-w-7xl mx-auto py-10">
          <ReviewSLider1 />
          <ReviewSlider2 />
        </div>
      </div>
      <Client />
    </div>
  );
};

export default Home;

export const generateMetadata = () => {
  return {
    title: "VitalCare Health | Comprehensive Urgent Care & Wellness Services",
    description:
      "VitalCare Health provides quality healthcare services including urgent care, weight management, diabetes care, flu testing, telemedicine, and more. Your trusted partner in health and wellness.",
    keywords:
      "VitalCare Health, urgent care, weight management, annual physicals, flu testing, flu treatment, sports physicals, COVID-19 testing, in-house labs, diabetes management, sore throat, gastrointestinal issues, telemedicine, migraine relief, healthcare services, primary care, wellness clinic, urgent care near me, primary care clinic Georgia, walk-in clinic Georgia, same-day doctor appointment Georgia, 24 hour urgent care Georgia, family medicine Georgia, primary care physician near me, urgent care in Atlanta GA, primary care in [Your City Name], top-rated urgent care Georgia, best walk-in clinic in [City Name], local doctors office open now",
    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com",
      title: "VitalCare Health | Comprehensive Urgent Care & Wellness Services",
      description:
        "VitalCare Health offers comprehensive urgent care and wellness services like flu testing, diabetes care, physicals, and more.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "VitalCare Health | Urgent Care & Wellness Clinic",
      description:
        "Explore healthcare services at VitalCare Health, including urgent care, telemedicine, migraine relief, and more.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
