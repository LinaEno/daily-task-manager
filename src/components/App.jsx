import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './AppBar';
import { selectStateChange } from 'redux/auth/authSelectors';
import { Loader } from './Loader/Loader';
// import Form from './hokform/form';
import { RegistrationPage } from 'pages/RegistrationPage';
import ContactsPage from 'pages/ContactPage';
import { AuthRoute } from 'routes';
import GlobalStyles from 'styles/GlobalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';
import { colors } from 'styles/colors';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LogInPage'));

const PageNotFound404 = lazy(() => import('pages/Page404/Page404'));

export function App() {

  const [themeTitle, setThemeTitle] = useState('light')
  
  const normalizedTheme = { ...theme, ...colors[themeTitle] }

  return (
    <>
    <ThemeProvider theme={normalizedTheme}>
      <GlobalStyles />
      <AppBar />
      {/* <RegistrationPage /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route
            path="/contacts"
            element={
              <AuthRoute>
                <ContactsPage />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </Suspense>
      </ThemeProvider>
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
