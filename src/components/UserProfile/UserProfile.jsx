import useAuth from 'hooks/useAuth';
import React from 'react';

const UserProfile = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <img src={currentUser?.photoURL} alt="user" width={50} />
      <p>{currentUser.displayName}</p>
    </div>
  );
};

export default UserProfile;
