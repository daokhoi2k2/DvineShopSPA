import { CartIcon, MoreIcon, PersonIcon, PlusIcon, SearchIcon } from "designs/icons/Drawer";
import SVG from "designs/SVG";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AuthControlWrapper,
  AuthWrapper,
  Balance,
  BalanceIcon,
  BalanceInfo,
  BalanceMoney,
  BalanceTitle,
  ButtonSearch,
  CartAmount,
  CartTitle,
  CartWrapper,
  ControlAuthItem,
  ControlAuthWrapper,
  IconAuth,
  IconAuthWrapper,
  ImgAvatar,
  InputSearch,
  LogoText,
  LogoWrapper,
  MainControlWrapper,
  NavItem,
  NavList,
  SearchWrapper,
  ShowMore,
  UserAvatar,
  UserControlWrapper,
  UserInfoWrapper,
  UserText,
} from "./styles";
import { setAuthModalBox, toggleNavDrawer } from "redux/actions/config";
import { RootState } from "redux/reducers";
import { getAllCategories } from "redux/actions/category";
import { authLogout } from "redux/actions/auth";

const MainControl: React.FC = () => {
  const dispatch = useDispatch();
  const user:any = useSelector((state: RootState) => state.auth.user);

  const handleToggleNavDrawer = () => {
    dispatch(toggleNavDrawer());
  };

  const showLoginRegisterModalBox = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: "login",
      })
    );
  };

  const showRegisterModelBox = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: "register",
      })
    );
  };

  const handleClickLogo = () => {
    dispatch(getAllCategories());
  }

  const handleLogout = () => {
    dispatch(authLogout())
  }

  return (
    <MainControlWrapper>
      <Link to="/" className="lg:hidden">
        <LogoWrapper>
          <SVG name="logo_divine_pure_white" className="w-[49px] h-[49px]"></SVG>
          <LogoText onClick={handleClickLogo}>Divine Shop</LogoText>
        </LogoWrapper>
      </Link>
      {/* Show when screen is tablet or mobile */}
      <ShowMore onClick={handleToggleNavDrawer}>
        <MoreIcon className="w-6 h-9 text-white" />
      </ShowMore>
      {/* End */}
      <SearchWrapper>
        <InputSearch placeholder="Tìm kiếm sản phẩm" />
        <ButtonSearch>
          <SearchIcon className="w-[17.5px] h-[17.5px]" />
        </ButtonSearch>
      </SearchWrapper>
      <AuthControlWrapper className="group">
        {!user.userInfo ? (
          <AuthWrapper>
            <IconAuthWrapper onClick={showLoginRegisterModalBox}>
              <IconAuth>
                <PersonIcon className="w-[18.5px] h-[18.5px] text-white" />
              </IconAuth>
            </IconAuthWrapper>
            <ControlAuthWrapper>
              <ControlAuthItem onClick={showLoginRegisterModalBox}>Đăng nhập</ControlAuthItem>
              <ControlAuthItem>/</ControlAuthItem>
              <ControlAuthItem onClick={showRegisterModelBox}>Đăng ký</ControlAuthItem>
            </ControlAuthWrapper>
          </AuthWrapper>
        ) : (
          <UserControlWrapper>
            <UserAvatar>
              <ImgAvatar
                className="w-[42px] h-[42px]"
                src="https://cdn.divineshop.vn/image/avatar/48384.jpg?hash=1604888765"
              />
            </UserAvatar>
            <UserText>{user.userInfo.username}</UserText>
            <ImgAvatar
              className="w-[21px] h-[21px]"
              src="https://cdn.divineshop.vn/image/catalog/image_compression/badge-gold-2-50px.png"
            />
            <UserInfoWrapper>
              <Balance>
                <BalanceTitle>Số dư tài khoản</BalanceTitle>
                <BalanceInfo>
                  <BalanceMoney>7.893đ</BalanceMoney>
                  <BalanceIcon>
                    <PlusIcon className="w-[17.5px] h-[17.5px] text-[#2579f2]"></PlusIcon>
                  </BalanceIcon>
                </BalanceInfo>
              </Balance>
              <NavList>
                <NavItem to="/user/profile">Quản lý tài khoản</NavItem>
                <NavItem to="/user/orders">Lịch sử đơn hàng</NavItem>
                <NavItem to="/user/wishlist">Sản phẩm yêu thích</NavItem>
                <NavItem onClick={handleLogout} to="#">Đăng xuất</NavItem>
              </NavList>
            </UserInfoWrapper>
          </UserControlWrapper>
        )}
      </AuthControlWrapper>
      <CartWrapper>
        <CartIcon className="text-white w-[20px] h-[17.5px]"></CartIcon>
        <CartTitle>Giỏ hàng</CartTitle>
        <CartAmount>0</CartAmount>
      </CartWrapper>
    </MainControlWrapper>
  );
};

export default MainControl;
