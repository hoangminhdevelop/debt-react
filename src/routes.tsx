import { createBrowserRouter } from 'react-router-dom';

// -- Pages --
import MainLayout from './layouts/MainLayout';
import LandingPage from '@/pages/LandingPage';
import Home from '@/pages/Home/Home';
import History from '@/pages/History';

export enum Routers {
  LandingPage = '/',
  Home = '/home',
  History = '/history',
  Detail = '/detail',
}

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: Routers.LandingPage,
        element: <LandingPage />,
      },
      {
        path: Routers.Home,
        element: <Home />,
      },
      {
        path: Routers.History,
        element: <History />,
      },
      {
        path: Routers.Detail,
        element: (
          <>
            <h1>detail</h1>
          </>
        ),
      },
    ],
  },
]);
