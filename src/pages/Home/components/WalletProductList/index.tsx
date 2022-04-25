import ProductList from 'components/ProductList';
import TitleList from 'components/TitleList';
import {
  ButtonAnimate,
  ProductInner,
  ProductListWrapper,
} from 'pages/Home/styles';
import React, { memo, useEffect, useState } from 'react';
import { getProductsListServices } from 'services/product';

const WalletProductList = () => {
  const [products, setProducts] = useState([]);
  const [isMore, setIsMore] = useState(true);

  useEffect(() => {
    (async () => {
      if (!products.length) {
        const productList = await getProductsListServices({
          slug: 'wallet',
          page: 1,
        });

        if (productList?.data?.isMore === false) {
          setIsMore(false);
        }

        setProducts(productList?.data?.list);
      }
    })();
  }, []);

  const showMoreWallet = async () => {
    const productList = await getProductsListServices({
      slug: 'wallet',
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
        <TitleList title="Code Wallet" discover />
        <ProductList data={products}></ProductList>
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
