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

const ModalEditTask = ({ task, getAllActiveTasks }) => {
  const [updateTitle, setUpdateTitle] = useState(task.title);
  const [updateDescription, setUpdateDescription] = useState(task.description);
  const currentUserUid = useSelector(selectCurrentUserUid);
  const dispatch = useDispatch();

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
    await getAllActiveTasks();

    dispatch(closeModal());
  };

  return (
    <Box>
      <ModalForm onSubmit={handleSaveChanges}>
        <Title>Add changes to your task</Title>
        <ModalLabel>
          Title
          <TextArea
            type="text"
            name="updateTitle"
            value={updateTitle}
            onChange={e => setUpdateTitle(e.target.value)}
          />
        </ModalLabel>
        <ModalLabel>
          Description
          <TextArea
            rows="8"
            type="text"
            name="updateDescription"
            value={updateDescription}
            onChange={e => setUpdateDescription(e.target.value)}
          />
        </ModalLabel>
        <ModalBtn type="submit">Edit task</ModalBtn>
      </ModalForm>
    </Box>
  );
};

export default ModalEditTask;
