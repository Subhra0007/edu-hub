"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import aboutImg from "@/public/about.png";
import Link from "next/link";
// Counter component
function Counter({ target, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let animationFrame;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(target * progress));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, target]);

  return <span>{count}+</span>;
}

export default function AboutSection() {
  const triggerRef = useRef(null); // Observe this container
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, []);

  const statsData = [
    { target: 3000, label: "Total Stuents" },
    { target: 100, label: "Total Teachers" },
    { target: 8, label: "Years Experience" },
    { target: 15, label: "Total Courses" },
  ];

  return (
    <section className="mt-15 relative">
      <div className="max-w-7xl mx-auto relative px-6 ">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Why <span className="text-orange-600">Choose</span> Us
        </h2>
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center px-6 md:px-12 py-20 rounded-3xl bg-gradient-to-r from-sky-400 to-emerald-500 relative z-0 shadow-md">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              We Build <span className="text-orange-600">Digital Success</span>
            </h2>
            <p className="text-gray-900 mb-6 leading-relaxed">
              Our mission is to empower brands through innovative digital strategies and cutting-edge technology.
            </p>

            <ul className="space-y-2 text-gray-900 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-orange-500 text-xl">•</span> Creative Marketing Solutions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500 text-xl">•</span> Scalable Web & App Development
              </li>
            </ul>

              <Link
            href="/about-us"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-full font-semibold transition ">
              About Us
            </Link>
          </div>

          <div className="flex justify-center">
            <Image
              src={aboutImg}
              alt="About us"
              width={400}
              height={400}
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Trigger div for counting */}
        <div ref={triggerRef} className="h-1 w-full" />

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] lg:w-[80%] mb-10">
          {statsData.map((item, i) => (
            <div
              key={i}
              className="bg-sky-500 shadow-md rounded-xl py-6 hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold text-black">
                <Counter target={item.target} start={inView} />
              </h3>
              <p className="text-gray-700 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
