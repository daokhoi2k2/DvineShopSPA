import React from "react";
import Header from "../../components/Header";
import TopCategory from "../../components/TopCategory";
import PurchaseHistoryBodyWrapper from "./components/PurchaseHistoryWrapper";

const PurchaseHistory: React.FC = () => {
  return (
    <>
      <Header />
      <TopCategory />
      <PurchaseHistoryBodyWrapper />
    </>
  );
};

export default PurchaseHistory;
