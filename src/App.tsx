import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import ProductDetail from "pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import Search from "pages/Search";
import Profile from "pages/Profile";
import OrderHistory from "pages/OrderHistory";
import Wishlist from "pages/Wishlist";
import Security from "pages/Security";
import Overview from "pages/Admin/Overview";
import ProductAdmin from "pages/Admin/Product";

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:hash_name" element={<ProductDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/orders" element={<OrderHistory />} />
        <Route path="/user/wishlist" element={<Wishlist />} />
        <Route path="/user/security" element={<Security />} />
        <Route path="/admin/" element={<Overview />} />
        <Route path="/admin/product" element={<ProductAdmin />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={"toastCustom"}
      />
    </>
  );
};

export default App;
