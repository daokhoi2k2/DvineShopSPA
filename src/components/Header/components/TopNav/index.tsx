import { BookIcon, CogIcon, PhoneIcon } from "designs/icons/Drawer";
import React from "react";
import { NavItem, NavText, TopNavWrapper } from "./styles";

const TopNav: React.FC = () => {
  return (
    <TopNavWrapper>
      <NavItem>
        <BookIcon className="w-[17.5px] h-[17.5px] text-white"></BookIcon>
        <NavText>Hướng dẫn mua hàng</NavText>
      </NavItem>
      <NavItem>
        <CogIcon className="w-[17.5px] h-[17.5px] text-white"></CogIcon>
        <NavText>Ưu đãi khách hàng</NavText>
      </NavItem>
      <NavItem>
        <PhoneIcon className="w-[17.5px] h-[17.5px] text-white"></PhoneIcon>
        <NavText>Thông tin liên hệ</NavText>
      </NavItem>
    </TopNavWrapper>
  );
};

export default TopNav;
