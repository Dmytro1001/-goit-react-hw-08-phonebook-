import { useAuth } from 'hooks/useAuth';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import GlobalStyles from './GlobalStyles';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const PhoneBookPage = lazy(() => import('pages/PhoneBook'));

export const App = () => {
  const dispath = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<PhoneBookPage />} />
            }
          />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
