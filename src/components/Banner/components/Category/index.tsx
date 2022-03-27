import {
  GameIcon,
  GooglePlayIcon,
  OriginIcon,
  PubgIcon,
  SignalIcon,
  SteamIcon,
  SteamWalletIcon,
  StudyIcon,
  WorkIcon,
  XboxIcon,
} from "designs/icons/Drawer";
import React from "react";
import { CategoryItem, CategoryList, CategoryWrapper, CateIco, CateText } from "./style";

const Category: React.FC = () => {
  return (
    <CategoryWrapper>
      <CategoryList>
        <CategoryItem>
          <CateIco>
            <GameIcon className="w-[21px] h-[17.5px]"></GameIcon>
          </CateIco>
          <CateText>Giải trí</CateText>
        </CategoryItem>
        <CategoryItem>
          <CateIco>
            <WorkIcon className="w-[21px] h-[17.5px]"></WorkIcon>
          </CateIco>
          <CateText>Làm việc</CateText>
        </CategoryItem>
        <CategoryItem>
          <CateIco>
            <StudyIcon className="w-[21px] h-[17.5px]"></StudyIcon>
          </CateIco>
          <CateText>Học tập</CateText>
        </CategoryItem>
        <CategoryItem>
          <CateIco>
            <SteamIcon className="w-[21px] h-[17.5px]"></SteamIcon>
          </CateIco>
          <CateText>Game Steam</CateText>
        </CategoryItem>
        <CategoryItem>
          <CateIco>
            <OriginIcon className="w-[21px] h-[17.5px]"></OriginIcon>
          </CateIco>
          <CateText>Game Origin</CateText>
        </CategoryItem>
        <CategoryItem>
          <CateIco>
            <PubgIcon className="w-[21px] h-[17.5px]"></PubgIcon>
          </CateIco>
          <CateText>PUBG</CateText>
        </CategoryItem>
        <CategoryItem>
          <CateIco>
            <SteamWalletIcon className="w-[21px] h-[17.5px]"></SteamWalletIcon>
          </CateIco>
          <CateText>Steam Wallet</CateText>
        </CategoryItem>
        <CategoryItem>
          <CateIco>
            <SignalIcon className="w-[21px] h-[17.5px]"></SignalIcon>
          </CateIco>
          <CateText>Gói Data Mobile</CateText>
        </CategoryItem>
        <CategoryItem>
          <CateIco>
            <GooglePlayIcon className="w-[21px] h-[17.5px]"></GooglePlayIcon>
          </CateIco>
          <CateText>Google Play, iTunes</CateText>
        </CategoryItem>
        <CategoryItem>
          <CateIco>
            <XboxIcon className="w-[21px] h-[17.5px]"></XboxIcon>
          </CateIco>
          <CateText>Xbox Gift Card</CateText>
        </CategoryItem>
      </CategoryList>
    </CategoryWrapper>
  );
};

export default Category;
