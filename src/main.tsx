import { QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import AuthProvider from './contexts/auth-context/AuthProvider.tsx';

import './styles/reset.css';
import './styles/tailwind.css';
import React from 'react';
import queryClient from './react-query/queryClient.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
    ,
  </React.StrictMode>,
);
