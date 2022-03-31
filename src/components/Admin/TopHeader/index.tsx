import { MoreIcon, NextArrow } from "designs/icons/Drawer";
import React from "react";
import {
  BreadCumb,
  MainBreadCumb,
  ShowMoreBtn,
  SubBreadCumb,
  TopHeaderWrapper,
  UIControl,
} from "./styles";

const TopHeader: React.FC = () => {
  return (
    <TopHeaderWrapper>
      <UIControl>
        <ShowMoreBtn>
          <MoreIcon className="w-[20px] h-[20px]" />
        </ShowMoreBtn>
        <BreadCumb>
          <SubBreadCumb>Bảng điều khiển</SubBreadCumb>
            <NextArrow className="h-[20px] w-[20px] scale-50 opacity-50" />
          <MainBreadCumb>Tổng quan</MainBreadCumb>
        </BreadCumb>
      </UIControl>
    </TopHeaderWrapper>
  );
};

export default TopHeader;
