import jwtDecode, { JwtPayload } from 'jwt-decode';
import { axiosCall } from './axiosService';
import { APIResult } from '@/types/service';
import { UserInfo } from '@/types/auth';

interface JWTServerPayload {
  payload: UserInfo;
}

interface RefreshTokenResponse {
  token: string;
}

let accessToken: string | undefined = undefined;
let refreshTokenTimeoutId: number | undefined;

export const getAccessToken = () => {
  return accessToken;
};

export const decodeToken = (token: string) => {
  const decoded = jwtDecode<JwtPayload & JWTServerPayload>(token);
  return decoded;
};

export const setAccessToken = (accessToken: string) => {
  accessToken = accessToken;
  const decoded = jwtDecode<JwtPayload & JWTServerPayload>(accessToken);
  setRefreshTokenTimeOut((decoded.exp as number) - (decoded.iat as number));
};

export const setRefreshTokenTimeOut = (delay: number) => {
  // Send request before token expired 5s
  refreshTokenTimeoutId = window.setTimeout(
    () => {
      getRefreshToken();
    },
    delay * 1000 - 5000,
  );
};

export const getRefreshToken = async () => {
  try {
    const data = await axiosCall.get<APIResult<RefreshTokenResponse>>(
      '/auth/refreshToken',
      {
        withCredentials: true,
      },
    );
    // set new access token
    setAccessToken(data.data.data.token);
    return data.data.data.token;
  } catch (error) {
    console.log('error :>> ', error);
    return undefined;
  }
};
