import { ContainerWelcome } from 'components/App.styled';
import { Button } from 'components/ContactList/ContactList.styled';
import useAuth from 'hooks/useAuth';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetTasksState } from 'redux/tasks/tasksSlice';
import { logout } from 'redux/auth/authOperation';

export const UserMenu = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    dispatch(resetTasksState());
    navigate('/');
  }

  return (
    <ContainerWelcome>
      <p>Welcome, {currentUser.displayName}</p>
      <img src={currentUser?.photoURL} alt="user" width={50} />
      <NavLink to="/">Tasks</NavLink>
      <NavLink to="/add">Add</NavLink>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </ContainerWelcome>
  );
};
