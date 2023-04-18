import TasksPage from 'components/Tasks/TasksPage';
import { Default } from 'components/Media/Media';
import Aside from 'components/Aside/Aside';
import { Header } from 'components/Header/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <TasksPage />
      <Default>
        <Aside />
      </Default>
    </>
  );
};

export default HomePage;
