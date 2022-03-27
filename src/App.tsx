import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<div>Hello World</div>} />
      </Routes>
    </>
  );
};

export default App;
