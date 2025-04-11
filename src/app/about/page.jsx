import AboutVitalCareHealth from "@/components/core/about/AboutVitalCareHealth";
import GoogleReview from "@/components/core/home/GoogleReview";

const InfoTabs = () => {
  return (
    <section className="text-gray-800">
      <AboutVitalCareHealth />
      <GoogleReview />
    </section>
  );
};

export default InfoTabs;

export const generateMetadata = () => {
  return {
    title: "About Us | VitalCare Health - Compassionate Primary & Urgent Care",
    description:
      "Learn about VitalCare Health – your trusted center for primary and urgent care. Our dedicated team offers expert medical services, weight management, and a holistic approach to wellness with compassion and excellence.",
    keywords:
      "VitalCare Health, about VitalCare, urgent care center, primary care clinic, weight management, holistic healthcare, patient-centered care, experienced doctors, compassionate medical care, chronic condition support, wellness journey, telemedicine, personalized healthcare, healthcare mission, health empowerment",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/about",
      title: "About Us | VitalCare Health - Your Partner in Wellness",
      description:
        "Discover the story behind VitalCare Health. From expert urgent care to holistic weight management, we’re here to inspire healthier lives.",
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
      title: "About VitalCare Health",
      description:
        "Learn how VitalCare Health is redefining primary and urgent care with compassion, expertise, and a patient-first approach.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
