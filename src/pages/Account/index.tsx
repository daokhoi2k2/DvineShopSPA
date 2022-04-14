import Header from 'components/Header';
import UserNav from 'components/UserNav';
import useAuth from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { setAuthModalBox } from 'redux/actions/config';
import {
  AccountInner,
  AccountLayout,
  AccountLayoutInner,
  AccountWrapper,
  Container,
  SubmitBtn,
} from './styles';

const Account = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const handleOpenLogin = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: 'login',
      })
    );
  };

  return (
    <Container>
      <AccountWrapper>
        <AccountInner>
          <UserNav></UserNav>
          <AccountLayout>
            <AccountLayoutInner>
              {auth.isAuth ? (
                <Outlet />
              ) : (
                <SubmitBtn onClick={handleOpenLogin}>
                  Đăng nhập để tiếp tục
                </SubmitBtn>
              )}
            </AccountLayoutInner>
          </AccountLayout>
        </AccountInner>
      </AccountWrapper>
    </Container>
  );
};

export default Account;
