import Header from 'components/Header';
import UserNav from 'components/UserNav';
import React from 'react';
import { Container, UserInner, UserWrapper } from './styles';
import UserOrder from './UserOrder';
// import UserProfile from "./UserProfile";

const OrderHistory = () => {
  return (
    <Container>
      <Header></Header>
      <UserWrapper>
        <UserInner>
          <UserNav></UserNav>
          <UserOrder>ASD</UserOrder>
          {/* <UserProfile></UserProfile> */}
        </UserInner>
      </UserWrapper>
    </Container>
  );
};

export default OrderHistory;
