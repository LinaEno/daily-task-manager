import Aside from 'components/Aside/Aside';
import { Header } from 'components/Header/Header';
import { Mobile } from 'components/Media/Media';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate();

  useEffect(() => {
    if (isNotMobile) navigate('/');
  }, [isNotMobile, navigate]);

  return (
    <Mobile>
      <Header />
      <Aside />
    </Mobile>
  );
};

export default ProfilePage;
