import Image from "next/image";
import doctorImage from "@/assets/membership/banner.jpg";
import a1 from "@/assets/membership/a1.jpg";
import a2 from "@/assets/membership/a2.jpg";
import a3 from "@/assets/membership/a3.jpg";
import a4 from "@/assets/membership/a4.jpg";
import a5 from "@/assets/membership/a5.jpg";
import a6 from "@/assets/membership/a6.jpg";
import a7 from "@/assets/membership/a7.jpg";
import a8 from "@/assets/membership/a8.jpg";
import a9 from "@/assets/membership/a9.jpg";
import planImage from "@/assets/membership/a10.jpg";
import Link from "next/link";

const fluTests = [
  {
    image: a1,
    title: "Primary Care Consultations",
    description:
      "Receive comprehensive primary care services through telemedicine, including evaluations, diagnoses, personalized treatment plans, and ongoing management of chronic conditions.",
  },
  {
    image: a2,
    title: "Follow-up Appointments",
    description:
      "Connect with your healthcare provider virtually for follow-up visits to review treatment progress, adjust medications, and address any concerns or questions.",
  },
  {
    image: a3,
    title: "Medication Management",
    description:
      "Access prescriptions, refills, and medication adjustments remotely, ensuring continuous access to essential medications from the convenience of home.",
  },
  {
    image: a4,
    title: "Lab Result Reviews",
    description:
      "Review lab results, imaging reports, and diagnostic tests with your healthcare provider through virtual appointments for timely feedback and next steps.",
  },
  {
    image: a5,
    title: "Behavioral Health Counseling",
    description:
      "Access mental health support through telemedicine, offering therapy sessions, counseling, and medication management for conditions like anxiety, depression, and stress.",
  },
  {
    image: a6,
    title: "Specialist Referrals",
    description:
      "Receive referrals to consult with specialists for in-depth evaluations or specific care for conditions requiring expert attention.",
  },
  {
    image: a7,
    title: "Chronic Disease Management",
    description:
      "Get ongoing support and remote monitoring for chronic conditions such as diabetes, hypertension, asthma, and more, with our telemedicine services.",
  },
  {
    image: a8,
    title: "Preventive Care Discussions",
    description:
      "Engage in virtual discussions about preventive care, screenings, lifestyle modifications, and health promotion to proactively maintain your well-being.",
  },
  {
    image: a9,
    title: "Telehealth Urgent Care",
    description:
      "Seek prompt medical attention for non-emergency conditions through our telehealth urgent care services, where providers can assess and offer guidance remotely.",
  },
];

export default function SoreThroat() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-lg  uppercase font-bold text-gray-800">
            Healthcare Membership
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Affordable Annual Healthcare Membership - Starting from $399
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            No Insurance? No Problem! Get the quality healthcare you deserve
            without the stress of high costs. Our comprehensive annual
            membership plan provides affordable, accessible healthcare services
            tailored to your needs.
          </p>

          <div className="mt-6">
            <Link
              href={
                "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
              }
              className="bg-[#7ed0e4] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
            >
              Contact Us Today
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center ">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={doctorImage}
              alt="Doctor holding vaccine"
              width={500}
              height={400}
              className="w-full max-w-xs md:min-w-[45vw]"
            />
          </div>
        </div>
      </div>

      <section className="bg-[#fde3c3] py-10 px-4 sm:px-6 md:px-8 font-sans">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-10 p-0 sm:p-5">
          {/* Image Section */}
          <div className="w-full md:w-sm rounded-2xl overflow-hidden">
            <Image
              src={planImage}
              alt="Doctor Consultation"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-black space-y-6 sm:space-y-8 mt-6 md:mt-0">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-[cursive]">
                What’s Included in the $399 Plan?
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
                <li>
                  2 Office Visits – Get expert medical consultations and
                  personalized care.
                </li>
                <li>
                  Annual Lab Tests – Comprehensive lab work to monitor your
                  health.
                </li>
                <li>
                  Medication Prescriptions – Affordable prescription management
                  with expert guidance.
                </li>
                <li>
                  Specialist Referrals – Easy access to specialists when needed.
                </li>
                <li>
                  Electrocardiogram (EKG) – Heart health screening to ensure
                  overall well-being.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-[cursive]">
                Why Choose Our Membership Plan?
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
                <li>
                  Cost-Effective Healthcare – Avoid high medical bills with our
                  budget-friendly plan.
                </li>
                <li>
                  Comprehensive Coverage – From check-ups to diagnostic tests,
                  we’ve got you covered.
                </li>
                <li>
                  No Hidden Fees – Transparent pricing with no unexpected costs.
                </li>
                <li>
                  Preventative Care Focus – Stay on top of your health with
                  routine screenings.
                </li>
                <li>
                  Convenient Access – Flexible appointment scheduling to suit
                  your lifestyle.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <section className="py-12 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Affordable Annual Healthcare Membership
            </h2>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {fluTests.map((test, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center space-x-6"
              >
                <div className="min-w-[10vw] rounded-full overflow-hidden border-4 border-blue-900">
                  <Image
                    src={test.image}
                    alt={test.title}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>

                <div>
                  <p className="text-lg font-bold text-blue-900">
                    {test.title}
                  </p>
                  <p className="text-gray-700">{test.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export const generateMetadata = () => {
  return {
    title: "Affordable Annual Healthcare Membership | VitalCare Health",
    description:
      "No Insurance? No Problem! VitalCare Health offers an affordable $399 annual membership for primary care, behavioral health, medication management, and more — all accessible through telemedicine.",
    keywords:
      "affordable healthcare, annual membership healthcare, telemedicine membership, $399 healthcare plan, no insurance doctor, primary care membership, medication management, behavioral health counseling, VitalCare Health, lab result reviews, specialist referrals, virtual healthcare access",

    metadataBase: new URL("http://vitalcarega.com"),
    openGraph: {
      type: "website",
      url: "http://vitalcarega.com/membership",
      title: "Affordable $399 Annual Healthcare Membership | VitalCare Health",
      description:
        "Join VitalCare Health's $399/year membership for comprehensive primary care, follow-ups, mental health counseling, medication access, and specialist referrals — no insurance needed.",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "Annual Healthcare Membership at VitalCare Health",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "$399 Annual Healthcare Plan | VitalCare Health",
      description:
        "Affordable and accessible healthcare without insurance. Enjoy primary care, behavioral support, med management, and more with VitalCare Health’s annual membership.",
      images: ["/android-chrome-192x192.png"],
    },
  };
};
