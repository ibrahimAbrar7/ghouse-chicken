"use client";

import React from "react";
import { Phone, MessageSquare, LocateIcon } from "lucide-react"; // Icons from lucide-react
import { FaFacebookF, FaInstagram,FaLocationArrow  } from "react-icons/fa"; // Social media icons from react-icons
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="border-b border-gray-200 w-full z-50 font-sans bg-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Parent Div */}
        <div className="w-full flex justify-center md:justify-between items-center">
        {/* Left Child Div - Phone and Mail */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaLocationArrow className="w-4 h-4 md:w-5 md:h-5 text-white" />
              <span><a href="mailto:Info@compumax.co.in" className="text-white">57, HB Colony Main Rd, Moula Ali</a></span>
            </div>
          </div>

          {/* Right Child Div - Request Quote and Social Icons */}
          <div className="flex items-center space-x-6 text-sm md:text-lg text-gray-800">
            <button className="flex items-center space-x-2 text-sm md:text-lg text-white hover:text-blue-600">
            <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <span><a href="tel:9949592380" className="text-white">934-6682-857</a></span>
            </button>
            <div className="flex items-center space-x-3">
              {/* Facebook Icon */}
              <a
                href="/"
                className="bg-white text-black p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              {/* Twitter Icon */}
              <a
                href="#"
                className="bg-white text-black p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Twitter"
              >
                <FaInstagram />
              </a>
              {/* YouTube Icon */}
              <a
                href="#"
                className="bg-white text-black p-2 rounded-full hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
