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
    <section className="bg-white rounded-lg shadow-sm p-2 sm:p-3">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
        Top Rated
      </h2>
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
          {products
            .slice(currentSlide * 5, (currentSlide + 1) * 5)
            .map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md p-1.5 sm:p-2 group hover:shadow-lg transition-shadow w-full"
              >
                <div className="w-full h-24 sm:h-28 md:h-32 overflow-hidden rounded-md mb-1 flex items-center justify-center">
                  <img
                    src={product.displayImage}
                    alt={product.name}
                    className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 h-10">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-1 sm:mt-1.5">
                  <p className="text-xs sm:text-sm font-bold text-gray-900">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                  <Link
                    to={`/products/${product._id}`}
                    className="bg-blue-600 text-white text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Item
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <button
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className={`absolute top-1/2 -left-1 transform -translate-y-1/2 bg-white p-0.5 rounded-full shadow-md cursor-pointer z-10 ${
            currentSlide === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50"
          }`}
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
        </button>
        <button
          onClick={handleNextSlide}
          disabled={(currentSlide + 1) * 5 >= products.length}
          className={`absolute top-1/2 -right-1 transform -translate-y-1/2 bg-white p-0.5 rounded-full shadow-md cursor-pointer z-10 ${
            (currentSlide + 1) * 5 >= products.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50"
          }`}
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
        </button>
      </div>
    </section>
  );
}
