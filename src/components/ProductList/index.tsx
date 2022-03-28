import ProductCard from "components/ProductCard";
import React from "react";
import { ProductListWrapper } from "./styles";

interface IProductInfo {
  name: string;
  promotional_price?: number;
  price: number;
  thumb_nail: string;
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
          promotional_price={item.promotional_price}
        />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
