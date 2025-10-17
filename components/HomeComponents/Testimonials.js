"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    { user: "Emma Thompson", comment: "Absolutely transformative experience! The platform is intuitive and exceeded my expectations." },
    { user: "Liam Chen", comment: "Incredible support and features. It’s made my workflow so much smoother!" },
    { user: "Sophia Martinez", comment: "I love how user-friendly everything is. Highly recommend to everyone!" },
    { user: "Noah Patel", comment: "The best tool I’ve used in years. It’s a game-changer for productivity." },
    { user: "Ava Nguyen", comment: "Fantastic service! The team was super helpful and responsive." },
  ];

  return (
    <div className="container mx-auto  max-w-6xl py-10 px-6 lg:px-0">
      <h2 className="text-4xl font-bold text-center mb-6 text-black">Testimonials</h2>
      <div className="relative overflow-hidden z-10">
          {/* Left & Right fade */}
          <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-30 bg-gradient-to-r from-teal-50 to-transparent z-10"></div>
          <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-30 bg-gradient-to-l from-teal-50 to-transparent z-10"></div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        modules={[Autoplay, Pagination]}
        className="pb-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}
          className=" py-10"
          >
            <div className="bg-gradient-to-r from-pink-100 to-emerald-100 p-6 rounded-lg shadow-md flex flex-col justify-center items-center w-[300px] h-[200px] mx-auto ">
              <p className="text-gray-700 italic text-center text-sm">"{testimonial.comment}"</p>
              <p className="mt-4 font-semibold text-gray-900">{testimonial.user}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="text-black text-center">
            <h3 className="text-3xl py-6 font-semibold">Interested in Our Courses ?</h3>
            <p>Register now to get Environmental
                  <span className="ml-4">
                        <Link
            href="/contact-us"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-full font-semibold transition ">
              Register →
            </Link>
                  </span>
            </p>
      </div>
    </div>
  );
};

export default Testimonials;
