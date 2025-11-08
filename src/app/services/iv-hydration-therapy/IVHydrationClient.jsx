"use client";
import Image from "next/image";
import ivImage from "@/assets/ingection.png";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaCheckCircle, FaBolt, FaHeart, FaShieldAlt, FaArrowRight } from "react-icons/fa";

export default function IVHydrationClient() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which sections are visible
      Object.keys(sectionRefs.current).forEach(key => {
        const element = sectionRefs.current[key];
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          setIsVisible(prev => ({ ...prev, [key]: isInView }));
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxBg = scrollY * 0.5;

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <div 
        ref={el => sectionRefs.current['hero'] = el}
        className="relative flex flex-col gap-5 md:flex-row items-center bg-gradient-to-br from-[#f0fffe] to-white py-20 px-5 md:px-20 space-y-8 md:space-y-0 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute top-10 right-10 w-64 h-64 bg-[#00BFB3]/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${parallaxBg * 0.3}px)` }}
          ></div>
          <div 
            className="absolute bottom-10 left-10 w-96 h-96 bg-[#1abbc4]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s', transform: `translateY(${parallaxBg * 0.2}px)` }}
          ></div>
        </div>

        {/* Left Content */}
        <div 
          className={`md:w-1/2 text-left relative z-10 transform transition-all duration-1000 ${
            isVisible['hero'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
        >
          <div className="inline-block mb-4 animate-bounce-in">
            <span className="bg-gradient-to-r from-[#FDB913] to-[#f59e0b] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
              💧 NOW AVAILABLE
            </span>
          </div>
          <h1 className="text-lg font-bold text-[#0097a3] animate-slide-up-fade">
            Fast, Effective Hydration & Recovery
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mt-2 animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
            IV Hydration Therapy
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed animate-slide-up-fade" style={{ animationDelay: '200ms' }}>
            We're excited to offer IV Hydration Therapy to help you recover quickly and feel your best. 
            This treatment replenishes fluids, electrolytes, and nutrients directly into your bloodstream 
            for fast, effective results.
          </p>

          <div className="mt-6 space-y-3">
            {[
              { icon: <FaBolt />, text: "Relieve dehydration and fatigue", delay: '300ms' },
              { icon: <FaHeart />, text: "Support recovery from illness or workouts", delay: '400ms' },
              { icon: <FaShieldAlt />, text: "Boost energy and overall wellness", delay: '500ms' }
            ].map((item, index) => (
              <div 
                key={index}
                className="group flex items-center gap-3 animate-slide-up-fade hover:translate-x-2 transition-transform duration-300"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#00BFB3] to-[#1abbc4] rounded-lg flex items-center justify-center text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {item.icon}
                </div>
                <p className="text-gray-700 font-medium group-hover:text-[#0097a3] transition-colors duration-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 animate-slide-up-fade" style={{ animationDelay: '600ms' }}>
            <Link
              href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#00BFB3] to-[#1abbc4] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-[0_20px_60px_rgba(0,191,179,0.6)] transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Book Your IV Therapy</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </div>
        </div>

        {/* Right Image with Advanced Hover */}
        <div 
          className={`md:w-1/2 flex justify-center relative z-10 transform transition-all duration-1000 delay-300 ${
            isVisible['hero'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          <div className="group relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-500">
            <Image
              src={ivImage}
              alt="IV Hydration Therapy"
              width={500}
              height={400}
              className="w-full max-w-md transition-transform duration-700 group-hover:scale-110"
            />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00BFB3]/0 via-[#00BFB3]/30 to-[#00BFB3]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* Benefits Section with Split Design */}
      <section 
        ref={el => sectionRefs.current['benefits-split'] = el}
        className="relative bg-white overflow-hidden"
      >
        <div className="grid md:grid-cols-2 min-h-[500px]">
          {/* Left - Image with Parallax */}
          <div 
            className="relative overflow-hidden bg-gradient-to-br from-[#f0fffe] to-[#e0f7f6]"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <div className="relative w-full h-full max-w-md">
                {/* Animated water droplets */}
                <div className="absolute top-10 left-10 w-3 h-3 bg-[#00BFB3] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-20 right-20 w-2 h-2 bg-[#1abbc4] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-20 left-20 w-4 h-4 bg-[#00BFB3] rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                
                {/* Main visual element */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#FDB913] to-[#f59e0b] shadow-2xl animate-pulse flex items-center justify-center text-white text-8xl">
                    💧
                  </div>
                  {/* Bubbles effect */}
                  <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Benefits List */}
          <div 
            className={`bg-[#1a1a1a] text-white p-10 md:p-16 flex items-center transform transition-all duration-1000 ${
              isVisible['benefits-split'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Benefits of IV Vitamin Therapy:
              </h2>
              <ul className="space-y-6">
                {[
                  "Boost your immune system.",
                  "Relieve pain and inflammation.",
                  "Experience relief from medical condition's symptoms.",
                  "Regain your energy.",
                  "Balance your body's wellness inside and out."
                ].map((benefit, index) => (
                  <li 
                    key={index}
                    className={`flex items-start gap-4 group transform transition-all duration-500 hover:translate-x-2 ${
                      isVisible['benefits-split'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00BFB3] flex items-center justify-center mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <span className="text-lg group-hover:text-[#00BFB3] transition-colors duration-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={el => sectionRefs.current['benefits'] = el}
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible['benefits'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-lg font-bold text-[#0097a3]">
              Professional Care You Can Trust
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mt-2">
              Why Choose IV Hydration Therapy?
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Fast Results", desc: "Direct delivery into your bloodstream means immediate absorption and faster relief compared to oral hydration methods.", delay: 0 },
              { icon: "💪", title: "Enhanced Recovery", desc: "Perfect for post-workout recovery, illness recovery, or combating the effects of dehydration from travel or heat.", delay: 100 },
              { icon: "🎯", title: "Customized Treatment", desc: "Our experienced medical team tailors each IV therapy session to your specific needs and health goals.", delay: 200 }
            ].map((benefit, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br from-[#f0fffe] to-white p-8 rounded-2xl shadow-lg hover:shadow-[0_20px_60px_rgba(0,191,179,0.3)] transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 overflow-hidden ${
                  isVisible['benefits'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${benefit.delay}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BFB3]/0 to-[#1abbc4]/0 group-hover:from-[#00BFB3]/10 group-hover:to-[#1abbc4]/10 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00BFB3] to-[#1abbc4] rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-[0_10px_30px_rgba(0,191,179,0.5)]">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{benefit.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3 group-hover:text-[#0097a3] transition-colors duration-300">{benefit.title}</h4>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {benefit.desc}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section 
        ref={el => sectionRefs.current['consultation'] = el}
        className="relative bg-gradient-to-br from-[#f8f9fa] to-white py-20 px-5 md:px-20 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #0097a3 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div 
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible['consultation'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Your Journey to Wellness
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience a seamless consultation process designed for your comfort and care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Initial Consultation", 
                desc: "Our medical team will assess your needs and discuss the best IV therapy option for you.",
                icon: "👨‍⚕️"
              },
              { 
                step: "02", 
                title: "Discussing Needs and Developing Plan", 
                desc: "We'll evaluate your health needs holistically and recommend the most suitable services.",
                icon: "📋"
              },
              { 
                step: "03", 
                title: "Executing the Plan", 
                desc: "Relax in our comfortable setting while the IV therapy is administered safely by our professionals.",
                icon: "💉"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-[0_20px_60px_rgba(0,151,163,0.3)] transform hover:-translate-y-4 transition-all duration-700 overflow-hidden ${
                  isVisible['consultation'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-[#0097a3]/10 group-hover:text-[#00BFB3]/20 transition-colors duration-500">
                  {item.step}
                </div>

                <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-[#00BFB3] to-[#1abbc4] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <span className="text-4xl">{item.icon}</span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#0097a3] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#00BFB3]/0 to-[#1abbc4]/0 group-hover:from-[#00BFB3]/5 group-hover:to-[#1abbc4]/5 transition-all duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Feel Refreshed and Recharged?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Walk in today or call to learn more about how IV Hydration Therapy can help you feel your best.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://healow.com/apps/practice/vitalcare-health-inc-26732?v=2&t=1"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00BFB3] to-[#1abbc4] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Book Appointment
              <FaArrowRight />
            </Link>
            
            <a
              href="tel:+14708513800"
              className="inline-flex items-center gap-2 bg-white text-[#0097a3] border-2 border-[#0097a3] font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-[#0097a3] hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (470) 851-3800
            </a>
          </div>

          <div className="mt-8 p-6 bg-[#f0fffe] rounded-xl">
            <p className="text-gray-700 font-medium">
              📍 <strong>Location:</strong> 8 Eastbrook Bend B, Peachtree City, GA 30269
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Hours:</strong> Mon-Fri: 9am-7pm | Sat: 9am-4pm | Sun: Closed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
