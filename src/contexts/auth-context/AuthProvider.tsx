import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';

import {
  decodeToken,
  getAccessToken,
  getRefreshToken,
} from '@/services/JWTService';
import { UserInfo } from '@/types/auth';

type AuthProviderProps = {
  children: React.ReactNode;
};

interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  checkAuth: () => Promise<void>;
  user: UserInfo | undefined;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  checkAuth: () => Promise.resolve(),
  user: undefined,
  isLoading: false,
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserInfo | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const checkAuth = async () => {
    try {
      const token = getAccessToken();
      if (token) {
        setIsAuthenticated(true);
        const decoded = decodeToken(token);
        setUser(decoded.payload);
      } else {
        const newToken = await getRefreshToken();
        if (newToken) {
          const decoded = decodeToken(newToken);
          setUser(decoded.payload);
          setIsAuthenticated(true);
        }
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    } finally {
      setIsLoading(false); // Update the loading state after authentication check
    }
  };

  const value = {
    user,
    isAuthenticated,
    setIsAuthenticated,
    checkAuth,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
