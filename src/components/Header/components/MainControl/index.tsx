import {
  CartIcon,
  MoreIcon,
  PersonIcon,
  PlusIcon,
  SearchIcon,
} from 'designs/icons/Drawer';
import SVG from 'designs/SVG';
import React, { useMemo, useRef, useState } from 'react';
import {
  createSearchParams,
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AuthControlWrapper,
  AuthWrapper,
  Balance,
  BalanceIcon,
  BalanceInfo,
  BalanceMoney,
  BalanceTitle,
  ButtonSearch,
  CartAmount,
  CartTitle,
  CartWrapper,
  ControlAuthItem,
  ControlAuthWrapper,
  IconAuth,
  IconAuthWrapper,
  ImgAvatar,
  InputSearch,
  LogoText,
  LogoWrapper,
  MainControlWrapper,
  NavItem,
  NavList,
  SearchItem,
  SearchList,
  SearchWrapper,
  ShowMore,
  UserAvatar,
  UserControlWrapper,
  UserInfoWrapper,
  UserText,
} from './styles';
import { setAuthModalBox, toggleNavDrawer } from 'redux/actions/config';
import useAuth, { IUseAuth } from 'hooks/useAuth';
import { RootState } from 'redux/reducers';
import VND from 'components/VND';
import { Formik } from 'formik';
import { BaseSyntheticEvent } from 'react';
import { getAutoCompleteListServices } from 'services/product';
import { useEffect } from 'react';

