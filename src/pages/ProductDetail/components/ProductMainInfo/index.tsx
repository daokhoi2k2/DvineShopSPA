import { Price, SalePercent } from "components/ProductCard/styles";
import { BoxIcon, CardIcon, CartIcon, TagIcon } from "designs/icons/Drawer";
import React from "react";
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
} from "./styles";

const ProductMainInfo: React.FC = () => {
  return (
    <ProudctMainInfoWrapper>
      <Title>Sản phẩm</Title>
      <ProductInfo>
        <Name>Tài khoản Netflix Premium for 1 User (1 Tháng)</Name>
        <ExtraInformation>
          <BoxIcon className="w-[17.5px] h-[17.5px]" />
          <Text>
            Tình trạng: <StatusText success>Còn hàng</StatusText>
          </Text>
        </ExtraInformation>
        <ExtraInformation>
          <TagIcon className="w-[17.5px] h-[17.5px]" />
          <Text>Thể loại: App, Giải trí, Xem phim</Text>
        </ExtraInformation>
        <PriceInformation>
          <PricePromotion>79.000đ</PricePromotion>
          <ReducedPrice>
            <Price haveSale>260.000đ</Price>
            <SalePercent>-70%</SalePercent>
          </ReducedPrice>
          {/* {haveSale && <SalePercent>-{handleSalePercent(promotional_price, price)}%</SalePercent>} */}
        </PriceInformation>
        <Hr />
        <VariantsSelect>
            <VariantsTitle>Thời hạn sử dụng</VariantsTitle>
            <VariantsList>
                <VariantItem selected>1 Tháng</VariantItem>
                <VariantItem>3 Tháng</VariantItem>
                <VariantItem>6 Tháng</VariantItem>
                <VariantItem>1 Ngày</VariantItem>
                <VariantItem>1 Tuần</VariantItem>
            </VariantsList>
        </VariantsSelect>
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
