import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProductsByCategory } from "../utils/api.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Bestseller = () => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchBestsellers = async () => {
      const fetchedProducts = await fetchProductsByCategory("best seller");
      setProducts(fetchedProducts);
    };

    fetchBestsellers();
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
    <div className="bg-gray-50 py-4 sm:py-8 mx-auto text-center">
      <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
        Bestsellers
      </h2>
      <div className="relative">
        <div className="flex overflow-x-auto sm:overflow-x-hidden scrollbar-hide space-x-2 sm:space-x-4">
          {products
            .slice(currentSlide * 5, (currentSlide + 1) * 5)
            .map((product) => (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className="flex-shrink-0 w-36 sm:w-48 md:w-60 bg-white p-2 sm:p-4 rounded-lg shadow-lg text-black no-underline"
              >
                <img
                  src={product.displayImage}
                  alt={product.name}
                  className="w-full h-24 sm:h-32 object-contain mb-2 rounded-lg"
                />
                <h3 className="text-sm sm:text-lg font-bold truncate">
                  {product.name}
                </h3>
                <p className="text-black text-sm sm:text-base">
                  ₹{product.price}
                </p>
              </Link>
            ))}
        </div>
        <button
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-300 p-1 sm:p-2 rounded-full cursor-pointer left-0 ml-1 sm:ml-2 ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={handleNextSlide}
          disabled={(currentSlide + 1) * 5 >= products.length}
          className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-300 p-1 sm:p-2 rounded-full cursor-pointer right-0 mr-1 sm:mr-2 ${
            (currentSlide + 1) * 5 >= products.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default Bestseller;
