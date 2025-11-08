import IVHydrationClient from "./IVHydrationClient";

export default function IVHydrationTherapy() {
  return <IVHydrationClient />;
}

export const generateMetadata = () => {
  return {
    title: "IV Hydration Therapy | Fast Recovery & Energy Boost | VitalCare Health",
    description:
      "Now offering IV Hydration Therapy at VitalCare Health! Fast, effective treatment to replenish fluids, electrolytes, and nutrients. Relieve dehydration, boost energy, and support recovery. Walk-in welcome!",
    keywords:
      "IV hydration therapy, IV therapy near me, hydration therapy Georgia, IV drip therapy, dehydration treatment, energy boost IV, post-workout recovery, illness recovery, IV fluids, electrolyte therapy, vitamin IV therapy, mobile IV therapy, IV hydration Peachtree City, wellness IV therapy, VitalCare Health IV therapy",
    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/services/iv-hydration-therapy",
      title: "IV Hydration Therapy Now Available | VitalCare Health",
      description:
        "Experience fast, effective IV Hydration Therapy at VitalCare Health. Replenish fluids, boost energy, and recover quickly. Walk-in or book online today!",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "IV Hydration Therapy - VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "IV Hydration Therapy | VitalCare Health",
      description:
        "Now offering IV Hydration Therapy! Fast relief from dehydration, fatigue, and more. Walk-in welcome at VitalCare Health in Peachtree City, GA.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
