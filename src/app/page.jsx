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
    title: "Urgent Care & Primary Care in Tyrone, GA | VitalCare Health",
    description:
      "VitalCare Health offers urgent care, primary care, weight loss programs, and telehealth services in Tyrone, GA. Walk-in welcome. Book your visit online!",
    keywords:
      "VitalCare Health, urgent care,●urgent care near me, Peachtree city georgia, Urgent care peachtree city,Same day appointments peachtree city,walk-in clinic Georgia, same-day doctor appointment Georgia,24 hour urgent care Georgia,family medicine Georgia,primary care physician near me,Peachtree city,Urgent care clicnic in peachtree city , primary care clinic Georgia, weight management, annual physicals, flu testing, flu treatment, sports physicals, COVID-19 testing, in-house labs, diabetes management, sore throat, gastrointestinal issues, telemedicine, migraine relief, healthcare services, primary care, wellness clinic, urgent care near me, primary care clinic Georgia, walk-in clinic Georgia, same-day doctor appointment Georgia, 24 hour urgent care Georgia, family medicine Georgia, primary care physician near me, urgent care in Atlanta GA, primary care in Tyrone GA, top-rated urgent care Georgia, best walk-in clinic in Tyrone GA, local doctors office open now",
    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com",
      title: "Urgent Care & Primary Care in Tyrone, GA | VitalCare Health",
      description:
        "VitalCare Health provides urgent care, primary care, and wellness services in Tyrone, GA. Walk-ins welcome.",
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
      title: "Urgent Care in Tyrone, GA | VitalCare Health",
      description:
        "Visit VitalCare Health in Tyrone, GA for urgent care, telemedicine, and more. Book online today.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
