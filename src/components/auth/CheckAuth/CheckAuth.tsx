import React, { useEffect } from 'react';
import { useAuthContext } from '@/contexts/auth-context/useAuthContext';
import { Navigate } from 'react-router-dom';
import { Routers } from '@/routes';

type CheckAuthProps = {
  children: React.ReactNode;
};

const CheckAuth = ({ children }: CheckAuthProps) => {
  const { isAuthenticated, isLoading, checkAuth } = useAuthContext();

  useEffect(() => {
    if (isLoading) return;
    checkAuth(); // Trigger the authentication check on component mount
  }, []);

  if (!isAuthenticated && !isLoading) {
    return <Navigate to={Routers.Login} />;
  } else {
    return <>{children}</>;
  }
};

export default CheckAuth;
