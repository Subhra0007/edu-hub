import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import footerlogo from "@/public/logo.png"

export default function Footer() {
   const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-teal-50 text-white py-8 px-6 sm:px-6 ">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto bg-emerald-500 text-black rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col gap-8 ">
     <div className="flex justify-around gap-6 sm:gap-8 md:gap-10 text-center sm:text-left">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center text-center">
         <Image
                             src="/logo.png"
                             alt="Logo"
                             width={180}
                             height={70}
                             className="h-25 w-auto"
                             priority
                           />
          <p className="text-base sm:text-lg font-semibold leading-relaxed">
            It's Time To Pull In A <br />
            <span className="text-white">Professional</span>
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-3 text-white">Menu</h3>
          <ul className="space-y-2 text-gray-900 text-sm sm:text-base">
            <li>
              <Link href="/" className="hover:text-black transition">
                Home
              </Link>
            </li>
            
            <li>
              <Link href="/about-us" className="hover:text-black transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-black transition">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-black transition">
                Contact Us
              </Link>
            </li>
             <li>
</li>

          </ul>
        </div>

        {/* Contact + Social */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-3 text-white">Connect Us</h3>
        <ul className="space-y-2 text-gray-900 text-sm sm:text-base">
  <li>
    <a
      href="mailto:"
      className="hover:text-black transition"
    >
   xyz@gmail.com
    </a>
  </li>
  <li>
    <a
      href="mailto:"
      className="hover:text-black transition"
    >
     abc@gmail.com
    </a>
  </li>
  <li>
    <a
      href="tel:"
      className="hover:text-black transition"
    >
      +91 1234567890
    </a>
  </li>
</ul>
          <div className="flex gap-4 mt-4 text-white text-xl">
            <a
              href="https://www.facebook.com"
              className="hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              className="hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      
       <div className="relative z-10 text-center text-sm text-gray-950 pb-6 px-6 max-w-6xl mx-auto mt-10">
          © {currentYear} abc. All Rights Reserved.
        </div>
    </div>
    </footer>
  );
}
