import Header from "components/Header";
import UserNav from "components/UserNav";
import React from "react";
import { Container, UserInner, UserWrapper } from "./styles";
import UserOrder from "./UserOrder";
// import UserProfile from "./UserProfile";

const OrderHistory = () => {
  return (
    <Container>
      <UserWrapper>
        <UserInner>
          <UserNav></UserNav>
          <UserOrder>
          </UserOrder>
        </UserInner>
      </UserWrapper>
    </Container>
  );
};

export default OrderHistory;
