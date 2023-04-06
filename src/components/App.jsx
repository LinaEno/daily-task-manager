import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './AppBar';
import { selectStateChange } from 'redux/auth/authSelectors';
import { Loader } from './Loader/Loader';
// import Form from './hokform/form';
import { RegistrationPage } from 'pages/RegistrationPage';
import TasksPage from 'pages/TasksPage';
import { AuthRoute } from 'routes';
import CreateTaskPage from 'pages/CreateTaskPage';

const HomePage = lazy(() => import('pages/HomePage'));
// const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LogInPage'));

const PageNotFound404 = lazy(() => import('pages/Page404'));

export function App() {
  return (
    <>
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
                <TasksPage />
              </AuthRoute>
            }
          />
          <Route
            path="/add"
            element={
              <AuthRoute>
                <CreateTaskPage />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
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
