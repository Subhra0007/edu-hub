"use client";
import Image from "next/image";
import Link from "next/link";

import heroImg from "@/public/hero-section.jpg";
import circleImg from "@/public/circle.png";
import cubeImg from "@/public/square.png";
import zigzagImg from "@/public/triangle.png";

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto pt-30 pb-10 px-6 lg:px-0">
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-20 rounded-3xl bg-gradient-to-r from-pink-100 to-emerald-100 shadow-md">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Start{" "}
            <span className="text-emerald-600 decoration-emerald-400 underline-offset-4">
              Explore better skills through thousand 
            </span>{" "}
            online courses
          </h1>
          <div className="">
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
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex-1 flex justify-center mb-10 md:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden z-10">
            <Image
              src={heroImg}
              alt="Online learning student"
              fill
              className="object-cover "
            />

            <Image
  src={circleImg}
  alt="Circle"
  className="absolute top-[-10px] left-[-10px] w-10 h-10 animate-shake"
/>

<Image
  src={cubeImg}
  alt="Cube"
  className="absolute top-[-10px] right-[-10px] w-10 h-10 animate-spin-slow"
/>

<Image
  src={zigzagImg}
  alt="Zigzag"
  className="absolute bottom-[-10px] left-[-10px] w-12 h-12 animate-zigzag"
/>

          </div>
        </div>
      </section>
    </div>
  );
}
