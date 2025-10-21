"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import course from "@/public/course.jpeg";

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
    rating: 4.9,
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
    rating: 4.8,
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
    price: "₹7,900",
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
  // ⭐ Function to render stars dynamically
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <section className="pt-25 text-black bg-slate-100 pb-10">
      <div className="container max-w-7xl mx-auto px-6 lg:px-0">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Our <span className="text-orange-600">Courses</span>
          </h2>
          <p className="leading-relaxed mt-6 text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.03] bg-slate-900 text-white"
            >
              <div className="relative p-2">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover rounded-3xl"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-xs font-semibold px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between h-[220px] mb-5">
                <div>
                  <span className="text-xs bg-gray-100 text-black px-2 py-1 rounded-md">
                    {course.category}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold leading-tight">
                    {course.title}
                  </h3>

                  {/* ⭐ Dynamic Rating Section */}
                  <div className="flex items-center mt-2 text-sm gap-1">
                    <div className="flex">{renderStars(course.rating)}</div>
                    <span className="ml-2 text-gray-200">{course.rating}</span>
                    <span className="ml-1 text-gray-200">({course.reviews})</span>
                  </div>

                  <div className="mt-2 text-gray-200 text-sm">
                    📘 {course.lessons} Lessons
                  </div>
                </div>

                <div>
                  <p className="text-sm mt-2 text-gray-300">
                    By: <span className="text-white">{course.author}</span>
                  </p>

                  <p className="mt-3 text-emerald-300 font-semibold">
                    {course.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
