import Link from "next/link";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[black]">Contact Us</h1>
          <p className="text-lg text-black mt-2">
            We would love to hear from you! Reach out to us through any of the options below.
          </p>
        </div>

        {/* Contact Information and Map Row */}
        <div className="flex flex-wrap justify-between">
          {/* Left Child: Contact Information */}
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl text-[black] mb-6">Get in Touch</h3>

            {/* Phone Number */}
            <div className="flex items-center space-x-3 mb-6">
              <FaPhone className="text-red-600 text-2xl" />
              <Link href="tel:9959627622" className="text-black hover:text-black-800 text-lg font-medium">
              995-9627-622
              </Link>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 mb-6">
              <FaEnvelope className="text-red-600 text-2xl" />
              <Link href="mailto:Info@ghousechicken.com" className="text-black hover:text-black-800 text-lg font-medium">
                Info@ghousechicken.com
              </Link>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-3 mb-6">
              <FaMapMarkerAlt className="text-red-600 text-2xl" />
              <p className="text-black-800 text-lg">HB Colony Main Rd, Venkateswara Nagar, Moula Ali, Secunderabad, Telangana 500040</p>
            </div>
          </div>

          {/* Right Child: Map */}
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
            <div className="h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1211023478245!2d78.5603178727031!3d17.45391688344463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bf4e41bc4ab%3A0x3b00a11b0a602533!2sGhouse%20Chicken%20Market!5e0!3m2!1sen!2sin!4v1734002869338!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                title="Our Location"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
