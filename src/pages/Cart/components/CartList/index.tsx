import { SalePercent } from 'components/ProductCard/styles';
import { BoxIcon, TrashIconV2 } from 'designs/icons/Drawer';
import React, { BaseSyntheticEvent, SyntheticEvent, useRef } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { IProductCart } from 'redux/reducers/cart';
import { StatusText } from 'pages/ProductDetail/components/ProductMainInfo/styles';
import { Link } from 'react-router-dom';
import {
  decreaseQuantityCartItem,
  increaseQuantityCartItem,
  removeCartItem,
  setQuantityCartItem,
} from 'redux/actions/cart';
import { toast } from 'react-toastify';
import VND from 'components/VND';

const CartList = () => {
  const cartList: IProductCart[] = Object.values(
    useSelector((state: RootState) => state.cart.cartList)
  );

  const timer: any = useRef(null);

  const dispatch = useDispatch();

  const handleRemoveCartItem = (e: BaseSyntheticEvent) => {
    const _id = e.currentTarget.dataset.id;

    dispatch(removeCartItem(_id));
  };

  const handleShowConfirmBox = (e: BaseSyntheticEvent) => {
    const confirmBox = e.currentTarget.parentElement.childNodes[1];
    confirmBox.classList.remove('hidden');
    confirmBox.classList.add('block');
    setTimeout(() => {
      confirmBox.classList.remove('block');
      confirmBox.classList.add('hidden');
    }, 2000);
  };

  const fakeLoading = () => {
    timer.current = setTimeout(() => {
      const fakeLoading = new Promise((resolve) => {
        setTimeout(() => {
          resolve(1);
        }, 500);
      });

      toast.promise(fakeLoading, {
        pending: 'Đang cập nhật giỏ hàng',
        success: 'Cập nhật giỏ hàng thành công',
        error: 'Mục này không tồn tại trong giỏ hàng',
      });
    }, 500);
  };

  const handleIncreaseAmount = (e: BaseSyntheticEvent) => {
    const _id = e.currentTarget.dataset.id;
    clearTimeout(timer.current);
    dispatch(increaseQuantityCartItem(_id));
    // if()

    fakeLoading();
  };

  const handleDecreaseAmount = (e: BaseSyntheticEvent) => {
    const _id = e.currentTarget.dataset.id;
    const quantity = e.currentTarget.dataset.quantity;
    if (!(quantity <= 1)) {
      clearTimeout(timer.current);
      dispatch(decreaseQuantityCartItem(_id));
      fakeLoading();
    }
  };

  const handleChangeAmount = (e: BaseSyntheticEvent) => {
    const _id = e.currentTarget.dataset.id;
    let quantity = e.target.value;
    console.log(quantity);
    if (quantity <= 0 || isNaN(quantity) || !quantity) {
      quantity = 1;
    } else {
      clearTimeout(timer.current);

      dispatch(
        setQuantityCartItem({
          _id,
          quantity,
        })
      );

      fakeLoading();
    }
  };

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
    <CartListWrapper>
      {Object.values(cartList).length ? (
        <CartTableWrapper>
          <CartTableTitle>Giỏ hàng</CartTableTitle>
          <CartTable>
            {cartList.map((cartItem) => {
              const { productInfo, quantity } = cartItem;
              const haveSale =
                productInfo?.price_promotion &&
                productInfo?.price_promotion !== productInfo?.price &&
                true;

              return (
                <CartItem key={productInfo._id}>
                  <CartItemThumbNailWrapper to={`/${productInfo?.name_url}`}>
                    <CartItemThumbNail
                      src={`${process.env.REACT_APP_API_URL}/${productInfo.thumb_nail}`}
                    ></CartItemThumbNail>
                  </CartItemThumbNailWrapper>
                  <CartItemInfo>
                    <MainInfo>
                      <ProductInfo>
                        <Link
                          to={`/${productInfo?.name_url}`}
                          className="text-[16px] font-semibold hover:underline cursor-pointer"
                        >
                          {productInfo.name}
                        </Link>
                        <Link
                          to={`/search?category_id=${productInfo?.categoryId._id}`}
                          className="block text-sm text-[#374151] hover:underline cursor-pointer"
                        >
                          {productInfo.categoryId.title}
                        </Link>
                      </ProductInfo>
                      <ProductAmount>
                        <ChangeAmountBtn
                          onClick={handleDecreaseAmount}
                          data-id={productInfo?._id}
                          className="rounded-tl-[4px] rounded-bl-[4px]"
                          data-quantity={quantity}
                        >
                          -
                        </ChangeAmountBtn>
                        <AmountInput
                          value={quantity}
                          onChange={handleChangeAmount}
                          data-id={productInfo?._id}
                        />
                        <ChangeAmountBtn
                          onClick={handleIncreaseAmount}
                          data-id={productInfo?._id}
                          className="rounded-tr-[4px] rounded-br-[4px]"
                        >
                          +
                        </ChangeAmountBtn>
                      </ProductAmount>
                      <ProductPrice>
                        <h2 className="font-semibold text-lg">
                          <VND value={productInfo.price_promotion} />
                        </h2>
                        <div
                          className={
                            'flex relative sm:flex-row-reverse ' +
                            (!haveSale && 'hidden')
                          }
                        >
                          <SalePercent className="absolute left-[-45px] sm:static">
                            -
                            {handleSalePercent(
                              productInfo.price_promotion,
                              productInfo.price
                            )}
                            %
                          </SalePercent>
                          <VND
                            value={productInfo.price}
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
                          <StatusText success={productInfo?.status}>
                            {productInfo?.status ? 'Còn hàng' : 'Hết hàng'}
                          </StatusText>
                        </ProductStatus>
                        <div
                          onClick={handleRemoveCartItem}
                          data-id={productInfo?._id}
                          className="text-sm ml-auto mr-2 text-[#DC3545] hidden cursor-pointer"
                        >
                          Xác nhận xóa
                        </div>
                        <TrashIconV2
                          className="text-[#DC3545] cursor-pointer w-[16px] h-[17.5px]"
                          onClick={handleShowConfirmBox}
                        />
                      </ProductInfoStatus>
                    </SubInfo>
                  </CartItemInfo>
                </CartItem>
              );
            })}
          </CartTable>
        </CartTableWrapper>
      ) : (
        <CartEmpty>
          <CartEmptyTitle>Giỏ hàng trống!</CartEmptyTitle>
          <CartEmptySubTitle>
            Thêm sản phẩm vào giỏ và quay lại trang này để thanh toán nha bạn{' '}
            {'<3'}
          </CartEmptySubTitle>
          <CartEmptyImg src={cartEmptyImg}></CartEmptyImg>
        </CartEmpty>
      )}
    </CartListWrapper>
  );
};

export default CartList;
