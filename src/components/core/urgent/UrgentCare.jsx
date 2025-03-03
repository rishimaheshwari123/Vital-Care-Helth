import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const UrgentCare = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white  text-gray-800">
      <Fade triggerOnce>
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Same-Day Appointments & Walk-In Availability
        </h2>
      </Fade>

      <Slide direction="up" triggerOnce>
        <p className="text-lg text-center mb-6">
          At{" "}
          <span className="font-semibold text-blue-500">VitalCare Health</span>,
          we recognize that medical issues can arise unexpectedly. Our aim is to
          provide you with timely care when you need it most.
        </p>
      </Slide>

      <Slide direction="up" cascade damping={0.1} triggerOnce>
        <p className="text-lg mb-4">
          Our skilled urgent care professionals treat a wide range of
          non-life-threatening conditions, such as minor injuries, common
          illnesses, and infections. Whether you prefer a same-day appointment
          or a walk-in visit, we are here to help.
        </p>
        <p className="text-lg mb-4">
          Our walk-in clinic is equipped to handle:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
          <li>Minor allergic reactions</li>
          <li>Cough, colds, and sinus symptoms</li>
          <li>Sore throat, vomiting, and diarrhea</li>
          <li>Conjunctivitis and earache</li>
          <li>Minor burns, sunburn, and lacerations</li>
          <li>Urinary symptoms and STI concerns</li>
        </ul>
      </Slide>

      <Fade delay={200} triggerOnce>
        <p className="text-lg font-semibold text-red-500 text-center">
          Please seek emergency care for severe symptoms or life-threatening
          situations.
        </p>
      </Fade>
    </div>
  );
};

export default UrgentCare;
