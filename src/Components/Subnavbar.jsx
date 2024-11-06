import React, { useState, useEffect } from "react";

const Subnavbar = () => {
  const [categories, setCategories] = useState([]); // State to store categories
  const [activeDropdown, setActiveDropdown] = useState(null); // State to track active dropdown

  // Fetch categories from the API on component mount
  useEffect(() => {
    fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories",
      {
        headers: { projectId: "bng7dtu7whwk" }, // Use your projectId
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setCategories(data.data); // Set the categories in state
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Toggle dropdown visibility
  const handleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <div className="bg-blue-600">
      {/* Tailwind class for background color */}
      <nav className="flex justify-center">
        {/* Flexbox for centering */}
        <ul className="flex space-x-4 p-0 m-0 list-none">
          {/* Render categories dynamically */}
          {categories.map((category) => (
            <li
              key={category}
              className="text-white px-2 py-1 text-center relative"
            >
              <span onClick={() => handleDropdown(category)}>{category}</span>
              {activeDropdown === category && (
                <ul className="absolute top-full left-0 bg-white text-black shadow-md p-2">
                  <li>{category} 1</li>
                  <li>{category} 2</li>
                  <li>{category} 3</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Subnavbar;
