import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Bestseller from "./Bestseller";
import TopRated from "./TopRated";
import NewArrivals from "./NewArrivals";
import Trending from "./Trending";
import ProductDetail from "./ProductDetail";
import CategoryFilter from "./CategoryFilter";
import HeroCard from "./HeroCard";

import Cart from "./Cart";
import MyOrders from "./Myorders";

import { User } from "lucide-react";

import SearchPage from "./SearchPage";

const Main = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="w-full text-red-600 py-3 my-4 text-center">
        <p className="text-sm md:text-base font-semibold">
          🎉 Special Offer: Get 10% off on all electronics! Use code: RELIANCE10
          🎉
        </p>
      </div>
      <main className="w-full max-w-[1400px] mx-auto px-1 py-4 space-y-4">
        <HeroCard />
        <Bestseller />
        <Trending />
        <TopRated />
        <NewArrivals />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
