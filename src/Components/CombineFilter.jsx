// Products.js
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const CombineFilter = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([5000, 50000]);

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
    fetchFilteredProducts(categories, priceRange);
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
    fetchFilteredProducts(selectedCategories, range);
  };

  const fetchFilteredProducts = (categories, priceRange) => {
    const categoryFilter = categories.length
      ? `"subCategory": "${categories.join(",")}"`
      : "";
    const priceFilter = `"price": {"$gte": ${priceRange[0]}, "$lte": ${priceRange[1]}}`;

    const filterQuery = `{${categoryFilter}${
      categoryFilter && priceFilter ? "," : ""
    }${priceFilter}}`;

    fetch(
      `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter=${encodeURIComponent(
        filterQuery
      )}`,
      {
        method: "GET",
        headers: {
          projectId: "bng7dtu7whwk", // Your project ID
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setFilteredProducts(data.products))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Filter Products</h2>
      <CategoryFilter handleCategoryChange={handleCategoryChange} />
      <PriceFilter handlePriceChange={handlePriceChange} />
      <div>
        <h3>Filtered Products</h3>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CombineFilter;
