import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HeaderAppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 16px' }}>
      <HeaderAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
