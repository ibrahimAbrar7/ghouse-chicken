"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaAngleRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="pt-10 border-t">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-black">About</h2>
            <p className="text-black hover:text-red-600 mb-4">
              Ghouse Chicken Center is your go-to destination for premium-quality chicken at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white bg-black p-2 rounded-full hover:bg-red-700 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white bg-black p-2 rounded-full hover:bg-red-700 transition-colors"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="text-white bg-black p-2 rounded-full hover:bg-red-700 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Chicken Selection Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-black">Chicken Selection</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaAngleRight className="text-red-600 mr-2" />
                <a href="#" className="text-black hover:text-red-600">
                  Boneless Chicken
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-red-600 mr-2" />
                <a href="#" className="text-black hover:text-red-600">
                  Skinless Chicken
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-red-600 mr-2" />
                <a href="#" className="text-black hover:text-red-600">
                  Chicken Thighs
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-red-600 mr-2" />
                <a href="#" className="text-black hover:text-red-600">
                  Chicken Drumsticks
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-red-600 mr-2" />
                <a href="#" className="text-black hover:text-red-600">
                  Whole Chicken
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-black">Quick Links</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaAngleRight className="text-red-600 mr-2" />
                <a href="/" className="text-black hover:text-red-600">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-red-600 mr-2" />
                <a href="/about" className="text-black hover:text-red-600">
                  About
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-red-600 mr-2" />
                <a href="/services" className="text-black hover:text-red-600">
                  Speciality
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-red-600 mr-2" />
                <a href="/portfolio" className="text-black hover:text-red-600">
                  Testimonials
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-red-600 mr-2" />
                <a href="/portfolio" className="text-black hover:text-red-600">
                  Map Location
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-red-600 mr-2" />
                <a href="/contact" className="text-black hover:text-red-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-black">Contact</h2>
            <a href="tel:9949592380" className="text-black hover:text-red-600">
              Call Us :
              <p className="text-black mb-2">
                <Phone className="text-black text-xl inline mr-2" />
                934-6682-857
              </p>
            </a>
            <p className="text-black">
              Address : <br />
              <span className="text-black">
                <FaMapMarkerAlt className="text-black text-xl inline mr-2" />
                57, HB Colony Main Rd, Venkateswara Nagar, Moula Ali, Secunderabad, Telangana 500040
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Full-Width Copyright Section */}
      <div className="text-center mt-10 text-white text-sm bg-gradient-to-r from-[#990000] via-[#660000] to-black w-full py-4">
        © COPYRIGHT 2024 ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
