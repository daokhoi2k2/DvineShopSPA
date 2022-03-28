import Img from "designs/Img";
import React from "react";
import LazyLoad from "react-lazyload";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

import {
  CardImg,
  CardInfo,
  Name,
  Price,
  PricePromotion,
  PriceWrapper,
  ProductCardWrapper,
  SalePercent,
} from "./styles";

interface IProductInfo {
  name: string;
  promotional_price?: number;
  price: number;
  sale_percent: number;
  thumb_nail: string;
}

const ProductCard: React.FC<IProductInfo> = (props) => {
  const { thumb_nail, name, price, promotional_price } = props;
  const haveSale = promotional_price && true;

  const handleSalePercent = (promotional_price: number | undefined, price: number) => {
    if (promotional_price) {
      const result = (1 - promotional_price / price) * 100;
      return Math.floor(result);
    }
    return 0;
  };

  return (
    <ProductCardWrapper>
      <Link to="tai-khoan-netflix">
        <LazyLoad>
          <CardImg>
            <img src={thumb_nail} alt={name} className="rounded-md" />
          </CardImg>
        </LazyLoad>
        <CardInfo>
          <Name>{name}</Name>
          <PriceWrapper>
            <PricePromotion>
              {
                <NumberFormat
                  value={promotional_price}
                  displayType={"text"}
                  decimalSeparator=","
                  thousandSeparator="."
                  suffix={"đ"}
                />
              }
            </PricePromotion>
            <Price haveSale={haveSale}>
              {
                <NumberFormat
                  value={price}
                  displayType={"text"}
                  decimalSeparator=","
                  thousandSeparator="."
                  suffix={"đ"}
                />
              }
            </Price>
            {haveSale && <SalePercent>-{handleSalePercent(promotional_price, price)}%</SalePercent>}
          </PriceWrapper>
        </CardInfo>
      </Link>
    </ProductCardWrapper>
  );
};

export default ProductCard;