const MainControl: React.FC = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const [autocompleteList, setAutoCompleteList]: any = useState();
  const [isShowAutoComplete, setIsShowAutoComplete] = useState(false);
  const account: any = useAuth();
  const navgiate = useNavigate();
  const timerSearch: any = useRef();
  const autoCompleteEle: any = useRef(null);
  const [searchParams, setSearchParams]: any = useSearchParams();
  // const location = useLocation();
  const searchParamsObject = useMemo(() => {
    return Object.fromEntries([...searchParams]);
  }, [searchParams]);

  const handleToggleNavDrawer = () => {
    dispatch(toggleNavDrawer());
  };

  const cartAmountTotal = useMemo(() => {
    const cartData = Object.values(cartList);
    return cartData.reduce(
      (total, currentValue: any) => total + currentValue.quantity,
      0
    );
  }, [cartList]) as number;

  const showLoginRegisterModalBox = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: 'login',
      })
    );
  };

  const showRegisterModelBox = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: 'register',
      })
    );
  };
  const handleLogout = () => {
    account.logout();
  };

  const handleChangeSearch = (e: BaseSyntheticEvent, formik: any) => {
    clearTimeout(timerSearch.current);
    timerSearch.current = setTimeout(async () => {
      const autoCompleteList = await getAutoCompleteListServices({
        q: e.target.value,
      });

      setAutoCompleteList(autoCompleteList?.data);
    }, 300);
    formik.handleChange(e);
  };

  const handleFocusSearch = async () => {
    setIsShowAutoComplete(true);
    const autoCompleteList = await getAutoCompleteListServices({
      q: '',
    });

    setAutoCompleteList(autoCompleteList?.data);
  };

  useEffect(() => {
    if (isShowAutoComplete) {
      document.onclick = (e: any) => {
        const isClickInsideEle = autoCompleteEle.current.contains(e.target);
        // If click outside will hide auto complete box
        if (!isClickInsideEle) {
          setIsShowAutoComplete(false);
        }
      };
    }

    return () => {
      document.onclick = null;
    };
  }, [isShowAutoComplete]);

  return (
    <MainControlWrapper>
      <Link to="/" className="lg:hidden">
        <LogoWrapper>
          <SVG
            name="logo_divine_pure_white"
            className="w-[49px] h-[49px]"
          ></SVG>
          <LogoText>Divine Shop</LogoText>
        </LogoWrapper>
      </Link>
      {/* Show when screen is tablet or mobile */}
      <ShowMore onClick={handleToggleNavDrawer}>
        <MoreIcon className="w-6 h-9 text-white" />
      </ShowMore>
      {/* End */}

      <Formik
        initialValues={{
          search: searchParamsObject?.q || '',
        }}
        onSubmit={(values) => {
          const redirectTo = `/search`;
          // const currentLink = location.pathname + location.search;
          // có cũng được không có cũng k sao vì đã check bằng depend bên search
          // if(currentLink !== redirectTo) {
          navgiate({
            pathname: redirectTo,
            search: `?${createSearchParams({
              ...searchParamsObject,
              q: values.search,
            })}`,
          });
          // }
        }}
      >
        {(formik) => {
          return (
            <SearchWrapper
              ref={autoCompleteEle}
              onSubmit={formik.handleSubmit}
              className="group"
            >
              <InputSearch
                onChange={(e) => handleChangeSearch(e, formik)}
                className="peer"
                placeholder="Tìm kiếm sản phẩm"
                name="search"
                id="search"
                value={formik.values.search}
                autoComplete="off"
                onMouseDown={handleFocusSearch}
              />

              <ButtonSearch type="submit">
                <SearchIcon className="w-[17.5px] h-[17.5px]" />
              </ButtonSearch>
              <SearchList isShow={isShowAutoComplete}>
                {autocompleteList?.map((item: any) => {
                  return (
                    <SearchItem
                      key={item.name_url}
                      to={`/${item.name_url}`}
                    >
                      {item.name}
                    </SearchItem>
                  );
                })}
                {autocompleteList?.length === 0 && (
                  <div>
                    <h3 className="font-semibold">
                      Không có sản phẩm phù hợp với tìm kiếm
                    </h3>
                    <p className="my-1">
                      Bạn có thể thử từ khóa đơn giản hơn hoặc liên hệ với hỗ
                      trợ.
                    </p>
                  </div>
                )}
                {/* <SearchItem to="/search">
                  Discord Nitro chỉ từ 63K/tháng
                </SearchItem>
                <SearchItem to="/search">Tài khoản GTA 5 khuyễn mãi</SearchItem>
                <SearchItem to="/search">
                  Tài khoản Amazon Prime Gaming
                </SearchItem>
                <SearchItem to="/search">
                  Tài khoản Battlefield giá rẻ
                </SearchItem>
                <SearchItem to="/search">Gia hạn Youtube Premium</SearchItem>
                <SearchItem to="/search">Elden Ring (CD Key Steam)</SearchItem>
                <SearchItem to="/search">Tài khoản Netflix Premium</SearchItem> */}
              </SearchList>
            </SearchWrapper>
          );
        }}
      </Formik>

      <AuthControlWrapper className="group">
        {!account.isAuth ? (
          <AuthWrapper>
            <IconAuthWrapper onClick={showLoginRegisterModalBox}>
              <IconAuth>
                <PersonIcon className="w-[18.5px] h-[18.5px] text-white" />
              </IconAuth>
            </IconAuthWrapper>
            <ControlAuthWrapper>
              <ControlAuthItem onClick={showLoginRegisterModalBox}>
                Đăng nhập
              </ControlAuthItem>
              <ControlAuthItem>/</ControlAuthItem>
              <ControlAuthItem onClick={showRegisterModelBox}>
                Đăng ký
              </ControlAuthItem>
            </ControlAuthWrapper>
          </AuthWrapper>
        ) : (
          <UserControlWrapper>
            <UserAvatar>
              <ImgAvatar
                className="w-[42px] h-[42px]"
                src={
                  account?.accountInfo?.avatar
                    ? `${process.env.REACT_APP_API_URL}/images/avatars/${account?.accountInfo?.avatar}`
                    : require('../../../../assets/images/trend-avatar-1-73987.jpg')
                }
              />
            </UserAvatar>
            <UserText>{account.accountInfo.username}</UserText>
            {account?.memberShip?.info?.text && (
              <ImgAvatar
                className="w-[21px] h-[21px]"
                src={account?.memberShip?.info?.icon}
              />
            )}

            <UserInfoWrapper>
              <Balance>
                <BalanceTitle>Số dư tài khoản</BalanceTitle>
                <BalanceInfo>
                  <BalanceMoney>
                    {<VND value={account.accountInfo.balance} />}
                  </BalanceMoney>
                  <BalanceIcon>
                    <PlusIcon className="w-[17.5px] h-[17.5px] text-[#2579f2]"></PlusIcon>
                  </BalanceIcon>
                </BalanceInfo>
              </Balance>
              <NavList>
                <NavItem to="/user/profile">Quản lý tài khoản</NavItem>
                <NavItem to="/user/orders">Lịch sử đơn hàng</NavItem>
                <NavItem to="/user/wishlist">Sản phẩm yêu thích</NavItem>
                <NavItem onClick={handleLogout} to="#">
                  Đăng xuất
                </NavItem>
              </NavList>
            </UserInfoWrapper>
          </UserControlWrapper>
        )}
      </AuthControlWrapper>
      <CartWrapper to="/cart">
        <CartIcon className="text-white w-[20px] h-[17.5px]"></CartIcon>
        <CartTitle>Giỏ hàng</CartTitle>
        <CartAmount>{cartAmountTotal}</CartAmount>
      </CartWrapper>
    </MainControlWrapper>
  );
};

export default MainControl;
