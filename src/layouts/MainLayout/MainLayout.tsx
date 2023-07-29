import Header from '@/components/base/Header';
import clsx from 'clsx';
import { useAuthContext } from '@/contexts/auth-context/useAuthContext';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <>
      {isAuthenticated && <Header />}
      <main className={clsx('h-full bg-cover', { 'mt-page': isAuthenticated })}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
