import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProductsByCategory } from "../utils/api.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Trending = () => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      const fetchedProducts = await fetchProductsByCategory("trending");
      setProducts(fetchedProducts);
    };

    fetchTrendingProducts();
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
    <div className="my-4 sm:my-8 text-center bg-gray-100 p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
        Trending
      </h2>
      <div className="relative">
        <div className="flex overflow-x-auto sm:overflow-x-hidden scrollbar-hide">
          {products
            .slice(currentSlide * 5, (currentSlide + 1) * 5)
            .map((product) => (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className="flex-shrink-0 w-36 sm:w-48 md:w-60 bg-white p-2 sm:p-4 rounded-lg shadow-md text-black mr-2 hover:translate-y-1 hover:shadow-lg transition-transform duration-300"
              >
                <img
                  src={product.displayImage}
                  alt={product.name}
                  className="w-full h-24 sm:h-32 md:h-40 object-contain mb-2 rounded-md"
                />
                <h3 className="text-sm sm:text-base font-bold truncate">
                  {product.name}
                </h3>
                <p className="text-gray-900 text-sm sm:text-base">
                  ₹{product.price}
                </p>
              </Link>
            ))}
        </div>
        <button
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-300 p-1 sm:p-2 rounded-full border-none outline-none cursor-pointer transition-opacity duration-300 ease-in-out ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          } left-1 sm:left-4`}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={handleNextSlide}
          disabled={(currentSlide + 1) * 5 >= products.length}
          className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-300 p-1 sm:p-2 rounded-full border-none outline-none cursor-pointer transition-opacity duration-300 ease-in-out ${
            (currentSlide + 1) * 5 >= products.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          } right-1 sm:right-4`}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default Trending;
