import { db } from '../../firebase';
import { collection, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';
import { closeModal } from 'redux/global/slice';
import {
  Box,
  ModalBtn,
  ModalForm,
  ModalLabel,
  TextArea,
  Title,
} from './ModalEditTask.styled';
import { requestAllTasks } from 'redux/auth/authOperation';
import { useTranslation } from 'react-i18next';

const ModalEditTask = ({ task }) => {
  const [updateTitle, setUpdateTitle] = useState(task.title);
  const [updateDescription, setUpdateDescription] = useState(task.description);
  const currentUserUid = useSelector(selectCurrentUserUid);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSaveChanges = async event => {
    event.preventDefault();

    const updatedFields = {
      title: updateTitle,
      description: updateDescription,
    };

    const taskRef = doc(
      collection(db, 'users', currentUserUid, 'tasks'),
      task.id
    );
    await updateDoc(taskRef, updatedFields);

    dispatch(requestAllTasks());

    dispatch(closeModal());
  };

  return (
    <Box>
      <ModalForm onSubmit={handleSaveChanges}>
        <Title>{t('editTask.mainTitle')}</Title>
        <ModalLabel>
        {t('editTask.title')}
          <TextArea
            type="text"
            name="updateTitle"
            value={updateTitle}
            onChange={e => setUpdateTitle(e.target.value)}
          />
        </ModalLabel>
        <ModalLabel>
        {t('editTask.description')}
          <TextArea
            rows="8"
            type="text"
            name="updateDescription"
            value={updateDescription}
            onChange={e => setUpdateDescription(e.target.value)}
          />
        </ModalLabel>
        <ModalBtn type="submit">{t('editTask.button')}</ModalBtn>
      </ModalForm>
    </Box>
  );
};

export default ModalEditTask;
