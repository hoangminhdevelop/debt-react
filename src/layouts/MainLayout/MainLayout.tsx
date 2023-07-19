import { Outlet } from 'react-router-dom';
import Header from '@/components/base/Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header className="h-[55px]" />
      <main className="min-h-[100vh] h-full pt-[55px]  bg-landing bg-cover">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
