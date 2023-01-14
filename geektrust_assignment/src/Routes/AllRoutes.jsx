import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Search } from "../Components/Search";
import { PreCheckout } from "../Pages/PreCheckout";
import { ProductListing } from "../Pages/ProductListing";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Search />
            <ProductListing />
          </>
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <PreCheckout />
          </>
        }
      ></Route>
    </Routes>
  );
};
