import { RouterProvider } from 'react-router-dom';

// -- Utils --
import { router } from './routes';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAuthContext } from './contexts/auth-context/useAuthContext';

function App() {
  const { checkAuth } = useAuthContext();
  const { mutate, isLoading } = useMutation({
    mutationKey: ['refresh-token'],
    mutationFn: checkAuth,
  });

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) return <h1>Loading ...</h1>;
  return <RouterProvider router={router} />;
}

export default App;
