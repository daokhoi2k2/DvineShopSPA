import { ClipboardIcon, ProductIcon } from "designs/icons/Drawer";
import SVG from "designs/SVG";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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
  const path = useLocation();

  const RouteList = [
    {
      icon: <ClipboardIcon />,
      title: "Tổng quan",
      path: "/admin",
    },
    {
      icon: <ProductIcon />,
      title: "Sản phẩm",
      path: "/admin/product",
    },
  ];

  return (
    <NavDrawerWrapper isAdminDrawerNav={isAdminDrawerNav}>
      <LogoWrapper isAdminDrawerNav={isAdminDrawerNav}>
        <SVG name="logo_divine_pure_white" className="w-[49px] h-[49px]"></SVG>
        <LogoText>Divine Shop</LogoText>
      </LogoWrapper>
      <Routes>
        {RouteList.map((route) => (
          <RouteItem key={route.path} to={route.path} active={route.path === path.pathname ? "true" : "false"}>
            <IconRoute>
              {route.icon}
            </IconRoute>
            <TitleRoute isAdminDrawerNav={isAdminDrawerNav}>{route.title}</TitleRoute>
          </RouteItem>
        ))}
      </Routes>
    </NavDrawerWrapper>
  );
};

export default NavDrawer;
