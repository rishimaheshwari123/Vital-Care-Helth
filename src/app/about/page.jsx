"use client";
import AboutVitalCareHealth from "@/components/core/about/AboutVitalCareHealth";
import MeetOurFounder from "@/components/core/about/MeetOurFounder";
import { useState } from "react";

const InfoTabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="  text-gray-800">
      <br />
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 cursor-pointer py-2 mr-2 text-lg font-semibold border-b-2 ${
            activeTab === "about"
              ? "border-blue-500 text-blue-600"
              : "border-transparent"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About VitalCare Health
        </button>
        <button
          className={`px-4 cursor-pointer py-2 text-lg font-semibold border-b-2 ${
            activeTab === "founder"
              ? "border-blue-500 text-blue-600"
              : "border-transparent"
          }`}
          onClick={() => setActiveTab("founder")}
        >
          Meet Our Founder
        </button>
      </div>

      {activeTab === "about" && <AboutVitalCareHealth />}
      {activeTab === "founder" && <MeetOurFounder />}
    </section>
  );
};

export default InfoTabs;
