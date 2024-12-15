"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

// Define the type for props
type NavbarProps = {
  isScrolled: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`transition-all duration-300 bg-[white] shadow-md ${isScrolled ? "fixed top-0 left-0 w-full z-40" : "relative"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/about">
          <Image
            src="/logo3.png"
            alt="Company Overview"
            width={200}  // Set width (adjust as per your design)
            height={100} // Set height (adjust as per your design)
            className="w-[230px] h-[80px] sm:w-48 sm:h-24 lg:w-56 lg:h-16"
          />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm text-gray-1000 font-medium tracking-[0.4em] font-poppins">
          <a
            href="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            HOME
          </a>
          <a
            href="/about"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            ABOUT
          </a>
          <a
            href="/services"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            SPECIALITY
          </a>
          <a
            href="/contact"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            CONTACT
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-700 pr-8"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 p-4 font-medium tracking-[0.4em] font-poppins">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              HOME
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              SPECIALITY
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
