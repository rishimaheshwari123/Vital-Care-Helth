"use client";
import InquiryForm2 from "@/components/comman/InquiryForm2";
import { useState } from "react";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [enquiry, setEnquiry] = useState(false);

  const calculateBMI = () => {
    if (!weight || !feet || !inches) return;
    const heightInInches = parseInt(feet) * 12 + parseInt(inches);
    const bmiValue =
      (parseFloat(weight) / (heightInInches * heightInInches)) * 703;
    setBmi(bmiValue.toFixed(1));
    setCategory(getBMICategory(bmiValue));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obese";
  };

  return (
    <div>
      <div className="py-10">
        <div className="p-5 max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center md:flex-row">
            {/* Left Side Content */}
            <div className="p-6 text-center md:text-left md:w-1/2">
              <h2 className="text-4xl text-black font-bold">
                WEIGHT LOST. <span className="text-red-500">LIFE GAINED.</span>
              </h2>
              <p className="text-gray-700 mt-4">
                The Center for Disease Control estimates that more than 40
                percent of Americans are obese, meaning they have a Body Mass
                Index (BMI) score greater than 30. The higher your score, the
                more you are at risk for obesity-related conditions such as
                heart disease, stroke, diabetes, and more.
              </p>
            </div>

            {/* BMI Calculator */}
            <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
              <h2 className="text-gray-800 text-xl font-semibold mb-4">
                Is your Body Mass Index above 30? Find out now.
              </h2>
              <div className="mb-4">
                <label className="text-gray-700 block">Weight (lbs)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="border p-2 rounded w-full"
                  placeholder="Enter weight"
                />
              </div>
              <div className="flex mb-4 space-x-2">
                <div className="w-1/2">
                  <label className="text-gray-700 block">Height (feet)</label>
                  <input
                    type="number"
                    value={feet}
                    onChange={(e) => setFeet(e.target.value)}
                    className="border p-2 rounded w-full"
                    placeholder="Feet"
                  />
                </div>
                <div className="w-1/2">
                  <label className="text-gray-700 block">Height (inches)</label>
                  <input
                    type="number"
                    value={inches}
                    onChange={(e) => setInches(e.target.value)}
                    className="border p-2 rounded w-full"
                    placeholder="Inches"
                  />
                </div>
              </div>
              <button
                onClick={calculateBMI}
                className="bg-red-500 rounded-lg text-white w-full font-semibold py-2"
              >
                Calculate BMI
              </button>
              {bmi && (
                <div className="text-center mt-4">
                  <p className="text-lg font-semibold">Your BMI: {bmi}</p>
                  <p className="text-gray-700">Category: {category}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <button
          onClick={() => setEnquiry(true)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-300 cursor-pointer rounded-lg shadow-md text-gray-900 text-lg font-semibold gap-3 hover:bg-cyan-400 inline-flex items-center px-6 sm:px-8 md:px-20 py-2 sm:py-3 transition duration-300"
        >
          Contact Now
        </button>
      </div>
      <br />
      <br />

      {enquiry && (
        <InquiryForm2 onClose={() => setEnquiry(false)} enquiry={enquiry} />
      )}
    </div>
  );
}
