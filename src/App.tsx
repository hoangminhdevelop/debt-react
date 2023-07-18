import { RouterProvider } from 'react-router-dom';

// -- Utils --
import { router } from './routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
