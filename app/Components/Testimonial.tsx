import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: "01",
    image: "/profile2.jpg", // Replace with the actual image path
    name: "Mr. Abrar",
    testimonial: "Best chicken, unbeatable prices!",
  },  
  {
    id: "02",
    image: "/profile2.jpg", // Replace with the actual image path
    name: "Mr. Tauseef",
    testimonial: "Fresh and delicious every time!",
  },
  {
    id: "03",
    image: "/profile2.jpg", // Replace with the actual image path
    name: "Mr. Yawar",
    testimonial: "Great quality chicken, always fresh!",
  },
  {
    id: "04",
    image: "/profile2.jpg", // Replace with the actual image path
    name: "Mr. Asif",
    testimonial: "Highly recommend Ghouse for chicken!",
  },
];


const Testimonial: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="w-full py-16 bg-gradient-to-r from-[#c42a2a] via-[#8b1a1a] to-[#2c2c2c]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Testimonials</h2>

        <div className="flex justify-between items-center lg:pl-48">
          {/* Left: Circular Image with Quote Icon */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300">
            <img
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
              className="w-full h-full object-cover"
            />
            {/* Position the quote icon slightly outside the image border */}
            <div className="absolute top-[-12px] right-[-12px] p-2 bg-white rounded-full shadow-md z-10">
              <FaQuoteLeft className="w-6 h-6 text-blue-500" />
            </div>
          </div>

          {/* Right: Testimonial Text */}
          <div className="ml-8 flex-1">
            <p className="text-lg italic text-white">{`"${testimonials[activeTestimonial].testimonial}"`}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{testimonials[activeTestimonial].name}</h3>
          </div>

          {/* Numbers for Selecting Testimonial */}
          <div className="flex flex-col items-center mx-auto lg:pr-48">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`text-3xl font-bold ${activeTestimonial === index ? "text-pink-500" : "text-blue-700"} cursor-pointer`}
              >
                {testimonial.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
