import { CartIcon, MoreIcon, PersonIcon, SearchIcon } from "designs/icons/Drawer";
import SVG from "designs/SVG";
import React from "react";
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
  LogoWrappep,
  MainControlWrapper,
  SearchWrapper,
  ShowMore,
} from "./styles";

const MainControl: React.FC = () => {
  return (
    <MainControlWrapper>
      <LogoWrappep>
        <SVG name="logo_divine_pure_white" className="w-[49px] h-[49px]"></SVG>
        <LogoText>Divine Shop</LogoText>
      </LogoWrappep>
      {/* Show when screen is tablet or mobile */}
      <ShowMore>
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
        <IconAuthWrapper>
          <IconAuth>
            <PersonIcon className="w-[18.5px] h-[18.5px] text-white" />
          </IconAuth>
        </IconAuthWrapper>
        <ControlAuthWrapper>
          <ControlAuthItem>Đăng nhập</ControlAuthItem>
          <ControlAuthItem>/</ControlAuthItem>
          <ControlAuthItem>Đăng ký</ControlAuthItem>
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
