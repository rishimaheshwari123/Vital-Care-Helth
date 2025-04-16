import Image from "next/image";
import a1 from "@/assets/service/inhouse/a1.jpg";
import a2 from "@/assets/service/inhouse/a2.jpg";
import a3 from "@/assets/service/diabties/d3.png";
import a4 from "@/assets/service/diabties/d4.png";
import a5 from "@/assets/service/diabties/d5.png";
import a6 from "@/assets/service/diabties/d6.png";

const fluTests = [
  {
    image: a1,
    title: "Blood Sugar Testing",
    description:
      "Routine blood sugar monitoring is essential for managing diabetes. Our quick and painless tests help track your glucose levels effectively.",
  },
  {
    image: a2,
    title: "Diabetes Medication Management",
    description:
      "At VitalCare Health, we provide personalized diabetes medication plans, prescribing insulin and other medications as needed for optimal glucose control.",
  },
  {
    image: a3,
    title: "Continuous Glucose Monitoring (CGM)",
    description:
      "Our CGM devices offer real-time blood sugar tracking, helping you maintain stable glucose levels and prevent complications..",
  },
  {
    image: a4,
    title: "Diabetes Diet & Nutrition Counseling",
    description:
      "A well-balanced diet is key to diabetes management. Our expert nutritionists provide customized meal plans tailored to your health goals...",
  },
  {
    image: a5,
    title: "Insulin Therapy & Training",
    description:
      "We offer guidance on insulin administration, helping patients learn proper injection techniques and dosage adjustments for better diabetes control...",
  },
  {
    image: a6,
    title: "Online Follow-up & Support",
    description:
      "VitalCare Health’s virtual consultations ensure continuous diabetes care, offering expert support and adjustments to your treatment plan as needed...",
  },
];

export default function DiabetesTest() {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        <section className="py-12 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
              Get Tested Today
            </h1>
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
                  <h2 className="text-lg font-bold text-blue-900">
                    {test.title}
                  </h2>
                  <p className="text-gray-700">{test.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
