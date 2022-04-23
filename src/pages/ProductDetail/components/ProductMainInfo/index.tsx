import { Price, SalePercent } from 'components/ProductCard/styles';
import VND from 'components/VND';
import { BoxIcon, CardIcon, CartIcon, TagIcon } from 'designs/icons/Drawer';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addCartItem } from 'redux/actions/cart';
import { RootState } from 'redux/reducers';
import { IProductInfo } from 'typings/Product';
import {
  Button,
  BuyControl,
  ExtraInformation,
  Hr,
  Name,
  PriceInformation,
  PricePromotion,
  ProductInfo,
  ProudctMainInfoWrapper,
  ReducedPrice,
  StatusText,
  Text,
  TextButton,
  Title,
  VariantItem,
  VariantsList,
  VariantsSelect,
  VariantsTitle,
} from './styles';

interface IProductMainInfo {
  productInfo: IProductInfo;
}

const ProductMainInfoLoading: React.FC = () => {
  return (
    <>
      <Title>
        <Skeleton />
      </Title>
      <ProductInfo>
        <Name>
          <Skeleton />
        </Name>
        <ExtraInformation>
          <Skeleton />
        </ExtraInformation>
        <ExtraInformation>
          <Skeleton />
        </ExtraInformation>
        <PriceInformation>
          <PricePromotion>
            <Skeleton />
          </PricePromotion>
        </PriceInformation>
        <Hr />
        <BuyControl>
          <Button primary>
            <CardIcon className="w-[17.5px] h-[17.5px]" />
            <TextButton>Mua ngay</TextButton>
          </Button>
          <Button>
            <CartIcon className="w-[17.5px] h-[17.5px]" />
            <TextButton>Thêm vào giỏ</TextButton>
          </Button>
        </BuyControl>
      </ProductInfo>
    </>
  );
};

const ProductMainInfo: React.FC<IProductMainInfo> = ({ productInfo }) => {
  // const cart = useSelector((state: RootState) => state.cart.cartList);
  const dispatch = useDispatch();

  const haveSale =
    productInfo?.price_promotion &&
    productInfo?.price_promotion !== productInfo?.price &&
    true;

  const handleSalePercent = (
    price_promotion: number | undefined,
    price: number
  ) => {
    if (price_promotion) {
      const result = (1 - price_promotion / price) * 100;
      return Math.floor(result);
    }
    return 0;
  };

  const handleAddCardItem = () => {
    const fakeLoading = new Promise((resolve) => {
      setTimeout(() => {
        dispatch(
          addCartItem({
            _id: productInfo?._id,
            quantity: 1,
            productInfo: productInfo,
          })
        );
        resolve(1);
      }, 1000);
    });

    toast.promise(fakeLoading, {
      pending: 'Thêm sản phẩm vào giỏ hàng',
      success: 'Sản phẩm đã được thêm vào giỏ hàng',
      error: 'Thêm sản phẩm vào giỏ hàng thất bại',
    });
  };

  return (
    <ProudctMainInfoWrapper>
      {Object.keys(productInfo || {})?.length !== 0 ? (
        <>
          <Title>Sản phẩm</Title>
          <ProductInfo>
            <Name>{productInfo?.name ? productInfo.name : <Skeleton />}</Name>
            <ExtraInformation>
              <BoxIcon className="w-[17.5px] h-[17.5px] inline-block" />
              <Text>
                Tình trạng:
                <StatusText success={productInfo?.status}>
                  {productInfo?.status ? 'Còn hàng' : 'Hết hàng'}
                </StatusText>
              </Text>
            </ExtraInformation>
            <ExtraInformation>
              <TagIcon className="w-[17.5px] h-[17.5px] inline-block" />
              <Text>Thể loại: {productInfo?.categoryId?.title}</Text>
            </ExtraInformation>
            <PriceInformation>
              {haveSale && (
                <PricePromotion>
                  <VND value={productInfo?.price_promotion} />
                </PricePromotion>
              )}

              <ReducedPrice>
                <Price haveSale={haveSale}>
                  {<VND value={productInfo?.price} />}
                </Price>
                {haveSale && (
                  <SalePercent>
                    -
                    {handleSalePercent(
                      productInfo?.price_promotion,
                      productInfo?.price
                    )}
                    %
                  </SalePercent>
                )}
              </ReducedPrice>
              {/* {haveSale && <SalePercent>-{handleSalePercent(promotional_price, price)}%</SalePercent>} */}
            </PriceInformation>
            <Hr />
            {/* <VariantsSelect>
          <VariantsTitle>Thời hạn sử dụng</VariantsTitle>
          <VariantsList>
            <VariantItem selected>1 Tháng</VariantItem>
            <VariantItem>3 Tháng</VariantItem>
            <VariantItem>6 Tháng</VariantItem>
            <VariantItem>1 Ngày</VariantItem>
            <VariantItem>1 Tuần</VariantItem>
          </VariantsList>
        </VariantsSelect> */}
            <BuyControl>
              <Button primary>
                <CardIcon className="w-[17.5px] h-[17.5px]" />
                <TextButton>Mua ngay</TextButton>
              </Button>
              <Button onClick={handleAddCardItem}>
                <CartIcon className="w-[17.5px] h-[17.5px]" />
                <TextButton>Thêm vào giỏ</TextButton>
              </Button>
            </BuyControl>
          </ProductInfo>
        </>
      ) : (
        <ProductMainInfoLoading />
      )}
    </ProudctMainInfoWrapper>
  );
};

export default ProductMainInfo;
