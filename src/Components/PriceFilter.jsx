import React, { useState } from "react";

const PriceRange = ({ onPriceChange }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({ ...prevRange, [name]: value }));
    onPriceChange(priceRange);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({ ...prevRange, [name]: value }));
    onPriceChange(priceRange);
  };

  return (
    <div>
      <h3>Price Range</h3>
      <input
        type="range"
        name="min"
        min="0"
        max="100000"
        value={priceRange.min}
        onChange={handleSliderChange}
      />
      <input
        type="range"
        name="max"
        min="0"
        max="100000"
        value={priceRange.max}
        onChange={handleSliderChange}
      />
      <input
        type="number"
        name="min"
        value={priceRange.min}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="max"
        value={priceRange.max}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PriceRange;
