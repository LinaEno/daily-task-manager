import {
  Box,
  ModalBtn,
  ModalForm,
  ModalLabel,
  TextArea,
  Title,
} from 'components/ModalEditTask/ModalEditTask.styled';
import { db, storage } from '../../firebase';
import { collection, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectCurrentUserUid,
} from 'redux/auth/authSelectors';
import { closeModal } from 'redux/global/slice';
import {
  getDownloadURL,
  ref,
  updateMetadata,
  uploadBytes,
} from 'firebase/storage';
import { updateCurrentUser } from 'redux/auth/authSlice';
import { useTranslation } from 'react-i18next';

const ModalEditUserProfile = () => {
  const [updateName, setUpdateName] = useState('');
  const [updatePhotoFile, setUpdatePhotoFile] = useState(null);
  const [, setUpdatePhotoURL] = useState('');
  const currentUserUid = useSelector(selectCurrentUserUid);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const { t } = useTranslation();

  const handleSaveChanges = async event => {
    event.preventDefault();

    let updatedFields = {};

    if (updateName !== '' && updateName !== currentUser.displayName) {
      updatedFields.displayName = updateName;
    }

    if (updatePhotoFile) {
      const storageRef = ref(storage, `images/${currentUserUid}/${Date.now()}`);
      await uploadBytes(storageRef, updatePhotoFile);
      const downloadURL = await getDownloadURL(storageRef);

      await updateMetadata(storageRef, {
        contentType: 'image/jpeg',
      });

      updatedFields.photoURL = downloadURL;
    }

    const taskRef = doc(collection(db, 'users'), currentUserUid);
    await updateDoc(taskRef, updatedFields);
    dispatch(updateCurrentUser(updatedFields));
    dispatch(closeModal());
  };

  const handleFileInputChange = event => {
    setUpdatePhotoFile(event.target.files[0]);
    setUpdatePhotoURL(event.target.value);
  };

  return (
    <Box>
      <ModalForm onSubmit={handleSaveChanges}>
        <Title>{t('editProfile.mainTitle')}</Title>
        <ModalLabel>
        {t('editProfile.name')}
          <TextArea
            type="text"
            name="updateName"
            value={updateName}
            onChange={e => setUpdateName(e.target.value)}
          />
        </ModalLabel>
        <ModalLabel>
        {t('editProfile.description')}
          <input
            type="file"
            name="updatePhotoURL"
            onChange={handleFileInputChange}
          />
        </ModalLabel>
        <ModalBtn type="submit">{t('editProfile.button')}</ModalBtn>
      </ModalForm>
    </Box>
  );
};

export default ModalEditUserProfile;
