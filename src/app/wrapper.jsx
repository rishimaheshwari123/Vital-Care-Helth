"use client";

"use client";
import Navbar from "@/components/comman/Navbar";
import "./globals.css";
import Footer from "@/components/comman/Footer";
import { useEffect, useState } from "react";
import InquiryForm from "@/components/comman/InquiryForm";

const Wrapper = ({ children }) => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  function handleCloseModal() {
    setShowModal(false);
  }

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <Navbar />
      {/* {showModal && (
        <InquiryForm onClose={handleCloseModal} showModal={showModal} />
      )} */}
      <div className="mt-32">{children}</div>

      <Footer />
    </div>
  );
};

export default Wrapper;
