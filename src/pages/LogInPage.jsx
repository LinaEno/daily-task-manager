import { Container } from 'components/App.styled';

import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { login } from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { loginTaskState } from 'redux/tasks/tasksSlice';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    dispatch(loginTaskState());

    navigate('/');
  };
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     const userCredential = signInWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;
  //     navigate('/');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>Log in</h2>
          <form onSubmit={handleSubmit} autoComplete="off">
            <label>
              E-mail
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </label>

            <button type="submit">Log in</button>
            <p>
              Have not an account? <Link to={'/register'}>Create account</Link>
            </p>
          </form>
        </>
      )}
    </Container>
  );
}
