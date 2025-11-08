"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";
import Swal from "sweetalert2";

const sendContactForm = async (formData) => {
  Swal.fire({
    title: "Sending...",
    text: "Please wait while we process your request.",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  try {
    const response = await axios.post(
      "https://api.vitalcarega.com/api/v1/contact/create",
      formData
    );
    if (response?.data) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully! We'll get back to you soon.",
        icon: "success",
        confirmButtonColor: "#0097a3",
      });
    }
    return response;
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error!",
      text: "There was a problem sending your message. Please try again later.",
      icon: "error",
      confirmButtonColor: "#EF4444",
    });
  }
};

export default function InquiryDrawer({ onClose, showModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (showModal) {
      // Delay to trigger animation
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [showModal]);

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
      Swal.fire({
        title: "Missing Information",
        text: "Please fill all required fields",
        icon: "warning",
        confirmButtonColor: "#0097a3",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await sendContactForm(formData);

      if (response?.data?.success) {
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
        setTimeout(() => onClose(), 1500);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  if (!showModal || !isClient) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      ></div>

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white shadow-2xl z-50 transform transition-all duration-500 ease-out overflow-y-auto ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#0097a3] to-[#00BFB3] text-white p-6 shadow-lg z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <FaPaperPlane className="text-white" />
                Get In Touch
              </h2>
              <p className="text-white/90 text-sm mt-1">We're here to help you!</p>
            </div>
            <button
              onClick={handleClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:rotate-90 transform"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Quick Actions */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-gray-700 mb-3">Quick Actions:</p>
            <div className="grid grid-cols-2 gap-3">
              <Link
                onClick={handleClose}
                href="/urgent-care"
                className="group relative overflow-hidden p-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="relative z-10">
                  <div className="text-2xl mb-1">🚨</div>
                  <div className="font-semibold text-sm">Urgent Care</div>
                </div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
              
              <Link
                onClick={handleClose}
                href="/services/iv-hydration-therapy"
                className="group relative overflow-hidden p-4 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="relative z-10">
                  <div className="text-2xl mb-1">💧</div>
                  <div className="font-semibold text-sm">IV Hydration</div>
                </div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>

              <Link
                onClick={handleClose}
                href="/weight-management"
                className="group relative overflow-hidden p-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="relative z-10">
                  <div className="text-2xl mb-1">💪</div>
                  <div className="font-semibold text-sm">Weight Loss</div>
                </div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>

              <Link
                onClick={handleClose}
                href="/services/annual-physicals"
                className="group relative overflow-hidden p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="relative z-10">
                  <div className="text-2xl mb-1">🩺</div>
                  <div className="font-semibold text-sm">Annual Physical</div>
                </div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>

              <Link
                onClick={handleClose}
                href="/services/telemedicine"
                className="group relative overflow-hidden p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="relative z-10">
                  <div className="text-2xl mb-1">📱</div>
                  <div className="font-semibold text-sm">Telemedicine</div>
                </div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>

              <Link
                onClick={handleClose}
                href="/services/covid-19-testing"
                className="group relative overflow-hidden p-4 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="relative z-10">
                  <div className="text-2xl mb-1">🦠</div>
                  <div className="font-semibold text-sm">COVID Testing</div>
                </div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>

              <Link
                onClick={handleClose}
                href="/services/diabetes-managements"
                className="group relative overflow-hidden p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="relative z-10">
                  <div className="text-2xl mb-1">💉</div>
                  <div className="font-semibold text-sm">Diabetes Care</div>
                </div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>

              <Link
                onClick={handleClose}
                href="/services"
                className="group relative overflow-hidden p-4 bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="relative z-10">
                  <div className="text-2xl mb-1">➕</div>
                  <div className="font-semibold text-sm">All Services</div>
                </div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="group">
              <label
                htmlFor="name"
                className="flex items-center mb-2 text-sm font-semibold text-gray-700"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0097a3]/10 mr-2 group-hover:bg-[#0097a3]/20 transition-colors">
                  <FaUser className="text-[#0097a3]" />
                </span>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#0097a3] focus:ring-2 focus:ring-[#0097a3]/20 outline-none transition-all duration-300"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="group">
              <label
                htmlFor="email"
                className="flex items-center mb-2 text-sm font-semibold text-gray-700"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0097a3]/10 mr-2 group-hover:bg-[#0097a3]/20 transition-colors">
                  <FaEnvelope className="text-[#0097a3]" />
                </span>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#0097a3] focus:ring-2 focus:ring-[#0097a3]/20 outline-none transition-all duration-300"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Field */}
            <div className="group">
              <label
                htmlFor="contact"
                className="flex items-center mb-2 text-sm font-semibold text-gray-700"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0097a3]/10 mr-2 group-hover:bg-[#0097a3]/20 transition-colors">
                  <FaPhone className="text-[#0097a3]" />
                </span>
                Phone Number *
              </label>
              <input
                type="tel"
                id="contact"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#0097a3] focus:ring-2 focus:ring-[#0097a3]/20 outline-none transition-all duration-300"
                placeholder="(555) 123-4567"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message Field */}
            <div className="group">
              <label
                htmlFor="message"
                className="flex items-center mb-2 text-sm font-semibold text-gray-700"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0097a3]/10 mr-2 group-hover:bg-[#0097a3]/20 transition-colors">
                  <FaComment className="text-[#0097a3]" />
                </span>
                Message (Optional)
              </label>
              <textarea
                id="message"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#0097a3] focus:ring-2 focus:ring-[#0097a3]/20 outline-none transition-all duration-300 min-h-[120px] resize-none"
                placeholder="Tell us how we can help you..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group relative w-full p-4 bg-gradient-to-r from-[#0097a3] to-[#00BFB3] text-white rounded-xl font-bold text-lg hover:shadow-[0_10px_40px_rgba(0,191,179,0.4)] transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
              disabled={isSubmitting}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 p-5 bg-gradient-to-br from-[#f0fffe] to-white rounded-xl border border-[#0097a3]/20">
            <p className="text-sm font-semibold text-gray-700 mb-3">Or reach us directly:</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <FaPhone className="text-[#0097a3]" />
                <a href="tel:+14708513800" className="hover:text-[#0097a3] transition-colors">
                  (470) 851-3800
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#0097a3]" />
                <a href="mailto:info@vitalcarega.com" className="hover:text-[#0097a3] transition-colors">
                  info@vitalcarega.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
