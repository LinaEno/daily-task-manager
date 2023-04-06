import { ContainerHome } from 'components/App.styled';
import css from './Pen.module.css';
import TasksPage from 'pages/TasksPage';
import useAuth from 'hooks/useAuth';

const HomePage = () => {
  const { currentUser } = useAuth();
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
