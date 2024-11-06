// import React, { useState, useEffect } from "react";

// const CategoryFilter = () => {
//   const [categories, setCategories] = useState([
//     "mobile",
//     "laptop",
//     "headphones",
//     "camera",
//     "television",
//     "tablet",
//     "wearable",
//     "gaming console",
//     "printer",
//     "monitor",
//     "speaker",
//     "accessories",
//     "other",
//   ]); // Define the categories manually
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [products, setProducts] = useState([]);

//   const projectId = "bng7dtu7whwk"; // Replace with your actual projectId

//   // Handle category checkbox change
//   const handleCategoryChange = (category) => {
//     setSelectedCategories((prevSelected) => {
//       if (prevSelected.includes(category)) {
//         return prevSelected.filter((cat) => cat !== category); // Remove category if selected
//       } else {
//         return [...prevSelected, category]; // Add category if not selected
//       }
//     });
//   };

//   // Fetch products when selectedCategories change
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         if (selectedCategories.length > 0) {
//           const selectedCategory = selectedCategories[0]; // Only use the first selected category
//           const filterParam = encodeURIComponent(
//             JSON.stringify({ subCategory: selectedCategory })
//           );

//           const response = await fetch(
//             `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter=${filterParam}`,
//             {
//               method: "GET",
//               headers: {
//                 projectId,
//               },
//             }
//           );
//           const data = await response.json();
//           console.log("API response for products:", data); // Debugging log

//           if (data.products) {
//             setProducts(data.products);
//           } else {
//             console.error("No products found for the selected category.");
//             setProducts([]);
//           }
//         } else {
//           setProducts([]); // Clear products when no category is selected
//         }
//       } catch (error) {
//         console.error("Error fetching filtered products:", error);
//       }
//     };

//     fetchProducts();
//   }, [selectedCategories]);

//   return (
//     <div>
//       <h2>Filter by Category</h2>
//       <div>
//         {categories.length > 0 ? (
//           categories.map((category) => (
//             <label key={category}>
//               <input
//                 type="checkbox"
//                 value={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryChange(category)}
//               />
//               {category}
//             </label>
//           ))
//         ) : (
//           <p>Loading categories...</p>
//         )}
//       </div>

//       <h2>Products</h2>
//       <div>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.id}>
//               <h3>{product.name}</h3>
//               <p>Price: {product.price}</p>
//             </div>
//           ))
//         ) : (
//           <p>No products available for the selected categories.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryFilter;
