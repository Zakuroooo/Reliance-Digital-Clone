import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Bestseller from "./Bestseller";
import TopRated from "./TopRated";
import NewArrivals from "./NewArrivals";
import Trending from "./Trending";
import ProductDetail from "./ProductDetail";
import CategoryFilter from "./CategoryFilter";

import Cart from "./Cart";
import MyOrders from "./Myorders";

import { User } from "lucide-react";

import SearchPage from "./SearchPage";

const Main = () => {
  return (
    <>
      <Header />

      <Bestseller />
      <Trending />
      <TopRated />

      <NewArrivals />
      <ProductDetail />

      <Footer />
      {/* <CategoryFilter /> */}
    </>
  );
};

export default Main;
