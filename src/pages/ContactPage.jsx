import { Container, MainTitle, Message, Title } from 'components/App.styled';
import Form from 'components/ContactForm/Form';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { fetchContacts } from 'redux/contacts/operations';
import {
  getError,
  getIsLoading,
  selectContacts,
} from 'redux/contacts/selectors';
// import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { getUserName } from 'redux/auth/authSelectors';
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
