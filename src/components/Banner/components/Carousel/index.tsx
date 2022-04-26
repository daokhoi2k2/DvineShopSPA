import { NextArrow, PrevArrow } from "designs/icons/Drawer";
import Img from "designs/Img";
import React from "react";
import Slider from "react-slick";
import { CarouselWrapper, SliderItem, NextArrowWrapper, NextArrowIcon, PrevArrowWrapper, PrevArrowIcon } from "./styles";

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // arrows: false
    nextArrow: (<NextArrowWrapper>
        <NextArrowIcon>
            <NextArrow className="text-white w-5 h-5" />
        </NextArrowIcon>
    </NextArrowWrapper>),

    prevArrow: (<PrevArrowWrapper>
        <PrevArrowIcon>
            <PrevArrow className="text-white w-5 h-5" />
        </PrevArrowIcon>
    </PrevArrowWrapper>),
    dotsClass: "slick-dots slickCustom"
  };
  return (
    <CarouselWrapper>
      <Slider {...settings} className="group SliderWrapper">
        <SliderItem>
            <Img name="netflix-49596.png" className="rounded-md w-full h-full" />
        </SliderItem>
        <SliderItem>
            <Img name="học tập phát triển-95166.png" className="rounded-md w-full h-full" />
        </SliderItem>
        <SliderItem>
            <Img name="thử thách 10 phút-40175.png" className="rounded-md w-full h-full" />
        </SliderItem>
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
