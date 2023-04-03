import { Container, Title } from 'components/App.styled';
import { Button } from 'components/ContactList/ContactList.styled';
import { Input, Label } from 'components/Filter/Filter.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName } from '../redux/auth/authSelectors';
import { useAuth } from 'components/context/UserAuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export function RegistrationPage() {
  const { error, SignUp, currentUser } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email);
  console.log(password);

  const [userName, setUserName] = useState('');

  // useEffect(() => {
  //   if (user !== null) navigate('/');
  // }, [user, navigate]);

  const handleCreateAccount = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, userName)
      .then(userCredential => {
        console.log(userCredential);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    SignUp(email, password, userName);
    // {
    //   currentUser && setState(initialState);
    // }
  };

  return (
    <Container>
      <Title>Registration</Title>

      <form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <Input
            type="text"
            name="userName"
            onChange={e => setUserName(e.target.value)}
          />
        </Label>

        <Label>
          E-mail
          <Input
            type="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </Label>

        <Button type="submit">Registration</Button>
      </form>
    </Container>
  );
}
