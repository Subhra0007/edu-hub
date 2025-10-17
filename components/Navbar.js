"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlineCall } from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Courses", href: "/courses" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6 mt-4 rounded-3xl bg-emerald-500 text-black shadow-xl">
        
        {/* ===== Logo ===== */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* ===== Desktop Navigation ===== */}
        <div className="hidden md:flex gap-8 text-lg font-bold">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div
                key={item.name}
                className="relative cursor-pointer"
                onMouseEnter={() => setHovered(item.href)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={item.href}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-white" : "text-black "
                  }`}
                >
                  {item.name}
                </Link>

                {/* Hover + Active underline animation */}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      hovered === item.href || isActive ? "100%" : "0%",
                    backgroundColor: isActive ? "#ffffff" : "#D53F8C",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 -bottom-1 h-[2px] rounded-full"
                />
              </div>
            );
          })}
        </div>

        {/* ===== Desktop Buttons ===== */}
        <div className="hidden md:flex gap-4">
          <Link
            href="/contact-us"
            className="px-4 py-2 rounded-full bg-white text-black font-semibold shadow hover:brightness-110 transition"
          >
            Register
          </Link>

          <Link
            href="/contact-us"
            className="px-4 py-2 rounded-full border border-white/50 text-white font-semibold flex items-center gap-2 shadow  transition"
          >
            <MdOutlineCall className="text-xl" />
            <span>Call Us</span>
          </Link>
        </div>

        {/* ===== Mobile Menu Toggle ===== */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      {isOpen && (
        <div className="md:hidden bg-emerald-500 text-black rounded-3xl mx-4 mt-2 p-6 shadow-lg animate-fadeIn">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative block pb-1 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-black hover:text-white"
                    }`}
                    onMouseEnter={() => setHovered(item.href)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {item.name}
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{
                        width:
                          hovered === item.href || isActive ? "100%" : "0%",
                        backgroundColor: isActive ? "#ffffff" : "#ff69b4",
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 bottom-0 h-[2px] rounded-full"
                    />
                  </Link>
                </li>
              );
            })}

            <li className="pt-4">
              <Link
                href="/contact-us"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 rounded-full bg-white text-black font-semibold shadow hover:brightness-110 transition"
              >
                Register
              </Link>
            </li>

            <li>
               <Link
            href="/contact-us"
             onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-full border border-white/50 text-white font-semibold flex items-center gap-2 shadow  transition"
          >
            <MdOutlineCall className="text-xl" />
            <span>Call Us</span>
          </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
