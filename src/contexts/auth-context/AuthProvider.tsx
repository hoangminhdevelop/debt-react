import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
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
  clearAuthenticated: () => void;
  user: UserInfo | undefined;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  user: undefined,
  isLoading: false,
  isAuthenticated: false,
  checkAuth: () => Promise.resolve(),
  clearAuthenticated: () => {},
  setIsAuthenticated: () => {},
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

  const clearAuthenticated = () => {
    setUser(undefined);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value = {
    user,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuth,
    clearAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
