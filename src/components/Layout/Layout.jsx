import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HeaderAppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import Footer from 'components/Footer/Footer';
import { MainContainer } from './Layout.styles';

export const Layout = () => {
  return (
    <>
      <HeaderAppBar />

      <MainContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </MainContainer>

      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
