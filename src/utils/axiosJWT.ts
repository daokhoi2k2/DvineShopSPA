import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { getUserInfoCurrent, refreshTokenServices } from 'services/auth';
import store from "redux/store";
import { authLoginSuccess, authLogout, authLogoutSuccess } from 'redux/actions/auth';


const axiosJWT = axios.create();
export interface IInfoJWT {
  exp: number;
  iat: number;
  role: number;
  username: string;
  _id: string;
}

axiosJWT.interceptors.request.use(
  async (request:any) => {
    const auth: any = store.getState().auth;
    const decodedToken: IInfoJWT = jwt_decode(auth?.user.accessToken);

    request.headers["token"] = "Bearer " + auth.user.accessToken;
    if (decodedToken.exp < Date.now() / 1000) {
      try {
        const res:any = await refreshTokenServices();

        const refreshUser = {
          ...auth.user,
          accessToken: res.data.accessToken
        }

        store.dispatch(authLoginSuccess(refreshUser))
        // Nếu như refresh sẽ bỏ token mới vào request
        request.headers["token"] = "Bearer " + res.data.accessToken;
      } catch (err) {
        // Catch case user remove refreshToken in browser
        // Catch case can't take new accessToken
        store.dispatch(authLogoutSuccess());
        return Promise.reject(err); 
      }
    }

    // request.headers["token"] = "Bearer " + auth.user.accessToken;

    return request;
  },
  (err) => {
    console.log('Lỗi');
    return Promise.reject(err);
  }
);

export default axiosJWT;
