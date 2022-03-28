import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import ProductDetail from "pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import Search from "pages/Search";

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
        <Route path="/admin" element={<div>Hello World</div>} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
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
