import jwtDecode, { JwtPayload } from 'jwt-decode';
import { APIResult } from '@/types/service';
import { UserInfo } from '@/types/auth';
import { SERVER_URL } from '@/constants/common';

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

export const setAccessToken = (accessTokenInput: string) => {
  accessToken = accessTokenInput;
  const decoded = jwtDecode<JwtPayload & JWTServerPayload>(accessTokenInput);
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
    const result = (await fetch(`${SERVER_URL}/auth/refreshToken`, {
      credentials: 'include',
    }).then((res) => res.json())) as APIResult<RefreshTokenResponse>;
    // set new access token
    setAccessToken(result.data.token);
    return result.data.token;
  } catch (error) {
    return undefined;
  }
};

export const clearToken = () => {
  accessToken = undefined;
  window.clearTimeout(refreshTokenTimeoutId);
};
