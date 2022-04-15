import Img from 'designs/Img';
import React from 'react';
import {
  CartControlWrapper,
  DisclosureItem,
  DisclosureList,
  DisclosureTitle,
  Input,
  PaymentItem,
  PaymentList,
  PaymentSubTitle,
  PaymentTitle,
} from './styles';

const CartControl = () => {
  return (
    <CartControlWrapper>
      {/* <DisclosureList>
                <DisclosureItem>
                    <DisclosureTitle>Bạn có mã giới thiệu?</DisclosureTitle>
                    <Input placeholder='Mã giới thiệu' />
                    <SubmitButton>Áp dụng</SubmitButton>
                </DisclosureItem>
            </DisclosureList> */}
      <PaymentList>
        <PaymentTitle>Thanh toán</PaymentTitle>
        <PaymentItem className="bg-[#7CAFF7]">
          <Img
            className="w-[24.5px] h-[24.5px] mx-2"
            name="logo_divine_pure_white.png"
          />{' '}
          Thanh toán bằng số dư
        </PaymentItem>
        <PaymentSubTitle>
          Quét mã. Thanh toán. Không cần nạp tiền.
        </PaymentSubTitle>
        {/* <PaymentItem className="bg-[#7CAFF7]">
          <Img
            className="w-[24.5px] h-[24.5px] mx-2"
            name="logo_divine_pure_white.png"
          />{' '}
          Mua siêu tốc qua Mobile Banking
        </PaymentItem> */}
      </PaymentList>
    </CartControlWrapper>
  );
};

export default CartControl;
