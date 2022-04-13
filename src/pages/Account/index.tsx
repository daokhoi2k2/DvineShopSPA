import Header from 'components/Header';
import UserNav from 'components/UserNav';
import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  AccountInner,
  AccountLayout,
  AccountLayoutInner,
  AccountWrapper,
  Container,
} from './styles';
import UserProfile from './UserProfile';

const Account = () => {
  return (
    <Container>
      <AccountWrapper>
        <AccountInner>
          <UserNav></UserNav>
          <AccountLayout>
            <AccountLayoutInner>
              <Outlet />
            </AccountLayoutInner>
          </AccountLayout>
        </AccountInner>
      </AccountWrapper>
    </Container>
  );
};

export default Account;
