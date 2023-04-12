import AddTaskSection from 'components/AddTaskSection/AddTaskSection';
import Aside from 'components/Aside/Aside';
import CompletedTaskSection from 'components/CompletedTaskSection/CompletedTaskSection';
import { Header } from 'components/Header/Header';

const CreateTaskPage = () => {
  return (
    <>
      <Header />
      <main>
        <AddTaskSection />
        <CompletedTaskSection />
      </main>
      <Aside />
    </>
  );
};

export default CreateTaskPage;
