import { ContainerHome } from 'components/App.styled';
import TasksPage from 'components/Tasks/TasksPage';
// import useAuth from 'hooks/useAuth';
import { selectCurrentUser } from 'redux/auth/authSelectors';
// import { useEffect } from 'react';
// import { onAuthStateChanged } from '@firebase/auth';
// import { auth } from '../../firebase';
// import { setCurrentUser, setLoading } from 'redux/auth/authSlice';
import { useSelector } from 'react-redux';
import { Default } from 'components/Media/Media';
// import { Loader } from 'components/Loader/Loader';
import Aside from 'components/Aside/Aside';
import { Header } from 'components/Header/Header';
import AuthNav from 'components/AuthNavigation/AuthNav';

import css from './Pen.module.css';

const HomePage = () => {
  // const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <>
        <Header />
        <TasksPage />
        <Aside />
      </>
      {/* {currentUser ? (
        <>
          <Header />
          <TasksPage />
          <Aside />
        </>
      ) : (
        <>
          <AuthNav />
          <ContainerHome>
            <div id={css.rectangle}>
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
    </> */}
    </>
  );
};

export default HomePage;
