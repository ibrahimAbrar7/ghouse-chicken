import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-8 md:px-20 md:py-16">
      <div className="flex-1 max-w-full md:max-w-1/2 text-center md:text-left flex flex-col justify-between">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
          Ghouse Chicken Center is your go-to destination for fresh, high-quality chicken in the Housing Board, Moula Ali area. Known for our unbeatable prices and premium products, we’ve become a local favorite. Whether it’s for everyday meals or special occasions, we promise top-notch quality and taste with every purchase. Our commitment to freshness and customer satisfaction has earned us the trust of the community, making us a household name in the region.
        </p>
      </div>
      <div className="flex-1 max-w-full md:max-w-1/2 flex justify-center">
        <Image 
          src="/about-img.jpg"
          alt="Company Overview"
          width={500} // Set width (adjust as per your design)
          height={500} // Set height equal to the content's height
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
      </div>
    </section>
  );
};

export default About;
