//pages/Homepage.js
"use client";

import dynamic from "next/dynamic";
import "./globals.css";
// Dynamically import heavy sections to reduce initial bundle size
const HeroSection = dynamic(() => import("@/components/HomeComponents/HeroSection.js"));
const Categories = dynamic(() => import("@/components/HomeComponents/Categories.js"));
const  FeatureSection= dynamic(() => import("@/components/HomeComponents/FeatureSection.js"));
const OurCourses = dynamic(() => import("@/components/HomeComponents/OurCourses.js"));
// const Dashboard = dynamic(() => import("@/components/HomeComponents/Dashboard.js"));
const AboutSection = dynamic(() => import("@/components/HomeComponents/AboutSection.js"));
// const HowWeDoIt = dynamic(() => import("@/components/HomeComponents/HowWeDoIt.js"));
const Testimonial = dynamic(() => import("@/components/HomeComponents/Testimonials.js"));
const OurPartners = dynamic(() => import("@/components/HomeComponents/OurPartners.js"));
// const ContactForm = dynamic(() => import("@/components/HomeComponents/ContactForm.js"));
export default function HomePage() {
 
 return (
  <>
   
    <div className="relative min-h-screen bg-teal-50 overflow-hidden">
    
      <HeroSection />
      <Categories/>
      <FeatureSection/>
      <OurCourses/>
      <AboutSection/>
      <Testimonial/>
      <OurPartners/>
    </div>
  </>
);

}