export const generateMetadata = () => {
  return {
    title: "Urgent Care & Primary Care in Tyrone, GA | VitalCare Health",
    description:
      "VitalCare Health offers urgent care, primary care, weight loss programs, and telehealth services in Tyrone, GA. Walk-in welcome. Book your visit online!",
    keywords:
      "VitalCare Health, urgent care, weight management, annual physicals, flu testing, flu treatment, sports physicals, COVID-19 testing, in-house labs, diabetes management, sore throat, gastrointestinal issues, telemedicine, migraine relief, healthcare services, primary care, wellness clinic, urgent care near me, primary care clinic Georgia, walk-in clinic Georgia, same-day doctor appointment Georgia, 24 hour urgent care Georgia, family medicine Georgia, primary care physician near me, urgent care in Atlanta GA, primary care in Tyrone GA, top-rated urgent care Georgia, best walk-in clinic in Tyrone GA, local doctors office open now",
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

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4  py-20">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>Vitalcare Health</strong>, we value your privacy and are
        committed to protecting your personal health information. We collect
        only the information necessary to provide you with high-quality medical
        care and to comply with healthcare regulations.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">What We Collect:</h2>
      <p className="mb-4">
        We may collect your name, contact information, medical history, and
        insurance details when you schedule appointments or receive treatment.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        How We Use Your Information:
      </h2>
      <p className="mb-4">
        Your information is used strictly for medical care, appointment
        reminders, billing purposes, and improving our services. We do not share
        your personal data with third parties unless required by law or with
        your explicit consent.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Security:</h2>
      <p className="mb-4">
        We implement industry-standard security measures to keep your
        information safe and confidential.
      </p>

      <p className="mt-6">
        By using our website or services, you agree to this privacy policy.
        Please contact us for any privacy-related concerns.
      </p>
    </main>
  );
}
