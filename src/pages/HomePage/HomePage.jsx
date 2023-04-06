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
          <div class={css.pen}>
            <div class={css.bodypen}>
              <div class={css.whitestripe}></div>
              <div class={css.blackstripe}></div>
            </div>
            <div class={css.headpen}>
              <div class={css.mine}></div>
            </div>
          </div>
        </ContainerHome>
      )}
    </>
  );
};

export default HomePage;
