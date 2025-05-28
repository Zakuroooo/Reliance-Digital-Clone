import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Bestseller from "./Components/Bestseller";
import TopRated from "./Components/TopRated";
import Trending from "./Components/Trending";
import NewArrivals from "./Components/NewArrivals";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import SearchResults from "./Components/SearchResults";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import OrderConfirmation from "./Components/OrderConfirmation";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading of images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Reliance Digital...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <div className="space-y-8 mt-8">
                    <Bestseller />
                    <TopRated />
                    <Trending />
                    <NewArrivals />
                  </div>
                </>
              }
            />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
