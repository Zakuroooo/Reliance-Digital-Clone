import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProductsByCategory } from "../utils/api.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TopRated() {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchTopRatedProducts = async () => {
      const fetchedProducts = await fetchProductsByCategory("top rated");
      setProducts(fetchedProducts);
    };

    fetchTopRatedProducts();
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      Math.min(prevSlide + 1, Math.ceil(products.length / 5) - 1)
    );
  };

  return (
    <div className="mx-auto my-4 sm:my-6 md:my-8 text-center bg-gray-100 p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
        Top Rated
      </h2>
      <div className="relative">
        <div className="flex overflow-x-auto sm:overflow-x-hidden scrollbar-hide">
          {products
            .slice(currentSlide * 5, (currentSlide + 1) * 5)
            .map((product) => (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-60 bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-md text-black mr-2 sm:mr-3 md:mr-4 no-underline text-inherit hover:transform hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
              >
                <img
                  src={product.displayImage}
                  alt={product.name}
                  className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-contain mb-2 rounded-md"
                />
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold truncate">
                  {product.name}
                </h3>
                <p className="text-gray-900 text-xs sm:text-sm md:text-base">
                  ₹{product.price}
                </p>
              </Link>
            ))}
        </div>
        <button
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-300 p-1 sm:p-1.5 md:p-2 rounded-full cursor-pointer left-0 ml-1 sm:ml-2 ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>
        <button
          onClick={handleNextSlide}
          disabled={(currentSlide + 1) * 5 >= products.length}
          className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-300 p-1 sm:p-1.5 md:p-2 rounded-full cursor-pointer right-0 mr-1 sm:mr-2 ${
            (currentSlide + 1) * 5 >= products.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
}
