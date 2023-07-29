import {
  decodeToken,
  getAccessToken,
  getRefreshToken,
} from '@/services/JWTService';
import { UserInfo } from '@/types/auth';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type AuthProviderProps = {
  children: React.ReactNode;
};

interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  checkAuth: () => Promise<void>;
  user: UserInfo | undefined;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  checkAuth: () => Promise.resolve(),
  user: undefined,
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserInfo | undefined>(undefined);

  const checkAuth = async () => {
    const token = getAccessToken();

    if (token) {
      setIsAuthenticated(true);
      const decoded = decodeToken(token);
      setUser(decoded.payload);
    } else {
      const newToken = await getRefreshToken();

      if (newToken) {
        setIsAuthenticated(true);
        const decoded = decodeToken(newToken);
        setUser(decoded.payload);
      }
    }
  };

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    checkAuth,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
