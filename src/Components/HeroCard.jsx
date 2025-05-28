import React from "react";
import { Link } from "react-router-dom";

const HeroCard = () => {
  const scrollToBestseller = () => {
    const bestsellerSection = document.querySelector("#bestseller-section");
    if (bestsellerSection) {
      bestsellerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-r from-red-600 via-blue-600 to-red-600 rounded-lg shadow-lg overflow-hidden mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>

      <div className="relative h-full">
        <div className="container mx-auto px-6 h-full">
          <div className="flex flex-col md:flex-row items-center justify-between h-full py-12">
            {/* Left Content */}
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Discover Amazing Deals on Electronics
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Shop the latest gadgets with exclusive offers and discounts
              </p>
              <button
                onClick={scrollToBestseller}
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-red-50 transition-colors duration-300 inline-block text-lg"
              >
                Shop Now
              </button>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-3">Free Delivery</h3>
                  <p className="text-blue-100">On orders above ₹499</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-3">Easy Returns</h3>
                  <p className="text-blue-100">30-day return policy</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-3">
                    Secure Payments
                  </h3>
                  <p className="text-blue-100">100% secure checkout</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                  <p className="text-blue-100">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
