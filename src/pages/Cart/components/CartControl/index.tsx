import Img from 'designs/Img';
import useAuth from 'hooks/useAuth';
import { Hr } from 'pages/OrderHistory/styles';
import React, { useMemo } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthModalBox } from 'redux/actions/config';
import { RootState } from 'redux/reducers';
import {
  CartControlWrapper,
  DisclosureItem,
  DisclosureList,
  DisclosureTitle,
  Input,
  PaymentInfo,
  PaymentInfoItem,
  PaymentItem,
  PaymentList,
  PaymentSubTitle,
  PaymentTitle,
} from './styles';

const CartControl = () => {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const auth: any = useAuth();
  const dispatch = useDispatch();

  const totalCartList = useMemo(() => {
    return Object.values(cartList).reduce((total: number, cur: any) => {
      return total + cur.productInfo.price_promotion * cur.quantity;
    }, 0);
  }, [cartList, auth]);

  const calculatorVipHaveDiscounted = useMemo(() => {
    return totalCartList * (auth?.memberShip?.info?.discount / 100);
  }, [cartList, auth, totalCartList]);

  const totalPaymentAfterDiscount = useMemo(() => {
    if (auth.isAuth) {
      return totalCartList - calculatorVipHaveDiscounted;
    } else {
      return totalCartList;
    }
  }, [cartList, auth, totalCartList]);

  const calculatorBalanceNeedRecharge = useMemo(() => {
    if (auth.isAuth) {
      if (totalCartList) {
        const result = totalPaymentAfterDiscount - auth.accountInfo.balance;
        if (result <= 0) {
          return 0;
        }

        return result;
      } else {
        return (
          totalCartList * (1 - auth.memberShip?.info?.discount / 100) -
          auth.accountInfo.balance
        );
      }
    } else {
      return totalCartList;
    }
  }, [cartList, auth, totalCartList]);

  const showLoginRegisterModalBox = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: 'login',
      })
    );
  };

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
        {Object.values(cartList).length !== 0 && (
          <PaymentInfo>
            <PaymentInfoItem>
              <h4>Tổng giá trị sản phẩm</h4>
              <h5 className="font-semibold">
                {
                  <NumberFormat
                    value={totalCartList}
                    displayType={'text'}
                    decimalSeparator=","
                    thousandSeparator="."
                    suffix={'đ'}
                  />
                }
              </h5>
            </PaymentInfoItem>
            {auth.memberShip.info && (
              <PaymentInfoItem>
                <h4>
                  Thưởng tiền khách {auth.memberShip.info.text}(
                  {auth.memberShip.info.discount}%)
                </h4>
                <h5 className="font-semibold">
                  {
                    <NumberFormat
                      value={calculatorVipHaveDiscounted}
                      displayType={'text'}
                      decimalSeparator=","
                      thousandSeparator="."
                      suffix={'đ'}
                    />
                  }
                </h5>
              </PaymentInfoItem>
            )}

            <Hr />
            <PaymentInfoItem>
              <h4>Tổng giá trị phải thanh toán</h4>
              <h5 className="font-semibold">
                {
                  <NumberFormat
                    value={totalPaymentAfterDiscount}
                    displayType={'text'}
                    decimalSeparator=","
                    thousandSeparator="."
                    suffix={'đ'}
                  />
                }
              </h5>
            </PaymentInfoItem>

            <PaymentInfoItem>
              <h4>Số dư hiện tại</h4>
              <h5 className="font-semibold">
                {
                  <NumberFormat
                    value={auth?.accountInfo?.balance || 0}
                    displayType={'text'}
                    decimalSeparator=","
                    thousandSeparator="."
                    suffix={'đ'}
                  />
                }
              </h5>
            </PaymentInfoItem>
            <PaymentInfoItem>
              <h4>Số tiền cần nạp thêm</h4>
              <h5 className="font-semibold">
                <NumberFormat
                  value={calculatorBalanceNeedRecharge}
                  displayType={'text'}
                  decimalSeparator=","
                  thousandSeparator="."
                  suffix={'đ'}
                />
              </h5>
            </PaymentInfoItem>
          </PaymentInfo>
        )}
        {auth.isAuth ? (
          <PaymentItem
            disabled={calculatorBalanceNeedRecharge === 0 ? false : true}
            className="bg-[#2579F2] hover:opacity-90 cursor-pointer disabled:bg-[#7CAFF7] disabled:cursor-default"
          >
            <Img
              className="w-[24.5px] h-[24.5px] mx-2"
              name="logo_divine_pure_white.png"
            />
            Thanh toán bằng số dư
          </PaymentItem>
        ) : (
          <PaymentItem
            onClick={showLoginRegisterModalBox}
            className="bg-[#2579F2] hover:opacity-90"
          >
            <Img
              className="w-[24.5px] h-[24.5px] mx-2"
              name="logo_divine_pure_white.png"
            />
            Đăng nhập để thanh toán
          </PaymentItem>
        )}

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
