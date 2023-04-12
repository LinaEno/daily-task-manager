import { Container } from 'components/App.styled';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { login } from 'redux/auth/authOperation';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/auth/authSelectors';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    navigate('/');
  };

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
