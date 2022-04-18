import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from 'redux/actions/auth';
import { RootState } from 'redux/reducers';
import { IUserInfo } from 'typings/Auth';

export interface IUseAuth {
  isAuth: boolean;
  accountInfo: IUserInfo | any;
  logout: () => void;
  memberShip: any;
}

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [accountInfo, setAccountInfo] = useState({});
  const user: any = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setAccountInfo(user.userInfo);
    setIsAuth(Object.keys(user).length ? true : false);
  }, [user]);

  const logout = () => {
    dispatch(authLogout());
  };

  const memberShip = {
    id: user?.userInfo?.membership,
    info: (() => {
      switch (user?.userInfo?.membership) {
        case 1:
          return {
            text: 'Vip Đồng',
            discount: 0,
            icon: require('../assets/images/bronze.png'),
          };
        case 2:
          return {
            text: 'Vip Bạc',
            discount: 1,
            icon: require('../assets/images/silver.png'),
          };
        case 3:
          return {
            text: 'Vip Vàng',
            discount: 2,
            icon: require('../assets/images/gold.png'),
          };
        case 4:
          return {
            text: 'Vip Kim Cương',
            discount: 3,
            icon: require('../assets/images/diamond.png'),
          };
        default: 
          return {
            discount: 0
          }
      }
    })(),
  };

  // useEffect
  return { isAuth, accountInfo, logout, isAuthAdmin: user?.userInfo?.role, memberShip };
};

export default useAuth;
