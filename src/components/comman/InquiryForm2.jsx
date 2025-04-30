"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
} from "react-icons/fa";
import Swal from "sweetalert2";

const sendContactForm = async (formData) => {
  Swal.fire({
    title: "Loading...",
    text: "Please wait while we process your request.",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  try {
    const response = await axios.post(
      // "http://localhost:8080/api/v1/contact/create",
      "https://api.vitalcarega.com/api/v1/contact/create",
      formData
    );
    if (response?.data) {
      Swal.fire({
        title: "Good job!",
        text: "Your message has been sent successfully!",
        icon: "success",
      });
    }
    return response;
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error!",
      text: "There was a problem sending your message. Please try again later.",
      icon: "error",
    });
  }
};

export default function InquiryForm2({ onClose, enquiry }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.contact) {
      alert("Please fill all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await sendContactForm(formData);

      if (response?.data?.success) {
        onClose();
      }
    } catch (error) {
      alert(
        "There was a problem sending your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!enquiry) return null;
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={20} />
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-[15px] font-semibold mb-2">Inquiry Form</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="flex items-center mb-1 text-sm font-medium"
            >
              <span className="mr-2">
                <FaUser className="text-[#0097a3c3]" />
              </span>
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="flex items-center mb-1 text-sm font-medium"
            >
              <span className="mr-2">
                <FaEnvelope className="text-[#0097a3c3]" />
              </span>
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="contact"
              className="flex items-center mb-1 text-sm font-medium"
            >
              <span className="mr-2">
                <FaPhone className="text-[#0097a3c3]" />
              </span>
              Contact Number:
            </label>
            <input
              type="text"
              id="contact"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your contact number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="flex items-center mb-1 text-sm font-medium"
            >
              <span className="mr-2">
                <FaComment className="text-[#0097a3c3]" />
              </span>
              Message:
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded-md min-h-[100px]"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full p-2 bg-[#0097a3c3] text-white rounded-md hover:cursor-pointer disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
