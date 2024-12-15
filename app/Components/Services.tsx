import React from "react";
import { FaDollarSign, FaHeart, FaUtensils, FaPeopleCarry, FaHome, FaRegClock } from "react-icons/fa";

const Services: React.FC = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-12">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Premium Quality Chicken */}
          <div className="w-full p-6 bg-gradient-to-r from-[#c42a2a] via-[#8b1a1a] to-[#2c2c2c] text-white text-center rounded-lg">
            <FaHeart className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Premium Quality Chicken</h3>
            <p className="mt-4 text-lg">Fresh, high-quality chicken with great taste every time.</p>
          </div>

          {/* Service 2: Affordable Prices */}
          <div className="w-full p-6 bg-gradient-to-r from-[#c42a2a] via-[#8b1a1a] to-[#2c2c2c] text-white text-center rounded-lg">
            <FaDollarSign className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Affordable Prices</h3>
            <p className="mt-4 text-lg">Get the best prices without compromising on quality.</p>
          </div>

          {/* Service 4: Bulk Orders */}
          <div className="w-full p-6 bg-gradient-to-r from-[#c42a2a] via-[#8b1a1a] to-[#2c2c2c] text-white text-center rounded-lg">
            <FaPeopleCarry className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Bulk Orders</h3>
            <p className="mt-4 text-lg">Perfect for parties, events, and restaurants.</p>
          </div>

          {/* Service 5: Healthy & Hygienic */}
          <div className="w-full p-6 bg-gradient-to-r from-[#c42a2a] via-[#8b1a1a] to-[#2c2c2c] text-white text-center rounded-lg">
            <FaUtensils className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Healthy & Hygienic</h3>
            <p className="mt-4 text-lg">Clean and safe, ensuring top health standards.</p>
          </div>
          <div className="w-full p-6 bg-gradient-to-r from-[#c42a2a] via-[#8b1a1a] to-[#2c2c2c] text-white text-center rounded-lg">
            <FaHome className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Convenient Location</h3>
            <p className="mt-4 text-lg">Easy access to our store in the heart of Housing Board, Moula Ali.</p>
          </div>
          <div className="w-full p-6 bg-gradient-to-r from-[#c42a2a] via-[#8b1a1a] to-[#2c2c2c] text-white text-center rounded-lg">
            <FaRegClock className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Quick Service</h3>
            <p className="mt-4 text-lg">Get your fresh chicken quickly without the long wait. We value your time!</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
