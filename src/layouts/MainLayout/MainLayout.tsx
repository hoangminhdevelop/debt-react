import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      {/* <Header className="h-[55px]" /> */}
      <main className="h-full bg-cover">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
