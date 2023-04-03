import { Container, Title } from 'components/App.styled';
import { Button } from 'components/ContactList/ContactList.styled';
import { Input, Label } from 'components/Filter/Filter.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSignInUser, logIn } from 'redux/auth/authOperation';
import { getUserName, selectUserName } from 'redux/auth/authSelectors';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUserName);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user !== null) navigate('/');
  }, [user, navigate]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authSignInUser({ email, password }));
    setEmail('');
    setPassword('');
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
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Log in</Button>
      </form>
    </Container>
  );
}
