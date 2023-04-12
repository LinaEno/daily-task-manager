import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
// import AppBar from './AppBar';
import { Loader } from './Loader/Loader';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
// import TasksPage from 'components/Tasks/TasksPage';
import { AuthRoute } from 'routes';

import CreateTaskPage from 'pages/CreateTaskPage';

import GlobalStyles from 'styles/GlobalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';
import { colors } from 'styles/colors';

import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LogInPage'));

const PageNotFound404 = lazy(() => import('pages/Page404/Page404'));

export function App() {
  const [themeTitle] = useState('light');

  const normalizedTheme = { ...theme, ...colors[themeTitle] };
  return (
    <>
      <Layout />
      {/* <AppBar /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route
            path="add"
            element={
              <AuthRoute>
                <CreateTaskPage />
              </AuthRoute>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </Suspense>
    </>
  );
}

//  return (
//    <>
//      <AppBar />
//      <RegistrationPage />
//      {/* {stateChange ? (
//         <Loader />
//       ) : (
//         <Suspense fallback={<Loader />}>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="register" element={<RegistrationPage />} />
//             {/* <Route path="register" element={<Form />} /> */}
//      {/* <Route path="login" element={<LoginPage />} />
//             <Route path="*" element={<PageNotFound404 />} />
//           </Routes>
//         </Suspense>
//       )} */}
//    </>
//  );
