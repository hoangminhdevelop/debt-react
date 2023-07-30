import { axiosCall } from './axiosService';
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
class AuthService {
  async login(input: LoginInput) {
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

  async refreshToken() {
    return await axiosCall().get<AxiosResponse<RefreshToken>>(
      '/auth/refreshToken',
    );
  }
}

const authService = new AuthService();
export default authService;
