import { SalePercent } from 'components/ProductCard/styles';
import { BoxIcon, TrashIcon } from 'designs/icons/Drawer';
import React from 'react';
import NumberFormat from 'react-number-format';
import {
  AmountInput,
  CartEmpty,
  CartEmptyImg,
  CartEmptySubTitle,
  CartEmptyTitle,
  CartItem,
  CartItemInfo,
  CartItemThumbNail,
  CartItemThumbNailWrapper,
  CartListWrapper,
  CartTable,
  CartTableTitle,
  CartTableWrapper,
  ChangeAmountBtn,
  Hr,
  MainInfo,
  ProductAmount,
  ProductInfo,
  ProductInfoStatus,
  ProductPrice,
  ProductStatus,
  SubInfo,
} from './styles';
import cartEmptyImg from '../../../../assets/images/cartEmpty.svg';

const CartList = () => {
  return (
    <CartListWrapper>
      {/* <CartEmpty>
        <CartEmptyTitle>Giỏ hàng trống!</CartEmptyTitle>
        <CartEmptySubTitle>
          Thêm sản phẩm vào giỏ và quay lại trang này để thanh toán nha bạn{' '}
          {'<3'}
        </CartEmptySubTitle>
        <CartEmptyImg src={cartEmptyImg}></CartEmptyImg>
      </CartEmpty> */}
      <CartTableWrapper>
        <CartTableTitle>Giỏ hàng</CartTableTitle>
        <CartTable>
          <CartItem>
            <CartItemThumbNailWrapper>
              <CartItemThumbNail src="https://cdn.divineshop.vn/image/catalog/Anh/Banner/YOUTUBE%20NO%20ADS%206%20THANG.png?hash=1623646577"></CartItemThumbNail>
            </CartItemThumbNailWrapper>
            <CartItemInfo>
              <MainInfo>
                <ProductInfo>
                  <h6 className="text-[16px] font-semibold">
                    Gia hạn Youtube Premium (6 tháng)
                  </h6>
                  <div className="text-sm text-[#374151]">
                    App, Giải trí, Youtube
                  </div>
                </ProductInfo>
                <ProductAmount>
                  <ChangeAmountBtn className="rounded-tl-[4px] rounded-bl-[4px]">
                    -
                  </ChangeAmountBtn>
                  <AmountInput />
                  <ChangeAmountBtn className="rounded-tr-[4px] rounded-br-[4px]">
                    +
                  </ChangeAmountBtn>
                </ProductAmount>
                <ProductPrice>
                  <h2 className="font-semibold text-lg">
                    {' '}
                    <NumberFormat
                      value={230000}
                      displayType={'text'}
                      decimalSeparator=","
                      thousandSeparator="."
                      suffix={'đ'}
                    />
                  </h2>
                  <div className="flex relative sm:flex-row-reverse">
                    <SalePercent className="absolute left-[-60%] sm:static">
                      -70%
                    </SalePercent>
                    <NumberFormat
                      value={3360000}
                      displayType={'text'}
                      decimalSeparator=","
                      thousandSeparator="."
                      suffix={'đ'}
                      className="font-semibold line-through text-sm text-[#6b7280] ml-1"
                    />
                  </div>
                </ProductPrice>
              </MainInfo>
              <SubInfo>
                <Hr />
                <ProductInfoStatus>
                  <ProductStatus>
                    <BoxIcon className="h-[17.5px] w-[17.5px]" />
                    <span>Tình trạng:</span>
                    <span>Còn hàng</span>
                  </ProductStatus>
                  <TrashIcon className="text-[#DC3545] cursor-pointer w-[16px] h-[17.5px]" />
                </ProductInfoStatus>
              </SubInfo>
            </CartItemInfo>
          </CartItem>
          <CartItem>
            <CartItemThumbNailWrapper>
              <CartItemThumbNail src="https://cdn.divineshop.vn/image/catalog/Anh/Banner/YOUTUBE%20NO%20ADS%206%20THANG.png?hash=1623646577"></CartItemThumbNail>
            </CartItemThumbNailWrapper>
            <CartItemInfo>
              <MainInfo>
                <ProductInfo>
                  <h6 className="text-[16px] font-semibold">
                    Gia hạn Youtube Premium (6 tháng)
                  </h6>
                  <div className="text-sm text-[#374151]">
                    App, Giải trí, Youtube
                  </div>
                </ProductInfo>
                <ProductAmount>
                  <ChangeAmountBtn className="rounded-tl-[4px] rounded-bl-[4px]">
                    -
                  </ChangeAmountBtn>
                  <AmountInput />
                  <ChangeAmountBtn className="rounded-tr-[4px] rounded-br-[4px]">
                    +
                  </ChangeAmountBtn>
                </ProductAmount>
                <ProductPrice>
                  <h2 className="font-semibold text-lg">
                    {' '}
                    <NumberFormat
                      value={230000}
                      displayType={'text'}
                      decimalSeparator=","
                      thousandSeparator="."
                      suffix={'đ'}
                    />
                  </h2>
                  <div className="flex relative sm:flex-row-reverse">
                    <SalePercent className="absolute left-[-60%] sm:static">
                      -70%
                    </SalePercent>
                    <NumberFormat
                      value={3360000}
                      displayType={'text'}
                      decimalSeparator=","
                      thousandSeparator="."
                      suffix={'đ'}
                      className="font-semibold line-through text-sm text-[#6b7280] ml-1"
                    />
                  </div>
                </ProductPrice>
              </MainInfo>
              <SubInfo>
                <Hr />
                <ProductInfoStatus>
                  <ProductStatus>
                    <BoxIcon className="h-[17.5px] w-[17.5px]" />
                    <span>Tình trạng:</span>
                    <span>Còn hàng</span>
                  </ProductStatus>
                  <TrashIcon className="text-[#DC3545] cursor-pointer w-[16px] h-[17.5px]" />
                </ProductInfoStatus>
              </SubInfo>
            </CartItemInfo>
          </CartItem>
        </CartTable>
      </CartTableWrapper>
    </CartListWrapper>
  );
};

export default CartList;
