import AddTaskSection from 'components/AddTaskSection/AddTaskSection';
import CompletedTaskSection from 'components/CompletedTaskSection/CompletedTaskSection';

const CreateTaskPage = () => {
  return (
    <main>
      <AddTaskSection />
      <CompletedTaskSection />
    </main>
  );
};

export default CreateTaskPage;
