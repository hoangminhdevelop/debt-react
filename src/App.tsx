import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// -- Utils --
import { toastConfig } from './configs/toast';
import { router } from './routes';

// -- Style --
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer {...toastConfig} />
    </>
  );
}

export default App;
