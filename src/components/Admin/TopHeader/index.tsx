import { MoreIcon, NextArrow } from "designs/icons/Drawer";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleAdminNavDrawer } from "redux/actions/config";
import {
  BreadCumb,
  MainBreadCumb,
  ShowMoreBtn,
  SubBreadCumb,
  TopHeaderWrapper,
  UIControl,
} from "./styles";

interface BreadCumb {
  subBreadCumb: string;
  mainBreadCumb: string;
}

const TopHeader: React.FC<BreadCumb> = ({subBreadCumb, mainBreadCumb}) => {
  const dispatch = useDispatch();

  const handleToggleAdminDrawer = () => {
    dispatch(toggleAdminNavDrawer())
  }
  return (
    <TopHeaderWrapper>
      <UIControl>
        <ShowMoreBtn onClick={handleToggleAdminDrawer}>
          <MoreIcon className="w-[20px] h-[20px]" />
        </ShowMoreBtn>
        <BreadCumb>
          <SubBreadCumb>{subBreadCumb}</SubBreadCumb>
            <NextArrow className="h-[20px] w-[20px] scale-50 opacity-50" />
          <MainBreadCumb>{mainBreadCumb}</MainBreadCumb>
        </BreadCumb>
      </UIControl>
    </TopHeaderWrapper>
  );
};

export default TopHeader;
