import ProductList from 'components/ProductList';
import TitleList from 'components/TitleList';
import {
  ButtonAnimate,
  ProductInner,
  ProductListWrapper,
} from 'pages/Home/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFeatured } from 'redux/actions/product';
import { RootState } from 'redux/reducers';
import { getProductsListServices } from 'services/product';

const HotProductList: React.FC = () => {
  const { data: products, isMore, loading } = useSelector(
    (state: RootState) => state.product.productsFeatured
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(
        getProductsFeatured({
          slug: 'featured',
          page: 1,
        })
      );
    }
  }, []);

  const showMoreFeatured = async () => {
    dispatch(
      getProductsFeatured({
        slug: 'featured',
        page: (products.length + 8) / 8,
      })
    );
  };

  return (
    <ProductListWrapper>
      <ProductInner>
        <TitleList
          title="Sản phẩm nổi bật"
          discover
          subTitle="Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích"
        />
        <ProductList data={products} loading={loading}></ProductList>
        {isMore ? (
          <ButtonAnimate>
            <div
              onClick={showMoreFeatured}
              className="active:scale-[0.97] cursor-pointer whitespace-nowrap"
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
