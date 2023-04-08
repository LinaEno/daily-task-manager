import { Container } from 'components/App.styled';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { Loader } from 'components/Loader/Loader';
import { createAccount } from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';

export function RegistrationPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCreateAccount = e => {
    e.preventDefault();
    dispatch(createAccount({ email, password, userName, file }));
    navigate('/');
  };

  // const handleCreateAccount = async e => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     const user = userCredential.user;
  //     const storageRef = ref(storage, `images/${Date.now() + userName}`);
  //     const uploadTask = uploadBytesResumable(storageRef, file);
  //     uploadTask.on(
  //       error => {
  //         console.log(error);
  //       },
  //       async () => {
  //         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  //         await updateProfile(user, {
  //           displayName: userName,
  //           photoURL: downloadURL,
  //         });
  //         await setDoc(doc(db, 'users', user.uid), {
  //           uid: user.uid,
  //           displayName: userName,
  //           email,
  //           photoURL: downloadURL,
  //         });
  //         setLoading(false);
  //         navigate('/');
  //       }
  //     );
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>Registration</h2>
          <form onSubmit={handleCreateAccount}>
            <label>
              Name
              <input
                type="text"
                name="userName"
                onChange={e => setUserName(e.target.value)}
              />
            </label>

            <label>
              E-mail
              <input
                type="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </label>
            <label>
              Add foto
              <input type="file" onChange={e => setFile(e.target.files[0])} />
            </label>
            <button type="submit">Registration</button>
            <p>
              Already have an account? <Link to={'/login'}>Login</Link>
            </p>
          </form>
        </>
      )}
    </Container>
  );
}
