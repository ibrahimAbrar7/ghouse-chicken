"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Link } from "lucide-react";

const Carousel: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: "/slide-1.jpg", // Replace with your image path
      title: "Fresh, Quality Chicken",
      description: "Ensuring freshness.",
    },
    {
      id: 2,
      image: "/slide-1.jpg", // Replace with your image path
      title: "Affordable Prices",
      description:
        "Get premium-quality chicken.",
    },
    {
      id: 3,
      image: "/slide-1.jpg", // Replace with your image path
      title: "Hygienic & Clean",
      description:
        "Processed in a clean environment.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden bg-white">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex transition-transform duration-700 ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Image Div */}
          <div className="flex-1 relative">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent" />
          </div>
          {/* Content Div */}
          <div className="flex-1 flex items-center justify-center p-8 bg-black">
            <div className="text-center max-w-lg">
              <h2 className="text-4xl font-serif text-white mb-4">
                {slide.title}
              </h2>
              <p className="text-lg text-white mb-6">{slide.description}</p>
              <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors">
              <Link href="tel:9959627622">Contact Us</Link>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-red text-bold rounded-full p-3 shadow-md z-30 hover:bg-red-600 hover:text-white transition-all"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-red text-bold rounded-full p-3 shadow-md z-30 hover:bg-red-600 hover:text-white transition-all"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-white" />
      </button>
    </div>
  );
};

export default Carousel;
