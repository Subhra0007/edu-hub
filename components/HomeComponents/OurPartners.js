
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
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

const OurPartners = () => {


    return (
      <div>
        <section className="relative text-black max-w-6xl mx-auto py-10 overflow-hidden px-6 lg:px-0">
           
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
    );
};

export default OurPartners;
