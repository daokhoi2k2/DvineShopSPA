import React from "react";
import Header from "../../components/Header";
import TopCategory from "../../components/TopCategory";
import Banner from "../../components/Banner";
import ThreeBanner from "../../components/ThreeBanner";
import ProductList from "../../components/ProductList";

const Home = () => {
  return (
    <>
      <Header />
      <TopCategory />
      <Banner />
      <ThreeBanner />
      <ProductList />
    </>
  );
};

export default Home;
