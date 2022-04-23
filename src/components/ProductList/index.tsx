import ProductCard from 'components/ProductCard';
import React, { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import { ProductListWrapper } from './styles';

interface IProductInfo {
  name: string;
  price_promotion?: number;
  price: number;
  thumb_nail: string;
  name_url: string;
  // sale_percent: number;
}

interface IProductList {
  data: IProductInfo[];
}

const ProductList: React.FC<IProductList> = ({ data }) => {
  return (
    <ProductListWrapper className={data.length === 0 ? 'min-h-[460px]' : ''}>
      {
        data.length !== 0 ? data.map((item) => (
          <ProductCard.Success
            key={item.name}
            name={item.name}
            price={item.price}
            sale_percent={1}
            thumb_nail={item.thumb_nail}
            price_promotion={item?.price_promotion}
            name_url={item.name_url}
          />
        )) : Array(8).fill(0).map((item, index) => <ProductCard.Loading key={index} />)
      }
    </ProductListWrapper>
  );
};

export default ProductList;
