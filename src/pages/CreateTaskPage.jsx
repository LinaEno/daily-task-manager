import AddTaskSection from 'components/AddTaskSection/AddTaskSection';

import Aside from 'components/Aside/Aside';
import CompletedTaskSection from 'components/CompletedTaskSection/CompletedTaskSection';
import { Header } from 'components/Header/Header';
import { Container } from 'components/Tasks/TasksPage.styled';

const CreateTaskPage = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <AddTaskSection />
          <CompletedTaskSection />
        </Container>
      </main>
      <Aside />
    </>
  );
};

export default CreateTaskPage;
