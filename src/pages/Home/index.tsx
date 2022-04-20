import React, { Suspense, useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, HotProductInner, HotProductWrapper } from './styles';
import Banner from 'components/Banner';
import TitleList from 'components/TitleList';
import ProductList from 'components/ProductList';
import { getProductsListServices } from 'services/product';

const Home = () => {
  // const allProducts = useSelector((state: RootState) => state.product.allProducts);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      if (!products.length) {
        const productList = await getProductsListServices({
          limit: 8,
          page: 1,
        });

        setProducts(productList?.data);
      }
    })();
  }, []);
  return (
    <Container>
      <Banner></Banner>
      <HotProductWrapper>
        <HotProductInner>
          <TitleList
            title="Sản phẩm nổi bật"
            discover
            subTitle="Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích"
          />
          <ProductList data={products}></ProductList>
        </HotProductInner>
      </HotProductWrapper>
    </Container>
  );
};

export default Home;
