"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Autoplay, FreeMode,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { FaBullseye, FaEye, FaLightbulb, FaUsers, FaQuoteLeft } from "react-icons/fa";
import images3 from "@/public/images3.jpg"
import logo from '@/public/logo.png';

const logos = [
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo
];
// ========== Counter Component ==========
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

  return <>{count}+</>;
}

// ========== Main About Component ==========
export default function About() {
      
  const triggerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, []);

  const statsData = [
    { target: 3000, label: "Total Students" },
    { target: 100, label: "Total Teachers" },
    { target: 8, label: "Years Experience" },
    { target: 15, label: "Total Courses" },
  ];

  const team = [
    { name: "John Doe", role: "Math Expert", img: images3},
    { name: "Sarah Lee", role: "Science Educator", img: images3},
    { name: "David Kim", role: "Language Coach", img: images3},
    { name: "Anita Roy", role: "AI Mentor", img: images3},
    { name: "Rahul Roy", role: "AI Mentor", img: images3},
    { name: "Rohit Roy", role: "AI Mentor", img: images3},
    { name: "Mohit Roy", role: "AI Mentor", img: images3},
    { name: "Sunil Roy", role: "AI Mentor", img: images3},
    { name: "Kunal Roy", role: "AI Mentor", img: images3},
  ];

  const about2 = [
    { icon: <FaLightbulb className="text-3xl text-black" />, title: "Innovation", desc: "We bring creative approaches to learning and education." },
    { icon: <FaUsers className="text-3xl text-black" />, title: "Community", desc: "We foster collaboration between educators and learners." },
    { icon: <FaBullseye className="text-3xl text-black" />, title: "Focus", desc: "We focus on meaningful results and student growth." },
  ];


   const testimonials = [
    { user: "Emma Thompson", comment: "Absolutely transformative experience! The platform is intuitive and exceeded my expectations." },
    { user: "Liam Chen", comment: "Incredible support and features. It’s made my workflow so much smoother!" },
    { user: "Sophia Martinez", comment: "I love how user-friendly everything is. Highly recommend to everyone!" },
    { user: "Noah Patel", comment: "The best tool I’ve used in years. It’s a game-changer for productivity." },
    { user: "Ava Nguyen", comment: "Fantastic service! The team was super helpful and responsive." },
  ];

  return (
    <div className="text-black px-6 py-30 space-y-24 bg-teal-50">
      <div className="max-w-6xl mx-auto ">

        {/* ========== How it started ========== */}
        <section className="grid md:grid-cols-2 gap-10 items-top mb-10">
          <div className="lg:text-left text-center bg-gradient-to-r from-pink-100 to-emerald-100  rounded-2xl p-8  ">
            <h2 className="text-emerald-600 text-sm uppercase mb-2 tracking-wider">How it started</h2>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Our Dream is <br /> Global Learning Transformation
            </h1>
            <p className="leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries but also the leap into electronic typesetting.
            </p>
             <p className="leading-relaxed mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries but also the leap into electronic typesetting.
            </p>
            <p className="leading-relaxed mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
          </div>

          <div className="space-y-6">
            <div className="w-full h-60 rounded-2xl overflow-hidden flex items-center justify-center">
              <Image src="/aboutpage1.webp" alt="About Image" width={500} height={300} className="object-cover w-full h-full opacity-90" />
            </div>

            {/* Stats Section with Counting Animation */}
            <div ref={triggerRef} className="grid grid-cols-2 gap-4">
              {statsData.map((s, i) => (
                <div key={i} className="bg-emerald-500 rounded-xl text-center py-6  transition">
                  <h3 className="text-2xl font-semibold text-white">
                    <Counter target={s.target} start={inView} />
                  </h3>
                  <p className="text-black text-lg font-semibold">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Mission & Vision ========== */}
        <section className="grid md:grid-cols-2 gap-10 mb-10">
          <div className=" bg-gradient-to-r from-pink-100 to-emerald-100  rounded-2xl p-8  transition">
            <FaBullseye className="text-4xl text-emerald-600 mb-4" />
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-900">
              Empower educators and learners through intelligent tools and personalized education systems.
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-emerald-100 rounded-2xl p-8 hover:bg-gray-900/80 transition">
            <FaEye className="text-4xl text-emerald-600 mb-4" />
            <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-gray-900">
              To create a globally connected education ecosystem powered by automation, innovation, and human touch.
            </p>
          </div>
        </section>

      
    {/* ========== Meet the Team ========== */}
<section className=" relative mt-20 px-4">
  <h2 className="text-center text-3xl font-bold mb-5">
    Meet our dedicated team of <span className="text-emerald-600">Educators</span>
  </h2>
 {/* Left fade */}
                     <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-30 bg-gradient-to-r from-teal-50 to-transparent z-10"></div>
       
                    {/* Right fade */}
                    <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-30 bg-gradient-to-l from-teal-50 to-transparent z-10"></div>
  <Swiper
    slidesPerView="auto"
    spaceBetween={30} // Reduced for better spacing
    loop={true}
    speed={4000}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    }}
    allowTouchMove={true}
    grabCursor={true}
    freeMode={false}
    modules={[Autoplay, FreeMode]}
    className="w-full"
  >
    {[...team, ...team, ...team].map((member, i) => (
      <SwiperSlide
        key={i}
        className="py-10"
        style={{ width: '250px' }} // Fixed width for each slide
      >
        <div className="bg-white shadow-md rounded-2xl overflow-hidden transition  w-[250px] h-[350px] flex flex-col">
          <Image
            src={member.img}
            alt={member.name}
            width={250}
            height={200}
            className="w-full h-[200px] object-cover" // Fixed image height
          />
          <div className="p-5 text-center flex flex-col justify-center flex-grow">
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-emerald-600 text-sm">{member.role}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

        {/* ========== About (2) ========== */}
         <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center mt-10">
          Why <span className="text-emerald-600">Choose</span> Us
        </h2>
        <section className="grid md:grid-cols-3 gap-10 mb-20">
           
          {about2.map((item, i) => (
            <div key={i} className="bg-emerald-500  rounded-2xl p-8 text-center transition shadow-md ">
              <div className="flex justify-center mb-4 ">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-900">{item.desc}</p>
            </div>
          ))}
        </section>

      

        {/* ========== Testimonials ========== */}
        <section>
          <div className="container mx-auto  max-w-6xl mt-10">
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
        </section>

        {/* ========== Partners ========== */}
        <section className="relative text-black max-w-6xl mx-auto mt-10 overflow-hidden">
                  
                   {/* Logos Slider */}
                   <div className=" relative z-10 ">
                       <h2 className="text-4xl font-bold text-center text-black mb-20">Our <span className="text-emerald-600">Partners</span></h2>
                     {/* Left fade */}
                     <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-30 bg-gradient-to-r from-teal-50 to-transparent z-10"></div>
       
                    {/* Right fade */}
                    <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-30 bg-gradient-to-l from-teal-50 to-transparent z-10"></div>
       <Swiper
         slidesPerView="auto"
         spaceBetween={50}
         loop={true}
         speed={4000}
         autoplay={{
           delay: 0,                 // no delay between slides
           disableOnInteraction: false, // don't stop autoplay on click/tap
           pauseOnMouseEnter: false,    // don't pause on hover
         }}
         allowTouchMove={true}  // enable drag
         grabCursor={true}      // show grabbing cursor
         freeMode={false}    
                  
         modules={[Autoplay, FreeMode]}
       >
         {[...logos, ...logos, ...logos].map((logo, i) => (
           <SwiperSlide
             key={i}
             className="!w-auto flex justify-center items-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
           >
             <Image
               src={logo}
               alt={`Logo ${i + 1}`}
               height={56}
               className="w-auto object-contain transition-all duration-500"
             />
           </SwiperSlide>
         ))}
       </Swiper>
       
                   </div>
               </section>
      </div>
    </div>
  );
}
