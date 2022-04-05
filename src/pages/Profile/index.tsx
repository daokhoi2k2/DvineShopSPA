import Header from "components/Header";
import UserNav from "components/UserNav";
import React from "react";
import { Container, UserInner, UserWrapper } from "./styles";
import UserProfile from "./UserProfile";

const Profile = () => {
  return (
    <Container>
      <UserWrapper>
        <UserInner>
          <UserNav></UserNav>
          <UserProfile></UserProfile>
        </UserInner>
      </UserWrapper>
    </Container>
  );
};

export default Profile;
