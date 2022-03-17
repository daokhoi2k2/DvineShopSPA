import React, { useEffect } from "react";
import Breadcumb from "../../components/Breadcumb";
import Header from "../../components/Header";
import TopCategory from "../../components/TopCategory";
import "../../assets/css/product-details.css";
import ProductInfo from "./components/ProductInfo";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <>
      <Header />
      <TopCategory />
      <Breadcumb address="Tài khoản Netflix Premium for 1 User (1 Tháng)" />
      <ProductInfo />
    </>
  );
};

export default ProductDetail;
