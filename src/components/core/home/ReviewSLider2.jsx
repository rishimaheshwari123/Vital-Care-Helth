"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "I so appreciate all the support and success I have with SWLC!",
    reviewer: "Deborah W",
    time: "2 weeks ago",
  },
  {
    id: 2,
    rating: 5,
    text: "Amazing service! The team really cares about your progress.",
    reviewer: "John D",
    time: "1 month ago",
  },
  {
    id: 3,
    rating: 4,
    text: "Very professional and supportive throughout my journey!",
    reviewer: "Sarah P",
    time: "3 weeks ago",
  },
];

const ReviewSlider = () => {
  return (
    <div className=" w-full lg:max-w-md mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        Reviews
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll every 3 seconds
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0096A5]">
                Excellent rating
              </h3>
              <p className="text-gray-600 text-sm">Based on 450 reviews</p>
              <div className="flex items-center mt-2">
                <FaCheckCircle className="text-[#0096A5] mr-2" />
                <span className="font-semibold text-gray-700">Trustindex</span>
              </div>
              <div className="flex items-center mt-2">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-800 text-lg italic mt-3">
                "{review.text}"
              </p>
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#0096A5] text-white font-bold rounded-full">
                  {review.reviewer[0]}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-700">
                    {review.reviewer}
                  </h4>
                  <p className="text-gray-500 text-sm">{review.time}</p>
                </div>
              </div>
              <div className="bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-lg mt-4 inline-block">
                Verified by VitalCare
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
