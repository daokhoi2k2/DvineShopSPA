import { CartIcon, MoreIcon, PersonIcon, SearchIcon } from "designs/icons/Drawer";
import SVG from "designs/SVG";
import React from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  AuthWrapper,
  ButtonSearch,
  CartAmount,
  CartTitle,
  CartWrapper,
  ControlAuthItem,
  ControlAuthWrapper,
  IconAuth,
  IconAuthWrapper,
  InputSearch,
  LogoText,
  LogoWrapper,
  MainControlWrapper,
  SearchWrapper,
  ShowMore,
} from "./styles";
import { setAuthModalBox, toggleNavDrawer } from "redux/actions/config";

const MainControl: React.FC = () => {
  const dispatch = useDispatch();
  
  const handleToggleNavDrawer = () => {
    dispatch(toggleNavDrawer())
  }

  const showLoginRegisterModalBox = () => {
    dispatch(setAuthModalBox({
      isShow: true,
      boxName: "login"
    }))
  }

  const showRegisterModelBox = () => {
    dispatch(setAuthModalBox({
      isShow: true,
      boxName: "register"
    }))
  }

  return (
    <MainControlWrapper>
      <Link to="/" className="lg:hidden">
        <LogoWrapper>
          <SVG name="logo_divine_pure_white" className="w-[49px] h-[49px]"></SVG>
          <LogoText>Divine Shop</LogoText>
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
      <CartWrapper>
        <CartIcon className="text-white w-[20px] h-[17.5px]"></CartIcon>
        <CartTitle>Giỏ hàng</CartTitle>
        <CartAmount>0</CartAmount>
      </CartWrapper>
    </MainControlWrapper>
  );
};

export default MainControl;
