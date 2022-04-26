import ProductList from 'components/ProductList';
import TitleList from 'components/TitleList';
import {
  ButtonAnimate,
  ProductInner,
  ProductListWrapper,
} from 'pages/Home/styles';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsWallet } from 'redux/actions/product';
import { RootState } from 'redux/reducers';

const WalletProductList = () => {
  const { data: products, isMore, loading } = useSelector(
    (state: RootState) => state.product.productsWallet
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if(products.length === 0) {
      dispatch(getProductsWallet({
        slug: 'wallet',
        page: 1,
      }))
    }
  }, []);

  const showMoreWallet = () => {
    dispatch(getProductsWallet({
      slug: 'wallet',
      page: (products.length + 8) / 8
    }))
  };

  return (
    <ProductListWrapper>
      <ProductInner>
        <TitleList title="Code Wallet" discover />
        <ProductList loading={loading} data={products}></ProductList>
        {isMore ? (
          <ButtonAnimate>
            <div
              onClick={showMoreWallet}
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

export default memo(WalletProductList);
