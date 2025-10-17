"use client";

import React, { useState } from "react";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    countryCode: "+91",
    service: "Complete Digital Marketing Course",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          countryCode: "+91",
          website: "",
          service: "Web Development",
          requirement: "",
        });
      } else {
        setMessage(`❌ Failed: ${data.error || "Something went wrong."}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-30 bg-teal-50 text-black px-6 overflow-hidden">
      

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Header Section */}
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
           Contact Us
          </h1>
          <p className="text-gray-900">
           
          </p>
          <p className="text-gray-900">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries but also the leap into electronic typesetting
          </p>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2">
          <div className="bg-emerald-500 rounded-xl p-6 sm:p-8 shadow-lg text-black">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Country Code + Contact */}
              <div className="flex gap-3">
                <input
                  type="text"
                  name="countryCode"
                  placeholder="Country Code"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required
                  className="w-1/5 p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact or WhatsApp Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-4/5 p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                 <input
                  type="tel"
                  name="contact"
                  placeholder="Enter Address"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block mb-1 text-sm text-black font-medium">
                  Courses you&apos;re interested in
                </label>
                <select
                  name="education"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option>Complete Digital Marketing Course</option>
                  <option>UX Design Thinking for Beginners</option>
                  <option>30 Days Weight Loss Yoga & Fitness Course</option>
                  <option>Learn JavaScript – Full Course for Beginners</option>
                  <option>Mastering SEO for 2025</option>
                  <option>Advanced React & Next.js Development</option>
                  <option>Content Writing Masterclass</option>
                </select>
              </div>

              {/* Requirement Textarea */}
              <div>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Briefly describe your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="py-2 px-8 bg-pink-600 hover:bg-pink-700 text-black font-semibold rounded-full duration-300 cursor-pointer shadow-lg shadow-black/50 hover:brightness-110 transition"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              {/* Response Message */}
              {message && (
                <p className="text-center text-sm mt-4 text-black font-medium">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Contact Info & Map */}
      <div className="grid lg:grid-cols-2 gap-8 relative z-10 mt-16 max-w-6xl mx-auto">
      <div className="relative rounded-2xl p-6  backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 flex flex-col gap-3 h-full bg-gradient-to-r from-pink-100 to-emerald-100 ">
 
 
     
  {/* Content layered above the gradient */}
  <div className="relative z-10">
    <h3 className="text-2xl font-semibold mb-3 text-emerald-600">
      Contact Information
    </h3>
    <p className="text-gray-900 font-bold">Cyberspace Works</p>

    {/* Phone */}
    <p className="text-gray-900 flex items-center gap-2 mt-3">
      <IoCallOutline />
      <a href="tel:" className="hover:underline">
        +91 1234567890
      </a>
    </p>

    {/* Email */}
    <p className="text-gray-900 flex items-center gap-2 mt-3">
      <IoMailOutline />
      <a
        href="mailto:"
        className="hover:underline"
      >
       abc@gmail.com
      </a>
    </p>

    {/* Address */}
    <p className="text-gray-900 flex items-center gap-2 mt-3">
      <IoLocationOutline />
      <span>
       abc
      </span>
    </p>

    {/* Social Media Icons */}
    <div className="flex justify-center sm:justify-start space-x-4 mt-4 text-emerald-600 text-lg sm:text-xl">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="cursor-pointer hover:scale-110 transition" />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="cursor-pointer hover:scale-110 transition" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMapMarkerAlt className="cursor-pointer hover:scale-110 transition" />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
      </a>
    </div>
  </div>
</div>


        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96896.92852121097!2d72.94814097660938!3d26.27033588207035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%2C%20Rajasthan!5e1!3m2!1sen!2sin!4v1760699599943!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "450px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;