import ProductCard from "components/ProductCard";
import React from "react";
import { ProductListWrapper } from "./styles";

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
    <ProductListWrapper>
      {data.map((item) => (
        <ProductCard
          key={item.name}
          name={item.name}
          price={item.price}
          sale_percent={1}
          thumb_nail={item.thumb_nail}
          price_promotion={item?.price_promotion}
          name_url={item.name_url}
        />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
