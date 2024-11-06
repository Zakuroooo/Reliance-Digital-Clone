import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "./Header";

const Search = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // To navigate to product details

  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"name":"${query}"}`,
          {
            headers: {
              projectId: "bng7dtu7whwk",
            },
          }
        );

        const data = await response.json();
        if (data.status === "success") {
          setProducts(data.data);
        } else {
          setError("No products found.");
        }
      } catch (err) {
        setError("An error occurred while fetching products.");
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  const handleProductClick = (productId) => {
    // Navigate to the product detail page with the product ID
    navigate(`/products/${productId}`);
  };

  return (
    <div>
      <Header />

      <div className="container mx-auto p-4">
        {/* Display loading message */}
        {loading && <p>Loading...</p>}

        {/* Display error message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Display Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length === 0 && !loading && <p>No products found</p>}
          {products.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded shadow"
              onClick={() => handleProductClick(product._id)} // Corrected product._id here
            >
              <img
                src={product.displayImage}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 cursor-pointer"
              />
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-sm">Price: ₹{product.price}</p>
              <p className="text-sm">Seller: {product.seller.name}</p>
              <p className="text-sm">Rating: {product.ratings}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
