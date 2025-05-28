import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../utils/api";
import Header from "./Header";
import Footer from "./Footer";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(productId);
        setProduct(fetchedProduct);
        setSelectedImage(fetchedProduct.images[0]);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    getProduct();
  }, [productId]);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  const handleBuyNow = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/checkout");
  };

  if (!product) return null;

  return (
    <div>
      <Header />
      <div className="w-full flex justify-start px-4 mt-4 sm:mt-6">
        <button
          onClick={() => navigate(-1)}
          className="ml-4 sm:ml-9 inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base"
        >
          <svg
            className="mr-1.5 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Products
        </button>
      </div>
      <div className="container mx-auto p-4 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-4 sm:gap-6">
          <div className="md:w-1/3 w-full mb-4 md:mb-0 flex md:flex-col justify-center md:justify-start items-center overflow-x-auto md:overflow-y-auto md:max-h-[300px] lg:max-h-[350px]">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index}`}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-full md:h-auto cursor-pointer rounded border mb-1 sm:mb-1.5 mr-1 sm:mr-1.5 md:mr-0 flex-shrink-0"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          <div className="md:w-1/2 w-full pl-0 md:pl-4 mb-4 md:mb-0">
            <div className="mb-2 sm:mb-3">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-60 sm:h-72 object-contain rounded"
              />
            </div>
          </div>
          <div className="md:w-1/3 w-full pl-0 md:pl-4 space-y-2 sm:space-y-3">
            <h1 className="text-base sm:text-lg md:text-xl text-[#070707] font-bold mb-0.5 sm:mb-1">
              {product.name}
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg text-[#1f288a] mb-2 sm:mb-3">
              Deal Price: ₹{product.price}
            </h2>
            <div className="bg-[#f8f2f2] p-3 rounded shadow-md space-y-1.5">
              <h3 className="text-sm md:text-base text-[#040404] font-semibold mb-1">
                Key Features
              </h3>
              <ul>
                {product.features
                  .slice(0, showMore ? product.features.length : 3)
                  .map((feature, index) => (
                    <li key={index} className="text-xs text-[#0d0d0d]">
                      {feature}
                    </li>
                  ))}
              </ul>
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-red-500 mt-1 hover:underline text-xs"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
            <div className="mt-2 sm:mt-3">
              <button
                className="w-full bg-red-500 hover:bg-red-600 text-white py-1.5 px-3 rounded-md font-bold text-sm"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
            <div className="mt-2 sm:mt-3">
              <button
                className="w-full bg-orange-500 hover:bg-orange-400 text-white py-1.5 px-3 rounded-md font-bold text-sm"
                onClick={() => handleBuyNow(product)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
