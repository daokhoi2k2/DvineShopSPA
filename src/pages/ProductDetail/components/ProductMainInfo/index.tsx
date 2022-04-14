import { Price, SalePercent } from 'components/ProductCard/styles';
import { BoxIcon, CardIcon, CartIcon, TagIcon } from 'designs/icons/Drawer';
import React from 'react';
import NumberFormat from 'react-number-format';
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
  name: string;
  status: boolean;
  categoryId: any;
  price: number;
  price_promotion?: number;
}

const ProductMainInfo: React.FC<IProductMainInfo> = (props) => {
  const { name, status, categoryId, price, price_promotion } = props;

  const haveSale = price_promotion && price_promotion !== price && true;

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

  return (
    <ProudctMainInfoWrapper>
      <Title>Sản phẩm</Title>
      <ProductInfo>
        <Name>{name}</Name>
        <ExtraInformation>
          <BoxIcon className="w-[17.5px] h-[17.5px]" />
          <Text>
            Tình trạng: <StatusText success>Còn hàng</StatusText>
          </Text>
        </ExtraInformation>
        <ExtraInformation>
          <TagIcon className="w-[17.5px] h-[17.5px]" />
          <Text>Thể loại: {categoryId?.title}</Text>
        </ExtraInformation>
        <PriceInformation>
          {haveSale && (
            <PricePromotion>
              <NumberFormat
                value={price}
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
                  value={price_promotion}
                  displayType={'text'}
                  decimalSeparator=","
                  thousandSeparator="."
                  suffix={'đ'}
                />
              }
            </Price>
            {haveSale && (
              <SalePercent>
                -{handleSalePercent(price_promotion, price)}%
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
          <Button>
            <CartIcon className="w-[17.5px] h-[17.5px]" />
            <TextButton>Thêm vào giỏ</TextButton>
          </Button>
        </BuyControl>
      </ProductInfo>
    </ProudctMainInfoWrapper>
  );
};

export default ProductMainInfo;
