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
    <div className="container mx-auto  max-w-7xl lg:mt-21 px-6 lg:px-0 mt-12">
      <h2 className="text-4xl font-bold text-center  text-black">Testimonials</h2>
      <div className="relative overflow-hidden z-10 mt-3">
          {/* Left & Right fade */}
          <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-30 bg-gradient-to-r from-slate-100 to-transparent z-10"></div>
          <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-30 bg-gradient-to-l from-slate-100 to-transparent z-10"></div>
      <Swiper
        slidesPerView={4}
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
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        modules={[Autoplay, Pagination]}
        className="pb-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}
          className=" py-10"
          >
            <div className="bg-sky-500 p-6 rounded-3xl shadow-md flex flex-col justify-center items-center w-[300px] h-[200px] mx-auto ">
              <p className="text-gray-800 italic text-center text-sm">&quot;{testimonial.comment}&quot;</p>
              <p className="mt-4 font-semibold text-gray-900">{testimonial.user}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
   <div className="bg-slate-900 text-slate-50 py-10 rounded-3xl mt-15">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between px-10">
    <div>
      <h3 className="text-3xl font-semibold mb-3">
        Interested in Our Courses?
      </h3>
      <p className="text-lg text-gray-300">
        Register now to get enrollment.
      </p>
    </div>

    <div className="flex justify-center  mt-6 md:mt-0 md:justify-end">
      <Link
        href="/contact-us"
        className="bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 border shadow border-white/50 hover:bg-gray-400"
      >
        Register →
      </Link>
    </div>
  </div>
</div>

    </div>
  );
};

export default Testimonials;
