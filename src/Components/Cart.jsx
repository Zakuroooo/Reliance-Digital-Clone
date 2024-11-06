import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const username = localStorage.getItem("username");
    setIsLoggedIn(!!username);

    // Only fetch cart items if user is logged in
    if (username) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(cart);
      calculateTotalPrice(cart);
    }
  }, []);

  // Function to calculate total price
  const calculateTotalPrice = (cart) => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  // Function to remove item from the cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };

  // Function to update quantity of an item
  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };

  // Function to add item to cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      updateQuantity(item.id, existingItem.quantity + 1);
    } else {
      const updatedCart = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      calculateTotalPrice(updatedCart);
    }
  };

  // Function to handle checkout
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
      navigate("/checkout");
    } else {
      alert("Your cart is empty");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container mx-auto p-4 flex-grow flex justify-center items-center">
          <h2 className="text-xl text-gray-700">
            Please login first to see cart items
          </h2>
        </div>
        <Footer className="mt-auto" />
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container mx-auto p-4 flex-grow flex justify-center items-center">
          <h2 className="text-xl text-gray-700">Your cart is empty!</h2>
        </div>
        <Footer className="mt-auto" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto p-4 flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white shadow-md rounded flex justify-between items-center mb-4"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Price: ₹{item.price}</p>
                <div className="flex items-center mt-2">
                  <label className="mr-2">Quantity:</label>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="border p-1 rounded"
                  >
                    {[...Array(10).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                className="ml-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Right: Price Summary */}
        <div className="bg-white p-4 shadow-md rounded">
          <h2 className="text-xl font-bold mb-4">Price Details</h2>
          <div className="mb-2">
            <p className="text-gray-700">Price ({cartItems.length} Items):</p>
            <p>₹{totalPrice}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-700">Delivery Charges:</p>
            <p className="text-green-500">FREE</p>
          </div>
          <div className="border-t mt-2 pt-2">
            <p className="text-xl font-semibold">Total Payable:</p>
            <p className="text-xl font-bold">₹{totalPrice}</p>
          </div>
          <button
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Cart;
