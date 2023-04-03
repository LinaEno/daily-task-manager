import { Container, Title } from 'components/App.styled';
import { Button } from 'components/ContactList/ContactList.styled';
import { Input, Label } from 'components/Filter/Filter.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSignUpUser } from 'redux/auth/authOperation';
import { selectUserName } from 'redux/auth/authSelectors';
import * as firebase from 'firebase';

const initialState = {
  email: '',
  password: '',
  userName: '',
};

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUserName);

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (user !== null) navigate('/');
  }, [user, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(authSignUpUser(state));
    dispatch(firebase.createUserWithEmailAndPassword(state));
    setState(initialState);
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
            onChange={value =>
              setState(prevState => ({ ...prevState, userName: value }))
            }
          />
        </Label>

        <Label>
          E-mail
          <Input
            type="email"
            name="email"
            onChange={value =>
              setState(prevState => ({ ...prevState, email: value }))
            }
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            onChange={value =>
              setState(prevState => ({ ...prevState, password: value }))
            }
          />
        </Label>

        <Button type="submit">Registration</Button>
      </form>
    </Container>
  );
}
