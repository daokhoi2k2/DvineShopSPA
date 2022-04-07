import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from 'redux/actions/auth';
import { RootState } from 'redux/reducers';
import { IUserInfo } from 'typings/Auth';

export interface IUseAuth {
  isAuth: boolean;
  accountInfo: IUserInfo | any;
  logout: () => void;
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

  // useEffect
  return { isAuth, accountInfo, logout, isAuthAdmin: user?.userInfo?.role };
};

export default useAuth;
