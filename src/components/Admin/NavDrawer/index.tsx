import { ClipboardIcon } from "designs/icons/Drawer";
import SVG from "designs/SVG";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import {
  IconRoute,
  LogoText,
  LogoWrapper,
  NavDrawerWrapper,
  RouteItem,
  Routes,
  TitleRoute,
} from "./styles";

const NavDrawer: React.FC = () => {
  const isAdminDrawerNav = useSelector((state: RootState) => state.config.isAdminNavDrawer);

  return (
    <NavDrawerWrapper>
      <LogoWrapper>
        <SVG name="logo_divine_pure_white" className="w-[49px] h-[49px]"></SVG>
        <LogoText>Divine Shop</LogoText>
      </LogoWrapper>
      <Routes>
        <RouteItem>
          <IconRoute>
            <ClipboardIcon />
          </IconRoute>
          <TitleRoute>Tổng quan</TitleRoute>
        </RouteItem>
      </Routes>
    </NavDrawerWrapper>
  );
};

export default NavDrawer;
