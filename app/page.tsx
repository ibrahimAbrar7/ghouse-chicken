"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";
import Testimonial from "./Components/Testimonial";
import Services from "./Components/Services";
import BackToTop from "./Components/BackToTop";
import Contact from "./Components/Contact";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Check if page has been scrolled past the Header
      if (window.scrollY > 100) {
        setIsScrolled(true);  // User has scrolled down
      } else {
        setIsScrolled(false);  // User is at the top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      {/* Navbar - make it fixed when scrolled */}
      <Navbar isScrolled={isScrolled} />
      <Carousel />
      <About />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <BackToTop />
     </>
  );
};

export default Home;
