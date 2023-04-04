import { useContext, createContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth, db } from '../../firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const userContext = createContext();

export const useAuth = () => useContext(userContext);

const UserAuthContext = ({ children }) => {
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) setCurrentUser(user);
    });
  }, [currentUser]);

  const SignUp = async (email, password, userName) => {
    setError('');
    createUserWithEmailAndPassword(auth, email, password).then(async result => {
      try {
        const docRef = await addDoc(collection(db, 'users'), {
          userName,
          userId: `${result.user.uid}`,
        });
        console.log(docRef.id);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const Logout = () => {
    return signOut(auth);
  };

  const value = {
    SignUp,
    error,
    currentUser,
    Login,
    Logout,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserAuthContext;
