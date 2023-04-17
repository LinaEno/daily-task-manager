import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { AuthRoute } from 'routes';

import CreateTaskPage from 'pages/CreateTaskPage';

import GlobalStyles from 'styles/GlobalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';
import { colors } from 'styles/colors';

import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/global/selectors';
import { onAuthStateChanged } from 'firebase/auth';
import { setCurrentUser } from 'redux/auth/authSlice';
import { auth } from '../firebase';
import ProfilePage from 'pages/ProfilePage';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LogInPage'));

const PageNotFound404 = lazy(() => import('pages/Page404/Page404'));

export function App() {
  const themeTitle = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = onAuthStateChanged(auth, user => {
      if (user === null) return;

      const serializableUser = {
        displayName: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL,
        email: user.email,
      };
      dispatch(setCurrentUser(serializableUser));
    });

    return listener;
  }, [dispatch]);

  const normalizedTheme = { ...theme, ...colors[themeTitle] };
  return (
    <ThemeProvider theme={normalizedTheme}>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <HomePage />
              </AuthRoute>
            }
          />
          <Route path="register" element={<RegistrationPage />} />
          <Route
            path="add"
            element={
              <AuthRoute>
                <CreateTaskPage />
              </AuthRoute>
            }
          />
          <Route
            path="profile"
            element={
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}
