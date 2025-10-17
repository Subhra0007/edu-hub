import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import footerlogo from "@/public/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-50 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto bg-emerald-500 text-black rounded-3xl p-8 md:p-10">
        {/* Footer Flex Container */}
        <div className="flex flex-col md:flex-row justify-around  gap-10 ">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center flex-1">
            <Image
              src={footerlogo}
              alt="Logo"
              width={180}
              height={70}
              className="h-14 w-auto mb-3"
              priority
            />
            <p className="text-base sm:text-lg font-semibold leading-relaxed text-center">
              It&apos;s Time To Pull In A <br />
              <span className="text-white">Professional</span>
            </p>
          </div>

          {/* Menu */}
          <div className="flex flex-col items-center  flex-1">
            <h3 className="text-xl font-bold mb-3 text-white">Menu</h3>
            <ul className="space-y-2 text-gray-900 text-sm sm:text-base text-center">
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
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-xl font-bold mb-3 text-white">Connect Us</h3>
            <ul className="space-y-2 text-gray-900 text-sm sm:text-base">
              <li>
                <a href="mailto:xyz@gmail.com" className="hover:text-black transition">
                  xyz@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:abc@gmail.com" className="hover:text-black transition">
                  abc@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="hover:text-black transition">
                  +91 1234567890
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-5 mt-4 text-white text-xl">
              <a
                href="https://www.facebook.com"
                className="hover:text-black transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com"
                className="hover:text-black transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                className="hover:text-black transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-950 mt-10">
          © {currentYear} abc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
