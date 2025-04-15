"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import r1 from "@/assets/revies/r1.webp";
import r2 from "@/assets/revies/r2.jpg";
import r3 from "@/assets/revies/r3.jpg";
import r4 from "@/assets/revies/r4.jpg";
import Image from "next/image";
const data = [
  {
    id: 1,
    image: r1,
    title: "Trusted Weight Loss Journey",
    description:
      "Discover expert-led weight loss programs tailored to your health goals. Discover expert-led weight loss programs tailored to your health goals Discover expert-led weight loss programs tailored to your health goals",
  },
  {
    id: 2,
    image: r2,
    title: "Personalized Health Plans",

    description:
      "Custom diet and fitness plans designed for long-term well-being. Get recommendations based on your unique body needs and lifestyle preferences. Our expert team assesses your health history, dietary patterns, ",
  },
  {
    id: 3,
    image: r3,
    title: "Expert Healthcare Guidance",

    description:
      "Access top doctors and dietitians for professional health advice. Our approach ensures you receive medically-backed recommendations that align with your personal health goals. From  .",
  },
  {
    id: 4,
    image: r4,
    title: "Sustainable Lifestyle Changes",

    description:
      "Adopt lasting healthy habits with science-backed recommendations. Make small, manageable changes for a lifetime of wellness. Our program encourages gradual improvements in your .",
  },
];

const ReviewSlider1 = () => {
  return (
    <div className="w-full lg:max-w-4xl max-w-4xl md:max-w-2xl mx-auto px-3 py-4 sm:max-w-sm sm:px-4">
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
            <div className="flex flex-col bg-white p-3 rounded-xl shadow-md items-center md:p-6 sm:p-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={"not found"}
                className="h-[180px] rounded-full w-[180px] lg:h-[300px] lg:w-[300px] md:h-[250px] md:w-[250px] object-cover sm:h-[220px] sm:w-[220px]"
              />
              <p className="text-lg font-bold mt-3 sm:mt-4 sm:text-xl">
                {item.title}
              </p>
              <p className="text-center text-gray-700 text-sm mt-2 sm:text-base">
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
