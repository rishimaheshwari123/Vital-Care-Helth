import Image from "next/image";
import a1 from "@/assets/service/gastrointestinal/a1.jpg";
import a2 from "@/assets/service/gastrointestinal/a2.jpg";
import a3 from "@/assets/service/gastrointestinal/a3.jpg";
import a4 from "@/assets/service/gastrointestinal/a4.jpg";
import a5 from "@/assets/service/gastrointestinal/a5.jpg";
import a6 from "@/assets/service/gastrointestinal/a6.jpg";
import a7 from "@/assets/service/gastrointestinal/a7.jpg";
import a8 from "@/assets/service/gastrointestinal/a8.jpg";
import a9 from "@/assets/service/gastrointestinal/a9.jpg";
import a10 from "@/assets/service/gastrointestinal/a10.jpg";
import a11 from "@/assets/service/gastrointestinal/a11.jpg";
import Link from "next/link";

const fluTests = [
  {
    image: a1,
    title: "Incision & Drainage",
    description:
      "Our clinic offers incision and drainage procedures to effectively treat abscesses or localized infections. This procedure involves making a small incision to drain accumulated fluid or pus, providing relief from infection and promoting faster healing.",
  },
  {
    image: a2,
    title: "Minor Laceration Repair",
    description:
      "We provide expert minor laceration repair services, involving gentle suturing of small cuts to ensure precise closure. This careful approach promotes optimal healing and effective tissue regeneration, helping you recover quickly and comfortably.",
  },
  {
    image: a3,
    title: "Ear Irrigation",
    description:
      "A gentle procedure to remove excess earwax or foreign objects from the ear canal using a stream of water or saline solution, providing relief and improving hearing.",
  },
  {
    image: a4,
    title: "Foreign Body Removal",
    description:
      "We efficiently remove foreign objects, such as splinters or debris, from the skin or superficial tissues to prevent infection and promote healing.",
  },
  {
    image: a5,
    title: "Rapid Strep Test",
    description:
      "Quickly determines the presence of streptococcal bacteria in the throat, helping to diagnose strep throat accurately.",
  },
  {
    image: a6,
    title: "Rapid Flu Test",
    description:
      "Detects the presence of influenza viruses to provide timely diagnosis and treatment for flu symptoms.",
  },
  {
    image: a7,
    title: "Rapid COVID Test",
    description:
      "A rapid antigen or molecular test to identify the SARS-CoV-2 virus responsible for COVID-19, ensuring swift results and appropriate care.",
  },
  {
    image: a8,
    title: "Rapid Mono Test",
    description:
      "Used to detect antibodies associated with infectious mononucleosis, aiding in the diagnosis of this condition.",
  },
  {
    image: a9,
    title: "Urinalysis",
    description:
      "Analyzes a urine sample to evaluate kidney function, detect urinary tract infections, monitor certain medical conditions, and screen for various disorders.",
  },
  {
    image: a10,
    title: "Pregnancy Test",
    description:
      "Determines the presence of the human chorionic gonadotropin (hCG) hormone in urine or blood, confirming pregnancy.",
  },
  {
    image: a11,
    title: "Blood Glucose Level Measurement",
    description:
      "Measures blood glucose levels to assess and monitor blood sugar control, particularly for individuals with diabetes or suspected blood sugar abnormalities.",
  },
];

export default function Gastrointestinal() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center bg-white py-10 px-5 md:px-20 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-lg font-bold text-gray-800">
            Walk-ins and Same-Day Appointments
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Services for Urgent Care Needs
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            When urgent healthcare needs arise, VitalCare Health is here to
            offer swift and responsive medical attention. Our clinic specializes
            in addressing urgent medical concerns, ensuring you receive timely
            care for non-life-threatening conditions. Located in Tyrone, GA, our
            team of dedicated healthcare professionals is committed to providing
            comprehensive and compassionate urgent care services.
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
              src="https://static.wixstatic.com/media/11062b_bfcf5102b38c4e90a231f048022bd37a~mv2.jpg/v1/crop/x_0,y_33,w_6720,h_4414/fill/w_1306,h_858,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Grandmother%20and%20Granddaughter.jpg"
              alt="Doctor holding vaccine"
              width={500}
              height={400}
              className="w-full max-w-xs md:min-w-[45vw]"
            />
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-10 px-5 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-bold text-gray-800">
            Same-Day Appointments & Walk-In Availability for Urgent Care
          </h3>
          {/* <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Our Approach to Flu Test & Vaccination
          </h2> */}
        </div>

        <div className="max-w-4xl mx-auto mt-6 text-gray-700 text-sm md:text-base">
          <p>
            At VitalCare Health, we recognize that medical issues can arise
            unexpectedly. Our aim is to provide you with timely care when you
            need it most. Whether you need a same-day appointment or prefer a
            walk-in visit, our clinic is ready to address your urgent care
            needs.
          </p>
          <p>
            Our skilled urgent care professionals are available to treat a wide
            range of non-life-threatening conditions, such as minor injuries,
            common illnesses, infections, and more. With same-day appointment
            options, you can conveniently schedule a time to see a healthcare
            provider who will evaluate your condition and deliver the necessary
            treatment. Alternatively, our walk-in service allows you to receive
            prompt care without a prior appointment.
          </p>
          <p>
            Our walk-in clinic is equipped to handle various common illnesses
            and minor injuries. If you experience any of the following
            conditions, visit VitalCare Health for expert care: minor allergic
            reactions, cough, colds, sinus symptoms, sore throat, vomiting,
            diarrhea, conjunctivitis, earache, minor burns and sunburn, minor
            lacerations, urinary symptoms, or concerns about sexually
            transmitted infections (STIs). For these urgent needs, we provide
            the highest quality of care and immediate attention. Please seek
            emergency care for severe symptoms or life-threatening situations.
          </p>
        </div>

        {/* Contact Button */}
        <div className="max-w-4xl mx-auto mt-6 flex justify-center">
          <Link
            href={
              "https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
            }
            className="bg-red-500 cursor-pointer text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
          >
            Get Tested Today
          </Link>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            In-Office Tests & Urgent Care Procedures Available
          </h2>
        </div>
        <section className="py-12 px-6 bg-white">
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
                  <h3 className="text-lg font-bold text-blue-900">
                    {test.title}
                  </h3>
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
