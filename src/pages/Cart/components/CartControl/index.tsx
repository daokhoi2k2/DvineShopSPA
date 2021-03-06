import VND from 'components/VND';
import Img from 'designs/Img';
import useAuth from 'hooks/useAuth';
import { Hr } from 'pages/OrderHistory/styles';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setAuthModalBox } from 'redux/actions/config';
import { createOrder } from 'redux/actions/order';
import { RootState } from 'redux/reducers';
import { addOrderServices } from 'services/order';
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

  const handlePayment = () => {
    const outOfStockList: string[] = [];
    const entries = Object.values(cartList).map((item: any) => {
      const {
        _id,
      } = item.productInfo;

      // Add product is out of stock to list
      if(!item.productInfo.status) {
        outOfStockList.push(item.productInfo.name)
      }
      
      const orderItem = {
        productId: _id,
        quantity: item.quantity,
      };

      return orderItem;
    });
    
    if(outOfStockList.length > 0) {
      toast.error(`S???n ph???m ${outOfStockList.join(", ")} ???? h???t h??ng`)
      return;
    }
    
    const newOrder = {
      email: auth?.accountInfo?.email,
      entries,
    };

    dispatch(createOrder(newOrder));
  };

  return (
    <CartControlWrapper>
      {/* <DisclosureList>
                <DisclosureItem>
                    <DisclosureTitle>B???n c?? m?? gi???i thi???u?</DisclosureTitle>
                    <Input placeholder='M?? gi???i thi???u' />
                    <SubmitButton>??p d???ng</SubmitButton>
                </DisclosureItem>
            </DisclosureList> */}
      <PaymentList>
        <PaymentTitle>Thanh to??n</PaymentTitle>
        {Object.values(cartList).length !== 0 && (
          <PaymentInfo>
            <PaymentInfoItem>
              <h4>T???ng gi?? tr??? s???n ph???m</h4>
              <h5 className="font-semibold">{<VND value={totalCartList} />}</h5>
            </PaymentInfoItem>
            {auth.memberShip.info && (
              <PaymentInfoItem>
                <h4>
                  Th?????ng ti???n kh??ch {auth.memberShip.info.text} (
                  {auth.memberShip.info.discount}%)
                </h4>
                <h5 className="font-semibold">
                  {<VND value={calculatorVipHaveDiscounted} />}
                </h5>
              </PaymentInfoItem>
            )}

            <Hr />
            <PaymentInfoItem>
              <h4>T???ng gi?? tr??? ph???i thanh to??n</h4>
              <h5 className="font-semibold">
                {<VND value={totalPaymentAfterDiscount} />}
              </h5>
            </PaymentInfoItem>

            <PaymentInfoItem>
              <h4>S??? d?? hi???n t???i</h4>
              <h5 className="font-semibold">
                {<VND value={auth?.accountInfo?.balance || 0} />}
              </h5>
            </PaymentInfoItem>
            <PaymentInfoItem>
              <h4>S??? ti???n c???n n???p th??m</h4>
              <h5 className="font-semibold">
                <VND value={calculatorBalanceNeedRecharge} />
              </h5>
            </PaymentInfoItem>
          </PaymentInfo>
        )}
        {auth.isAuth ? (
          <PaymentItem
            disabled={calculatorBalanceNeedRecharge === 0 ? false : true}
            className="bg-[#2579F2] hover:opacity-90 cursor-pointer disabled:bg-[#7CAFF7] disabled:cursor-default"
            onClick={handlePayment}
          >
            <Img
              className="w-[24.5px] h-[24.5px] mx-2"
              name="logo_divine_pure_white.png"
            />
            Thanh to??n b???ng s??? d??
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
            ????ng nh???p ????? thanh to??n
          </PaymentItem>
        )}

        <PaymentSubTitle>
          Qu??t m??. Thanh to??n. Kh??ng c???n n???p ti???n.
        </PaymentSubTitle>
        {/* <PaymentItem className="bg-[#7CAFF7]">
          <Img
            className="w-[24.5px] h-[24.5px] mx-2"
            name="logo_divine_pure_white.png"
          />{' '}
          Mua si??u t???c qua Mobile Banking
        </PaymentItem> */}
      </PaymentList>
    </CartControlWrapper>
  );
};

export default CartControl;
