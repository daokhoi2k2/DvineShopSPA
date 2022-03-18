import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/base.css";
import Account from "./pages/Account";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import PurchaseHistory from "./pages/PurchaseHistory";

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />
      </Routes>
    </>
  );
};

export default App;
