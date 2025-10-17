"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 🎓 React icons for education subjects
import {
  FaCalculator,
  FaFlask,
  FaGlobe,
  FaBookOpen,
  FaAtom,
  FaLaptopCode,
  FaBrain,
  FaMusic,
  FaLanguage,
  FaMicroscope,
  FaPalette,
  FaBalanceScale,
  FaLeaf,
  FaHistory,
  FaChartBar,
} from "react-icons/fa";

const categories = [
  { name: "Mathematics", icon: <FaCalculator className="text-emerald-600" size={28} /> },
  { name: "Physics", icon: <FaAtom className="text-emerald-600" size={28} /> },
  { name: "Chemistry", icon: <FaFlask className="text-emerald-600" size={28} /> },
  { name: "Biology", icon: <FaMicroscope className="text-emerald-600" size={28} /> },
  { name: "Computer Science", icon: <FaLaptopCode className="text-emerald-600" size={28} /> },
  { name: "Geography", icon: <FaGlobe className="text-emerald-600" size={28} /> },
  { name: "Economics", icon: <FaChartBar className="text-emerald-600" size={28} /> },
  { name: "History", icon: <FaHistory className="text-emerald-600" size={28} /> },
  { name: "Psychology", icon: <FaBrain className="text-emerald-600" size={28} /> },
  { name: "Law", icon: <FaBalanceScale className="text-emerald-600" size={28} /> },
  { name: "Languages", icon: <FaLanguage className="text-emerald-600" size={28} /> },
  { name: "Art & Design", icon: <FaPalette className="text-emerald-600" size={28} /> },
  { name: "Environmental Studies", icon: <FaLeaf className="text-emerald-600" size={28} /> },
  { name: "Literature", icon: <FaBookOpen className="text-emerald-600" size={28} /> },
  { name: "Music", icon: <FaMusic className="text-emerald-600" size={28} /> },
];

export default function Categories() {
  return (
    <section className="pt-10">
      <div className="max-w-6xl mx-auto text-center px-6 lg:px-0">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Our <span className="text-emerald-600">Categories</span>
        </h2>

        <div className="relative overflow-hidden z-10">
          {/* Left fade */}
          <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-30 bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* Right fade */}
          <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-30 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Swiper Carousel with Pagination */}
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 28 },
              1280: { slidesPerView: 6, spaceBetween: 32 },
            }}
            className="pb-10"
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index}
              className="py-6"
              >
                <div
                  className="w-40 h-48 flex flex-col items-center justify-center 
                             border rounded-2xl bg-white shadow-md hover:scale-95 
                             transition-all duration-300 mx-auto"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 mb-3">
                    {cat.icon}
                  </div>
                  <p className="text-gray-900 font-medium text-base px-2">{cat.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
