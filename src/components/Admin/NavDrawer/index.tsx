import { PATH_ADMIN } from 'common/routes';
import { ArrowIcon, ClipboardIcon, ProductIcon, TagIcon } from 'designs/icons/Drawer';
import SVG from 'designs/SVG';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useMatch, useResolvedPath } from 'react-router-dom';
import { RootState } from 'redux/reducers';
import RouteItem from './RouteItem';
import {
  LogoText,
  LogoWrapper,
  NavDrawerWrapper,
  Routes,
} from './styles';

const NavDrawer: React.FC = () => {
  const isAdminDrawerNav = useSelector(
    (state: RootState) => state.config.isAdminNavDrawer
  );

  return (
    <NavDrawerWrapper isAdminDrawerNav={isAdminDrawerNav}>
      <LogoWrapper isAdminDrawerNav={isAdminDrawerNav}>
        <SVG name="logo_divine_pure_white" className="w-[49px] h-[49px]"></SVG>
        <LogoText>Divine Shop</LogoText>
      </LogoWrapper>
      <Routes>
        {PATH_ADMIN.map((route) => {
          return (
            <RouteItem route={route} key={route.path}>
              
            </RouteItem>
          );
        })}
      </Routes>
    </NavDrawerWrapper>
  );
};

export default NavDrawer;
