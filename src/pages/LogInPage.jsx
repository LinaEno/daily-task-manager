import { Container } from 'components/App.styled';

import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      // alert('Success');
      navigate('/contacts');
    } catch (error) {
      setLoading(false);
      // alert('Something went wrong');
    }
    navigate('/contacts');
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

            <button type="submit">
              <NavLink to={'/contacts'}>Log in</NavLink>
            </button>
          </form>
        </>
      )}
    </Container>
  );
}
