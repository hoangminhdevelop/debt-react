import { axiosCall, axiosPrivateCall } from './axiosService';
import { UserInfo } from '@/types/auth';
import { APIResult } from '@/types/service';
import { AxiosResponse } from 'axios';
import { setAccessToken } from './JWTService';

export interface LoginInput {
  username: string;
  password: string;
}
interface LoginResult {
  token: string;
  user: UserInfo;
}

interface RefreshToken {
  token: string;
}

export async function register(input: any) {
  const { data } = await axiosCall().post<APIResult<UserInfo>>(
    '/auth/register',
    input,
  );
  return data;
}

export async function login(input: LoginInput) {
  const { data } = await axiosCall().post<APIResult<LoginResult>>(
    '/auth/login',
    input,
    {
      withCredentials: true,
    },
  );

  setAccessToken(data.data.token);

  return data;
}

export async function refreshToken() {
  return await axiosCall().get<AxiosResponse<RefreshToken>>(
    '/auth/refreshToken',
  );
}

export function logout() {
  return axiosPrivateCall().post('/auth/logout', {}, { withCredentials: true });
}
