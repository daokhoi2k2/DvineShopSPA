import VND from 'components/VND';
import Img from 'designs/Img';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

import {
  CardImg,
  CardInfo,
  Name,
  Price,
  PricePromotion,
  PriceWrapper,
  ProductCardWrapper,
  SalePercent,
} from './styles';

interface IProductInfo {
  name: string;
  price_promotion?: number;
  price: number;
  sale_percent: number;
  thumb_nail: string;
  name_url: string;
}

const ProductCard: React.FC<IProductInfo> = (props) => {
  const { thumb_nail, name, price, price_promotion, name_url } = props;
  const haveSale = price_promotion && price !== price_promotion && true;

  const handleSalePercent = (
    promotional_price: number | undefined,
    price: number
  ) => {
    if (promotional_price) {
      const result = (1 - promotional_price / price) * 100;
      return Math.floor(result);
    }
    return 0;
  };

  return (
    <ProductCardWrapper>
      <Link to={'/' + name_url}>
        <LazyLoad>
          <CardImg>
            <img
              src={`${process.env.REACT_APP_API_URL}/${thumb_nail}`}
              alt={name}
              className="rounded-md"
            />
          </CardImg>
        </LazyLoad>
        <CardInfo>
          <Name>{name}</Name>
          <PriceWrapper>
            {haveSale && (
              <PricePromotion>{<VND value={price_promotion} />}</PricePromotion>
            )}
            <Price haveSale={haveSale}>{<VND value={price} />}</Price>
            {haveSale && (
              <SalePercent>
                -{handleSalePercent(price_promotion, price)}%
              </SalePercent>
            )}
          </PriceWrapper>
        </CardInfo>
      </Link>
    </ProductCardWrapper>
  );
};

export default ProductCard;
