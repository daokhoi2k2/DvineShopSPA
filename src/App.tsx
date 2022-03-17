import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/base.css";
import Account from "./pages/Account";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default App;
