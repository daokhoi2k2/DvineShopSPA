import React, { useEffect } from "react";
import Header from "../../components/Header";
import TopCategory from "../../components/TopCategory";
import AccountProfile from "./components/AccountProfile";

type Props = {};

const Account = (props: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Header />
      <TopCategory />
      <AccountProfile />
    </>
  );
};

export default Account;
