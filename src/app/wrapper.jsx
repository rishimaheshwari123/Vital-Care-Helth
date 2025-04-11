"use client";

import Navbar from "@/components/comman/Navbar";
import "./globals.css";
import Footer from "@/components/comman/Footer";
import { useEffect, useState } from "react";
import InquiryForm from "@/components/comman/InquiryForm";
import InquiryForm2 from "@/components/comman/InquiryForm2";

const Wrapper = ({ children }) => {
  const [showModal, setShowModal] = useState(true);
  const [enquiry, setEnquiry] = useState(false); // Initially false to show form only when button is clicked

  const handleCloseModal = () => {
    setShowModal(false);
    setEnquiry(false);
  };

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div>
      <Navbar />

      {showModal && (
        <InquiryForm onClose={handleCloseModal} showModal={showModal} />
      )}

      <div className="mt-32">{children}</div>

      <button
        onClick={() => setEnquiry(true)}
        className="fixed cursor-pointer bottom-4 -right-10 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg z-50"
      >
        Get Inquiry
      </button>

      {enquiry && (
        <InquiryForm2 onClose={() => setEnquiry(false)} enquiry={enquiry} />
      )}

      <Footer />
    </div>
  );
};

export default Wrapper;
