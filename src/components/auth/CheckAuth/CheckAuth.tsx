import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/auth-context/useAuthContext';
import { Routers } from '@/routes';

type CheckAuthProps = {
  children: React.ReactNode;
};

const CheckAuth = ({ children }: CheckAuthProps) => {
  const { isAuthenticated } = useAuthContext();
  if (isAuthenticated) {
    return <>{children}</>;
  }
  return <Navigate to={Routers.LandingPage} />;
};

export default CheckAuth;
