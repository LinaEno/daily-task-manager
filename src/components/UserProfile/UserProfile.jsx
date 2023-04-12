import useAuth from 'hooks/useAuth';
import React from 'react';
import brush from '../../img/brush.png';
import {
  BottomBox,
  Box,
  Img,
  Signature,
  Title,
  TopBox,
} from './UserProfile.styled';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/auth/authSelectors';

const UserProfile = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Box>
      <TopBox>
        <Title>My Profile</Title>
        <button>
          <img src={brush} alt="brush" />
        </button>
      </TopBox>
      <BottomBox>
        <Img src={currentUser?.photoURL} alt="user" width={50} />
        <Signature>{currentUser.displayName}</Signature>
        <Signature>My mood</Signature>
      </BottomBox>
    </Box>
  );
};

export default UserProfile;
