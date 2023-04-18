import {
  AddBtn,
  AddForm,
  AddTitle,
  Check,
  CheckName,
  LabelBox,
  Section,
  TextArea,
} from 'components/AddTaskSection/CreateTaskPage.styled';
import { db } from '../../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';

import { CheckBoxAddForm } from 'components/Tasks/TasksPage.styled';

import { requestAllTasks } from 'redux/auth/authOperation';
import { useTranslation } from 'react-i18next';

const AddTaskSection = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const { t } = useTranslation();

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
      <AddTitle>{t('addTask.mainTitle')}</AddTitle>
      <AddForm onSubmit={handleCreateTask}>
        <LabelBox>
        {t('addTask.title')}
          <TextArea
            type="text"
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
        </LabelBox>
        <LabelBox>
        {t('addTask.description')}
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
            <CheckName>{t('addTask.completed')}</CheckName>
           </CheckBoxAddForm>
          <AddBtn type="submit">{t('addTask.button')}</AddBtn>
        </Check>
      </AddForm>
    </Section>
  );
};

export default AddTaskSection;
