import React from "react";
import Header from "../../components/Header";
import TopCategory from "../../components/TopCategory";
import CartWrapper from "./components/CartWrapper";

const Cart: React.FC = () => {
  return (
    <>
      <Header />
      <TopCategory />
      <CartWrapper />
    </>
  );
};

export default Cart;
