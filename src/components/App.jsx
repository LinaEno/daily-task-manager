import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { authStateChangeUser } from 'redux/auth/authOperation';
import AppBar from './AppBar';
import { toast } from 'react-toastify';
import { selectStateChange } from 'redux/auth/authSelectors';
import { Loader } from './Loader/Loader';
// import Form from './hokform/form';

const HomePage = lazy(() => import('pages/HomePage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LogInPage'));

const PageNotFound404 = lazy(() => import('pages/Page404'));

export function App() {
  // const error = useSelector(getError);
  const dispatch = useDispatch();
  const stateChange = useSelector(selectStateChange);

  // useEffect(() => {
  //   dispatch(authStateChangeUser());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (error) {
  //     toast.error('Oops. Something went wrong 😭');
  //   }
  // }, [error]);

  return (
    <>
      <AppBar />
      {stateChange ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={<RegistrationPage />} />
            {/* <Route path="register" element={<Form />} /> */}
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<PageNotFound404 />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
}
