import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProductsByCategory } from "../utils/api.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        setIsLoading(true);
        const fetchedProducts = await fetchProductsByCategory("new arrival");
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      Math.min(prevSlide + 1, Math.ceil(products.length / 5) - 1)
    );
  };

  if (isLoading) {
    return (
      <section className="bg-white rounded-lg shadow-sm p-3">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">New Arrivals</h2>
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-600">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-lg shadow-sm p-3">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">New Arrivals</h2>
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {products
            .slice(currentSlide * 5, (currentSlide + 1) * 5)
            .map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md p-2 group hover:shadow-lg transition-shadow w-full"
              >
                <div className="aspect-square overflow-hidden rounded-md mb-2 flex items-center justify-center">
                  <img
                    src={product.displayImage}
                    alt={product.name}
                    className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 h-10">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-base font-bold text-gray-900">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                  <Link
                    to={`/products/${product._id}`}
                    className="bg-blue-600 text-white text-base px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
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
          className={`absolute top-1/2 -left-1.5 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10 ${
            currentSlide === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50"
          }`}
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={handleNextSlide}
          disabled={(currentSlide + 1) * 5 >= products.length}
          className={`absolute top-1/2 -right-1.5 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10 ${
            (currentSlide + 1) * 5 >= products.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50"
          }`}
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
