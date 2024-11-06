import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Signin from "./Components/ Signin";
import Signup from "./Components/Signup";

import Main from "./Components/Main";
import ProductDetail from "./Components/ProductDetail";

import UserProfile from "./Components/UserProfile";
import Payment from "./Components/Payment";
import SearchPage from "./Components/SearchPage";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Checkout from "./Components/checkout";
import { AuthProvider } from "./Context/Authcontext"; // Import AuthProvider

function App() {
  return (
    <div className="root">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/main" element={<Main />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/search" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
