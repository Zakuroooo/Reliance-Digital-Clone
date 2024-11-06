import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryMonthYear: "",
    cvv: "",
    nameOnCard: "",
  });

  const [errors, setErrors] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Fetch cart items from localStorage and calculate total price
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!/^\d{16}$/.test(cardDetails.cardNumber)) {
      newErrors.cardNumber = "Card number should be 16 digits long.";
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDetails.expiryMonthYear)) {
      newErrors.expiryMonthYear = "Invalid date format. Use MM/YY.";
    }
    if (!/^\d{3}$/.test(cardDetails.cvv)) {
      newErrors.cvv = "CVV should be 3 digits long.";
    }
    if (!/^[A-Za-z ]+$/.test(cardDetails.nameOnCard)) {
      newErrors.nameOnCard = "Name on card should contain only letters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePay = () => {
    if (validate()) {
      console.log("Payment details:", cardDetails);
      alert("Payment successful!");
      setPaymentSuccess(true);
      // Here you can handle payment processing (e.g., call to your payment API)
    } else {
      console.log("Validation failed. Please check your input.");
    }
  };

  return (
    <div className="payment-page container mx-auto px-4 py-8 flex flex-col md:flex-row">
      <div className="card-details w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-xl mb-4">Enter Card Details</h2>

        {/* Card Number */}
        <div className="form-group mb-4">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={cardDetails.cardNumber}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
          {errors.cardNumber && (
            <span className="text-red-500">{errors.cardNumber}</span>
          )}
        </div>

        {/* Expiry Date and CVV */}
        <div className="form-group mb-4 flex space-x-4">
          <input
            type="text"
            name="expiryMonthYear"
            placeholder="Valid through (MM/YY)"
            value={cardDetails.expiryMonthYear}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-1/2"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-1/2"
          />
        </div>
        {errors.expiryMonthYear && (
          <span className="text-red-500">{errors.expiryMonthYear}</span>
        )}
        {errors.cvv && <span className="text-red-500">{errors.cvv}</span>}

        {/* Name on Card */}
        <div className="form-group mb-4">
          <input
            type="text"
            name="nameOnCard"
            placeholder="Name On Card"
            value={cardDetails.nameOnCard}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
          {errors.nameOnCard && (
            <span className="text-red-500">{errors.nameOnCard}</span>
          )}
        </div>

        <button
          onClick={handlePay}
          className="bg-red-500 text-white py-2 px-4 w-full mt-4"
        >
          Pay
        </button>

        {paymentSuccess && (
          <Link
            to="/main"
            className="block text-center mt-4 text-blue-500 hover:underline"
          >
            Continue Shopping
          </Link>
        )}
      </div>

      {/* Price details section */}
      <div className="price-details w-full md:w-1/2 md:ml-8">
        <h2 className="text-xl mb-4">
          PRICE DETAILS ({cartItems.length} items)
        </h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.title} QUANTITY ({item.quantity})
            </span>
            <span>₹{item.price.toFixed(2)} each</span>
          </div>
        ))}
        <div className="flex justify-between mb-2">
          <span>Total MRP (Inc. of Taxes)</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span className="text-green-500">Free</span>
        </div>
        <div className="flex justify-between border-t pt-2">
          <span>Cart Total</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
