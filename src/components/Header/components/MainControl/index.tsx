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
            className="w-[49px] h-[49px] hover:animate-heartbeat"
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
          // c?? c??ng ???????c kh??ng c?? c??ng k sao v?? ???? check b???ng depend b??n search
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
                placeholder="T??m ki???m s???n ph???m"
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
                      Kh??ng c?? s???n ph???m ph?? h???p v???i t??m ki???m
                    </h3>
                    <p className="my-1">
                      B???n c?? th??? th??? t??? kh??a ????n gi???n h??n ho???c li??n h??? v???i h???
                      tr???.
                    </p>
                  </div>
                )}
                {/* <SearchItem to="/search">
                  Discord Nitro ch??? t??? 63K/th??ng
                </SearchItem>
                <SearchItem to="/search">T??i kho???n GTA 5 khuy???n m??i</SearchItem>
                <SearchItem to="/search">
                  T??i kho???n Amazon Prime Gaming
                </SearchItem>
                <SearchItem to="/search">
                  T??i kho???n Battlefield gi?? r???
                </SearchItem>
                <SearchItem to="/search">Gia h???n Youtube Premium</SearchItem>
                <SearchItem to="/search">Elden Ring (CD Key Steam)</SearchItem>
                <SearchItem to="/search">T??i kho???n Netflix Premium</SearchItem> */}
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
                ????ng nh???p
              </ControlAuthItem>
              <ControlAuthItem>/</ControlAuthItem>
              <ControlAuthItem onClick={showRegisterModelBox}>
                ????ng k??
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
                <BalanceTitle>S??? d?? t??i kho???n</BalanceTitle>
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
                <NavItem to="/user/profile">Qu???n l?? t??i kho???n</NavItem>
                <NavItem to="/user/orders">L???ch s??? ????n h??ng</NavItem>
                <NavItem to="/user/wishlist">S???n ph???m y??u th??ch</NavItem>
                <NavItem onClick={handleLogout} to="#">
                  ????ng xu???t
                </NavItem>
              </NavList>
            </UserInfoWrapper>
          </UserControlWrapper>
        )}
      </AuthControlWrapper>
      <CartWrapper to="/cart">
        <CartIcon className="text-white w-[20px] h-[17.5px]"></CartIcon>
        <CartTitle>Gi??? h??ng</CartTitle>
        <CartAmount>{cartAmountTotal}</CartAmount>
      </CartWrapper>
    </MainControlWrapper>
  );
};

export default MainControl;
