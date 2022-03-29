import { MoreIcon } from "designs/icons/Drawer";
import React from "react";
import MainControl from "./components/MainControl";
import SubControl from "./components/SubControl";
import TextSlide from "./components/TextSlide";
import TopNav from "./components/TopNav";
import Utilities from "./components/Utilities";
import NavDrawer from "components/NavDrawer";

import {
  Content,
  HeaderContent,
  MainHeader,
  Nav,
  NavButton,
  NavContent,
  NavPrimary,
  NavText,
  TopHeader,
} from "./styles";
import AuthModalBox from "components/AuthModalBox";

const Header: React.FC = () => {
  return (
    <>
      <TopHeader>
        <Content>
          <TextSlide></TextSlide>
          <TopNav></TopNav>
        </Content>
      </TopHeader>
      <MainHeader>
        <HeaderContent>
          <MainControl></MainControl>
          <SubControl></SubControl>
        </HeaderContent>
      </MainHeader>
      <Nav>
        <NavContent>
          <NavPrimary>
            <NavButton>
              <MoreIcon className="w-4 h-4"></MoreIcon>
            </NavButton>
            <NavText>
              Danh mục sản phẩm
            </NavText>
          </NavPrimary>
          <Utilities>
            
          </Utilities>
        </NavContent>
      </Nav>
      <NavDrawer></NavDrawer>
      <AuthModalBox></AuthModalBox>
    </>
  );
};

export default Header;
