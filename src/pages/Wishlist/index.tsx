import Header from "components/Header";
import UserNav from "components/UserNav";
import React from "react";
import { Container, UserInner, UserWrapper } from "./styles";
import UserWishlist from "./UserWishlist";
import UserOrder from "./UserWishlist";
// import UserProfile from "./UserProfile";

const Wishlist = () => {
  return (
    <Container>
      <UserWrapper>
        <UserInner>
          <UserNav></UserNav>
          <UserWishlist>
            ASD
          </UserWishlist>
          {/* <UserProfile></UserProfile> */}
        </UserInner>
      </UserWrapper>
    </Container>
  );
};

export default Wishlist;
