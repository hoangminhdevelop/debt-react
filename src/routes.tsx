import { createBrowserRouter } from 'react-router-dom';

// -- Pages --
import MainLayout from './layouts/MainLayout';
import LandingPage from '@/pages/LandingPage';
import Home from '@/pages/Home/Home';
import History from '@/pages/History';
import CheckAuth from './components/auth/CheckAuth/CheckAuth';

export enum Routers {
  Login = '/login',
  Register = '/register',
  Home = '/',
  History = '/history',
}

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: Routers.Login,
        element: <LandingPage />,
      },
      {
        path: Routers.Register,
        element: <LandingPage />,
      },
      {
        path: Routers.Home,
        element: (
          <CheckAuth>
            <Home />
          </CheckAuth>
        ),
      },
      {
        path: `${Routers.History}`,
        element: <History />,
      },
      {
        path: `${Routers.History}/:id`,
        element: <History />,
      },
    ],
  },
]);
