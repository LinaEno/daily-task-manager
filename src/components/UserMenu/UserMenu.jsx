import { ContainerWelcome, WelcomeMessage } from 'components/App.styled';
import { Button } from 'components/ContactList/ContactList.styled';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import useAuth from 'hooks/useAuth';
import { NavLink, useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    signOut(auth)
      .then(() => {
        // alert('Logout');
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <ContainerWelcome>
      <WelcomeMessage>Welcome, {currentUser.displayName}</WelcomeMessage>
      <img src={currentUser?.photoURL} alt="user" width={50} />
      <NavLink to="add">Add</NavLink>
      <Button type="button" onClick={handleSubmit}>
        Logout
      </Button>
    </ContainerWelcome>
  );
};

//   return (
//     <ContainerWelcome>
//       <WelcomeMessage>Welcome, {currentUser.displayName}</WelcomeMessage>
//       <img src={currentUser?.photoURL} alt="user" width={50} />
//       <Button type="button" onClick={handleSubmit}>
//         Logout
//       </Button>
//     </ContainerWelcome>
//   );
