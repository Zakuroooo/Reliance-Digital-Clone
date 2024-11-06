import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/ecommerce/electronics/products",
          {
            headers: {
              projectId: "bng7dtu7whwk",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const result = await response.json();
        setProducts(result.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold">
        Loading products...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
        >
          <img
            src={product.displayImage}
            alt={product.name}
            className="w-full h-64 object-contain mb-4 rounded-t-lg"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h2>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 text-lg">★ {product.ratings}</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Products;
