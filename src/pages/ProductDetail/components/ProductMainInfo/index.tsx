import { Price, SalePercent } from 'components/ProductCard/styles';
import { BoxIcon, CardIcon, CartIcon, TagIcon } from 'designs/icons/Drawer';
import React from 'react';
import NumberFormat from 'react-number-format';
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
      <Title>Sản phẩm</Title>
      <ProductInfo>
        <Name>{productInfo?.name}</Name>
        <ExtraInformation>
          <BoxIcon className="w-[17.5px] h-[17.5px]" />
          <Text>
            Tình trạng:{' '}
            <StatusText success={productInfo?.status}>
              {productInfo?.status ? 'Còn hàng' : 'Hết hàng'}
            </StatusText>
          </Text>
        </ExtraInformation>
        <ExtraInformation>
          <TagIcon className="w-[17.5px] h-[17.5px]" />
          <Text>Thể loại: {productInfo?.categoryId?.title}</Text>
        </ExtraInformation>
        <PriceInformation>
          {haveSale && (
            <PricePromotion>
              <NumberFormat
                value={productInfo?.price}
                displayType={'text'}
                decimalSeparator=","
                thousandSeparator="."
                suffix={'đ'}
              />
            </PricePromotion>
          )}

          <ReducedPrice>
            <Price haveSale={haveSale}>
              {
                <NumberFormat
                  value={productInfo?.price_promotion}
                  displayType={'text'}
                  decimalSeparator=","
                  thousandSeparator="."
                  suffix={'đ'}
                />
              }
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
    </ProudctMainInfoWrapper>
  );
};

export default ProductMainInfo;
