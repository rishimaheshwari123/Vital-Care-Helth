import Client from "@/components/core/Client";
import About from "@/components/core/home/About";
import AppointmentSection from "@/components/core/home/AppointmentSection";
import HereSection from "@/components/core/home/HeroSection";
import ReviewSLider1 from "@/components/core/home/ReviewSLider1";
import ReviewSlider2 from "@/components/core/home/ReviewSLider2";
import Services from "@/components/core/home/Services";
import StructuredData from "@/components/SEO/StructuredData";
import React from "react";

const Home = () => {
  return (
    <>
      <StructuredData />
      <div>
        <HereSection />
        <br />
        <br />
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
    </>
  );
};

export default Home;

export const generateMetadata = () => {
  return {
    title:
      "Locally Owned Urgent Care & Primary Care in Peachtree City, GA | VitalCare Health",
    description:
      "Locally owned VitalCare Health offers urgent care, primary care, IV hydration therapy, weight loss programs, and telehealth in Peachtree City, GA. Walk-ins welcome. Same-day appointments available!",
    keywords:
      "locally owned urgent care, VitalCare Health, urgent care near me, Peachtree City Georgia, urgent care Peachtree City, same day appointments Peachtree City, walk-in clinic Georgia, same-day doctor appointment Georgia, family medicine Georgia, primary care physician near me, Peachtree City, urgent care clinic in Peachtree City, primary care clinic Georgia, IV hydration therapy, weight management, annual physicals, flu testing, flu treatment, sports physicals, COVID-19 testing, in-house labs, diabetes management, sore throat, gastrointestinal issues, telemedicine, migraine relief, healthcare services, primary care, wellness clinic, local doctors office, community healthcare, independent healthcare provider",
    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com",
      title:
        "Locally Owned Urgent Care & Primary Care in Peachtree City, GA | VitalCare Health",
      description:
        "Locally owned VitalCare Health provides urgent care, primary care, IV hydration therapy, and wellness services in Peachtree City, GA. Walk-ins welcome. Same-day appointments!",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "VitalCare Health - Locally Owned Healthcare in Peachtree City",
        },
      ],
      locale: "en_US",
      siteName: "VitalCare Health",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Locally Owned Urgent Care in Peachtree City, GA | VitalCare Health",
      description:
        "Visit locally owned VitalCare Health in Peachtree City, GA for urgent care, IV hydration, telemedicine, and more. Book online today!",
      images: ["/android-chrome-192x192.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "http://vitalcarega.com",
    },
  };
};
