import React from 'react';
import CartControl from './components/CartControl';
import CartList from './components/CartList';
import {
  CartContainer,
  CartContainerLayout,
  CartLayout,
  CartStatusBar,
  CartStatusCircle,
  CartStatusItem,
  CartStroke,
  CartWrapper,
} from './styles';

const Cart = () => {
  return (
    <CartWrapper>
      <CartLayout>
        <CartStatusBar>
          <CartStatusItem>
            <CartStatusCircle />
            Giỏ hàng
          </CartStatusItem>
          <CartStroke />
          <CartStatusItem>
            <CartStatusCircle />
            Xác nhận
          </CartStatusItem>
          <CartStroke />
          <CartStatusItem>
            <CartStatusCircle />
            Thanh toán
          </CartStatusItem>
        </CartStatusBar>
        <CartContainer>
          <CartContainerLayout>
            <CartList />
            <CartControl />
          </CartContainerLayout>
        </CartContainer>
      </CartLayout>
    </CartWrapper>
  );
};

export default Cart;
