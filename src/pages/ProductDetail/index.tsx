import Header from "components/Header";
import React from "react";
import MoreThumbNail from "./components/MoreThumbNail";
import ProductMainInfo from "./components/ProductMainInfo";
import ProductSubInfo from "./components/ProductSubInfo";
import {
  Container,
  ProductDetailInner,
  ProductDetailWrapper,
} from "./styles";

const ProductDetail = () => {
  return (
    <Container>
      <Header></Header>
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
