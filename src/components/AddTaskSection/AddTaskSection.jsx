import {
  AddBtn,
  AddForm,
  AddTitle,
  ChackInput,
  ChackName,
  Check,
  CheckName,
  LabelBox,
  Section,
  TextArea,
  Title,
} from 'components/AddTaskSection/CreateTaskPage.styled';
import { db } from '../../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';

import { CheckBox, CheckBoxAddForm } from 'components/Tasks/TasksPage.styled';

import { requestAllTasks } from 'redux/auth/authOperation';

const AddTaskSection = () => {
  const dispatch = useDispatch();
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
      dispatch(requestAllTasks());
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
    <Section>
      <AddTitle>Add your task</AddTitle>
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
          <CheckBoxAddForm>
            <input
              id="completed"
              type="checkbox"
              name="completed"
              checked={completed}
              onChange={e => setCompleted(e.target.checked)}
            />
            <label htmlFor="completed"></label>
            <CheckName>Completed</CheckName>
          </CheckBoxAddForm>

          <AddBtn type="submit">Add task</AddBtn>
        </Check>
      </AddForm>
    </Section>
  );
};

export default AddTaskSection;
