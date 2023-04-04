import { Container, Title } from 'components/App.styled';
import { Button } from 'components/ContactList/ContactList.styled';
import { Input, Label } from 'components/Filter/Filter.styled';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { login, registration } from 'redux/auth/authSlice';
import { useAuth } from 'components/context/UserAuthContext';

export default function LoginPage() {
  const { Login } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        // dispatch(
        //   registration({
        //     email: user.email,
        //     userId: user.uid,
        //     token: user.accessToken,
        //   })
        // );
        navigate('/contacts');
      })
      .catch(e => console.log(e));
  };

  const handleSubmit = e => {
    e.preventDefault();
    Login(email, password);
    // {
    //   currentUser && setState(initialState);
    // }
  };

  return (
    <Container>
      <Title>Log in</Title>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          E-mail
          <Input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Label>

        <Button type="submit">
          <NavLink to={'/contacts'}>Log in</NavLink>
        </Button>
      </form>
    </Container>
  );
}
