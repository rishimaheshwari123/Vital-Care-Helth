"use client";

import Navbar from "@/components/comman/Navbar";
import "./globals.css";
import Footer from "@/components/comman/Footer";
import { useEffect, useState } from "react";
import InquiryDrawer from "@/components/comman/InquiryDrawer";

const Wrapper = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
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
        <InquiryDrawer onClose={handleCloseModal} showModal={showModal} />
      )}

      <div className="mt-32">{children}</div>

      <button
        onClick={() => setShowModal(true)} // ✅ Open Drawer
        className="fixed cursor-pointer bottom-4 -right-10 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg z-50"
      >
        Get Inquiry
      </button>

      <Footer />
    </div>
  );
};

export default Wrapper;
