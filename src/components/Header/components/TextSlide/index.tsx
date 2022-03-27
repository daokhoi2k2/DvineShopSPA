import { NextArrow, PrevArrow } from "designs/icons/Drawer";
import React from "react";
import { TextItem, TextList, TextSlideWrapper } from "./styles";

const TextSlide: React.FC = () => {
  return (
    <TextSlideWrapper>
      <PrevArrow
        className="w-[14px] h-[14px] text-white opacity-70 hover:opacity-100 cursor-pointer"
        strokeWidth="1"
        stroke="white"
      ></PrevArrow>
      <NextArrow
        className="w-[14px] h-[14px] text-white opacity-70 hover:opacity-100 cursor-pointer"
        strokeWidth="1"
        stroke="white"
      ></NextArrow>
      <TextList>
        <TextItem>Chia sẻ tài khoản Netflix và nhận doanh thu</TextItem>
      </TextList>
    </TextSlideWrapper>
  );
};

export default TextSlide;
