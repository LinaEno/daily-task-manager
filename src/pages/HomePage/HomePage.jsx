import { ContainerHome } from 'components/App.styled';
import css from './Pen.module.css';
import TasksPage from 'components/Tasks/TasksPage';
import useAuth from 'hooks/useAuth';
import { selectCurrentUser } from 'redux/auth/authSelectors';
import { useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../firebase';
import { setCurrentUser } from 'redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Default } from 'components/Media/Media';
import { Loader } from 'components/Loader/Loader';
import Aside from 'components/Aside/Aside';
import { Header } from 'components/Header/Header';
import AuthNav from 'components/AuthNavigation/AuthNav';

const HomePage = () => {
  const { currentUser } = useAuth();

  // const currentUser = useSelector(selectCurrentUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const listener = onAuthStateChanged(auth, user => {
  //     if (user === null) return;

  //     const serializableUserData = {
  //       uid: user.uid,
  //       email: user.email,
  //       displayName: user.displayName,
  //       photoURL: user.photoURL,
  //     };

  //     dispatch(setUser({ user: serializableUserData }));
  //     dispatch(setAuthStatus({ status: 'resolved' }));
  //   });

  //   return listener;
  // }, [dispatch]);

  return (
    <>
      {currentUser ? (
        <>
          <Header />
          <TasksPage />
          <Aside />
        </>
      ) : (
        <>
          <AuthNav />
          <ContainerHome>
            <div id={css['rectangle']}>
              Please sign in or sign up to start !<span></span>
            </div>
            <Default>
              <div className={css.pen}>
                <div className={css.bodypen}>
                  <div className={css.whitestripe}></div>
                  <div className={css.blackstripe}></div>
                </div>
                <div className={css.headpen}>
                  <div className={css.mine}></div>
                </div>
              </div>
            </Default>
          </ContainerHome>
        </>
      )}
    </>
  );
};

export default HomePage;
