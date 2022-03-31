import Header from "components/Header";
import UserNav from "components/UserNav";
import React from "react";
import { Container, UserInner, UserWrapper } from "./styles";
import UserSecurity from "./UserSecurity";
// import UserProfile from "./UserProfile";

const Security = () => {
  return (
    <Container>
      <Header></Header>
      <UserWrapper>
        <UserInner>
          <UserNav></UserNav>
          <UserSecurity>
            ASD
          </UserSecurity>
        </UserInner>
      </UserWrapper>
    </Container>
  );
};

export default Security;
