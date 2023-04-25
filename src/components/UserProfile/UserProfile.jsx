import { openModalEditProfile } from 'redux/global/slice';
import brush from '../../img/brush.png';
import {
  Box,
  BottomBox,
  Img,
  Signature,
  Title,
  TopBox,
} from './UserProfile.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/auth/authSelectors';
import { selectEditProfileModal } from 'redux/global/selectors';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import ModalEditUserProfile from '../ModalEditUserProfile/ModalEditUserProfile';
import { useTranslation } from 'react-i18next';

import defaultAvatar from '../../img/default-avatar.png';

const UserProfile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const isModalEditProfileOpen = useSelector(selectEditProfileModal);
  const { t } = useTranslation();

  return (
    <>
      <Box>
        <TopBox>
          <Title>{t('profile.myProfile')}</Title>
          <button onClick={() => dispatch(openModalEditProfile())}>
            <img src={brush} alt="brush" />
          </button>
        </TopBox>
        <BottomBox>
          <Img
            src={currentUser?.photoURL ? currentUser.photoURL : defaultAvatar}
            alt="user"
            width={50}
          />
          <Signature>{currentUser?.displayName}</Signature>
        </BottomBox>
      </Box>
      {isModalEditProfileOpen && (
        <ModalContainer>
          <ModalEditUserProfile />
        </ModalContainer>
      )}
    </>
  );
};

export default UserProfile;
