import Img from "designs/Img";
import React from "react";
import Carousel from "./components/Carousel";
import Category from "./components/Category";
import {
  BannerContent,
  BannerWrapper,
  ListMiniBanner,
  MiniBannerCol,
  MiniBannerItem,
} from "./styles";

const Banner: React.FC = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <Category></Category>
        <Carousel></Carousel>
        <MiniBannerCol>
          <MiniBannerItem>
            <Img name="Adobe1503-71585.png" className="rounded-md w-full"></Img>
          </MiniBannerItem>
          <MiniBannerItem>
            <Img name="Spotify1503-87863.png" className="rounded-md w-full"></Img>
          </MiniBannerItem>
        </MiniBannerCol>
      </BannerContent>
      <ListMiniBanner>
        <MiniBannerItem>
          <Img name="Steam1503-30573.png" className="rounded-md w-full"></Img>
        </MiniBannerItem>
        <MiniBannerItem>
          <Img name="Discord1503-72764.png" className="rounded-md w-full"></Img>
        </MiniBannerItem>
        <MiniBannerItem>
          <Img name="gmail1503-88919.png" className="rounded-md w-full"></Img>
        </MiniBannerItem>
        <MiniBannerItem>
          <Img name="nước hoa1503-97787.png" className="rounded-md w-full"></Img>
        </MiniBannerItem>
      </ListMiniBanner>
    </BannerWrapper>
  );
};

export default Banner;
