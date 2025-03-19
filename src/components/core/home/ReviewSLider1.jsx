"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image:
      "https://scottsdaleweightloss.com/wp-content/uploads/2024/10/2-lauren_weight-loss-before-and-after-scottsdale-weight-loss-center.webp",
    title: "Trusted Weight Loss Journey",
    description:
      "Discover expert-led weight loss programs tailored to your health goals. Our specialists guide you through sustainable methods for effective weight management, ensuring you achieve lasting results. With a focus on balanced nutrition, personalized workout routines, and behavioral coaching, we empower you to build a healthier lifestyle that fits your needs.",
  },
  {
    id: 2,
    image:
      "https://scottsdaleweightloss.com/wp-content/uploads/2024/10/2-lauren_weight-loss-before-and-after-scottsdale-weight-loss-center.webp",
    title: "Personalized Health Plans",
    description:
      "Custom diet and fitness plans designed for long-term well-being. Get recommendations based on your unique body needs and lifestyle preferences. Our expert team assesses your health history, dietary patterns, and fitness levels to craft a tailored approach that helps you reach your goals in a safe and effective manner. Whether you're looking to lose weight, gain muscle, or maintain a healthy lifestyle, we provide the support you need.",
  },
  {
    id: 3,
    image:
      "https://scottsdaleweightloss.com/wp-content/uploads/2024/10/2-lauren_weight-loss-before-and-after-scottsdale-weight-loss-center.webp",
    title: "Expert Healthcare Guidance",
    description:
      "Access top doctors and dietitians for professional health advice. Our approach ensures you receive medically-backed recommendations that align with your personal health goals. From metabolic rate assessments to nutritional counseling and medical evaluations, we provide comprehensive insights to help you make informed decisions. Whether managing chronic conditions or optimizing your fitness, our healthcare professionals are here to guide you every step of the way.",
  },
  {
    id: 4,
    image:
      "https://scottsdaleweightloss.com/wp-content/uploads/2024/10/2-lauren_weight-loss-before-and-after-scottsdale-weight-loss-center.webp",
    title: "Sustainable Lifestyle Changes",
    description:
      "Adopt lasting healthy habits with science-backed recommendations. Make small, manageable changes for a lifetime of wellness. Our program encourages gradual improvements in your eating habits, exercise routines, and mindset, ensuring you sustain progress without feeling overwhelmed. By integrating practical strategies into your daily routine, you can enjoy a balanced, fulfilling life with improved energy levels, better mental clarity, and overall well-being.",
  },
];

const ReviewSlider1 = () => {
  return (
    <div className="w-full max-w-4xl  sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto px-3 sm:px-4 py-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        className="pb-12" // Add padding bottom for pagination bullets
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex h-[95vh] flex-col items-center bg-white shadow-md rounded-xl p-3 sm:p-4 md:p-6">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-cover rounded-full"
              />
              <h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base text-center mt-2">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider1;
