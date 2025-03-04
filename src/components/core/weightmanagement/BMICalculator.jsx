"use client";
import { useState } from "react";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

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
    <div className="bg-[#cedfe3]">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh]">
          {/* Left Side Content */}
          <div className="md:w-1/2 text-center md:text-left p-6">
            <h1 className="text-4xl font-bold text-black">
              WEIGHT LOST. <span className="text-red-500">LIFE GAINED.</span>
            </h1>
            <p className="mt-4 text-gray-700">
              The Center for Disease Control estimates that more than 40 percent
              of Americans are obese, meaning they have a Body Mass Index (BMI)
              score greater than 30. The higher your score, the more you are at
              risk for obesity-related conditions such as heart disease, stroke,
              diabetes, and more.
            </p>
          </div>

          {/* BMI Calculator */}
          <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Is your Body Mass Index above 30? Find out now.
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700">Weight (lbs)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter weight"
              />
            </div>
            <div className="mb-4 flex space-x-2">
              <div className="w-1/2">
                <label className="block text-gray-700">Height (feet)</label>
                <input
                  type="number"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Feet"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Height (inches)</label>
                <input
                  type="number"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Inches"
                />
              </div>
            </div>
            <button
              onClick={calculateBMI}
              className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold"
            >
              Calculate BMI
            </button>
            {bmi && (
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold">Your BMI: {bmi}</p>
                <p className="text-gray-700">Category: {category}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
