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
    { icon: <FaLightbulb className="text-3xl text-orange-600" />, title: "Innovation", desc: "We bring creative approaches to learning and education." },
    { icon: <FaUsers className="text-3xl text-orange-600" />, title: "Community", desc: "We foster collaboration between educators and learners." },
    { icon: <FaBullseye className="text-3xl text-orange-600" />, title: "Focus", desc: "We focus on meaningful results and student growth." },
  ];


   const testimonials = [
    { user: "Emma Thompson", comment: "Absolutely transformative experience! The platform is intuitive and exceeded my expectations." },
    { user: "Liam Chen", comment: "Incredible support and features. It’s made my workflow so much smoother!" },
    { user: "Sophia Martinez", comment: "I love how user-friendly everything is. Highly recommend to everyone!" },
    { user: "Noah Patel", comment: "The best tool I’ve used in years. It’s a game-changer for productivity." },
    { user: "Ava Nguyen", comment: "Fantastic service! The team was super helpful and responsive." },
  ];

  return (
    <div className="text-gray-800 px-6 pt-22 pb-10 space-y-24 bg-slate-100 lg:px-0">
      <div className="max-w-7xl mx-auto ">

        {/* ========== How it started ========== */}
        <section className="grid md:grid-cols-2 gap-10 items-top mb-10">
          <div className="lg:text-left text-center bg-sky-500 rounded-3xl p-8  ">
            <h2 className="text-gray-300 text-sm uppercase mb-2 tracking-wider ">How it started</h2>
            <h1 className="text-4xl font-bold leading-tight mb-4 text-black">
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
            <div className="w-full h-60 rounded-3xl overflow-hidden flex items-center justify-center">
              <Image src="/aboutpage1.webp" alt="About Image" width={500} height={300} className="object-cover w-full h-full opacity-90" />
            </div>

            {/* Stats Section with Counting Animation */}
            <div ref={triggerRef} className="grid grid-cols-2 gap-4">
              {statsData.map((s, i) => (
                <div key={i} className="bg-slate-900 rounded-3xl text-center py-6  transition">
                  <h3 className=" text-3xl font-bold text-slate-50">
                    <Counter target={s.target} start={inView} />
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Mission & Vision ========== */}
        <section className="grid md:grid-cols-2 gap-10 mb-10 mt-15">
          <div className=" bg-slate-900  rounded-3xl p-8  transition">
            <FaBullseye className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold mb-3 text-slate-50">Our Mission</h2>
            <p className="text-gray-300">
              Empower educators and learners through intelligent tools and personalized education systems.
            </p>
          </div>

          <div className="bg-sky-500 rounded-3xl p-8  transition">
            <FaEye className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold mb-3 text-black">Our Vision</h2>
            <p className="text-gray-800">
              To create a globally connected education ecosystem powered by automation, innovation, and human touch.
            </p>
          </div>
        </section>

      
    {/* ========== Meet the Team ========== */}
<section className=" relative mt-15 px-4">
  <h2 className="text-center text-3xl font-bold mb-3">
    Meet our dedicated team of <span className="text-orange-600">Educators</span>
  </h2>
 {/* Left fade */}
                     <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-30 bg-gradient-to-r from-slate-100 to-transparent z-10"></div>
       
                    {/* Right fade */}
                    <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-30 bg-gradient-to-l from-slate-100 to-transparent z-10"></div>
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
        <div className="bg-sky-500 shadow-md rounded-3xl overflow-hidden transition  w-[250px] h-[300px] flex flex-col p-2">
          <Image
            src={member.img}
            alt={member.name}
            width={250}
            height={200}
            className=" h-[200px] object-cover  rounded-3xl" // Fixed image height
          />
          <div className="p-5 text-center flex flex-col justify-center flex-grow">
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-orange-600 text-sm">{member.role}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

        {/* ========== About (2) ========== */}
         <h2 className="text-3xl font-bold mb-13 text-gray-800 text-center mt-6">
          Why <span className="text-orange-600">Choose</span> Us
        </h2>
        <section className="grid md:grid-cols-3 gap-10 mb-15">
           
          {about2.map((item, i) => (
            <div key={i} className="bg-slate-900  rounded-3xl p-8 text-center transition shadow-md ">
              <div className="flex justify-center mb-4 ">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-50">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </section>

      

        {/* ========== Testimonials ========== */}
        <section>
          <div className="container mx-auto  max-w-7xl mt-3 px-6 lg:px-0">
      <h2 className="text-4xl font-bold text-center mb-4 text-black">Testimonials</h2>
      <div className="relative overflow-hidden z-10 mb-3">
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
       <div className="bg-slate-900 text-slate-50 py-10 rounded-3xl mt-15 ">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between px-10">
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
        </section>

        {/* ========== Partners ========== */}
        <section className="relative text-black max-w-7xl mx-auto mt-15 overflow-hidden">
                  
                   {/* Logos Slider */}
                   <div className=" relative z-10 ">
                       <h2 className="text-4xl font-bold text-center text-black mb-10">Our <span className="text-orange-600">Partners</span></h2>
                     {/* Left fade */}
                     <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-30 bg-gradient-to-r from-slate-100 to-transparent z-10"></div>
       
                    {/* Right fade */}
                    <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-30 bg-gradient-to-l from-slate-100 to-transparent z-10"></div>
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
