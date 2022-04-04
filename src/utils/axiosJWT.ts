import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { getUserInfoCurrent, refreshTokenServices } from 'services/auth';

const axiosJWT = axios.create();

interface IInfoJWT {
  exp: number;
  iat: number;
  role: number;
  username: string;
  _id: string;
}

axiosJWT.interceptors.request.use(
  async (request) => {
    const accessToken: any = localStorage.getItem('accessToken');
    const refreshToken: any = localStorage.getItem('refreshToken');
    const decodedToken: IInfoJWT = jwt_decode(accessToken);

    if (decodedToken.exp < Date.now() / 1000) {
      const data = await refreshTokenServices(refreshToken);
      data.accessToken && localStorage.setItem('accessToken', data.accessToken);
      data.refreshToken &&
        localStorage.setItem('refreshToken', data.refreshToken);
    }

    return request;
  },
  (err) => {
    console.log('Lỗi');
    return Promise.reject(err);
  }
);

export default axiosJWT;
