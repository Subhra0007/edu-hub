"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaRocket, FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

import heroImg1 from "@/public/1.jpg";
import heroImg2 from "@/public/2.jpg";
import heroImg3 from "@/public/3.jpg";

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto pt-22 pb-5 px-6 relative">
      <section className="rounded-3xl bg-gradient-to-r from-sky-500 to-emerald-600 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-5 md:px-20 py-20">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Start <span className="text-orange-600 underline-offset-4">Learning from the Best</span>
            </h1>
            <p className="text-gray-900 max-w-md mx-auto md:mx-0 mb-10">
              Transform your learning, unlock your potential, and take control of your growth.
            </p>
            <div className="mb-6">
              <Link
                href="/contact-us"
                className="px-4 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow hover:brightness-110 transition mr-5"
              >
                Register →
              </Link>
              <Link
                href="/about-us"
                className="px-4 py-4 rounded-full text-black font-semibold shadow hover:brightness-110 transition border border-white/50"
              >
                About Us
              </Link>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-3 pt-2">
              <div className="flex text-orange-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></div>
              <p className="text-sm text-gray-800">
                Rating: <span className="font-semibold text-black">4.9</span> by 500+ students
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex justify-center md:justify-end order-2">
            <div className="h-80 w-full md:w-[450px] rounded-3xl overflow-hidden">
              <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                modules={[Autoplay, Pagination]}
                className="h-full"
              >
                {[heroImg1, heroImg2, heroImg3].map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-80">
                      <Image src={img} alt={`Hero slide ${index + 1}`} fill className="object-cover object-center" priority />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
   
{/* 4 Feature Cards Section only show for lg */}
<div className="hidden lg:block">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center absolute -bottom-40 left-1/2 -translate-x-1/2 w-[90%] lg:w-[80%] mb-10 ">
    
    {/* Card 1 */}
    <div className="bg-sky-500 rounded-3xl p-6 shadow-md transition text-black ">
      <div className="text-4xl mb-4 flex justify-center text-orange-600">
        <FaRocket />
      </div>
      <h3 className="text-xl font-semibold mb-2">Fast Growth</h3>
      <p className="text-sm text-gray-800">
        Accelerate your brand’s visibility with our result-driven strategy.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-sky-500 text-black rounded-3xl p-6 shadow-md transition ">
      <div className="text-4xl mb-4 flex justify-center text-orange-600">
        <FaUsers />
      </div>
      <h3 className="text-xl font-semibold mb-2">Community Reach</h3>
      <p className="text-sm text-gray-800">
        Build meaningful engagement with audiences across all platforms.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-sky-500 textblack rounded-3xl p-6 shadow-md transition text-black ">
      <div className="text-4xl mb-4 flex justify-center text-orange-600">
        <FaLightbulb />
      </div>
      <h3 className="text-xl font-semibold mb-2">Creative Strategy</h3>
      <p className="text-sm text-gray-800">
        Unique campaigns tailored to make your brand stand out from the rest.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-sky-500 text-black rounded-3xl p-6 shadow-md transition ">
      <div className="text-4xl mb-4 flex justify-center text-orange-600">
        <FaChartLine />
      </div>
      <h3 className="text-xl font-semibold mb-2">Data Insights</h3>
      <p className="text-sm text-gray-800">
        We track key metrics to continuously improve your campaign performance.
      </p>
    </div>

  </div>
</div>

      {/* 4 Feature Cards Section  only show for md and sm*/}
      <div className="block lg:hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
       {/* Card 1 */}
    <div className="bg-sky-500 rounded-3xl p-6 shadow-md transition text-black text-center">
      <div className="text-4xl mb-4 flex justify-center text-orange-600">
        <FaRocket />
      </div>
      <h3 className="text-xl font-semibold mb-2">Fast Growth</h3>
      <p className="text-sm text-gray-800">
        Accelerate your brand’s visibility with our result-driven strategy.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-sky-500 text-black rounded-3xl p-6 shadow-md transition text-center">
      <div className="text-4xl mb-4 flex justify-center text-orange-600">
        <FaUsers />
      </div>
      <h3 className="text-xl font-semibold mb-2">Community Reach</h3>
      <p className="text-sm text-gray-800">
        Build meaningful engagement with audiences across all platforms.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-sky-500 text-black rounded-3xl p-6 shadow-md transition text-center">
      <div className="text-4xl mb-4 flex justify-center text-orange-600">
        <FaLightbulb />
      </div>
      <h3 className="text-xl font-semibold mb-2">Creative Strategy</h3>
      <p className="text-sm text-gray-800">
        Unique campaigns tailored to make your brand stand out from the rest.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-sky-500 text-black rounded-3xl p-6 shadow-md transition text-center">
      <div className="text-4xl mb-4 flex justify-center text-orange-600">
        <FaChartLine />
      </div>
      <h3 className="text-xl font-semibold mb-2">Data Insights</h3>
      <p className="text-sm text-gray-800">
        We track key metrics to continuously improve your campaign performance.
      </p>
    </div>
        </div>
      </div>
    </div>
  );
}


