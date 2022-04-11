import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, HotProductInner, HotProductWrapper } from "./styles";
import Header from "components/Header";
import Banner from "components/Banner";
import TitleList from "components/TitleList";
import ProductList from "components/ProductList";
import Footer from "components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { getAllProducts } from "redux/actions/product";

const Home = () => {
  const allProducts = useSelector((state: RootState) => state.product.allProducts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!allProducts.length) {
      dispatch(getAllProducts());
    }
  })

  return (
    <Container>
      <Banner>
      </Banner>
      <HotProductWrapper>
          <HotProductInner>
            <TitleList title="Sản phẩm nổi bật" discover subTitle="Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích" />
            <ProductList data={allProducts}>
              
            </ProductList>
          </HotProductInner>
      </HotProductWrapper>
      <Footer>

      </Footer>
    </Container>
  );
};

export default Home;
