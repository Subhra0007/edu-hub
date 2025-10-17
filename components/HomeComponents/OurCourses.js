"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import course from "@/public/course.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const courses = [
  {
    id: 1,
    title: "Complete Digital Marketing Course",
    level: "Beginner",
    category: "Business",
    image: course,
    lessons: 17,
    rating: 5.0,
    reviews: 4,
    author: "Mark Alen",
    price: "Free",
  },
  {
    id: 2,
    title: "UX Design Thinking for Beginners",
    level: "Expert",
    category: "UI/UX Design",
    image: course,
    lessons: 14,
    rating: 5.0,
    reviews: 3,
    author: "Mark Alen",
    price: "₹4,900",
  },
  {
    id: 3,
    title: "30 Days Weight Loss Yoga & Fitness Course",
    level: "Beginner",
    category: "Health",
    image: course,
    lessons: 14,
    rating: 5.0,
    reviews: 3,
    author: "Mark Alen",
    price: "Free",
  },
  {
    id: 4,
    title: "Learn JavaScript – Full Course for Beginners",
    level: "Intermediate",
    category: "Programming",
    image: course,
    lessons: 15,
    rating: 5.0,
    reviews: 3,
    author: "Alex Mohr",
    price: "₹5,900",
  },
  {
    id: 5,
    title: "Mastering SEO for 2025",
    level: "Intermediate",
    category: "Digital Marketing",
    image: course,
    lessons: 12,
    rating: 5.0,
    reviews: 2,
    author: "Lisa Brown",
    price: "₹3,900",
  },
  {
    id: 6,
    title: "Photography Essentials: From Beginner to Pro",
    level: "Beginner",
    category: "Photography",
    image: course,
    lessons: 10,
    rating: 4.8,
    reviews: 6,
    author: "John Carter",
    price: "Free",
  },
  {
    id: 7,
    title: "Advanced React & Next.js Development",
    level: "Expert",
    category: "Programming",
    image: course,
    lessons: 18,
    rating: 5.0,
    reviews: 5,
    author: "Daniel Kim",
    price: "₹6,900",
  },
  {
    id: 8,
    title: "Content Writing Masterclass",
    level: "Intermediate",
    category: "Writing",
    image: course,
    lessons: 13,
    rating: 4.9,
    reviews: 4,
    author: "Anna Lee",
    price: "Free",
  },
  {
    id: 9,
    title: "Figma for UI Designers",
    level: "Beginner",
    category: "UI/UX Design",
    image: course,
    lessons: 11,
    rating: 5.0,
    reviews: 2,
    author: "Mark Alen",
    price: "₹2,900",
  },
  {
    id: 10,
    title: "Social Media Advertising for Growth",
    level: "Intermediate",
    category: "Marketing",
    image: course,
    lessons: 15,
    rating: 5.0,
    reviews: 3,
    author: "Sara White",
    price: "Free",
  },
  {
    id: 11,
    title: "Python Programming Zero to Hero",
    level: "Beginner",
    category: "Programming",
    image: course,
    lessons: 16,
    rating: 5.0,
    reviews: 4,
    author: "Alex Mohr",
    price: "₹4,900",
  },
  {
    id: 12,
    title: "Business Analytics with Excel",
    level: "Intermediate",
    category: "Business",
    image: course,
    lessons: 12,
    rating: 5.0,
    reviews: 3,
    author: "Mark Alen",
    price: "Free",
  },
  {
    id: 13,
    title: "Video Editing for Beginners",
    level: "Beginner",
    category: "Media",
    image: course,
    lessons: 9,
    rating: 4.7,
    reviews: 5,
    author: "Chris Taylor",
    price: "Free",
  },
  {
    id: 14,
    title: "Full Stack Web Development Bootcamp",
    level: "Expert",
    category: "Programming",
    image: course,
    lessons: 22,
    rating: 5.0,
    reviews: 6,
    author: "Daniel Kim",
    price: "₹7900",
  },
  {
    id: 15,
    title: "Graphic Design Fundamentals",
    level: "Beginner",
    category: "Design",
    image: course,
    lessons: 10,
    rating: 5.0,
    reviews: 3,
    author: "Lisa Brown",
    price: "Free",
  },
];

export default function MostPopularCourses() {
  return (
    <section className="py-10 text-black">
      <div className="container max-w-6xl mx-auto px-6 lg:px-0">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Our <span className="text-emerald-600">Courses</span>
          </h2>
          <Link 
            href="/courses"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg lg:font-semibold transition text-center">
            View All Courses
          </Link>
        </div>
 
        <div className="relative overflow-hidden z-10">
          {/* Left & Right fade */}
          <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-30 bg-gradient-to-r from-teal-50 to-transparent z-10"></div>
          <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-30 bg-gradient-to-l from-teal-50 to-transparent z-10"></div>

          {/* Swiper Carousel with Pagination */}
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="py-4"
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}
              className="py-10"
              >
                <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 h-full p-2 bg-white">
                  <div className="relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={250}
                      className="w-full h-40 object-cover rounded-2xl"
                    />
                    <span className="absolute top-2 left-2 bg-red-500 text-xs font-semibold px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col justify-between h-[220px]">
                    <div>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-md">
                        {course.category}
                      </span>

                      <h3 className="mt-3 text-lg font-semibold leading-tight">
                        {course.title}
                      </h3>

                      <div className="flex items-center mt-2 text-sm text-yellow-400">
                        ⭐ {course.rating}
                        <span className="text-gray-400 ml-1">
                          ({course.reviews})
                        </span>
                      </div>

                      <div className="mt-2 text-gray-400 text-sm">
                        📘 {course.lessons} Lessons
                      </div>
                    </div>

                    <div>
                      <p className="text-sm mt-2">
                        By:{" "}
                        <span className="text-green-500">{course.author}</span>
                      </p>

                      <p className="mt-3 text-green-500 font-semibold mb-3">
                        {course.price}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
