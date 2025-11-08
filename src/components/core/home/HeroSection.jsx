"use client";
import Image from "next/image";
import hero from "@/assets/newbannerII.jpg";
import topLogo from "@/assets/toplogo.avif";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaClock, FaUserMd, FaAward, FaShieldAlt, FaHeart } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate trust indicators
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Mouse move effect for interactive elements
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const trustStats = [
    { icon: <FaAward />, label: "Award-Winning Care", value: "Top Rated" },
    { icon: <FaShieldAlt />, label: "Licensed Professionals", value: "100%" },
    { icon: <FaHeart />, label: "Patient Satisfaction", value: "5 Star" },
  ];

  // Calculate parallax values
  const parallaxBg = scrollY * 0.5;
  const parallaxContent = scrollY * 0.3;
  const parallaxFloating = scrollY * 0.2;

  // Mouse parallax effect
  const mouseParallaxX = (mousePosition.x - 0.5) * 20;
  const mouseParallaxY = (mousePosition.y - 0.5) * 20;

  return (
    <div 
      ref={heroRef}
      className="min-h-screen relative overflow-hidden"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Background Image with Advanced Gradient Overlay & Parallax */}
      <div 
        className="absolute inset-0 -z-10 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${parallaxBg}px) scale(1.1)`,
        }}
      >
        <Image
          src={hero}
          alt="VitalCare Health - Locally Owned Healthcare in Peachtree City, GA"
          className="w-full h-full object-cover"
          priority
          quality={90}
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1d3a]/95 via-[#0a1d3a]/80 to-[#005d67]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Advanced Animated Floating Elements with Mouse Interaction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#00BFB3]/10 rounded-full blur-3xl animate-pulse transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mouseParallaxX * 0.5}px, ${mouseParallaxY * 0.5 + parallaxFloating}px) scale(${1 + scrollY * 0.0005})`,
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#1abbc4]/10 rounded-full blur-3xl animate-pulse transition-transform duration-300 ease-out" 
          style={{ 
            animationDelay: '2s',
            transform: `translate(${-mouseParallaxX * 0.3}px, ${-mouseParallaxY * 0.3 + parallaxFloating * 0.8}px) scale(${1 + scrollY * 0.0003})`,
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FDB913]/5 rounded-full blur-3xl animate-pulse transition-transform duration-500 ease-out"
          style={{
            animationDelay: '1s',
            transform: `translate(-50%, -50%) translate(${mouseParallaxX}px, ${mouseParallaxY}px) scale(${1 + scrollY * 0.0004})`,
          }}
        ></div>
      </div>

      {/* Premium Badge - Top Right for Large Devices with Advanced Animations */}
      <div className="hidden lg:block">
        <div 
          className={`absolute top-24 right-20 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 transform transition-all duration-700 hover:scale-110 hover:rotate-2 hover:shadow-[0_20px_60px_rgba(0,191,179,0.4)] group ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
          style={{
            transform: `translateY(${parallaxContent * 0.5}px) translateX(${-mouseParallaxX * 0.3}px)`,
          }}
        >
          <div className="relative">
            <Image
              src={topLogo}
              alt="Award Badge"
              className="w-56 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
          <div className="mt-3 text-center">
            <p className="text-[#0097a3] font-bold text-sm group-hover:text-[#00BFB3] transition-colors duration-300">Trusted Healthcare Provider</p>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00BFB3]/0 via-[#00BFB3]/20 to-[#00BFB3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        </div>
      </div>

      {/* Main Content Container with Parallax */}
      <div 
        className="relative z-10 min-h-screen flex items-center transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${parallaxContent}px)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-0 w-full">
          
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center text-center space-y-8">
            {/* Mobile Badge */}
            <div 
              className={`bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-700 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
            >
              <Image
                src={topLogo}
                alt="Award Badge"
                className="w-40 h-auto object-contain"
              />
              <p className="text-[#0097a3] font-bold text-xs mt-2">Trusted Healthcare</p>
            </div>

            {/* Mobile Heading with Enhanced Design */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div 
                  className={`inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 transform transition-all duration-700 delay-100 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <p className="text-[#00BFB3] font-bold text-sm">🏥 Locally Owned & Operated</p>
                </div>
                
                <h1 
                  className={`text-4xl sm:text-5xl font-extrabold text-white leading-tight transform transition-all duration-700 delay-200 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  Your Health Is Our{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFB3] via-[#1abbc4] to-[#00BFB3] animate-gradient">
                      Priority
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00BFB3] to-[#1abbc4] rounded-full"></span>
                  </span>
                </h1>
              </div>
              
              <p 
                className={`text-lg text-gray-200 max-w-xl mx-auto leading-relaxed transform transition-all duration-700 delay-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Experience compassionate, comprehensive healthcare with same-day appointments and expert medical professionals dedicated to your wellness.
              </p>
            </div>

            {/* Mobile Trust Indicators - Enhanced */}
            <div 
              className={`flex flex-wrap justify-center gap-3 text-white transform transition-all duration-700 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg hover:bg-white/25 transition-all duration-300">
                <FaClock className="text-[#00BFB3] text-lg" />
                <span className="text-sm font-semibold">Same Day Care</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg hover:bg-white/25 transition-all duration-300">
                <FaUserMd className="text-[#00BFB3] text-lg" />
                <span className="text-sm font-semibold">Expert Team</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg hover:bg-white/25 transition-all duration-300">
                <FaCheckCircle className="text-[#00BFB3] text-lg" />
                <span className="text-sm font-semibold">Walk-Ins Welcome</span>
              </div>
            </div>

            {/* Mobile CTAs - Premium Design */}
            <div 
              className={`flex flex-col gap-4 w-full max-w-md transform transition-all duration-700 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Link
                href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-5 w-full text-lg font-extrabold text-white bg-gradient-to-r from-[#00BFB3] via-[#1abbc4] to-[#00BFB3] rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_rgba(0,191,179,0.6)] transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 border-2 border-white/20 hover:border-white/40"
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'gradient-shift 3s ease infinite',
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FaCheckCircle className="text-2xl animate-pulse group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500" />
                  <span className="text-center group-hover:tracking-wider transition-all duration-300">ACCEPTING NEW PATIENTS NOW!</span>
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              </Link>
              
              <Link
                href="/membership"
                className="group relative flex items-center justify-center gap-3 px-8 py-5 w-full text-lg font-bold text-[#0097a3] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.8)] transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 border-2 border-white/50 hover:border-[#00BFB3] overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-[#00BFB3] transition-colors duration-300">Annual Membership</span>
                <span className="relative z-10 text-2xl font-extrabold text-[#EF4444] animate-pulse group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">$399</span>
                <FaArrowRight className="relative z-10 text-xl group-hover:translate-x-3 group-hover:scale-125 transition-all duration-500" />
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00BFB3]/0 via-[#00BFB3]/10 to-[#00BFB3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            </div>

            {/* IV HYDRATION BANNER - Mobile */}
            <div 
              className={`w-full max-w-md relative bg-gradient-to-r from-[#00BFB3] via-[#1abbc4] to-[#00BFB3] rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              
              <div className="relative p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl animate-bounce">
                      💧
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-white/30 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white/20 animate-pulse">
                        ✨ NOW AVAILABLE
                      </span>
                      <span className="text-white font-extrabold text-lg drop-shadow-lg">
                        IV Hydration Therapy
                      </span>
                    </div>
                    <p className="text-white/95 text-sm leading-relaxed font-medium">
                      Fast, effective treatment to replenish fluids, electrolytes, and nutrients.
                    </p>
                  </div>
                </div>
                <Link
                  href="/services/iv-hydration-therapy"
                  className="flex items-center justify-center gap-2 bg-white text-[#0097a3] font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-300 shadow-xl w-full"
                >
                  Learn More
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Premium Design */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div 
                  className={`inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg transform transition-all duration-700 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                >
                  <p className="text-[#00BFB3] font-bold text-base">🏥 Locally Owned & Operated</p>
                </div>
                
                <h1 
                  className={`text-6xl xl:text-7xl font-extrabold text-white leading-tight transform transition-all duration-700 delay-100 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                >
                  Your Health Is Our{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFB3] via-[#1abbc4] to-[#00BFB3]">
                      Priority
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#00BFB3] to-[#1abbc4] rounded-full"></span>
                  </span>
                </h1>
                
                <p 
                  className={`text-xl text-gray-200 max-w-xl leading-relaxed transform transition-all duration-700 delay-200 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                >
                  Experience compassionate, comprehensive healthcare with same-day appointments and expert medical professionals dedicated to your wellness journey.
                </p>
              </div>

              {/* Enhanced Trust Indicators with Advanced Hover */}
              <div 
                className={`flex flex-wrap gap-4 transform transition-all duration-700 delay-300 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              >
                <div className="group relative flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-lg hover:bg-white/30 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,191,179,0.4)] transition-all duration-500 overflow-hidden">
                  <FaClock className="text-[#00BFB3] text-2xl group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500 relative z-10" />
                  <span className="text-white font-semibold text-lg relative z-10">Same Day Appointments</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00BFB3]/0 via-[#00BFB3]/20 to-[#00BFB3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="group relative flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-lg hover:bg-white/30 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,191,179,0.4)] transition-all duration-500 overflow-hidden">
                  <FaUserMd className="text-[#00BFB3] text-2xl group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500 relative z-10" />
                  <span className="text-white font-semibold text-lg relative z-10">Expert Medical Team</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00BFB3]/0 via-[#00BFB3]/20 to-[#00BFB3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="group relative flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-lg hover:bg-white/30 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,191,179,0.4)] transition-all duration-500 overflow-hidden">
                  <FaCheckCircle className="text-[#00BFB3] text-2xl group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500 relative z-10" />
                  <span className="text-white font-semibold text-lg relative z-10">Walk-Ins Welcome</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00BFB3]/0 via-[#00BFB3]/20 to-[#00BFB3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Trust Stats Carousel */}
              <div 
                className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl transform transition-all duration-700 delay-400 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              >
                <div className="flex items-center justify-between">
                  {trustStats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00BFB3] to-[#1abbc4] rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">{stat.value}</p>
                        <p className="text-gray-300 text-sm">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Premium CTAs & Info */}
            <div 
              className={`space-y-6 transform transition-all duration-700 delay-500 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <Link
                href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center justify-center gap-4 px-10 py-6 w-full text-xl font-extrabold text-white bg-gradient-to-r from-[#00BFB3] via-[#1abbc4] to-[#00BFB3] rounded-3xl shadow-2xl hover:shadow-[#00BFB3]/60 transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
              >
                <span className="relative z-10 flex items-center gap-4">
                  <FaCheckCircle className="text-3xl animate-pulse" />
                  <span className="text-center">ACCEPTING NEW PATIENTS NOW!</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Link>
              
              <Link
                href="/membership"
                className="group relative flex items-center justify-center gap-4 px-10 py-6 w-full text-xl font-bold text-[#0097a3] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-white/60 transform hover:scale-105 transition-all duration-300 border-2 border-white/50"
              >
                <span className="text-lg">Annual Membership</span>
                <span className="text-3xl font-extrabold text-[#EF4444] animate-pulse">$399</span>
                <FaArrowRight className="text-2xl group-hover:translate-x-3 transition-transform" />
              </Link>

              {/* Enhanced Info Card */}
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 space-y-5 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00BFB3] to-[#1abbc4] rounded-xl flex items-center justify-center">
                    <FaHeart className="text-white text-xl" />
                  </div>
                  <p className="text-white font-bold text-xl">Why Choose VitalCare?</p>
                </div>
                <ul className="space-y-4 text-gray-100">
                  <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-6 h-6 bg-[#00BFB3] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <span className="text-base font-medium">Walk-ins welcome, no appointment needed</span>
                  </li>
                  <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-6 h-6 bg-[#00BFB3] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <span className="text-base font-medium">In-house labs for faster results</span>
                  </li>
                  <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-6 h-6 bg-[#00BFB3] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <span className="text-base font-medium">Telemedicine services available</span>
                  </li>
                  <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-6 h-6 bg-[#00BFB3] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <span className="text-base font-medium">Experienced medical professionals</span>
                  </li>
                </ul>
              </div>

              {/* IV HYDRATION BANNER - Below Why Choose */}
              <div 
                className={`relative bg-gradient-to-r from-[#00BFB3] via-[#1abbc4] to-[#00BFB3] rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 delay-600 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl animate-bounce">
                        💧
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-white/30 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white/20 animate-pulse">
                          ✨ NOW AVAILABLE
                        </span>
                        <span className="text-white font-extrabold text-lg drop-shadow-lg">
                          IV Hydration Therapy
                        </span>
                      </div>
                      <p className="text-white/95 text-sm leading-relaxed font-medium">
                        Fast, effective treatment to replenish fluids, electrolytes, and nutrients.
                      </p>
                    </div>
                    <Link
                      href="/services/iv-hydration-therapy"
                      className="flex items-center gap-2 bg-white text-[#0097a3] font-bold px-5 py-2.5 rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-xl"
                    >
                      Learn More
                      <FaArrowRight className="text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
