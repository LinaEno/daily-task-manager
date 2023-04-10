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

const HomePage = () => {
  const { currentUser } = useAuth();

  // const currentUser = useSelector(selectCurrentUser);
  // const dispatch = useDispatch();

  return (
    <>
      {currentUser ? (
        <TasksPage />
      ) : (
        <ContainerHome>
          <div id={css['rectangle']}>
            Please sign in or sign up to start!
            <span></span>
          </div>
          <div className={css.pen}>
            <div className={css.bodypen}>
              <div className={css.whitestripe}></div>
              <div className={css.blackstripe}></div>
            </div>
            <div className={css.headpen}>
              <div className={css.mine}></div>
            </div>
          </div>
        </ContainerHome>
      )}
    </>
  );
};

export default HomePage;
