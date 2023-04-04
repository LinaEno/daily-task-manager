import { Container, MainTitle } from 'components/App.styled';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'components/context/UserAuthContext';

const ContactPage = () => {
  const { Logout } = useAuth();
  const handleSubmit = e => {
    Logout();
  };
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <button type="submit" onClick={handleSubmit}>
        <NavLink to={'/'}>Exit</NavLink>
      </button>
    </Container>
  );
};

// const ProtectedContactsPage = WithAuthRedirect(ContactPage, '/login');

export default ContactPage;
