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
      <div className="w-full flex justify-start px-4 mt-6">
        <button
          onClick={() => navigate(-1)}
          className="ml-9 inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
        >
          <svg
            className="mr-2 h-5 w-5"
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
        <div className="flex flex-col md:flex-row w-full max-w-6xl">
          <div className="md:w-1/6 mb-4 md:mb-0 flex md:flex-col justify-start items-center overflow-x-auto md:overflow-y-auto md:max-h-[400px]">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index}`}
                className="w-16 h-16 md:w-full md:h-auto cursor-pointer rounded border mb-2 mr-2 md:mr-0 flex-shrink-0"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          <div className="md:w-1/2 pl-0 md:pl-4 mb-4 md:mb-0">
            <div className="mb-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
          <div className="md:w-1/3 pl-0 md:pl-4">
            <h1 className="text-xl md:text-2xl text-[#070707] font-bold mb-2">
              {product.name}
            </h1>
            <h2 className="text-lg md:text-xl text-[#1f288a] mb-4">
              Deal Price: ₹{product.price}
            </h2>
            <div className="bg-[#f8f2f2] p-4 rounded shadow-md">
              <h3 className="text-base md:text-lg text-[#040404] font-semibold mb-2">
                Key Features
              </h3>
              <ul>
                {product.features
                  .slice(0, showMore ? product.features.length : 3)
                  .map((feature, index) => (
                    <li
                      key={index}
                      className="text-sm md:text-base text-[#0d0d0d]"
                    >
                      {feature}
                    </li>
                  ))}
              </ul>
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-red-500 mt-2 hover:underline text-sm md:text-base"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
            <div className="mt-4">
              <button
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-bold text-sm md:text-base"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
            <div className="mt-4">
              <button
                className="w-full bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 rounded-md font-bold text-sm md:text-base"
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
