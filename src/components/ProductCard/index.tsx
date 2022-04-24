import VND from 'components/VND';
import Img from 'designs/Img';
import ImgFallBack from 'designs/ImgFallback';
import React from 'react';
import LazyLoad from 'react-lazyload';
import Skeleton from 'react-loading-skeleton';
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
  status: boolean;
}

const ProductCardLoading: React.FC = () => {
  return (
    <ProductCardWrapper>
      <div className="block">
        <CardImg>
          <LazyLoad className="relative pt-[50%]">
            <Skeleton className="rounded-md absolute w-full h-full top-0" />
          </LazyLoad>
        </CardImg>
        <CardInfo>
          <Name>
            <Skeleton count={2} />
          </Name>
        </CardInfo>
      </div>
    </ProductCardWrapper>
  );
};

const ProductCard: React.FC<IProductInfo> = (props) => {
  const { thumb_nail, name, price, price_promotion, name_url, status } = props;
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
      <Link className="block" to={'/' + name_url}>
        <CardImg status={!status}>
          <LazyLoad once>
            <ImgFallBack
              src={`${process.env.REACT_APP_API_URL}/images/thumb_nails/${thumb_nail}`}
              alt={name}
              className={!status ? "opacity-50" : ""}
            />
            {
              !status && <div className='absolute top-3 left-3 text-white bg-black rounded-md px-3 py-1 text-sm'>Hết hàng</div>
            }
          </LazyLoad>
        </CardImg>
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

export default {
  Success: ProductCard,
  Loading: ProductCardLoading,
};
