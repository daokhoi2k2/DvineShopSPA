import Img from 'designs/Img';
import ImgFallBack from 'designs/ImgFallback';
import React from 'react';
import Carousel from './components/Carousel';
import Category from './components/Category';
import {
  BannerContent,
  BannerWrapper,
  ImgHref,
  ListMiniBanner,
  MiniBannerCol,
  MiniBannerItem,
} from './styles';

const Banner: React.FC = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <Category></Category>
        <Carousel></Carousel>
        <MiniBannerCol>
          <MiniBannerItem>
            <ImgHref to="/">
              <ImgFallBack
                src="Adobe1503-71585.png"
                alt="Adobe1503"
                isStaticImg={true}
              ></ImgFallBack>
            </ImgHref>
          </MiniBannerItem>
          <MiniBannerItem>
            <ImgHref to="/">
              <ImgFallBack
                src="Spotify1503-87863.png"
                alt="Spotify1503"
                isStaticImg={true}
              ></ImgFallBack>
            </ImgHref>
          </MiniBannerItem>
        </MiniBannerCol>
      </BannerContent>
      <ListMiniBanner>
        <MiniBannerItem>
          <ImgHref to="/">
            <ImgFallBack
              src="Steam1503-30573.png"
              alt="Steam1503"
              isStaticImg={true}
            ></ImgFallBack>
          </ImgHref>
        </MiniBannerItem>
        <MiniBannerItem>
          <ImgHref to="/">
            <ImgFallBack
              src="Discord1503-72764.png"
              alt="Discord1503"
              isStaticImg={true}
            ></ImgFallBack>
          </ImgHref>
        </MiniBannerItem>
        <MiniBannerItem>
          <ImgHref to="/">
            <ImgFallBack
              src="gmail1503-88919.png"
              alt="gmail1503"
              isStaticImg={true}
            ></ImgFallBack>
          </ImgHref>
        </MiniBannerItem>
        <MiniBannerItem>
          <ImgHref to="/">
            <ImgFallBack
              src="nước hoa1503-97787.png"
              alt="nước hoa1503"
              isStaticImg={true}
            ></ImgFallBack>
          </ImgHref>
        </MiniBannerItem>
      </ListMiniBanner>
    </BannerWrapper>
  );
};

export default Banner;
