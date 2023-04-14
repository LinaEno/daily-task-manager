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

const UserProfile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const isModalEditProfileOpen = useSelector(selectEditProfileModal);

  return (
    <>
      <Box>
        <TopBox>
          <Title>My Profile</Title>
          <button onClick={() => dispatch(openModalEditProfile())}>
            <img src={brush} alt="brush" />
          </button>
        </TopBox>
        <BottomBox>
          <Img src={currentUser?.photoURL} alt="user" width={50} />
          <Signature>{currentUser?.displayName}</Signature>
          {/* <Signature>{currentUser?.mood}</Signature> */}
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
