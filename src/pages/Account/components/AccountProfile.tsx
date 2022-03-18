import React from "react";
import "../../../assets/css/account.css";
import AccountHeader from "../../../components/AccountHeader";
import AccountBody from "./AccountBody";

const AccountProfile = () => {
  return (
    <div className="account__header-wrapper">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <AccountHeader />
            <AccountBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
