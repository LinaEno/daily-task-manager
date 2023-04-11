import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import {
  AddBtn,
  AddForm,
  ChackInput,
  ChackName,
  Check,
  CheckBox,
  LabelBox,
  Section,
  TextArea,
} from './CreateTaskPage.styled';

const CreateTaskPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const currentUserUid = useSelector(selectCurrentUserUid);

  const handleCreateTask = async event => {
    event.preventDefault();
    const task = {
      title,
      description,
      completed,
    };
    try {
      const tasksRef = collection(db, `users/${currentUserUid}/tasks`);
      const newTaskRef = doc(tasksRef);
      const newTaskId = newTaskRef.id;
      const newTask = { ...task, id: newTaskId };
      await setDoc(newTaskRef, newTask);
      reset();
      event.target.reset();
      return newTask;
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    setTitle('');
    setDescription('');
  };

  return (

<main>
    <Section>
      <h3>Add your task</h3>
      <AddForm onSubmit={handleCreateTask}>
        <LabelBox>
          Title
          <TextArea
            type="text"
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
        </LabelBox>
        <LabelBox>
          Description
          <TextArea
            rows="8"
            type="text"
            name="description"
            onChange={e => setDescription(e.target.value)}
          />
        </LabelBox>
        <Check>
          <ChackInput>
            <input
              type="checkbox"
              name="completed"
              checked={completed}
              onChange={e => setCompleted(e.target.checked)}
            />
            <ChackName htmlFor="completed">Completed</ChackName>
          </ChackInput>

          <AddBtn type="submit">Add task</AddBtn>
        </Check>
      </AddForm>
    </Section>
     </main>

  );
};

export default CreateTaskPage;
