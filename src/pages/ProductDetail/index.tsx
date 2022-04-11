import Header from "components/Header";
import React from "react";
import { useParams } from "react-router-dom";
import MoreThumbNail from "./components/MoreThumbNail";
import ProductMainInfo from "./components/ProductMainInfo";
import ProductSubInfo from "./components/ProductSubInfo";
import {
  Container,
  ProductDetailInner,
  ProductDetailWrapper,
} from "./styles";

const ProductDetail = () => {
  const { hash_name } = useParams();
  console.log(hash_name)
  return (
    <Container>
      <ProductDetailWrapper>
        <ProductDetailInner>
          <MoreThumbNail></MoreThumbNail>
          <ProductMainInfo></ProductMainInfo>
          <ProductSubInfo></ProductSubInfo>
        </ProductDetailInner>
      </ProductDetailWrapper>
    </Container>
  );
};

export default ProductDetail;
