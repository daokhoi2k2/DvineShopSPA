import React from "react";
import AccountHeader from "../../../components/AccountHeader";
import PurchaseHistoryBody from "./PurchaseHistoryBody";

const PurchaseHistoryBodyWrapper: React.FC = () => {
  return (
    <div className="account__header-wrapper">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <AccountHeader />
            <PurchaseHistoryBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistoryBodyWrapper;
