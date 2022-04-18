import VND from 'components/VND';
import { HomeIconFC, PlusIconFC } from 'designs/icons/Components';
import {
  CardIcon,
  CartIcon,
  CloseIcon,
  HeartIcon,
  LogoutIcon,
  PersonIcon,
  ShareIcon,
} from 'designs/icons/Drawer';
import SVG from 'designs/SVG';
import useAuth from 'hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from 'redux/actions/category';
import { setAuthModalBox, setNavDrawer } from 'redux/actions/config';
import { RootState } from 'redux/reducers';
import {
  AuthWrapper,
  CloseDrawer,
  ControlAuthItem,
  ControlAuthWrapper,
  GroupNav,
  IconAuth,
  IconAuthWrapper,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerInner,
  NavDrawerWrapper,
  NavItem,
  NavText,
  RestFixed,
  UserInfo,
} from './styles';

const NavDrawer: React.FC = () => {
  const isNavDrawer = useSelector(
    (state: RootState) => state.config.isNavDrawer
  );
  const categories = useSelector(
    (state: RootState) => state.category.allCategory
  );
  const auth: any = useAuth();

  const dispatch = useDispatch();

  const handleCloseNavDrawer = () => {
    dispatch(setNavDrawer(false));
  };

  const handleShowAuthModalLogin = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: 'login',
      })
    );
    handleCloseNavDrawer();
  };

  const handleShowAuthModalRegister = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: 'register',
      })
    );
    handleCloseNavDrawer();
  };

  useEffect(() => {
    if (!categories.length) {
      dispatch(getAllCategories());
    }
  }, []);

  const handleLogout = () => {
    auth.logout();
  };

  const navList: any = [
    {
      id: 1,
      name: 'Quản lý tài khoản',
      icon: <PersonIcon className="h-[17.5px]"></PersonIcon>,
      href: '/user/profile',
    },
    {
      id: 2,
      name: 'Lịch sử đơn hàng',
      icon: <CartIcon className="h-[17.5px]"></CartIcon>,
      href: '/user/orders',
    },
    {
      id: 3,
      name: 'Lịch sử giao dịch',
      icon: <CardIcon className="h-[17.5px]"></CardIcon>,
      href: '/user/transactions',
    },
    {
      id: 4,
      name: 'Sản phẩm yêu thích',
      icon: <HeartIcon className="h-[17.5px]"></HeartIcon>,
      href: '/user/wishlist',
    },
    {
      id: 5,
      name: 'Giới thiệu bạn bè',
      icon: <ShareIcon className="h-[17.5px]"></ShareIcon>,
      href: '/user/affiliate',
    },
  ];

  return (
    <NavDrawerWrapper isNavDrawer={isNavDrawer}>
      <NavDrawerInner className="NavDrawerTransition">
        <NavDrawerHeader>
          <AuthWrapper>
            {!auth.isAuth ? (
              <>
                <IconAuthWrapper>
                  <IconAuth>
                    <PersonIcon className="w-[18.5px] h-[18.5px] text-white" />
                  </IconAuth>
                </IconAuthWrapper>
                <ControlAuthWrapper>
                  <ControlAuthItem onClick={handleShowAuthModalLogin}>
                    Đăng nhập
                  </ControlAuthItem>
                  <ControlAuthItem>/</ControlAuthItem>
                  <ControlAuthItem onClick={handleShowAuthModalRegister}>
                    Đăng ký
                  </ControlAuthItem>
                </ControlAuthWrapper>
              </>
            ) : (
              <UserInfo>
                <img
                  src={
                    auth.accountInfo?.avatar ||
                    require('../../assets/images/trend-avatar-1-73987.jpg')
                  }
                  className="w-[42px] h-[42px] rounded-full"
                  alt="asd"
                />
                <div className="text-white font-medium">
                  <div className="flex gap-x-2 items-center">
                    <h3 className="font-semibold">
                      {auth.accountInfo?.username}
                    </h3>
                    <img
                      src="https://cdn.divineshop.vn/image/catalog/image_compression/badge-gold-2-50px.png"
                      className="w-[21px] h-[21px]"
                      alt=""
                    />
                  </div>
                  <h3 className="text-sm font-semibold">
                    Số dư:
                    {<VND value={auth.accountInfo?.balance} />}
                  </h3>
                </div>
              </UserInfo>
            )}

            <CloseDrawer onClick={handleCloseNavDrawer}>
              <CloseIcon className="w-[24.5px] h-[24.5px] text-white" />
            </CloseDrawer>
          </AuthWrapper>
        </NavDrawerHeader>
        <NavDrawerBody>
          <GroupNav>
            <NavItem to="/">
              <HomeIconFC></HomeIconFC>
              <NavText>Trang chủ</NavText>
            </NavItem>
            <NavItem to="/">
              <PlusIconFC></PlusIconFC>
              <NavText>Nạp tiền vào tài khoản</NavText>
            </NavItem>
          </GroupNav>
          {auth.isAuth && (
            <GroupNav>
              {navList.map((navItem: any) => (
                <NavItem key={navItem.id} to={navItem.href}>
                  {navItem.icon}
                  <NavText>{navItem.name}</NavText>
                </NavItem>
              ))}
            </GroupNav>
          )}
          <GroupNav>
            {categories.map((category) => (
              <NavItem key={category._id} to={`/search?${category._id}`}>
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-[17.5px] h-[17.5px]"
                />
                <NavText>{category.title}</NavText>
              </NavItem>
            ))}
          </GroupNav>
          {auth.isAuth && (
            <GroupNav>
              <div
                onClick={handleLogout}
                className="mb-4 flex items-center cursor-pointer"
              >
                <LogoutIcon className="h-[17.5px]" />
                <NavText>Đăng xuất</NavText>
              </div>
            </GroupNav>
          )}
        </NavDrawerBody>
      </NavDrawerInner>
      <RestFixed onClick={handleCloseNavDrawer}></RestFixed>
    </NavDrawerWrapper>
  );
};

export default NavDrawer;
