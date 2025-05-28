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
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] bg-gradient-to-r from-red-600 via-blue-600 to-red-600 rounded-lg shadow-lg overflow-hidden mb-6 sm:mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>

      <div className="relative h-full">
        <div className="container mx-auto px-4 sm:px-6 h-full">
          <div className="flex flex-col md:flex-row items-center justify-between h-full py-8 sm:py-10">
            {/* Left Content */}
            <div className="md:w-1/2 text-white mb-6 md:mb-0 flex flex-col justify-center h-full">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                Discover Amazing Deals on Electronics
              </h1>
              <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-blue-100">
                Shop the latest gadgets with exclusive offers and discounts
              </p>
              <button
                onClick={scrollToBestseller}
                className="bg-white text-red-600 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-semibold hover:bg-red-50 transition-colors duration-300 inline-block text-xs sm:text-sm w-fit"
              >
                Shop Now
              </button>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-white transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Free Delivery
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100">
                    On orders above ₹499
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-white transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Easy Returns
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100">
                    30-day return policy
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-white transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Secure Payments
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100">
                    100% secure checkout
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-white transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Always here to help
                  </p>
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
