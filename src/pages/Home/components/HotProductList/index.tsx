import ProductList from 'components/ProductList';
import TitleList from 'components/TitleList';
import {
  ButtonAnimate,
  ProductInner,
  ProductListWrapper,
} from 'pages/Home/styles';
import React, { useEffect, useState } from 'react';
import { getProductsListServices } from 'services/product';

const HotProductList: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [isMore, setIsMore] = useState(true);

  useEffect(() => {
    (async () => {
      if (!products.length) {
        const productList = await getProductsListServices({
          slug: 'featured',
          page: 1,
        });

        setProducts(productList?.data?.list);
      }
    })();
  }, []);

  const showMoreFeatured = async () => {
    const productList = await getProductsListServices({
      slug: 'featured',
      page: (products.length + 8) / 8,
    });

    if (productList?.data?.isMore === false) {
      setIsMore(false);
    }

    const newProducts = [...products, ...productList?.data?.list];
    setProducts(newProducts as any);
  };

  return (
    <ProductListWrapper>
      <ProductInner>
        <TitleList
          title="Sản phẩm nổi bật"
          discover
          subTitle="Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích"
        />
        <ProductList
          data={products}
        ></ProductList>
        {isMore ? (
          <ButtonAnimate>
            <div
              onClick={showMoreFeatured}
              className="active:scale-[0.97] cursor-pointer"
            >
              Xem thêm
            </div>
          </ButtonAnimate>
        ) : (
          ''
        )}
      </ProductInner>
    </ProductListWrapper>
  );
};

export default HotProductList;
